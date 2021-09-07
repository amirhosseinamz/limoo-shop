<template>
  <div class="tabs__content">
    <div class="w-100">
      <div
        v-for="(data, indexParent) in productData"
        :key="indexParent"
        class="tabs__content-data"
      >
        <h3 class="tabs__content-title">{{ data.label }}</h3>

        <div class="tabs__content-items">
          <div
            v-for="childContent in data.data"
            :key="childContent.id"
            class="tabs__content-item"
          >
            <div class="tab__content-wrapper w-100">
              <div class="tabs__content-right">
                <h3 class="tabs__content-text">{{ childContent.Label }}</h3>
                <span class="tabs__content-line"></span>
              </div>
              <div class="tabs__content-left">
                <h3 class="tabs__content-text">
                  {{ childContent.AttributeValue }}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="tab__more-main">
          <div @click="eventShowModalDetailTechnical" class="tab__more" to="/">
            {{ getTextByTextKey("home_blog_all") }}
            <span class="tab__more-icon mobile--arrow"></span>
          </div>
        </div>
      </div>
    </div>

    <modal-detail-technical
      :active.sync="showModalDetail"
      :product-data="productData"
    ></modal-detail-technical>
  </div>
</template>
<script>
import modalDetailTechnical from "./modalDetailTechnical";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    productData: { type: [Object, Array], default: function () { return [] } },
  },

  components: {
    modalDetailTechnical,
  },

  data() {
    return {
      showModalDetail: false,
    };
  },
  created () {
    console.log(this.productData);
  },
  mounted() {
    // بسته شدن مودال در سایز های تبلت //
    const width = window.innerWidth;
    if (760 < width) {
      this.showModalDetail = false;
    }

    this.detectedResizeBrowser();
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
  },
};
</script>

<style lang="scss" scoped>

.tabs{
  @include display-flex();
  align-content: flex-start;
  flex-flow: column;
}
.tabs__main{
  width:100%;
  @include display-flex();
  align-items:flex-start;
  border-bottom:solid toRem(1) $gray-border;
}
.tabs__item{
  margin-left: toRem(70);
  cursor: pointer;
}
.tabs__item-title{
  font-size: toRem(18);
  color: $gray;
  font-weight: 400;
}
.tab__main-wrapper{
  padding-right: toRem(24);
  padding-left: toRem(24);
}
.tab__main-wrapper{
  @include display-flex();
  align-content: flex-start;
  flex-wrap: wrap;
  width:100%;
}
.tabs__item-line{
  width:100%;
  height: toRem(5);
  background:$yellow;
  border-top-left-radius: toRem(20);
  border-top-right-radius: toRem(20);
  @include display-flex();
  margin-top: toRem(19);
}
.tab--active .tabs__item-line{
  visibility:visible;
}
.tab--active .tabs__item-title{
  color: $black-topic;
}
.tabs__content{
  padding-top: toRem(38);
}
.tabs__content-title{
  font-size: toRem(16);
  font-weight: 400;
  color:$black-topic;
  height: toRem(29);
  margin-bottom: toRem(16);
  width:100%;
}
.tabs__content-item{
  background:$white;
  height: toRem(53);
  padding-right:toRem(18);
  padding-left: toRem(18);
  background:rgb(242,242,242,.4);
  @include display-flex();
}
.tabs__content-item:nth-child(2n){
  background:$white;
}
.tabs__content-right{
  width: toRem(349);
  position: relative;
}
.tabs__content-left{
  @include display-flex();
  flex-grow: 1;
  padding-right: toRem(24);
}
.tabs__content-data:nth-child(1){
  padding-top:0;
}
.tabs__content-data{
  padding-right: toRem(24);
  padding-left: toRem(24);
  padding-top: toRem(38);
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
  margin-top:toRem(16);
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
  padding-bottom:toRem(38);
  border-bottom:solid 2px rgba(242,242,242,.5);
  border-radius: toRem(8);
  width:100%;
}
.tab__more{
  font-size: toRem(13);
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
  justify-content: flex-end;
  margin-top:toRem(16);
  margin-bottom:toRem(16);
  padding-left:toRem(15);
  cursor: pointer;
}
.tab__more-icon{
  @include display-flex();
  margin-right: toRem(5);
}
.mobile--arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(12);
}
.tab__more-main{
  display: none;
  justify-content: flex-end;
}

@include sm {
  .tab__more-main{
    @include display-flex();
  }
  .tabs__content-items{
    padding-bottom: 0;
    border:solid toRem(1) $border-gray-bg;
    border-radius: toRem(10);
  }
  .tabs__content-item:nth-child(n+4){
    display: none;
  }
  .tabs__content-data:nth-child(n+2){
    display: none;
  }
  .tabs__content{
    padding-top:toRem(16);
  }
  .tabs__content-title{
    font-size: toRem(14);
    height:toRem(24);
  }
  .tabs__content-data{
    padding-right: 0;
    padding-left: 0;
  }
  .tabs__content-text{
    font-size: toRem(13);
    margin-top: 0;
    color: $gray;
  }
  .tabs__content-item{
    height: toRem(39);
    padding-right: toRem(16);
    padding-left: toRem(16);
  }
  .tab__content-wrapper{
    align-items: center;
  }
  .tabs__content-right{
    width: toRem(148);
  }

}

</style>
