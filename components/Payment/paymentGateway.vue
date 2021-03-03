<template>
  <div  class="w-100 payment-gateway">
        <div :class="{'payment--active':data.selected}" @click="selectedGetway(data)" v-for="data in paymentGateway" :key="data.id" class="payment-gateway__item">
            <span class="payment-gateway__circle"></span>
            <h3 class="payment-gateway__title">{{data.title}}</h3>
        </div>
  </div>
</template>

<script>

export default {
    props: {
      paymentGateway   : { type: [Object,Array], default: [] },
    },

    components: {

    },

    data() {
        return {
        };
    },

    methods: {
      selectedGetway(data){
        this.$emit('selected-getway',data)
      },

    }

};
</script>


<style lang="scss" scoped>
  .payment-gateway{
    padding-right: 26px;
    padding-left: 26px;
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 24px;
    padding-bottom: 24px;
  }
  .payment-gateway__item{
    min-width:163px;
    background: $white;
    border: 1px solid $input-border;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
    border-radius: 15px;
    padding-right: 16px;
    padding-left: 16px;
    margin-left: 24px;
    @include display-flex();
    align-items: center;
    cursor: pointer;
  }
  .payment-gateway__item:last-of-type{
    margin-left: 0;
  }
  .payment-gateway__title{
    height: 52px;
    color: $color-price;
    margin-right: 8px;
    align-items: center;
    @include display-flex();
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
  }
  .payment-gateway__circle{
    width: 17px;
    height: 17px;
    border-radius: 1000px;
    background: $white;
    border:solid 5px $light-gray;
  }
  .payment--active{
    border-color:$yellow;
  }
  .payment--active .payment-gateway__circle{
    border-color:$yellow;
  }

  @media (max-width: 960px) {
    .payment-gateway__title{
      font-size: 13px;
    }
    .payment-gateway__item{
      min-width: 150px;
      margin-bottom: 16px;
    }
    .payment-gateway{
      padding-bottom: 8px;
    }
  }


</style>
