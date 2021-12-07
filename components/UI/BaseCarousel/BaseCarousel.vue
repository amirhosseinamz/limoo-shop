<template>
  <div class="base-carousel-container" :class="{ 'd-rtl': rtl }">

    <div class="previous-btn" @click="slidePrev" :class="[{ 'is-disabled': isPrevDisabled }, prevButtonClass]">
      <slot name="previousButton"></slot>
    </div>
    <div class="slider-wrapper" ref="sliderWrapper">
      <ul class="slider-list" ref="sliderList"
          :style="trackTransform+' '+trackTransition"
          :class="{ 'd-rtl': rtl }"
          draggable="true">
        <slot :slideWidth="slideWidth"></slot>
      </ul>
    </div>

    <div class="next-btn" @click="slideNext" :class="[{ 'is-disabled': isNextDisabled }, nextButtonClass]">
      <slot name="nextButton"></slot>
    </div>
    <div class="carousel-pagination" :class="paginationClass" v-if="pagination">
      <ol class="carousel-indicators">
        <li v-for="(item, index) in slidesCount">
          <button class="carousel-indicator" type="button" :class="[{ 'is-active': index === currentSlide }, indicatorClass]" @click="slideTo(index)"></button>
        </li>
      </ol>
    </div>

  </div>
</template>

<script>
import Slide from "./Slide";
export default {
  name: "BaseCarousel",
  components: { Slide },
  props: {
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
      default: 0,
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
      default: true,
      type: Boolean
    },
    rtl: {
      type: Boolean,
      require: false,
      default: true,
    },
    // an object to set settings
    settings: {
      default() {
        return {};
      },
      type: Object
    },
    // class for previous button
    prevButtonClass: {
      type: String,
      require: false
    },
    // class for next button
    nextButtonClass: {
      type: String,
      require: false,
    },
    // toggle pagination option
    pagination: {
      type: Boolean,
      require: false,
      default: false,
    },
    //class for pagination
    paginationClass: {
      type: String,
      require: false,
    },
    // class for indicator
    indicatorClass: {
      type: String,
      require: false,
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
      breakpoints: {},
      showPrevButton: true,
      showNextButton: true,
    };
  },
  computed: {
    sliderProductsData() {
      return this.$store.getters["comparison/comparison/sliderProductsData"];
    },
    slideBounds() {
      // Because the "isActive" depends on the slides shown, not the number of slidable ones.
      // but upper and lower bounds for Next,Prev depend on whatever is smaller.
      const siblings = this.itemsToShow;
      const lower = this.centerMode ? Math.ceil(this.currentSlide - siblings / 2) : this.currentSlide;
      const upper = this.centerMode
        ? Math.floor(this.currentSlide + siblings / 2)
        : Math.floor(this.currentSlide + siblings - 1);

      return {
        lower,
        upper
      };
    },
    isActive() {
      const { upper, lower } = this.slideBounds;

      return this.index >= lower && this.index <= upper;
    },
    isPrevDisabled() {
      if (this.infiniteScroll) {
        return false;
      }
      return this.currentSlide === 0;
    },
    isNextDisabled() {
      if (this.infiniteScroll) {
        return false;
      }

      if (this.trimWhiteSpace) {
        return this.currentSlide
          === (this.slidesCount - Math.min(this.itemsToShow, this.slidesCount));
      }

      return this.currentSlide === this.slidesCount - 1;
    },
    trackTransition() {
      if (this.initialized && this.isSliding) {
        return `transition: ${this.transition}ms`;
      }
      return '';
    },
    trackTransform() {
      const infiniteScroll = this.infiniteScroll;
      const centerMode = this.centerMode;
      const direction = this.rtl ? -1 : 1;
      const slideLength = this.slideWidth;
      const containerLength = this.containerWidth;
      const dragDelta = this.delta.x;
      const clonesSpace = infiniteScroll ? slideLength * this.slidesCount : 0;
      const centeringSpace = centerMode ? (containerLength - slideLength) / 2 : 0;

      // calculate track translate
      const translate = dragDelta + direction * (centeringSpace - clonesSpace - this.currentSlide * slideLength);
      return `transform: translate(${translate}px, 0);`;
    },
  },
  methods: {
    initEvents() {
      // get the element direction if not explicitly set
      if (this.rtl === null) {
        this.rtl = getComputedStyle(this.$el).direction === 'rtl';
      }

      if (this.autoPlay) {
        this.initAutoPlay();
      }
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
    initDefaults() {
      this.breakpoints = this.settings.breakpoints;
      // this.defaults = assign({}, this.$props, this.settings);
      // this.config = assign({}, this.defaults);
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
      const index = infiniteScroll
        ? slideIndex
        : this.getInRange(slideIndex, this.trimStart, this.slidesCount - this.trimEnd);

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

      const direction = (this.rtl ? -1 : 1) * this.sign(this.delta.x);
      const draggedSlides = Math.round(Math.abs(this.delta.x / this.slideWidth) + tolerance);
      this.slideTo(this.currentSlide - direction * draggedSlides);

      this.delta.x = 0;
      this.delta.y = 0;
      document.removeEventListener(this.isTouch ? 'touchmove' : 'mousemove', this.onDrag);
      document.removeEventListener(this.isTouch ? 'touchend' : 'mouseup', this.onDragEnd);
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
      if (this.breakpoints) {
        this.updateConfig();
      }
      this.updateWidth();
      this.updateTrim();
      this.$emit('updated', {
        containerWidth: this.containerWidth,
        containerHeight: this.containerHeight,
        slideWidth: this.slideWidth,
      });
    },
    updateConfig() {
      const breakpoints = Object.keys(this.breakpoints).sort((a, b) => b - a);
      let matched;
      breakpoints.some(breakpoint => {
        matched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
        if (matched) {
          console.log('true');
          //this.config = assign({}, this.config, this.defaults, this.breakpoints[breakpoint]);
          return true;
        }
      });
      if (!matched) {
        console.log('false');
        //this.config = assign(this.config, this.defaults);
        return false;
      }
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
    this.slidesCount = this.sliderProductsData.length;
    this.$nextTick(() => {
      this.update();
      this.slideTo(this.initialSlide || 0);
      setTimeout(() => {
        this.$emit('loaded');
        this.initialized = true;
      }, this.transition);
    });
    console.log(this.slidesCount);
  },
  created() {
    this.initDefaults();
  }
};
</script>

<style lang="scss" scoped>

.base-carousel-container {
  position: relative;
  width: 100%;

  .slider-wrapper {
    width: 100%;
    height: 100%;
    @extend .align-center;
    position: relative;
    z-index: 0;
    overflow-x: hidden;


    .slider-list {
      @extend .d-flex;
      height: 100%;
      position: absolute;
      list-style: none;
      //width: 100%;
    }
  }
  .carousel-pagination {
    @extend .d-flex;
    position: absolute;
    .carousel-indicators {
      width: 100%;
      @extend .d-flex;
      justify-content: center;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
}
</style>
