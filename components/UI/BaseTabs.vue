<template>
  <div class="tabs-container">
    <div class="tabs-item col">
      تب اول
    </div>
    <div class="tabs-item">
      تب دوم
    </div>
    <div class="tabs-item">
      تب سوم
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTabs",
};
</script>

<style lang="scss" scoped>
.tabs-container {
  width: 100%;
  height: 50px;
  font-size: 1.125rem;
  display: flex;
  align-items: center;

  .tabs-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $gray-3;
    height: 100%;
    width: auto;
  }
}
</style>
