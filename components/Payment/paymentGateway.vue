<template>
  <div  class="w-100 payment-gateway">
        <div class="w-100 payment__content">
          <base-radio-button
            name="payment"
            class="payment-gateway__item"
            title-class="radio-title"
            v-for="data in paymentGateway"
            :key="data.id"
            :value="data.value"
            :title="data.title"
            button
          ></base-radio-button>
        </div>
  </div>
</template>

<script>

export default {
    computed: {
      paymentGateway() {
        return this.$store.getters["payment/payment/paymentGateway"];
      }
    }
};
</script>


<style lang="scss" scoped>
  .payment-gateway{
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
    padding: toRem(24) toRem(26);
  }
  .payment-gateway__item::v-deep{
    .radio-title {
      font-size: toRem(16);
    }
    min-width: toRem(163);
    box-shadow: 0 toRem(8) toRem(16) rgba(17, 17, 17, 0.03);
    padding-left: toRem(16);
    margin-left: toRem(24);
    cursor: pointer;
  }
  .payment-gateway__item:last-of-type{
    margin-left: 0;
  }
  .payment-gateway__title{
    height: toRem(52);
    color: $color-price;
    margin-right: toRem(8);
    align-items: center;
    @include display-flex();
    justify-content: center;
    font-size: toRem(16);
    font-weight: 400;
  }
  .payment__content{
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
  }
  @include md {
    .payment-gateway__item::v-deep{
        .radio-title {
          font-size: toRem(13);
        }
      min-width: toRem(140);
      margin-bottom: toRem(16);
      margin-left: toRem(16);
    }
    .payment-gateway{
      padding-bottom: toRem(8);
    }
    .payment-gateway{
      border-bottom: solid toRem(1) $gray-border;
      width: 100%;
      padding-right: toRem(12);
      padding-left: toRem(12);
    }
  }


  @include xxs {
    .payment__content{
      flex-direction: column;
    }
    .payment-gateway__item{
      margin-left: 0;
    }
    .payment-gateway__item:nth-child(2n){
      margin-right: auto;
      margin-left: auto;
    }
    .payment-gateway__item:last-of-type{
      margin-right: auto;
      margin-left: auto;
    }
    .payment-gateway__item{
      margin-right: auto;
      margin-left: auto;
      width: auto;
      min-width: toRem(150);
    }
  }



</style>
