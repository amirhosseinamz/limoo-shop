<template>
  <!-- like and dislike -->
  <div class="like-dislike-wrapper d-flex w-100">
    <div class="dislike d-flex align-center" @click="dislike">
      <span class="number">{{ dislikeCounter }}</span>
      <sapn
        class="dislike-icon"
        :class="`${
          dislikeIconIsActive ? 'dislike-icon-clicked' : 'dislike-icon'
        }`"
      ></sapn>
    </div>
    <div class="vertical-line"></div>
    <div class="like d-flex align-center" @click="like()">
      <span class="number">{{ likeCounter }}</span>
      <span
        class="like-icon"
        :class="`${likeIconIsActive ? 'like-icon-clicked' : 'like-icon'}`"
      ></span>
    </div>
  </div>
  <!--end of like and dislike -->
</template>

<script>
export default {
  data() {
    return {
      likeIconIsActive: false,
      dislikeIconIsActive: false,
      likeCounter: 10,
      dislikeCounter: 10,
    };
  },
  methods:{
      like() {
      //  this.$store.dispatch("product/single/single/like", id);
      //   console.log(this.$store.dispatch("product/single/single/like"))
        // console.log(this.commentsData[id-1].likeCounter)

      
      this.likeIconIsActive = !this.likeIconIsActive;
      if (this.likeIconIsActive) {
        this.likeCounter++;
        this.dislikeIconIsActive = false;
        this.dislikeCounter--;
      } else {
        this.likeCounter--;
        this.dislikeIconIsActive = true;
        this.dislikeCounter++;
      }
    },
    dislike() {
      this.dislikeIconIsActive = !this.dislikeIconIsActive;
      if (this.dislikeIconIsActive) {
        this.likeIconIsActive = false;
        this.dislikeCounter++;
        this.likeCounter--;
      } else {
        this.dislikeCounter--;
        this.likeIconIsActive = true;
        this.likeCounter++;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.like-dislike-wrapper {
  justify-content: end;
  margin-top: toRem(20);
  margin-bottom: toRem(25.5);
  height: toRem(29.6);
  margin-left: toRem(24);
  @include sm {
    margin-left: toRem(14);
  }
  .dislike {
    cursor: pointer;
    .number {
      color: $red-logout;
      margin-left: toRem(8);
    }
    .dislike-icon {
      transform: rotate(180deg);
      &::before {
        content: "\e843";
        @include font-icon__limoo();
        font-size: toRem(23);
        color: $red-logout;
      }
    }
    .dislike-icon-clicked {
      &::before {
        content: "\e844";
        @include font-icon__limoo();
        font-size: toRem(20);
        color: $red-logout;
      }
    }
  }
  .vertical-line {
    height: toRem(24);
    width: 1px;
    background-color: $light-gray;
    margin-right: toRem(15);
    margin-left: toRem(16);
  }
  .like {
    width: toRem(45);
    cursor: pointer;
    .number {
      color: $green__answer;
      margin-left: toRem(8);
    }
    .like-icon {
      &::before {
        content: "\e843";
        @include font-icon__limoo();
        font-size: toRem(23);
        color: $green__answer;
      }
    }
    .like-icon-clicked {
      &::before {
        content: "\e844";
        @include font-icon__limoo();
        font-size: toRem(20);
        color: $green__answer;
      }
    }
  }
}
</style>
