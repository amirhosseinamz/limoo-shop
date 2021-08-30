<template>
    <div class="category-items">
        <div class="category-item">
            <a href="" class="category-item__title"> مد و پوشاک</a>
            <button class="category-item__btn"></button>
        </div>
        <div class="category-item">
            <a href="" class="category-item__title"> کالای سوپرمارکتی</a>
            <button class="category-item__btn"></button>
        </div>
        <div class="category-item">
            <a href="" class="category-item__title"> خانه و آشپزخانه</a>
            <button class="category-item__btn"></button>
        </div>
        <the-drop-down />
        <div class="category-item">
            <a href="" class="category-item__title">تزئینات</a>
            <button class="category-item__btn"></button>
            <!-- start section -->
            <!-- <div class="category-item__section">
                <div class="section-header">
                    <a href="" class="section-header__title">
                        <span>موبایل و تبلت</span>
                    </a>
                    <button class="section-header__title-btn"></button>
                </div>
                <div class="section-items">
                    <div class="section-item">
                        <a href="" class="section-item__title">
                            <span>اندرویدی</span>
                        </a>
                    </div>
                    <div class="section-item">
                        <a href="" class="section-item__title">
                            <span>ios</span>
                        </a>
                    </div>
                </div>
            </div> -->
            <!-- end section -->
        </div>

        <div class="category-item">
            <a href="" class="category-item__title"> خانه و آشپزخانه</a>
            <button class="category-item__btn"></button>
        </div>
    </div>
</template>
<script>
import TheDropDown from "~/components/Category/TheDropDown.vue";
export default {
    components: {
        TheDropDown
    }
};
</script>
<style lang="scss" scoped>
.category-items {
    display: none;
}
@include md {
    .category-items {
        @include display-flex();
        flex-direction: column;
        align-items: center;
        margin: toRem(12) toRem(11);
    }
    .category-item {
        @include display-flex();
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        line-height: 126.12%;
        border: toRem(1) solid $gray-border;
        border-radius: toRem(10);
        margin: toRem(4) 0;
        width: 89vw;
        height: 49px;
        &__title {
            margin-right: toRem(8);
            font-size: toRem(13);
            line-height: 140.62%;
            color: $code;
        }
        &__btn {
            height: toRem(18);
            width: toRem(18);
            outline: none;
            border: none;
            margin-left: toRem(8);
            background: transparent url("/icons/arrow-down.svg") center;
        }
    }
    .category-item a {
        text-decoration: none;
    }
    .category-item__section {
        display: none;
    }
}
</style>
