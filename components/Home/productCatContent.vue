<template>
  <div class="w-100 productContent__sliderWrapper">

        <!-- mobile show -->
          <!-- <div v-if="showSliderMobile" class="productContent__mainCat  main-carousel w-100">
                  <div v-for="data in allCategoryMobileSplitTwice" :key="data.id" class="carousel-cell productContent__carousel ">
                      <div class="productContent__carouselContent w-100">
                              <span class="productContent__carouselLine"></span>
                              <div class="productContent__carouselImgMain w-100">
                                <img class="productContent__carouselImgItem" :src="data.image" alt="">
                              </div>
                              <div class="productContent__carouselData">
                                  <div class="w-100">
                                    <h3 class="productContent__carouselDataTitle">
                                      {{data.title}}
                                    </h3>
                                    <h3 class="productContent__carouselCount">
                                      {{data.count}}
                                    </h3>
                                  </div>
                            </div>
                      </div>
                </div>
          </div> -->

          <!-- <div v-else class="productContent__mainCat  main-carousel w-100">
                <div v-for="data in allCategory" :key="data.id" class="carousel-cell productContent__carousel ">
                <div class="productContent__carouselContent w-100">
                        <span class="productContent__carouselLine"></span>
                        <div class="productContent__carouselImgMain w-100">
                          <img class="productContent__carouselImgItem" :src="data.image" alt="">
                        </div>
                        <div class="productContent__carouselData">
                            <div class="w-100">
                              <h3 class="productContent__carouselDataTitle">
                                {{data.title}}
                              </h3>
                              <h3 class="productContent__carouselCount">
                                {{data.count}}
                              </h3>
                            </div>
                      </div>
                </div>
              </div>
          </div> -->

          <div class="w-100 productContent__catTop">
            <h3 class="w-100 productContent__catTitle">دسته بندی محصولات پرفروش</h3>
          </div>

          <div  class="productContent__mainCat  main-carousel w-100">
                <div v-for="data in allCategoryMobileSplitTwice" :key="data.id" class="carousel-cell productContent__carousel ">
                      <div v-for="contentChildren in data.children" :key="contentChildren.id" class="productContent__carouselContent w-100">

                            <div class="productContent__catRight">
                              <img class="productContent__carouselImgItem" :src="contentChildren.image" alt="">
                            </div>

                          <div class=" productContent__catLeft">
                              <div class="productContent__carouselData">
                                  <div class="w-100">
                                      <h3 class="productContent__carouselDataTitle">
                                        {{contentChildren.title}}
                                      </h3>
                                      <h3 class="productContent__carouselCount">
                                        {{contentChildren.count}}
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
              </div>
          </div>

  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      allCategory   : { type: [Object,Array], default: [] },
    },

    data() {
      return {
        showSliderMobile            : false,
        allCategoryMobileSplitTwice : [],
      }
    },

    mounted() {
      // const width = window.screen.width;
      // if (960 >= width) {
      //   this.flickityOptions();
      //   this.showSliderMobile = true;
      //   // جدا کزدن دسته بندی به صورت دوتا دوتا //
      //   this.itemCategorySplitTwice();
      // }


      this.itemCategorySplitTwice();
      setTimeout( () =>{
        this.flickityOptions();
      });
    },

    computed: {

    },

    methods: {
      flickityOptions(){
        let Flickity       = require("flickity")
        let sliderOptions  = new Flickity( '.productContent__mainCat', {
          accessibility   : true,
          adaptiveHeight  : true,
          rightToLeft     : true,
          cellAlign       : 'right',
          imagesLoaded    : true,
          wrapAround      : false,
          contain         : true,
          // prevNextButtons : false,
          // autoPlay        : true, // advance cells every 3 seconds
          // autoPlay: 1500 // {Number}
          // freeScroll      : true,
          pageDots        : false,
          groupCells      : true,
          fade            : false,
        });


        // sliderOptions.on( 'staticClick', ( event, pointer, cellElement, cellIndex ) =>{
        //     this.products.map((content,index)=>{
        //       if (index == cellIndex) {
        //         this.$router.push(`/home/${content.id}`);
        //       }
        //     })
        // });

      },

      itemCategorySplitTwice(){
        let counterTwice      = 0;
        let contentTwiceSplit = [];
        let levelSplit        = 0;

        this.allCategory.map((content,index)=>{
            counterTwice++;

          if (counterTwice <= 2) {
            contentTwiceSplit = [...contentTwiceSplit,content];
          }

          if (counterTwice >= 2) {
            counterTwice                     = 0;
            this.allCategoryMobileSplitTwice.push({children:contentTwiceSplit});
            contentTwiceSplit                = [];
            levelSplit                       +=2;
          }

        });


        // پیدا کردن آیتم ای که در جدا سازی دوتایی آیتم ها اضافه آماده است //
        if (this.allCategory.length != levelSplit) {
          const lastFindCatOutSideTwice = this.allCategory[levelSplit];
          this.allCategoryMobileSplitTwice.push( { children: [lastFindCatOutSideTwice] } );
        }


      },


    },

};
</script>

<style lang="scss" scoped>
.productContent__carousel{
  // width: 246px;
  // width: 313px;
  width: 231px;
  height: 165px;
  background: $white;
  position: relative;
}
.productContent__mainCat {
  position: relative;
  @include display-flex();
}
.productContent__carouselContent{
  align-items: flex-start;
  flex-wrap: wrap;
  @include display-flex();
  flex-flow: column;
  // border-right: solid 2px $gray-border;
  // padding-right: 11px;
  // padding-left: 11px;
  cursor: pointer;
}
.productContent__carouselDataTitle{
  line-height: 1.9em;
  color: $black-topic;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  overflow: hidden;
  height: 22px;
  justify-content: center;
  @include display-flex();
  align-items: center;
}
.productContent__carouselImgMain{
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
  width: 90px;
  height: 90px;
  background: $white;
  border-radius: 23px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  margin-right: auto;
  margin-left: auto;
  align-items: center;
}
.productContent__carouselImgItem{
  height: 53px;
}
.productContent__carouselData{
  margin-top: 26px;
  width: 214px;
  margin-right: auto;
  margin-left: auto;
}
.productContent__carouselLine{
  @include display-flex();
  background: $border-gray-bg;
  width: 1px;
  height: 98%;
  position: absolute;
  right: 0;
  border-radius: 8px;
  top: 0;
}
// .productContent__line{
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 54px;
//   height: 316px;
//   background: linear-gradient(90deg, #FFFFFF -41.48%, rgba(255, 255, 255, 0) 151.7%);
//   opacity: 0.9;
// }
.productContent__sliderWrapper{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  position:relative;
  padding-top: 24px;
  padding-bottom: 24px;
}
.productContent__carouselCount{
  font-size: 14px;
  color: $gray;
  font-weight: 400;
  text-align: center;
  margin-top: 8px;
}
.productContent__carouselParent{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.productContent__catRight{
  justify-content: flex-start;
  @include display-flex();
  margin-right: 8px;
  margin-left: 8px;
}
.productContent__catLeft{
  flex-grow: 1;
  @include display-flex();
}
.productContent__catTitle{
  margin-bottom: 31px;
  color: $black;
  font-size: 18px;
}
.productContent__catTop{
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 24px;
  padding-left: 24px;
  align-items: flex-start;
}




@media (max-width: 960px) {
  // .productContent__carouselContent:last-of-type{
  //   margin-bottom: 0;
  // }
  .productContent__carouselContent{
    flex-flow: inherit;
    margin-bottom: 16px;
    background: $white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    height: 66px;
    border-radius: 10px;
    width: 92.5%;
    margin-top: 1px;
    padding-top: 6px;
    padding-bottom: 10px;
  }
  // .productContent__carousel:nth-child(1) .productContent__carouselContent{
  //   margin-right: 11px;
  // }
  .productContent__carousel{
    width:211px;
    height: 152px;
    border-radius: 7px;
    flex-flow: row;
    box-shadow: none;
  }
  .productContent__carouselData{
    margin-top: 0;
    width: 100%;
  }
  .productContent__mainCat {
    position: static;
    display: block;
    padding-bottom: 0;
    display: inherit;
    padding-bottom: 10px;
    padding-right: 11px;
  }
  .productContent__carouselImgItem{
    height: 46px;
    width: 46px;
  }
  .productContent__carouselCount{
    margin-left: 13px;
    font-size: 13px;
    height: 21px;
  }
  .productContent__carouselDataTitle{
    font-size: 13px;
    font-weight: 400;
    height: 17px;
    justify-content: flex-start;
    margin-top: 4px;
  }
  .productContent__sliderWrapper{
    padding-top: 16px;
    padding-bottom: 21px;
  }
  .productContent__catTitle{
    margin-bottom: 16px;
    font-size: 14px;
    color: $black-topic;
    font-weight: 300;
  }
  .productContent__catTop{
    padding-right: 11px;
    padding-left: 11px;
  }

}

@media (max-width: 485px) {


}


</style>
