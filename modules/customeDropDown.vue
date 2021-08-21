<template>
    <div  class=" d-flex flex-wrap birthday-item-wrapper" :class="{ 'dropdown-active': showDropDown }">
        <div
            class="flex-wrap d-flex birthday-item-main align-items-start cursor-pointer"
            :class="className"
        >
            <div class="d-flex flex-wrap birthday-item-content">
                <div
                    class="birthday-item__days flex-wrap check-dropdown-close p-input-style__default"
                >
                    <div
                        @click="showOptionsDropDown"
                        class="birthday-item-selected justify-content-center align-items-center w-100 flex-wrap h-100 check-dropdown-close"
                    >
                        <span class=" day-item check-dropdown-close">{{
                            lastUpdateValue
                        }}</span>

                        <div class="birthday-item-icons check-dropdown-close">
                            <span class="arrow__spliter"></span>
                            <img
                                src="/icons/arrow-down.svg"
                                class="nested-arrow birthday-item-selected-arrow check-dropdown-close"
                            />
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
                                v-model="searchValue"
                                type="text"
                                class="p-birthday-select-box-search check-dropdown-close"
                                name=""
                                value=""
                            />
                        </div>
                        <div
                            ref="parentCombobox"
                            class="w-100 p-birthday-select-box-overflow check-dropdown-close"
                        >
                            <span
                                ref="p-birthday-select-box-option"
                                v-show="!data.show"
                                :class="{
                                    'p-birthday-select-option': data.selected
                                }"
                                @click="selectOption(data)"
                                v-for="data in options"
                                :key="data[label]"
                                class="w-100 check-dropdown-close p-birthday-select-box-item align-items-center justify-content-center"
                                >{{ data[label] }}</span
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
    name: "customeDropDown",
    props: {
      initialValue: {
          type: [String],
          required: {}
      },
      options: {
          type: [Array,Object],
          required: {}
      },
      label: {
          type: String,
          required: {}
      },
      className: {
          type: String,
          required: {}
      },

    },

    data() {
        return {
            //   ***************************
            showDropDown       : false,
            searchValue        : "",
            lastUpdateValue    : 10,
            findSelectedOption : 0,
            valueOptions       : [],
            selectedOption     : {},
            //   ***************************
        };
    },

    computed: {

    },
    //   ***************************⇓
    watch: {
        lastUpdateValue(value) {
          // this.$emit("last-update", data);
        },

        selectedOption(data){
          this.$emit("last-update", data.title,data);
        },

        searchValue(value) {
            this.searchFilter(value);
        },

        findSelectedOption() {
          // پیدا کردن آیتم انتخاب شده از سلیکت باکس //


            let indexShowSelectOption = -1;
            if (this.showDropDown) {
                if (this.lastUpdateValue != "") {
                    this.valueOptions.map((content, index) => {
                      content.selected      = false;

                        if (
                            content[this.label] == this.lastUpdateValue
                        ) {
                            indexShowSelectOption = index;
                            content.selected      = true;
                            this.selectedOption   = content;
                        }
                    });

                    // اسکرول به آیتم انتخاب شده //
                    setTimeout(() => {
                        const findCurrentElem = this.$refs["parentCombobox"];
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
        checkCloseDropDown(e) {
          // هر جایی به غیر از باکس دراپ دان کلیک شود در صورتی که دراپ دان باز باشد بسته می شود //


          // چک کردت این که روی دراپ دان کلیک شده یا خیر //
            function findAncestor(el, cls) {
                while ((el = el.parentElement) && !el.classList.contains(cls));
                return el;
            }

            if (findAncestor(e.target, "check-dropdown-close") == null) {
                this.showDropDown = false;
                this.searchValue = "";
                this.valueOptions.map(t => {
                    t.show = false;
                });
            }
        },

        searchFilter(data) {
          // جستجو برای آیتم سرچ شده //
          // و در صورت پیدا کردن آیتم به صورت حالت انتخابی می شود //

            let filteredArray = this.valueOptions.filter((content, index) => {
                if (
                    content[this.label]
                        .toString()
                        .toLowerCase()
                        .indexOf(data.toString().toLowerCase()) >= 0
                ) {
                    content.show = false;
                } else {
                    content.show = true;
                }
            });

            // میزان اسکرول آیتم انتخاب شده //
            setTimeout(() => {
                const scrollTop = this.$refs.parentCombobox.scrollHeight;
                this.$refs.parentCombobox.scrollTop = scrollTop;
            });
        },

        //   ***************************⇓
        showOptionsDropDown() {
            let indexShowSelectOption = -1;
             // نمایش باکس دراپ دان //

            if (this.showDropDown) {
                this.showDropDown = false;
            } else {
                this.showDropDown = true;
            }

            this.$nextTick(() => {
              // پیدا کردن آیتم انتخاب شده //
                this.findSelectedOption++;
            });

        },

        selectOption(data) {
          //  آپدیت انتخاب یکی از آیتم های آپشن //
            this.showDropDown = false;
            this.searchValue  = "";

            this.valueOptions.map(t => {
                if (t[this.label] == data[this.label]) {
                    t.selected = true;
                    this.lastUpdateValue = t[this.label];
                    this.selectedOption  = t;
                } else {
                    t.selected = false;
                }
                t.show = false;
            });

        }
        //   ***************************⇑
    },

    created() {
        document.addEventListener("click", this.checkCloseDropDown);
    },

    destroyed() {
        document.removeEventListener("click", this.documentClick);
    },

    mounted() {
      // آپدیت مقدار پیش فرض Select box //
      this.lastUpdateValue = this.initialValue;

      if (this.options.length != 0) {
        this.valueOptions = this.options;
      }




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
        // flex-direction: row;
        // justify-content: space-between;
    }
    &-item {
        &__days,
        &__months,
        // &__years {
        //     @include display-flex();
        //     flex-direction: row;
        //     justify-content: space-between;
        //     font-family: inherit;
        //     border: 1px solid $input-border;
        //     box-shadow: 0px 4px 4px $gray-border;
        //     height: 52px;
        //     width: 91px;
        //
        //     border-radius: 15px;
        //     color: $gray;
        //     outline: none;
        //     /* */
        // }
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
/* ***************************⇓ */
.day-item {
    margin-right: -25%;
}
.p-birthday-select-box {
    @include display-flex();
    // position: relative;
    z-index: 0;
    width: 100%;
    color: $gray;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px $gray-border;
    border: 1px solid $input-border;
    padding: 0 5px;
    background: $white;
    height: 200px;
    overflow: auto;
    border-radius: 15px;
    position: absolute;
}
.birthday-item-selected {
    @include display-flex();
    position: relative;
}
.dropdown-active .p-birthday-select-box {
    display: flex !important;
    z-index: 5;
}
.dropdown-active {
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
    border-radius: 4px;
    background: $white;
    border: 1px solid $gray-border;
    color: $mid-dark_gray;
    /* font-size: 14px; */
    font-family: inherit;
    font-size: 1rem;
    line-height: 1.571;
    padding: 11px 12px;
    outline: none;
    /* margin: 5px; */
    margin-bottom: 5px;
    margin-top: 8px;
    max-width: 100%;
    max-height: 40px;
}
.p-birthday-select-box-overflow {
    overflow: auto;
    height: 145px;
}
/* .birthday-item-selected-arrow {
} */
.dropdown-active .birthday-item-selected-arrow {
    transform: rotate(178deg);
}
.birthday-item-icons {
    position: absolute;
    top: 0;
    left: -5px;
    height: 100%;
    align-items: center;
    display: flex;
}
.birthday-item-main {
    width: 100%;
    @include display-flex();
}
.dropdown-active .birthday-item__days {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom: none;
}

.birthday-item-content {
    width: 91px;
    position: relative;
}

/* .item-year {
  width: 190px;
} */

.item-year .birthday-item-content {
    width: 150px;
}
.item-year .birthday-item__days {
    width: 100%;
}
@media (max-width: 1220px) {
    .birthday-item-content,
    .item-day .birthday-item__days,
    .p-birthday-select-box {
        width: 74px;
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: 140px;
    }
    /*  */
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
    .p-birthday-select-box-search {
        font-size: 13px;
    }
    .birthday-item-content,
    .item-day .birthday-item__days,
    .p-birthday-select-box {
        width: 74px;
        font-size: 13px;
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: 120px;
        font-size: 13px;
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
    .birthday-item-content,
    .item-day .birthday-item__days,
    .p-birthday-select-box {
        width: 64px;
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: 110px;
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
@media (max-width: 280px) {
    .birthday-item-content,
    .item-day .birthday-item__days,
    .p-birthday-select-box {
        width: 60px;
    }
    .item-year .birthday-item-content,
    .item-year .p-birthday-select-box {
        width: 80px;
    }
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
