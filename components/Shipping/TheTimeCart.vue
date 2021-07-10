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
                              <base-button
                                classes="time-day__btn"
                                :disabled="dayData.disable"
                                base-color="light"
                                mode="time"
                                @button-clicked="selectedTimeInDay(dayData, data)"
                              >
                                {{ dayData.time }}
                            </base-button>
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
        timeTable: { type: [Object, Array], default: () => { return {} } },
        timeData: { type: [Object, Array], default: () => { return {} } }
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
             this.$emit("submit-times-add");
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

}
.timeContent__topic-day__holder {
    @include display-flex();
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: toRem(54);
    border-bottom: toRem(1) solid $light-gray;
}
.timeContent__topic-day {
    color: $gray;
    font-size: toRem(18);
    line-height: 140.62%;
}
.timeContent__circle {
    width: toRem(17);
    height: toRem(17);
    border-radius: 50%;
    border: toRem(5) solid $light-gray;
    margin-left: toRem(9);
}
.order-content-item__time-cart {
    /* width: 348px; */
    width: toRem(348);
    height: toRem(212);
    border: toRem(1) solid $light-gray;
    box-sizing: border-box;
    border-radius: toRem(15);
    margin: 0 toRem(8);
}
.timeContent__times-day__holder {
    @include display-flex();
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: toRem(157);
    padding-bottom: toRem(13);
}
.time-day__btn {
    font-family: inherit;
    width: toRem(147);
    height: toRem(50);
    padding: 0.875rem 0.75rem;
    margin: 0.75rem 1rem 0.625rem 0.375rem;
}
button[disabled] {
    cursor: initial;
    opacity: 0.5;
}
.user-selected-time-in-day .time-day__btn {
    background: $yellow!important;
    color: $code!important;
}
.user-selected-time-in-days .timeContent__circle {
    width: toRem(17);
    height: toRem(17);
    border-radius: 50%;
    border: toRem(5) solid $yellow;
    margin-left: toRem(9);
}
.user-selected-time-in-days .timeContent__topic-day {
    color: $code;
}
</style>
