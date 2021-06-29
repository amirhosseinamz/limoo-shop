<template>
  <div class="w-100  modal-filter__filter-btn">
    <div class="w-100 modal-filter__item ">
      <h3 class="modal-filter__item-title tools--title">
        {{ getTextByTextKey("category_available_product") }}
      </h3>
      <base-toggle class="modal-filter__btn"></base-toggle>
      <span class="modal-filter__line"></span>
    </div>

    <div class="w-100 modal-filter__item ">
      <h3 class="modal-filter__item-title tools--title">
        {{ getTextByTextKey("category_free_delivery") }}
      </h3>
      <base-toggle class="modal-filter__btn"></base-toggle>
      <span class="modal-filter__line"></span>
    </div>

    <div class="w-100 modal-filter__item ">
      <h3 class="modal-filter__item-title tools--title">
        {{ getTextByTextKey("category_ready") }}
      </h3>
      <base-toggle class="modal-filter__btn"></base-toggle>
      <span class="modal-filter__line"></span>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {},

  components: {},

  data() {
    return {};
  },

  watch: {},

  mounted() {},

  methods: {
    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>
.modal-filter__item {
  width: 100%;
  @include display-flex();
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.modal-filter__item-title {
  font-size: 16px;
  color: $dark_gray;
  font-weight: 300;
}
.tools--title {
  font-size: 16px;
}
.modal-filter__line {
  height: 1px;
  width: 100%;
  @include display-flex();
  margin-top: 20px;
  margin-bottom: 18px;
  background: $flash_white;
}

@media (max-width: 485px) {
  .modal-filter__item {
    align-items: flex-start;
  }
  .tools--title {
    font-size: 14px;
    margin-top: 1px;
  }
  .modal-filter__line {
    margin-top: 18px;
    margin-bottom: 18px;
  }
}
</style>
