<template>
  <div class="birthday">
    <base-backdrop class="dropdown-backdrop"
                   v-if="showBackdrop"
                   @on-click="closeAllDropdowns"
    ></base-backdrop>

    <span class="birthday-title">{{
      getTextByTextKey("personal_info_birth")
    }}</span>

    <div class="birthday-container">
      <!-- Day -->
<!--      <the-date-dropdown-items-->
<!--        className="item-day"-->
<!--        @last-update-birth="LastUpdateDays"-->
<!--        :first-selected-date="getTextByTextKey('personal_info_date_day')"-->
<!--        :days-data="days"-->
<!--        :default-months-data="defaultMonths"-->
<!--        :default-years-data="years"-->
<!--        default-check-data-state="days"-->
<!--        :min="null"-->
<!--        :max="null"-->
<!--      ></the-date-dropdown-items>-->
      <the-dropdown
        class="day-dropdown"
        :options="dropdownDays"
        :disabled="false"
        placeholder="روز"
        @toggle-list="toggleDropdown"
        :is-open="dayDropdownIsOpen"
      >
      </the-dropdown>
      <img class="curve-line" src="/icons/curve-line.svg" />
      <!-- Month -->
<!--      <the-date-dropdown-items-->
<!--        className="item-month"-->
<!--        @last-update-birth="LastUpdateMonth"-->
<!--        :first-selected-date="getTextByTextKey('personal_info_date_month')"-->
<!--        :days-data="days"-->
<!--        :default-months-data="defaultMonths"-->
<!--        :default-years-data="years"-->
<!--        default-check-data-state="months"-->
<!--        :min="null"-->
<!--        :max="null"-->
<!--      ></the-date-dropdown-items>-->
      <the-dropdown
        class="month-dropdown"
        :options="dropdownMonths"
        :disabled="false"
        placeholder="ماه"
        :is-open="monthDropdownIsOpen"
        @toggle-list="toggleDropdown"
      >
      </the-dropdown>
      <img class="curve-line" src="/icons/curve-line.svg" />
      <!-- Year -->
<!--      <the-date-dropdown-items-->
<!--        className="item-year"-->
<!--        @last-update-birth="LastUpdateYears"-->
<!--        :first-selected-date="getTextByTextKey('personal_info_date_year')"-->
<!--        :days-data="days"-->
<!--        :default-months-data="defaultMonths"-->
<!--        :default-years-data="years"-->
<!--        default-check-data-state="years"-->
<!--        :min="min"-->
<!--        :max="max"-->
<!--      ></the-date-dropdown-items>-->
      <the-dropdown
        class="year-dropdown"
        :options="dropdownYears"
        :default-value="(currentYear - 30).toString()"
        :disabled="false"
        placeholder="سال"
        @toggle-list="toggleDropdown"
        :is-open="yearDropdownIsOpen"
      >
      </the-dropdown>
    </div>
  </div>
</template>

<script>
import TheDateDropdownItems from "./TheDateDropdownItems";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import TheDropdown from "~/components/Profile/PersonalInfo/TheDropdown"


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
  11: "12",
};

export default {
  name: "TheDateDropdown",
  components: {
    TheDateDropdownItems,
    TheDropdown,
  },
  props: {
    default: {
      type: String,
      required: false,
    },
    min: {
      type: String,
      required: false,
    },
    max: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      days: [],
      selectedDay: "",
      selectedMonth: "",
      selectedYear: "",
      defaultMonths: defaultMonths,
      currentYear: 1400,
      dayDropdownIsOpen: false,
      monthDropdownIsOpen: false,
      yearDropdownIsOpen: false,
      showBackdrop: false,
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
        this.selectedDay >= 10 ? this.selectedDay : `0${this.selectedDay}`;
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
      let through = this.max ? this.maxDate.getFullYear() + 1 - firstYear : 101;
      let years = [];

      for (let i = firstYear, len = firstYear + through; i < len; i++)
        years.push(i);

      return years.map((year) => {
        return { year, selected: year === this.selectedYear };
      });
    },
    dropdownDays() {
      let _days=[];
      for (let i = 1; i <= 31; i++) {
        _days.push(i.toString());
      }
      console.log(_days);
      return _days;
    },
    dropdownMonths() {
      let _months=[];
      for (let i = 1; i <= 12; i++) {
        _months.push(i.toString());
      }
      return _months;
    },
    dropdownYears() {
      let _years=[];
      for (let i = this.currentYear - 120; i <= this.currentYear - 16; i++) {
        _years.push(i.toString());
      }
      return _years;
    }
  },

  methods: {
    //   ***************************⇓
    LastUpdateDays(data) {
      console.log(data, "LastUpdateDays");
    },

    LastUpdateMonth(data) {
      console.log(data, "LastUpdateMonth");
    },

    LastUpdateYears(data) {
      console.log(data, "LastUpdateYears");
    },
    toggleDropdown(isOpen) {
      this.showBackdrop = isOpen;
      console.log(this.showBackdrop);
    },
    closeAllDropdowns() {
      this.dayDropdownIsOpen = false;
      this.yearDropdownIsOpen = false;
      this.monthDropdownIsOpen = false;
      this.showBackdrop = false;
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
      let daysNumberOfMonth = new Date(
        this.selectedYear,
        this.selectedMonth + 1,
        0
      ).getDate();

      for (let i = 1; i < daysNumberOfMonth + 1; i++) days.push(i);

      return days.map((day) => {
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
    getTextByTextKey,
  },

  created() {
    // Set the date when the component was created
    this.setDate();
    document.addEventListener("click", this.onClick);
  },
  // Send the data on change
  // updated() {
  //   this.sendDate();
  // }
};
</script>

<style lang="scss" scoped>
.curve-line {
  height: toRem(24);
  margin-top: toRem(22);
}
.dropdown-backdrop {
    background-color: transparent;
    z-index: 1400;
}
.birthday {
  @include display-flex();
  flex-direction: column;
  width: 100%;
  height: 100%;
  &-container {
    @extend .align-center;
    justify-content: space-between;
    width: 100%;
    height: max-content;
    .day-dropdown {
      width: toRem(80);
      @include md {
        width: toRem(136);
        height: toRem(46);
      }
      @include sm {
        width: toRem(110);
      }
      @include xs {
        width: toRem(74);
        height: toRem(44);
      }
      @include xxs {
        width: toRem(65);
      }
    }
    .month-dropdown {
      width: toRem(80);
      @include md {
        width: toRem(136);
        height: toRem(46);
      }
      @include sm {
        width: toRem(110);
      }
      @include xs {
        width: toRem(74);
        height: toRem(44);
      }
      @include xxs {
        width: toRem(65);
      }
    }
    .year-dropdown {
      width: toRem(120);
      @include md {
        width: toRem(166);
        height: toRem(46);
      }
      @include sm {
        width: toRem(136);
      }
      @include xs {
        width: toRem(100);
        height: toRem(44);
      }
      @include xxs {
        width: toRem(85);
      }
    }
  }
  &-title {
    font-size: 16px;
    font-family: inherit;
    line-height: 140.62%;
    align-items: center;
    text-align: right;
    color: $black-topic;
    margin-bottom: 16px;
  }

}
@include md {
  .curve-line {
    height: 15px;
  }
  .birthday {
    &-title {
      font-size: 14px;
    }
  }
}
@media (max-width: 350px) {
  .curve-line {
    height: 15px;
  }
}
</style>
