<template>
    <base-tabs
      :tabs="tabsNames"
      :selected="selected"
      @change-tab="tabChanged"
      class="w-100"
      tabs-item-class="tabs__item tabs__item-title"
      tabs-class="tabs-navigator tabs__main"
    >
      <tab-content :name="tabsNames[0]" :isSelected="selected === tabsNames[0]">
        <comment-user
          :comments-data="commentData"
          @more-comment="moreComment"
          @more-comment-mobile="moreCommentMobile"
          @submit-data="submitData"
        ></comment-user>
      </tab-content>

      <tab-content :name="tabsNames[1]" :isSelected="selected === tabsNames[1]">
        <answer-question
          :product-data="productData"
        ></answer-question>
      </tab-content>
    </base-tabs>
</template>
<script>
import commentUser from "./commentUser";
import answerQuestion from "./answerQuestion";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    productData: { type: [Object, Array], default: [] },
    commentData: { type: [Object, Array], default: [] },
  },

  components: {
    commentUser,
    answerQuestion,
  },

  data() {
    return {
      currentTab: "commentUser",
      tabsNames: ['نظر مشتریان محصول', 'پرسش و پاسخ'],
      selected: 'نظر مشتریان محصول'
    };
  },

  methods: {
    getTextByTextKey,
    tabChanged (val) {
      this.selected = val
    },

    moreComment(page) {
      this.$emit("more-comment", page);
    },

    moreCommentMobile() {
      this.$emit("more-comment-mobile");
    },

    submitData(data) {
      this.$emit("submit-data", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs__main {
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  // border-bottom:solid 1px $gray-border;
  box-shadow: 0 toRem(8) toRem(16) rgba(17, 17, 17, 0.03);
  border: none;
}
.tabs__item {
  margin-left: toRem(70);
}
.tabs__item:last-of-type {
  margin-left: 0;
}
.tabs__item-title {
  font-size: toRem(18);
}
.tab__main-wrapper {
  padding-right: toRem(24);
  padding-left: toRem(24);
}
.tab__main-wrapper {
  @include display-flex();
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
.tabs__item-line {
  width: 100%;
  height: toRem(5);
  background: $yellow;
  border-top-left-radius: toRem(20);
  border-top-right-radius: toRem(20);
  @include display-flex();
  margin-top: toRem(19);
  visibility: hidden;
}
.tab--active .tabs__item-title {
  color: $black-topic;
}
.show--tab {
  visibility: visible;
  position: static;
}
.tab--mobile {
  display: none;
}

@media (max-width: 760px) {
  .tabs__item-title {
    font-size: toRem(14);
  }
  .tab__main-wrapper {
    padding-top: toRem(14);
    padding-right: toRem(16);
    padding-left: toRem(16);
  }
  .tabs__item-line {
    margin-top: toRem(18);
    height: toRem(4);
  }
  .tab--desktop {
    display: none;
  }
  .tab--mobile {
    @include display-flex();
  }
}

@media (max-width: 285px) {
  .tabs__item {
    margin-left: toRem(60);
  }
}
</style>
