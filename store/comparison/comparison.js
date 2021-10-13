
const state = () => ({
  sliderProductsData: [
      {
        id: 1,
        title: "لپ تاپ 15 اینچی ایسوس مدل VivoBook R521JA-BQ083",
        specifications: [
          {
            name: "حافظه رم",
            value: "8 گیگابایت"
          },
          {
            name: "پردازنده",
            value: "core i5 8265U"
          }
        ],
        discount: "10000",
        realPrice: "50000",
        image: "https://dkstatics-public.digikala.com/digikala-products/0efd163d6cc33b53c111c6e39450e8a3b37eadf8_1600690414.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
      },
      {
        id: 11,
        title: "لپ تاپ ۱۵.۶ اینچی ایسوس مدل VivoBook R565MA-BR218",
        specifications: [
          {
            name: "حافظه رم",
            value: "16 گیگابایت"
          },
          {
            name: "پردازنده",
            value: "core i7 8265U"
          }
        ],
        discount: "10000",
        realPrice: "50000",
        image: "https://dkstatics-public.digikala.com/digikala-products/730102f99c1574a2683f9632e422bcaeba64b925_1623644050.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
      },
      {
        id: 2,
        title: "لپ تاپ 15.6 اینچی ایسوس مدل X543MA-GQ1013",
        specifications: [
          {
            name: "حافظه رم",
            value: "4 گیگابایت"
          },
          {
            name: "پردازنده",
            value: "core i3 10652U"
          }
        ],
        discount: "10000",
        realPrice: "50000",
        image: "https://dkstatics-public.digikala.com/digikala-products/bae4a15494947baf5540c64afee44073415e2b26_1618133347.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
      },
      {
        id: 3,
        title: "لپ تاپ 14 اینچی هوآوی مدل Matebook D14",
        specifications: [
          {
            name: "حافظه رم",
            value: "8 گیگابایت"
          },
          {
            name: "پردازنده",
            value: "core i5 8265U"
          }
        ],
        discount: "10000",
        realPrice: "50000",
        image: "https://dkstatics-public.digikala.com/digikala-products/4e7983d9bd59ca7309ace03de0b1cf45e31ad42d_1618230895.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
      },
      {
        id: 4,
        title: "لپ تاپ 15 اینچی مایکروسافت مدل Surface Book 3- F",
        specifications: [
          {
            name: "حافظه رم",
            value: "32 گیگابایت"
          },
          {
            name: "پردازنده",
            value: "core i7 10750HQ"
          }
        ],
        discount: "10000",
        realPrice: "50000",
        image: "https://dkstatics-public.digikala.com/digikala-products/80dc0f1c5078c2621d57f9e38722d09cbcde0ba5_1600244060.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
      },
      {
        id: 5,
        title: "لپ تاپ ۱۵.۶ اینچی ایسوس مدل VivoBook R565MA-BR218",
        specifications: [
          {
            name: "حافظه رم",
            value: "64 گیگابایت"
          },
          {
            name: "پردازنده",
            value: "core i9 10750M"
          }
        ],
        discount: "10000",
        realPrice: "50000",
        image: "https://dkstatics-public.digikala.com/digikala-products/730102f99c1574a2683f9632e422bcaeba64b925_1623644050.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
      },
      {
        id: 55,
        title: "لپ تاپ ۱۵.۶ اینچی ایسوس مدل VivoBook R565MA-BR218",
        specifications: [
          {
            name: "حافظه رم",
            value: "16 گیگابایت"
          },
          {
            name: "پردازنده",
            value: "core i3 8265U"
          }
        ],
        discount: "10000",
        realPrice: "50000",
        image: "https://dkstatics-public.digikala.com/digikala-products/730102f99c1574a2683f9632e422bcaeba64b925_1623644050.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60"
      },
    ],
})
const getters = {
  sliderProductsData(state) {
    return state.sliderProductsData;
  }
}
const mutations = {

}
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

