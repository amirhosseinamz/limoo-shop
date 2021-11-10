<template>
  <div class="compare-slider-container">
    <div class="previous-btn" @click="slidePrev" v-if="true">
      <span class="icon"></span>
    </div>
    <div class="slider-wrapper" ref="sliderWrapper">
      <ul class="slider-list" ref="sliderList"
          :style="trackTransform+' '+trackTransition"
          draggable="true">
        <slot name="slide"></slot>
      </ul>
    </div>

    <div class="next-btn" @click="slideNext" v-if="showNextButton">
      <span class="icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCarousel",
  props: {
    moveDirection: {
      type: String,
      require: false,
    },
    // toggle mouse dragging
    mouseDrag: {
      default: true,
      type: Boolean
    },
    // toggle touch dragging
    touchDrag: {
      default: true,
      type: Boolean
    },
    // index number of initial slide
    initialSlide: {
      default: 1,
      type: Number
    },
    // count of items to slide when use navigation buttons
    itemsToSlide: {
      default: 1,
      type: Number
    },
    // count of items to showed per view
    itemsToShow: {
      default: 3,
      type: Number
    },
    // control center mode
    centerMode: {
      default: false,
      type: Boolean
    },
    // control infinite scrolling mode
    infiniteScroll: {
      default: false,
      type: Boolean
    },
    // enable any move to commit a slide
    shortDrag: {
      default: true,
      type: Boolean
    },
    // remove empty space around slides
    trimWhiteSpace: {
      default: false,
      type: Boolean
    },
    directionLtr: {
      type: Boolean,
      require: false,
      default: false,
    },

  },
  data() {
    return {
      windowWidth: 0,
      isSliding: false,
      isTouch: false,
      isDragging: false,
      currentSlide: null,
      autoPlay: false,
      containerWidth: null,
      containerHeight: null,
      slideWidth: null,
      initialized: false,
      slidesCount: 0,
      transition: 300,
      delta: { x: 0, y: 0 },
      startPosition: { x: 0, y: 0 },
      endPosition: { x: 0, y: 0 },
      trimStart: 0,
      trimEnd: 1,
      timer: null,
      showPrevButton: true,
      showNextButton: true,
    };
  },
  computed: {
    trackTransition() {
      if (this.initialized && this.isSliding) {
        return `transition: ${this.transition}ms`;
      }
      return '';
    },
    trackTransform() {
      const infiniteScroll = this.infiniteScroll;
      const centerMode = this.centerMode;
      const direction = this.directionLtr ? 1 : -1;
      const slideLength = this.slideWidth;
      const containerLength = this.containerWidth;
      const dragDelta = this.delta.x;
      const clonesSpace = !infiniteScroll ? slideLength * this.slidesCount : 0;
      const centeringSpace = centerMode ? (containerLength - slideLength) / 2 : 0;

      // calculate track translate
      const translate = dragDelta + direction * (centeringSpace - clonesSpace - this.currentSlide * slideLength);
      return `transform: translate(${translate}px, 0);`;
    },
  },
  methods: {
    initEvents() {
      // get the element direction if not explicitly set
      // if (this.defaults.rtl === null) {
      //   this.defaults.rtl = getComputedStyle(this.$el).direction === 'rtl';
      // }

      // if (this.autoPlay) {
      //   this.initAutoPlay();
      // }
      if (this.mouseDrag) {
        this.$refs.sliderList.addEventListener('mousedown', this.onDragStart);
      }
      if (this.touchDrag) {
        this.$refs.sliderList.addEventListener('touchstart', this.onDragStart, {
          passive: true
        });
      }
      // if (this.config.keysControl) {
      //   this.$el.addEventListener('keydown', this.onKeypress);
      // }
      // if (this.config.wheelControl) {
      //   this.lastScrollTime = now();
      //   this.$el.addEventListener('wheel', this.onWheel, { passive: false });
      // }
      window.addEventListener('resize', this.update);
    },
    getInRange(value, min, max) {
      return Math.max(Math.min(value, max), min);
    },
    slideTo(slideIndex, isSource = true) {
      if (this.isSliding || slideIndex === this.currentSlide) {
        return;
      }

      this.$emit('beforeSlide', {
        currentSlide: this.currentSlide,
        slideTo: index
      });


      const infiniteScroll = this.infiniteScroll;
      const previousSlide = this.currentSlide;
      const index = !infiniteScroll
        ? slideIndex
        : this.getInRange(slideIndex, this.trimStart, this.slidesCount - this.trimEnd);

      // Notify others if in a group and is the slide event initiator.
      // if (this.group && isSource) {
      //   EMITTER.$emit(`slideGroup:${this.group}`, slideIndex);
      // }

      this.currentSlide = index;
      this.isSliding = true;

      window.setTimeout(() => {
        this.isSliding = false;
        this.currentSlide = this.normalizeSlideIndex(index, this.slidesCount);
      }, this.transition);

      this.$emit('slide', {
        currentSlide: this.currentSlide,
        slideFrom: previousSlide
      });
    },
    slideNext() {
      this.slideTo(this.currentSlide + this.itemsToSlide);
    },
    slidePrev() {
      this.slideTo(this.currentSlide - this.itemsToSlide);
    },
    updateWidth() {
      const rect = this.$refs.sliderWrapper.getBoundingClientRect();
      this.containerWidth = rect.width;
      this.containerHeight = rect.height;
      this.slideWidth = this.containerWidth / this.itemsToShow;

    },
    updateTrim() {
      const itemsToShow = this.itemsToShow;
      const centerMode = this.centerMode;
      const infiniteScroll = this.infiniteScroll;
      const trimWhiteSpace = this.trimWhiteSpace;
      if (!trimWhiteSpace || infiniteScroll) {
        this.trimStart = 0;
        this.trimEnd = 1;
        return;
      }
      this.trimStart = centerMode ? Math.floor((itemsToShow - 1) / 2) : 0;
      this.trimEnd = centerMode ? Math.ceil(itemsToShow / 2) : itemsToShow;
    },
    normalizeSlideIndex(index, slidesCount) {
      let realIndex;
      if (index < 0) {
        realIndex = (index + slidesCount) % slidesCount;
      } else {
        realIndex = index % slidesCount;
      }

      // Test for NaN
      if (realIndex !== realIndex) {
        return 0;
      }

      return realIndex;
    },
    checkPrevButton() {
      const sliderList = this.$refs.sliderList;
      if (!sliderList.style.left || sliderList.style.left === "0%" || +sliderList.style.left.split("%")[0] < 0) {
        this.showPrevButton = false;
      }
    },
    checkNextButton() {
      if (this.currentSlide === this.sliderSlidesLength) {
        this.showNextButton = false;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    onDragStart(event) {
      this.isTouch = event.type === 'touchstart';
      if (!this.isTouch && event.button !== 0) {
        return;
      }

      this.startPosition = { x: 0, y: 0 };
      this.endPosition = { x: 0, y: 0 };
      this.isDragging = true;
      this.startPosition.x = this.isTouch ? event.touches[0].clientX : event.clientX;
      this.startPosition.y = this.isTouch ? event.touches[0].clientY : event.clientY;

      document.addEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag);
      document.addEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onDragEnd);
    },
    isInvalidDirection(deltaX, deltaY) {
      return Math.abs(deltaX) <= Math.abs(deltaY);
    },
    onDrag(event) {
      if (this.isSliding || !this.isDragging) {
        return;
      }

      event.preventDefault();
      this.endPosition.x = this.isTouch ? event.touches[0].clientX : event.clientX;
      this.endPosition.y = this.isTouch ? event.touches[0].clientY : event.clientY;
      const deltaX = this.endPosition.x - this.startPosition.x;
      const deltaY = this.endPosition.y - this.startPosition.y;
      // Maybe scrolling.
      if (this.isInvalidDirection(deltaX, deltaY)) {
        return;
      }

      this.delta.y = deltaY;
      this.delta.x = deltaX;

      if (!this.isTouch) {
        event.preventDefault();
      }
    },
    onDragEnd() {
      const tolerance = this.shortDrag ? 0.5 : 0.15;
      this.isDragging = false;

      const direction = (this.directionLtr ? 1 : -1) * this.sign(this.delta.x);
      const draggedSlides = Math.round(Math.abs(this.delta.x / this.slideWidth) + tolerance);
      this.slideTo(this.currentSlide - direction * draggedSlides);

      this.delta.x = 0;
      this.delta.y = 0;
      document.removeEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag);
      document.removeEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onDragEnd);
      //this.restartTimer();
    },
    sign(val) {
      return Math.sign(val) || this.signPoly(val);
    },
    signPoly(value) {
      if (value < 0) {
        return -1;
      }
      return value > 0 ? 1 : 0;
    },
    onTransitionend() {
      this.isSliding = false;
      this.$emit('afterSlide', {
        currentSlide: this.currentSlide
      });
    },
    update() {
      this.updateWidth();
      this.updateTrim();
      this.$emit('updated', {
        containerWidth: this.containerWidth,
        containerHeight: this.containerHeight,
        slideWidth: this.slideWidth,
      });
    },
    restart() {
      this.$nextTick(() => {
        this.update();
      });
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.initEvents();
    this.slidesCount = this.$refs.sliderList.querySelectorAll('.introduction-carousel-item').length;
    //this.addGroupListeners();
    this.$nextTick(() => {
      this.update();
      this.slideTo(this.initialSlide || 0);
      setTimeout(() => {
        this.$emit('loaded');
        this.initialized = true;
      }, this.transition);
    });
  },
};
</script>

<style lang="scss" scoped>

.compare-slider-container {
  position: relative;
  width: 100%;

  .slider-wrapper {
    width: 100%;
    @extend .align-center;
    position: relative;
    z-index: 0;
    height: 100%;
    overflow-x: hidden;


    .slider-list {
      @extend .d-flex;
      left: 0;
      position: absolute;
      list-style: none;
      //width: 100%;
    }
  }

  .previous-btn {
    position: absolute;
    top: toRem(145);
    right: toRem(290);
    z-index: 1;
    cursor: pointer;

    .icon {
      width: toRem(40);
      height: toRem(40);
      border-radius: 50%;
      background-color: $gray-3;
      @extend .centered;

      &::before {
        content: "\e801";
        @include font-icon__limoo();
        width: 100%;
        height: 100%;
        @extend .centered;
        padding-right: toRem(2);
        font-size: toRem(18);
        color: $white;
        transform: rotate(180deg);
      }
    }
  }

  .next-btn {
    position: absolute;
    top: toRem(145);
    left: toRem(290);
    z-index: 1;
    cursor: pointer;

    .icon {
      width: toRem(40);
      height: toRem(40);
      border-radius: 50%;
      background-color: $gray-3;
      @extend .centered;

      &::before {
        content: "\e801";
        @include font-icon__limoo();
        font-size: toRem(18);
        width: 100%;
        height: 100%;
        @extend .centered;
        padding-right: toRem(2);
        color: $white;
      }
    }
  }
}
</style>
