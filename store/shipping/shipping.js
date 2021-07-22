const state = () => ({
  addressData: [
    {
      id: 1,
      address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 1",
      province: "تهران",
      city: "جنت آباد",
      codePoste: "90",
      nameReceiver: "شروین پیکارجو",
      numberReceiver: "09190894025",
      defultAddress: true,
    },
    {
      id: 2,
      address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 2",
      province: "قم",
      city: "قم",
      codePoste: "2",
      nameReceiver: "خشایار سُلگی",
      numberReceiver: "09180151023",
      defultAddress: false
    },
    {
      id: 3,
      address: "تهران ، خیابان ولیعصر ، تقاطع کوچه حسینی راد 3",
      province: "قم",
      city: "قم",
      codePoste: "2",
      nameReceiver: "مهدی دادور",
      numberReceiver: "09180151023",
      defultAddress: false
    }
  ],
  ordersData: [
    {
      id: 1,
      title: "تهران خیابان ولی عصر 1 تقاطع مطهری، کوچه حسینی راد"
    },
    {
      id: 2,
      title: "تهران خیابان ولی عصر 2 تقاطع مطهری، کوچه حسینی راد"
    },
    {
      id: 3,
      title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
    },
    {
      id: 4,
      title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
    },
    {
      id: 5,
      title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
    },
    {
      id: 6,
      title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
    },
    {
      id: 7,
      title: "تهران خیابان ولی عصر 3 تقاطع مطهری، کوچه حسینی راد"
    }
  ],
  allProvince: [
    {
      id: 1,
      title: "تهران",
      selected: false
    },
    {
      title: "قم",
      id: 2,
      selected: false
    }
  ],
  allCities: [
    {
      id: 1,
      parent_id: 2,
      title: "قم",
      selected: false
    },
    {
      id: 2,
      parent_id: 1,
      title: "جنت آباد",
      selected: false
    }
  ],
  formData: {
    province: "",
    city: "",
    codePoste: "",
    nameReceiver: "",
    numberReceiver: "",
    address: "",
    defultAddress: true
  },
  profilePhoneNumber: "09198814783",
  timeData: [
    {
      id: 1,
      shippingLimoo: "limoo",
      shippingPost: "post",

      orders: [
        { id: 1, img: "/img/apple-watch-1.png" },
        { id: 2, img: "/img/apple-watch-1.png" },
        { id: 3, img: "/img/apple-watch-1.png" }
      ],
      timeTable: [
        {
          id: 1,
          dayTime: "شنبه 23 بهمن 99",
          weekday: "شنبه",
          weekcal: "23 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00", disable: true },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 2,
          dayTime: "یک شنبه 24 بهمن 99",
          weekday: "یک شنبه",
          weekcal: "24 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 3,
          dayTime: "دو شنبه 25 بهمن 99",
          weekday: "دو شنبه",
          weekcal: "25 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 4,
          dayTime: "سه شنبه 26 بهمن 99",
          weekday: "سه شنبه",
          weekcal: "26 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 5,
          dayTime: "چهار شنبه 27 بهمن 99",
          weekday: "چهار شنبه",
          weekcal: "27 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 6,
          dayTime: "پنچ شنبه 28 بهمن 99",
          weekday: "پنج شنبه",
          weekcal: "28 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 7,
          dayTime: "جمعه 29 بهمن 99",
          weekday: "جمعه",
          weekcal: "29 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        }
      ]
    },
    {
      id: 2,
      shipping: "heavy",
      orders: [{ id: 1, img: "/img/apple-watch-2.png" }],
      timeTable: [
        {
          id: 1,
          dayTime: "شنبه 23 بهمن 99",
          weekday: "شنبه",
          weekcal: "23 بهمن 99",
          timeInDayTable: [
            {
              id: 1,
              time: "بین 8:00 تا 12:00",
              disable: true
            },
            { id: 2, time: "بین 12:00 تا 16:00" },
            {
              id: 3,
              time: "بین 16:00 تا 20:00",
              disable: true
            },
            {
              id: 4,
              time: "بین 20:00 تا 00:00",
              disable: true
            }
          ]
        },
        {
          id: 2,
          dayTime: "یک شنبه 24 بهمن 99",
          weekday: "یک شنبه",
          weekcal: "24 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 3,
          dayTime: "دو شنبه 25 بهمن 99",
          weekday: "دو شنبه",
          weekcal: "25 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 4,
          dayTime: "سه شنبه 26 بهمن 99",
          weekday: "سه شنبه",
          weekcal: "26 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 5,
          dayTime: "چهار شنبه 27 بهمن 99",
          weekday: "چهار شنبه",
          weekcal: "27 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 6,
          dayTime: "پنچ شنبه 28 بهمن 99",
          weekday: "پنج شنبه",
          weekcal: "28 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 7,
          dayTime: "جمعه 29 بهمن 99",
          weekday: "جمعه",
          weekcal: "29 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        }
      ]
    },
    {
      id: 3,
      shippingSeller: "seller",
      shippingLimoo: "limoo",
      orders: [
        { id: 1, img: "/img/apple-watch-3.png" },
        { id: 2, img: "/img/apple-watch-3.png" }
      ],
      timeTable: [
        {
          id: 1,
          dayTime: "شنبه 23 بهمن 99",
          weekday: "شنبه",
          weekcal: "23 بهمن 99",
          timeInDayTable: [
            {
              id: 1,
              time: "بین 8:00 تا 12:00",
              disable: true
            },
            { id: 2, time: "بین 12:00 تا 16:00" },
            {
              id: 3,
              time: "بین 16:00 تا 20:00",
              disable: true
            },
            {
              id: 4,
              time: "بین 20:00 تا 00:00",
              disable: true
            }
          ]
        },
        {
          id: 2,
          dayTime: "یک شنبه 24 بهمن 99",
          weekday: "یک شنبه",
          weekcal: "24 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            {
              id: 2,
              time: "بین 12:00 تا 16:00",
              disable: true
            },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 3,
          dayTime: "دو شنبه 25 بهمن 99",
          weekday: "دو شنبه",
          weekcal: "25 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 4,
          dayTime: "سه شنبه 26 بهمن 99",
          weekday: "سه شنبه",
          weekcal: "26 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 5,
          dayTime: "چهار شنبه 27 بهمن 99",
          weekday: "چهار شنبه",
          weekcal: "27 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 6,
          dayTime: "پنچ شنبه 28 بهمن 99",
          weekday: "پنج شنبه",
          weekcal: "28 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 7,
          dayTime: "جمعه 29 بهمن 99",
          weekday: "جمعه",
          weekcal: "29 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        }
      ]
    },
    {
      id: 4,
      shipping: "seller",
      orders: [{ id: 1, img: "/img/apple-watch-1.png" }],
      timeTable: [
        {
          id: 1,
          dayTime: "شنبه 23 بهمن 99",
          weekday: "شنبه",
          weekcal: "23 بهمن 99",
          timeInDayTable: [
            {
              id: 1,
              time: "بین 8:00 تا 12:00",
              disable: true
            },
            { id: 2, time: "بین 12:00 تا 16:00" },
            {
              id: 3,
              time: "بین 16:00 تا 20:00",
              disable: true
            },
            {
              id: 4,
              time: "بین 20:00 تا 00:00",
              disable: true
            }
          ]
        },
        {
          id: 2,
          dayTime: "یک شنبه 24 بهمن 99",
          weekday: "یک شنبه",
          weekcal: "24 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 3,
          dayTime: "دو شنبه 25 بهمن 99",
          weekday: "دو شنبه",
          weekcal: "25 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 4,
          dayTime: "سه شنبه 26 بهمن 99",
          weekday: "سه شنبه",
          weekcal: "26 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 5,
          dayTime: "چهار شنبه 27 بهمن 99",
          weekday: "چهار شنبه",
          weekcal: "27 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 6,
          dayTime: "پنچ شنبه 28 بهمن 99",
          weekday: "پنج شنبه",
          weekcal: "28 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        },
        {
          id: 7,
          dayTime: "جمعه 29 بهمن 99",
          weekday: "جمعه",
          weekcal: "29 بهمن 99",
          timeInDayTable: [
            { id: 1, time: "بین 8:00 تا 12:00" },
            { id: 2, time: "بین 12:00 تا 16:00" },
            { id: 3, time: "بین 16:00 تا 20:00" },
            { id: 4, time: "بین 20:00 تا 00:00" }
          ]
        }
      ]
    }
  ],
  detailPrice: {
    price: 12000,
    totalDiscount: 142250,
    submitDeliveryPrice: "رایگان",
    totalPrice: 2587000
  },
  updateChosenAddress: 0,
  newPrice: 0
})
const getters = {
  addressData (state) {
    return state.addressData

  },
  ordersData (state) {
    return state.ordersData
  },
  allProvince (state) {
    return state.allProvince
  },
  allCities (state) {
    return state.allCities
  },
  formData (state) {
    return state.formData
  },
  timeData (state) {
    return state.timeData
  },
  detailPrice (state) {
    return state.detailPrice
  },
  updateChosenAddress (state) {
    return state.updateChosenAddress
  },
  newPrice (state) {
    return state.newPrice
  },
  profilePhoneNumber(state) {
    return state.profilePhoneNumber;
  },

}
const mutations = {
  addCama (state, payload) {
    state.detailPrice = payload
  },
  updateChosenAddress (state) {
    state.updateChosenAddress++
  },
  changeDefaultAddress (state, payload) {
    const theAddress = state.addressData.find(item => item.id === payload[0].id)
    theAddress.defultAddress = !!payload[1];
  },
  deleteAddress (state, payload) {
    state.addressData.splice(payload, 1)
  },
  selectProvince (state, payload) {
    state.formData.province = payload[0]
    state.formData.selectedProvinceAllProperty = payload[1]
  }
}
const actions = {
  addCama (context, payload) {
    context.commit('addCama', payload)
  },
  updateChosenAddress (context) {
    context.commit('updateChosenAddress')
  },
  changeDefaultAddress (context, payload) {
    context.commit('changeDefaultAddress', payload)
  },
  deleteAddress (context, payload) {
    context.commit('deleteAddress', payload)
  },
  selectProvince (context, payload) {
    context.commit('selectProvince', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
