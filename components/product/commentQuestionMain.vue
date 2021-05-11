<template>
  <div class="tabs w-100">
    <div class="tabs__main">
      <div class="tab__main-wrapper">
        <div
          :class="{ 'tab--active': data.active }"
          @click="activeTab(data)"
          v-for="data in productTab"
          :key="data.id"
          class="tabs__item"
        >
          <h3 class="tabs__item-title tab--desktop">{{ data.title }}</h3>
          <h3 class="tabs__item-title tab--mobile">{{ data.titleMobile }}</h3>
          <span class="tabs__item-line"></span>
        </div>
      </div>
    </div>

    <div class="w-100 ">
      <comment-user
        :class="{ 'show--tab': currentTab == 'commentUser' }"
        :comments-data="commentData"
        :radio-btn-data="radioBtnData"
        :close-modal-add-comment="closeModalAddComment"
        @more-comment="moreComment"
        @more-comment-mobile="moreCommentMobile"
        @submit-data="submitData"
      ></comment-user>
      <answer-question
        :class="{ 'show--tab': currentTab == 'answerQuestion' }"
        :product-data="productData"
      ></answer-question>
    </div>
  </div>
</template>
<script>
import commentUser from "./commentUser";
import answerQuestion from "./answerQuestion";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
    productTab: { type: [Object, Array], default: [] },
    productData: { type: [Object, Array], default: [] },
    commentData: { type: [Object, Array], default: [] },
    radioBtnData: { type: [Object, Array], default: [] },
    closeModalAddComment: { type: Number, default: 0 },
  },

  components: {
    commentUser,
    answerQuestion,
  },

  data() {
    return {
      currentTab: "commentUser",
    };
  },

  watch: {},

  created() {},

  mounted() {
    this.activeTab({ id: 1, active: false });
  },

  methods: {
    getTextByTextKey,

    activeTab(data) {
      this.productTab.map((content) => {
        content.active = false;
        if (content.id == data.id) {
          content.active = true;

          if (content.id == 1) {
            this.currentTab = "commentUser";
          }

          if (content.id == 2) {
            this.currentTab = "answerQuestion";
          }
        }
      });
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

    setDefaultResponseCodeRadioBtn() {
      this.productTab.map((content) => {
        if (content.id == 1) {
          content.title = this.getTextByTextKey(
            "product_full_product_introduction"
          );
        }

        if (content.id == 2) {
          content.title = this.getTextByTextKey("product_technical");
        }
      });
    },
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
  // border-bottom:solid 1px $gray-border;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
  border: none;
}
.tabs__item {
  margin-left: 70px;
  cursor: pointer;
}
.tabs__item:last-of-type {
  margin-left: 0;
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
.show--tab {
  visibility: visible;
  position: static;
}
.tab--mobile {
  display: none;
}

@media (max-width: 760px) {
  .tabs__item-title {
    font-size: 14px;
  }
  .tab__main-wrapper {
    padding-top: 14px;
    padding-right: 16px;
    padding-left: 16px;
  }
  .tabs__item-line {
    margin-top: 18px;
    height: 4px;
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
    margin-left: 60px;
  }
}
</style>
