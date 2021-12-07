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
      image: "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true
    },
    {
      id: 2,
      color: "yellow",
      name: "سبز",
      image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true
    },
    {
      id: 3,
      color: "orange",
      name: "بنفش",
      image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true
    },
    {
      id: 4,
      color: "blue",
      name: "آبی",
      image: "https://dkstatics-public.digikala.com/digikala-products/d48f70d64f989092aa9493a40ab90ae47e0667c4_1626014826.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: false
    },
    {
      id: 5,
      color: "green",
      name: "سبز",
      image: "https://dkstatics-public.digikala.com/digikala-products/3049dd8c073305e494f86d2959ac679febba7467_1624253960.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: false
    },
    {
      id: 6,
      color: "purple",
      name: "بنفش",
      image: "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true
    },
    {
      id: 7,
      color: "yellow",
      name: "زرد",
      image: "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },
    {
      id: 8,
      color: "green",
      name: "سبز لیمویی پسته ای",
      image: "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },
    {
      id: 9,
      color: "green",
      name: "سبز",
      image: "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },
    {
      id: 10,
      color: "red",
      name: "قرمز",
      image: "https://dkstatics-public.digikala.com/digikala-products/cbd437b5ba4a0c942ae8967fa3954da2fd30c54c_1626014199.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },

    {
      id: 11,
      color: "blue",
      name: "آبی دریایی",
      image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },
    {
      id: 12,
      color: "purple",
      name: "بنفش بادمجونی",
      image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },

    {
      id: 13,
      color: "red",
      name: "قرمز آلبالویی",
      image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },
    {
      id: 14,
      color: "yellow",
      name: "زرد پررنگ",
      image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

    },
    {
      id: 15,
      color: "green",
      name: "سبز لیمویی پسته ای",
      image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1609660142.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80",
      exist: true

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
      remaining: 3,
      rate: 3.5
    },
    {
      id: 2,
      name: "ماهان سنتر",
      sendingInfo: "آماده ارسال",
      warranty: "گارانتی 9 ماهه",
      price: "359,000,000",
      discountedPrice: "123,000,000",
      remaining: 2,
      rate: 4.5
    },
    {
      id: 3,
      name: "جینوس کالا",
      sendingInfo: "آماده ارسال",
      warranty: "گارانتی 9 ماهه",
      price: "415,000,000",
      discountedPrice: "123,000,000",
      remaining: 5,
      rate: 2.2
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
      let selectedItemIndex = payload.index + payload.firstPartLength;
      let selectedItem = state.colorsData[selectedItemIndex];
      state.colorsData.splice(selectedItemIndex, 1, state.colorsData[0]);
      state.colorsData.splice(0, 1, selectedItem);
      //debugger;
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
