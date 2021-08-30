<template>
            <div  class="tabs__content">
                <div class="tabs__content-data">
                    <h3 class="tabs__content-title">معرفی کامل تستی</h3>

                    <!-- <div class="tabs__content-items">
                            <div class="tabs__content-item">
                                    <div class="tab__content-wrapper w-100">
                                        <div class="tabs__content-right">
                                            <h3 class="tabs__content-text">ابعاد</h3>
                                            <span class="tabs__content-line"></span>
                                        </div>
                                        <div class="tabs__content-left">
                                            <h3 class="tabs__content-text">32*12*45</h3>
                                        </div>
                                    </div>
                            </div>

                            <div class="tabs__content-item">
                                    <div class="tab__content-wrapper w-100">
                                        <div class="tabs__content-right">
                                            <h3 class="tabs__content-text">ابعاد</h3>
                                            <span class="tabs__content-line"></span>
                                        </div>
                                        <div class="tabs__content-left">
                                            <h3 class="tabs__content-text">32*12*45</h3>
                                        </div>
                                    </div>
                            </div>

                            <div class="tabs__content-item">
                                    <div class="tab__content-wrapper w-100">
                                        <div class="tabs__content-right">
                                            <h3 class="tabs__content-text">ابعاد</h3>
                                            <span class="tabs__content-line"></span>
                                        </div>
                                        <div class="tabs__content-left">
                                            <h3 class="tabs__content-text">32*12*45</h3>
                                        </div>
                                    </div>
                            </div>

                    </div> -->

                </div>
            </div>
</template>
<script>
// import contentHome from "~/components/Home/contentHome.vue";


export default {
    components: {
      // contentHome,
    },
};
</script>

<style lang="scss" scoped>
    .tabs{
        @include display-flex();
        align-content: flex-start;
        flex-flow: column;
    }
    .tabs__main{
        width:100%;
        @include display-flex();
        align-items:flex-start;
        border-bottom:solid toRem(1) $gray-border;
    }
    .tabs__item{
      margin-left: toRem(70);
      cursor: pointer;
    }
    .tabs__item-title{
        font-size: toRem(18);
        color: $gray;
        font-weight: 400;
    }
    .tab__main-wrapper{
        padding-right: toRem(24);
        padding-left: toRem(24);
    }
    .tab__main-wrapper{
        @include display-flex();
        align-content: flex-start;
        flex-wrap: wrap;
        width:100%;
    }
    .tabs__item-line{
        width:100%;
        height: toRem(5);
        background:$yellow;
        border-top-left-radius: toRem(20);
        border-top-right-radius: toRem(20);
        @include display-flex();
        margin-top: toRem(19);
    }
    .tab--active .tabs__item-line{
       visibility:visible;
    }
    .tab--active .tabs__item-title{
        color: $black-topic;
    }
    .tabs__content{
        padding-top: toRem(38);
    }
    .tabs__content-title{
        font-size: toRem(16);
        font-weight: 400;
        color:$black-topic;
        height: toRem(29);
        margin-bottom: toRem(16);
    }
    .tabs__content-item{
        background:$white;
        height: 53px;
        padding-right:toRem(18);
        padding-left: toRem(18);
        background:rgb(242,242,242,.4);
        @include display-flex();
    }
    .tabs__content-item:nth-child(2n){
        background:$white;
    }
    .tabs__content-right{
        width:toRem(349);
        position: relative;
    }
    .tabs__content-left{
        @include display-flex();
        flex-grow: 1;
        padding-right: toRem(24);
    }
    .tabs__content-data:nth-child(1){
        padding-top:0;
    }
    .tabs__content-data{
        padding-right: toRem(24);
        padding-left: toRem(24);
        padding-top: toRem(38);
    }
    .tabs__content-data:last-of-type .tabs__content-items{
        border-bottom:none;
        padding-bottom:0;
    }
    .tab__content-wrapper{
        @include display-flex();
    }
    .tabs__content-text{
        font-size: toRem(16);
        color:$color_discount;
        font-weight: 400;
        margin-top: toRem(16);
    }
    .tabs__content-line{
       @include display-flex();
       background:rgba(242,242,242,.4);
       position: absolute;
       left:0;
       width: toRem(1);
       height: 100%;
       top:0;
    }
    .tabs__content-items{
        padding-bottom: toRem(38);
        border-bottom:solid toRem(2) rgba(242,242,242,.5);
        border-radius: toRem(8);
    }



</style>
