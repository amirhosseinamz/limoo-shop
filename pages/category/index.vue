<template>
  <div class="page__wrapper w-100 d-rtl flex-column">
    <content-category
      :category="category"
      @active-cat-suggestion="activeCatSuggestion"
      @update-infinite-cat-mobile="updateInfiniteCatMobile"
    >
    </content-category>
  </div>
</template>
<script>
import contentCategory from "~/components/Category/contentCategory.vue";
import addCommaPrice from "~/modules/addCamaPrice.js";

export default {
  components: {
    contentCategory,
  },

  data() {
    return {

      category: [
        {
          id: 1,
          title: "لیمو",
        },
        {
          id: 2,
          title: "دسته کالاها",
        },
        {
          id: 3,
          title: "لوازم جانبی موبایل",
        },
      ],
      staticDataLanguage: {},
    };
  },
  computed: {
    checkboxData() {
      return this.$store.getters["category/category/checkboxData"];
    }
  },

  watch: {
    $route(data) {
      // last update route //
      // this.$router.push({ query: {id :10}})
    },

    // ارسال در خواست به سرور برای فیلتر کردن آپزشن های انتخابی //
    "$store.state.category.submitFliterModal"(submited) {
      if (submited) {
        this.submitData();
      }
    },

    "$store.state.category.submitSortModal"(submited) {
      if (submited) {
        this.submitDataSortModal();
      }
    },
  },

  created() {
    this.addCommaProduct();
  },

  mounted() {},

  methods: {
    addCommaProduct() {
      this.$store.dispatch("category/category/addCommaProduct");
      this.$store.dispatch("category/category/addCommaProductMobile");
    },

    activeCatSuggestion(data) {
    },

    updateInfiniteCatMobile(data) {
    },

    setDataModalFilter() {
      const addCheckedBrandFilter = () => {
        let nameObject = "";
        for (let key in this.checkBoxData) {
          const getAllCheckBox = this.checkBoxData[key];

          // پس از اتصال یه بک این قسمت باید مقدارش از سمت بک گرفته شود //
          // check default checkbox //

          getAllCheckBox.children.map((content) => {
            content.checked = content.id === 3;
          });

          // this.$store.state.category.submitDataFilterModal.lastUpdateCheckBox[key] = getAllCheckBox;
          this.$store.commit("category/updateStateFilterModal", {
            key: key,
            getAllCheckBox: getAllCheckBox,
          });
        }
      };

      addCheckedBrandFilter();
      // نام آبجکت ها پس از اتصال از بک گرفته شود //
    },

    submitData() {
      const getLastUpdate = this.$store.state.category.submitDataFilterModal;
    },

    setDataModalSort() {
      this.$store.dispatch("category/category/setDataModalSort");
      // this.$store.state.category.lastUpdateSortModal  = this.sortData;
      this.$store.commit("category/updateStateModals", {
        lastUpdateSortModal: this.sortData,
      });
    },

    submitDataSortModal() {
      const getLastUpdate = this.$store.state.category.lastUpdateSortModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-screen {
  display: none;
  direction: ltr;
}
.page__home-introduction-main {
  @include display-flex();
  align-items: flex-start;
}
.icon-location::after {
  content: "\e817";
  @include font-icon__limoo();
  font-size: 16px;
  margin-top: 1px;
  color: $color_festival;
}
.screen__holder-data {
  @include display-flex();
  justify-content: flex-end;
  padding-right: 18.5px;
  padding-left: 18.5px;
  align-items: center;
  height: 100%;
}
.page__wrapper {
  @include display-flex();
  align-items: flex-start;
  width: 1381px;
  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 1450px) {
  .page__wrapper {
    padding-right: 30px;
    padding-left: 30px;
    width: 100%;
  }
}

@media (max-width: 1220px) {
}

@media (max-width: 960px) {
  .desktop-screen {
    display: none;
  }
  .mobile-screen {
    display: block;
    &__holder {
      @include display-flex();
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      height: 33px;
      background: $white;
      margin-top: 47px;
      &-txt {
        font-size: 13px;
        line-height: 140.62%;
        margin-right: 6.5px;
        color: $black-topic;
      }
      &-arrow {
        margin-left: 16px;
      }
    }
  }
  .user-profile__holder {
    margin: 8px 0;
    padding: 0 5px;
  }
  .user-profile {
    &__topic {
      display: none;
    }
  }
  .mobile-screen__holder-arrow {
    display: none;
  }
}

@media (max-width: 600px) {
}

@media (max-width: 485px) {
  .page__wrapper {
    padding-right: 5px;
    padding-left: 5px;
  }
}

@media (max-width: 350px) {
}

@media (max-width: 320px) {
}
</style>
