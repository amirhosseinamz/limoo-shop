import addCommaPrice from "../../modules/addCamaPrice";

const state = () => ({
  products: [
    {
      id: 1,
      title: "گوشی موبایل شیائومی مدل POCO X3 Pro M2102J20SG دو سیم‌ کارت ظرفیت 256 گیگابایت و 8 گیگابایت رم ",
      discount: "10000",
      realPrice: "50000",
      image: "https://dkstatics-public.digikala.com/digikala-products/77f6b5b39b58f0b81c7707e3626f55b74ee348aa_1623857594.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    },
    {
      id: 2,
      title: "گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
      discount: "",
      realPrice: "10000",
      image: "https://dkstatics-public.digikala.com/digikala-products/1aaa7ff34f7bec773c4baea959b652ed5dff9f30_1619596674.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    },
    {
      id: 3,
      title: "گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت ظرفیت 256 گیگابایت",
      discount: "",
      realPrice: "625000",
      image: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1607433995.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    },
    {
      id: 4,
      title: "گوشی موبایل اپل مدل iPhone 12 A2404 دو سیم‌ کارت ظرفیت 128 گیگابایت ",
      discount: "",
      realPrice: "120000",
      image: "https://dkstatics-public.digikala.com/digikala-products/9f5d8f6583a7289a096a9180ac88708856f4bd8f_1607433653.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    },
    {
      id: 5,
      title: "گوشی موبایل شیائومی مدل POCO M3 M2010J19CG دو سیم‌ کارت ظرفیت 128 گیگابایت",
      discount: "70000",
      realPrice: "120000",
      image: "https://dkstatics-public.digikala.com/digikala-products/d48f70d64f989092aa9493a40ab90ae47e0667c4_1626014826.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    },
    {
      id: 6,
      title: "گوشی موبایل سامسونگ مدل Galaxy A21S SM-A217F/DS دو سیم‌کارت ظرفیت 64 گیگابایت",
      discount: "",
      realPrice: "120000",
      image: "https://dkstatics-public.digikala.com/digikala-products/89e7f2abac447a018242a954f03f8a6926344f8b_1594023235.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    },
  ],
  introductionCarouselData: [
    {
      id: 1,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/3292dc43aa6df1143292145c26dbf59282d21914_1622033545.jpg?x-oss-process=image/quality,q_50",
    },
    {
      id: 2,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/32cc74ebc5343cdc4c45319e59b63b02ac046036_1636267114.jpg?x-oss-process=image/quality,q_50"
    },
    {
      id: 3,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/68b5db2e934e603899497531d3105c632b1499fb_1636274409.jpg?x-oss-process=image/quality,q_50"
    },
    {
      id: 4,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/53323e6f05e2d5d120991365e0c13d5faef880d9_1636182730.jpg?x-oss-process=image/quality,q_50"
    },
    {
      id: 5,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/32cc74ebc5343cdc4c45319e59b63b02ac046036_1636267114.jpg?x-oss-process=image/quality,q_50"
    },
    {
      id: 6,
      img: "https://dkstatics-public.digikala.com/digikala-adservice-banners/53323e6f05e2d5d120991365e0c13d5faef880d9_1636182730.jpg?x-oss-process=image/quality,q_50"
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
      title: "لپ تاپ 15 اینچی لنوو مدل Ideapad L3 - 15IML05 - NPA",
      realPrice: "50000",
      image: "https://dkstatics-public.digikala.com/digikala-products/121530429.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      discount: "20000",
    },
    {
      id: 2,
      title: "لپ تاپ 13.9 اینچی هوآوی مدل MateBook X Pro MACHC-WAE9LP - A",
      realPrice: "10",
      image: "https://dkstatics-public.digikala.com/digikala-products/035a9bf8f0ded7613b3f459eda6d48abc516671f_1629977990.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
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
      image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/069cced9ef326e18244f4cb609deb3c8d900c2be_1631007949.jpg?x-oss-process=image/quality,q_80",
    },
    {
      id: 2,
      title: "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "https://dkstatics-public.digikala.com/digikala-adservice-banners/069cced9ef326e18244f4cb609deb3c8d900c2be_1631007949.jpg?x-oss-process=image/quality,q_80",
    }
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
  introductionCarouselData(state) {
    return state.introductionCarouselData;
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
