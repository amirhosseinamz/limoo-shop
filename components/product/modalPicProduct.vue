<template>
    <modal class="d-rtl product--single__modal" size="1083px" :show.sync="show" :footer="false">
        <div
            class="w-100  product__modal"
        >

        <div class="w-100 product__modal-text">
              <div class="w-100 product__modal-top">
                <h3 class="product__modal-title">تصاویر محصول</h3>
                <!-- <span class="product__modal-close"></span> -->
                <img @click="modalClose" src="/icons/closeModalProduct.svg" class="product__modal-close" alt="">
              </div>
              <span class="product__modal-line"></span>
        </div>

        <div class="w-100 product__modal-pic">

        </div>

        <div class="w-100 product--modal_pic-all">

        </div>




        </div>
    </modal>
</template>

<script>
import '~/assets/styles/_modal_single_product.scss'

export default {
    props: {
        active: { type: [Boolean, Number], default: false },
        // currentOrders: { type: Object, default: {} }
    },

    components: {},

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

    methods: {
        DeleteOrder() {
            this.$emit("btn-delete-order", this.currentOrders);
        },

        modalClose() {
            this.show = false;
        }
    }
};
</script>

<style lang="scss" scoped>
  .product__modal{
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    @include display-flex();
  }
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
  .product__modal-text{
    @include display-flex();
    align-items: center;
    flex-wrap: wrap;
  }
  .product__modal-title{
    font-size: 18px;
    color:$black;
    font-weight: 400;
    flex-grow: 1;
    min-height: 27px;
  }
  .product__modal{
    padding-top: 24px;
  }
  .product__modal-line{
    margin-bottom: 24px;
    margin-top: 16px;
  }
  .product__modal-line{
    background: $gray-border;
    width: 100%;
    height: 1px;
    @include display-flex();
  }
  .product__modal-top{
    @include display-flex();
    align-items: flex-start;
  }



@media (max-width: 768px) {
    .p-profile-history-title {
        font-size: 16px;
    }
    .p-product-btn {
        width: 130px;
        height: 41px;
    }
}

@media (max-width: 460px) {
    .p-product-btn {
        width: 116px;
        height: 38px;
    }
}
</style>
