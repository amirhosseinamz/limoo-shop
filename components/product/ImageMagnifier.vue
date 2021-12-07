<template>
  <div class="img-zoom-container" @mouseover="imageZoom">
    <div class="img-zoom-lens" ref="theLens"></div>
    <img ref="theImage"
         style="width: 100%;height: fit-content"
         :src="src"
         :image-class="imageClass"
         @click="imageClicked"
    >
    <div ref="theResult" class="img-zoom-result"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    imageClass: {
      type: String,
      require: false,
    }

  },
  data() {
    return {
      cx: null,
      cy: null,
    };
  },
  computed: {},
  methods: {
    imageZoom() {
      let _theImage = this.$refs.theImage;
      let _theResult = this.$refs.theResult;
      let lens = this.$refs.theLens;
      /*calculate the ratio between result DIV and lens:*/
      this.cx = _theResult.offsetWidth / lens.offsetWidth;
      this.cy = _theResult.offsetHeight / lens.offsetHeight;

      /*set background properties for the result DIV:*/
      _theResult.style.backgroundImage = "url('" + _theImage.src + "')";
      _theResult.style.backgroundSize = (_theImage.width * this.cx) + "px " + (_theImage.height * this.cy) + "px";
      /*execute a function when someone moves the cursor over the image, or the lens:*/
      lens.addEventListener("mousemove", this.moveLens);
      _theImage.addEventListener("mousemove", this.moveLens);
      /*and also for touch screens:*/
      lens.addEventListener("touchmove", this.moveLens);
      _theImage.addEventListener("touchmove", this.moveLens);
    },
    moveLens(e) {
      let _theImage = this.$refs.theImage;
      let _theResult = this.$refs.theResult;
      let lens = this.$refs.theLens;

      let pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = this.getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > _theImage.width - lens.offsetWidth) {
        x = _theImage.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > _theImage.height - lens.offsetHeight) {
        y = _theImage.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      _theResult.style.backgroundPosition = "-" + (x * this.cx) + "px -" + (y * this.cy) + "px";
    },
    getCursorPos(e) {
      let _theImage = this.$refs.theImage;
      let a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = _theImage.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    },
    imageClicked() {
      this.$emit('image-clicked');
    }
  },
  mounted() {
    //this.imageZoom();
  },
};
</script>

<style lang="scss" scoped>

.img-zoom-container {
  position: relative;
  .img-zoom-lens {
    display: none;
    position: absolute;
    /*set the size of the lens:*/
    width: toRem(200);
    height: toRem(200);
    background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif');
    cursor: pointer;
  }
  .img-zoom-result {
    display: none;
    width: toRem(500);
    height: toRem(500);
    position: absolute;
    top: toRem(-16);
    left: toRem(-510);
    box-shadow: 0 0 toRem(12) toRem(1) $gray-4;

    @include md {
      width: toRem(450);
      height: toRem(450);
      left: toRem(-460);
    }
  }
  &:hover {
    .img-zoom-lens {
      display: block;
    }
    .img-zoom-result {
      display: block;
    }
  }
}




</style>
