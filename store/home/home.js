import addCommaPrice from "../../modules/addCamaPrice";

const state = () => ({
  products: [
    {
      id: 1,
      title: "حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت",
      discount: "10000",
      realPrice: "50000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 2,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 3,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "625000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 4,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 5,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "70000",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 6,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
  ],
  allCategory: [
    {
      id: 1,
      title: "موبایل و تبلت",
      count: "بیش از 220 هزار کالا",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 2,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/pic_cat_.svg",
    },
    {
      id: 3,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/cat_pic2.svg",
    },
    {
      id: 4,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/pic_cat3.svg",
    },
    // {
    //   id    : 5,
    //   title : 'دیتا تستی',
    //   count : 'بیش از 200 هزار کالا',
    //   image : '/img/2126986.jpg',
    // },
    {
      id: 6,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/cat_pic2.svg",
    },
    {
      id: 7,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/pic_cat_4.svg",
    },
    {
      id: 8,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/cat_pic2.svg",
    },

  ],
  allProductVertical: [
    {
      id: 1,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
      discount: "20000",
    },
    {
      id: 2,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "10",
      image: "/img/sony_pic_1.svg",
      discount: "6000",
    },
    {
      id: 3,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "5",
      image: "/img/sony_pic_3.svg",
      discount: "30",
    },
    {
      id: 4,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "20",
      image: "/img/sony_pic_1.svg",
      discount: "30",
    },
    {
      id: 5,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "10",
      image: "/img/sony_pic_1.svg",
      discount: "30",
    },
    {
      id: 6,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
      discount: "30",
    },
    {
      id: 7,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
      discount: "30",
    },
    {
      id: 8,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
      discount: "36000",
    },

  ],
  allBrand: [
    {
      id: 1,
      title: "موبایل و تبلت",
      count: "بیش از 220 هزار کالا",
      image: "/img/brand_huawei.svg",
      href: "https://www.digikala.com/",
    },
    {
      id: 2,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/brand-icon-img1.svg",
      href: "https://www.huawei.com/en/",
    },
    {
      id: 3,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/brand_huawei.svg",
      href: "https://www.huawei.com/en/",
    },
    {
      id: 4,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/brand-icon-img1.svg",
      href: "https://www.huawei.com/en/",
    },
    {
      id: 6,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/brand_huawei.svg",
      href: "https://www.huawei.com/en/",
    },
    {
      id: 7,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/brand-icon-img1.svg",
      href: "https://www.huawei.com/en/",
    },
    {
      id: 8,
      title: "دیتا تستی",
      count: "بیش از 200 هزار کالا",
      image: "/img/brand_huawei.svg",
      href: "https://www.huawei.com/en/",
    },

  ],
  allProductMultiVertical: [
    {
      id: 1,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
      discount: "",
      precentDiscount: "30",
    },
    {
      id: 2,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_3.svg",
      discount: "15000",
      precentDiscount: "30",
    },
    {
      id: 3,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
      discount: "45000",
      precentDiscount: "60",
    },
    {
      id: 4,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
      discount: "",
      precentDiscount: "50",
    },

  ],
  brandIntroduction: [
    {
      id: 1,
      title: "تضمین کیفیت",
      image: "/icons/Guarantee.svg",
      nameClass: "guarantee1",
    },
    {
      id: 2,
      title: "ارسال فوری",
      image: "/icons/startup1.svg",
      nameClass: "startup",
    },
    {
      id: 3,
      title: "پشتیبانی 24 ساعته",
      image: "/icons/telemarketer1.svg",
      nameClass: "telemarketer",
    },
    {
      id: 4,
      title: "7 روز ضمانت ",
      image: "/icons/guarantee1.svg",
      nameClass: "guarantee7",
    },

  ],
  allQuestion: [
    {
      id: 111,
      title: "آیا می توانم از کیف پول برای خرید استفاده کنم?",
      active: false,
    },
    {
      id: 2,
      title: "اگر از خرید ناراضی بودم قابلیت مرجوعی وجود دارد؟",
      active: false,
    },
    {
      id: 3,
      title: "اگر از خرید ناراضی بودم قابلیت مرجوعی وجود دارد؟",
      active: false,
    },
    {
      id: 4,
      title: "اگر از خرید ناراضی بودم قابلیت مرجوعی وجود دارد؟",
      active: false,
    },
  ],
  allBlogProduct: [
    {
      id: 1,
      title: "حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت",
      discount: "10000",
      realPrice: "50000",
      image: "/img/picPhone2.svg",
      description: `لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات 11`,
    },
    {
      id: 2,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "/img/picWatch.svg",
      description: `
              لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد کهssfdsfdsfddfasffdsfsdfd
              لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد کهssfdsfdsfddfasffdsfsdfd
              `,
    },
    {
      id: 3,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "625000",
      image: "/img/pic_phone_3.svg",
      description: "لحظاتی بیش اپل با رونمایی از لبتاپ سری                 آلومینیوم با بند اسپرت نسل جدید تحولی عظیم     برای تولیدات قطعات ام وان ایجاد کرد که",
    },
    {
      id: 4,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/pic_phone_4.svg",
      description: "لحظاتی بیش اپل با رونمایی از لبتاپ سری                 آلومینیوم با بند اسپرت نسل جدید تحولی عظیم     برای تولیدات قطعات ام وان ایجاد کرد که",

    },
    {
      id: 5,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "70000",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
      description: "dasdasdas M A",

    },
    {
      id: 6,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
      description: `لحظاتی بیش اپل با رونمایی از لبتاپ سری آلومینیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد که`,

    },
  ],
  introductionProduct: [
    {
      id: 1,
      title: "حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت",
      discount: "10000",
      realPrice: "50000",
      image: "https://statics-develop.diver.ir/1/fill/915/460/sm/true/plain/s3://limoo/product/picTest1.jpg",
    },
    {
      id: 2,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "https://statics-develop.diver.ir/1/fill/915/460/sm/true/plain/s3://limoo/product/apple-watch-series-6-gps-cellurar2%20.png",
    },
    // {
    //   id        : 3,
    //   title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
    //   discount  : '',
    //   realPrice : '625000',
    //   image     : '/img/apple-watch-series-4-hermes-double1.svg',
    // },
    // {
    //   id        : 4,
    //   title     : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
    //   discount  : '',
    //   realPrice : '120000',
    //   image     : '/img/apple-watch-series-4-hermes-double1.svg',
    // },
  ],
  allProductVerticalDescription  : [
    {
      id               : 1,
      title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
      realPrice        : '50000',
      image            : '/img/sony_pic_1.svg',
      discount         : '',
      precentDiscount  : '30',
      description      :  'مهدی تستی تستی ',
    },
    {
      id               : 2,
      title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
      realPrice        : '50000',
      image            : '/img/sony_pic_3.svg',
      discount         : '15000',
      precentDiscount  : '30',
      description      : ' لحضاتی پیش اپل با رونمایی از لبتاب سری آلمنیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد که',
    },
    {
      id               : 3,
      title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
      realPrice        : '50000',
      image            : '/img/sony_pic_1.svg',
      discount         : '45000',
      precentDiscount  : '60',
      description      : ' لحضاتی پیش اپل با رونمایی از لبتاب سری آلمنیوم با بند اسپرت نسل جدید تحولی عظیم برای تولیدات قطعات ام وان ایجاد کرد که',
    },
    {
      id               : 4,
      title            : 'اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44',
      realPrice        : '50000',
      image            : '/img/sony_pic_1.svg',
      discount         : '',
      precentDiscount  : '50',
      description      :  'dsadasیشخیخشسنسیشمینشسمنیسمشنیسشمنیمنسشمین',
    },

  ],


});
const getters = {
  products(state) {
    return state.products;
  },
  allCategory(state) {
    return state.allCategory;
  },
  allProductVertical(state) {
    return state.allProductVertical;
  },
  allBrand(state) {
    return state.allBrand;
  },
  allProductMultiVertical(state) {
    return state.allProductMultiVertical;
  },
  brandIntroduction(state) {
    return state.brandIntroduction;
  },
  allQuestion(state) {
    return state.allQuestion;
  },
  allBlogProduct(state) {
    return state.allBlogProduct;
  },
  introductionProduct(state) {
    return state.introductionProduct;
  },
  allProductVerticalDescription(state) {
    return state.allProductVerticalDescription;
  }
};
const mutations = {
  addCommaProduct(state, payload) {
    let target;
    if (payload.target === "products") {
      target = state.products;
    } else if (payload.target === "allProductVertical") {
      target = state.allProductVertical;
    } else if (payload.target === "allProductMultiVertical") {
      target = state.allProductMultiVertical;
    }
    let item = target.find(item => item.id === payload.itemId);
    item.addCamaRealPrice = addCommaPrice(item.realPrice);
    item.addCamaDiscount = addCommaPrice(item.discount);
  },
  itemCategorySplitTwice(state, payload) {
    let target;
    if (payload.component === "vertical1") {
      target = state.allProductVertical;
    } else if (payload.component === "vertical2") {
      target = state.allProductMultiVertical;
    }
    let item = target.find(item => item.id === payload.itemId);
    item.mobileShow = payload.mobileShow;
  },
  showQuestion(state, payload) {
    let item = state.allQuestion.find(item => item.id === payload.itemId);
    item.active = !item.active;
  },
  updateImg(state, payload) {
   let item = state.introductionProduct.find(item => item.id === payload.itemId);
   item.image = payload.currentSizeImg;
  }
};
const actions = {
  addCommaProduct(context, payload) {
    let target;
    if (payload === "allProductMultiVertical") {
      target = context.getters.allProductMultiVertical;
    } else if (payload === "allProductVertical") {
      target = context.getters.allProductVertical;
    } else {
      target = context.getters.products;
    }
    target.map((content) => {
      context.commit("addCommaProduct", { itemId: content.id, target: payload });
    });
  },
  itemCategorySplitTwice(context, payload) {
    let eachItem = payload.eachItem;
    let index = payload.eachIndex;
    let mobileSize = payload.mobileSize;
    if (mobileSize) {
      if (index <= 3) {
        context.commit("itemCategorySplitTwice", { itemId: eachItem.id, mobileShow: true, component: "vertical1" });
      } else {
        context.commit("itemCategorySplitTwice", { itemId: eachItem.id, mobileShow: false, component: "vertical1" });
      }
    } else {
      context.commit("itemCategorySplitTwice", { itemId: eachItem.id, mobileShow: true, component: "vertical1" });
    }

  },
  itemCategorySplitTwice2(context, payload) {
    let eachItem = payload.eachItem;
    let index = payload.eachIndex;
    let mobileShow = payload.mobileShow;
    if (mobileShow) {
      if (index <= 3) {
        context.commit("itemCategorySplitTwice", { itemId: eachItem.id, mobileShow: true, component: "vertical2" });
      } else {
        context.commit("itemCategorySplitTwice", { itemId: eachItem.id, mobileShow: false, component: "vertical2" });
      }
    } else {
      if (index < 3) {
        context.commit("itemCategorySplitTwice", { itemId: eachItem.id, mobileShow: true, component: "vertical2" });
      } else {
        context.commit("itemCategorySplitTwice", { itemId: eachItem.id, mobileShow: false, component: "vertical2" });
      }
    }

  },
  showQuestion(context, payload) {
    context.getters.allQuestion.map((t) => {
      if (payload.id === t.id) {
        context.commit("showQuestion", { itemId: t.id });
      }
    });

  },
  updateImg(context, payload) {
    context.getters.introductionProduct.map((contentSlider,indexSlider)=>{
      if (payload.contentLastGetImg.id === contentSlider.id ) {
        context.commit('updateImg', {itemId: contentSlider.id, currentSizeImg: payload.getCurrentSizeImg});
      }
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
