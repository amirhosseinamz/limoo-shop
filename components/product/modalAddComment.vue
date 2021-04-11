<template>
    <modal id="add--comment" class="d-rtl " size="1083px" :show.sync="show" :footer="false">
        <div
            class="w-100  product__modal"
        >

        <div class="w-100 product__modal-text comment--mobile">
              <div class="w-100 product__modal-top">
                <h3 class="product__modal-title">مشخصات فنی</h3>
                <!-- <span class="product__modal-close"></span> -->
                <span @click="modalClose" class="product__modal-arrow"></span>
              </div>
              <span class="product__modal-line"></span>
        </div>
        
        <div class="comment--close__main comment--desktop">
            <span class="comment__close"></span>
        </div>

        <div class="w-100 comment__modal-container">
                <div class="comment__modal-rating">
                        <h3 class="comment__rating-title">به این محصول چه امتیازی می دهید؟</h3>
                        <div class="comment__stars">
                            <span :class="{'active--star':data.active}" @click="activeStr(data)" :key="data.id" v-for="data in commentStar" class="comment__star"></span>
                        </div>
                </div>
                
        </div>





        </div>
    </modal>
</template>

<script>
import '~/assets/styles/_modal_add_comment.scss'
// import '~/assets/styles/_modal_add_comment_star.scss'


export default {
    props: {
        active          : { type: [Boolean, Number], default: false },
        // productData     : { type: [Object,Array], default: [] },
    },

    components: {
    },

    data() {
      return {
          commentStar : [
              {
                  id     : 1,
                  active : true,
              },
               {
                  id     : 2,
                  active : true,
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

    },

    watch: {
      show(status){
        //  this.$store.commit('singleProduct/showHidenBodyScroll',status)
      }
    },


    methods: {
        modalClose() {
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
            this.currentStarActive = data;
        }

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
        width: 372px;
        @include display-flex();
        justify-content: space-between;
    }
    .active--star::before{
        color:#FFD35A;
    }



  @media (max-width: 760px) {
  
  }





</style>
