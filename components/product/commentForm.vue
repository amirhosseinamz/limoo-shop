<template>
  <div class="comment__form-main">
    <form @submit="submitData" ref="form" class="w-100" >
          <div class="w-100">
            <div :class="{'p-modal-show_error':false}" class="w-100 comment__form-item ">
              <h3 class="comment__form-title">عنوان نظر شما:</h3>
              <input maxlength="65"  type="text" class="p-modal-address-input p-input-style__default ">
              <span  class="pass__alert "></span>
            </div>
            <div :class="{'p-modal-show_error':false}" class="w-100 comment__form-item ">
              <h3 class="comment__form-title">متن نظر شما:</h3>
              <textarea   class="comment__textara-item p-input-style__default p-modal-address-input"  rows="8" cols="80"></textarea>
              <span  class="pass__alert "></span>
            </div>
          </div>

          <div class="w-100 comment__suggest-main">
              <h3 class="comment__suggest-title w-100">آیا خرید این محصول را پیشنهاد می کنید؟</h3>
              <div class="w-100 comment__suggest-data radio--btn">
                  <div  v-for="(data,index) in radioBtnData" :key="data.id" class="comment__suggest-item">
                      <label @change="activeRadioBtn($event,data)" class="container">
                        <input name="radio" :checked="data.checked"   type="radio">
                        <span class="checkmark"></span>
                        <h3 class="comment__suggest-text">{{data.title}}</h3>
                      </label>
                  </div>
              </div>
          </div>

          <div class="w-100 comment__suggest-btns">
            <button type="submit" name="button" class="p-product-btn  p-favorite-product-btn-modal-delete cursor-pointer  ">
                      ثبت
              </button>
            <button type="button" name="button" class="p-product-btn  cursor-pointer p-favorite-product-btn-modal-cancel ">
                انصراف
            </button>
          </div>

    </form>

  </div>
</template>

<script>
import '~/assets/styles/_radio_btn_style.scss'


export default {
    props: {
      radioBtnData      : { type: [Object, Array], default: {} },
      commentsData      : { type: [Object, Array], default: {} },
    },

    components: {
    },

    data() {
      return {
         currentActiveRadio : {},
         formData           : {
           "Date"        : "",
           "Firstname"   : "",
           "Lastname"    : "",
           "Title"       : "",
           "Body"        : "",
           "Rate"        : "",
           "Suggest"     : 1,
         },
      }

    },

    computed: {

    },

    mounted() {

    },

    methods: {
      activeRadioBtn($event,data){
        this.radioBtnData.map((content)=>{
          if (content.id == data.id) {
            content.checked = true;
          }
          else {
            content.checked = false;
          }
        })

        this.currentActiveRadio = data;
      },

      submitData(e){
        e.preventDefault();
        console.log(this.radioBtnData);
      },

    }
};
</script>

<style lang="scss" scoped>
    .comment__form-main{
      width: 481px;
      margin-right: auto;
      margin-left: auto;
      padding-top: 38px;
    }
    .p-modal-address-input{
      width: 100%;
    }
    .comment__form-title{
      font-size: 16px;
      color: $black-topic;
      margin-bottom: 16px;
      font-weight: 400;
    }
    .comment__form-item{
      margin-bottom: 24px;
    }
    .comment__form-item:last-of-type{
      margin-bottom: 0;
    }
    .comment__textara-item{
      height: 126px;
      padding-top:12px;
      padding-bottom: 12px;
      padding-right: 12px;
      padding-left: 12px;
      resize: none;
    }
    .comment__suggest-title{
      font-size: 16px;
      color: $black-topic;
      margin-bottom: 38px;
      font-weight: 400;
    }
    .comment__suggest-main{
      margin-top: 38px;
    }
    .comment__suggest-text{
      font-size: 16px;
      color: $black-topic;
      font-weight: 400;
      margin-right: 28px;
    }
    .comment__suggest-data {
      @include display-flex();
      align-items: flex-start;
      justify-content: space-between;
    }
    .radio--btn .checkmark{
      border-radius: 1000px;
      padding: 5px;
      border:solid 5px $light-gray
    }
    .radio--btn .checkmark::after{
      display: none !important;
    }
    .radio--btn .container input:checked ~ .checkmark{
      background: $white;
    }
    .comment__suggest-btns{
      justify-content: center;
      @include display-flex();
      margin-top: 42px;
      margin-bottom: 24px;
    }
    .p-product-btn  {
      width: 130px;
    }

  @media (max-width: 760px) {

  }





</style>
