<template>
  <div class="theFooter w-100 d-rtl">
    <div class="w-100 theFooter-desktop">
      <div class="theFooter-wrapper">
        <div class="w-100 theFooter-top">
          <div class="theFooter-right">
            <div class="theFooter-rightItems">
              <div class="theFooter-rightLogo w-100">
                <img src="/logos/header-limoo.svg" alt="" class="logo-img" />
              </div>

              <div class="theFooter-introductionContent w-100">
                <h3 class="theFooter-introductionTitle">
                  {{ getTextByTextKey("footer_about_text") }}
                </h3>
              </div>

              <div class="w-100 theFooter-logoLicense">
                <a
                  class="theFooter-licenseLink"
                  href="https://www.digikala.com/?ref=nav_logo"
                >
                  <img
                    class="theFooter__anjoman theFooter__licenseItem"
                    src="/icons/anjoman-logo.svg"
                    alt=""
                  />
                </a>
                <a
                  class="theFooter-licenseLink"
                  href="https://www.digikala.com/?ref=nav_logo"
                >
                  <img
                    class="theFooter__samandehi theFooter__licenseItem"
                    src="/icons/samandehi-1.svg"
                    alt=""
                  />
                </a>
                <a
                  class="theFooter-licenseLink"
                  href="https://www.digikala.com/?ref=nav_logo"
                >
                  <img
                    class="theFooter__namad theFooter__licenseItem"
                    src="/icons/namad.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <span class="theFooter-Line"></span>
          </div>

          <div class="theFooter-left">
            <ul class="theFooter-leftItems w-100">
              <div class="theFooter-itemRight">
                <h3 class="theFooter-itemText">
                  {{ getTextByTextKey("footer_text_quick_access") }}
                </h3>
                <li class="theFooter-leftItem w-100">
                  <NuxtLink to="/" class="theFooter-itemLink">
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_main_page_text") }}
                    </h3>
                  </NuxtLink>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_rules_text") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_return_text") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_create_shop_text") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 @click="goQuestions" class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_ask_question_text") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_privacy") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_account_recovery") }}
                  </h3>
                </li>
              </div>
              <div class="theFooter-itemRight">
                <h3 class="theFooter-itemText">
                  {{ getTextByTextKey("footer_social_network") }}
                </h3>
                <li class="theFooter-leftItem w-100">
                  <a href="#" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-instagram"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_social_instagram") }}
                    </h3>
                  </a>
                </li>
                <li class="theFooter-leftItem w-100">
                  <a href="#" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-telegram"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_social_telegram") }}
                    </h3>
                  </a>
                </li>
                <li class="theFooter-leftItem w-100">
                  <a href="#" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-play"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_video_service") }}
                    </h3>
                  </a>
                </li>
                <li class="theFooter-leftItem w-100">
                  <a href="https://twitter.com/home" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-twitter"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_social_twitter") }}
                    </h3>
                  </a>
                </li>

                <li class="theFooter-leftItem w-100">
                  <a href="https://www.aparat.com/" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-telegram"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_social_aparat") }}
                    </h3>
                  </a>
                </li>
              </div>
              <div class="theFooter-itemRight">
                <h3 class="theFooter-itemText">
                  {{ getTextByTextKey("footer_support") }}
                </h3>
                <li class="theFooter-leftItem w-100 theFooter-phoneNumberMain">
                  <div class="theFooter-leftPhone">
                    <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">
                      {{ getTextByTextKey("footer_support_phone") }}
                    </h3>
                    <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">
                      {{ getTextByTextKey("footer_support_number") }}
                    </h3>
                  </div>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_support_send_ticket") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_support_seller_panel") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_support_info_number") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_job_opportunity") }}
                  </h3>
                </li>
                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_person_visit") }}
                  </h3>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-100 theFooter-about">
        <div class="theFooter-aboutBottomWrapper">
          <div class="theFooter-aboutRight">
            <h3 class="theFooter-aboutTitle">
              {{ getTextByTextKey("footer_licence") }}
            </h3>
          </div>

          <div class="theFooter-aboutLeft">
            <div class="theFooter-aboutWallet">
              <h3 class="theFooter-aboutTitle">
                {{ getTextByTextKey("footer_licence_wallet") }}
              </h3>
              <span class="theFooter-aboutLine"></span>
              <h3 class="theFooter-aboutTitle">
                {{ getTextByTextKey("footer_licence_company") }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-100 theFooter-mobile">
      <div class="theFooter-wrapper">
        <div class="w-100 theFooter-top">
          <div class="theFooter-right">
            <div class="theFooter-rightItems">
              <div
                :class="{
                  'theFooter-activeAboutMore': limitedShow,
                }"
                class="theFooter-WrapperItem"
              >
                <div class="theFooter-rightLogo w-100">
                  <img src="/logos/header-limoo.svg" alt="" class="logo-img" />
                </div>
                <div class="theFooter-introductionContent w-100">
                  <h3 class="theFooter-introductionTitle theFooter-limited">
                    <span>
                      {{ getTextByTextKey("footer_mobile_about_limited") }}
                      <span class="theFooter-circle">...</span>
                    </span>
                  </h3>

                  <h3 class="theFooter-introductionTitle theFooter-full">
                    {{ getTextByTextKey("footer_mobile_about_full") }}
                  </h3>
                </div>

                <div @click="moreAbout" class="theFooter-moreContent w-100">
                  <h3 class="theFooter-moreTitle">
                    {{ getTextByTextKey("footer_more_about") }}
                  </h3>
                  <span class="mobile-inprogress__arrow"></span>
                </div>

                <div class="w-100 theFooter-logoLicense">
                  <a
                    class="theFooter-licenseLink"
                    href="https://www.digikala.com/?ref=nav_logo"
                  >
                    <img
                      class="theFooter__anjoman theFooter__licenseItem"
                      src="/icons/anjoman-logo.svg"
                      alt=""
                    />
                  </a>
                  <a
                    class="theFooter-licenseLink"
                    href="https://www.digikala.com/?ref=nav_logo"
                  >
                    <img
                      class="theFooter__samandehi theFooter__licenseItem"
                      src="/icons/samandehi-1.svg"
                      alt=""
                    />
                  </a>
                  <a
                    class="theFooter-licenseLink"
                    href="https://www.digikala.com/?ref=nav_logo"
                  >
                    <img
                      class="theFooter__namad theFooter__licenseItem"
                      src="/icons/namad.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div @click="goUpSite" class="w-100 theFooter-goUp">
                <img
                  class="theFooter-goUpArrow"
                  src="/icons/arrow-more-footer.svg"
                  alt=""
                />
                <h3 class="theFooter-goUpTitle">
                  {{ getTextByTextKey("footer_go_up") }}
                </h3>
              </div>

              <div class="w-100 theFooter-about">
                <div class="theFooter-aboutRight">
                  <h3 class="theFooter-aboutTitle">
                    {{ getTextByTextKey("footer_licence") }}
                  </h3>
                </div>

                <div class="theFooter-aboutLeft">
                  <div class="theFooter-aboutWallet">
                    <h3 class="theFooter-aboutTitle">
                      {{ getTextByTextKey("footer_licence_wallet") }}
                    </h3>
                    <span class="theFooter-aboutLine"></span>
                    <h3 class="theFooter-aboutTitle">
                      {{ getTextByTextKey("footer_licence_company") }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <span class="theFooter-Line"></span>
          </div>

          <div class="theFooter-left">
            <ul class="theFooter-leftItems w-100">
              <div class="theFooter-itemRight">
                <div class="theFooter-itemRightTitle">
                  <span class="theFooter-iconAccess" alt=""></span>
                  <h3 class="theFooter-itemText">
                    {{ getTextByTextKey("footer_text_quick_access") }}
                  </h3>
                </div>

                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_text_quick_access") }}
                  </h3>
                </li>

                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_call_support") }}
                  </h3>
                </li>

                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_return_mobile") }}
                  </h3>
                </li>

                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_create_shop_text") }}
                  </h3>
                </li>

                <li class="theFooter-leftItem w-100">
                  <h3 @click="goQuestions" class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_ask_question_text") }}
                  </h3>
                </li>
              </div>

              <div class="theFooter-itemRight">
                <div class="theFooter-itemRightTitle">
                  <span class="theFooter-iconShare" alt=""></span>
                  <h3 class="theFooter-itemText">
                    {{ getTextByTextKey("footer_social_network") }}
                  </h3>
                </div>

                <li class="theFooter-leftItem w-100">
                  <a href="#" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-instagram"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_social_instagram") }}
                    </h3>
                  </a>
                </li>
                <li class="theFooter-leftItem w-100">
                  <a href="#" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-telegram"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_social_telegram") }}
                    </h3>
                  </a>
                </li>
                <li class="theFooter-leftItem w-100">
                  <a href="#" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-play"></span>
                    <h3 class="theFooter-itemTitle">
                      {{ getTextByTextKey("footer_social_aparat") }}
                    </h3>
                  </a>
                </li>
              </div>

              <div class="theFooter-itemRight">
                <div class="theFooter-itemRightTitle">
                  <span class="theFooter-iconPhone"></span>
                  <h3 class="theFooter-itemText">
                    {{ getTextByTextKey("footer_support") }}
                  </h3>
                </div>

                <li class="theFooter-leftItem w-100 theFooter-phoneNumberMain">
                  <div class="theFooter-leftPhone">
                    <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">
                      {{ getTextByTextKey("footer_support_phone") }}
                    </h3>
                    <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">
                      {{ getTextByTextKey("footer_support_number") }}
                    </h3>
                  </div>
                </li>

                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_support_send_ticket") }}
                  </h3>
                </li>

                <li class="theFooter-leftItem w-100">
                  <h3 class="theFooter-itemTitle">
                    {{ getTextByTextKey("footer_support_seller_panel") }}
                  </h3>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  name: "theFooter",
  components: {},

  data() {
    return {
      limitedShow: false,
    };
  },

  created() {},

  watch: {},

  methods: {
    goQuestions() {
      const myElement = document.querySelector(".productContent__question");
      const topPos = myElement.offsetTop;
      window.scroll({
        top: topPos - 200,
        left: 0,
        behavior: "smooth",
      });
    },

    goUpSite() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },

    moreAbout() {
      if (this.limitedShow) {
        this.limitedShow = false;
      } else {
        this.limitedShow = true;
      }
    },

    getTextByTextKey,
  },
};
</script>

<style lang="scss" scoped>
.theFooter {
  background: $white;
  padding-top: toRem(44);
  padding-right: 1rem;
  padding-left: 1rem;
  @include display-flex();
  flex-wrap: wrap;
  align-items: flex-start;
  border-bottom: solid toRem(1) $light-gray;
}
.theFooter-right {
  width: toRem(547);
  align-items: flex-start;
  @include display-flex();
  position: relative;
}
.theFooter-left {
  @include display-flex();
  flex-grow: 1;
  align-items: flex-start;
  padding-right: toRem(45);
}
.theFooter-Line {
  position: absolute;
  left: 0;
  top: 0;
  background: $gray-border;
  width: toRem(1);
  height: 100%;
}
.theFooter-rightItems {
  @include display-flex();
  align-items: flex-start;
  margin-top: toRem(8);
  flex-wrap: wrap;
  width: toRem(465);
  margin-left: toRem(80);
}
.theFooter-introductionTitle {
  font-size: toRem(14);
  font-weight: 400;
  color: #515151;
  line-height: 2.3em;
  text-align: justify;
}
.logo-img {
  height: toRem(59);
}
.theFooter-rightLogo {
  @include display-flex();
  align-items: flex-start;
}
.theFooter-introductionContent {
  @include display-flex();
  align-items: flex-start;
  margin-top: toRem(20);
}
.theFooter-logoLicense {
  width: 100%;
  @include display-flex();
  align-items: flex-start;
  margin-top: toRem(22);
}
.theFooter-licenseLink {
  margin-left: toRem(47);
  @include display-flex();
}
.theFooter-licenseLink:last-of-type {
  margin-left: 0;
}
.theFooter-leftItems {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}
.theFooter-itemText {
  color: $black-topic;
  font-weight: 500;
  margin-bottom: toRem(38);
  font-size: toRem(16);
}
.theFooter-leftItem {
  margin-bottom: toRem(24);
  font-size: toRem(14);
  list-style-type: none;
  @include display-flex();
  align-items: center;
}
.theFooter-itemTitle {
  color: $color_li_gray;
  font-size: toRem(14);
  font-weight: 500;
  cursor: pointer;
  width: 100%;
}
.theFooter-itemRight:last-of-type {
  margin-left: 0;
}
.icon-telegram::after {
  content: "\e82a";
  @include font-icon__limoo();
  font-size: toRem(15);
  color: #666666;
}
.theFooter__LeftIcon {
  width: toRem(19);
  height: toRem(19);
  @include display-flex();
  align-items: center;
  margin-left: toRem(8);
}
.icon-instagram::after {
  content: "\e815";
  @include font-icon__limoo();
  font-size: toRem(15);
  color: #666666;
}
.icon-play::after {
  content: "\e820";
  @include font-icon__limoo();
  font-size: toRem(15);
  color: #666666;
}
.icon-twitter::after {
  content: "\e82f";
  @include font-icon__limoo();
  font-size: toRem(15);
  color: #666666;
}
.theFooter-itemLink {
  text-decoration: none;
  @include display-flex();
}
.theFooter-leftPhone {
  @include display-flex();
  align-items: flex-start;
  border-bottom: solid toRem(2) $yellow;
  padding-bottom: toRem(8);
}
.w-auto {
  width: auto;
}
.theFooter-titlePhone {
  margin-left: toRem(5);
}
.theFooter-phoneNumberMain {
  margin-bottom: toRem(16);
}
.theFooter-wrapper {
  width: toRem(1394);
  margin-right: auto;
  margin-left: auto;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-top {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  padding-bottom: toRem(34);
}
.theFooter-about {
  border-top: solid toRem(1) $light-gray;
  padding-top: toRem(26);
  padding-bottom: toRem(26);
}
.theFooter-aboutWrapper {
  width: toRem(1394);
  margin-right: auto;
  margin-left: auto;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-aboutTitle {
  font-size: toRem(14);
  color: $color-gray-footer;
  font-weight: 300;
}
.theFooter-aboutLeft {
  @include display-flex();
  align-items: flex-start;
}
.theFooter-aboutLine {
  @include display-flex();
  background: $color-gray;
  width: toRem(2);
  height: toRem(23);
  margin-right: toRem(16);
  margin-left: toRem(16);
}
.theFooter-aboutWallet {
  @include display-flex();
  align-items: flex-start;
  position: relative;
}
.theFooter-aboutRight {
  flex-grow: 1;
  @include display-flex();
}
.theFooter-aboutBottomWrapper {
  width: toRem(1394);
  margin-right: auto;
  margin-left: auto;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-desktop {
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-mobile {
  display: none;
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-iconAccess::after {
  @include font-icon__limoo();
  content: "\e805";
  color: $yellow;
  @include display-flex();
  margin-top: toRem(-6);
  font-size: toRem(16);
}
.theFooter-itemRightTitle {
  @include display-flex();
  padding-right: toRem(11);
  align-items: center;
}
.theFooter-iconShare::after {
  @include font-icon__limoo();
  content: "\e832";
  color: $yellow;
  @include display-flex();
  font-size: toRem(14);
  margin-top: toRem(1);
}
.theFooter-iconPhone::after {
  @include font-icon__limoo();
  content: "\e81f";
  color: $yellow;
  @include display-flex();
  font-size: toRem(16);
  margin-top: toRem(1);
}
.theFooter-WrapperItem {
  padding-right: toRem(11);
  padding-left: toRem(11);
  padding-top: toRem(14);
  width: 100%;
}
.mobile-inprogress__arrow::after {
  content: "\e801";
  @include font-icon__limoo();
  font-size: toRem(11);
  margin-top: toRem(1);
  color: $gray;
}
.mobile-inprogress__arrow {
  margin-right: toRem(7);
  transform: rotate(274deg);
}
.theFooter-moreTitle {
  font-size: toRem(13);
  color: $gray;
  font-weight: 500;
}
.theFooter-moreContent {
  @include display-flex();
  align-items: center;
  justify-content: center;
  margin-top: toRem(4);
}
.theFooter-goUp {
  @include display-flex();
  align-items: center;
  margin-top: toRem(38);
  height: toRem(43);
  border-top: solid toRem(1) $gray-border;
  border-bottom: solid toRem(1) $gray-border;
  margin-bottom: toRem(24);
}
.theFooter-goUpTitle {
  font-size: toRem(13);
  color: $gray;
  font-weight: 500;
}
.theFooter-moreArrow {
  margin-top: toRem(3);
}
.theFooter-goUpArrow {
  margin-right: toRem(11);
  margin-left: toRem(7);
}
.theFooter-aboutColorChange {
  color: $gray;
}
.theFooter-limited {
  display: flex;
}
.theFooter-full {
  display: none;
}
.theFooter-activeAboutMore .theFooter-full {
  @include display-flex();
}
.theFooter-activeAboutMore .theFooter-limited {
  display: none;
}
.theFooter-activeAboutMore .mobile-inprogress__arrow {
  transform: rotate(91deg);
}

@include xl {
  .theFooter-wrapper {
    width: 100%;
    padding-right: toRem(24);
    padding-left: toRem(24);
  }
  .theFooter-aboutBottomWrapper {
    width: 96%;
  }
  .theFooter__licenseItem {
    max-height: toRem(100);
  }
  .theFooter-right {
    width: 44%;
  }
  .theFooter-rightItems {
    width: 100%;
  }
}

@include lg {
  .theFooter__licenseItem {
    max-height: toRem(75);
  }
  .theFooter-right {
    width: 38%;
  }
  .theFooter-left {
    padding-right: toRem(26);
  }
  .theFooter-introductionTitle {
    font-size: toRem(13);
  }
  .theFooter-left {
    padding-left: 0;
  }
}

@include md {
  .theFooter-right {
    width: 100%;
    background: $white;
    border-radius: toRem(10);
    margin-top: 8px;
  }
  .theFooter {
    background: none;
    margin-top: toRem(8);
    padding-top: 0;
  }
  .theFooter-top {
    flex-flow: column-reverse;
    padding-bottom: 0;
  }
  .theFooter-left {
    width: 100%;
    padding-right: 0;
    background: $white;
    border-radius: toRem(10);
  }
  .theFooter-leftPhone {
    width: auto;
  }
  .theFooter-itemRight {
    width: 100%;
    border-bottom: solid toRem(1) $gray-border;
  }
  .theFooter-itemText {
    margin-bottom: toRem(24);
    margin-top: toRem(24);
    padding-right: toRem(10);
    padding-left: toRem(10);
  }
  .theFooter-leftItem {
    margin-bottom: toRem(20);
    padding-right: toRem(11);
    padding-left: toRem(11);
  }
  .theFooter-itemRight:nth-child(1) .theFooter-itemText {
    margin-top: toRem(16);
  }
  .theFooter__LeftIcon {
    display: none;
  }
  .theFooter-desktop {
    display: none;
  }
  .theFooter-mobile {
    @include display-flex();
  }
  .theFooter-leftPhone {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .theFooter-titlePhone {
    color: $color-blue;
  }
  .theFooter-rightItems {
    padding-left: 0;
    margin-left: 0;
    margin-top: 0;
  }
  .theFooter__licenseItem {
    max-height: 88px;
  }
  .theFooter-logoLicense {
    justify-content: center;
    margin-top: toRem(39);
    overflow-x: scroll;
  }
  .theFooter-about {
    margin-bottom: toRem(43);
    padding-top: 0;
    border-top: none;
    padding-right: toRem(11);
    padding-left: toRem(11);
  }
  .theFooter-aboutLeft {
    margin-top: toRem(11);
  }
  .theFooter-aboutTitle {
    font-size: toRem(13);
  }
  .theFooter-licenseLink {
    margin-left: toRem(24);
  }
  .logo-img {
    max-height: toRem(56);
  }
  .theFooter-introductionTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.9em;
    width: 100%;
  }
}

@include xs {
  .theFooter__licenseItem {
    max-height: toRem(80);
  }
  .theFooter-licenseLink {
    margin-left: toRem(16);
  }
  .theFooter-wrapper {
    padding-right: toRem(11);
    padding-left: toRem(11);
  }
}

@include xxs {
  .theFooter-introductionTitle {
    width: toRem(298);
  }
}
</style>
