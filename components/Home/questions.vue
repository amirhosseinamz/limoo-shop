<template>
  <div class="w-100 productContent__sliderWrapper">
      <div class="w-100 productContent__catTop">
          <div class="productContent__topRight ">
              <h3 class="w-100 productContent__catTitle">سوالات متداول </h3>
          </div>

          <div class=" productContent__sliderMore productContent__topLeft">
              <nuxt-link class="productContent__moreItem" to="/test">
                لیست کامل محصولات
                <span class=" productContent__moreIcon mobile-inprogress__arrow"></span>
              </nuxt-link>
          </div>
      </div>

      <div class="w-100 productContent__questionData">
          <div class="productContent__questionItems w-100">
                <div :class="{'active-question':data.active}" @click="showQuestion(data)" v-for="data in allQuestion" :key="data.id"  class="productContent__questionItem w-100">
                        <div class="productContent__questionHeader w-100">
                            <div class="productContent__questionRight">
                              <span class="productContent__questionArrow mobile-inprogress__arrow"></span>
                            </div>
                            <div class="productContent__questionLeft">
                              <h3 class="productContent__questionTitle">اگر از خرید ناراضی بودم قابلیت مرجوعی وجود دارد؟</h3>
                            </div>
                        </div>
                        <div class="productContent__questionContent w-100">
                          <h3 class="productContent__questionText">لحظاتی پیش اپل با رونمایی از لبتاپ سری آلمونیوم با بند اسپرت نسل جدید تحولی</h3>
                        </div>
                </div>
          </div>
      </div>


  </div>
</template>

<script>


export default {
    components: {
    },

    props: {
      allQuestion   : { type: [Object,Array], default: [] },
    },

    data() {
      return {
      }
    },

    mounted() {
    },

    computed: {

    },

    methods: {
      showQuestion(data){
        this.allQuestion.map((t)=>{
          if (data.id == t.id) {
            if (t.active) {
              t.active = false;
            }
            else {
              t.active = true;
            }
          }
          else {
            // t.active = false;
          }
        })
      }
    },

};
</script>

<style lang="scss" scoped>
.productContent__sliderWrapper{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  position:relative;
}
.productContent__catTitle{
  color: $black;
  font-size: 18px;
  font-weight: 500;
}
.productContent__catTop{
  @include display-flex();
  flex-wrap: wrap;
  padding-right: 24px;
  padding-left: 24px;
  align-items: flex-start;
  margin-bottom: 31px;
}
.productContent__sliderMore{
  align-items: flex-start;
  @include display-flex();
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-left: 13px;
}
.productContent__moreItem{
  font-size: 16px;
  color: $gray;
  border-bottom: none;
  text-decoration: none;
  @include display-flex();
  align-items: center;
}
.productContent__moreIcon{
  @include display-flex();
  margin-right: 11px;
}
.mobile-inprogress__arrow::after {
    content: "\e801";
    @include font-icon__limoo();
    font-size: 14px;
    margin-top: 1px;
}
.productContent__topRight{
  flex-grow: 1;
  @include display-flex();
  flex-flow: column;
}
.productContent__questionData{
  padding-bottom: 30px;
  padding-right: 24px;
  padding-left: 24px;
}
.productContent__questionItems{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
}
.productContent__questionItem{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  border: solid 1px #ccc;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  max-height: 78px;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  width: 49%;
  margin-left: 2%;
}
.productContent__questionItem:nth-child(2n){
  margin-left: 0;
}
.productContent__questionTitle{
  color: $color_question_gray;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
}
.productContent__questionArrow{
  transform: rotate(270deg);
  // margin-right: 19px;
  @include display-flex();
  transition  : all .3s ease-in-out;
  color: $color-gray;
  margin-top: 6px;
}
.productContent__questionHeader{
  @include display-flex();
  align-items: center;
  flex-wrap: wrap;
  height: 78px;
}
.productContent__questionContent{
  @include display-flex();
  align-items: flex-start;
  flex-wrap: wrap;
  padding-right: 36px;
  padding-left: 36px;
  margin-top: -5px;
  margin-bottom: 21px;
}
.productContent__questionText{
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #515151;
  line-height: 1.9em;
}
.active-question{
  max-height: 1000px;
  transition: max-height 1s ease-in-out;
}
.active-question .productContent__questionArrow{
  transition  : all .2s ease-in;
  transform   : rotate(91deg);
}
.productContent__questionRight{
  // margin-right: 18px;
  width: 5%;
  padding-right: 3%;
}
.productContent__questionLeft{
  width: 95%;
  padding-right: 2%;
  padding-left: 2%;
}


@media (max-width: 960px) {
  .productContent__questionText{
    font-size: 14px;
  }
  .productContent__questionTitle{
    font-size: 14px;
  }
  .productContent__questionData{
    padding-top: 0;
    padding-bottom: 0;
  }
}

@media (max-width: 860px) {
  .productContent__questionItem {
    margin-left: 0;
    width: 100%;
  }
}



@media (max-width: 600px) {
  .productContent__catTitle{
    font-size: 16px;
  }
  .productContent__moreItem{
    font-size: 14px;
  }
  .productContent__topRight{
    width: 100%;
  }
  .productContent__topLeft{
    justify-content: flex-end;
    width: 100%;
  }
}

@media (max-width: 485px) {
  .productContent__questionContent{
    padding-left: 26px;
  }
  .productContent__catTitle{
    font-size: 14px;
  }
  .productContent__topLeft{
    display: none;
  }
  .productContent__questionHeader{
    height: 50px;
  }
  .productContent__questionItem{
    max-height: 50px;
  }
  .active-question{
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
  }
  .productContent__questionContent{
    margin-bottom: 21px;
  }
}

@media (max-width: 420px) {
  .productContent__questionTitle{
    font-size: 12px;
  }
  .productContent__questionText{
    font-size: 12px;
  }
  .productContent__questionLeft{
    margin-right: 11px;
    margin-left: 11px;
  }
  .productContent__catTop{
    margin-bottom: 16px;
  }
  // .productContent__questionTitle{
  //   font-size: 10px;
  // }
  // .productContent__questionText{
  //   font-size: 9px;
  // }
  // .productContent__questionArrow::after{
  //   font-size: 11px;
  // }
  // .productContent__questionContent{
  //   margin-bottom: 14px;
  // }
  // .productContent__catTitle{
  //   font-size: 12px;
  // }
}

@media (max-width: 280px) {
  // .productContent__questionLeft{
  //   width: 77%;
  // }
  // .productContent__questionTitle{
  //   font-size: 7px;
  // }
  // .productContent__questionArrow::after{
  //   font-size: 10px;
  // }
  // .productContent__questionItem{
  //   max-height: 38px;
  // }
  // .productContent__questionHeader{
  //   height: 38px;
  // }
  // .active-question{
  //   max-height: 1000px;
  //   transition: max-height 1s ease-in-out;
  // }
  // .productContent__questionText{
  //   font-size: 7px;
  // }
  // .productContent__questionContent{
  //   margin-bottom: 22px;
  // }
}






</style>
