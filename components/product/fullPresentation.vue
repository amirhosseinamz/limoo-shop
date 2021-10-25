<template>
    <div class="presentation_content">
      <div class="title">
        بررسی کامل مک بوک پرو 16 اینچ رتینا با تاچ بار مدل MVVK2 2019 سری جدید
      </div>
      <div class="description">
        {{ this.description }}

        <div class="show-more">
          <div class="content" @click="showPresentationModal">
            مشاهده بیشتر
            <span class="icon"></span>
          </div>
        </div>
      </div>
      <div class="media">
        <div class="content">
<!--          <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c65eb3dec10e33f5356f1674cc01fa212102a51f_1634568953.jpg?x-oss-process=image/quality,q_80" alt="">-->
          <video class="video-player"
                 poster="https://www.digikala.com/mag/wp-content/uploads/2017/02/Huawei-P10-5-840x561.jpg"
                 preload="none"
                 ref="presentationVideo"
                 controls
                 @pause="videoPaused"
                 @play="videoPlayed">
            <source src="https://www.digikala.com/mag/wp-content/uploads/2017/02/p10.mp4" type="video/mp4">
            Your browser does not support the video tag.

          </video>
          <div class="control">
            <div class="play-btn play" id="play" @click="playVid" ref="playButton"></div>
          </div>

        </div>
      </div>
      <transition name="full-screen">
        <modal-presentation
          v-if="PresentationModalIsOpen"
          @close-modal="closePresentationModal"
        ></modal-presentation>
      </transition>
    </div>
</template>
<script>
// import contentHome from "~/components/Home/contentHome.vue";


import ModalPresentation from "./ModalPresentation";
export default {
  components: { ModalPresentation },
  data() {
      return {
        descriptionText: "مک بوک پرو نسل جدید کامپیوتر های همراه و حرفه ای شرکت اپل است که اولین مدل های آن در اواخر سال 2019 میلادی معرفی و آماده عرضه شدند.\n" +
          "اپل با کنار گذاشتن خط تولید مک بوک های 15 اینچی تصمیم گرفته که کامپیوتر های قدرتمند و البته با صفحه نمایش های بزرگ تر را تولید کند.\n" +
          "در حقیقت مک بوک 16 اینچ جایگزین مک بوک های 15 اینچی شده اند که دارای صفحه نمایش بزرگتر و قدرت پردازش قوی تر هستند.",
        windowWidth: 0,
        PresentationModalIsOpen: false
      };
    },
    computed: {
      description() {
        if (this.windowWidth > 520) {
          return this.descriptionText;
        } else {
          return this.add3Dots(this.descriptionText, 220);
        }
      }
    },
    methods: {
      showPresentationModal() {
        this.PresentationModalIsOpen = true;
      },
      closePresentationModal() {
        this.PresentationModalIsOpen = false;
      },
      playVid(){
        let myVideo = this.$refs.presentationVideo;
        let myPlayButton = this.$refs.playButton;
        console.log(myVideo.paused);
        if (myVideo.paused) {
          myVideo.play();
          myPlayButton.style.display = "none";
        } else {
          myVideo.pause();
          myPlayButton.style.display = "block";
        }
      },
      videoPaused() {
        let myPlayButton = this.$refs.playButton;
        myPlayButton.style.display = "block";
      },
      videoPlayed() {
        let myPlayButton = this.$refs.playButton;
        myPlayButton.style.display = "none";
      },
      add3Dots(string, limit)
      {
        let dots = "...";
        if(string.length > limit)
        {
          // you can also use substr instead of substring
          string = string.substring(0,limit) + dots;
        }

        return string;
      },
      handleResize() {
        this.windowWidth = window.innerWidth;
      }
    },
  mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  watch: {
    "this.$refs.presentationVideo.paused": function(val) {
      console.log(val);
    }
  }

};
</script>

<style lang="scss" scoped>
@include form-modal-animation();
    .presentation {
      &_content {
        padding-top: toRem(40);
        padding-bottom: toRem(72);
        @extend .d-flex;
        flex-direction: column;
        @include xs {
          padding-bottom: 0;
        }
        .title {
          font-size: toRem(18);
          color: $black-topic;
          margin-bottom: toRem(16);
          max-width: 90%;
          line-height: toRem(30);
          @include md {
            font-size: toRem(17);
          }
          @include xs {
            font-size: toRem(14);
          }
        }
        .description {
          font-size: toRem(16);
          color: $gray-3;
          line-height: toRem(35);
          max-width: 97%;
          padding-bottom: toRem(40);
          margin-bottom: toRem(24);
          @include md {
            font-size: toRem(15);
          }
          @include xs {
            font-size: toRem(14);
            color: $black-topic;
            margin-top: toRem(16);
            padding-bottom: 0;
            order: 2;
          }
          .show-more {
            display: none;
            align-items: center;
            justify-content: flex-end;
            margin-top: toRem(16);
            cursor: pointer;
            @include xs {
              @include display-flex();
            }
            .content {
              font-size: toRem(13);
              color: $gray-3;
              .icon {
                padding-right: toRem(5);
                padding-top: toRem(1);
                &::before {
                  content: "\e801";
                  @include font-icon__limoo();
                  color: $gray-3;
                  font-size: toRem(13);
                }
              }
            }
          }
        }
        .media {
          width: 100%;
          @extend .justify-center;
          .content {
            position: relative;
            width: 100%;
            @extend .justify-center;
            img,
            video {
              max-width: toRem(980);
              max-height: toRem(520);
              border-radius: toRem(10);
              width: 100%;
            }
            .play-btn {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: toRem(80);
              height: toRem(80);
              background-color: $gray-2;
              border-radius: 50%;
              cursor: pointer;
              opacity: 0.8;
              &::before {
                content: " ";
                position: absolute;
                display: inline-block;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: toRem(12) 0 toRem(12) toRem(20.8);
                border-color: transparent transparent transparent $gray-6;
                top: 50%;
                left: 54%;
                transform: translate(-50%, -50%);
                opacity: 0.8;
              }
            }
          }

          @include xs {
            order: 1;

          }
        }
      }

    }

</style>
