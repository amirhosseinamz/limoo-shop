<template>
  <div
    ref="contentMain"
    class="
      p-comments-content-main
      w-100
      flex-column flex-wrap
      d-rtl
      tabs__content
    "
  >
  <p class="filter__title"><span class="icon"></span>
    فیلتر بر اساس:
  </p>
  <div class="filter">
  <div class="dropdown"  :class="`${open ? 'changedropdown' : '' }`">
      <div class="text"  @click="changearrow()" :class="`${open ? 'changeicon' : 'icon' }`" >انتخاب کنید...
        <div class="multiselect__tags-wrap" v-if="checkboxValues.length < 3">
          <div class="multiselect__tag" v-for="(item,index) in checkboxValues" :key="item">
            <div
            class="text-tag"
            >
            {{item}}
              <span class="icon-close" @click="closeIcon(index)"></span>
            </div>
          </div>
        </div>
        <div
        v-else
        class="multiselect__tags-wrap"
        >
        <div class="multiselect__tag">
          <div
          class="text-tag"
          >
          {{ checkboxValues[0] }}
            <span class="icon-close" @click="closeIcon(0)"></span>
          </div>
        </div>
        <div class="multiselect__tag">
          <div
          class="text-tag"
          >
          {{ checkboxValues[1] }}
            <span class="icon-close" @click="closeIcon(1)"></span>
          </div>
        </div>
        <div class="multiselect__tag">
          <div
          class="text-tag"
          >
          + {{checkboxValues.length - 2}} ...
            <span class="icon-close" @click="closeIcon(2)"></span>
          </div>
        </div>
        </div>
      </div>
      <ul class="items" v-if="show" >
      <li class="sub-items" v-for="option in options" :key="option.code"  >
        <base-checkbox

          class="brand-checkbox"
          name="name"
          :val="option.name"
          mode="square"
          v-model="checkboxValues"
          :title="option.name"
        ></base-checkbox>
      </li>
  </ul>
</div>
  <base-button  base-color="white" @button-clicked="buttonIsactiveAll()" :class="`${selectedAll ? 'active-button' : 'filter-button' }`">
    همه نظرات
  </base-button>
  <base-button  base-color="white" @button-clicked="buttonIsactiveNeg()"  :class="`${selectedNeg ? 'active-button' : 'filter-button '}`" >
    نظرات منفی
  </base-button>
  <base-button  base-color="white"  @button-clicked="buttonIsactivePos()" :class="`${selectedPos ? 'active-button' : 'filter-button' }`" >
    نظرات مثبت
  </base-button>
</div>

<div class="w-100">
  <base-button no-box-shadow no-hover base-color="white" class="button-add"  classes="comments-add__comment" @button-clicked="showModalAddComment">
     {{ getTextByTextKey("product_submit_comment") }}
  </base-button>
</div>

    <!-- mobile -->
<div class="products__filter-btns w-100 " style="display:none">
  <base-button no-box-shadow classes="products__filter-btn" @button-clicked="setComponent('filter-modal')">
    <span class="filter-search-icon"></span>
    {{ getTextByTextKey('category_filter_text') }}
  </base-button>

  <base-button no-box-shadow classes="products__filter-btn" base-color="dark" @button-clicked="setComponent('sort-modal')">
    <span class="arrow-down-icon"></span>
    مرتب سازی
  </base-button>
</div>

<div class="multiselect__tags-wrap  responsive" v-if="checkboxValues.length < 3" style="display:none">
        <div class="multiselect__tag tag-mobile responsive" v-for="(item,index) in checkboxValues" :key="item">
          <div
          class="text-tag"
          >
          {{item}}
            <span class="icon-close" @click="closeIcon(index)"></span>
          </div>
        </div>
      </div>
  <div
  v-else
  class="multiselect__tags-wrap  responsive"
  style="display:none"
  >
  <div class="multiselect__tag tag-mobile">
    <div
      class="text-tag"
      >
      {{ checkboxValues[0] }}
      <span class="icon-close" @click="closeIcon(0)"></span>
    </div>
  </div>
  <div class="multiselect__tag tag-mobile">
    <div
    class="text-tag"
    >
    {{ checkboxValues[1] }}
    <span class="icon-close" @click="closeIcon(0)"></span>
    </div>
  </div>
  <div class="multiselect__tag tag-mobile">
    <div
    class="text-tag"
    >
    + {{checkboxValues.length - 2}} ...
    <span class="icon-close" @click="closeIcon(2)"></span>
    </div>
  </div>
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
            <span class="buyer-badge"
                    ><span class="badge-text">خریدار</span></span
                  >
          </div>
<!-- ==================================================================================== -->
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
    <!-- like and dislike -->
        <div class="like-dislike-wrapper d-flex w-100">
          <div class="dislike d-flex align-center" @click="dislike">
            <span class="number">{{ dislikeCounter }}</span>
            <sapn
              class="dislike-icon"
              :class="`${
                dislikeIconIsActive
                  ? 'dislike-icon-clicked'
                  : 'dislike-icon'
              }`"
            ></sapn>
          </div>
          <div class="vertical-line"></div>
          <div class="like d-flex align-center" @click="like">
            <span class="number">{{ likeCounter }}</span>
            <span
              class="like-icon"
              :class="`${
                likeIconIsActive ? 'like-icon-clicked' : 'like-icon'
              }`"
            ></span>
          </div>
        </div>
    <!--end of like and dislike -->
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

<!-- Modal Sort Mobile -->
<transition name="backdrop-scale">
  <div class="backdrop-phone"  v-if="selectedComponent === 'sort-modal'" @click="setComponent('')"></div>
</transition>
<transition name="phone">
<base-modal
  class="modal-container modal modal-animation__open"
  @close-modal="modalClose"
  v-if="selectedComponent === 'sort-modal'"
>
  <div class="w-100 p-modal-header-mobile">
      <span  class="modal__close-line"></span>
    <div class="p-modal-header-top align-items-center">
        <span @click="modalClose" class="title-icon"> </span>
      <span class="p-modal-header-top-title">
      چینش بر اساس:
      </span>
    </div>
    <hr class="splicer-line" />
  </div>

  <div class="p-modal-header-desktop w-100 flex-column">
    <div class="w-100 modal-sort__content">
      <div
      @click="selectRadioButton()"
      class="sub-items"
      v-for="sort in sortData" :key="sort.id"
      >
        <base-radioButton
          @active-radio="activeRadio"
          :class="`${selectRadio ? 'active-radio' : 'sort-radio' }`"
          name="name"
          mode="circle"
          v-model="radiobuttonsValues"
          :title="sort.title"
        ></base-radioButton>
      </div>
    </div>
    <div class="w-100 modal-filter__btn">
      <base-button
        @button-clicked="closeComponent()"
        classes="p-product-btn"
        base-color="yellow"
        no-box-shadow
      >
      اعمال
      </base-button>
      <base-button
        @button-clicked="closeComponent()"
        classes="modal-cancel"
        no-box-shadow
        base-color="light-gray"
      >
        انصراف
      </base-button>
    </div>
  </div>
</base-modal>
</transition>

<!-- Modal Filter Mobile -->
<transition name="backdrop-scale">
  <div class="backdrop-phone" v-if="selectedComponent === 'filter-modal'" @click="setComponent('')"></div>
</transition>
<transition name="phone">
<base-modal
class="modal-container modal modal-animation__open"
@close-modal="modalClose"
v-if="selectedComponent === 'filter-modal'"
>
<div class="w-100 p-modal-header-mobile">
  <span  class="modal__close-line"></span>
  <div class="p-modal-header-top align-items-center">
    <span class="title-icon-filter"> </span>
    <span class="p-modal-header-top-title">
    فیلتر بر اساس:
    </span>
  </div>
  <hr class="splicer-line" />
</div>

<div class="p-modal-header-desktop w-100 flex-column">
  <div class="w-100 modal-sort__content">
    <div
    class="sub-items"
    v-for="option in options" :key="option.code"
    >
      <base-checkbox
        class="brand-checkbox"
        name="name"
        :val="option.name"
        mode="square"
        v-model="checkboxValues"
        :title="option.name"
      ></base-checkbox>
    </div>
  </div>
  <div class="w-100 modal-filter__btn">
    <base-button
      @button-clicked="closeComponent()"
      classes="p-product-btn"
      base-color="yellow"
      no-box-shadow
    >
    انتخاب
    </base-button>
    <base-button
      @button-clicked="closeComponent()"
      classes="modal-cancel"
      no-box-shadow
      base-color="light-gray"
    >
      انصراف
    </base-button>
  </div>
</div>
</base-modal>
</transition>

  </div>
</template>

<script>
import modalAddComment from "./modalAddComment";
import sortBox from "../Category/sortBox";
// import ModalSort from "./modalSort";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    commentsData: { type: [Object, Array], default: {} },
  },

  components: {
    modalAddComment,
    sortBox,
    // ModalSort,
  },

  data() {
    return {
      passChangeIsActive: false,
      dataEditAddress: {},
      updateSelected: 0,
      userComments: -1,
      showModal: false,
      showSortModal: false,
      windowWidth: 0,
      selectedComponent: '',
      checkboxValues: [],
      radiobuttonsValues: [],
      selectedRadioBtnData: {},
      subitems:[],
      open: false,
      selectRadio: false,
      selectedAll: false,
      selectedNeg: false,
      selectedPos: false,
      show: false,
      tag: false,
      options: [
        { name: 'جدیدترین نظرات', code: '1',   tag: 'first'},
        { name: 'بالاترین امتیاز', code: '2',   tag: 'sec'},
        { name: 'نظر خریداران', code: '3',   tag: 'third' },
        { name: 'مهمترین نظرات', code: '4',   tag: 'four' },
        { name: 'باحالترین نظرات', code: '5',   tag: 'five' },
      ],
      sortData: [
        {
          id: 1,
          title: 'همه نظرات',
          value: 'new'
        },
        {
          id: 2,
          title: 'نظرات منفی',
          new: 'negative'
        },
        {
          id: 3,
          title: 'نظرات مثبت',
          new: 'positive'
        }
      ],
      likeIconIsActive: false,
      dislikeIconIsActive: false,
      likeCounter: 10,
      dislikeCounter: 10,
    };
  },
  computed: {
    closeModalAddComment() {
      return this.$store.getters["product/single/single/closeModalAddComment"];
    },
    modalAnimation() {
      return "scale";
    },
  },
  watch: {
    closeModalAddComment() {
      this.showModal = false;
    },

    active(data) {
      this.$emit("status-show-modal", data);
    },

    "$store.state.category.lastUpdateSortModal"(data) {
      this.sortData = data;
    },
    showSortModal(val) {
      this.activeBlur = !!val;
    }
  },

  created() {
    this.userComments = Object.values(this.commentsData).length;
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
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
    changearrow () {
      this.show = !this.show
      this.open = !this.open
    },
    buttonIsactiveAll() {
      this.selectedAll = !this.selectedAll;
      this.selectedNeg = false;
      this.selectedPos = false;
    },
    buttonIsactiveNeg() {
      this.selectedNeg = !this.selectedNeg;
      this.selectedAll = false;
      this.selectedPos = false;
    },
    buttonIsactivePos() {
      this.selectedPos = !this.selectedPos;
      this.selectedAll= false;
      this.selectedNeg= false;
    },

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
    pageChanged() {
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
    // modal sort
    // submitModal() {
    //   this.sortData.map((content, index) => {
    //     content.checked = content.id === this.selectedRadioBtnData.id;
    //   });
    //
    //   // this.$store.state.category.submitSortModal     = true;
    //   this.$store.commit("category/updateStateModals", {
    //     submitSortModal: true,
    //   });
    // },
    activeRadio(data) {
      this.selectedRadioBtnData = data;
    },
    showModalSort() {
      this.showSortModal = true;
      this.$emit("show-modal-sort");
    },
    setComponent(component){
      this.selectedComponent = component;
    },
    closeComponent(){
      this.selectedComponent ='';
    },
    closeIcon(index){
        this.$delete(this.checkboxValues, index);
    },
    selectRadioButton () {
      this.selectRadio = !this.selectRadio
    },
    like() {
      this.likeIconIsActive = !this.likeIconIsActive;
      if (this.likeIconIsActive) {
        this.likeCounter++;
        this.dislikeIconIsActive = false;
        this.dislikeCounter--;
      } else {
        this.likeCounter--;
        this.dislikeIconIsActive = true;
        this.dislikeCounter++;
      }
    },
    dislike() {
      this.dislikeIconIsActive = !this.dislikeIconIsActive;
      if (this.dislikeIconIsActive) {
        this.likeIconIsActive = false;
        this.dislikeCounter++;
        this.likeCounter--;
      } else {
        this.dislikeCounter--;
        this.likeIconIsActive = true;
        this.likeCounter++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@include scale-modal-animation();
@include backdrop-scale-animation();
@include phone-modal-animation();

.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.backdrop-phone{
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}

// ............... Desktop Style..................... //
.filter{
  @include display-flex();
}
.filter__title{
  margin-top: toRem(43);
  font-size: toRem(16);

  &::before{
    content: "\e840";
    margin-left: toRem(5);
    @include font-icon__limoo();
    font-size: toRem(20);
    color:$black-topic;
  }
}
.multiselect__tags-wrap{
  @include display-flex();
}

.multiselect__tag{
  margin-top: toRem(-25);
  margin-bottom: toRem(10);
  margin-left: toRem(4);
  height: toRem(29);
  border-radius: toRem(16.5);
  display: inline-block;
  color: $gray-2;
  background: $orange-6;
  overflow: hidden;
  max-width:100%;
  text-overflow: ellipsis;
  white-space:nowrap;

  .text-tag{
    @include display-flex();
    padding: toRem(4) toRem(8) ;
    font-size: toRem(12);
  }

  .icon-close{
    &::before {
      margin:toRem(10.5) toRem(8);
      padding:0!important;
      cursor:pointer;
      content: "\e808";
      @include font-icon__limoo();
      font-size: toRem(6);
      color:$gray-4;
    }
  }
}
.multiselect__tag:last-child{
  margin-left: toRem(29)!important;
}
.dropdown {
  width: toRem(334);
  height: toRem(45);
  bottom: toRem(52);
  top: toRem(18);
  position: relative;
  background-color: $white;
  border: toRem(1) solid $gray-5;
  border-radius: toRem(10);
  cursor: pointer;

.text{
  padding: toRem(13) toRem(15) toRem(14) 0;
  font-size: toRem(14);
  color: $gray-2;
}
.items{
  @include display-flex();
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: toRem(43.2);
  margin-right: toRem(-1);
  width: 100.7%;
  height: toRem(152);
  overflow-y: scroll;
  list-style: none;
  border: toRem(1) solid $gray-5;
  background: $white;
  box-shadow: 0px 20px 24px rgba(17, 17, 17, 0.06);
  border-bottom-left-radius: toRem(10);
  border-bottom-right-radius: toRem(10);

.sub-items{
  @include display-flex();
  width: 100%;
  border-bottom:1px solid $gray-5;
  padding: toRem(15) toRem(15) toRem(15) 0!important;
  }
}
.icon{
  &::before {
    position: absolute;
    cursor:pointer;
    top: toRem(18);
    left: toRem(11);
    content: "\e841";
    margin-left: toRem(1);
    @include font-icon__limoo();
    font-size: toRem(7);
    color:$gray-4;
  }
}
.changeicon{
  &::before {
    transform: rotate(-180deg);
    position: absolute;
    cursor:pointer;
    top: toRem(18);
    left: toRem(11);
    content: "\e841";
    margin-left: toRem(1);
    @include font-icon__limoo();
    font-size: toRem(7);
    color:$gray-4;
    }
  }
}
.changedropdown{
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
.filter-button {
  width: toRem(94);
  height: toRem(45);
  font-family: inherit;
  font-size: toRem(13);
  margin: toRem(18) toRem(24) 0 0;
  border: 1px solid $gray-4!important;
  color: $gray!important;
}
.active-button {
  width: toRem(94);
  height: toRem(45);
  font-family: inherit;
  font-size: toRem(13);
  margin: toRem(18) toRem(24) 0 0;
  border: none!important;
  color:$gray-2!important;
  background-color:$orange-2!important;
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
  @include xxs {
    display: none;
  }
}
.rate-counter {
  margin-right: toRem(8);
}
.buyer-badge {
  background-color: $orange-5;
  @include display-flex();
  justify-content: center;
  align-items: center;
  display: inline-flex;
  width: toRem(70);
  height: toRem(29);
  margin-right: toRem(16);
  border-radius: toRem(16.5);
  @include sm {
    align-items: center;
    width: toRem(54);
    height: toRem(24);
  }
  .badge-text {
    font-style: normal;
    font-weight: normal;
    font-size: toRem(14);
    // margin-top: toRem(3);
    @include sm {
      font-size: toRem(13);
    }
  }
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
  @include xs {
    font-size: toRem(12);
  }
  @include xxs {
    font-size: toRem(10);
  }
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
  margin-top: toRem(52);
  border: 2px solid $orange!important;
  color: $orange!important;
}
.like-dislike-wrapper {
  justify-content: end;
  margin-top: toRem(20);
  margin-bottom: toRem(25.5);
  height: toRem(29.6);
  margin-left: toRem(24);
  @include sm {
    margin-left: toRem(14);
  }
  .dislike {
    cursor: pointer;
    .number {
      color: $red-logout;
      margin-left: toRem(8);
    }
    .dislike-icon {
      transform: rotate(180deg);
      &::before {
        content: "\e843";
        @include font-icon__limoo();
        font-size: toRem(23);
        color: $red-logout;
      }
    }
    .dislike-icon-clicked {
      &::before {
        content: "\e844";
        @include font-icon__limoo();
        font-size: toRem(20);
        color: $red-logout;
      }
    }
  }
  .vertical-line {
    height: toRem(24);
    width: 1px;
    background-color: $light-gray;
    margin-right: toRem(15);
    margin-left: toRem(16);
  }
  .like {
    width: toRem(45);
    cursor: pointer;
    .number {
      color: $green__answer;
      margin-left: toRem(8);
    }
    .like-icon {
      &::before {
        content: "\e843";
        @include font-icon__limoo();
        font-size: toRem(23);
        color: $green__answer;
      }
    }
    .like-icon-clicked {
      &::before {
        content: "\e844";
        @include font-icon__limoo();
        font-size: toRem(20);
        color: $green__answer;
      }
    }
  }
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
  .filter-button {
    font-size: toRem(11);
    margin: toRem(18) toRem(10) 0 0;
  }
  .active-button {
    font-size: toRem(11);
    margin: toRem(18) toRem(15) 0 0;
  }
  .dropdown {
    width: toRem(255);
    height: toRem(45);
    bottom: toRem(52);
    top: toRem(18);
    position: relative;
    background-color: $white;
    border: toRem(1) solid $gray-5;
    border-radius: toRem(10);
    cursor: pointer;
}
  .text-tag{
    @include display-flex();
    padding: toRem(4) toRem(4) ;
    font-size: toRem(11.5);
  }
.comments-add__comment{
  margin-top:toRem(54);
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
  //////////////////////////////////////////////
  .modal-container::v-deep {
    dialog {
      @include display-flex();
      flex-direction: column;
      align-items: center;
      width: 100%;
      height:toRem(344);
      background: $white;
      box-shadow: 0 toRem(20) toRem(24) rgba(17, 17, 17, 0.06);
      border-top-left-radius: toRem(50);
      border-top-right-radius: toRem(50);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    dialog {
      &.delete {
      min-width: 100%;
        bottom:0;
        margin:0;
      }
    }
  }
  .modal__close-line {
    display: flex;
    justify-content: center;
    margin-top: toRem(24);
    line-height: 0;
  }
  .modal__close-line::before {
    content: "\e81b";
    @include font-icon__limoo();
    font-size: toRem(28);
    color: $gray;
  }
  .p-modal-header-top-title {
    color: $black-topic;
    font-size: 14px;
    font-weight: 400;
    margin: toRem(48) toRem(6.75) toRem(16) toRem(60);
  }
  .p-modal-header-top{
    margin-top: toRem(24);
  }
  .p-modal-header {
    padding-right: toRem(41);
    padding-left: toRem(41);
  }
  .title-icon {
    &::before {
      margin: toRem(51.75) toRem(25.75)  toRem(18.75) 0;
      content: "\e83f";
      @include font-icon__limoo();
      font-size: toRem(20);
      color: $gray-2;
    }
  }
  .splicer-line {
    display: block;
    width: 90%;
    border: none;
    margin: toRem(16) toRem(24) toRem(16) toRem(24);
    border-top: toRem(1) solid $gray-border;
  }
  .radio-button-wrapper .title {
    margin-right: toRem(11);
  }
  .sub-items {
    @include display-flex();
    width: 100%;
    padding-bottom:toRem(24)!important;
    padding-right:toRem(26)!important;
  }
  .sub-items:last-child {
    padding-bottom: 0!important;
  }
  .modal-filter__btn {
      @include display-flex();
      justify-content:center;
       margin-top:toRem(50);
       margin-bottom: toRem(35);
     }

     .p-product-btn {
        width: toRem(149);
        height: toRem(47);
        font-size: toRem(14);
        color: $gray-2;
        margin-left: toRem(24);
        border-radius: toRem(10);
        }
        .modal-cancel {
          width: toRem(149);
          height: toRem(47);
          font-size: toRem(14);
          color:$gray-3;
          border-radius: toRem(10);
        }

          .title-icon-filter {
            padding: toRem(57.71) toRem(27.71)  toRem(21.71) 0;
            &::before {
              content: "\e840";
              @include font-icon__limoo();
              font-size: toRem(18);
              color: $gray-2;
            }
          }

  // .modal-animation__open {
  //     animation: modalOpen 600ms linear;
  // }
  // @keyframes modalOpen {
  //     0% {
  //         transform: translate(0, 470px);
  //     }
  //     100% {
  //         transform: translate(0, 0);
  //     }
  // }
  // .modal-animation__close {
  //     animation: modalClose 600ms linear;
  // }
  // @keyframes modalClose {
  //     0% {
  //         transform: translate(0, 0);
  //     }
  //     100% {
  //         transform: translate(0, 470px);
  //     }
  // }
  .p-modal-header-mobile {
    display: flex;
    flex-flow: column;
  }
  .responsive{
  display:flex!important;
  }
  .filter{
    display:none!important;
  }
  .filter__title{
    display:none;
  }
  .products__filter-btns {
    display:flex!important;
    justify-content:center;
    margin-bottom: toRem(40);
  }
.products__filter-btn {
  justify-content: center!important;
  margin-left: 1.3125rem;
  font-family: inherit;
  width: toRem(207);
  height: toRem(47);
  .filter-search-icon {
    margin: 0 1rem 0 0.6rem;
    &::before {
      content: "\e840";
      @include font-icon__limoo();
      font-size: toRem(20);
      color: white;
    }
  }
  .arrow-down-icon {
    margin: 0 1rem 0 0.6rem;
    &::before {
      content: "\e83f";
      @include font-icon__limoo();
      font-size: toRem(20);
      color: white;
    }
  }
}
.products__filter-btn:last-of-type {
  margin-left: 0;
}
.active--blur {
  filter: blur(toRem(2));
  overflow: hidden;
}

  .checkbox-wrapper .container.square {
    margin-right:26px!important;
  }

  .radio-btn:first-child {
    padding-top:0!important;
  }
 .radio-btn {
  border:0!important;
 }
 .modal-sort__items {
   padding-right: toRem(23)!important;
   margin-bottom:0!important;
 }

  .sort-radio {
    color: $gray-3;
    font-size: toRem(14);
  }
  .active-radio {
    color: $gray;
    font-size: toRem(14);
  }

  .tag-mobile {
    margin-left:toRem(4);
  }
  .tag-mobile:first-child{
      margin-right:toRem(35);
  }
  .p-modal-header-desktop .modal-sort__content{
    height:toRem(120);
    overflow-y:scroll;
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
