<template>
  <div
    ref="contentMain"
    class="p-comments-content-main w-100 flex-column flex-wrap  d-rtl tabs__content"
  >
    <div class="w-100">
      <base-button no-box-shadow no-hover base-color="yellow" classes="comments-add__comment" @button-clicked="showModalAddComment">
        {{ getTextByTextKey("product_submit_comment") }}
      </base-button>
    </div>

    <div class="w-100">
      <div class="user-comments__empty-container" v-show="userComments === 0">
        <img
          src="/empty-pages/empty-comment-list.svg"
          :alt="getTextByTextKey('product_comment_empty')"
        />
        <span class="user-comments__empty">
          {{ getTextByTextKey("product_comment_empty") }}
        </span>
      </div>
      <div
        class="w-100 flex-wrap p-comment-content-items"
        :key="updateSelected"
      >
        <div
          v-for="(data, index) in commentsData"
          :key="data.id"
          class="w-100 flex-wrap p-comment-content-item"
        >
          <div
            class="flex-wrap w-100 p-comment-content-wrapper align-items-start"
          >
            <div class="w-100">
              <div class="w-100 flex-wrap  p-comments-content-header ">
                <div class="p-comments__header-holder">
                  <div class="p-comments__title">
                    {{ data.Title }}
                  </div>
                  <div class="p-comments-idea__title">
                    <span
                      v-show="data.Suggest === 1"
                      class="ideas-title idea-good"
                    >
                      {{ getTextByTextKey("commnets_suggestion_buy") }}
                    </span>
                    <span
                      v-show="data.Suggest === 2"
                      class="ideas-title idea-bad"
                    >
                      {{ getTextByTextKey("comments_not_enough_experience") }}
                    </span>
                    <span
                      v-show="data.Suggest === 3"
                      class="ideas-title idea-mid"
                    >
                      {{
                        getTextByTextKey("comments_enough_experience_moment")
                      }}
                    </span>
                    <div class="p-comments__state-mobile">
                      <base-signs type="confirmed" v-if="typeof data.confirmLeave === 'undefined'" :title="data.dateConvert"></base-signs>
                      <base-signs type="confirmed" v-if="data.confirmLeave === 1"></base-signs>
                      <base-signs type="waiting" v-if="data.confirmLeave === 2"></base-signs>
                    </div>
                  </div>
                </div>

                <div class="p-comments__state-desktop">
                  <base-signs type="confirmed" v-if="typeof data.confirmLeave === 'undefined'" :title="data.dateConvert"></base-signs>
                  <base-signs type="confirmed" v-if="data.confirmLeave === 1"></base-signs>
                  <base-signs type="waiting" v-if="data.confirmLeave === 2"></base-signs>
                </div>
              </div>
              <!-- ==================================================================================== -->
              <div class="w-100 flex-column p-comment-content-data-main">
                <div class="w-100 p-commentedproduct-main text-right">
                  <div class="p-commented-default-main">

                    <div
                      class="p-commented-default-pic p-commented-product-img"
                    ></div>
                  </div>
                  <div class="p-product-content-data">
                    <span class="p-product-content-text-data ">
                      {{ data.Firstname }}
                      {{ data.Lastname }}
                    </span>
                    <div class="p-product-content-rating-data ">
                      <div class="stars-outer">
                        <div
                          class="stars-inner"
                          :style="{
                            width: (data.Rate * 100) / 5 + '%',
                          }"
                        ></div>
                      </div>
                      <span class="rate-counter"> {{ data.Rate }}</span>
                      <span class="rate-count">
                        {{ getTextByTextKey("commnets_star_from_text") }} 5
                      </span>
                    </div>
                    <!-- ====================== -->
                  </div>
                </div>
                <div
                  :class="{
                    'full-description__active': data.selected,
                  }"
                >
                  <div ref="test" class="p-commentedproduct-description">
                    {{ data.Body }}
                  </div>

                  <span
                    v-if="data.showCircle"
                    @click="showMoreDescription(data)"
                    alt=""
                    class="more__arrow-icon"
                  >
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div @click="moreCommentMobile" class="comment_more" style="">
          <div class="comment_main">
            <h3 class="comment__more-title">
              {{ getTextByTextKey("product_more") }} 5
            </h3>
            <span class="comment-more__icon"></span>
          </div>
        </div>
        <base-pagination class="comment-pagination" @pageChanged="pageChanged"></base-pagination>
      </div>
    </div>
<!--    Add Comment Modal-->
    <transition name="backdrop-scale">
      <div class="backdrop" v-if="showModal"></div>
    </transition>
    <transition :name="modalAnimation">
      <modal-add-comment
        v-if="showModal"
        :modal-mode="modalAnimation"
        class="comment__modal--data"
        @submit-data="submitData"
        :comments-data="commentsData"
        @close-modal="modalClose"
      ></modal-add-comment>
    </transition>

  </div>
</template>

<script>
import modalAddComment from "./modalAddComment";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    commentsData: { type: [Object, Array], default: {} },
  },

  components: {
    modalAddComment,
  },

  data() {
    return {
      passChangeIsActive: false,
      dataEditAddress: {},
      updateSelected: 0,
      userComments: -1,
      showModal: false,
      windowWidth: 0,
    };
  },
  computed: {
    closeModalAddComment() {
      return this.$store.getters["product/single/single/closeModalAddComment"]
    },
    modalAnimation() {
      return "scale";
    }
  },
  watch: {
    closeModalAddComment() {
      this.showModal = false;
    },
  },

  created() {
    this.userComments = Object.values(this.commentsData).length;
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    setTimeout(() => {
      const el = document.querySelectorAll(".p-commentedproduct-description");
      var elementList = el;
      for (var idx = 0; idx < elementList.length; idx++) {
        if (this.isEllipsisActive(elementList.item(idx))) {
          elementList.item(idx).className =
            elementList.item(idx).className + " ellipsis-active";
          elementList.item(idx).title = elementList.item(idx).innerHTML;
        }
      }
    }, 100);
  },

  methods: {
    getTextByTextKey,
    showMoreDescription(data) {
      this.commentsData.map((content) => {
        if (content.id == data.id) {
          content.selected = !content.selected;
        }
      });
      // this.updateSelected++;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    modalClose() {
      this.showModal = false;
    },
    showModalDeleteProduct(data) {
      this.$emit("show-modal-delete-product", data);
    },

    closeModal() {
      this.dataEditAddress = {};
      this.passChangeIsActive = false;
    },
    pageChanged () {
      this.$refs.contentMain.scrollIntoView({ behavior: "smooth" });
    },

    moreCommentMobile() {
      this.$emit("more-comment-mobile", 1);
    },

    isEllipsisActive(e) {
      return e.offsetWidth < e.scrollWidth;
    },

    showModalAddComment() {
      this.showModal = true;
    },

    submitData(data) {
      this.$emit("submit-data", data);
    },
  },
};
</script>

<style lang="scss" scoped>
@include scale-modal-animation();
@include backdrop-scale-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.user-comments__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: toRem(223);
  background: $white;
  border-radius: toRem(10);
}
.user-comments__empty-container img {
  opacity: 1;
}
.user-comments__empty {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: toRem(37);
}
.p-comments-content-main {
  padding-right: toRem(24);
  padding-left: toRem(24);
}
.p-comment-content-btn-add-main {
  @include display-flex();
}
.p-comment-content-btn-data {
  margin-top: toRem(45);
  margin-bottom: toRem(38);
  font-size: toRem(16);
}

.p-comment-content-item {
  @include display-flex();
  flex-direction: column;
  border: toRem(1) solid $light-gray;
  border-radius: toRem(10);
  height: fit-content;
  margin-bottom: toRem(24);
}
.p-commented-product-img {
  width: toRem(50);
  height: toRem(50);
}
/* ============================== */
.stars-outer {
  position: relative;
  display: inline-block;
}

.stars-inner {
  position: absolute;
  bottom: toRem(4.7);
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  @include display-flex();
  flex-direction: row-reverse;
}

.stars-outer::before {
  content: "\e825 \e825 \e825 \e825 \e825";
  @include font-icon__limoo();
  font-weight: 400;
  font-size: toRem(16);
  color: $light-gray;
  letter-spacing: toRem(2);
}

.stars-inner::before {
  content: "\e825 \e825 \e825 \e825 \e825";
  @include font-icon__limoo();
  font-weight: 400;
  font-size: toRem(16);
  color: $yellow;
  letter-spacing: toRem(2);
}
.rate-count,
.rate-counter {
  color: $gray;
  font-size: toRem(14);
  line-height: 140.62%;
}
.rate-counter {
  margin-right: toRem(8);
}
/* ////////////////////////////// */

.p-comments-content-header {
  @include display-flex();
  flex-direction: row;
  justify-content: space-between;
  padding-right: toRem(26);
  padding-left: toRem(26);
  border-bottom: toRem(1) solid $chinese_white;
}
.p-comments__header-holder {
  @include display-flex();
  flex-direction: column;
}
.p-comments__title {
  @include display-flex();
  justify-self: flex-start;
  font-size: toRem(16);
  font-family: inherit;
  line-height: 140.62%;
  color: $black-topic;
  margin-top: toRem(16);
  text-decoration: none;
}
.p-comments-idea__title {
  @include display-flex();
  justify-self: flex-start;
  justify-content: space-between;
  margin-top: toRem(8);
  margin-bottom: toRem(16);
}
.ideas-title {
  font-size: toRem(16);
  font-family: inherit;
  line-height: 140.62%;
}
.idea-good {
  color: $btn__green;
}
.idea-bad {
  color: $red-logout;
}
.idea-mid {
  color: $code-request;
}
.p-comments__state-desktop {
  margin: auto 0;
}
.p-comments__state-mobile {
  display: none;
}
/* =========================== */
.p-favorite-product-item-icon-delete::before {
  @include font-icon__limoo();
  font-size: toRem(16);
  content: "\e826";
  color: $input-border;
}
.p-comments-content-header {
  background: $white;
  height: toRem(86);
  border-top-left-radius: toRem(10);
  border-top-right-radius: toRem(10);
}
.p-comments-content-header-icon {
  width: toRem(23);
  height: toRem(23);
}
.p-comments-content-header-item {
  @include display-flex();
  margin-left: toRem(85);
}
.p-comments-content-header-item-title {
  font-family: inherit;
  font-size: toRem(16);
  margin-right: toRem(10);
  color: $black-topic;
  font-weight: 400;
  text-align: right;
}
.p-comment-content-data {
  @include display-flex();
  padding-right: toRem(27);
  padding-left: toRem(27);
}
.p-product-content-data {
  @include display-flex();
  flex-direction: column;
  margin-right: toRem(16);
}
.p-product-content-text-data {
  font-family: inherit;
  font-size: toRem(16);
  color: $black-topic;
  font-weight: 400;

  /* */
}
.p-product-content-rating-data {
  margin-top: toRem(16);
}
.p-commentedproduct-description {
  color: $dark_gray;
  font-family: inherit;
  text-align: right;
  font-size: toRem(16);
  margin: toRem(24) toRem(24) toRem(24) toRem(96);
  line-height: 2.3em;
  max-width: 880px;
  min-height: toRem(80);
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.p-commentedproduct-main {
  @include display-flex();
  margin-top: toRem(20);
  margin-right: toRem(24);
  align-items: center;
}
.p-commentedproduct__time {
  @include display-flex();
  align-self: center;
  margin-right: toRem(24);
  font-size: toRem(14);
  line-height: 140.62%;
  color: $gray;
}
.p-comment-content-data-btns {
  @include display-flex();
  justify-content: space-between;
  padding-left: toRem(16);
  height: toRem(77);
  align-items: flex-start;
}
.p-comment-content-btn-edit {
  width: toRem(130);
}
.p-comment-content-wrapper {
  @include display-flex();
}
.p-comment-content-data-main {
  @include display-flex();
  background-color: $white;
  border-bottom-left-radius: toRem(10);
  border-bottom-right-radius: toRem(10);
}
.p-comment-content-edit-icon {
  width: toRem(16);
  height: toRem(16);
}
.p-comments-content-header-item-desktop {
  align-items: flex-start;
}
.p-comment-content-item-mobile {
  display: none;
}
.tabs__content {
  position: absolute;
}
.p-commented-default-main {
  width: toRem(50);
  height: toRem(50);
}
.p-commented-default-pic {
  background: $chinese_white;
  border-radius: toRem(100);
  justify-content: center;
  @include display-flex();
  align-items: center;
}
.tab__more {
  font-size: toRem(16);
}
.mobile--arrow::after {
  font-size: toRem(14);
}
.tab__more-main {
  @include display-flex();
  justify-content: flex-end;
}
.tab__more-icon {
  margin-right: toRem(7);
}

.p-commented-product-img::before {
  @include font-icon__limoo();
  font-size: toRem(29);
  content: "\e823";
  color: $gray;
}
.more__arrow-icon {
  width: toRem(22);
  height: toRem(22);
  @include display-flex();
  justify-content: flex-end;
  margin-right: auto;
  margin-left: toRem(18);
  margin-bottom: toRem(24);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.full-description__active .more__arrow-icon {
  transform: rotate(-180deg);
  transition: all 0.3s ease-in-out;
}
.more__arrow-icon::after {
  content: "\e800";
  font-size: toRem(20);
  margin-top: 1px;
  transition: all 0.3s ease-in-out;
  @include font-icon__arrow();
  color: $input-border;
}
.full-description__active .p-commentedproduct-description {
  height: auto;
  -webkit-line-clamp: inherit;
  max-height: inherit;
}
.comment-more__icon::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(13);
  margin-right: toRem(8);
  color: $gray;
}
.comment_more {
  display: none;
  justify-content: center;
  margin-top: toRem(20);
  margin-bottom: toRem(20);
}
.comment__more-title {
  font-size: toRem(13);
  color: $dark_gray;
  font-weight: 300;
  color: $gray;
}
.comment-more__icon {
  position: relative;
  top: toRem(-5);
  transform: rotate(-85deg);
}
.comment_main {
  @include display-flex();
}
.p-comment__circle {
  position: relative;
}
.p-comment__full {
  display: none;
}
.full-description__active .p-comment__full {
  @include display-flex();
}
.full-description__active .p-comment__limit {
  display: none;
}
.comments-add__comment {
  width: toRem(270);
  height: toRem(57);
  font-family: inherit;
  margin-bottom: 1.5rem;
}

@include xl {
  .p-comments-content-header-item {
    margin-left: 10%;
  }
  .p-comments-content-header-item:last-of-type {
    margin-left: 0;
  }
  .p-commentedproduct-description {
    -webkit-line-clamp: 4;
  }
}

@include lg {
  .p-comments-content-header-item {
    margin-left: 6%;
  }
}

@include md {
  .user-comments__empty-container {
    padding-top: toRem(24);
    height: 280px;
  }
  .p-comments-content-header-item {
    margin-left: 10%;
  }
  .p-comments-content-main {
  }
  .p-commentedproduct-description {
    font-size: toRem(14);
  }
  .comment-pagination::v-deep {
    .right-arrow,
    .left-arrow,
    .pagination-items {
      width: toRem(40);
      height: toRem(40);
    }
  }
}

@include sm {
  .p-comments-content-main {
    padding-right: toRem(11);
    padding-left: toRem(11);
  }
  .comments-add__comment {
    width: toRem(259);
    @include display-flex();
    align-items: center;
    justify-content: center;
    margin: 1.5rem auto;
    height: toRem(47);
  }
  .tabs__content {
    padding-top: 0 !important;
  }
}

@include xs {
  .comment_more {
    @include display-flex();
  }
  .comment-pagination::v-deep {
    &.pagination-container {
      display: none;
    }
  }
  .user-comments__empty-container {
    height: toRem(252);
    padding-top: toRem(24);
  }
  .user-comments__empty-container img {
    margin: 0 auto;
    height: toRem(74);
    width: toRem(74);
  }
  .user-comments__empty {
    font-size: toRem(14);
    margin-top: toRem(24);
  }
  .p-comments__state-desktop {
    display: none;
  }
  .p-comments__state-mobile {
    display: block;
  }
  .p-comments__title,
  .ideas-title {
    font-size: toRem(13);
  }
  .stars-outer::before,
  .stars-inner::before {
    font-size: toRem(10);
  }

  .rate-count,
  .rate-counter {
    font-size: toRem(13);
  }
  .p-comments-content-header {
    flex-flow: column;
    height: auto;
    background: $white;
    padding-right: toRem(11);
    padding-left: toRem(19);
  }
  .p-comment-content-item {
    height: auto;
    margin-bottom: toRem(8);
  }
  /* 00000000000000000000000000 */
  .p-commentedproduct-description {
    font-size: toRem(13);
    margin: toRem(16) toRem(11) 0 toRem(37);
    overflow: hidden;
    text-overflow: ellipsis;
    text-justify: inter-word;
    -webkit-line-clamp: 3;
  }
  .show-more-description {
    @include display-flex();
    justify-content: flex-end;
    margin-left: toRem(12);
    margin-bottom: toRem(22);
  }
  .p-comments-content-header-item {
    margin-left: 0;
    width: 100%;
    margin-top: toRem(19);
  }
  .p-comments-content-header-item-title {
    font-size: toRem(14);
  }
  .p-product-content-data {
    margin-top: toRem(7);
    margin-right: toRem(8);
  }
  .p-product-content-text-data {
    font-size: toRem(14);
  }
  .p-product-content-rating-data {
    margin-top: toRem(8);
  }
  .p-commentedproduct__time {
    margin-right: toRem(11);
    font-size: toRem(13);
  }
  .p-comment-content-data-btns {
    border-top: toRem(1) solid $light-gray;
    padding-top: toRem(16);
    margin-bottom: toRem(16);
    height: auto;
  }
  .p-favorite-product-btn-delete {
    width: toRem(37);
    height: toRem(37);
  }
  .p-comment-content-btn-edit {
    background: $yellow;
    border-radius: toRem(10);
    height: toRem(36);
    width: toRem(36);
  }
  .p-comment-content-btn-delete {
    margin-right: toRem(16);
  }
  .p-comments-content-header-icon {
    width: toRem(18);
    height: toRem(18);
  }
  .p-comment-content-item-desktop {
    display: none;
  }
  .p-comment-content-item-mobile::before {
    @include font-icon__limoo();
    content: "\e80e";
    color: $white;
  }
  .p-comment-content-item-mobile {
    display: flex;
  }
  .p-commentedproduct-main {
    margin-right: toRem(6);
    margin-top: toRem(16);
    padding-left: toRem(19);
  }

  .p-favorite-product-btn-main {
    margin-bottom: 0;
  }
  .p-comment-content-item:last-of-type {
    margin-bottom: 0;
  }
  .p-commented-product-img {
    width: toRem(46);
    height: toRem(46);
  }
  .p-commented-product-img::before {
    font-size: toRem(22);
  }
  .comments-add__comment {
    width: 72%;
  }
}

@include xxxs {
  .p-comments__title,
  .ideas-title {
    font-size: toRem(12);
    text-align: right;
  }
  .p-product-content-data {
    margin-top: toRem(3);
    margin-right: toRem(10);
  }
  .p-product-content-text-data {
    font-size: toRem(13);
  }
  .p-product-content-rating-data {
    margin-top: toRem(5);
  }
  .p-comments-content-header {
    padding-left: toRem(11);
  }
  .p-comments-idea__title {
    margin-bottom: toRem(10);
  }
  .p-commentedproduct-description {
    margin: toRem(14) toRem(11) toRem(10) toRem(27);
  }
}
</style>
