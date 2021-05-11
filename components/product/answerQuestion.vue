<template>
  <div class="tabs__content">
    <div class="tabs__content-data">
      <h3 class="tabs__content-title">پرسش پاسخ</h3>

      <div class="tabs__content-items">
        <div class="tabs__content-item">
          <div class="tab__content-wrapper w-100">
            <div class="tabs__content-right">
              <h3 class="tabs__content-text">ابعاد</h3>
              <span class="tabs__content-line"></span>
            </div>
            <div class="tabs__content-left">
              <h3 class="tabs__content-text">32*12*45</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  components: {},

  data() {
    return {};
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {
    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  @include display-flex();
  align-content: flex-start;
  flex-flow: column;
}
.tabs__main {
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  border-bottom: solid 1px $gray-border;
}
.tabs__item {
  margin-left: 70px;
  cursor: pointer;
}
.tabs__item-title {
  font-size: 18px;
  color: $gray;
  font-weight: 400;
}
.tab__main-wrapper {
  padding-right: 24px;
  padding-left: 24px;
}
.tab__main-wrapper {
  @include display-flex();
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
.tabs__item-line {
  width: 100%;
  height: 5px;
  background: $yellow;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @include display-flex();
  margin-top: 19px;
  visibility: hidden;
}
.tab--active .tabs__item-line {
  visibility: visible;
}
.tab--active .tabs__item-title {
  color: $black-topic;
}
.tabs__content {
  padding-top: 38px;
  visibility: hidden;
  position: absolute;
}
.tabs__content-title {
  font-size: 16px;
  font-weight: 400;
  color: $black-topic;
  height: 29px;
  margin-bottom: 16px;
}
.tabs__content-item {
  background: $white;
  height: 53px;
  padding-right: 18px;
  padding-left: 18px;
  background: rgb(242, 242, 242, 0.4);
  @include display-flex();
}
.tabs__content-item:nth-child(2n) {
  background: $white;
}
.tabs__content-right {
  width: 349px;
  position: relative;
}
.tabs__content-left {
  @include display-flex();
  flex-grow: 1;
  padding-right: 24px;
}
.tabs__content-data:nth-child(1) {
  padding-top: 0;
}
.tabs__content-data {
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 38px;
}
.tabs__content-data:last-of-type .tabs__content-items {
  border-bottom: none;
  padding-bottom: 0;
}
.tab__content-wrapper {
  @include display-flex();
}
.tabs__content-text {
  font-size: 16px;
  color: $color_discount;
  font-weight: 400;
  margin-top: 16px;
}
.tabs__content-line {
  @include display-flex();
  background: rgba(242, 242, 242, 0.4);
  position: absolute;
  left: 0;
  width: 1px;
  height: 100%;
  top: 0;
}
.tabs__content-items {
  padding-bottom: 38px;
  border-bottom: solid 2px rgba(242, 242, 242, 0.5);
  border-radius: 8px;
}
</style>
