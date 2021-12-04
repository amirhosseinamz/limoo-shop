<template>
    <div class="birthday">
        <span class="birthday-title">تاریخ تولد :</span>
        <div class="birthday-container">
            <!-- Day -->
            <div class="birthday-item__days">
                <select
                    v-model="selectedDay"
                    class="birthday-item__days-select"
                >
                    <option v-for="day in days" :key="day.day" :value="day.day">
                        {{ day.day }}
                    </option>
                </select>
                <span class="arrow__spliter"></span>
                <img class="nested-arrow" src="/icons/arrow-down.svg" />
                <!--  -->
                <!--  -->
            </div>
            <img class="curve-line" src="/icons/curve-line.svg" />
            <!-- Month -->
            <div class="birthday-item__months">
                <select
                    v-model="selectedMonth"
                    @change="updateDays()"
                    class="birthday-item__months-select"
                >
                    <option
                        v-for="(month, index) in months"
                        :value="index"
                        :key="month.month"
                    >
                        {{ month.month }}
                    </option>
                </select>
                <span class="arrow__spliter"></span>
                <img class="nested-arrow" src="/icons/arrow-down.svg" />
            </div>
            <img class="curve-line" src="/icons/curve-line.svg" />
            <!-- Year -->
            <div class="birthday-item__years">
                <select
                    v-model="selectedYear"
                    @change="updateDays()"
                    class="birthday-item__years-select"
                >
                    <option
                        v-for="year in years"
                        :key="year.year"
                        :value="year.year"
                    >
                        {{ year.year }}
                    </option>
                </select>
                <span class="arrow__spliter"></span>
                <img class="nested-arrow" src="/icons/arrow-down.svg" />
            </div>
        </div>
    </div>
</template>

<script>
const defaultMonths = {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "5",
    5: "6",
    6: "7",
    7: "8",
    8: "9",
    9: "10",
    10: "11",
    11: "12"
};

export default {
    name: "DateDropdown",
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
        }
    },

    data() {
        return {
            days: [],
            selectedDay: "",
            selectedMonth: "",
            selectedYear: ""
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
                months.push(defaultMonths[i]);
            }

            return months.map((month, index) => {
                return { month, selected: index === this.selectedMonth };
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
                return { year, selected: year === this.selectedYear };
            });
        }
    },

    methods: {
        getDays() {
            let days = [];
            let daysNumberOfMonth = new Date(
                this.selectedYear,
                this.selectedMonth + 1,
                0
            ).getDate();

            for (let i = 1; i < daysNumberOfMonth + 1; i++) days.push(i);

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
        }
    },

    created() {
        // Set the date when the component was created
        this.setDate();
    },

    updated() {
        // Send the data on change
        this.sendDate();
    }
};
</script>

<style lang="scss" scoped>
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
    box-shadow: inset 0 0 2px grey;
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
    /* border: 1px red solid; */
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
            width: 91px;

            border-radius: 15px;
            color: $gray;
            outline: none;
            /* */
            &-select {
                appearance: none;

                font-family: inherit;
                font-size: 16px;
                outline: none;
                border: none;
                box-shadow: none;
                overflow: scroll;
                height: 100%;
                width: 80%;
                border-radius: 15px;
                padding: 11px;
                padding-right: 30%;
                /* background: greenyellow; */
                color: $gray;
                cursor: pointer;
            }

            &-select > option {
                color: $gray;
                appearance: none;
                border-radius: 15px;
                /* font-weight: normal;
                display: block;
                white-space: pre;
                min-height: 1.2em;
                padding: 0px 2px 1px; */
            }
            /* &-select > option:hover {
                color: violet;
            } */
            /* &-select:focus {
                -webkit-box-flex: 1;
                flex-grow: 1;
            } */
            /* &-select + .nested-arrow {
                transform: rotate(0deg);
            } */
            &-select:focus ~ .nested-arrow {
                transform: rotate(-180deg);
            }
        }
        &__years {
            width: 150px;
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
@media (max-width: 1220px) {
    .birthday {
        &-item {
            &__days,
            &__months,
            &__years {
                width: 74px;
            }
            &__years {
                width: 120px;
            }
        }
    }
}
@media (max-width: 960px) {
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
                width: 74px;
                &-select {
                    font-size: 13px;

                    padding: 5px;
                    padding-right: 20%;
                }
            }
            &__years {
                width: 120px;
            }
            &__spliter {
                height: 15px;
            }
        }
    }
}
@media (max-width: 350px) {
    .curve-line {
        height: 15px;
        margin: auto 0;
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
                    /* background: greenyellow; */
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
@media (max-width: 280px) {
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
</style>
