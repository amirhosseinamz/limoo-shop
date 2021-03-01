<template>
    <div class="cart-detail__container">
        <div class="cart-detail__payment">
            pay detail
        </div>
        <!-- dadvar task -->
    </div>
</template>

<style lang="scss" scoped>
.cart-detail__container {
    width: 30%;
    /* border: 1px solid red; */
    height: 600px;
    text-align: center;
    margin-top: 49px;
}
.cart-detail__payment {
    width: 100%;
    height: 474px;
    background-color: $white;
    border-radius: 10px;
}
@media (max-width: 960px) {
    .cart-detail__container {
        width: 100%;
        margin-top: 0;
        padding: 0 5px;
    }
}
</style>
