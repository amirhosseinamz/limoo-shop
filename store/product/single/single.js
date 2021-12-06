import { getTextByTextKey } from "../../../modules/splitPartJsonResource";

const state = () => ({
  productSlider: [
    {
      id: 1,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/picTest1.jpg",
    },
    {
      id: 2,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/new-baner-web4.jpg",
    },
    {
      id: 3,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/bahare web.jpg",
    },
    {
      id: 4,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/picTest1.jpg",
    },
    {
      id: 5,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/apple-watch-series-6-gps-cellurar2%20.png",
    },
    {
      id: 6,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
    },
    {
      id: 7,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
    },
    {
      id: 8,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
    },
    {
      id: 9,
      image:
        "https://statics-develop.diver.ir/1/fill/512/512/sm/true/plain/s3://limoo/product/single_pic_slider.jpg",
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
  commentsData: [
    {
      id: 1,
      commentTitle: "این سری از اپل واچ از سری قبلش خیلی بهتر شده!",
      state: "accepted",
      idea: "good",
      productTitle: "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی1",
      img: "/img/apple-watch-1.png",
      description:
        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",
      commentTime: "1 ساعت پیش",
      rate: 4.5,

      Date: "20210406051422",
      Firstname: "محمد ",
      Lastname: "احمدی",
      Title: "آیفون بی نظیر ",
      Body:
        "یه گوشی فوق العاده عالی اپل جواب خودش رو پس داده گوشی خیلی خوب و روونیه بخاطر پردازنده قویش کلا اپل فوق العادست تنها ایرادش باتریشه که روزی یک و نیم بار تقریبا باید شارژ بشه",
      Rate: 3.2,
      Suggest: 1,
    },
    {
      id: 2,
      commentTitle: "واقعا نمیدونم چرا ایده جدید ندارن روی این محصول!",
      state: "acceptting",
      idea: "bad",
      productTitle: "اپل واچ سری 6 آتومینیوم آبی بند اسپرت سیلیکون آبی2",
      img: "/img/apple-watch-2.png",
      description:
        "این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت، حتما این کالارو خریداری کنید! این کالا به شدت قوی و با کیفیت هست و پیشنهاد میکنم در این رنج قیمت حتما این کالا رو خریداری کنید.",
      commentTime: "1 روز پیش",
      rate: 3.6,

      Date: "20210406051422",
      Firstname: "مهدی",
      Lastname: "دادور",
      Title: "آیفون بی نظیر ",
      Body:
        "یه گوشی فوق العاده عالی اپل جواب خودش رو پس داده گوشی خیلی خوب و روونیه بخاطر پردازنده قویش کلا اپل فوق العادست تنها ایرادش باتریشه که روزی یک و نیم بار تقریبا باید شارژ بشه",
      Rate: 3.2,
      Suggest: 1,
    },
  ],
  radioBtnData: [
    {
      id: 1,
      title: "پیشنهاد می کنم",
      checked: true,
      value: 1,
    },
    {
      id: 2,
      title: "پیشنهاد نمی کنم",
      checked: false,
      value: 2,
    },
    {
      id: 3,
      title: "نظری ندارم",
      checked: false,
      value: 3,
    },
  ],
  closeModalAddComment: 0,
  colorsData: [
    {
      id: 1,
      color: "red",
      name: "قرمز",
    },
    {
      id: 2,
      color: "green",
      name: "سبز",
    },
    {
      id: 3,
      color: "purple",
      name: "بنفش",
    },
    {
      id: 4,
      color: "blue",
      name: "آبی",
    },
    {
      id: 5,
      color: "green",
      name: "سبز",
    },
    {
      id: 6,
      color: "purple",
      name: "بنفش",
    },
    {
      id: 7,
      color: "yellow",
      name: "زرد",
    },
    {
      id: 12,
      color: "green",
      name: "سبز لیمویی پسته ای",
    },
    {
      id: 8,
      color: "green",
      name: "سبز",
    },
    {
      id: 9,
      color: "red",
      name: "قرمز",
    },

    {
      id: 10,
      color: "blue",
      name: "آبی دریایی",
    },
    {
      id: 11,
      color: "purple",
      name: "بنفش بادمجونی",
    },

    {
      id: 13,
      color: "red",
      name: "قرمز آلبالویی",
    },
    {
      id: 14,
      color: "yellow",
      name: "زرد پررنگ",
    },
    {
      id: 15,
      color: "green",
      name: "سبز لیمویی پسته ای",
    },
    {
      id: 16,
      color: "red",
      name: "قرمز آلبالویی",
    },
  ],
  warrantyData: [
    {
      id: 1,
      name: "18 ماه گارانتی شرکت مجاز مشترک",
    },
    {
      id: 2,
      name: "9 ماه گارانتی شرکتی",
    },
  ],
  sellersData: [
    {
      id: 1,
      name: "اپل ان ای سی",
      sendingInfo: "آماده ارسال",
      warranty: "گارانتی 18 ماهه",
      price: "478,000,000",
      discountedPrice: "123,000,000",
      remaining: 3
    },
    {
      id: 2,
      name: "ماهان سنتر",
      sendingInfo: "آماده ارسال",
      warranty: "گارانتی 9 ماهه",
      price: "359,000,000",
      discountedPrice: "123,000,000",
      remaining: 2
    },
    {
      id: 3,
      name: "جینوس کالا",
      sendingInfo: "آماده ارسال",
      warranty: "گارانتی 9 ماهه",
      price: "415,000,000",
      discountedPrice: "123,000,000",
      remaining: 5
    },
  ],

})
const getters = {
  productSlider(state) {
    return state.productSlider;
  },
  commentsData(state) {
    return state.commentsData;
  },
  radioBtnData (state) {
    return state.radioBtnData
  },
  closeModalAddComment(state) {
    return state.closeModalAddComment;
  },
  colorsData(state) {
    return state.colorsData;
  },
  warrantyData(state) {
    return state.warrantyData;
  },
  sellersData(state) {
    return state.sellersData;
  },

}
const mutations = {
  increaseCloseModalAddComment (state) {
    state.closeModalAddComment++
  },
  changeRadioBtnDataActivation (state, payload) {
    const theItem = state.radioBtnData.find(item => item.id === payload)
    theItem.checked = !!theItem;
  },
  changeColorArrayElements(state, payload) {
      let selectedItemIndex = payload;
      let selectedItem = state.colorsData[selectedItemIndex];
      state.colorsData.splice(selectedItemIndex, 1, state.colorsData[0]);
      state.colorsData.splice(0, 1, selectedItem);
  },

}
const actions = {
  increaseCloseModalAddComment (context) {
    context.commit('increaseCloseModalAddComment')
  },
  changeRadioBtnData (context, payload) {
    const theItem = context.getters.radioBtnData
    if (theItem.id === 1) {
      theItem.title = getTextByTextKey("product_customer_feedback")
      theItem.mobileTitle = getTextByTextKey("product_comment_mobile_title")
    } else if (theItem.id === 2) {
      theItem.title = getTextByTextKey("product_question_answer")
      theItem.mobileTitle = getTextByTextKey("product_question_answer")
    }

  },
  changeRadioBtnDataActivation (context, payload) {
    context.commit('changeRadioBtnDataActivation', payload)
  },
  changeColorArrayElements(context, payload) {
    context.commit('changeColorArrayElements', payload);
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
