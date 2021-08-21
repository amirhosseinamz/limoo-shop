import addCamaPrice from "../../modules/addCamaPrice";

const state = () => ({
  categoryProducts: [
    {
      id: 1,
      title:
        "حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت",
      discount: "10000",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
    },
    {
      id: 2,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "/img/sony_pic_3.svg",
    },
    {
      id: 3,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "625000",
      image: "/img/pic_phone_3.svg",
    },
    {
      id: 4,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 5,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "70000",
      realPrice: "120000",
      image: "/img/pic_phone_4.svg",
    },
    {
      id: 6,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 7,
      title:
        "حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت",
      discount: "10000",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
    },
    {
      id: 8,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "/img/sony_pic_3.svg",
    },
    {
      id: 9,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "625000",
      image: "/img/pic_phone_3.svg",
    },
    {
      id: 10,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 11,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "70000",
      realPrice: "120000",
      image: "/img/pic_phone_4.svg",
    },
    {
      id: 12,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
  ],
  category: [
    {
      id: 1,
      title: "لیمو",
    },
    {
      id: 2,
      title: "دسته کالاها",
    },
    {
      id: 3,
      title: "لوازم جانبی موبایل",
    },
  ],
  categorySuggestion: [
    {
      id: 1,
      title: "قاب موبایل",
    },
    {
      id: 2,
      title: "محافظ صفحه",
    },
    {
      id: 3,
      title: "تمیز کننده صفحه",
    },
    {
      id: 4,
      title: "قاب موبایل",
    },
    {
      id: 5,
      title: "محافظ صفحه",
    },
    {
      id: 6,
      title: "تمیز کننده صفحه",
    },
    {
      id: 7,
      title: "قاب موبایل",
    },
    // {
    //   id        : 16,
    //   title     : 'محافظ صفحه',
    // },
    // {
    //   id        : 17,
    //   title     : 'تمیز کننده صفحه',
    // },
    // {
    //   id        : 18,
    //   title     : 'قاب موبایل',
    // },
    // {
    //   id        : 19,
    //   title     : 'محافظ صفحه',
    // },
    // {
    //   id        : 20,
    //   title     : 'تمیز کننده صفحه',
    // },
  ],
  categoryProductMobile: [
    {
      id: 1,
      title:
        "حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت",
      discount: "10000",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
    },
    {
      id: 2,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "/img/sony_pic_3.svg",
    },
    {
      id: 3,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "625000",
      image: "/img/pic_phone_3.svg",
    },
    {
      id: 4,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 5,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "70000",
      realPrice: "120000",
      image: "/img/pic_phone_4.svg",
    },
    {
      id: 6,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 7,
      title:
        "حافظه SSD وسترن دیجیتال مدل GREEN WDS480G2G0A ظرفیت 480 گیگابایت",
      discount: "10000",
      realPrice: "50000",
      image: "/img/sony_pic_1.svg",
    },
    {
      id: 8,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "10000",
      image: "/img/sony_pic_3.svg",
    },
    {
      id: 9,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "625000",
      image: "/img/pic_phone_3.svg",
    },
    {
      id: 10,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
    {
      id: 11,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "70000",
      realPrice: "120000",
      image: "/img/pic_phone_4.svg",
    },
    {
      id: 12,
      title:
        "اپ واچ سری قرمز آلومینیوم آبی با بند اسپرت سیلیکون آبی ویژه سایز 42 و 44",
      discount: "",
      realPrice: "120000",
      image: "/img/phoneAndroid.svg",
    },
  ],
  checkBoxData: {
    brand: {
      title: "برند",
      openDefault: true,
      children: [
        {
          id: 1,
          title: "تستی 1",
          value: "first"
        },
        {
          id: 2,
          title: "تستی 2",
          value: "second"
        },
        {
          id: 3,
          title: "تستی 3",
          value: "third"
        },
      ],
    },
    store: {
      title: "لیمو",
      openDefault: false,
      children: [
        {
          id: 1,
          title: "تستی 1",
        },
        {
          id: 2,
          title: "تستی 2",
        },
        {
          id: 3,
          title: "تستی 3",
        },
      ],
    },
  },
  sortData: [
    {
      id: 1,
      title: "جدیدترین ها",
    },
    {
      id: 2,
      title: "ارزان ترین ",
    },
    {
      id: 3,
      title: "ارزان ترین ",
    },
    {
      id: 4,
      title: "ارزان ترین ",
    },
    {
      id: 5,
      title: "ارزان ترین ",
    },
  ],
  defaultSelectedSuggestion: {},
})
const getters = {
  categoryProducts(state) {
    return state.categoryProducts;
  },
  category(state) {
    return state.category;
  },
  categorySuggestion(state) {
    return state.categorySuggestion;
  },
  categoryProductMobile(state) {
    return state.categoryProductMobile;
  },
  checkboxData(state) {
    return state.checkBoxData;
  },
  sortData(state) {
    return state.sortData;
  },
  defaultSelectedSuggestion(state) {
    return state.defaultSelectedSuggestion;
  }
}
const mutations = {
  addCommaProduct(state, payload) {
    console.log('now');
    payload.addCommaRealPrice = addCamaPrice(payload.realPrice);
    payload.addCommaDiscount = addCamaPrice(payload.discount);
  },
  addCommaProductMobile(state, payload) {
    console.log('now');
    payload.addCommaRealPrice = addCamaPrice(payload.realPrice);
    payload.addCommaDiscount = addCamaPrice(payload.discount);
  },
  setDataModalSort(state, payload) {
    let item = state.sortData.find(item => item.id === payload);
    item.checked = item.id === 1;
  }
}
const actions = {
  addCommaProduct(context) {
    context.getters.categoryProducts.map((content) => {
      context.commit('addCommaProduct', content);
    });

  },
  addCommaProductMobile(context) {
    context.getters.categoryProductMobile.map((content) => {
      context.commit('addCommaProductMobile', content);
    });
  },
  setDataModalSort(context) {
    context.getters.sortData.map((content) => {
      context.commit('setDataModalSort', content.id);
    });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
