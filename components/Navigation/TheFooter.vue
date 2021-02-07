<template>
    <div class="theFooter w-100 d-rtl">
          <div class="theFooter-wrapper">
                  <div class="w-100 theFooter-top">
                          <div class="theFooter-right">
                              <div class="theFooter-rightItems">
                                <div class="theFooter-rightLogo w-100">
                                  <img src="/logos/header-limoo.svg" alt="" class="logo-img">
                                </div>

                                <div class="theFooter-introductionContent w-100">
                                  <h3 class="theFooter-introductionTitle">
                                    لیمو نام بازاری است که در آن می توانید بی واسطه با تولید کننده ها
                                    یا فروشندگان مکالمه کنید، نظرات دیگران را بخوانید، محصول دلخواه تان را
                                    بخرید و بفروشید. در لیمو می توانید بی واسطه با تولید کننده یا فروشنده گان
                                    مکالمه کنید. نظرات دیگران را بخوانید.
                                  </h3>
                                </div>

                                <div class="w-100 theFooter-logoLicense">
                                  <a class="theFooter-licenseLink" href="https://www.digikala.com/?ref=nav_logo">
                                    <img class="theFooter__anjoman theFooter__licenseItem" src="/icons/anjoman-logo.svg" alt="">
                                  </a>
                                  <a class="theFooter-licenseLink" href="https://www.digikala.com/?ref=nav_logo">
                                    <img class="theFooter__samandehi theFooter__licenseItem" src="/icons/samandehi-1.svg" alt="">
                                  </a>
                                  <a class="theFooter-licenseLink" href="https://www.digikala.com/?ref=nav_logo">
                                    <img class="theFooter__namad theFooter__licenseItem" src="/icons/namad.svg" alt="">
                                  </a>
                                </div>

                              </div>
                              <span class="theFooter-Line"></span>
                            </div>

                          <div class="theFooter-left">
                            <ul class="theFooter-leftItems w-100">
                              <div class="theFooter-itemRight">
                                <h3 class="theFooter-itemText">دسترسی سریع</h3>
                                <li class="theFooter-leftItem w-100">
                                  <NuxtLink
                                  to="/"
                                  class="theFooter-itemLink"
                                  >
                                  <h3 class="theFooter-itemTitle">صفحه اصلی </h3>
                                </NuxtLink>
                              </li>
                              <li class="theFooter-leftItem w-100">
                                <h3 class="theFooter-itemTitle">قوانین و مقررات</h3>
                              </li>
                              <li class="theFooter-leftItem w-100">
                                <h3 class="theFooter-itemTitle">روند مرجوعی کالا </h3>
                              </li>
                              <li class="theFooter-leftItem w-100">
                                <h3 class="theFooter-itemTitle">ساخت فروشگاه در لیمو</h3>
                              </li>
                              <li  class="theFooter-leftItem w-100">
                                <h3 @click="goQuestions" class="theFooter-itemTitle">سوالات متداول </h3>
                              </li>
                              <li class="theFooter-leftItem w-100">
                                <h3 class="theFooter-itemTitle">حریم شخصی </h3>
                              </li>
                              <li class="theFooter-leftItem w-100">
                                <h3 class="theFooter-itemTitle">بازیابی حساب کاربری </h3>
                              </li>
                            </div>
                                <div class="theFooter-itemRight">
                                  <h3 class="theFooter-itemText">شبکه اجتماعی</h3>
                                  <li class="theFooter-leftItem w-100">
                                    <a href="#" class="theFooter-itemLink">
                                      <span class="theFooter__LeftIcon icon-instagram"></span>
                                      <h3 class="theFooter-itemTitle">اینستاگرام </h3>
                                    </a>
                                  </li>
                                  <li class="theFooter-leftItem w-100">
                                    <a href="#" class="theFooter-itemLink">
                                      <span class="theFooter__LeftIcon icon-telegram"></span>
                                      <h3 class="theFooter-itemTitle">کانال تلگرام</h3>
                                    </a>
                                  </li>
                                  <li class="theFooter-leftItem w-100">
                                    <a href="#" class="theFooter-itemLink">
                                      <span class="theFooter__LeftIcon icon-play"></span>
                                      <h3 class="theFooter-itemTitle">سرویس ویدیو </h3>
                                    </a>
                                  </li>
                                  <li class="theFooter-leftItem w-100">
                                    <a href="https://twitter.com/home" class="theFooter-itemLink">
                                      <span class="theFooter__LeftIcon icon-twitter"></span>
                                      <h3 class="theFooter-itemTitle">توییتر</h3>
                                    </a>
                                  </li>
                                  <li class="theFooter-leftItem w-100">
                                    <a href="https://www.aparat.com/" class="theFooter-itemLink">
                                      <span class="theFooter__LeftIcon icon-telegram"></span>
                                      <h3 class="theFooter-itemTitle">آپارات</h3>
                                    </a>
                                  </li>
                                </div>
                                <div class="theFooter-itemRight">
                                <h3 class="theFooter-itemText">پشتیبانی</h3>
                                <li class="theFooter-leftItem w-100 theFooter-phoneNumberMain">
                                  <div class="w-100 theFooter-leftPhone">
                                    <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">تلفن تماس :</h3>
                                    <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">021-85860000 </h3>
                                  </div>
                                </li>
                                <li class="theFooter-leftItem w-100">
                                  <h3 class="theFooter-itemTitle">ارسال تیکت فوری</h3>
                                </li>
                                <li class="theFooter-leftItem w-100">
                                  <h3 class="theFooter-itemTitle">پنل فروشندگان  </h3>
                                </li>
                                <li class="theFooter-leftItem w-100">
                                  <h3 class="theFooter-itemTitle">اطلاعات تماس</h3>
                                </li>
                                <li class="theFooter-leftItem w-100">
                                  <h3 class="theFooter-itemTitle">فرصت های شغلی  </h3>
                                </li>
                                <li class="theFooter-leftItem w-100">
                                  <h3 class="theFooter-itemTitle">مراجعی حضوری  </h3>
                                </li>
                              </div>
                            </ul>
                        </div>
                  </div>
          </div>

          <div class="w-100 theFooter-about">
              <div class="theFooter-aboutWrapper">
                    <div class="theFooter-aboutRight">
                      <h3 class="theFooter-aboutTitle">کلیه حقوق این سایت(فروشگاه لیمو) متعلق به شرکت پارس دیتا می باشد.</h3>
                    </div>

                    <div class="theFooter-aboutLeft">

                    </div>
              </div>
          </div>

    </div>
</template>

<script>
export default {
    name: "theFooter",
    components: {
    },

    data() {
        return {

        };
    },

    methods: {
      goQuestions(){
        const myElement = document.querySelector('.productContent__question');
        const topPos    = myElement.offsetTop;
        window.scroll({
          top: topPos - 200,
          left: 0,
          behavior: 'smooth'
        })
      }

    }

};
</script>

<style lang="scss" scoped>
  .theFooter{
    background: $white;
    padding-top: 44px;
    @include display-flex();
    flex-wrap: wrap;
    align-items: flex-start;
    border-bottom:solid 1px $light-gray;
  }
  .theFooter-right{
    width: 547px;
    align-items: flex-start;
    @include display-flex();
    position: relative;
  }
  .theFooter-left{
    @include display-flex();
    flex-grow: 1;
    align-items: flex-start;
    padding-right: 45px;
    padding-left: 45px;
  }
  .theFooter-Line{
    position: absolute;
    left: 0;
    top: 0;
    background: $gray-border;
    width: 1px;
    height: 100%;
  }
  .theFooter-rightItems{
    @include display-flex();
    align-items: flex-start;
    margin-top: 8px;
    flex-wrap: wrap;
    width: 465px;
    margin-left: 80px;
  }
  .theFooter-introductionTitle{
    font-size: 14px;
    font-weight: 400;
    color: #515151;
    line-height: 2.3em;
  }
  .logo-img{
    height: 59px;
  }
  .theFooter-rightLogo{
    @include display-flex();
    align-items: flex-start;
  }
  .theFooter-introductionContent{
    @include display-flex();
    align-items: flex-start;
    margin-top: 20px;
  }
  .theFooter-logoLicense{
    width: 100%;
    @include display-flex();
    align-items: flex-start;
    margin-top:  22px;
  }
  .theFooter-licenseLink{
    margin-left: 47px;
    @include display-flex();
  }
  .theFooter-licenseLink:last-of-type{
    margin-left: 0;
  }
  .theFooter-leftItems{
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .theFooter-itemText{
    color: $black-topic;
    font-weight: 500;
    margin-bottom: 38px;
    font-size: 16px;
  }
  .theFooter-itemRight{
    margin-left: 156px;
    flex-grow: 1;
  }
  .theFooter-leftItem{
    margin-bottom: 24px;
    font-size: 14px;
    list-style-type: none;
    @include display-flex();
    align-items: center;
  }
  .theFooter-itemTitle{
    color: $color_li_gray;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
  }
  .theFooter-itemRight:last-of-type{
    margin-left: 0;
  }
  .icon-telegram::after {
    content: "\e82a";
    @include font-icon__limoo();
    font-size: 15px;
    color: #666666;
  }
  .theFooter__LeftIcon{
    width: 19px;
    height: 19px;
    @include display-flex();
    align-items: center;
    margin-left: 8px;
  }
  .icon-instagram::after {
    content: "\e815";
    @include font-icon__limoo();
    font-size: 15px;
    color: #666666;
  }
  .icon-play::after {
    content: "\e820";
    @include font-icon__limoo();
    font-size: 15px;
    color: #666666;
  }
  .icon-twitter::after{
    content: "\e82f";
    @include font-icon__limoo();
    font-size: 15px;
    color: #666666;
  }
  .theFooter-itemLink{
    text-decoration: none;
    @include display-flex();
    text-decoration: none;
  }
  .theFooter-leftPhone{
    @include display-flex();
    align-items: flex-start;
    border-bottom: solid 2px $yellow;
    padding-bottom:8px;
  }
  .w-auto{
    width: auto;
  }
  .theFooter-titlePhone{
    margin-left: 5px;
  }
  .theFooter-phoneNumberMain{
    margin-bottom: 16px;
  }
  .theFooter-wrapper{
    width: 1394px;
    margin-right: auto;
    margin-left: auto;
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .theFooter-top{
    @include display-flex();
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 17px;
  }
  .theFooter-about{
    border-top: solid 1px $light-gray;
    padding-top: 26px;
    padding-bottom: 26px;
  }
  .theFooter-aboutWrapper{
    width: 1394px;
    margin-right: auto;
    margin-left: auto;
  }
  .theFooter-aboutTitle{
    font-size: 14px;
    color: $color-gray-footer;
  }


</style>
