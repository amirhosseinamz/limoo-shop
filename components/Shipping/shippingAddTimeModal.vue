<template>
    <div class="main-container">
        <div>
            <div class="time-modal__topic-holder">
                <span class="time-modal__topic-title">انتخاب زمان تحویل</span>
                <span class="time-modal__topic-btn" @click="closeModal"></span>
            </div>
            <div class="time-modal__dayTime-holder">
                <div
                    v-for="data in timeData"
                    :key="data.id"
                    class="time-modal__dayTime-items"
                >
                    <div class="time-modal__days-holder">
                        <span class="time-modal__dayTime-item">{{
                            data.weekday
                        }}</span>
                        <span class="time-modal__dayTime-item">{{
                            data.weekcal
                        }}</span>
                    </div>
                    <span class="time-modal__line"></span>
                </div>
            </div>
        </div>
        <div class="time-modal__btn-holder">
            <button class="time-modal__btn-submit">ثبت</button>
            <button class="time-modal__btn-cancel" @click="closeModal">
                انصراف
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        timeData: { type: [Object, Array], default: {} }
    },
    data() {
        return {};
    },
    methods: {
        closeModal() {
            this.$emit("close-modal");
        }
    }
};
</script>
<style lang="scss" scoped>
.main-container {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
}
.time-modal__topic-holder {
    @include display-flex();
    width: 100vw;
    height: 47px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $gray-border;
    padding: 0 16px;
}
.time-modal__topic-title {
    font-size: 14px;
    line-height: 140.62%;
    text-align: right;
    color: $black-topic;
}
.time-modal__topic-btn::before {
    @include font-icon__limoo();
    content: "\e801";
    font-size: 17px;
    color: $gray;
}
.time-modal__btn-holder {
    @include display-flex();
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    padding: 0 19px;
    margin-bottom: 23px;
}
.time-modal__btn-submit,
.time-modal__btn-cancel {
    width: 149px;
    height: 47px;
    border-radius: 10px;
    border: none;
    font-family: inherit;
    font-size: 14px;
}
.time-modal__btn-submit {
    color: $white;
    background-color: $yellow;
}
.time-modal__btn-cancel {
    color: $gray;
    background-color: $light-gray;
}
.time-modal__dayTime-holder {
    @include display-flex();
    align-items: flex-start;
    flex-flow: row;
    /* flex-wrap: wrap; */
    overflow-x: auto;
    overflow-y: hidden;
    width: 100vw;
    height: 87px;
    border-bottom: 1px solid $gray-border;
    margin: 0 auto;
}
.time-modal__dayTime-item {
    width: 68px;
    /* height: 47px; */
    font-size: 14px;
    line-height: 140.62%;
    text-align: center;
    color: $gray;
    flex-shrink: 0;
    /* border: 1px solid red; */
    white-space: nowrap;
    margin: 0 13px 5px 13px;
}
.time-modal__dayTime-items {
    @include display-flex();
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    border-left: 1px solid $gray-border;
    /* border-left: 1px solid red; */
    height: 75px;
}
.time-modal__dayTime-items:last-of-type {
    border-left: none;
}
.time-modal__line {
    width: 76px;
    height: 4px;
    background-color: $yellow;
    border-radius: 10px 10px 0 0;
}
.time-modal__days-holder {
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    height: 47px;
}
@media (max-width: 321px) {
    .time-modal__btn-submit,
    .time-modal__btn-cancel {
        width: 119px;
    }
}
@media (max-width: 281px) {
    .time-modal__btn-submit,
    .time-modal__btn-cancel {
        width: 110px;
    }
}
</style>
