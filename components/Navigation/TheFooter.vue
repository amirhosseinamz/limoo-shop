<template>
    <div class="theFooter w-100 d-rtl">

        <div class="theFooter-right">
            <div class="theFooter-rightItems">
                  <div class="theFooter-rightLogo w-100">
                      <img src="/logos/header-limoo.svg" alt="" class="logo-img">
                  </div>

                  <div class="theFooter-introductionContent w-100">
                      <h3 class="theFooter-introductionTitle">
                        ای اه‌هدننک‌دیلوت اب هطساو‌ یب دیناوت یم نآ رد هک تسا ‌یرازاب مان ومیل
                        ار نات‌هاوخلد لوصحم ،دیناوخب ار نارگید تارظن ،دینک هملاکم ناگدنشورف
                        ای اه‌هدننک‌دیلوت اب هطساو‌ یب دیناوت یم ومیل رد .دیشورفب و دیرخب
                        .دیناوخب ار نارگید تارظن ،دینک هملاکم ناگدنشورف
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
          left
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

    }

};
</script>

<style lang="scss" scoped>
  .theFooter{
    background: $white;
    padding-top: 17px;
    padding-bottom: 17px;
    height: 498px;
    @include display-flex();
    flex-wrap: wrap;
    align-items: flex-start;
    padding-right: 29px;
    padding-left: 29px;
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


</style>
