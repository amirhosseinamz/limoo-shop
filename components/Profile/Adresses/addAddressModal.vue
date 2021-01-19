<template>
    <div
        class="modal modal-animation__open"
        :class="{ 'modal-animation__close': modalClose }"
        dir="rtl"
    >
      <div class="w-100 p-modal-header">
          <div class="w-100 p-modal-header-mobile">
              <img
              @click="closeModalDesktop"
              class="modal__close-cross"
              src="/icons/close.svg"
              />
              <img
              @click="closeModalMobile"
              class="modal__close-line"
              src="/icons/line.svg"
              />
              <span class="modal__title">افزودن آدرس جدید</span>
              <hr class="splicer-line" />
          </div>

          <div class="p-modal-header-desktop w-100 flex-column">
              <div class="w-100 p-modal-header-top-main">
                  <div class="p-modal-header-top align-items-center">
                    <img
                    class="p-modal-header-icon-location"
                    src="/icons/location_adress.svg"
                    />
                    <h3 class="p-modal-header-top-title">افزودن آدرس جدید</h3>
                  </div>
                  <div class="p-modal-header-close ">
                    <img
                    @click="closeModalMobile"
                    class="modal__close-cross p-modal-header-close-icon"
                    src="/icons/close_modal_address.svg"
                    />
                  </div>
              </div>
              <span class="splicer-line p-modal-header-line" ></span>
          </div>

      </div>


        <form @submit.prevent="" class="w-100 p-modal_wrapper align-items-start" >

            <div class="p-modal-content w-100 align-items-start flex-wrap">
                <div class="w-100 p-modal-address">
                  <h3 class="p-modal-wrapper-province_city-title">نشانی پستی دقیق :</h3>
                  <input @keyup="updateAddress" v-model="formData.address" type="text" class="p-modal-address-input p-input-style__default ">
                  <!-- <span v-if="formData.validationForm.address.status" class="pass__alert">لطفا شهر خود را انتخاب کنید</span> -->
                </div>

                <div class="w-100 p-modal-content-items flex-wrap">

                      <div class="p-modal-wrapper-item flex-wrap " :key="initialValueProvince">
                        <h3 class="p-modal-wrapper-province_city-title">انتخاب استان:</h3>
                            <customeDropDown
                               :options="allProvince"
                                :initial-value="initialValueProvince"
                                label="title"
                                className="p-modal-select-box-province_city"
                                @last-update="selectedProvince"
                             ></customeDropDown>
                             <!-- <span v-if="formData.validationForm.province.status" class="pass__alert">لطفا شهر خود را انتخاب کنید</span> -->
                      </div>
                      <div class="p-modal-wrapper-item">
                        <h3 class="p-modal-wrapper-province_city-title">انتخاب شهر :</h3>
                            <customeDropDown
                              :options="allCitys"
                               :initial-value="initialValueCity"
                               label="title"
                                className="p-modal-select-box-province_city"
                                @last-update="selectedCity"
                            ></customeDropDown>
                            <!-- <span v-if="formData.validationForm.city.status" class="pass__alert">استان خود را انتخاب کنید</span> -->
                      </div>
                      <div class="p-modal-wrapper-item p-margin-left-0">
                        <h3 class="p-modal-wrapper-province_city-title">کد پستی (اختیاری) :</h3>
                        <input @keyup="updateCodePoste" v-model="formData.codePoste" type="number" class="p-modal-item-input p-input-style__default">
                        <!-- <span v-if="formData.validationForm.codePoste.status" class="pass__alert">صحیح نمی باشد</span> -->
                      </div>
                      <div class="p-modal-wrapper-item ">
                        <h3 class="p-modal-wrapper-province_city-title">نام گیرنده:</h3>
                        <input @keyup="updateNameReceiver"  v-model="formData.nameReceiver" type="text" class="p-modal-item-input p-input-style__default">
                        <!-- <span v-if="formData.validationForm.nameReceiver.status" class="pass__alert">نمی تواند خالی باشد</span> -->
                      </div>

                      <div class="p-modal-wrapper-item">
                        <h3 class="p-modal-wrapper-province_city-title">شماره گیرنده :</h3>
                        <input @keyup="UpdateNumberReceiver" v-model="formData.numberReceiver" type="text" class="p-modal-item-input  p-input-style__default">
                        <!-- <span v-if="formData.validationForm.numberReceiver.status" class="pass__alert">نمی تواند خالی باشد</span> -->
                      </div>
                  </div>



              </div>


            <div class="p-profile-favorite-btns w-100 justify-content-center p-modal-btns">
              <button @click="submitAddressAdd"  type="button" name="button" class="p-product-btn  p-favorite-product-btn-modal-delete cursor-pointer  ">
                ثبت
              </button>
              <button @click="eventCloseModal"  type="button" name="button" class="p-product-btn  cursor-pointer p-favorite-product-btn-modal-cancel  ">
                بازگشت
              </button>
            </div>

        </form>
    </div>
</template>
<script>
import customeDropDown from "../../../modules/customeDropDown.vue";
import '../../../assets/styles/_adresses.scss'

export default {
  props: {
    allProvince         : { type: [Object,Array], default: [] },
    allCitys            : { type: [Object,Array], default: [] },
    formDataOriginal    : { type: [Object,Array], default: {} },
    dataEditAddress     : { type: Object, default: {} },
  },
  components: {
    customeDropDown,
  },
    data() {
        return {
            modalClose                              : false,
            msg                                     : [],
            valueProvince                           : {},
            valueCitys                              : {},
            formData                                :  {

            },
            initialValueProvince                    : '',
            initialValueCity                        : '',

        };
    },

    watch: {
      dataEditAddress(data){
      },

    },

    created() {
      // پس از کلیک روی ویرایش آدرس کاندیشن زیر اجرا می شود //
      if (typeof(this.dataEditAddress.id) != 'undefined') {
        for (let key in this.dataEditAddress) {
          this.formData[key]       = this.dataEditAddress[key];
        }
        this.initialValueProvince  = this.formData.province;
        this.initialValueCity      = this.formData.city;
      }
      else {
        const formData = this.formDataOriginal;
      }
    },

    mounted() {
    },

    methods: {
      updateCodePoste(e){
      },

      updateNameReceiver(e){

      },

      UpdateNumberReceiver(e){

      },

      updateAddress(e){

      },

      closeModalMobile() {
          this.$emit('close-modal');
            // setTimeout(() => {
            //     this.$parent.passChange();
            // }, 280);
      },

      closeModalDesktop() {
          this.$emit('close-modal');
      },

      checkValidFormData(){
      },


      submitAddressAdd() {
        this.$emit('submit-address-add',this.formData)
      },

      selectedProvince(value,allData){
        this.formData.province     = value;
        // this.initialValueProvince  = value;
        this.$emit('selected-province',allData)
      },

      selectedCity(value,allData){
        this.formData.city         = value;
        // this.initialValueCity      = value;
        this.$emit('selected-city',allData)
      },

      eventCloseModal(){
        this.$emit('close-modal');
      },

    }
};
</script>
<style lang="scss" scoped>
.modal {
    @include display-flex();
    flex-direction: column;
    align-items: center;
    width: 982px;
    height: 623px;
    background: $white;
    box-shadow: 0px 8px 16px $box__shadow;
    border-radius: 15px;
    &__close-cross {
        align-self: flex-end;
        width: 30px;
        height: 30px;
        margin-top: 24px;
        margin-left: 24px;
        cursor: pointer;
    }
    &__close-line {
        display: none;
        align-self: center;
        margin-top: 24px;
    }
    &__title {
        display: none;
    }
    form {
        @include display-flex();
        flex-direction: column;
        align-items: center;
    }
    .pass__holder {
        height: 88px;
        margin-bottom: 35px;
        width: 45%;
        label {
            font-size: 16px;
            line-height: 140.62%;
            span {
                color: $red;
                margin-right: 3px;
            }
        }
    }
    .pass__repeat {
        margin-bottom: 42px;
    }
    .pass__old,
    .pass__new,
    .pass__new-repeat {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 52px;
        flex-grow: 1;
        background: $white;
        border: 1px solid $input-border;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px $gray-border;
        border-radius: 15px;
        margin-top: 15px;
    }
    .pass__old > input,
    .pass__new > input,
    .pass__new-repeat > input {
        height: 52px;
        flex-grow: 1;
        background: transparent;
        /* border: 1px solid red; */
        padding: 16px;
        line-height: 140.62%;
        border: none;
        border-radius: 15px;
        font-family: inherit;
        outline: none;
        /* letter-spacing: 5px; */
        font-size: 16px;
    }
    .pass__submitbtn {
        align-self: center;
        margin-bottom: 40px;
        height: 57px;
        width: 270px;
        background: $btn__green;
        color: $white;
        font-size: 18px;
        font-family: inherit;
        line-height: 140.62%;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        border: none;
    }
    .pass__alert {
        margin-top: 4px;
        color: $alert-red;
        text-align: right;
        font-size: 14px;
        line-height: 140.62%;
        @include display-flex();
        width: 100%;
        text-align: right;
    }
}
.splicer-line {
    display: none;
}
.p-modal-city_provence{
  @include display-flex();
}
.p-modal-header-close-icon{
  margin-left: 0;
}
.p-modal_wrapper{
  padding-right: 191px;
  padding-left: 191px;
  @include display-flex();
  padding-top: 51px;
}
.p-modal-wrapper-item{
  width: 175px;
  margin-left: 37px;
  margin-bottom: 38px;
}
.p-modal-wrapper-item:last-of-type{
  margin-left: 0;
}
.p-modal-wrapper-province_city-title{
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  color: $black;
  text-align: right;
}
.p-margin-left-0{
  margin-left: 0;
}
.p-modal-header-desktop{
  @include display-flex();
}
.p-modal-header-mobile{
  display: none;
}
.p-modal-header-top{
  flex-grow: 1;
  @include display-flex();
}
.p-modal-header-icon-location{
  width: 24px;
}
.p-modal-header-top-title{
  color: $black;
  font-size: 18px;
  font-weight: 500;
  margin-right: 11.5px;
}
.p-modal-header{
  padding-right: 41px;
  padding-left: 41px;
}
.p-modal-content{
  @include display-flex();
}
.p-modal-content-items{
  height: 256px;
  @include display-flex();
}
.p-modal-address-input{
  width: 100%;
}
.p-modal-address{
  margin-bottom: 38px;
}
.p-modal-header-line{
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  height: 1px;
  background: $gray-border;
  @include display-flex();
  margin-top: 2px;
}
.p-modal-header-top-main{
  @include display-flex();
}
.p-modal-header-top{
  padding-top: 11px;
}
.p-modal-btns{
  padding-top: 41px;
}
















@media (max-width: 960px) {
    .modal-animation__open {
        animation: modalOpen 600ms linear;
    }
    @keyframes modalOpen {
        0% {
            transform: translate(0, 579px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
    .modal-animation__close {
        animation: modalClose 600ms linear;
    }
    @keyframes modalClose {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, 579px);
        }
    }
    .modal {
        align-self: flex-end;
        position: absolute;
        width: 100%;
        height: 570px;
        background: $white;
        box-shadow: 0px 20px 24px $overlay__profile-mobile;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &__close-cross {
            display: none;
        }
        &__close-line {
            display: block;
            align-self: center;
            margin-top: 24px;
        }
        &__title {
            display: block;
            font-size: 14px;
            line-height: 140.62%;
            color: $gray;
            margin-top: 24px;
            text-align: center;
        }
        /* form {
            margin-top: 5px;
        } */
        .pass__holder {
            height: 80px;
            width: 84vw;
            margin-bottom: 35px;
            label {
                font-size: 14px;
            }
        }

        .pass__old,
        .pass__new,
        .pass__new-repeat {
            @include display-flex();
            height: 46px;
        }
        .pass__old > input,
        .pass__new > input,
        .pass__new-repeat > input {
            height: 46px;
            width: 200px;
        }
        .pass__submitbtn {
            width: 91vw;
            margin-bottom: 47px;
        }
        .pass__alert {
            font-size: 13px;
        }
    }
    .clear-input > img {
        width: 17px;
        height: 15px;
    }
    .splicer-line {
        display: block;
        width: 95%;
        border: none;
        margin: 16px 5px;
        border-top: 1px solid $gray-border;
        margin-bottom: 35px;
    }
}
@media screen and (max-width: 320px) {
    .modal-animation__open {
        animation: modalOpen 600ms linear;
    }
    @keyframes modalOpen {
        0% {
            transform: translate(0, 470px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
    .modal-animation__close {
        animation: modalClose 600ms linear;
    }
    @keyframes modalClose {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0, 470px);
        }
    }
    .modal {
        height: 470px;
        &__close-line {
            margin-top: 20px;
        }
        &__title {
            margin-top: 20px;
        }
        .pass__holder {
            height: 70px;
            width: 84vw;
            margin-bottom: 25px;
            label {
                font-size: 13px;
            }
        }
        .pass__old,
        .pass__new,
        .pass__new-repeat {
            @include display-flex();
            height: 40px;
        }
        .pass__old > input,
        .pass__new > input,
        .pass__new-repeat > input {
            height: 40px;
            width: 200px;
        }
        .pass__submitbtn {
            width: 91vw;
            margin-bottom: 37px;
            margin-top: 15px;
        }
    }
    .splicer-line {
        margin-bottom: 17px;
    }
}
</style>
