<template>
    <div class="category-items">
        <div class="category-item">
            <span class="category-item__title"> مد و پوشاک</span>
            <button class="category-item__btn"></button>
        </div>
        <div class="category-item">
            <span class="category-item__title"> کالای سوپرمارکتی</span>
            <button class="category-item__btn"></button>
        </div>
        <div class="category-item">
            <span class="category-item__title"> خانه و آشپزخانه</span>
            <button class="category-item__btn"></button>
        </div>
        <div class="category-item">
            <span class="category-item__title"> کالای دیجیتال</span>
            <button class="category-item__btn"></button>
        </div>
        <div class="category-item">
            <span class="category-item__title"> خانه و آشپزخانه</span>
            <button class="category-item__btn"></button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.category-items {
    display: none;
}
@media (max-width: 960px) {
    .category-items {
        @include display-flex();
        flex-direction: column;
        align-items: center;
        margin: 12px 11px;
    }
    .category-item {
        @include display-flex();
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        border: 1px solid $gray-border;
        border-radius: 10px;
        margin: 4px 0;
        width: 89vw;
        height: 49px;
        &__title {
            margin-right: 8px;
            font-size: 13px;
            line-height: 140.62%;
            color: $code;
        }
        &__btn {
            height: 18px;
            width: 18px;
            outline: none;
            border: none;
            margin-left: 8px;
            background: transparent url("/icons/arrow-down.svg") center;
            /* transform: rotate(180deg); */
        }
    }
}
</style>
