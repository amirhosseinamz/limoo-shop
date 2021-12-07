<template>
  <div class="page-wrapper w-100 d-rtl flex-column">
    <div class="mobile-screen w-100">
      <div class="mobile-screen__holder">
        <div class="w-100 screen__holder-data">
          <span class="mobile-screen__holder-txt">آدرس های شما</span>
          <span class="icon-location"></span>
        </div>
      </div>
    </div>
    <contentSingleProduct
      :product-data="productData"
      :product-slider="productSlider"
      :product-detail-technical="detailTechnical"
      :product-slider-mobile="productSliderMobile"
      :comment-data="getComments"
      @active-item-slider-nav="activeItemSliderNav"
      @more-comment="moreComment"
      @more-comment-mobile="moreCommentMobile"
      @submit-data="submitData"
    ></contentSingleProduct>
  </div>
</template>
<script>
import contentSingleProduct from "~/components/product/contentSingleProduct.vue";
import productData from "~/modules/single_product_data.json";
// import TimeAgo from 'javascript-time-ago'
const moment = require("moment-jalaali");
moment.loadPersian({ usePersianDigits: true });
import timeSince from "~/plugins/calcTimeAgo.js";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

const getComments = (dataProduct) => {
  const comments = dataProduct.Comments;
  let limitedCommentData = [];

  comments.map((content, index) => {
    content.selected = false;
    content.showCircle = false;
    content.limitBodyText = "";

    // در صورتی که وضعیتی برای نمایش برای کاربر نبود زمان برای کاربر نمایش داده می شود //
    if (typeof content.confirmLeave == "undefined") {
      moment.loadPersian({ usePersianDigits: false });
      const getDateTimeEnglish = moment(content.Date, "YYYYMMDDHHmmss").format(
        "YYYY-MM-DDTHH:mm:ss"
      );
      const calcTimeAgo = timeSince(getDateTimeEnglish);
      const splitTime = calcTimeAgo.split(" ");
      content.dateConvert = calcTimeAgo;

      switch (splitTime[1]) {
        case "days":
          if (splitTime[0] < 7) {
            content.dateConvert = `${splitTime[0]} روز پیش`;
          } else {
            moment.loadPersian({ usePersianDigits: true });
            const convertTimeJalali = moment(
              content.Date,
              "YYYYMMDDHHmmss"
            ).format("jDD jMMMM jYYYY");
            content.dateConvert = convertTimeJalali;
          }
          break;
        case "day":
          content.dateConvert = `دیروز`;
          break;

        case "hours":
          content.dateConvert = `${splitTime[0]} ساعت پیش`;
          break;
      }
    } else {
      const convertTimeJalali = moment(content.Date, "YYYYMMDDHHmmss").format(
        "jDD jMMMM jYYYY"
      );
      content.dateConvert = convertTimeJalali;
    }
    // پس از اتصال به سرور این قسمت پاک شود //
    if (index < 3) {
      limitedCommentData = [...limitedCommentData, content];
    }
  });

  return limitedCommentData;
};

export default {
  async asyncData({ params }) {
    const dataProduct = productData.response_value[0].values;

    const detailTechnicalData = () => {
      const detailTechnical =
        dataProduct.attribute_groups[0].group_attribute.detailTechnical;
      return detailTechnical.map((content) => {
        for (const key in content) {
          return content[key];
        }
      });
    };

    return {
      detailTechnical: detailTechnicalData(),
      getComments: getComments(dataProduct),
    };
  },

  components: {
    contentSingleProduct,
  },

  data() {
    return {
      productData: [],

      productSlider: [
        {
          id: 1,
          image: "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 2,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 3,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 4,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/d48f70d64f989092aa9493a40ab90ae47e0667c4_1626014826.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 5,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/3049dd8c073305e494f86d2959ac679febba7467_1624253960.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 6,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/17b055a0f2eee543f3b25a1bd4ced02032278d23_1626014129.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 7,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/17b055a0f2eee543f3b25a1bd4ced02032278d23_1626014129.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 8,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/6f24e6893b9a16143533c323b024c6a021b507aa_1626014891.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 9,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 10,
          image:
            "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
        },
        {
          id: 11,
          image:
            "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
        },
        {
          id: 12,
          image:
            "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
        },
        {
          id: 13,
          image:
            "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
        },
        {
          id: 14,
          image:
            "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
        },
        {
          id: 15,
          image:
            "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
        },
        {
          id: 16,
          image:
            "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
        },
      ],

      productSliderMobile: [
        {
          id: 1,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/3049dd8c073305e494f86d2959ac679febba7467_1624253960.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 2,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
        {
          id: 3,
          image:
            "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
        },
      ],

      pageMoreComment: 1,

    };
  },

  computed: {
    radioBtnData () {
      return this.$store.getters["product/single/single/radioBtnData"]
    }
  },
  mounted() {
    this.productData = productData;
    this.checkAddCircleComment();
    this.detectedResizeBrowser();
  },

  methods: {
    getTextByTextKey,
    activeItemSliderNav(data) {
      let updateSlider = [];
      this.productSlider.map((content, index) => {

        content.active = content.id === data.id;
        updateSlider = [...updateSlider, content];
      });

      this.productSlider = updateSlider;
    },

    moreComment(page) {
      // request server get comments //
    },

    moreCommentMobile() {
      this.pageMoreComment++;
      // پس از دریافت رسپانس مقدار صفحه اضافه شود //
      // در صورت مواجه شدن با ارور مقدار مورد نظر اضافه نشود //

      const newComment = {
        Date: "20210406051422",
        Firstname: "محمد ",
        Lastname: "احمدی",
        Title: "آیفون بی نظیر ",
        Body:
          "یه گوشی فوق العاده عالی اپل جواب خودش رو پس داده گوشی خیلی خوب و روونیه بخاطر پردازنده قویش کلا اپل فوق العادست تنها ایرادش باتریشه که روزی یک و نیم بار تقریبا باید شارژ بشه",
        Rate: 3.2,
        Suggest: 1,
        id: this.pageMoreComment * 2,
        selected: false,
      };

      this.getComments = [...this.getComments, newComment];
    },

    checkAddCircleComment() {
      const getWindowWidth = window.innerWidth;

      const concatStrCommentBody = (data, countConcat) => {
        let concatStr = "";
        data.map((contentOneByOne, indexOneByOne) => {
          if (indexOneByOne <= countConcat) {
            concatStr += contentOneByOne;
          }
        });
        return concatStr;
      };

      this.getComments.map((content, index) => {
        const body = content.Body;
        const lenTextBody = body.length;

        const splitTextBody = body.split("");
        const countSplitText = splitTextBody.length;

        content.showCircle = false;
        content.limitBodyText = "";

        if (1220 < getWindowWidth) {
          if (lenTextBody >= 580) {
            content.showCircle = true;
            // content.limitBodyText  = concatStrCommentBody(splitTextBody,580)
          }
        }

        if (600 < getWindowWidth) {
          if (1220 >= getWindowWidth) {
            if (lenTextBody >= 400) {
              content.showCircle = true;
              // content.limitBodyText  = concatStrCommentBody(splitTextBody,400)
            }
          }
        }

        if (600 >= getWindowWidth) {
          if (lenTextBody >= 200) {
            content.showCircle = true;
            // content.limitBodyText  = concatStrCommentBody(splitTextBody,200)
          }
        }
      });
    },

    detectedResizeBrowser() {
      window.addEventListener(
        "resize",
        () => {
          this.checkAddCircleComment();
        },
        true
      );
    },

    submitData(data) {
      data.id = 10;
      this.getComments = [...this.getComments, data];

      const comments = {
        Comments: this.getComments,
      };

      getComments(comments);

      // در صورت نداشتن ارور مقدار مورد نظر ذر صدا زده می شود //
      // و باعث بسته شدن مودال می شود //
      this.$store.dispatch('product/single/single/increaseCloseModalAddComment')
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-screen {
  display: none;
  direction: ltr;
}
.profile-container {
  margin: 0 auto;
  width: 100%;
  max-width: toRem(1920);
  min-height: 100vh;
  display: flex;
  flex-direction: row-reverse;
}
.page__home-introduction-main {
  @include display-flex();
  align-items: flex-start;
}
.page-wrapper {
  @include display-flex();
  align-items: flex-start;
  padding-right: toRem(26);
  padding-left: toRem(26);
  width: 100%;
}
.icon-location::after {
  content: "\e817";
  @include font-icon__limoo();
  font-size: toRem(16);
  margin-top: toRem(1);
  color: $color_festival;
}
.screen__holder-data {
  @include display-flex();
  justify-content: flex-end;
  padding-right: toRem(18.5);
  padding-left: toRem(18.5);
  align-items: center;
  height: 100%;
}

@include md {
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
      height: toRem(33);
      background: $white;
      margin-top: toRem(47);
      &-txt {
        font-size: toRem(13);
        line-height: 140.62%;
        margin-right: toRem(6.5);
        color: $black-topic;
      }
      &-arrow {
        margin-left: toRem(16);
      }
    }
  }
  .profile-container {
    @include display-flex();
    flex-direction: column;
    margin-bottom: toRem(58);
  }
  .user-profile__holder {
    margin: toRem(8) 0;
    padding: 0 toRem(5);
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

@include xs {
  .page-wrapper {
    padding-right: toRem(11);
    padding-left: toRem(11);
  }
}

</style>
