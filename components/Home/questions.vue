<template>
  <div class="w-100 productContent__sliderWrapper">
    <div class="w-100 productContent__catTop">
      <div class="productContent__topRight ">
        <h3 class="w-100 productContent__catTitle">{{ title }}</h3>
      </div>

      <div class=" productContent__sliderMore productContent__topLeft">
        <nuxt-link class="productContent__moreItem" to="/test">
          {{ moreText }}
          <span
            class=" productContent__moreIcon mobile-inprogress__arrow"
          ></span>
        </nuxt-link>
      </div>
    </div>

    <div class="w-100 productContent__questionData">
      <div class="productContent__questionItems w-100">
        <div
          v-for="(data, index) in allCategoryMobileSplitTwice"
          :key="index"
          class=" w-100 productContent__questionParent"
        >
          <div
            @click="showQuestion(contentChild)"
            :class="{ 'active-question': contentChild.active }"
            v-for="contentChild in data.children"
            :key="contentChild.id"
            class="w-100 productContent__questionItem"
          >
            <div class="productContent__questionHeader w-100">
              <h3 class="productContent__questionTitle">
                <span class=" product_arrow-item"></span>
                <!-- <img class="productContent__questionArrow" src="/icons/arrow-down.svg" alt=""> -->
                {{ contentChild.title }}
              </h3>
            </div>
            <div class="productContent__questionContent w-100">
              <h3 class="productContent__questionText">
                لحظاتی پیش اپل با رونمایی از لبتاپ سری آلمونیوم با بند اسپرت نسل
                جدید تحولی
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
    allQuestion: { type: [Object, Array], default: [] },
    title: { type: String, default: "" },
    moreText: { type: String, default: "" },
  },

  data() {
    return {
      allCategoryMobileSplitTwice: [],
    };
  },

  mounted() {
    // جدا کزدن دسته بندی به صورت دوتا دوتا //
    this.itemCategorySplitTwice();
  },

  computed: {},

  methods: {
    showQuestion(data) {
      this.allQuestion.map((t) => {
        if (data.id == t.id) {
          if (t.active) {
            t.active = false;
          } else {
            t.active = true;
          }
        } else {
          // t.active = false;
        }
      });
    },

    itemCategorySplitTwice() {
      let counterTwice = 0;
      let contentTwiceSplit = [];
      let levelSplit = 0;

      // دوتا دوتا جدا سازی آیتم ها در موبایل //
      this.allQuestion.map((content, index) => {
        counterTwice++;

        if (counterTwice <= 2) {
          contentTwiceSplit = [...contentTwiceSplit, content];
        }

        if (counterTwice >= 2) {
          counterTwice = 0;
          this.allCategoryMobileSplitTwice.push({
            children: contentTwiceSplit,
          });
          contentTwiceSplit = [];
          levelSplit += 2;
        }
      });

      // پیدا کردن آیتم ای که در جدا سازی دوتایی آیتم ها اضافه آماده است //
      if (this.allQuestion.length != levelSplit) {
        const lastFindCatOutSideTwice = this.allQuestion[levelSplit];
        this.allCategoryMobileSplitTwice.push({
          children: [lastFindCatOutSideTwice],
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.productContent__sliderWrapper {
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  position: relative;
}
.productContent__catTitle {
  color: $black;
  font-size: 18px;
  font-weight: 500;
}
.productContent__catTop {
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 26px;
  padding-left: 26px;
  align-items: flex-start;
  margin-bottom: 31px;
}
.productContent__sliderMore {
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 13px;
}
.productContent__moreItem {
  font-size: 16px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
}
.productContent__moreIcon {
  @include display-flex();
  margin-right: 11px;
}
.mobile-inprogress__arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 14px;
  margin-top: 1px;
}
.productContent__topRight {
  flex-grow: 1;
  @include display-flex();
  flex-flow: column;
}
.productContent__questionData {
  padding-bottom: 30px;
  padding-right: 24px;
  padding-left: 24px;
}
.productContent__questionItems {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
// .productContent__questionItem{
//   @include display-flex();
//   align-items: flex-start;
//   flex-wrap: wrap;
//   border: solid 1px #ccc;
//   border-radius: 10px;
//   cursor: pointer;
//   margin-bottom: 16px;
//   position: relative;
//   overflow: hidden;
//   max-height: 78px;
//   transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
//   width: 49%;
//   margin-left: 2%;
// }
// .productContent__questionItem:nth-child(2n){
//   margin-left: 0;
// }
// .productContent__questionItem:nth-last-child(-n+2){
//   margin-bottom: 0;
// }
.productContent__questionItem {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  border: solid 1px #ccc;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  max-height: 78px;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  width: 100%;
}
.productContent__questionParent:nth-child(2n) {
  margin-left: 0;
}
.productContent__questionItem:nth-child(2n) {
  margin-bottom: 0;
}
.productContent__questionParent {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  flex-flow: column;
  width: 49%;
  margin-left: 2%;
}

.productContent__questionTitle {
  color: $color_question_gray;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  @include display-flex();
  padding-left: 22px;
}
.productContent__questionArrow {
  // transform: rotate(270deg);
  // margin-right: 19px;
  @include display-flex();
  transition: all 0.3s ease-in-out;
  color: $color-gray;
  height: 20px;
  margin-right: 16px;
  margin-left: 11px;
  margin-top: 1px;
}
.productContent__questionHeader {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  height: 78px;
  padding-top: 26px;
}
.productContent__questionContent {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  padding-right: 36px;
  padding-left: 36px;
  margin-top: -5px;
  margin-bottom: 21px;
}
.productContent__questionText {
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #515151;
  line-height: 1.9em;
}
.active-question {
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
}
.active-question .productContent__questionArrow {
  transition: all 0.2s ease-in;
  transform: rotate(-176deg);
}
.productContent__questionRight {
  margin-right: 19px;
  margin-top: 1px;
  width: 14px;
  height: 14px;
}
.product_arrow-item::after {
  content: "\e800";
  font-size: 20px;
  margin-top: 1px;
  transition: all 0.3s ease-in-out;
  @include font-icon__arrow();
  color: $input-border;
}
.product_arrow-item {
  transition: all 0.3s ease-in-out;
  height: 20px;
  margin-right: 16px;
  margin-left: 11px;
  margin-top: 1px;
  transform: rotate(0deg);
}
.active-question .product_arrow-item {
  transition: all 0.2s ease-in;
  transform: rotate(-180deg);
}

@media (max-width: 960px) {
  .productContent__questionText {
    font-size: 14px;
  }
  .productContent__questionTitle {
    font-size: 14px;
  }
  .productContent__questionData {
    padding-top: 0;
    padding-bottom: 0;
  }
  .productContent__questionArrow {
    height: 21px;
  }
}

@media (max-width: 860px) {
  .productContent__questionParent {
    margin-left: 0;
    width: 100%;
  }
  .productContent__questionParent:nth-last-child(-n + 2) {
    margin-bottom: 8px;
  }
  .productContent__questionParent {
    margin-bottom: 8px;
  }
  .productContent__questionParent:last-of-type {
    margin-bottom: 0px;
  }
  .productContent__questionItem:nth-child(1) {
    margin-bottom: 8px;
  }
  .productContent__questionItem:nth-child(2) {
    margin-bottom: 0;
  }
}

@media (max-width: 600px) {
  .productContent__catTitle {
    font-size: 16px;
  }
  .productContent__moreItem {
    font-size: 14px;
  }
  .productContent__topRight {
    width: 100%;
  }
  .productContent__topLeft {
    justify-content: flex-end;
    width: 100%;
  }
}

@media (max-width: 485px) {
  .product_arrow-item {
    height: 18px;
  }
  .product_arrow-item::after {
    font-size: 17px;
  }
  .productContent__questionContent {
    padding-left: 26px;
    margin-bottom: 11px;
  }
  .productContent__catTitle {
    font-size: 14px;
  }
  .productContent__topLeft {
    display: none;
  }
  .productContent__questionHeader {
    height: 50px;
  }
  .productContent__questionItem {
    max-height: 50px;
  }
  .active-question {
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
  }
  .productContent__questionHeader {
    padding-top: 16px;
  }
  .productContent__questionArrow {
    margin-right: 11px;
    margin-left: 7px;
    margin-top: 0;
  }
  .productContent__questionTitle {
    padding-left: 11px;
  }
  .productContent__questionData {
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__questionArrow {
    height: 20px;
  }
  .productContent__questionText {
    font-size: 13px;
  }
  .productContent__catTop {
    padding-right: 14px;
    padding-left: 14px;
    margin-bottom: 16px;
  }
}

@media (max-width: 420px) {
  .productContent__questionTitle {
    font-size: 12px;
  }
  .productContent__questionText {
    font-size: 11px;
  }
  .productContent__catTop {
    margin-bottom: 16px;
  }
  .productContent__questionArrow {
    margin-top: -2px;
    height: 19px;
  }
}

@media (max-width: 354px) {
  .productContent__questionHeader {
    padding-top: 17px;
    height: 63px;
  }
  .active-question {
    max-height: 1000px;
  }
  .productContent__questionTitle {
    font-size: 11px;
  }
  .productContent__questionHeader {
    padding-top: 14px;
  }
  .productContent__questionHeader {
    height: 50px;
  }
  .active-question {
    max-height: 1000px;
  }
  .productContent__questionArrow {
    margin-top: 0;
  }
}

@media (max-width: 323px) {
  .productContent__questionHeader {
    padding-top: 7px;
  }
  .productContent__questionTitle {
    padding-left: 16px;
  }
}

@media (max-width: 280px) {
  // .productContent__questionLeft{
  //   width: 77%;
  // }
  // .productContent__questionTitle{
  //   font-size: 7px;
  // }
  // .productContent__questionArrow::after{
  //   font-size: 10px;
  // }
  // .productContent__questionItem{
  //   max-height: 38px;
  // }
  // .productContent__questionHeader{
  //   height: 38px;
  // }
  // .active-question{
  //   max-height: 1000px;
  //   transition: max-height 1s ease-in-out;
  // }
  // .productContent__questionText{
  //   font-size: 7px;
  // }
  // .productContent__questionContent{
  //   margin-bottom: 22px;
  // }
}
</style>
