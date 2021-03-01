<template>
    <div class="cart-shipping__container">
        <div class="cart-shipping__payment">
            pay shipping
        </div>
        <!-- dadvar task -->
    </div>
</template>

<style lang="scss" scoped>
.cart-shipping__container {
    width: 30%;
    /* border: 1px solid red; */
    height: 541px;
    margin-top: 49px;
    text-align: center;
    background-color: $white;
    border-radius: 10px;
}
.cart-shipping__payment {
    width: 100%;
    height: 474px;
}
@media (max-width: 960px) {
    .cart-shipping__container {
        width: 100%;
        margin-top: 0;
        padding: 0 5px;
    }
}
</style>
