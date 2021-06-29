<template>
  <div class="w-100 productContent-timer">
      <div class="w-100 productContent-timeText">
          <img class="productContent-timeIcon" src="/icons/Pomegranate.svg" alt="">
          <h3 class="productContent-festivalTitle">تخفیفات یلدایی</h3>
          <h3 class="productContent-timeTitle">زمان باقی مانده</h3>
      </div>

      <div class="w-100 productContent-timeContent">
          <div class="w-100 productContent-timerMain">

                <div class=" productContent-timerContent">
                    <div class="productContent-timerData">
                      <div class="w-100 d-flex">
                        <div class="productContent-timeItem">
                          <h3 class="productContent-timeText">{{counterDownHours[0]}}</h3>
                        </div>
                        <div class="productContent-timeItem">
                          <h3 class="productContent-timeText">{{counterDownHours[1]}}</h3>
                        </div>
                        <span class="productContent-circle">:</span>
                      </div>
                      <div class="w-100 d-flex">
                        <h3 class="productContent-timeLabel">{{getTextByTextKey('home_festival_hour')}}</h3>
                      </div>
                    </div>

                    <div class="productContent-timerData">
                      <div class="w-100 d-flex">
                        <div class="productContent-timeItem">
                          <h3 class="productContent-timeText">{{counterDownMinutes[0]}}</h3>
                        </div>
                        <div class="productContent-timeItem">
                          <h3 class="productContent-timeText">{{counterDownMinutes[1]}}</h3>
                        </div>
                        <span class="productContent-circle">:</span>
                      </div>
                      <div class="w-100 d-flex">
                        <h3 class="productContent-timeLabel">{{getTextByTextKey('home_festival_minutes')}}</h3>
                      </div>
                    </div>

                    <div class="productContent-timerData">
                      <div class="w-100 d-flex">
                        <div class="productContent-timeItem">
                          <h3 class="productContent-timeText">{{counterDownSecond[0]}}</h3>
                        </div>
                        <div class="productContent-timeItem">
                          <h3 class="productContent-timeText">{{counterDownSecond[1]}}</h3>
                        </div>
                      </div>
                      <div class="w-100 d-flex">
                        <h3 class="productContent-timeLabel">{{getTextByTextKey('home_festival_seconds')}}</h3>
                      </div>
                    </div>
                </div>

                <div class=" productContent-timeMobile">
                  <h3 class="productContent-timeMobileTitle">:زمان باقی مانده</h3>
                </div>

          </div>
          <div class="w-100 productContent-timerBtn">
            <base-button class="productContent-moreFestival" base-color="red" mode="secondary-outline">
              {{getTextByTextKey('home_festival_btn_text')}}
            </base-button>
          </div>
      </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";


export default {
    components: {
    },

    props: {
    },

    data() {
      return {
        counterDownHours   : [],
        counterDownMinutes : [],
        counterDownSecond  : [],
      }
    },


    created(){
    },

    mounted() {
      this.countdownFestival(25,21,16);
    },

    methods: {
      countdownFestival(hr,mm,ss){
        const interval = setInterval(()=>{
          if(hr == 0 && mm == 0 && ss == 0)clearInterval(interval);
          ss--;
          if(ss == 0)
          {
            ss = 59;
            mm--;
            if(mm == 0)
            {
              mm = 59;
              hr--;
            }
          }

          if(hr.toString().length < 2) hr = "0"+hr;
          if(mm.toString().length < 2) mm = "0"+mm;
          if(ss.toString().length < 2) ss = "0"+ss;

          // const mergeAllCounterDown   = hr+" : "+mm+" : "+ss;

          this.counterDownHours   = hr.toString().split('');
          this.counterDownMinutes = mm.toString().split('');
          this.counterDownSecond  = ss.toString().split('');
        },1000)
      },

      getTextByTextKey,



    },

};
</script>

<style lang="scss" scoped>
.productContent-timer{
  @include display-flex();
  align-items: flex-start;
  width: 100%;
  flex-flow: column;
}
.productContent-timeTitle{
  background: $red-color;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 20px;
  color: $white;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  width: 113px;
  margin-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
}
.productContent-festivalTitle{
  font-size: 18px;
  color: $color_festival;
  font-weight: 400;
  margin-bottom: 22px;
  margin-top: 16px;
  text-align: center;
}
.productContent-timeText{
  flex-flow: column;
  justify-content: center;
  @include display-flex();
}
.productContent-moreFestival{
  font-size: 14px!important;
  font-weight: 500;
  width: 190px;
  height: 47px;
  font-family: inherit;
}
.productContent-timerBtn{
  justify-content: center;
  @include display-flex();
  margin-top: 40px;
}
.productContent-timerMain{
  direction: ltr;
  @include display-flex();
  flex-wrap: wrap;
  justify-content: center;
}
.productContent-timeItem{
  width: 24px;
  height: 24px;
  background: $bg_festival_counrer_down;
  border-radius: 5px;
  text-align: center;
  margin-left: 1px;
  justify-content: center;
  align-items: center;
  @include display-flex();
}
.productContent-timeText{
  color: $red-color;
  font-size: 14px;
  font-weight: 400;
}
.productContent-timerData{
  @include display-flex();
  align-items: flex-start;
  margin-left: 4px;
  flex-flow: column;
}
.productContent-timeLabel{
  font-size: 14px;
  font-weight: 400;
  color: $gray;
  width: 100%;
  text-align: center;
  margin-top: 2px;
}
.productContent-timeIcon{
  width: 46px;
  height: 46px;
  margin-right: auto;
  margin-left: auto;
}
.productContent-circle{
  margin-left: 1px;
  display: none;
}
.productContent-timerContent{
  @include display-flex();
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.productContent-timeMobileTitle{
  font-size: 13px;
  color: $red-color;
  font-weight: 400;
}
.productContent-timeMobile{
  display: none;
  margin-left: 9px;
}
.d-flex{
  display: flex;
}


@media (max-width: 960px) {
    .productContent-timerBtn{
      display: none;
    }
    .productContent-timeTitle{
      display: none;
    }
    .productContent-timeLabel{
      display: none;
    }
    .productContent-timeText{
      flex-flow: wrap;
      width: auto;
      align-items: center;
    }
    .productContent-timeIcon{
      width: 21px;
      height: 21px;
    }
    .productContent-timeContent{
      width: auto;
      margin-top: 11px;
    }
    .productContent-festivalTitle{
      font-size: 16px;
      margin-top: 1px;
      margin-bottom: 0;
      margin-right: 6px;
      color: $color_festival_mobile;
    }
    .productContent-timerData{
      margin-left: 0;
      color: $red-color;
    }
    .productContent-circle{
      @include display-flex();
    }
    .productContent-timerMain{
      align-items: center;
    }
    .productContent-timeMobile{
      @include display-flex();
    }

}

@media (max-width: 960px) {
  .productContent-timeText{
    font-size: 13px;
  }
}

@media (max-width: 280px) {
  .productContent-timeMobileTitle{
    margin-top: 3px;
  }
}




</style>
