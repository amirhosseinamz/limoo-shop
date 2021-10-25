<template>
  <base-modal
    class="modal-container"
    mode="full-screen"
    modal-class="modal"
    @close-modal="closeModal"
  >
    <div class="header">
      <span class="header-title">
        معرفی کامل محصول
      </span>
      <span class="header-close-icon" @click="closeModal"></span>
    </div>
    <div class="header-divider-line"></div>
    <div class="modal-body">
      <div class="title">
        بررسی کامل مک بوک پرو 16 اینچ رتینا با تاچ بار مدل MVVK2 2019 سری جدید
      </div>
      <div class="media">
        <div class="content">
          <!--<img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c65eb3dec10e33f5356f1674cc01fa212102a51f_1634568953.jpg?x-oss-process=image/quality,q_80" alt="">-->
          <video
            poster="https://www.digikala.com/mag/wp-content/uploads/2017/02/Huawei-P10-5-840x561.jpg"
            preload="none"
            ref="presentationVideo"
            @pause="videoPaused"
            @play="videoPlayed"
            controls>
            <source src="https://www.digikala.com/mag/wp-content/uploads/2017/02/p10.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="control">
            <div class="play-btn play" id="play" @click="playVid" ref="playButton"></div>
          </div>
        </div>
      </div>
      <div class="description">
        {{ this.descriptionText }}
      </div>
    </div>
  </base-modal>
</template>

<script>
export default {
  name: "ModalPresentation",
  data() {
    return {
      descriptionText: "مک بوک پرو نسل جدید کامپیوتر های همراه و حرفه ای شرکت اپل است که اولین مدل های آن در اواخر سال 2019 میلادی معرفی و آماده عرضه شدند.\n" +
        "اپل با کنار گذاشتن خط تولید مک بوک های 15 اینچی تصمیم گرفته که کامپیوتر های قدرتمند و البته با صفحه نمایش های بزرگ تر را تولید کند.\n" +
        "در حقیقت مک بوک 16 اینچ جایگزین مک بوک های 15 اینچی شده اند که دارای صفحه نمایش بزرگتر و قدرت پردازش قوی تر هستند.",

    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
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
  }
};
</script>

<style lang="scss" scoped>
  .modal-container::v-deep {
    .modal {
      background-color: $white;
      overflow-y: scroll;
      padding: toRem(16) toRem(16);
      .header {
        @extend .align-center;
        justify-content: space-between;

        &-title {

        }

        &-close-icon {
          &::before {
            content: "\e801";
            color: $gray-3;
            font-size: toRem(20);
            @include font-icon__limoo();
            cursor: pointer;
          }
        }
      }

      .header-divider-line {
        position: relative;
        margin-bottom: toRem(40);

        &::before {
          content: " ";
          position: absolute;
          height: toRem(1);
          width: 120%;
          right: toRem(-25);
          background-color: $gray-6;
          bottom: toRem(-16);
        }
      }
      .modal-body {
        @extend .d-flex;
        flex-direction: column;

        .title {
          font-size: toRem(14);
          color: $black-topic;
          margin-bottom: toRem(16);
          max-width: 90%;
          line-height: toRem(30);
        }
        .description {
          font-size: toRem(13);
          color: $black-topic;
          line-height: toRem(35);
          margin-bottom: toRem(24);
          margin-top: toRem(16);
        }
        .media {
          width: 100%;
          @extend .justify-center;
          .content {
            width: 100%;
            @extend .justify-center;
            position: relative;
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
        }
      }
    }
  }
</style>
