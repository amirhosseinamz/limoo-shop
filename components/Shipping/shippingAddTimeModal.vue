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
                    :class="{
                        'shipping-dayTime__active': data.daySelected
                    }"
                >
                    <div
                        class="time-modal__days-holder"
                        @click="selectADay(data)"
                        :key="updateSelected"
                    >
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
            <div class="time-modal__days-container">
                <div
                    v-for="day in timeInDayTable"
                    :key="day.id"
                    :class="{
                        'shipping-TimeInDay__active': day.timeIsSelected
                    }"
                >
                    <div :key="updateTimeSelected">
                        <button
                            class="time-modal__days-item"
                            @click="selectATime(day)"
                            :disabled="day.disable"
                        >
                            {{ day.time }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="time-modal__btn-holder">
            <button class="time-modal__btn-submit" @click="submitTimeAdd">
                ثبت
            </button>
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
        return {
            updateSelected: 0,
            updateTimeSelected: 0,
            timeInDayTable: []
        };
    },
    mounted() {
        // when modal opened for first time
        this.timeData.map(content => {
            if (content.id == 1) {
                content.daySelected = true;
                this.timeInDayTable = content.timeInDayTable;
            }
        });
        // when modal opened for editting -> previously selected a time
        this.timeData.map(content => {
            if (content.id !== 1) {
                if (content.daySelected) {
                    this.timeInDayTable = content.timeInDayTable;
                    this.timeData.map(content => {
                        if (content.id == 1) {
                            content.daySelected = false;
                        }
                    });
                }
            }
        });
        this.updateSelected++;
    },
    methods: {
        closeModal() {
            this.$emit("close-modal");
        },
        submitTimeAdd() {
            this.timeData.map(content => {
                content.timeInDayTable.map(timeIn => {
                    if (timeIn.timeIsSelected == true) {
                        this.$emit("submit-time-add");
                    }
                });
            });
        },
        // firstLoad() {
        //     this.timeData.map(content => {
        //         if (content.id == 1) {
        //             content.daySelected = true;
        //             this.timeInDayTable = content.timeInDayTable;
        //         }
        //         console.log(content);
        //     });
        //     this.updateSelected++;
        // },
        selectADay(data) {
            this.timeData.map(content => {
                if (content.id == data.id) {
                    // console.log(this.timeInDayTable);
                    content.daySelected = true;
                    this.timeInDayTable = content.timeInDayTable;
                    // console.log(this.timeInDayTable);
                } else {
                    content.daySelected = false;
                }
            });
            this.updateSelected++;
            // console.log(data);
            // console.log(this.timeData);
        },
        selectATime(day) {
            this.timeData.map(content => {
                content.timeInDayTable.map(timeIn => {
                    timeIn.timeIsSelected = false;
                });
            });
            this.timeInDayTable.map(content => {
                if (content.id == day.id) {
                    content.timeIsSelected = true;
                } else {
                    content.timeIsSelected = false;
                }
            });
            this.updateTimeSelected++;
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
    height: 76px;
}
.time-modal__dayTime-items:last-of-type {
    border-left: none;
}
.time-modal__line {
    width: 76px;
    height: 4px;
    background-color: $yellow;
    border-radius: 10px 10px 0 0;
    display: none;
}
.shipping-dayTime__active .time-modal__line {
    display: block;
}
.shipping-dayTime__active .time-modal__dayTime-item {
    color: $black-topic;
}
.time-modal__days-holder {
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    height: 47px;
}
.time-modal__days-container {
    width: 100vw;
    @include display-flex();
    justify-content: center;
    flex-direction: row;
    flex-flow: wrap;
    height: fit-content;
    /* border: 1px solid red; */
    margin-top: 40px;
}
.time-modal__days-item {
    width: 148px;
    height: 50px;
    background: $gray-border;
    box-shadow: 0px 2px 4px $modal-btn__shadow;
    border-radius: 10px;
    border: none;
    font-family: inherit;
    font-size: 14px;
    color: $gray;
    margin: 8px 12px 8px 12px;
    cursor: pointer;
}
button[disabled] {
    cursor: initial;
    opacity: 0.5;
}
.shipping-TimeInDay__active .time-modal__days-item {
    background: $yellow;
    color: $code;
    box-shadow: none;
}
@media screen and (max-width: 769px) and (min-width: 768px) {
    .time-modal__days-item {
        margin: 18px 72px 18px 72px;
    }
    .time-modal__btn-holder {
        padding: 0 150px;
        margin-bottom: 70px;
    }
}
@media screen and (max-width: 541px) and (min-width: 539px) {
    .time-modal__days-item {
        margin: 18px 32px 18px 32px;
    }
    .time-modal__btn-holder {
        padding: 0 90px;
        margin-bottom: 43px;
    }
}
@media (max-width: 321px) {
    .time-modal__btn-submit,
    .time-modal__btn-cancel {
        width: 119px;
    }
    .time-modal__days-item {
        width: 128px;
        margin: 8px 10px 8px 10px;
    }
}
@media (max-width: 281px) {
    .time-modal__btn-submit,
    .time-modal__btn-cancel {
        width: 110px;
    }
    .time-modal__days-item {
        width: 110px;
        font-size: 13px;
    }
}
</style>
