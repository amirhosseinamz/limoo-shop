<template>
    <div :class="className" class=" d-flex flex-wrap birthday-item-wrapper">
        <div
            v-if="defaultCheckDataState === 'days'"
            class="flex-wrap d-flex birthday-item-main align-items-start cursor-pointer"
            :class="{ 'birthday-active': birthdayShow }"
        >
            <div class="d-flex flex-wrap birthday-item-content">
                <div
                    :key="lastItemSelectedBirthDayOption"
                    class="birthday-item__days flex-wrap check-dropdown-close"
                >
                    <div
                        @click="eventBirthDayShow"
                        class="birthday-item-selected justify-content-center align-items-center w-100 flex-wrap h-100 check-dropdown-close"
                    >
                        <span class=" day-item check-dropdown-close">{{
                            lastItemSelectedBirthDayOption
                        }}</span>

                        <div class="birthday-item-icons check-dropdown-close">
                            <span class="arrow__spliter"></span>
                            <span
                                class="nested-arrow birthday-item-selected-arrow check-dropdown-close"
                            ></span>
                        </div>
                    </div>
                </div>

                <div
                    class="p-birthday-select-box w-100 flex-wrap d-none check-dropdown-close "
                >
                    <div
                        class="p-birthday-select-box-items flex-wrap align-items-start w-100 check-dropdown-close"
                    >
                        <div class="w-100 check-dropdown-close">
                            <input
                                v-model="searchBirthdaySelectBox"
                                type="text"
                                class="p-birthday-select-box-search check-dropdown-close"
                                name=""
                                value=""
                            />
                        </div>
                        <div
                            ref="parentBirthday"
                            class="w-100 p-birthday-select-box-overflow check-dropdown-close"
                        >
                            <span
                                ref="p-birthday-select-box-option"
                                v-show="!day.show"
                                :class="{
                                    'p-birthday-select-option': day.selected
                                }"
                                @click="selectBirthdayOption(day)"
                                v-for="day in days"
                                :key="day.day"
                                class="w-100 check-dropdown-close p-birthday-select-box-item align-items-center justify-content-center"
                                >{{ day.day }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="defaultCheckDataState === 'months'"
            class="flex-wrap d-flex birthday-item-main align-items-start cursor-pointer"
            :class="{ 'birthday-active': birthdayShow }"
        >
            <div class="d-flex flex-wrap birthday-item-content">
                <div
                    :key="lastItemSelectedBirthDayOption"
                    class="birthday-item__days flex-wrap check-dropdown-close"
                >
                    <div
                        @click="eventBirthDayShow"
                        class="birthday-item-selected justify-content-center align-items-center w-100 flex-wrap h-100 check-dropdown-close"
                    >
                        <span class=" day-item check-dropdown-close">{{
                            lastItemSelectedBirthDayOption
                        }}</span>

                        <div class="birthday-item-icons check-dropdown-close">
                            <span class="arrow__spliter"></span>
                            <span
                                class="nested-arrow birthday-item-selected-arrow check-dropdown-close"
                            ></span>
                        </div>
                    </div>
                </div>

                <div
                    class="p-birthday-select-box w-100 flex-wrap d-none check-dropdown-close"
                >
                    <div
                        class="p-birthday-select-box-items flex-wrap align-items-start w-100 check-dropdown-close"
                    >
                        <div class="w-100 check-dropdown-close">
                            <input
                                v-model="searchBirthdaySelectBox"
                                type="text"
                                class="p-birthday-select-box-search check-dropdown-close"
                                name=""
                                value=""
                            />
                        </div>

                        <div
                            ref="parentBirthday"
                            class="w-100 p-birthday-select-box-overflow check-dropdown-close"
                        >
                            <span
                                ref="p-birthday-select-box-option"
                                v-show="!month.show"
                                :class="{
                                    'p-birthday-select-option': month.selected
                                }"
                                @click="selectBirthdayOption(month)"
                                v-for="month in months"
                                :key="month.month"
                                class="w-100 check-dropdown-close p-birthday-select-box-item align-items-center justify-content-center"
                                >{{ month.month }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="defaultCheckDataState == 'years'"
            class="flex-wrap d-flex birthday-item-main align-items-start cursor-pointer"
            :class="{ 'birthday-active': birthdayShow }"
        >
            <div class="d-flex flex-wrap birthday-item-content">
                <div
                    :key="lastItemSelectedBirthDayOption"
                    class="birthday-item__days flex-wrap check-dropdown-close"
                >
                    <div
                        @click="eventBirthDayShow"
                        class="birthday-item-selected justify-content-center align-items-center w-100 flex-wrap h-100 check-dropdown-close"
                    >
                        <span class=" day-item check-dropdown-close">{{
                            lastItemSelectedBirthDayOption
                        }}</span>

                        <div class="birthday-item-icons check-dropdown-close">
                            <span class="arrow__spliter"></span>
                            <span
                                class="nested-arrow birthday-item-selected-arrow check-dropdown-close"
                            ></span>
                        </div>
                    </div>
                </div>

                <div
                    class="p-birthday-select-box w-100 flex-wrap d-none check-dropdown-close"
                >
                    <div
                        class="p-birthday-select-box-items flex-wrap align-items-start w-100 check-dropdown-close"
                    >
                        <div class="w-100 check-dropdown-close">
                            <input
                                v-model="searchBirthdaySelectBox"
                                type="text"
                                class="p-birthday-select-box-search check-dropdown-close"
                                name=""
                                value=""
                            />
                        </div>

                        <div
                            ref="parentBirthday"
                            class="w-100 p-birthday-select-box-overflow check-dropdown-close"
                        >
                            <span
                                ref="p-birthday-select-box-option"
                                v-for="year in years"
                                v-show="!year.show"
                                :class="{
                                    'p-birthday-select-option': year.selected
                                }"
                                @click="selectBirthdayOption(year)"
                                :key="year.day"
                                class="w-100 check-dropdown-close p-birthday-select-box-item align-items-center justify-content-center"
                                >{{ year.day }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheDateDropdownItems",
    props: {
        default: {
            type: String,
            required: false
        },
        min: {
            type: String,
            required: false
        },
        max: {
            type: String,
            required: false
        },
        max: {
            type: String,
            required: false
        },
        daysData: {
            type: [Array, Object],
            required: []
        },
        defaultMonthsData: {
            type: [Object],
            required: {}
        },
        defaultCheckDataState: {
            type: String,
            required: ""
        },
        defaultYearsData: {
            type: [Object, Array],
            required: {}
        },
        firstSelectedDate: {
            type: [String],
            required: {}
        },
        className: {
            type: [String],
            required: {}
        }
    },

    data() {
        return {
            selectedDay: "",
            selectedMonth: "",
            selectedYear: "",
            //   ***************************
            birthdayShow: false,
            searchBirthdaySelectBox: "",
            lastItemSelectedBirthDayOption: 10,
            updateScrollClick: 0
            //   ***************************
        };
    },

    computed: {
        // Returns if there are default date settings.
        initialDate() {
            return !!(this.default || this.min);
        },

        // The date property, converted to a date.
        specifiedDate() {
            return new Date(this.default);
        },

        // The minimum date the will allow user to select.
        minDate() {
            if (this.min) return new Date(this.min);

            return;
        },

        // The maximum date the will allow user to select.
        maxDate() {
            if (this.max) return new Date(this.max);

            return;
        },

        // Returns a formatted date e.g. 01.02.2018.
        calculatedDate() {
            const day =
                this.selectedDay >= 10
                    ? this.selectedDay
                    : `0${this.selectedDay}`;
            const month =
                this.selectedMonth + 1 >= 10
                    ? this.selectedMonth + 1
                    : `0${this.selectedMonth + 1}`;

            return `${day}.${month}.${this.selectedYear}`;
        },

        // Computes a list of month.
        months() {
            let months = [];

            for (let i = 0; i < 12; i++) {
                months.push(this.defaultMonthsData[i]);
            }

            return months.map((month, index) => {
                return {
                    month,
                    selected: index === this.selectedMonth,
                    day: month
                };
            });
        },

        // Computes a list of years.
        years() {
            // Set the first year of the array.
            let firstYear;

            if (this.min) {
                firstYear = this.minDate.getFullYear();
            } else if (this.default) {
                firstYear = this.specifiedDate.getFullYear();
            } else {
                firstYear = new Date().getFullYear();
            }

            // Create a range of years to loop through which is either the maximum
            // date minus the first year, or simply 100.
            let through = this.max
                ? this.maxDate.getFullYear() + 1 - firstYear
                : 101;
            let years = [];

            for (let i = firstYear, len = firstYear + through; i < len; i++)
                years.push(i);

            return years.map(year => {
                return {
                    year,
                    selected: year === this.selectedYear,
                    day: year
                };
            });
        }
    },
    //   ***************************⇓
    watch: {
        lastItemSelectedBirthDayOption(value) {
            this.$emit("last-update-birth", value);
        },

        searchBirthdaySelectBox(value) {
            this.searchFilter(value);
        },

        updateScrollClick() {
            let indexShowSelectOption = -1;
            if (this.birthdayShow) {
                if (this.lastItemSelectedBirthDayOption !== "") {
                    this.days.map((content, index) => {
                        if (
                            content.day === this.lastItemSelectedBirthDayOption
                        ) {
                            indexShowSelectOption = index;
                            content.selected = true;
                            document.getElementById("");
                        }
                    });

                    setTimeout(() => {
                        const findCurrentElem = this.$refs["parentBirthday"];
                        let elem = this.$refs["p-birthday-select-box-option"][
                            indexShowSelectOption
                        ];
                        // elem.scrollIntoView(false);
                    });
                }
            }
        }
    },
    //   ***************************⇑
    methods: {
        //   ***************************⇓
        onClick(e) {
            function findAncestor(el, cls) {
                while ((el = el.parentElement) && !el.classList.contains(cls));
                return el;
            }

            if (findAncestor(e.target, "check-dropdown-close") == null) {
                this.birthdayShow = false;
                this.searchBirthdaySelectBox = "";
                this.days.map(t => {
                    t.show = false;
                });
            }
        },

        searchFilter(data) {
            let filteredArray = this.days.filter((content, index) => {
                if (
                    content.day
                        .toString()
                        .toLowerCase()
                        .indexOf(data.toString().toLowerCase()) >= 0
                ) {
                    content.show = false;
                } else {
                    content.show = true;
                }
            });

            setTimeout(() => {
                const scrollTop = this.$refs.parentBirthday.scrollHeight;
                this.$refs.parentBirthday.scrollTop = scrollTop;
            });
        },
        //   ***************************⇑
        getDays() {
            let days = [];
            this.daysData.map(t => {
                days.push(t.day);
            });

            return days.map(day => {
                return { day, selected: days === this.selectedDay };
            });
        },

        updateDays() {
            this.days = this.getDays();
        },

        // Send data to upper component.
        sendDate() {
            const date = this.format
                ? this.format(this.calculatedDate)
                : this.calculatedDate;

            this.$emit("input", date);
        },

        // Set the initial date.
        setDate() {
            this.updateDays();

            // If a value property has been passed to the component, that will be
            // used instead of the current day.
            let date;

            if (this.min && this.max && !this.default) {
                date = new Date(this.min);
            } else if (this.default) {
                date = new Date(this.default);
            } else {
                date = new Date();
            }

            if (this.initialDate) this.selectedDay = date.getDate() + 1;
            else this.selectedDay = date.getDate();

            this.selectedDay = date.getDate();
            this.selectedMonth = date.getMonth();
            this.selectedYear = date.getFullYear();

            this.sendDate();
        },
        //   ***************************⇓
        eventBirthDayShow() {
            // console.log("hi");
            let indexShowSelectOption = -1;
            this.birthdayShow = !this.birthdayShow;
            // if (this.birthdayShow) {
            //     this.birthdayShow = false;
            // } else {
            //     this.birthdayShow = true;
            // }
            this.$nextTick(() => {
                this.updateScrollClick++;
            });
        },

        selectBirthdayOption(data) {
            this.birthdayShow = false;
            this.searchBirthdaySelectBox = "";

            this.days.map(t => {
                if (t.day == data.day) {
                    t.selected = true;
                    this.lastItemSelectedBirthDayOption = t.day;
                } else {
                    t.selected = false;
                }
                t.show = false;
            });
        }
        //   ***************************⇑
    },

    created() {
        // Set the date when the component was created
        this.setDate();
        document.addEventListener("click", this.onClick);
    },

    destroyed() {
        document.removeEventListener("click", this.documentClick);
    },

    mounted() {
        this.lastItemSelectedBirthDayOption = this.firstSelectedDate;

        if (this.defaultCheckDataState === "months") {
            this.days = this.months;
        }
        if (this.defaultCheckDataState === "years") {
            this.days = this.years;
        }
    }
};
</script>

<style lang="scss" >
.nested-arrow {
    margin-left: 8px;
    margin-right: 4px;
}
/* width */
::-webkit-scrollbar {
    width: 6px;
    position: absolute;
    scrollbar-width: thin;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 10px;
    position: absolute;
    scrollbar-width: thin;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: $scrollbar-gray;
    border-radius: 6px;
    position: absolute;
}

.birthday {
    @include display-flex();
    flex-direction: column;
    width: 100%;
    height: 100%;
    &-title {
        font-size: 16px;
        font-family: inherit;
        line-height: 140.62%;
        align-items: center;
        text-align: right;
        color: $black-topic;
        margin-bottom: 16px;
    }
    &-container {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
        height: 0;
    }
    &-item {
        &__days,
        &__months,
        &__years {
            @include display-flex();
            flex-direction: row;
            justify-content: space-between;
            font-family: inherit;
            border: 1px solid $input-border;
            box-shadow: 0px 4px 4px $gray-border;
            height: 52px;
            width: 100%;

            border-radius: 15px;
            color: $gray;
            outline: none;
            /* */
        }
        &__years {
            // width: 150px;
        }
    }
}
.arrow__spliter {
    background-color: $light-gray;
    width: 1px;
    height: 24px;
    border: none;
    align-self: center;
}
/* ***************************⇓ */
.day-item {
    margin-right: -25%;
}
.p-birthday-select-box {
    @include display-flex();
    position: relative;
    z-index: 0;
    width: 100%;
    color: $gray;
    box-sizing: border-box;
    box-shadow: 0 toRem(4) toRem(4) $gray-border;
    border: 1px solid $input-border;
    padding: 0 5px;
    background: $white;
    height: 200px;
    overflow: auto;
    border-top: none;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.birthday-item-selected {
    @include display-flex();
    position: relative;
}
.birthday-active .p-birthday-select-box {
    display: flex !important;
}
.birthday-active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.birthday-select-box-item-selected {
    background: $gray-border;
    color: $mid_gray;
}
.p-birthday-select-box-item {
    height: 40px;
    @include display-flex();
    cursor: pointer;
    &:hover {
        background: $mid_white;
        color: $mid_gray;
    }
}
.p-birthday-select-option {
    background: $mid_white;
    color: $mid_gray;
}
.p-birthday-select-box-search {
    border-radius: toRem(4);
    background: $white;
    border: toRem(1) solid $gray-border;
    color: $mid-dark_gray;
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.571;
    padding: toRem(11) toRem(12);
    outline: none;
    margin-bottom: toRem(5);
    max-width: 100%;
    max-height: toRem(40);
}
.p-birthday-select-box-overflow {
    overflow: auto;
    height: toRem(145);
}

/* ======================== */
.birthday-item-selected-arrow::before {
    @include display-flex();
    content: "\e801";
    @include font-icon__limoo();
    font-size: 12px;
    color: $input-border;
    transform: rotate(-90deg);
    margin-right: toRem(4);
    margin-left: toRem(8);
}

.birthday-active .birthday-item-selected-arrow::before {
    transform: rotate(90deg);
}
.birthday-item-icons {
    position: absolute;
    top: 0;
    left: toRem(-5);
    height: 100%;
    align-items: center;
    display: flex;
}
.birthday-item-main {
    @include display-flex();
}
.birthday-active .birthday-item__days {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: none;
}

.birthday-item-content {
    width: toRem(80);
    @media only screen and(max-width: 1060px){
        width:toRem(70) ;
    }
}
.item-year .birthday-item-content {
    width: toRem(120);
}
.item-year .birthday-item__days {
    width: 100%;
}
@include lg {
    .birthday-item-content
     {
        width: toRem(120);
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: toRem(150);
    }

}
@include md {
    .p-birthday-select-box-search {
        font-size: 13px;
    }
    .birthday-item-content{
        width:toRem(138);
        font-size: 13px;
        @media only screen and(max-width:810px){
            width:toRem(130);
        }
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: toRem(168);
        font-size: 13px;
        @media only screen and(max-width:810px){
            width: toRem(160);

        }
    }
    .birthday {
        &-title {
            font-size: 14px;
        }
        &-item {
            &__days,
            &__months,
            &__years {
                font-size: 13px;
                height: 46px;
                &-select {
                    font-size: 13px;
                    padding: 5px;
                    padding-right: 20%;
                }
            }

            &__spliter {
                height: 15px;
            }
        }
    }
}
@include sm {
    .birthday-item-content {
        width: toRem(138);
        @media only screen and(max-width: 680px) {
            width: toRem(110);
        }
        @media only screen and(max-width: 580px) {
            width: toRem(85);
        }
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: toRem(168);
         @media only screen and(max-width: 680px) {
            width: toRem(140);
        }
         @media only screen and(max-width: 580px) {
            width: toRem(115);
        }
    }
    .birthday {
        &-title {
            font-size: toRem(14);
        }
        &-item {
            &__days,
            &__months,
            &__years {
                font-size: toRem(13);
                height: toRem(46);
                &-select {
                    font-size: toRem(13);
                    padding: toRem(5);
                    padding-right: 20%;
                }
            }
            &__years {
            }
            &__spliter {
                height: toRem(15);
            }
        }
    }
}
@include xs {
    .birthday-item-content{
        width: toRem(85);
        @media only screen and(max-width: 420px){
        width: toRem(65);
        }
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: toRem(115);
        @media only screen and(max-width: 420px){
        width: toRem(95);
        }
    }
    .birthday {
        &-item {
            &__days,
            &__months,
            &__years {
                font-size: 13px;
                height: 46px;
            }
        }
    }
}
@include xxs {
    .birthday-item-content{
        width: toRem(60);
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: toRem(80);
    }
    .birthday {
        &-item {
            &__days,
            &__months,
            &__years {
                width: 64px;
                &-select {
                    height: 100%;
                    width: 80%;
                    border-radius: 15px;
                    padding: 5px;
                    padding-right: 20%;
                    color: $gray;
                    cursor: pointer;
                }
            }
            &__years {
                width: 105px;
            }
        }
    }
}
@include xxxs {
    // .birthday-item-content,
    // .item-day .birthday-item__days,
    // .p-birthday-select-box {
    //     width: 60px;
    // }
    // .item-year .birthday-item-content,
    // .item-year .p-birthday-select-box {
    //     width: 80px;
    // }
    .birthday {
        &-item {
            &__days,
            &__months,
            &__years {
                width: 60px;
            }
            &__years {
                width: 80px;
            }
        }
    }
}
/* ***************************⇑ */
</style>
