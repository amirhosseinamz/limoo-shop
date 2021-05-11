<template>
  <div class="tabs__content">
    <div class="w-100">
      <div
        v-for="(data, indexParent) in productData"
        :key="indexParent"
        class="tabs__content-data"
      >
        <h3 class="tabs__content-title">{{ data.label }}</h3>

        <div class="tabs__content-items">
          <div
            v-for="childContent in data.data"
            :key="childContent.id"
            class="tabs__content-item"
          >
            <div class="tab__content-wrapper w-100">
              <div class="tabs__content-right">
                <h3 class="tabs__content-text">{{ childContent.Label }}</h3>
                <span class="tabs__content-line"></span>
              </div>
              <div class="tabs__content-left">
                <h3 class="tabs__content-text">
                  {{ childContent.AttributeValue }}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div class="tab__more-main">
          <div @click="eventShowModalDetailTechnical" class="tab__more" to="/">
            {{ getTextByTextKey("home_blog_all") }}
            <span class="tab__more-icon mobile--arrow"></span>
          </div>
        </div>
      </div>
    </div>

    <modal-detail-technical
      :active.sync="showModalDetail"
      :product-data="productData"
    ></modal-detail-technical>
  </div>
</template>
<script>
import modalDetailTechnical from "./modalDetailTechnical";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    productData: { type: [Object, Array], default: [] },
  },

  components: {
    modalDetailTechnical,
  },

  data() {
    return {
      showModalDetail: false,
    };
  },

  watch: {},

  created() {},

  mounted() {
    // بسته شدن مودال در سایز های تبلت //
    const width = window.innerWidth;
    if (760 < width) {
      this.showModalDetail = false;
    }

    this.detectedResizeBrowser();
  },

  methods: {
    getTextByTextKey,
    eventShowModalDetailTechnical() {
      this.showModalDetail = true;
    },

    detectedResizeBrowser() {
      window.addEventListener(
        "resize",
        () => {
          const width = window.innerWidth;
          if (760 < width) {
            this.showModalDetail = false;
          } else {
          }
        },
        true
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/detailTechnical.scss";
</style>
