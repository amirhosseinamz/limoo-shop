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
