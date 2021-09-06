<template>
  <div class="p-comments-content-main w-100 flex-column flex-wrap  d-rtl">

    <div class="user-comments__empty-container" v-show="userComments == 0">
      <img
        src="/empty-pages/empty-comment-list.svg"
        :alt="getTextByTextKey('comments_not_write_comment')"
      />
      <span class="user-comments__empty">
        {{ getTextByTextKey("comments_not_write_comment") }}
      </span>
    </div>
    <div class="w-100 flex-wrap p-comment-content-items" :key="updateSelected">
      <div
        v-for="data in commentsData"
        :key="data.id"
        class="w-100 flex-wrap p-comment-content-item"
      >
        <div
          class="flex-wrap w-100 p-comment-content-wrapper align-items-start"
        >
          <div class="w-100">
            <div class="w-100 flex-wrap  p-comments-content-header ">
              <div class="p-comments__header-holder">
                <NuxtLink class="p-comments__title" :to="'/product/' + data.id">
                  {{ data.commentTitle }}
                </NuxtLink>
                <div class="p-comments-idea__title">
                  <span
                    v-show="data.idea == 'good'"
                    class="ideas-title idea-good"
                  >
                    {{ getTextByTextKey("commnets_suggestion_buy") }}
                  </span>
                  <span
                    v-show="data.idea == 'bad'"
                    class="ideas-title idea-bad"
                  >
                    {{ getTextByTextKey("comments_not_enough_experience") }}
                  </span>

                  <span
                    v-show="data.idea == 'mid'"
                    class="ideas-title idea-mid"
                  >
                    {{ getTextByTextKey("comments_enough_experience_moment") }}
                  </span>

                  <div class="p-comments__state-mobile">
                    <base-signs type="confirmed" v-if="data.state === 'accepted'"></base-signs>
                    <base-signs type="waiting" v-if="data.state === 'acceptting'"></base-signs>
                  </div>
                </div>
              </div>

              <div class="p-comments__state-desktop">
                <base-signs type="confirmed" v-if="data.state === 'accepted'"></base-signs>
                <base-signs type="waiting" v-if="data.state === 'acceptting'"></base-signs>
              </div>
            </div>
            <!-- ==================================================================================== -->
            <div class="w-100 flex-column p-comment-content-data-main">
              <div class="w-100 p-commentedproduct-main text-right">
                <img :src="data.img" class="p-commented-product-img" alt="" />
                <div class="p-product-content-data">
                  <span class="p-product-content-text-data ">
                    {{ data.productTitle }}
                  </span>
                  <div class="p-product-content-rating-data ">
                    <div class="stars-outer">
                      <div
                        class="stars-inner"
                        :style="{
                          width: (data.rate * 100) / 5 + '%',
                        }"
                      ></div>
                    </div>
                    <span class="rate-counter"> {{ data.rate }}</span>
                    <span class="rate-count">
                      {{ getTextByTextKey("commnets_star_from_text") }}
                      5
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
                <div class="p-commentedproduct-description">
                  {{ data.description }}
                </div>
                <span
                  @click="showMoreDescription(data)"
                  class="show-more-description"
                ></span>
              </div>
              <div class="p-comment-content-data-btns w-100">
                <div class="p-commentedproduct__time">
                  {{ data.commentTime }}
                </div>
                <div class="p-favorite-product-btn-main">
                    <base-button
                      no-box-shadow
                      base-color="yellow"
                      mode="secondary-outline"
                      classes="p-product-btn p-comment-content-btn-edit"
                    >
                      <span
                        class="p-favorite-product-btn-link p-comment-content-item-desktop"
                      >
                        {{ getTextByTextKey("public_edit") }}
                      </span>

                      <span
                        class="p-favorite-product-btn-link p-comment-content-item-mobile "
                      >
                      </span>
                    </base-button>
                    <base-button
                      @button-clicked="showModalDeleteProduct(data)"
                      classes="p-favorite-product-btn-delete p-comment-content-btn-delete"
                      no-box-shadow
                      base-color="light"
                    >
                    <span class="p-favorite-product-item-icon-delete"></span>
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
  },
  components: {},
  data() {
    return {
      dataEditAddress: {},
      updateSelected: 0,
      userComments: -1,
    };
  },
  created() {
    this.userComments = Object.values(this.commentsData).length;
  },
  computed: {
    commentsData() {
      return this.$store.getters["profile/comments/comments/commentsData"];
    }
  },

  methods: {
    getTextByTextKey,
    showMoreDescription(data) {
      this.$store.dispatch('profile/comments/comments/showMoreDescription', data);
      this.updateSelected++;
    },
    showModalDeleteProduct(data) {
      this.$emit("show-modal-delete-product", data);
    },
    closeModal() {
      this.dataEditAddress = {};
    },

    // editAddress(data) {
    //     this.dataEditAddress = data;
    // }
  },
};
</script>

<style lang="scss" scoped>
.user-comments__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: toRem(233);
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
  width: toRem(80);
  height: toRem(80);
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
}
.p-comments__header-holder {
  @include display-flex();
  flex-direction: column;
}
.p-comments__title {
  /* border: 1px solid blue; */
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
  color: $gray-3;
}
.p-comments-content-header {
  background: $white;
  border-bottom: toRem(1) solid $light-gray;
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
  margin-top: toRem(10);
  margin-right: toRem(16);
}
.p-product-content-text-data {
  font-family: inherit;
  font-size: toRem(16);
  color: $black-topic;
  font-weight: 400;

}
.p-product-content-rating-data {
  margin-top: toRem(16);
}
.p-commentedproduct-description {
  color: $black-topic;
  font-family: inherit;
  text-align: right;
  font-size: toRem(16);
  line-height: 140.62%;
  margin: toRem(24) toRem(24) toRem(16) toRem(96);
}
.p-commentedproduct-main {
  @include display-flex();
  margin-top: toRem(20);
  margin-right: toRem(24);
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
  width: toRem(130)!important;
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
.p-product-btn {
  width: toRem(150);
  height: toRem(47);
  font-family: inherit;
  transition: all 120ms ease-in;
}
@include xl {
  .p-comments-content-header-item {
    margin-left: 10%;
  }
  .p-comments-content-header-item:last-of-type {
    margin-left: 0;
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
    height: toRem(280);
  }
  .p-comments-content-header-item {
    margin-left: 10%;
  }
  .p-comments-content-main {
    padding: 0;
  }
  .p-commentedproduct-description {
    font-size: toRem(14);
  }
}

@include sm {
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
    border: none;
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
    background: $white;
    height: auto;
    margin-bottom: toRem(8);
  }
  /* 00000000000000000000000000 */
  .p-commentedproduct-description {
    font-size: toRem(13);
    margin: toRem(24) toRem(11) 0 toRem(37);
    height: toRem(30);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: justify;
    text-justify: inter-word;
  }
  .full-description__active .p-commentedproduct-description {
    white-space: normal;
    overflow: visible;
    height: fit-content;
  }
  .show-more-description {
    @include display-flex();
    margin-right: 93%;
    margin-bottom: 10px;
  }
  .show-more-description::before {
    @include display-flex();
    content: "\e801";
    @include font-icon__limoo();
    font-size: toRem(12);
    color: $input-border;
    transform: rotate(-90deg);

  }
  .full-description__active .show-more-description::before {
    transform: rotate(90deg);
  }
  /* 00000000000000000000000000 */
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
    width: toRem(37)!important;
    height: toRem(37)!important;
  }
  .p-comment-content-btn-edit {
    background: $yellow!important;
    color: $white!important;
    height: toRem(36)!important;
    width: toRem(36)!important;
    border: none!important;
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
    justify-content: center;
    align-items: center;
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
