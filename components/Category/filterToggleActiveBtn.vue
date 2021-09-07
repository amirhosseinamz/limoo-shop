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
  font-size: toRem(16);
  color: $dark_gray;
  font-weight: 300;
}
.tools--title {
  font-size: toRem(16);
}
.modal-filter__line {
  height: toRem(1);
  width: 100%;
  @include display-flex();
  margin-top: toRem(20);
  margin-bottom: toRem(18);
  background: $flash_white;
}

@include xs {
  .modal-filter__item {
    align-items: flex-start;
  }
  .tools--title {
    font-size: toRem(14);
    margin-top: toRem(1);
  }
  .modal-filter__line {
    margin-top: toRem(18);
    margin-bottom: toRem(18);
  }
}
</style>
