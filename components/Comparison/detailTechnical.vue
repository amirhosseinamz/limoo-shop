<template>

  <div class="w-100 ">
    <div
      v-for="(data, indexParent) in detailTechnical"
      :key="indexParent"
      class=" w-100 tabs__content-data w-100  "
    >
      <h3 class="tabs__content-title">{{ data.label }}</h3>

      <div class="tabs__content-items w-100 ">
        <div
          v-for="(childContent, indexChild) in data.data"
          :key="childContent.id"
          class="tabs__content-item "
        >
          <div class="tabs__content-right">
            <h3 class="tabs__content-text">{{ childContent.Label }}</h3>
            <span class="tabs__content-line"></span>
          </div>
          <div
            class="w-100 detail__slider-item"
            :class="`slider--detail${indexChild}`"
          >
            <div
              v-for="(detail, index) in childContent.detail"
              :key="index"
              class="tab__content-wrapper  "
            >
              <div class="tabs__content-right">
                <h3 class="tabs__content-text">
                  {{ detail.AttributeValue }}
                </h3>
                <span class="tabs__content-line"></span>
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
    detailTechnical: { type: [Object, Array], default: () => { return [] } },
  },

  components: {},

  data() {
    return {
      showModalDetail: false,
    };
  },

  watch: {},

  created() {},

  mounted() {
    // بسته شدن مودال در سایز های تبلت //
    const width = window.innerWidth;
    if (760 < width) {
      this.showModalDetail = false;
    }

    this.detectedResizeBrowser();
    this.flickityOptions();
  },

  methods: {
    getTextByTextKey,
    eventShowModalDetailTechnical() {
      this.showModalDetail = true;
    },

    detectedResizeBrowser() {
      window.addEventListener(
        "resize",
        () => {
          const width = window.innerWidth;
          if (760 < width) {
            this.showModalDetail = false;
          } else {
          }
        },
        true
      );
    },
    flickityOptions() {
      let Flickity = require("flickity-as-nav-for");

      this.detailTechnical.map((contentParent) => {
        contentParent.data.map((contentChild, indexChild) => {
          let sliderOptions = new Flickity(`.slider--detail${indexChild}`, {
            accessibility: true,
            adaptiveHeight: true,
            rightToLeft: true,
            cellAlign: "right",
            imagesLoaded: true,
            wrapAround: false,
            contain: true,
            // prevNextButtons : false,
            // autoPlay        : true, // advance cells every 3 seconds
            // autoPlay: 1500 // {Number}
            // freeScroll      : true,
            pageDots: false,
            groupCells: true,
            fade: false,
            asNavFor: ".slider-comparison",
          });
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.detail_technical {
  padding-top: 24px;
}
.tabs__content-data:nth-child(1) {
  padding-top: 24px;
}
.tabs{
  @include display-flex();
  align-content: flex-start;
  flex-flow: column;
}
.tabs__main{
  width:100%;
  @include display-flex();
  align-items:flex-start;
  border-bottom:solid 1px $gray-border;
}
.tabs__item{
  margin-left:70px;
  cursor: pointer;
}
.tabs__item-title{
  font-size:18px;
  color: $gray;
  font-weight: 400;
}
.tab__main-wrapper{
  padding-right: 24px;
  padding-left:24px;
}
.tab__main-wrapper{
  @include display-flex();
  align-content: flex-start;
  flex-wrap: wrap;
  width:100%;
}
.tabs__item-line{
  width:100%;
  height: 5px;
  background:$yellow;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @include display-flex();
  margin-top:19px;
}
.tab--active .tabs__item-line{
  visibility:visible;
}
.tab--active .tabs__item-title{
  color: $black-topic;
}
.tabs__content{
  padding-top:38px;
  position: absolute;
}
.tabs__content-title{
  font-size: 16px;
  font-weight: 400;
  color:$black-topic;
  height: 29px;
  margin-bottom:16px;
  width:100%;
}
.tabs__content-item{
  background:$white;
  height: 53px;
  padding-right:18px;
  padding-left: 18px;
  background:rgb(242,242,242,.4);
  @include display-flex();
}
.tabs__content-item:nth-child(2n){
  background:$white;
}
.tabs__content-right{
  width:349px;
  position: relative;
}
.tabs__content-left{
  @include display-flex();
  flex-grow: 1;
  padding-right:24px;
}
.tabs__content-data:nth-child(1){
  padding-top:0;
}
.tabs__content-data{
  padding-right:24px;
  padding-left:24px;
  padding-top:38px;
  flex-wrap: wrap;
}
.tabs__content-data:last-of-type .tabs__content-items{
  border-bottom:none;
  padding-bottom:0;
}
.tab__content-wrapper{
  @include display-flex();
}
.tabs__content-text{
  font-size: toRem(16);
  color:$color_discount;
  font-weight: 400;
  margin-top: toRem(16);
  @extend .justify-center;
}
.tabs__content-line{
  @include display-flex();
  background:rgba(242,242,242,.4);
  position: absolute;
  left:0;
  width:1px;
  height: 100%;
  top:0;
}
.tabs__content-items{
  padding-bottom:38px;
  border-bottom:solid 2px rgba(242,242,242,.5);
  border-radius: 8px;
  width:100%;
}
.tab__more{
  font-size: 13px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left:15px;
  cursor: pointer;
}
.tab__more-icon{
  @include display-flex();
  margin-right: 5px;
}
.mobile--arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: 12px;
}
.tab__more-main{
  display: none;
  justify-content: flex-end;
}

</style>
