import Vue from "vue";
import Paginate from "vuejs-paginate";
import VueStickyKit from "vue-stickykit";
import VueSlider from "vue-slider-component";
import ScrollView from "vue-native-scroll";

// components //
Vue.component("Paginate", Paginate);
Vue.component("vue-slider", VueSlider);

// plugins //
Vue.use(VueStickyKit);

Vue.use(ScrollView, {
  name: "vue-scroll",
});
