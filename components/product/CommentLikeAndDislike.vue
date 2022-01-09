<template>
  <!-- like and dislike -->
  <div class="like-dislike-wrapper">
    <div class="dislike" @click="dislike">
      <span class="number">{{ dislikeCounter }}</span>
      <span
        class="dislike-icon"
        :class="`${
          isDisliked ? 'dislike-icon-clicked' : 'dislike-icon'
        }`"
      ></span>
    </div>
    <div class="vertical-line"></div>
    <div class="like" @click="like()">
      <span class="number">{{ likeCounter }}</span>
      <span
        class="like-icon"
        :class="`${isLiked ? 'like-icon-clicked' : 'like-icon'}`"
      ></span>
    </div>
  </div>
  <!--end of like and dislike -->
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
      isDisliked: false,
      likeCounter: 10,
      dislikeCounter: 10,
    };
  },
  methods:{
      like() {
        if(!this.isLiked && !this.isDisliked){
          this.isLiked = !this.isLiked
          this.likeCounter++;
        }else if(this.isLiked && !this.isDisliked){
          this.isLiked = !this.isLiked;
          this.likeCounter--;
        }
        else if(!this.isLiked && this.isDisliked){
          this.isLiked = !this.isLiked;
          this.likeCounter++;
          this.dislikeCounter--;
          this.isDisliked = false;
        }
    },
    dislike() {
      if(!this.isLiked && !this.isDisliked){
          this.isDisliked = !this.isDisliked
          this.dislikeCounter++;
        }else if(this.isDisliked && !this.isLiked){
          this.isDisliked = !this.isDisliked;
          this.dislikeCounter--;
        }
        else if(this.isLiked && !this.isDisliked){
          this.isDisliked = !this.isDisliked;
          this.dislikeCounter++;
          this.likeCounter--;
          this.isLiked = false;
        }
    },
  }
};
</script>

<style lang="scss" scoped>
.like-dislike-wrapper {
  @include display-flex();
  width: 100%;
  justify-content: end;
  margin-top: toRem(20);
  margin-bottom: toRem(25.5);
  height: toRem(29.6);
  margin-left: toRem(24);
  @include sm {
    margin-left: toRem(14);
  }
  .dislike {
    @include display-flex();
    align-items: center;
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
    @include display-flex();
    align-items: center;
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
