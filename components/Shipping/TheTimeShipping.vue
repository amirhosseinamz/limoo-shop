<template>
    <div class="orders-content__main">
        <transition moda="in-out">
            <div id="overlay" v-if="timeModalIsActive">
                <shipping-add-time-modal
                    @close-modal="closeModal"
                    @submit-time-add="submitTimeAdd"
                    :time-data="dataTimeTable"
                    ref="shippingAddTimeModal"
                />
            </div>
        </transition>
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
                      <base-button
                        :class="[{'shipping-btn__limoo-active': data.limooSelected}, 'shipping-btn__items', 'shipping-btn__limoo']"
                        @button-clicked="selectSendByLimoo(data)"
                        no-box-shadow
                        base-color="white"
                        v-show="data.shippingLimoo == 'limoo'"
                      >
                        <span class="shipping-btn__limoo-title"
                            >ارسال توسط لیمو</span
                        >
                    </base-button>
                      <base-button
                        :class="[{'shipping-btn__seller-active': data.sellerSelected}, 'shipping-btn__items', 'shipping-btn__seller']"
                        @button-clicked="selectSendBySeller(data)"
                        no-box-shadow
                        base-color="white"
                        v-show="data.shippingSeller == 'seller'"
                      >
                        <span class="shipping-btn__seller-title"
                            >ارسال توسط فروشنده</span
                        >
                    </base-button>
                      <base-button
                        :class="[{'shipping-btn__post-active': data.postSelected}, 'shipping-btn__items', 'shipping-btn__post']"
                        @button-clicked="selectSendByPost(data)"
                        no-box-shadow
                        base-color="white"
                        v-show="data.shippingPost == 'post'"
                      >
                        <span class="shipping-btn__post-title"
                            >ارسال پستی
                        </span>
                    </base-button>
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
                        @submit-times-add="submitTimeAdd"
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
                <div
                    :class="{
                        'post-shipping__btn-notif__notactive': data.postSelected
                    }"
                >
                    <div
                        class="mobile-shipping__time-detail-holder"
                        :class="{
                            'mobile-shipping__time-detail-active': timeIsAddInModal
                        }"
                    >
                        <div
                            class="post-shipping__time-holder"
                            :class="{
                                'show-time__slider__active': data.sliderNotShow
                            }"
                        >
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
                <div
                    :class="{
                        'show-time__slider__active': data.sliderNotShow
                    }"
                >
                    <div
                        class="post-shipping__btn-notif__holder"
                        :class="{
                            'post-shipping__btn-notif__notactive':
                                data.postSelected
                        }"
                    >
                        <button
                            class="post-shipping__btn-mobile"
                            :class="{
                                'post-shipping__btn-mobile-notactive': timeIsAddInModal
                            }"
                            @click="showModalTimePicker(data.timeTable)"
                        >
                            انتخاب زمان ارسال
                        </button>
                        <span
                            class="post-shipping__alert-txt-mobile"
                            :class="{
                                'post-shipping__alert-txt-mobile-notactive': timeIsAddInModal
                            }"
                            >زمان ارسال را انتخاب نکرده اید!</span
                        >
                        <button
                            class="afterPickTime-shipping__btn-mobile"
                            :class="{
                                'afterPickTime-shipping__btn-mobile-active': timeIsAddInModal
                            }"
                            @click="showModalTimePicker(data.timeTable)"
                        >
                            تغییر زمان ارسال
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheTimeCart from "./TheTimeCart.vue";
import shippingAddTimeModal from "./shippingAddTimeModal.vue";
export default {
    components: { TheTimeCart, shippingAddTimeModal },
    data() {
        return {
            updateSelected: 0,
            timeModalIsActive: false,
            timeIsAddInModal: false,
            dataTimeTable: []
        };
    },
  computed: {
      timeData () {
        return this.$store.getters["shipping/shipping/timeData"]
      }
  },
    mounted() {
        this.timeData.map((content, index) => {
            content.limooSelected = true;
            if (content.shipping == "seller" || content.shipping == "heavy") {
                content.limooSelected = false;
            }
        });
        this.updateSelected++;
    },
    methods: {
        showModalTimePicker(dataTime) {
            this.dataTimeTable = dataTime;
            this.timeModalIsActive = true;
            // this.$refs.shippingAddTimeModal.firstLoad();

            // console.log(this.dataTimeTable);
        },
        closeModal() {
            this.timeModalIsActive = false;
        },
        submitTimeAdd() {
            this.timeModalIsActive = false;
            this.timeIsAddInModal = true;
            this.$emit("submit-times-add");
        },
        selectSendByPost(data) {
            this.timeData.map((content, index) => {
                if (content.id == data.id) {
                    content.limooSelected = false;
                    content.sellerSelected = false;
                    content.postSelected = true;
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
                    content.limooSelected = true;
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
                    content.sellerSelected = true;
                }
            });
            this.updateSelected++;
        }
    }
};
</script>
<style lang="scss" scoped>
#overlay {
    position: fixed; /* Sit on top of the page content */
    @include display-flex();
    justify-content: center;
    align-items: center;
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    z-index: 20;
    background: $white;
    top: 0;
    right: 0;
}
/* .v-enter-from {
    opacity: 0;
}
.v-enter-active {
    transition: opacity 300ms ease-in;
}
.v-enter-to {
    opacity: 1;
} */
.v-leave-from {
    opacity: 0.5;
}
.v-leave-active {
    transition: all 300ms ease-in;
}
.v-leave-to {
    opacity: 0;
}
.order-content-item__time-receive {
    @include display-flex();
    flex-direction: column;
    border-bottom: toRem(1) solid $light-gray;
    width: 100%;
    min-height: toRem(347);
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
    margin-top: toRem(24);
    height: fit-content;
}
.shipping-btn__items {
    margin-right: toRem(16);
    font-family: inherit;
    font-size: toRem(14);
    background-color: transparent;
    cursor: pointer;
}
.shipping-btn__seller,
.shipping-btn__limoo,
.shipping-btn__post {
    @include display-flex();
    align-items: center;
    padding: toRem(14);
    width: toRem(224);
    height: toRem(49);
    border-radius: toRem(12);
    border: toRem(2) solid $light-gray;
    box-sizing: border-box;
    color: $gray;
}
.shipping-order__heavy,
.shipping-sendby__seller {
    font-size: toRem(14);
    line-height: 140.62%;
    align-items: center;
    text-align: right;
    color: $black-topic;
    margin-right: toRem(16);
}
.shipping-btn__limoo-title::before,
.shipping-btn__seller-title::before,
.shipping-btn__post-title::before,
.shipping-sendby__seller::before,
.shipping-order__heavy::before {
    @include font-icon__limoo();
    content: "\e878";
    color: $gray;
    font-size: toRem(18);
    margin-left: toRem(8);
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
    margin: toRem(24);
    font-family: inherit;
    font-size: toRem(14);
    color: $code;
    /* border: 1px solid red; */
    min-height: toRem(20);
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
    border: 2px solid $yellow!important;
    color: $code!important;
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
    padding: 0 toRem(16);
}
.order-product-img__item {
    padding: 0 toRem(8);
}
.shipping-time__slider-holder {
    width: 100%;
    height: toRem(212);
    margin: toRem(16) 0 toRem(42) 0;
    padding-right: toRem(24);
    padding-left: toRem(8);
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
    margin: toRem(16) toRem(24) toRem(42) 0;
}
.post-shipping__time-title {
    font-size: toRem(16);
    line-height: 140.62%;
    color: $gray;
}
.post-shipping__time-title::before {
    @include font-icon__limoo();
    content: "\e804";
    color: $gray;
    font-size: toRem(18);
    margin-left: toRem(8);
}
.post-shipping__time-day {
    font-size: toRem(16);
    line-height: 140.62%;
    color: $black-topic;
    margin-right: toRem(5);
}
.post-shipping__time-container {
    margin-bottom: toRem(7);
}
.post-shipping__time-hour-title {
    font-size: toRem(14);
    line-height: 140.62%;
    color: $gray;
    display: none;
}
.post-shipping__time-hour-title::before {
    @include font-icon__limoo();
    content: "\e82c";
    color: $gray;
    font-size: toRem(16);
    margin-left: toRem(8);
    vertical-align: -10%;
}
.post-shipping__time-hour {
    font-size: toRem(14);
    line-height: 140.62%;
    color: $black-topic;
    margin-right: toRem(5);
    display: none;
}
.post-shipping__btn-notif__holder {
    display: none;
}
.mobile-shipping__time-detail-holder {
    display: none;
}
@media (max-width: 960px) {
    .mobile-shipping__time-detail-active {
        display: block;
    }
    .post-shipping__time-holder {
        margin: toRem(16) toRem(10) toRem(24) 0;
    }
    .post-shipping__time-hour-title,
    .post-shipping__time-hour {
        display: block;
    }
    .post-shipping__time-title {
        font-size: toRem(14);
    }
    .post-shipping__time-title::before {
        font-size: toRem(16);
    }
    .post-shipping__time-day {
        font-size: toRem(14);
    }
    .order-content-item__time-receive {
        min-height: toRem(301);
    }
    .shipping-btn__holder {
        padding-left: toRem(8);
        /* justify-content: space-between; */
        margin-top: toRem(14);
    }
    .shipping-btn__items {
        margin-right: toRem(13);
        font-size: toRem(13);
    }

    .shipping-btn__limoo,
    .shipping-btn__post {
        padding: toRem(11);
        width: toRem(154);
        height: toRem(38);
    }
    .shipping-btn__seller {
        width: toRem(156);
        padding: toRem(2);
        height: toRem(38);
    }
    .shipping-btn__limoo-title::before,
    .shipping-btn__seller-title::before,
    .shipping-btn__post-title::before,
    .shipping-sendby__seller::before,
    .shipping-order__heavy::before {
        font-size: toRem(16);
        margin-left: toRem(8);
    }
    .shipping-txt__holder {
        margin: toRem(16) 0;
        padding: 0 toRem(30);
    }
    .order-product-img__holder {
        flex-wrap: wrap;
    }
    .order-product-img__item {
        width: toRem(80);
        height: toRem(80);
        padding: 0 toRem(4);
    }
}

@media (max-width: 545px) {
    .shipping-order__heavy,
    .shipping-sendby__seller {
        margin-right: toRem(10);
    }
    .shipping-txt__item {
        text-align: justify;
    }
    .order-content-item__time-receive {
        min-height: toRem(270);
    }
    .post-shipping__btn-notif__holder {
        @include display-flex();
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
        margin: toRem(16) 0 toRem(24) 0;
        padding: 0 toRem(11);
    }
    .post-shipping__btn-notif__notactive {
        display: none;
    }
    .shipping-time__slider-holder {
        display: none;
    }
    .shipping-btn__holder {
        justify-content: space-between;
    }
    .shipping-btn__items {
        margin-right: toRem(3);
    }
    .shipping-txt__holder {
        padding: 0 toRem(11);
        font-size: toRem(13);
    }
    .order-product-img__holder {
        padding: 0 toRem(2);
        flex-wrap: wrap;
    }
    .post-shipping__btn-mobile {
        height: toRem(36);
        width: toRem(136);
        background-color: $yellow;
        box-sizing: border-box;
        box-shadow: 0 toRem(4) toRem(6) $box__shadow2;
        border-radius: toRem(10);
        border: none;
        font-family: inherit;
        font-size: toRem(13);
        color: $white;
        padding: toRem(9) toRem(10);
        display: block;
    }
    .post-shipping__btn-mobile-notactive {
        display: none;
    }
    .afterPickTime-shipping__btn-mobile {
        font-size: toRem(13);
        line-height: 140.62%;
        font-family: inherit;
        color: $gray;
        background-color: transparent;
        border: none;
        display: none;
    }
    .afterPickTime-shipping__btn-mobile-active {
        display: block;
    }
    .afterPickTime-shipping__btn-mobile::after {
        @include font-icon__limoo();
        content: "\e800";
        color: $yellow;
        font-size: toRem(20);
        margin-left: toRem(4);
        vertical-align: -13%;
        line-height: 140.62%;
    }
    .post-shipping__alert-txt-mobile {
        font-size: toRem(11);
        font-family: inherit;
        line-height: 140.62%;
        text-align: right;
        color: $red-color;
        display: block;
    }
    .post-shipping__alert-txt-mobile::before {
        @include font-icon__limoo();
        content: "\e80f";
        color: $red-color;
        font-size: toRem(16);
        margin-left: toRem(4);
        vertical-align: -13%;
        line-height: 140.62%;
    }
    .post-shipping__alert-txt-mobile-notactive {
        display: none;
    }
}
@media (max-width: 321px) {
    .shipping-btn__limoo {
        padding: toRem(5);
    }
    .post-shipping__btn-mobile {
        height: toRem(36);
        width: toRem(110);
        font-size: toRem(12);
        padding: toRem(9) toRem(5);
    }
    .post-shipping__alert-txt-mobile::before {
        font-size: toRem(14);
    }
    .shipping-btn__seller-title {
        font-size: toRem(13);
    }
    .shipping-btn__limoo-title::before,
    .shipping-btn__seller-title::before,
    .shipping-btn__post-title::before,
    .shipping-sendby__seller::before,
    .shipping-order__heavy::before {
        font-size: toRem(12);
        margin-left: toRem(3);
    }
    .shipping-btn__limoo-title::before {
        margin-right: toRem(3);
    }
    .shipping-order__heavy,
    .shipping-sendby__seller {
        margin-right: toRem(5);
    }
    .post-shipping__alert-txt-mobile-notactive {
        display: none;
    }
}
@media (max-width: 281px) {
    .shipping-btn__seller-title {
        font-size: toRem(11);
    }
    .shipping-btn__limoo {
        padding: toRem(2);
    }
    .post-shipping__btn-notif__holder {
        flex-direction: column;
        margin: toRem(16) 0 toRem(14) 0;
    }
    .post-shipping__btn-mobile {
        @include display-flex();
        align-self: flex-end;
        height: toRem(36);
        width: toRem(110);
        font-size: toRem(12);
        padding: toRem(9) toRem(5);
    }
    .post-shipping__alert-txt-mobile {
        @include display-flex();
        align-self: flex-start;
        margin-bottom: toRem(5);
        order: -1;
    }
    .post-shipping__alert-txt-mobile-notactive {
        display: none;
    }
    .post-shipping__btn-mobile-notactive {
        display: none;
    }
}
</style>
