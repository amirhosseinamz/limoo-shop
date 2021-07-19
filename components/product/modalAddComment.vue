<template>
  <modal
    id="add--comment"
    class="d-rtl "
    size="1083px"
    :show.sync="show"
    :footer="false"
  >
    <div class="w-100  product__modal">
      <div class="w-100 product__modal-text comment--mobile">
        <div class="w-100 product__modal-top">
          <h3 class="product__modal-title">
            >
            {{ getTextByTextKey("product_technical_specifications") }}
          </h3>
          <!-- <span class="product__modal-close"></span> -->
          <span @click="closeModal" class="product__modal-arrow"></span>

        </div>
        <span class="product__modal-line"></span>
      </div>

      <div class="comment--close__main comment--desktop">
        <base-button
          @button-clicked="closeModal"
          classes="comment__close"
          base-color="white"
          mode="close"></base-button>
      </div>

      <div class="w-100 comment__modal-container">
        <div class="w-100 comment--modal__top">
          <div class="comment__modal-rating">
            <h3 class="comment__rating-title">
              {{ getTextByTextKey("product_rating_title") }}
            </h3>
            <div class="comment__stars">
              <span
                :class="{ 'active--star': data.active }"
                @click="activeStr(data)"
                :key="data.id"
                v-for="data in commentStar"
                class="comment__star"
              ></span>
            </div>
          </div>

          <div class="comment--slider__main">
            <base-range-slider
              class="range-slider"
              selector-class="range-slider-dot"
              min-value="0"
              max-value="4"
              @range-changed="changeSliderRange"
              :value="valueRangeSlider"
            ></base-range-slider>
          </div>
        </div>

        <comment-form
          @submit-data="submitData"
          @close-modal="closeModal"
          :comments-data="commentsData"
          :value-renge-slider="valueRangeSlider"
          :comment-star="commentStar"
        ></comment-form>
      </div>
    </div>
  </modal>
</template>

<script>
import "~/assets/styles/_modal_add_comment.scss";
import "~/assets/styles/_slider_range_price.scss";
import commentForm from "./commentForm";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";
import textInput from "~/modules/textInput";

export default {
  props: {
    active: { type: [Boolean, Number], default: false },
    commentsData: { type: [Object, Array], default: {} },
  },

  components: {
    commentForm,
    textInput,
  },

  data() {
    return {
      commentStar: [
        {
          id: 1,
          active: true,
        },
        {
          id: 2,
          active: false,
        },
        {
          id: 3,
          active: false,
        },
        {
          id: 4,
          active: false,
        },
        {
          id: 5,
          active: false,
        },
      ],
      currentStarActive: {},
      valueRangeSlider: 0,
      dotSize: 35,
    };
  },

  computed: {
    show: {
      set(val) {
        this.$emit("update:active", !!val);
      },
      get() {
        return !!this.active;
      },
    },
  },

  mounted() {
    // this.activeDefaultRangeSlider();
    const width = window.innerWidth;

    if (760 >= width) {
      this.dotSize = 26;
    }

    this.detectedResizeBrowser();
  },

  watch: {
    show(status) {
      this.$store.commit("singleProduct/showHidenBodyScroll", status);
      if (!status) {
        // پاک کردن دیتا هایی که قبلا در مودال نوشته شده بود //
        this.valueRangeSlider = 1;
        this.commentStar.map((content) => {
          content.active = false;
        });
      }
    },
  },

  methods: {
    getTextByTextKey,

    closeModal() {
      this.show = false;
    },

    activeStr(data) {
      this.commentStar.map((content) => {
        content.active = data.id >= content.id;
      });
      this.activeDefaultRangeSlider();
    },

    changeSliderRange(currentRange) {
      const currentStarActive = {
        id: +currentRange + 1,
        active: false,
      };
      this.activeStr(currentStarActive);
    },

    activeDefaultRangeSlider() {
      // پیدا کردن مقدار پیشفرض ستاره ها //
      let findCountLastActiveStar = -1;
      this.commentStar.map((content) => {
        if (content.active) {
          findCountLastActiveStar = content.id;
        }
      });
      this.valueRangeSlider = findCountLastActiveStar - 1;
    },

    submitData(data) {
      this.$emit("submit-data", data);
    },

    detectedResizeBrowser() {
      window.addEventListener(
        "resize",
        () => {
          const width = window.innerWidth;

          if (760 >= width) {
            this.dotSize = 26;
          } else {
            this.dotSize = 35;
          }
        },
        true
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.comment__close::before {
  font-size: toRem(30);
  opacity: 0.5;
}
.comment--close__main {
  @include display-flex();
  justify-content: flex-end;
}
.comment--mobile {
  display: none;
}
.comment__rating-title {
  font-size: toRem(16);
  color: $color-price;
  font-weight: 400;
  margin-top: toRem(15);
  margin-bottom: toRem(43);
}
.comment__modal-rating {
  @include display-flex();
  justify-content: center;
}
.comment__star {
  @include display-flex();
  cursor: pointer;
}
.comment__star::before {
  content: "\e825";
  @include font-icon__limoo();
  font-weight: 400;
  font-size: toRem(31);
  color: $light-gray;
  letter-spacing: toRem(2);
}
.comment__modal-rating {
  width: 100%;
  flex-wrap: wrap;
  @include display-flex();
}
.comment__stars {
  width: 100%;
  @include display-flex();
  justify-content: space-between;
}
.active--star::before {
  color: #ffd35a;
}
.comment--modal__top {
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  width: toRem(372);
  flex-flow: column;
  margin: 0 auto;
}
.comment__modal-container {
  flex-wrap: wrap;
  @include display-flex();
  width: 100%;
  flex-flow: column;
  align-items: flex-start;
}
.comment--slider__main {
  width: 100%;
  margin-top: toRem(27);
}

.renge-circle {
  width: toRem(35);
  height: toRem(35);
  pointer-events: none;
}

// این قسمت به علت تکرار جدا شود  //
.product__modal-close::after {
  @include display-flex();
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(12);
}
.product__modal-close {
  width: toRem(30);
  height: toRem(30);
  cursor: pointer;
}
.product__modal-title {
  font-size: toRem(14);
  color: $black;
  font-weight: 400;
  flex-grow: 1;
  min-height: toRem(18);
  color: $black-topic;
}
.product__modal-top {
  @include display-flex();
  align-items: flex-start;
  padding: 0 toRem(16);
}
.product__modal-line {
  margin-bottom: toRem(15);
  margin-top: toRem(15);
}
.product__modal-line {
  background: $gray-border;
  width: 100%;
  height: toRem(1);
  @include display-flex();
}
.product__modal-text {
  align-items: center;
  flex-wrap: wrap;
}
.product__modal-arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(17);
  cursor: pointer;
  color: $gray;
}

@media (max-width: 1600px) {
  .comment__rating-title {
    margin-bottom: toRem(16);
  }
}

@media (max-width: 760px) {
  .comment--mobile {
    @include display-flex();
  }
  .comment--desktop {
    display: none;
  }
  .comment--modal__top {
    width: 74%;
  }
  .comment__rating-title {
    font-size: toRem(14);
    color: $gray;
    margin: toRem(24) 0;
  }
  .comment__star::before {
    font-size: toRem(21);
  }
  .comment__stars {
    justify-content: center;
  }
  .comment__star {
    margin-left: toRem(12);
  }
  .comment__star:last-of-type {
    margin-left: 0;
  }
  .comment--slider__main::v-deep {
    .range-slider {
      width: 100%;
      .range-slider-dot {
        width: toRem(19);
        height: toRem(19);
        box-shadow: 0 0 0 toRem(4.8) rgba(255, 204, 64, 0.3);
      }
    }

  }
  .product__modal-line {
    margin-bottom: 0;
  }
  .renge-circle {
    width: toRem(26);
    height: toRem(26);
  }
}
</style>
