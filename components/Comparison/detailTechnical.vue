<template>
  <div class="w-100 detail_technical">
    <div
      v-for="(data, indexParent) in detailTechnical"
      :key="indexParent"
      class="tabs__content-data"
    >
      <h3 class="tabs__content-title">{{ data.label }}</h3>

      <div class="tabs__content-items">
        <div
          v-for="(childContent, indexChild) in data.data"
          :key="childContent.id"
          class="tabs__content-item"
        >
          <div
            v-for="(detail, index) in childContent.detail"
            :key="index"
            class="tab__content-wrapper w-100"
          >
            <div v-if="index == 0" class="tabs__content-right">
              <h3 class="tabs__content-text">{{ childContent.Label }}</h3>
              <span class="tabs__content-line"></span>
            </div>

            <div class="tabs__content-right">
              <h3 class="tabs__content-text">
                {{ detail.AttributeValue }}
              </h3>
              <span class="tabs__content-line"></span>
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
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    detailTechnical: { type: [Object, Array], default: [] },
  },

  components: {},

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
.detail_technical {
  padding-top: 24px;
}
</style>
