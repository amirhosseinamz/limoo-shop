<template>
    <div class="p-comments-content-main w-100 flex-column flex-wrap  d-rtl tabs__content">
        <transition moda="in-out">
            <div id="overlay" v-if="passChangeIsActive">
                <!-- <add-address-modal
                    :form-data-original="formData"
                    :data-edit-address="dataEditAddress"
                    :profile-phone-number="profilePhoneNumber"
                    @selected-province="selectedProvince"
                    @selected-city="selectedCity"
                    @submit-address-add="submitAddressAdd"
                    @close-modal="closeModal"
                /> -->
            </div>
        </transition>
        <div class="user-comments__empty-container" v-show="userComments == 0">
            <img
                src="/empty-pages/empty-comment-list.svg"
                alt="هنوز هیچ نقد و نظری ثبت نکرده اید"
            />
            <span class="user-comments__empty"
                >هنوز هیچ نقد و نظری ثبت نکرده اید.</span
            >
        </div>
        <div
            class="w-100 flex-wrap p-comment-content-items"
            :key="updateSelected"
        >
            <div
                v-for="(data,index) in commentsData"
                :key="data.id"
                class="w-100 flex-wrap p-comment-content-item"
            >

                <div
                    class="flex-wrap w-100 p-comment-content-wrapper align-items-start"
                >
                    <div class="d-flex align-items-start w-100">
                        <div
                            class="w-100 flex-wrap  p-comments-content-header "
                        >
                            <div class="p-comments__header-holder">
                                <div
                                    class="p-comments__title"
                                >
                                    {{ data.Title }}
                                </div>
                                <div class="p-comments-idea__title">
                                    <span
                                        v-show="data.Suggest == 1"
                                        class="ideas-title idea-good"
                                        >پیشنهاد میکنم خریداری کنید</span
                                    >
                                    <span
                                        v-show="data.Suggest == 2"
                                        class="ideas-title idea-bad"
                                        >از خرید این محصول راضی نیستم</span
                                    >
                                    <span
                                        v-show="data.Suggest == 3"
                                        class="ideas-title idea-mid"
                                        >فعلا تجربه کافی نداشتم</span
                                    >
                                    <div class="p-comments__state-mobile">
                                        <div
                                                v-show="typeof(data.confirmLeave) == 'undefined' "
                                                    class="p-comments__state-accepted"
                                            >
                                            <span
                                                        class="p-comments__state-accepted__icon"
                                                ></span>
                                                <span
                                                            class="p-comments__state-accepted__title" >
                                                            {{data.dateConvert}}
                                                </span >
                                            </div>

                                        <div
                                            v-show="data.confirmLeave == 1"
                                            class="p-comments__state-accepted"
                                        >
                                            <span
                                                class="p-comments__state-accepted__icon"
                                            ></span>
                                            <span
                                                class="p-comments__state-accepted__title"
                                                >تایید شده</span
                                            >
                                        </div>

                                        <div
                                            v-show="data.confirmLeave == 2"
                                            class="p-comments__state-acceptting"
                                        >
                                            <span
                                                class="p-comments__state-acceptting__icon"
                                            ></span>
                                            <span
                                                class="p-comments__state-acceptting__title"
                                                >در انتظار تایید</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="p-comments__state-desktop">
                                   <div
                                        v-show="typeof(data.confirmLeave) == 'undefined' "
                                            class="p-comments__state-accepted"
                                    >
                                       <span
                                                class="p-comments__state-accepted__icon"
                                        ></span>
                                         <span
                                                    class="p-comments__state-accepted__title" >
                                                      {{data.dateConvert}}
                                          </span >
                                     </div>

                                <div
                                    v-show="data.confirmLeave == 1"
                                    class="p-comments__state-accepted"
                                >
                                    <span
                                        class="p-comments__state-accepted__icon"
                                    ></span>
                                    <span
                                        class="p-comments__state-accepted__title"
                                        >تایید شده</span
                                    >
                                </div>
                                <div
                                    v-show="data.confirmLeave == 2"
                                    class="p-comments__state-acceptting"
                                >
                                    <span
                                        class="p-comments__state-acceptting__icon"
                                    ></span>
                                    <span
                                        class="p-comments__state-acceptting__title"
                                        >در انتظار تایید</span
                                    >
                                </div>
                            </div>
                        </div>
                        <!-- ==================================================================================== -->
                        <div
                            class="w-100 flex-column p-comment-content-data-main"
                        >
                            <div
                                class="w-100 p-commentedproduct-main text-right"
                            >
                                <div class="p-commented-default-main">
                                    <!-- <img
                                        :src="data.img"
                                        class="p-commented-product-img"
                                        alt=""
                                    /> -->
                                    <div class="p-commented-default-pic p-commented-product-img">
                                        
                                    </div>
                                </div>
                                <div class="p-product-content-data">
                                    <span class="p-product-content-text-data ">
                                        {{ data.Firstname }}
                                        {{ data.Lastname }}
                                    </span>
                                    <div class="p-product-content-rating-data ">
                                        <div class="stars-outer">
                                            <div
                                                class="stars-inner"
                                                :style="{
                                                    width:
                                                        (data.Rate * 100) / 5 +
                                                        '%'
                                                }"
                                            ></div>
                                        </div>
                                        <span class="rate-counter">
                                            {{ data.Rate }}</span
                                        >
                                        <span class="rate-count">از 5</span>
                                    </div>
                                    <!-- ====================== -->
                                </div>
                            </div>
                            <div
                                :class="{
                                    'full-description__active': data.selected
                                }"
                            >
                                <div class="p-commentedproduct-description">
                                    {{ data.Body }}
                                </div>
                                <span
                                    @click="showMoreDescription(data)"
                                    class="show-more-description"
                                ></span>
                            </div>
                         

                        </div>
                    </div>
                </div>
            </div>
                  <div class="tab__more-main">
                         <div @click="moreComment" class="tab__more" >
                                مشاهده همه نظرات
                               <span class="tab__more-icon mobile--arrow"></span>
                         </div>
                    </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        commentsData: { type: [Object, Array], default: {} }
    },
    components: {},
    data() {
        return {
            passChangeIsActive: false,
            dataEditAddress   : {},
            updateSelected    : 0,
            userComments      : -1,
        };
    },
    created() {
        this.userComments = Object.values(this.commentsData).length;
    },
    components: {},
    computed: {},

    methods: {
        showMoreDescription(data) {
            this.commentsData.map(content => {
                if (content.id == data.id) {
                    content.selected = !content.selected;
                    // if we want open one paragraph in time
                    // } else {
                    //     content.selected = false;
                }
            });
            this.updateSelected++;
        },

        showModalDeleteProduct(data) {
            this.$emit("show-modal-delete-product", data);
        },

        closeModal() {
            this.dataEditAddress = {};
            this.passChangeIsActive = false;
        },

        moreComment(){
            this.$emit('more-comment')
        },

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
    /* transition: opacity 200ms ease-out; */
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    z-index: 1;
    background: $overlay__profile;
    top: 0;
    right: 0;
}
.user-comments__empty-container {
    @include display-flex();
    flex-direction: column;
    justify-content: flex-start;
    height: 233px;
    background: $white;border-radius: 10px;
    /* border: 1px solid red; */
}
.user-comments__empty-container img {
    opacity: 1;
}
.user-comments__empty {
    font-size: 18px;
    line-height: 140.62%;
    text-align: center;
    color: $gray;
    margin-top: 37px;
}
.p-comments-content-main {
    padding-right: 24px;
    padding-left: 24px;
}
.p-comment-content-btn-add-main {
    @include display-flex();
}
.p-comment-content-btn-data {
    margin-top: 45px;
    margin-bottom: 38px;
    font-size: 16px;
}

.p-comment-content-item {
    @include display-flex();
    flex-direction: column;
    border: 1px solid $light-gray;
    border-radius: 10px;
    height: fit-content;
    margin-bottom: 24px;
}
.p-commented-product-img {
    /* border: 1px solid red; */
    width: 50px;
    height: 50px;
}
/* ============================== */
.stars-outer {
    position: relative;
    display: inline-block;
}

.stars-inner {
    position: absolute;
    /* top: 6px; */
    bottom: 4.7px;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    @include display-flex();
    flex-direction: row-reverse;
}

.stars-outer::before {
    content: "\e825 \e825 \e825 \e825 \e825";
    @include font-icon__limoo();
    font-weight: 400;
    font-size: 16px;
    color: $light-gray;
    letter-spacing: 2px;
}

.stars-inner::before {
    content: "\e825 \e825 \e825 \e825 \e825";
    @include font-icon__limoo();
    font-weight: 400;
    font-size: 16px;
    color: $yellow;
    letter-spacing: 2px;
}
.rate-count,
.rate-counter {
    color: $gray;
    font-size: 14px;
    line-height: 140.62%;
}
.rate-counter {
    margin-right: 8px;
}
/* ////////////////////////////// */

.p-comments-content-header {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    padding-right: 26px;
    padding-left: 26px;
    border-bottom: 1px solid $chinese_white;
}
.p-comments__header-holder {
    @include display-flex();
    flex-direction: column;
}
.p-comments__title {
    /* border: 1px solid blue; */
    @include display-flex();
    justify-self: flex-start;
    font-size: 16px;
    font-family: inherit;
    line-height: 140.62%;
    color: $black-topic;
    margin-top: 16px;
    text-decoration: none;
}
.p-comments-idea__title {
    /* border: 1px solid green; */
    @include display-flex();
    justify-self: flex-start;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 16px;
}
.ideas-title {
    font-size: 16px;
    font-family: inherit;
    line-height: 140.62%;
}
.idea-good {
    color: $btn__green;
}
.idea-bad {
    color: $red-logout;
}
.idea-mid {
    color: $code-request;
}
.p-comments__state-desktop {
    /* border: 1px solid black; */
    margin: auto 0;
}
.p-comments__state-mobile {
    display: none;
}
.p-comments__state-accepted,
.p-comments__state-acceptting {
    @include display-flex();
    flex-direction: row;
}
.p-comments__state-accepted__title,
.p-comments__state-acceptting__title {
    font-size: 14px;
    line-height: 140.62%;
    color: $gray;
}
.p-comments__state-accepted__icon {
    @include display-flex();
    align-self: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid $light__blue;
    background-color: $code-request;
    margin-left: 11px;
    display: none;
}
.p-comments__state-accepted__icon::before {
    margin: auto;
    @include font-icon__limoo();
    font-size: 6px;
    content: "\e82b";
    color: $white;
}
.p-comments__state-acceptting__icon {
    @include display-flex();
    align-self: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid $border__yellow;
    background-color: $yellow;
    margin-left: 11px;
    display: none;
}
/* =========================== */
.p-favorite-product-item-icon-delete::before {
    @include font-icon__limoo();
    font-size: 16px;
    content: "\e826";
    color: $input-border;
}
.p-comments-content-header {
    background: $white;
    // border-bottom: 1px solid $light-gray;
    height: 86px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.p-comments-content-header-icon {
    width: 23px;
    height: 23px;
}
.p-comments-content-header-item {
    @include display-flex();
    margin-left: 85px;
}
.p-comments-content-header-item-title {
    font-family: inherit;
    font-size: 16px;
    margin-right: 10px;
    color: $black-topic;
    font-weight: 400;
    text-align: right;
}
.p-comment-content-data {
    @include display-flex();
    padding-right: 27px;
    padding-left: 27px;
}
.p-product-content-data {
    @include display-flex();
    flex-direction: column;
    // margin-top: 10px;
    margin-right: 16px;
    /* border: 1px solid blueviolet; */
}
.p-product-content-text-data {
    font-family: inherit;
    font-size: 16px;
    color: $black-topic;
    font-weight: 400;

    /* */
}
.p-product-content-rating-data {
    margin-top: 16px;
}
.p-commentedproduct-description {
    color: $dark_gray;
    font-family: inherit;
    text-align: right;
    font-size: 16px;
    margin: 24px 24px 24px 96px;
    line-height: 2.3em;
    max-width: 880px;
    min-height:80px;

}
.p-commentedproduct-main {
    @include display-flex();
    margin-top: 20px;
    margin-right: 24px;
    align-items: center;
}
.p-commentedproduct__time {
    @include display-flex();
    align-self: center;
    margin-right: 24px;
    font-size: 14px;
    line-height: 140.62%;
    color: $gray;
}
.p-comment-content-data-btns {
    @include display-flex();
    justify-content: space-between;
    padding-left: 16px;
    height: 77px;
    align-items: flex-start;
}
.p-comment-content-btn-edit {
    width: 130px;
}
.p-comment-content-wrapper {
    @include display-flex();
}
.p-comment-content-data-main {
    @include display-flex();
    background-color: $white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.p-comment-content-edit-icon {
    width: 16px;
    height: 16px;
}
.p-comments-content-header-item-desktop {
    align-items: flex-start;
}
.p-comment-content-item-mobile {
    display: none;
}
.tabs__content{
    visibility: hidden;
    position: absolute;
}
.tab--active .tabs__item-line{
   visibility:visible;
}
.p-commented-default-main{
    width:50px;
    height:50px;
}
.p-commented-default-pic{
    background: $chinese_white;
    border-radius: 100px;
    justify-content: center;
     @include display-flex();
    align-items:center;
}
    .tab__more{
        font-size: 16px;
    }
    .mobile--arrow::after {
        font-size: 14px;
    }
    .tab__more-main{
       @include display-flex();
        justify-content: flex-end;
    }
    .tab__more-icon{
        margin-right:7px;
    }
      
    .p-commented-product-img::before {
        @include font-icon__limoo();
        font-size: 29px;
        content: "\e823";
        color:$gray;
    }


@media (max-width: 1220px) {
    .p-comments-content-header-item {
        margin-left: 10%;
    }
    .p-comments-content-header-item:last-of-type {
        margin-left: 0;
    }
}

@media (max-width: 1024px) {
    .p-comments-content-header-item {
        margin-left: 6%;
    }
}

@media (max-width: 960px) {
    .user-comments__empty-container {
        padding-top: 24px;
        height: 280px;
    }
    .p-comments-content-header-item {
        margin-left: 10%;
    }
    .p-comments-content-main {
        padding: 0;
    }
    .p-commentedproduct-description {
        font-size: 14px;
    }
}

@media (max-width: 600px) {
    .user-comments__empty-container {
        height: 252px;
        padding-top: 24px;
    }
    .user-comments__empty-container img {
        margin: 0 auto;
        height: 74px;
        width: 74px;
    }
    .user-comments__empty {
        font-size: 14px;
        margin-top: 24px;
    }
    .p-comments__state-desktop {
        display: none;
    }
    .p-comments__state-mobile {
        display: block;
    }
    .p-comments__title,
    .ideas-title,
    .p-comments__state-acceptting__title,
    .p-comments__state-accepted__title {
        font-size: 13px;
    }
    .stars-outer::before,
    .stars-inner::before {
        font-size: 10px;
    }

    .rate-count,
    .rate-counter {
        font-size: 13px;
    }
    .p-comments-content-header {
        flex-flow: column;
        height: auto;
        background: $white;
        padding-right: 11px;
        padding-left: 19px;
    }
    .p-comment-content-item {
        height: auto;
        margin-bottom: 8px;
    }
    /* 00000000000000000000000000 */
    .p-commentedproduct-description {
        font-size: 13px;
        /* border: 1px solid red; */
        margin: 16px 11px 0 37px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: justify;
        text-justify: inter-word;
    }
    .full-description__active .p-commentedproduct-description {
        white-space: normal;
        overflow: visible;
        height: fit-content;
    }
    .show-more-description {
        @include display-flex();
        /* align-self: flex-start; */
        // margin-right: 93%;
        margin-bottom: 10px;
        justify-content: flex-end;
        margin-left:12px;
        margin-bottom:22px;
    }
    .show-more-description::before {
        @include display-flex();
        content: "\e801";
        @include font-icon__limoo();
        font-size: 12px;
        color: $input-border;
        /* position: absolute; */
        transform: rotate(-90deg);
        /* margin-right: 4px; */
        /* border: 1px solid red; */
    }
    .full-description__active .show-more-description::before {
        transform: rotate(90deg);
    }
    /* 00000000000000000000000000 */
    .p-comments-content-header-item {
        margin-left: 0;
        width: 100%;
        margin-top: 19px;
    }
    .p-comments-content-header-item-title {
        font-size: 14px;
    }
    .p-product-content-data {
        margin-top: 7px;
        margin-right:8px;
    }
    .p-product-content-text-data {
        font-size: 14px;
    }
    .p-product-content-rating-data {
        margin-top: 8px;
    }
    .p-commentedproduct__time {
        margin-right: 11px;
        font-size: 13px;
    }
    .p-comment-content-data-btns {
        border-top: 1px solid $light-gray;
        padding-top: 16px;
        margin-bottom: 16px;
        /* margin-top: 26px; */
        height: auto;
    }
    .p-favorite-product-btn-delete {
        width: 37px;
        height: 37px;
    }
    .p-comment-content-btn-edit {
        background: $yellow;
        border-radius: 10px;
        height: 36px;
        width: 36px;
    }
    .p-comment-content-btn-delete {
        margin-right: 16px;
    }
    .p-comments-content-header-icon {
        width: 18px;
        height: 18px;
    }
    .p-comment-content-item-desktop {
        display: none;
    }
    .p-comment-content-item-mobile::before {
        @include font-icon__limoo();
        content: "\e80e";
        color: $white;
    }
    .p-comment-content-item-mobile {
        display: flex;
    }
    .p-commentedproduct-main {
        margin-right: 6px;
        margin-top: 16px;
        padding-left: 19px;
    }

    .p-favorite-product-btn-main {
        margin-bottom: 0;
    }
    .p-comment-content-item:last-of-type {
        margin-bottom: 0;
    }
    .p-commented-product-img{
        width:46px;
        height:46px;
    }
    .p-commented-product-img::before{
        font-size: 22px;
    }
}
@media (max-width: 280px) {
    .p-comments__title,
    .ideas-title {
        font-size: 12px;
        text-align: right;
    }
    .p-product-content-data {
        margin-top: 3px;
        margin-right: 10px;
    }
    .p-product-content-text-data {
        font-size: 13px;
    }
    .p-product-content-rating-data {
        margin-top: 5px;
    }
    .p-comments-content-header {
        padding-left: 11px;
    }
    .p-comments-idea__title {
        margin-bottom: 10px;
    }
    .p-commentedproduct-description {
        margin: 14px 11px 10px 27px;
    }
    .p-comments__state-accepted__icon,
    .p-comments__state-acceptting__icon {
        margin-left: 5px;
    }
}
</style>
