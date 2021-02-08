<template>
  <div class="theFooter w-100 d-rtl">

    <div class="w-100 theFooter-desktop">

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
                  <div class=" theFooter-leftPhone">
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
            <div class="theFooter-aboutBottomWrapper">
              <div class="theFooter-aboutRight">
                <h3 class="theFooter-aboutTitle">کلیه حقوق این سایت(فروشگاه لیمو) متعلق به شرکت پارس دیتا می باشد.</h3>
              </div>

              <div class="theFooter-aboutLeft">
                <div class="theFooter-aboutWallet">
                  <h3 class="theFooter-aboutTitle">کیف پول دایور</h3>
                  <span class="theFooter-aboutLine"></span>
                  <h3 class="theFooter-aboutTitle">پارس دیتا</h3>
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

                  <div :class="{'theFooter-activeAboutMore':limitedShow}" class="theFooter-WrapperItem">
                          <div class="theFooter-rightLogo w-100">
                            <img src="/logos/header-limoo.svg" alt="" class="logo-img">
                          </div>
                          <div  class="theFooter-introductionContent w-100">
                            <!-- <h3 class="theFooter-introductionTitle">
                              لیمو نام بازاری است که در آن می توانید بی واسطه با تولید کننده ها
                              یا فروشندگان مکالمه کنید، نظرات دیگران را بخوانید، محصول دلخواه تان را
                              بخرید و بفروشید. در لیمو می توانید بی واسطه با تولید کننده یا فروشنده گان
                              مکالمه کنید. نظرات دیگران را بخوانید.
                            </h3> -->
                            <h3  class="theFooter-introductionTitle theFooter-limited">
                              <span>
                                لیمو نام بازاری است که در آن می توانید بی واسطه با تولید کننده ها
                                یا فروشندگان مکالمه کنید، نظرات دیگران را بخوانید، محصول دلخواه تان
                                <span class="theFooter-circle">...</span>
                              </span>
                            </h3>
                            <h3  class="theFooter-introductionTitle theFooter-full">
                              لیمو نام بازاری است که در آن می توانید بی واسطه با تولید کننده ها
                              یا فروشندگان مکالمه کنید، نظرات دیگران را بخوانید، محصول دلخواه تان را
                              بخرید و بفروشید. در لیمو می توانید بی واسطه با تولید کننده یا فروشنده گان
                              مکالمه کنید. نظرات دیگران را بخوانید.
                            </h3>
                          </div>

                          <div @click="moreAbout" class="theFooter-moreContent w-100">
                            <h3 class="theFooter-moreTitle">بیشتر</h3>
                            <span class="mobile-inprogress__arrow"></span>
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

                  <div @click="goUpSite" class="w-100 theFooter-goUp">
                    <img class="theFooter-goUpArrow" src="/icons/arrow-more-footer.svg" alt="">
                    <h3 class="theFooter-goUpTitle">بازگشت به بالا</h3>
                  </div>

                  <div class="w-100 theFooter-about">
                      <div class="theFooter-aboutRight">
                        <h3 class="theFooter-aboutTitle theFooter-aboutColorChange">کلیه حقوق فروشگاه متعلق به پارس دیتا می باشد.</h3>
                      </div>

                      <div class="theFooter-aboutLeft">
                        <div class="theFooter-aboutWallet">
                          <h3 class="theFooter-aboutTitle">کیف پول دایور</h3>
                          <span class="theFooter-aboutLine"></span>
                          <h3 class="theFooter-aboutTitle">پارس دیتا</h3>
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
                <h3 class="theFooter-itemText">دسترسی سریع</h3>
              </div>

            <li class="theFooter-leftItem w-100">
              <h3 class="theFooter-itemTitle">قوانین و مقررات</h3>
            </li>

            <li class="theFooter-leftItem w-100">
              <h3 class="theFooter-itemTitle">تماس با ما پشتیبانی</h3>
            </li>

            <li class="theFooter-leftItem w-100">
              <h3 class="theFooter-itemTitle">روند عودت کالا </h3>
            </li>

            <li class="theFooter-leftItem w-100">
              <h3 class="theFooter-itemTitle">ایجاد فروشگاه در لیمو</h3>
            </li>

            <li  class="theFooter-leftItem w-100">
              <h3 @click="goQuestions" class="theFooter-itemTitle">سوالات متداول </h3>
            </li>
          </div>

          <div class="theFooter-itemRight">
              <div class="theFooter-itemRightTitle">
                <span class="theFooter-iconShare" alt=""></span>
                <h3 class="theFooter-itemText">لیمو در شبکه های اجتماعی</h3>
              </div>

                <li class="theFooter-leftItem w-100">
                  <a href="#" class="theFooter-itemLink">
                    <span class="theFooter__LeftIcon icon-instagram"></span>
                    <h3 class="theFooter-itemTitle">صفحه اینستاگرام </h3>
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
                    <h3 class="theFooter-itemTitle">آپارات نقد و بررسی ها</h3>
                  </a>
                </li>
          </div>

          <div class="theFooter-itemRight">
            <div class="theFooter-itemRightTitle">
              <span class="theFooter-iconPhone"></span>
              <h3 class="theFooter-itemText">پشتیبانی لیمو</h3>
            </div>

            <li class="theFooter-leftItem w-100 theFooter-phoneNumberMain">
              <div class=" theFooter-leftPhone">
                <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">تلفن تماس :</h3>
                <h3 class="theFooter-itemTitle w-auto theFooter-titlePhone">021-85860000 </h3>
              </div>
            </li>

            <li class="theFooter-leftItem w-100">
              <h3 class="theFooter-itemTitle">ارسال تیکت</h3>
            </li>

            <li class="theFooter-leftItem w-100">
              <h3 class="theFooter-itemTitle">پنل فروشندگان  </h3>
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
export default {
  name: "theFooter",
  components: {
  },

  data() {
    return {
      limitedShow : false,
    };
  },

  mounted() {
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
    },

    goUpSite(){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    },

    moreAbout(){
      if (this.limitedShow) {
        this.limitedShow = false;
      }
      else {
        this.limitedShow = true;
      }
    },

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
  padding-bottom:34px;
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
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-aboutTitle{
  font-size: 14px;
  color: $color-gray-footer;
  font-weight: 300;
}
.theFooter-aboutLeft{
  @include display-flex();
  align-items: flex-start;
}
.theFooter-aboutLine{
  @include display-flex();
  background: $color-gray;
  width: 2px;
  height: 23px;
  margin-right: 16px;
  margin-left: 16px;
}
.theFooter-aboutWallet{
  @include display-flex();
  align-items: flex-start;
  position: relative;
}
.theFooter-aboutRight{
  flex-grow: 1;
  @include display-flex();
}
.theFooter-aboutBottomWrapper{
  width: 1394px;
  margin-right: auto;
  margin-left: auto;
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-desktop{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-mobile{
  display: none;
  align-items: flex-start;
  flex-wrap: wrap;
}
.theFooter-iconAccess::after{
  @include font-icon__limoo();
  content:'\e805';
  color:$yellow;
  @include display-flex();
  margin-top: -6px;
  font-size: 16px;
}
.theFooter-itemRightTitle{
  @include display-flex();
  padding-right: 11px;
  align-items: center;
}
.theFooter-iconShare::after{
  @include font-icon__limoo();
  content:'\e832';
  color:$yellow;
  @include display-flex();
  font-size: 14px;
  margin-top: 1px;
}
.theFooter-iconPhone::after{
  @include font-icon__limoo();
  content:'\e81f';
  color:$yellow;
  @include display-flex();
  font-size: 16px;
  margin-top: 1px;
}
.theFooter-WrapperItem{
  padding-right: 11px;
  padding-left: 11px;
  padding-top: 14px;
  width: 100%;
}
.mobile-inprogress__arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 11px;
    margin-top: 1px;
    color: $gray;
}
.mobile-inprogress__arrow{
  margin-right: 7px;
  transform: rotate(274deg);
}
.theFooter-moreTitle{
  font-size: 13px;
  color: $gray;
  font-weight: 500;
}
.theFooter-moreContent{
  @include display-flex();
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}
.theFooter-goUp{
  @include display-flex();
  align-items: center;
  margin-top: 38px;
  height: 43px;
  border-top: solid 1px $gray-border;
  border-bottom: solid 1px $gray-border;
  margin-bottom: 24px;
}
.theFooter-goUpTitle{
  font-size: 13px;
  color: $gray;
  font-weight: 500;
}
.theFooter-moreArrow{
  margin-top: 3px;
}
.theFooter-goUpArrow{
  margin-right: 11px;
  margin-left: 7px;
}
.theFooter-aboutColorChange{
  color: $gray;
}
.theFooter-limited{
  display: flex;
}
.theFooter-full{
  display: none;
}
.theFooter-activeAboutMore .theFooter-full{
  @include display-flex();
}
.theFooter-activeAboutMore .theFooter-limited{
  display: none;
}
.theFooter-activeAboutMore .mobile-inprogress__arrow{
  transform: rotate(91deg);
}



@media (max-width: 1400px) {
  .theFooter-wrapper{
    width: 96%;
  }
  .theFooter-itemRight{
    margin-left: 17%;
  }
  .theFooter-aboutBottomWrapper{
    width: 96%;
  }
}

@media (max-width: 1300px) {
  .theFooter-introductionTitle{
    font-size: 13px;
  }
  .theFooter-itemRight{
    margin-left: auto;
  }
  .theFooter-left{
    padding-left: 0;
  }
}

@media (max-width: 1200px) {
  .theFooter__licenseItem{
    max-height: 120px;
  }
  .theFooter-right{
    width: 44%;
  }
  .theFooter-rightItems{
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .theFooter__licenseItem{
    max-height: 77px;
  }
  .theFooter-right{
    width: 38%;
  }
  .theFooter-left{
    padding-right: 26px;
  }

}

@media (max-width: 960px) {
  .theFooter-right{
    width: 100%;
    background: $white;
    border-radius: 10px;
    margin-top: 8px;
  }
  .theFooter{
    background: none;
    margin-top: 8px;
    padding-top: 0;
  }
  .theFooter-top{
    flex-flow: column-reverse;
    padding-bottom: 0;
  }
  .theFooter-left{
    width: 100%;
    padding-right:0;
    background: $white;
    border-radius: 10px;
  }
  .theFooter-leftPhone{
    width: auto;
  }
  .theFooter-itemRight{
    width: 100%;
    border-bottom: solid 1px $gray-border;
  }
  .theFooter-itemText{
    margin-bottom: 24px;
    margin-top: 24px;
    padding-right: 10px;
    padding-left: 10px;
  }
  .theFooter-leftItem{
    margin-bottom: 20px;
    padding-right: 11px;
    padding-left: 11px;
  }
  .theFooter-itemRight:nth-child(1) .theFooter-itemText{
    margin-top: 16px;
  }
  .theFooter__LeftIcon{
    display: none;
  }
  .theFooter-desktop{
    display: none;
  }
  .theFooter-mobile{
    @include display-flex();
  }
  .theFooter-leftPhone{
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .theFooter-titlePhone{
    color: $color-blue;
  }
  .theFooter-rightItems{
    padding-left: 0;
    margin-left: 0;
    margin-top: 0;
  }
  .theFooter__licenseItem{
    max-height: 88px;
  }
  .theFooter-logoLicense{
    justify-content: center;
    margin-top: 39px;
  }
  .theFooter-about{
    margin-bottom: 43px;
    padding-top: 0;
    border-top: none;
    padding-right: 11px;
    padding-left: 11px;
  }
  .theFooter-aboutLeft{
    margin-top: 11px;
  }
  .theFooter-aboutTitle{
    font-size: 13px;
  }
  .theFooter-licenseLink{
    margin-left: 24px;
  }
  .logo-img{
    max-height: 56px;
  }
  .theFooter-introductionTitle{
    // height: 77px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.9em;
    width: 100%;
  }



}


@media (max-width: 485px) {
  .theFooter__licenseItem{
    max-height: 80px;
  }
  .theFooter-licenseLink{
    margin-left: 16px;
  }
}

@media (max-width: 385px) {
  .theFooter-introductionTitle{
    width: 298px;
  }
}





</style>
