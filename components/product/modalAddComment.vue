<template>
    <modal id="add--comment" class="d-rtl " size="1083px" :show.sync="show" :footer="false">
        <div
            class="w-100  product__modal"
        >

        <div class="w-100 product__modal-text comment--mobile">
              <div class="w-100 product__modal-top">
                <h3 class="product__modal-title">مشخصات فنی</h3>
                <!-- <span class="product__modal-close"></span> -->
                <span @click="closeModal" class="product__modal-arrow"></span>
              </div>
              <span class="product__modal-line"></span>
        </div>

        <div class="comment--close__main comment--desktop">
            <span @click="closeModal" class="comment__close"></span>
        </div>

        <div class="w-100 comment__modal-container">
            <div class="w-100 comment--modal__top">
                    <div class="comment__modal-rating">
                          <h3 class="comment__rating-title">به این محصول چه امتیازی می دهید؟</h3>
                          <div class="comment__stars">
                            <span :class="{'active--star':data.active}" @click="activeStr(data)" :key="data.id" v-for="data in commentStar" class="comment__star"></span>
                          </div>
                    </div>

                    <div class="comment--slider__main">
                          <client-only>
                              <vue-slider
                              v-model="valueRengeSlider"
                              :max="5"
                              :min="0"
                              ref="slider"
                              @change="changeSliderRenge"
                              height="9px"
                              width="99%"
                              :dotSize="dotSize"
                              direction="rtl"
                              padding="7px 0px"
                              >
                                <template v-slot:dot="{ value, focus }">
                                  <img src="/icons/renge-circle.svg" :class="['renge-circle custom-dot', { focus }]"></img>
                                </template>
                            </vue-slider>
                        </client-only>
                  </div>
            </div>

            <comment-form
              @submit-data="submitData"
              @close-modal="closeModal"

              :radio-btn-data="radioBtnData"
              :comments-data="commentsData"
              :value-renge-slider="valueRengeSlider"
              :comment-star="commentStar"

               ></comment-form>

        </div>





        </div>
    </modal>
</template>

<script>
import '~/assets/styles/_modal_add_comment.scss'
import '~/assets/styles/_slider_range_price.scss'
import commentForm from './commentForm';


export default {
    props: {
        active           : { type: [Boolean, Number], default: false },
        radioBtnData     : { type: [Object,Array], default: [] },
        commentsData     : { type: [Object, Array], default: {} },
    },

    components: {
      commentForm,
    },

    data() {
      return {
          commentStar       : [
              {
                  id     : 1,
                  active : false,
              },
               {
                  id     : 2,
                  active : false,
              },
               {
                  id     : 3,
                  active : false,
              },
               {
                  id     : 4,
                  active : false,
              },
               {
                  id     : 5,
                  active : false,
              },
          ],
          currentStarActive : {},
          valueRengeSlider  : 0,
          dotSize           : 35,


      }

    },

    computed: {
        show: {
            set(val) {
                this.$emit("update:active", !!val);
            },
            get() {
                return !!this.active;
            }
        }
    },

    mounted() {
      // this.activeDefaultRengeSlider();
      const width   = window.innerWidth;

      if (760 >= width) {
        this.dotSize = 26;
      }

      this.detectedResizeBrowser();
    },

    watch: {
      show(status){
        this.$store.commit('singleProduct/showHidenBodyScroll',status);
        if (!status) {
          // پاک کردن دیتا هایی که قبلا در مودال نوشته شده بود //
          this.valueRengeSlider = 0;
          this.commentStar.map((content)=>{
            content.active = false;
          })
        }
      }
    },


    methods: {
        closeModal() {
            this.show = false;
        },

        activeStr(data){
            this.commentStar.map((content)=>{
                if (data.id >= content.id) {
                    content.active = true;
                }
                else{
                    content.active = false;
                }
            });
            this.activeDefaultRengeSlider();
        },

        changeSliderRenge(currentRenge){
          const currentStarActive = {
            id     : currentRenge,
            active : false,
          }

          this.activeStr(currentStarActive)
        },

        activeDefaultRengeSlider(){
          // پیدا کردن مقدار پیشفرض ستاره ها //
          let findCountLastActiveStar = -1;
          this.commentStar.map((content)=>{
              if (content.active) {
                findCountLastActiveStar = content.id;
              }
          });
          this.valueRengeSlider  = findCountLastActiveStar;
        },

        submitData(data){
          this.$emit('submit-data',data);
        },

        detectedResizeBrowser(){
          window.addEventListener("resize", ()=>{
              const width   = window.innerWidth;

              if (760 >= width) {
                this.dotSize = 26;
              }
              else {
                this.dotSize = 35;
              }

            }, true);
        },


    }
};
</script>

<style lang="scss" scoped>
  .comment__close::before {
        content: "\e807";
        @include font-icon__limoo();
        font-size: 30px;
        color: $gray;
        cursor: pointer;
        opacity: .5;
    }
    .comment--close__main{
       @include display-flex();
       justify-content: flex-end;
    }
    .comment--mobile{
        display: none;
    }
    .comment__rating-title{
        font-size:16px;
        color:$color-price;
        font-weight: 400;
        margin-top:15px;
        margin-bottom:43px;
    }
    .comment__modal-rating{
        @include display-flex();
        justify-content: center;
    }
    .comment__star{
       @include display-flex();
       cursor:pointer;
    }
    .comment__star::before {
        content: "\e825";
        @include font-icon__limoo();
        font-weight: 400;
        font-size: 31px;
        color: $light-gray;
        letter-spacing: 2px;
    }
    .comment__modal-rating{
        width:100%;
        flex-wrap: wrap;
       @include display-flex();
    }
    .comment__stars{
        width: 100%;
        @include display-flex();
        justify-content: space-between;
    }
    .active--star::before{
        color:#FFD35A;
    }
    .comment--modal__top{
      @include display-flex();
      flex-wrap: wrap;
      align-items: flex-start;
      width:372px;
      flex-flow: column;
      margin-right: auto;
      margin-left: auto;
    }
    .comment__modal-container{
      flex-wrap: wrap;
      @include display-flex();
      width:100%;
      flex-flow: column;
      align-items: flex-start;
    }
    .comment--slider__main{
      width:100%;
      margin-top: 27px;
    }
    .renge-circle{
      width:35px;
      height: 35px;
      pointer-events: none;
    }

    // این قسمت به علت تکرار جدا شود  //
    .product__modal-close::after{
      @include display-flex();
      content: "\e801";
      @include font-icon__limoo();
      font-size: 12px;
    }
    .product__modal-close{
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
    .product__modal-title{
      font-size: 14px;
      color:$black;
      font-weight: 400;
      flex-grow: 1;
      min-height: 18px;
      color:$black-topic;
    }
    .product__modal-top{
      @include display-flex();
      align-items: flex-start;
      padding-right: 16px;
      padding-left:16px;
    }
    .product__modal-line{
      margin-bottom: 15px;
      margin-top: 15px;
    }
    .product__modal-line{
      background: $gray-border;
      width: 100%;
      height: 1px;
      @include display-flex();
    }
    .product__modal-text{
      align-items: center;
      flex-wrap: wrap;
    }
    .product__modal-arrow::after {
      content: "\e801";
      @include font-icon__limoo();
      font-size: 17px;
      cursor: pointer;
      color:$gray;
    }


  @media (max-width: 760px) {
    .comment--mobile{
      @include display-flex();
    }
    .comment--desktop{
      display: none;
    }
    .comment--modal__top{
      width: 74%;
    }
    .comment__rating-title{
      font-size: 14px;
      color: $gray;
      margin-bottom: 24px;
      margin-top: 24px;
    }
    .comment__star::before{
      font-size: 21px;
    }
    .comment__stars{
      justify-content: center;
    }
    .comment__star{
      margin-left: 12px;
    }
    .comment__star:last-of-type{
      margin-left: 0;
    }
    .comment--slider__main{
      margin-top: 14px;
    }
    .product__modal-line{
      margin-bottom: 0px;
    }
    .renge-circle{
      width:26px;
      height: 26px;
    }


  }





</style>
