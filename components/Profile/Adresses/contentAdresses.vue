<template>
  <div class="p-adresses-content-main w-100 flex-column flex-wrap  d-rtl">
      <div class="w-100 flex-wrap p-adresses-content-btn-add-main">
          <button type="submit" class=" btn-change p-adresses-content-btn-data">
              افزودن آدرس جدید
          </button>
      </div>

      <div class="w-100 flex-wrap p-adresses-content-items">
            <div v-for="data in adressData" :key="data.id" class="w-100 flex-wrap p-adresses-content-item">

                  <div class="flex-wrap w-100 p-adresses-content-wrapper align-items-start" >

                      <div class="d-flex align-items-start w-100">
                              <div class="w-100 flex-wrap  p-adresses-content-header align-items-center">

                                    <div class=" p-adresses-content-header-item align-items-center p-adresses-content-header-item-desktop">
                                      <img class="p-adresses-content-header-icon" src="/icons/location_adress_yellow.svg" alt="">
                                      <h3 class="p-adresses-content-header-item-title">{{data.title}}</h3>
                                    </div>

                                    <div class=" p-adresses-content-header-item align-items-center">
                                      <img class="p-adresses-content-header-icon" src="/icons/profile_adress.svg" alt="">
                                      <h3 class="p-adresses-content-header-item-title">شروین پیکارجو</h3>
                                    </div>

                                    <div class=" p-adresses-content-header-item align-items-center">
                                      <img class="p-adresses-content-header-icon" src="/icons/location_adress.svg" alt="">
                                      <h3 class="p-adresses-content-header-item-title">تهران</h3>
                                    </div>

                                    <div class=" p-adresses-content-header-item align-items-center">
                                      <img class="p-adresses-content-header-icon" src="/icons/call_adress.svg" alt="">
                                      <h3 class="p-adresses-content-header-item-title">09198814783</h3>
                                    </div>

                                    <div class=" p-adresses-content-header-item align-items-center">
                                      <img class="p-adresses-content-header-icon" src="/icons/message.svg" alt="">
                                      <h3 class="p-adresses-content-header-item-title">424265287</h3>
                                    </div>


                              </div>

                              <div class="w-100 flex-column p-adresses-content-data-main">
                                    <div class="p-adresses-content-text-desktop w-100 p-adresses-content-data flex-wrap align-items-start">
                                        <div class="w-100 p-adresses-content-text-main text-right">
                                          <h3 class="p-adresses-content-text-data w-100">{{data.title}}</h3>
                                        </div>
                                    </div>
                                    <div class="p-adresses-content-data-btns w-100 justify-content-end">
                                        <div class="p-favorite-product-btn-main">
                                            <button type="button" class="p-product-btn cursor-pointer p-adresses-content-btn-edit" name="button">
                                              <NuxtLink :to="'/product/' + data.id" class="p-favorite-product-btn-link p-adresses-content-edit-desktop">ویرایش</NuxtLink>
                                              <NuxtLink :to="'/product/' + data.id" class="p-favorite-product-btn-link p-adresses-content-edit-mobile ">
                                                <img class="p-adresses-content-edit-icon" src="/icons/icon-edit.svg" alt="">
                                              </NuxtLink>
                                            </button>
                                            <button @click="showModalDeleteProduct(data)" class="p-favorite-product-btn-delete cursor-pointer  p-adresses-content-btn-delete" name="button">
                                              <img class="p-favorite-product-item-icon-delete" src="/icons/delete.svg" alt="">
                                            </button>
                                        </div>
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
    props: {
      adressData: { type: [Object,Array], default: {} },
    },

    components: {

    },

    computed: {

    },

    methods: {
      showModalDeleteProduct(data){
        this.$emit('show-modal-delete-product',data)
      }
    },

};
</script>

<style lang="scss" scoped>
  .p-adresses-content-main{
    padding-right: 21px;
    padding-left: 21px;
  }
  .p-adresses-content-btn-add-main{
    @include display-flex();
  }
  .p-adresses-content-btn-data{
    margin-top: 45px;
    margin-bottom: 35px;
    font-size: 16px;
  }
  .p-adresses-content-item{
    @include display-flex();
    border: 1px solid $light-gray;
    border-radius: 10px;
    height: 241px;
    margin-bottom: 24px;
  }
  .p-adresses-content-header{
    @include display-flex();
    padding-right: 23px;
    padding-left: 23px;
  }
  .p-adresses-content-header{
    background: $google-btn__bg;
    height: 73px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .p-adresses-content-header-icon{
    width: 23px;
    height: 23px;
  }
  .p-adresses-content-header-item{
    @include display-flex();
    margin-left: 85px;
  }
  .p-adresses-content-header-item-title{
    font-family: inherit;
    font-size: 16px;
    margin-right: 10px;
    color: $black-topic;
    font-weight: 400;
    text-align: right;
  }
  .p-adresses-content-data{
    @include display-flex();
    padding-right: 27px;
    padding-left: 27px;
  }
  .p-adresses-content-text-data{
    font-family: inherit;
    font-size: 16px;
    color: $black-topic;
    font-weight: 400;
  }
  .p-adresses-content-text-main{
    @include display-flex();
    margin-top: 25px;
    margin-bottom:36px;
  }
  .p-adresses-content-data-btns {
    @include display-flex();
    padding-left: 16px;
  }
  .p-adresses-content-btn-edit{
    width: 130px;
  }
  .p-adresses-content-wrapper{
    @include display-flex();
  }
  .p-adresses-content-data-main{
    @include display-flex();
  }
  .p-adresses-content-edit-mobile{
    display: none;
  }
  .p-adresses-content-edit-icon{
    width: 16px;
    height: 16px;
  }
  .p-adresses-content-header-item-desktop{
    display: none;
    align-items: flex-start;
  }

  @media (max-width: 1220px) {
    .p-adresses-content-header-item{
      margin-left: 10%;
    }
    .p-adresses-content-header-item:last-of-type{
      margin-left: 0;
    }
  }

  @media (max-width: 1024px) {
    .p-adresses-content-header-item{
      margin-left: 6%;
    }
  }

  @media (max-width: 960px) {
    .p-adresses-content-header-item{
      margin-left: 10%;
    }
  }

  @media (max-width: 600px) {
    .p-adresses-content-header{
      flex-flow: column;
      height: auto;
      background: $white;
    }
    .p-adresses-content-item{
      background: $white;
      height: auto;
    }
    .p-adresses-content-header-item{
      margin-left: 0;
      width: 100%;
      margin-top: 19px;
    }
    .p-adresses-content-header-item-title{
      font-size: 14px;
    }
    .p-adresses-content-text-data{
      font-size: 14px;
    }
    .p-adresses-content-data-btns {
      margin-bottom: 19px;
      margin-top: 16px;
    }
    .p-adresses-content-text-desktop{
      display: none;
    }
    .p-favorite-product-btn-delete{
      width: 37px;
      height: 37px;
    }
    .p-adresses-content-btn-edit{
      background: $yellow;
      border-radius: 10px;
      height: 36px;
      width: 36px;
    }
    .p-adresses-content-edit-desktop{
      display: none;
    }
    .p-adresses-content-edit-mobile{
      display: flex;
    }
    .p-adresses-content-btn-delete{
      margin-right: 16px;
    }
    .p-adresses-content-header-icon{
      width: 18px;
      height: 18px;
    }
    .p-adresses-content-header-item-desktop{
      display: flex;
    }
  }








</style>
