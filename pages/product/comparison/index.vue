<template>
  <div class="page__wrapper w-100 d-rtl flex-column">
    <main-comparison :products="products" :detail-technical="detailTechnical">
    </main-comparison>
  </div>
</template>
<script>
import mainComparison from "~/components/Comparison/mainComparison.vue";
import addCamaPrice from "~/modules/addCamaPrice.js";
import products from "~/assets/productsComparison.json";
import productData from "~/modules/single_product_data.json";

const addCamaProduct = (products) => {
  return products.map((content) => {
    content.addCamaRealPrice = addCamaPrice(content.realPrice);
    content.addCamaDiscount = addCamaPrice(content.discount);
    return content;
  });
};

export default {
  layout: "removeMegaMenu",
  async asyncData({ params }) {
    const getProducts = products.response_value;
    const dataProduct = productData.response_value[0].values;

    const detailTechnicalData = () => {
      const detailTechnical =
        dataProduct.attribute_groups[0].group_attribute.comparisonProduct;
      return detailTechnical.map((content) => {
        for (const key in content) {
          return content[key];
        }
      });
    };

    return {
      products: addCamaProduct(getProducts),
      detailTechnical: detailTechnicalData(),
    };
  },
  components: {
    mainComparison,
  },

  data() {
    return {};
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {},
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
