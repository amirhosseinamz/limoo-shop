import Modal from './Modal.vue'
import Vue from 'vue';

export default {
  install: function(Vue) {
    Vue.directive('toggle-modal', {
      bind: function(el, binding) {
        el.addEventListener(
          'click',
          function() {
            try {
              window.modal[binding.value].toggle()
            } catch (er) {
              // eslint-disable-next-line
              console.warn(`No modal found with id "${binding.value}"`)
            }
          },
          true
        )
      }
    })
    Vue.component('modal', Modal)
  }
}

Vue.component('modal', Modal)
