<template>
    <div class="orders-content__main">
        <!-- <transition moda="in-out">
            <div id="overlay" v-if="passChangeIsActive">
                <shipping-add-address-modal
                    :all-province="allProvince"
                    :all-citys="allCitys"
                    :form-data-original="formData"
                    :data-edit-address="dataEditAddress"
                    :profile-phone-number="profilePhoneNumber"
                    @selected-province="selectedProvince"
                    @selected-city="selectedCity"
                    @submit-address-add="submitAddressAdd"
                    @close-modal="closeModal"
                />
            </div>
        </transition> -->
        <div class="w-100 flex-wrap" :key="updateSelected">
            <div
                v-for="data in timeData"
                :key="data.id"
                class="w-100 flex-wrap order-content-item__time-receive"
            >
                <div class="shipping-btn__holder shipping-btn__active">
                    <span
                        class="shipping-order__heavy"
                        v-show="data.shipping == 'heavy'"
                        >مرسوله سنگین</span
                    >
                    <span
                        class="shipping-sendby__seller"
                        v-show="data.shipping == 'seller'"
                        >ارسال توسط فروشنده</span
                    >
                    <button
                        class="shipping-btn__items shipping-btn__seller"
                        :class="{
                            'shipping-btn__seller-active': data.sellerSelected
                        }"
                        v-show="data.shippingSeller == 'seller'"
                        @click="selectSendBySeller(data)"
                    >
                        <span class="shipping-btn__seller-title"
                            >ارسال توسط فروشنده</span
                        >
                    </button>
                    <button
                        class="shipping-btn__items shipping-btn__limoo"
                        :class="{
                            'shipping-btn__limoo-active': data.limooSelected
                        }"
                        v-show="data.shippingLimoo == 'limoo'"
                        @click="selectSendByLimoo(data)"
                    >
                        <span class="shipping-btn__limoo-title"
                            >ارسال توسط لیمو</span
                        >
                    </button>
                    <button
                        class="shipping-btn__items shipping-btn__post"
                        :class="{
                            'shipping-btn__post-active': data.postSelected
                        }"
                        v-show="data.shippingPost == 'post'"
                        @click="selectSendByPost(data)"
                    >
                        <span class="shipping-btn__post-title"
                            >ارسال پستی
                        </span>
                    </button>
                </div>
                <div class="shipping-txt__holder d-rtl">
                    <span
                        class="shipping-txt__item"
                        :class="{
                            'txt-description__active': data.limooSelected
                        }"
                        >این بسته را لیمو برای شما ارسال می کند.</span
                    >
                    <span
                        class="shipping-txt__item"
                        :class="{
                            'txt-description__active': data.postSelected
                        }"
                        >این کالا توسط پست در تاریخ انتخابی شما ارسال خواهد شد
                        البته خودمون بفرستیم بهتره ها</span
                    >
                    <span
                        class="shipping-txt__item"
                        :class="{
                            'txt-description__active': data.shipping == 'heavy'
                        }"
                        >کالاهای سنگین بالا آوردنش شدیدا سخته و شامل هزینه بسیار
                        بالایی میشه که باهاتون طی خواهیم کرد.</span
                    >
                    <span
                        class="shipping-txt__item"
                        :class="{
                            'txt-description__active': data.shipping == 'seller'
                        }"
                        >این کالا رو فروشنده واست میفرسته و بلایی سر محصولت بیاد
                        به ما مربوط نمیشه!</span
                    >
                    <span
                        class="shipping-txt__item"
                        :class="{
                            'txt-description__active': data.sellerSelected
                        }"
                        >این کالا رو فروشنده واست میفرسته و بلایی سر محصولت بیاد
                        به ما مربوط نمیشه!</span
                    >
                </div>
                <div class="order-product-img__holder">
                    <div v-for="order in data.orders" :key="order.id">
                        <img
                            :src="order.img"
                            alt=""
                            class="order-product-img__item"
                        />
                    </div>
                </div>
                <div
                    class="shipping-time__slider-holder"
                    :class="{
                        'show-time__slider__active': data.sliderNotShow
                    }"
                >
                    <the-time-cart
                        class="show-time__slider"
                        :time-table="data.timeTable"
                        :time-data="data"
                    ></the-time-cart>
                </div>
                <div
                    :class="{
                        'show-time__slider__active': !data.sliderNotShow
                    }"
                >
                    <div class="post-shipping__time-holder">
                        <div class="post-shipping__time-container">
                            <span class="post-shipping__time-title"
                                >تاریخ تحویل بسته:</span
                            >
                            <span class="post-shipping__time-day"
                                >25 آذر 1399</span
                            >
                        </div>
                        <div class="d-fleX">
                            <span class="post-shipping__time-hour-title"
                                >ساعت:</span
                            >
                            <span class="post-shipping__time-hour"
                                >15 الی 21</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheTimeCart from "./TheTimeCart.vue";
export default {
    props: {
        timeData: { type: [Object, Array], default: {} }
    },
    components: { TheTimeCart },
    data() {
        return {
            updateSelected: 0
        };
    },
    methods: {
        selectSendByPost(data) {
            this.timeData.map((content, index) => {
                if (content.id == data.id) {
                    content.limooSelected = false;
                    content.sellerSelected = false;
                    content.postSelected = !content.postSelected;
                    content.sliderNotShow = true;
                }
            });
            this.updateSelected++;
        },
        selectSendByLimoo(data) {
            this.timeData.map((content, index) => {
                if (content.id == data.id) {
                    content.postSelected = false;
                    content.sellerSelected = false;
                    content.sliderNotShow = false;
                    content.limooSelected = !content.limooSelected;
                }
            });
            this.updateSelected++;
        },
        selectSendBySeller(data) {
            this.timeData.map((content, index) => {
                if (content.id == data.id) {
                    content.postSelected = false;
                    content.limooSelected = false;
                    content.sliderNotShow = false;
                    content.sellerSelected = !content.sellerSelected;
                }
            });
            this.updateSelected++;
        }
    }
};
</script>
<style lang="scss" scoped>
.order-content-item__time-receive {
    @include display-flex();
    flex-direction: column;
    border-bottom: 1px solid $light-gray;
    width: 100%;
    min-height: 347px;
    height: fit-content;
}
.order-content-item__time-receive:last-of-type {
    border-bottom: none;
}
.shipping-btn__holder {
    @include display-flex();
    flex-direction: row;
    width: 100%;
    padding-right: 8px;
    margin-top: 24px;
    height: fit-content;
}
.shipping-btn__items {
    margin-right: 16px;
    font-family: inherit;
    font-size: 14px;
    background-color: transparent;
    cursor: pointer;
}
.shipping-btn__seller,
.shipping-btn__limoo,
.shipping-btn__post {
    @include display-flex();
    align-items: center;
    padding: 14px;
    width: 224px;
    height: 49px;
    border-radius: 12px;
    border: 2px solid $light-gray;
    box-sizing: border-box;
    color: $gray;
}
.shipping-order__heavy,
.shipping-sendby__seller {
    font-size: 14px;
    line-height: 140.62%;
    align-items: center;
    text-align: right;
    color: $black-topic;
    margin-right: 16px;
}
.shipping-btn__limoo-title::before,
.shipping-btn__seller-title::before,
.shipping-btn__post-title::before,
.shipping-sendby__seller::before,
.shipping-order__heavy::before {
    @include font-icon__limoo();
    content: "\e878";
    color: $gray;
    font-size: 18px;
    margin-left: 8px;
    /* vertical-align: middle; */
}
.shipping-btn__seller-title::before {
    content: "\e828";
}
.shipping-btn__post-title::before {
    content: "\e879";
}
.shipping-sendby__seller::before {
    content: "\e828";
    color: $code-request;
}
.shipping-order__heavy::before {
    content: "\e82e";
    color: $red-color;
}
.shipping-txt__holder {
    @include display-flex();
    flex-direction: column;
    margin: 24px;
    font-family: inherit;
    font-size: 14px;
    color: $code;
    /* border: 1px solid red; */
    min-height: 20px;
}
.shipping-txt__item {
    display: none;
}
.txt-description__active {
    display: block;
}
.shipping-btn__post-active,
.shipping-btn__limoo-active,
.shipping-btn__seller-active {
    border: 2px solid $yellow;
    color: $code;
}
.shipping-btn__post-active .shipping-btn__post-title::before {
    color: $blue-post;
}
.shipping-btn__limoo-active .shipping-btn__limoo-title::before {
    color: $yellow;
}
.shipping-btn__seller-active .shipping-btn__seller-title::before {
    color: $code-request;
}
.order-product-img__holder {
    @include display-flex();
    flex-direction: row;
    padding: 0 16px;
}
.order-product-img__item {
    padding: 0 8px;
}
.shipping-time__slider-holder {
    width: 100%;
    height: 212px;
    /* border: 1px solid red; */
    margin: 16px 0 42px 0;
    padding-right: 24px;
    padding-left: 8px;
}
.show-time__slider__active {
    display: none;
}
.show-time__slider__active .show-time__slider {
    display: none;
}
.post-shipping__time-holder {
    @include display-flex();
    flex-direction: column;
    margin: 16px 24px 42px 0;
    /* border: 1px solid red; */
}
.post-shipping__time-title {
    font-size: 16px;
    line-height: 140.62%;
    color: $gray;
}
.post-shipping__time-title::before {
    @include font-icon__limoo();
    content: "\e804";
    color: $gray;
    font-size: 18px;
    margin-left: 8px;
}
.post-shipping__time-day {
    font-size: 16px;
    line-height: 140.62%;
    color: $black-topic;
    margin-right: 5px;
}
.post-shipping__time-container {
    margin-bottom: 7px;
}
.post-shipping__time-hour-title {
    font-size: 14px;
    line-height: 140.62%;
    color: $gray;
    display: none;
}
.post-shipping__time-hour-title::before {
    @include font-icon__limoo();
    content: "\e82c";
    color: $gray;
    font-size: 16px;
    margin-left: 8px;
    vertical-align: -10%;
}
.post-shipping__time-hour {
    font-size: 14px;
    line-height: 140.62%;
    color: $black-topic;
    margin-right: 5px;
    display: none;
}
@media (max-width: 960px) {
    .post-shipping__time-holder {
        margin: 16px 10px 24px 0;
    }
    .post-shipping__time-hour-title,
    .post-shipping__time-hour {
        display: block;
    }
    .post-shipping__time-title {
        font-size: 14px;
    }
    .post-shipping__time-title::before {
        font-size: 16px;
    }
    .post-shipping__time-day {
        font-size: 14px;
    }
    .order-content-item__time-receive {
        min-height: 301px;
    }
    .shipping-btn__holder {
        padding-left: 8px;
        /* justify-content: space-between; */
        margin-top: 14px;
    }
    .shipping-btn__items {
        margin-right: 13px;
        font-size: 13px;
    }

    .shipping-btn__limoo,
    .shipping-btn__post {
        padding: 11px;
        width: 154px;
        height: 38px;
    }
    .shipping-btn__seller {
        width: 156px;
        padding: 2px;
        height: 38px;
    }
    .shipping-btn__limoo-title::before,
    .shipping-btn__seller-title::before,
    .shipping-btn__post-title::before,
    .shipping-sendby__seller::before,
    .shipping-order__heavy::before {
        font-size: 16px;
        margin-left: 8px;
        /* vertical-align: middle; */
    }
    .shipping-txt__holder {
        margin: 16px 0;
        padding: 0 30px;
    }
    .order-product-img__holder {
        flex-wrap: wrap;
    }
    .order-product-img__item {
        width: 80px;
        height: 80px;
        padding: 0 4px;
    }
}

@media (max-width: 540px) {
    .shipping-time__slider-holder {
        display: none;
    }
    .shipping-btn__holder {
        justify-content: space-between;
    }
    .shipping-btn__items {
        margin-right: 3px;
    }
    .shipping-txt__holder {
        padding: 0 11px;
        font-size: 13px;
    }
    .order-product-img__holder {
        padding: 0 2px;
        flex-wrap: wrap;
    }
}
</style>
