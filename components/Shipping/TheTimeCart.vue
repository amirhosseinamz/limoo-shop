<template>
    <div class="order-content-main__container d-rtl">
        <div
            class="main-carousel timeContent__mainSlider"
            :class="'slider' + timeData.id"
        >
            <div
                v-for="data in timeTable"
                :key="data.id"
                class="order-content-item__time-cart carousel-cell"
                :class="{
                    'user-selected-time-in-day':
                        data.timeInDayTable.selectedtime
                }"
            >
                <div
                    class="timeContent__topic-day__holder"
                    :class="{
                        'user-selected-time-in-days': data.selected
                    }"
                    :key="updateSelectedTimeInDay"
                >
                    <span class="timeContent__circle"></span>
                    <span class="timeContent__topic-day">
                        {{ data.dayTime }}</span
                    >
                </div>
                <div class="timeContent__times-day__holder">
                    <div
                        v-for="dayData in data.timeInDayTable"
                        :key="dayData.id"
                    >
                        <div
                            :class="{
                                'user-selected-time-in-day':
                                    dayData.selectedtime
                            }"
                        >
                            <button
                                class="time-day__btn"
                                :disabled="dayData.disable"
                                @click="selectedTimeInDay(dayData, data)"
                            >
                                {{ dayData.time }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        timeTable: { type: [Object, Array], default: {} },
        timeData: { type: [Object, Array], default: {} }
    },
    data() {
        return {
            updateSelectedTimeInDay: 0
        };
    },
    mounted() {
        this.flickityOptions();
    },
    methods: {
        flickityOptions() {
            let Flickity = require("flickity");
            let sliderOptions = new Flickity(`.slider${this.timeData.id}`, {
                accessibility: true,
                adaptiveHeight: true,
                rightToLeft: true,
                cellAlign: "right",
                imagesLoaded: true,
                wrapAround: false,
                freeScroll: true,
                contain: true,
                prevNextButtons: true,
                pageDots: false,
                groupCells: true,
                fade: false
            });
        },
        selectedTimeInDay(dayData, data) {
            // console.log(dayData);
            // console.log(data);
            this.timeTable.map(timeInDay => {
                timeInDay.timeInDayTable.map(timeIn => {
                    timeIn.selectedtime = false;
                });
                if (timeInDay.id == data.id) {
                    timeInDay.selected = true;
                    // console.log(timeInDay);
                    timeInDay.timeInDayTable.map(timeIn => {
                        if (timeIn.id == dayData.id) {
                            // console.log(timeIn);
                            timeIn.selectedtime = true;
                        } else {
                            timeIn.selectedtime = false;
                        }
                    });
                } else {
                    timeInDay.selected = false;
                }
            });
            // console.log(dayData);

            this.updateSelectedTimeInDay++;
        }
    }
};
</script>
<style lang="scss" scoped>
.order-content-main__container {
    @include display-flex();
    flex-direction: row;
    width: 100%;
}
.timeContent__mainSlider {
    position: relative;
    width: 100%;
    /* @include display-flex();
    flex-direction: row; */
}
.timeContent__topic-day__holder {
    @include display-flex();
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 54px;
    border-bottom: 1px solid $light-gray;
}
.timeContent__topic-day {
    color: $gray;
    font-size: 18px;
    line-height: 140.62%;
}
.timeContent__circle {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 5px solid $light-gray;
    margin-left: 9px;
}
.order-content-item__time-cart {
    /* width: 348px; */
    width: 348px;
    height: 212px;
    border: 1px solid $light-gray;
    box-sizing: border-box;
    border-radius: 15px;
    margin: 0 8px;
}
.timeContent__times-day__holder {
    @include display-flex();
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 157px;
    /* border: 1px solid red; */
    padding-bottom: 13px;
}
.time-day__btn {
    font-family: inherit;
    width: 147px;
    height: 50px;
    background: $gray-border;
    border-radius: 10px;
    padding: 14px 12px;
    margin: 12px 16px 10px 6px;
    border: none;
    font-size: 16px;
    line-height: 140.62%;
    text-align: center;
    color: $gray;
    cursor: pointer;
}
button[disabled] {
    cursor: initial;
    opacity: 0.5;
}
.user-selected-time-in-day .time-day__btn {
    background: $yellow;
    color: $code;
}
.user-selected-time-in-days .timeContent__circle {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 5px solid $yellow;
    margin-left: 9px;
}
.user-selected-time-in-days .timeContent__topic-day {
    color: $code;
}
</style>
