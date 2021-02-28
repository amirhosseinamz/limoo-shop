<template>
    <div class="cart-container d-rtl">
        <div class="user-cart__container">
            <div class="user-cart__shipping-container">
                <span>انتخاب درگاه پرداخت</span>
            </div>
            <!-- <The-cart-payment-detail></The-cart-payment-detail> -->
        </div>
        <nuxt-link to="/" class="user-cart__go-back">بازگشت</nuxt-link>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {};
    },
    methods: {
        goBack() {
            this.$router.push("/");
        }
    }
};
</script>
<style lang="scss" scoped>
.cart-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
    height: fit-content;
}
.user-cart__container {
    padding: 166px 16px 0 16px;
    margin-bottom: 60px;
    width: 100%;
    height: fit-content;
    @include display-flex();
    flex-direction: row;
    border: 1px solid red;
}
.user-cart__shipping-container {
    @include display-flex();
    flex-direction: column;
    width: 70%;
    /* border: 1px solid blue; */
    margin-left: 31px;
    background-color: $white;
    border-radius: 10px;
    min-height: 192px;
    height: fit-content;
}

.user-cart__go-back {
    @include display-flex();
    text-decoration: none;
    color: $code-request;
    font-size: 16px;
    line-height: 140.62%;
    text-align: right;
    margin-top: 8px;
}
.user-cart__go-back::before {
    @include font-icon__limoo();
    @include display-flex();
    content: "\e801";
    color: $code-request;
    font-size: 12px;
    margin-left: 6px;
    transform: rotate(180deg);
}
@media (max-width: 960px) {
    .user-cart__container {
        padding: 47px 0 0 0;
        margin-bottom: 60px;
        flex-direction: column;
    }
    .user-cart__shipping-container {
        width: 100%;
        /* border: 1px solid blue; */
        margin-left: 0;
    }
    .user-cart__go-back {
        display: none;
    }
}
</style>
