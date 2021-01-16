<template>
  <div ref="modal">
    <transition name="popup">
      <div
        v-if="isVisible"
        :id="id"
        class="modal"
        role="dialog"
        :class="[{ 'is-loading': loading }, 'variant-' + color]"
        @mousedown.self="onMouseDown"
        @touchstart.self="onMouseDown"
        @mouseup.self="onMouseUp"
        @touchend.self="onMouseUp"
      >
        <div
          class="modal-dialog"
          :class="['modal-' + size]"
          :style="{ width: size }"
          @mousedown.self="onMouseDown"
          @touchstart.self="onMouseDown"
          @mouseup.self="onMouseUp"
          @touchend.self="onMouseUp"
        >
          <div class="modal-content">
            <header
              v-if="$slots['modal-header'] || icon || title"
              class="modal-header"
            >
              <slot name="modal-header">
                <i v-if="icon" class="modal-header-icon" :class="icon"></i>
                <p v-if="title" class="mb-0">{{ title }}</p>
              </slot>
            </header>
            <div class="modal-body">
                  <slot></slot>
            </div>
            <footer v-if="footer" class="modal-footer text-center">
              <slot name="modal-footer">
                <template v-if="simple">
                  <button
                    class="btn"
                    :class="['btn-' + color]"
                    @click.prevent="close"
                  >
                    {{ simpleText }}
                  </button>
                </template>
                <template v-else="">
                  <button
                    v-if="canSkip"
                    class="btn btn-default"
                    @click.prevent="close"
                  >
                    {{ backText }}
                  </button>
                  <button
                    v-focus="nextFocus"
                    class="btn"
                    :class="[`btn-${color === 'default' ? 'primary' : color}`]"
                    :disabled="loading"
                    @click.prevent="next"
                  >
                    {{ nextText }}
                  </button>
                </template>
              </slot>
            </footer>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="isVisible" class="modal-backdrop"></div>
    </transition>
  </div>
</template>

<script>
export default {
  // inject: ['$validator'],
  props: {
    color: { type: String, default: 'secondary' },
    title: { type: String, default: null },
    icon: { type: String, default: null },
    id: { type: String, default: null },
    size: { type: String, default: 'md' },
    simple: { type: Boolean, default: true },
    simpleText: { type: String, default: 'خُــــب' },
    backText: { type: String, default: 'بستن' },
    nextText: { type: String, default: 'ادامه' },
    nextClass: { type: String, default: 'btn-primary' },
    nextFocus: { type: Boolean, default: false },
    canSkip: { type: Boolean, default: true },
    footer: { type: Boolean, default: true },
    closeBtn: { type: Boolean, default: false },
    hasValidate: { type: Boolean, default: undefined },
    show: { type: Boolean, default: false },
    center: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    beforeClose: { type: Function, default: null },
    statusAddParams: { type: Boolean, default: true },
    contentAddQuery: { type: [Object,Array], default: null }
  },
  data() {
    return {
      isVisible: false,
      historyState: new Date().getTime(),
      clickPosition: {}
    }
  },
  computed: {},
  watch: {
    isVisible(val) {
      if (this.show !== !!val) this.$emit('update:show', !!val)

      let query = this.$route.query

      if (!this.statusAddParams) {
        val = false
      }

      if (val) {

        // this.$router.push({
        //   query: { ...query, popup: this.id,...this.contentAddQuery }
        // })
      } else if (query.popup === this.id) {
        // this.$router.back()
      }
    },
    show: {
      handler(val) {
        this.isVisible = !!val
      },
      immediate: true
    },
    $route: {
      handler(after) {
        let q = after.query
        if (this.isVisible) {
          if (q.popup !== this.id) this.close('backdrop')
        } else if (q.popup === this.id) {
          this.open()
        }
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    // if (window.modal === undefined) window.modal = {}
    // window.modal[this.id] = this
  },
  mounted() {
    // this.$nextTick(() => {
    //   document.body.appendChild(this.$refs.modal)
    // })
  },
  beforeDestroy() {
    this.isVisible = false
    this.$emit('close', this)
    //window.removeEventListener('popstate', this.onPopState, true)
  },
  methods: {
    open() {
      this.isVisible = true
      this.$emit('show', this)
    },
    close(frm) {
      if (frm === 'backdrop' && (this.loading || !this.canSkip)) {
        return
      }
      if (this.beforeClose) this.beforeClose(this)
      this.isVisible = false
      this.$emit('close', this)
    },
    next() {
      this.$emit('next', this)
    },
    toggle() {
      this[this.isVisible ? 'close' : 'show']()
    },
    onMouseDown(e) {
      this.clickPosition = { x: e.x, y: e.y }
    },
    onMouseUp(e) {
      let p = this.clickPosition
      if (p.x === e.x && p.y === e.y) {
        this.close('backdrop')
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.modal {
  display: block;
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  -webkit-overflow-scrolling: touch;
  outline: 0; }

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto; }

.modal-dialog {
  width: 90%;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  margin: 0 auto !important; }

.modal-content {
  position: relative;
  background-color: $white;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 8px 16px rgba($black, 0.03);
  background-clip: padding-box;
  outline: 0;

}
  .modal-content .beh-loading:after {
    border-radius: 20px; }

.modal-header {
  padding: 20px;
  padding-bottom: 10px;
  min-height: 21.5px;
  text-align: center;
  position: relative;
  border-radius: 20px 20px 0 0; }
  .modal-header .modal-header-icon {
    font-size: 70px;
    margin-bottom: 5px; }

.modal-header .md-close {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
  border: solid 1px $light_red;
  width: 26px;
  height: 26px;
  background-color: $white;
  color: $dark_gray;
  text-align: center;
  line-height: 24px;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 300;
  text-indent: -1px; }
  .modal-header .md-close .fa, .modal-header .md-close .fa:before {
    display: block;
    width: 100%;
    height: 100%;
    line-height: inherit;
    border-radius: inherit;
    cursor: pointer; }

.modal-header .modal-header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden; }
  .modal-header .modal-header-bg:after {
    position: absolute;
    background: rgba($black,0.5);
    top: -200px;
    left: -1px;
    width: 59%;
    bottom: -72px;
    z-index: 1;
    content: '';
    transform: rotate(20deg); }

.modal-header .modal-header-cover {
  position: relative;
  z-index: 2; }

.modal-title {
  margin: 0;
  line-height: 1.5; }

.modal-body {
  position: relative;
  padding: 1rem;
  font-size: 12px; }
  .modal-body h1, .modal-body h2, .modal-body h3, .modal-body h4, .modal-body h5, .modal-body h6 {
    font-weight: bold; }

.modal-footer {
  padding: 10px 15px; }
  .modal-footer::after {
    display: block;
    clear: both;
    content: ""; }
  .modal-footer > * {
    vertical-align: middle; }
  .modal-footer .btn + .btn {
    margin-right: 5px;
    margin-bottom: 0; }
  .modal-footer .btn-group .btn + .btn {
    margin-left: -1px; }
  .modal-footer .btn-block + .btn-block {
    margin-left: 0; }

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll; }

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 417px;
    margin: 1.75rem auto; }
  .modal-dialog-centered {
    min-height: calc(100% - (1.75rem * 2)); }
  .modal-sm {
    max-width: 300px; } }

@media (min-width: 992px) {
  .modal-lg {
    max-width: 800px; } }

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1049;
  background: rgba($very_light_gray, 0.5);}
  .modal-backdrop.fade {
    opacity: 0; }
  .modal-backdrop.show {
    opacity: 1; }

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll; }

.modal.is-loading .modal-body {
  position: static; }

.modal.is-loading .md-close {
  opacity: 0; }

.modal-body .beh-loading {
  position: static; }

.modal.variant-primary .modal-header {
  color: $light_red_hardly_ever ; }
  .modal.variant-primary .modal-header .modal-header-icon {
    background: linear-gradient(-20deg, $light_red_hardly_ever 0%, $light_red_seldom 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; }
  .modal.variant-primary .modal-header .md-close {
    border-color: $light_red_hardly_ever; }

.modal.variant-primary .modal-footer .next-btn {
  color: $light_red_hardly_ever; }
  .modal.variant-primary .modal-footer .next-btn:hover {
    color: $light_red_hardly_ever; }

.modal.variant-secondary .modal-header {
  color: $strong_pink; }
  .modal.variant-secondary .modal-header .modal-header-icon {
    background: linear-gradient(-20deg, $strong_pink 0%, $strong_red 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; }
  .modal.variant-secondary .modal-header .md-close {
    border-color: $strong_pink; }

.modal.variant-secondary .modal-footer .next-btn {
  color: $strong_pink; }
  .modal.variant-secondary .modal-footer .next-btn:hover {
    color: $dark_pink; }

.modal.variant-info .modal-header {
  color: $soft_violet; }
  .modal.variant-info .modal-header .modal-header-icon {
    background: linear-gradient(-20deg, $soft_violet 0%, $soft_violet_red 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; }
  .modal.variant-info .modal-header .md-close {
    border-color: $soft_violet; }


.popup-enter-active,
.popup-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.17, 1.84); }

.popup-leave-to,
.popup-enter {
  opacity: 0;
  transform: scale(0.5, 0.5);
 }

.zoom-out-in-enter-active,
.zoom-out-in-leave-active {
  // transition: all 0.3s ease-out;
  transition: all 3000ms ease-out;
 }

.zoom-out-in-leave-to,
.zoom-out-in-enter {
  opacity: 0;
  transform: scale(0.8, 0.8); }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s; }

.fade-leave-to,
.fade-enter {
  opacity: 0; }

</style>
