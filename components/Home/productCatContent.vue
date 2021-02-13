<template>
  <div class="w-100 productContent__sliderWrapper" :key="updateSlider">
      <div class="w-100 productContent__catTop">
          <div class="productContent__topRight">
              <h3 class="w-100 productContent__catTitle">{{title.title}}</h3>
              <h3 class="productContent__titleVisit w-100">{{title.titleVisit}}</h3>
          </div>

          <div class=" productContent__sliderMore productContent__topLeft">
              <nuxt-link class="productContent__moreItem" to="/">
                لیست کامل محصولات
                <span class=" productContent__moreIcon mobile-inprogress__arrow"></span>
              </nuxt-link>
          </div>
      </div>


        <!-- mobile show -->
          <div v-if="showSliderMobile" :class="nameElementFindSlider" class="productContent__mainCat  main-carousel w-100 productContent__mainSlider">
                  <div  v-for="data in allCategoryMobileSplitTwice" :key="data.id" class="carousel-cell productContent__carousel ">
                        <div  @click="switchLink($event)" v-for="contentChildren in data.children" :key="contentChildren.id" class="productContent__carouselContent w-100">
                            <NuxtLink
                            class="w-100 productContent__carousel-link"
                            :to=" '/' + title.sliderItemHref + '/' + contentChildren.id "
                            target="_blank"
                            :data-id="contentChildren.id"
                            >
                          </NuxtLink>

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

          <div v-else :class="nameElementFindSlider" class="productContent__mainCat  main-carousel w-100 productContent__mainSlider">
                  <div :data-href="data.href" :data-id="data.id" @click="switchLink($event)" v-for="data in allCategory" :key="data.id" class="carousel-cell productContent__carousel ">
                      <div class="productContent__carouselContent w-100">


                            <a
                            class="w-100 productContent__carousel-link"
                            :href="data.href"
                            target="_blank"
                            v-if="title.sliderItemHref == 'brand' "
                            >
                            </a>

                            <NuxtLink
                              class="w-100 productContent__carousel-link"
                              :to=" '/' + title.sliderItemHref + '/' + data.id "
                              target="_blank"
                              v-else
                              >
                            </NuxtLink>

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
          </div>
          <div class="productContent__line"></div>


  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      allCategory              : { type: [Object,Array], default: [] },
      nameElementFindSlider    : { type: String, default: '' },
      title                    : { type: Object, default: {} },

    },

    data() {
      return {
        showSliderMobile            : false,
        allCategoryMobileSplitTwice : [],
        flkty                       : {},
        updateSlider                : 0,
      }
    },

    mounted() {
      const width   = window.innerWidth;

      if (485 >= width) {
        this.showSliderMobile = true;
      }


      // جدا کزدن دسته بندی به صورت دوتا دوتا //
      this.itemCategorySplitTwice();
      this.detectedResizeBrowser();

      setTimeout( () =>{
        this.flickityOptions();
      },100);

    },

    computed: {

    },

    methods: {
      flickityOptions(){
        let Flickity       = require("flickity")
        let sliderOptions  = new Flickity( `.${this.nameElementFindSlider}`, {
          accessibility   : true,
          adaptiveHeight  : true,
          rightToLeft     : true,
          cellAlign       : 'right',
          imagesLoaded    : true,
          wrapAround      : false,
          contain         : true,
          prevNextButtons : true,
          // autoPlay        : true, // advance cells every 3 seconds
          // autoPlay: 1500 // {Number}
          freeScroll      : false,
          pageDots        : false,
          groupCells      : true,
          fade            : false,
        });

        this.flkty = sliderOptions;

        sliderOptions.on( 'staticClick', ( event, pointer, cellElement, cellIndex ) =>{
          let currentId            = -1;
          const currentIdDesktop   = parseInt(cellElement.getAttribute('data-id'))
          const currentIdMobile    = parseInt(event.target.getAttribute('data-id'));

          // فقط در موبایل اجرا می شود //
          if (Number.isNaN(currentIdDesktop)) {
            currentId = currentIdMobile;
          }
          else {
            currentId = currentIdDesktop;
          }

          // در صورتی که بر روی یکی از آیتم های برند کلیک شود به آدرس ای که گفته شده می رود //
          if (this.title.sliderItemHref == 'brand') {
            const currentHrefBrand   = cellElement.getAttribute('data-href');
            window.location.href     = currentHrefBrand;
          }
          else {
            this.$router.push(`/${this.title.sliderItemHref}/${currentId}`);
          }
        });


      },

      itemCategorySplitTwice(){
        let counterTwice      = 0;
        let contentTwiceSplit = [];
        let levelSplit        = 0;

        // دوتا دوتا جدا سازی آیتم ها در موبایل //
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

      detectedResizeBrowser(){
        // نمایش اسلایدر در موبایل در صورت ریسایز کردن مرورگر //
        window.addEventListener("resize", ()=>{
            // let checkUpdateSlider = false;
            const width   = window.innerWidth;

            if (485 >= width) {
              this.showSliderMobile = true;
            }
            else {
              this.showSliderMobile = false;
            }

            this.updateSlider++;
            setTimeout( () =>{
              this.flickityOptions()
            });
          }, true);
      },

      switchLink(event){
        event.preventDefault();
      }



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
  position: relative;
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
.productContent__line{
  position: absolute;
  left: 0;
  top: 0;
  width: 91px;
  height: 220px;
  background: linear-gradient(90deg, #FFFFFF -41.48%, rgba(255, 255, 255, 0) 151.7%);
  opacity: 0.9;
  display: none;
}
.productContent__sliderWrapper{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  position:relative;
  padding-top: 24px;
  padding-bottom: 34px;
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
  color: $black;
  font-size: 18px;
  font-weight: 500;
}
.productContent__catTop{
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 24px;
  padding-left: 24px;
  align-items: flex-start;
  margin-bottom: 31px;
}
.productContent__sliderMore{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 13px;
}
.productContent__moreItem{
  font-size: 16px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
}
.productContent__moreIcon{
  @include display-flex();
  margin-right: 11px;
}
.mobile-inprogress__arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 14px;
    margin-top: 1px;
}
.productContent__topRight{
  flex-grow: 1;
  @include display-flex();
  flex-wrap: wrap;
}
.productContent__titleVisit{
  margin-top: 8px;
  color: $gray;
  font-size: 17px;
  font-weight: 300;
  // display: none;
}
.productContent__catChangeStyle .productContent__carouselImgItem{
  height: 63px;
}
.productContent__catChangeStyle  .productContent__catTop{
  margin-bottom: 38px;
}
.productContent__carousel-link{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}



@media (max-width: 960px) {
  .productContent__sliderWrapper{
    padding-top: 16px;
    padding-bottom: 21px;
  }
}

@media (max-width: 600px) {
  .productContent__topRight{
    width: 100%;
  }
  .productContent__topLeft{
    width: 100%;
  }
  .productContent__catTitle{
    font-size: 16px;
  }
  .productContent__moreItem{
    font-size: 14px;
  }
}


@media (max-width: 485px) {
  // .productContent__carouselContent:last-of-type{
  //   margin-bottom: 0;
  // }
  .productContent__titleVisit{
    @include display-flex();
    font-size: 13px;
  }
  .productContent__carouselContent{
    flex-flow: inherit;
    margin-bottom: 16px;
    background: $white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    height: 66px;
    border-radius: 10px;
    width:195px;
    margin-top: 1px;
    padding-top: 6px;
    padding-bottom: 10px;
    margin-right: auto;
    margin-left: auto;
  }
  // .productContent__carousel:nth-child(1) .productContent__carouselContent{
  //   margin-right: 11px;
  // }
  .productContent__carousel{
    width:215px;
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
    // padding-right: 11px;
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
  .productContent__catTitle{
    font-size: 14px;
    color: $black-topic;
    font-weight: 300;
    height: 27px;
  }
  .productContent__catTop{
    margin-bottom: 16px;
    padding-right: 11px;
    padding-left: 11px;
  }
  .productContent__topLeft{
    display: none;
  }
  .productContent__line{
    @include display-flex();
  }

}




</style>
