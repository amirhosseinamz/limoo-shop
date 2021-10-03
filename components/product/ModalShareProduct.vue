<template>
  <base-modal
    class="modal-container"
    :mode="modalMode"
    modal-class="modal"
    @close-modal="closeModal"
  >
    <div class="header">
      <span class="header-title-desktop">
        اشتراک گذاری محصول با دوستان
      </span>
      <span class="header-title-mobile">
        اشتراک گذاری با دوستان
      </span>
      <span class="header-close-icon" @click="closeModal"></span>
    </div>
    <div class="divider-line"></div>
    <div class="modal-body">
      <div class="content-txt">
        شما می توانید این محصول را از طریق شبکه های اجتماعی زیر با دوستان خود به اشتراک بگذارید:
      </div>
      <div class="social-media">
        <div class="social-media-item instagram">
          <a href="#">
            <span class="icon"></span>
            اینستاگرام
          </a>
        </div>
        <div class="social-media-item telegram">
          <a href="#">
            <span class="icon"></span>
            تلگرام
          </a>
        </div>
        <div class="social-media-item whatsapp">
          <a href="#">
            <span class="icon"></span>
            واتساپ
          </a>
        </div>
        <div class="social-media-item twitter">
          <a href="#">
            <span class="icon"></span>
            توییتر
          </a>
        </div>
        <div class="social-media-item aparat">
          <a href="#">
            <span class="icon"></span>
            آپارات
          </a>
        </div>
      </div>
      <div class="share-link-txt">
        لینک اشتراک گذاری محصول با دوستان:
      </div>
      <div class="copy-link">
        <base-button
          @button-clicked="copyLink('localhost:3000/product/1432')"
          classes="copy-link-btn"
          base-color="yellow"
          no-box-shadow
        >
          کپی کردن لینک
        </base-button>
        <textarea ref="copy" name="copy" class="copy-link-textarea" cols="30" rows="10"></textarea>
        <transition>
          <div class="copy-link-message" :class="{ 'show-message': showMessage }" v-if="showMessage">
            <span class="icon"></span>
            لینک کپی شد
          </div>
        </transition>
      </div>
    </div>
  </base-modal>
</template>

<script>
export default {
  name: "ModalShareProduct",
  props: {
    modalMode: {type: String, require: true}
  },
  data() {
    return {
      showMessage: false
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    copyLink(url) {
      let _textarea = this.$refs.copy;
      _textarea.value = url;
      _textarea.select();
      document.execCommand("copy");
      this.showMessage = true;
    }
  }
};
</script>

<style lang="scss" scoped>
 .modal-container::v-deep {
   .modal {
     width: toRem(642);
     padding: toRem(24);
     background-color: $white;
     border-radius: toRem(15);
     @include sm {
       width: 90%;
     }

     .header {
       @extend .align-center;
       justify-content: space-between;
       &-title {
         &-desktop {
           font-size: toRem(18);
           color: $black;
           @include xs {
             display: none;
           }
         }
         &-mobile {
           display: none;
           @include xs {
             display: block;
             font-size: toRem(14);
             color: $black;
           }
         }
       }
       &-close-icon {
         &::before {
           content: "\e807";
           @include font-icon__limoo();
           font-size: toRem(25);
           color: $gray-4;
           cursor: pointer;
           @include xs {
             content: "\e801";
             color: $gray-3;
             font-size: toRem(20);
           }
         }
       }
     }
     .divider-line {
       position: relative;
       margin-bottom: toRem(40);
       &::before {
         content: " ";
         position: absolute;
         height: toRem(1);
         width: 87%;
         background-color: $gray-6;
         bottom: toRem(-16);
         @include xs {
           width: 120%;
           right: toRem(-25);
         }
       }
     }
     .modal-body {
       .content-txt {
         font-size: toRem(16);
         color: $black-topic;
         max-width: 85%;
         line-height: 190%;
         margin-bottom: toRem(24);
         @include xs {
           font-size: toRem(14);
           color: $gray-2;
           max-width: 100%;
           margin-bottom: toRem(8);
         }
       }
       .social-media {
         @extend .align-center;
         flex-wrap: wrap;
         margin-bottom: toRem(67);
         @include xs {
           flex-direction: column;
           align-items: flex-start;
           margin-bottom: toRem(16);
         }
         &-item {
           padding: toRem(11) toRem(8) toRem(11) toRem(18);
           border: toRem(1) solid $gray-5;
           border-radius: toRem(10);
           margin-left: toRem(16);
           margin-bottom: toRem(10);
           @include xs {
             border: none;
             border-radius: 0;
             border-bottom: toRem(1) solid $gray-5;
             margin-bottom: 0;
             padding: 1rem 0;
             width: 100%;
             &:last-child {
               border: none;
             }
           }

           a {
             @extend .align-center;
             font-size: toRem(14);
             color: $gray-2;
           }
           &.instagram {
             .icon {
               &::before {
                 content: "\e815";
                 @include font-icon__limoo();
                 color: #9635E1;
                 font-size: toRem(19);
                 margin-left: toRem(8);
               }
             }
           }
           &.telegram {
             .icon {
               &::before {
                 content: "\e82a";
                 @include font-icon__limoo();
                 color: #0085FF;
                 font-size: toRem(17);
                 margin-left: toRem(8);
               }
             }
           }
           &.whatsapp {
             .icon {
               &::before {
                 content: "\e82a";
                 @include font-icon__limoo();
                 color: #0085FF;
                 font-size: toRem(17);
                 margin-left: toRem(8);
               }
             }
           }
           &.twitter {
             .icon {
               &::before {
                 content: "\e82f";
                 @include font-icon__limoo();
                 color: #228BEC;
                 font-size: toRem(17);
                 margin-left: toRem(8);
               }
             }
           }
           &.aparat {
             .icon {
               &::before {
                 content: "\e815";
                 @include font-icon__limoo();
                 color: #9635E1;
                 font-size: toRem(19);
                 margin-left: toRem(8);
               }
             }
           }
         }
       }
       .share-link-txt {
         font-size: toRem(16);
         color: $black;
         margin-bottom: toRem(24);
         @include xs {
           font-size: toRem(14);
         }
       }
       .copy-link {
         @extend .align-center;
         &-btn {
           width: toRem(155);
           height: toRem(47);
           font-size: toRem(14);
           border-radius: toRem(10);
         }
         &-message {
           &.show-message {
             @extend .align-center;
             margin-right: toRem(16);
             font-size: toRem(14);
             color: $green__answer;
             .icon {
               &::before {
                 content: "\e831";
                 @include font-icon__limoo();
                 font-size: toRem(18);
                 margin-left: toRem(8);
               }
             }
           }
         }
         &-textarea {
           display: none;
         }
       }
       .v-leave-to,
       .v-enter {
         opacity: 0;
       }

       .v-enter-active,
       .v-leave-active {
         transition: all 0.2s ease-out;
       }
       .v-leave-to,
       .v-enter-from {
         opacity: 1;
       }
     }
   }
 }
</style>
