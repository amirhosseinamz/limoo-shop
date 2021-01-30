<template>
    <div class="nav-holder">
        <nav class="mega-menu">
            <div class="mega-menu__item">
                <NuxtLink to="">
                    کالای دیجیتال
                </NuxtLink>
                <div class="mega-menu__section">
                    <div class="mega-menu__section-header">
                        <NuxtLink to="" class="section-header">
                            <span>موبایل و تبلت</span>
                        </NuxtLink>

                        <NuxtLink to="" class="section-header">
                            <span>لوازم جانبی</span>
                        </NuxtLink>

                        <NuxtLink to="" class="section-header">
                            <span>دوربین</span>
                        </NuxtLink>

                        <NuxtLink to="" class="section-header">
                            <span>هدست و هندزفری</span>
                        </NuxtLink>
                    </div>
                    <span class="mega-menu__seperator"></span>
                    <div class="mega-menu__section-items">
                        <div class="section-item-holder">
                            <NuxtLink to="" class="section-item">
                                گوشی
                            </NuxtLink>
                            <NuxtLink to="" class="section-item">
                                موبایل
                            </NuxtLink>
                            <NuxtLink to="" class="section-item">
                                دوربین
                            </NuxtLink>
                            <NuxtLink to="" class="section-item">
                                هدست و هندزفری
                            </NuxtLink>
                        </div>
                        <div class="section-item-holder">
                            <NuxtLink to="" class="section-link">
                                دکوراتیوی
                            </NuxtLink>
                            <NuxtLink to="" class="section-link">
                                صوتی و تصویری
                            </NuxtLink>
                            <NuxtLink to="" class="section-link">
                                لوازم خانگی
                            </NuxtLink>
                        </div>
                        <div class="section-item-holder">
                            <NuxtLink to="" class="section-link">
                                پوشاک مردانه
                            </NuxtLink>
                            <NuxtLink to="" class="section-link">
                                پوشاک زنانه
                            </NuxtLink>
                            <NuxtLink to="" class="section-link">
                                پوشاک بچگانه
                            </NuxtLink>
                        </div>
                        <div class="section-item-holder">
                            <NuxtLink to="" class="section-link">
                                شوینده
                            </NuxtLink>
                            <NuxtLink to="" class="section-link">
                                لبنیات
                            </NuxtLink>
                            <NuxtLink to="" class="section-link">
                                میوه و سبزیجات
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    خانه و آشپزخانه
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    مد و لباس
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    کالای سوپر مارکتی
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    زیبایی و سلامت
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    زیبایی و سلامت
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    موبایل و تبلت
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    موبایل و تبلت
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    موبایل و تبلت
                </NuxtLink>
            </div>
            <div class="mega-menu__item">
                <NuxtLink to="">
                    موبایل و تبلت
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    components: {}
};
</script>

<style lang="scss" scoped>
.nav-holder {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: center;
    width: 100%;
    background-color: $white;
    box-shadow: 0px 8px 16px $box__shadow;
}

.mega-menu {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    width: 100%;
    max-width: 1800px;
    /* background-color: red; */
    height: 54px;
    margin-right: 16px;
    margin-left: 100px;

    &__item {
        padding: 16px 0 14px 0;
        /* cursor: pointer; */
        font-size: 14px;
    }
    &__item a {
        color: $code;
    }
    &__item:hover {
        border-bottom: 3px solid $yellow;
        font-weight: 500;
        border-top: 3px solid transparent;
    }
    &__item:hover a {
        color: $black-topic;
    }
    .section-header {
        width: 130px;
        font-size: 14px;
        /* border: 1px solid black; */
        text-align: right;
    }
    &__section {
        top: 135px;
        right: 0;
        height: 337px;
        width: 100vw;
        opacity: 0;
        box-shadow: 0px 8px 16px $box__shadow;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        position: absolute;
        visibility: hidden;
        background: $white;
        z-index: -1;
        opacity: 0;
        left: 0;
    }
    &__item:hover &__section {
        visibility: visible;
        opacity: 1;
    }
    &__seperator {
        border-top: 1px solid $gray-border;
        width: 100%;
    }
}
.mega-menu__section {
    @include display-flex();
    flex-direction: column;
    align-items: flex-end;
    &-header {
        @include display-flex();
        flex-direction: row-reverse;
        align-items: flex-end;
        padding-right: 25px;
        padding-bottom: 15px;
        width: 100%;
        height: 69px;
    }
    &-header a {
        color: $code;
        margin-left: 45px;
    }
    &-items {
        @include display-flex();
        flex-direction: row-reverse;
        margin-top: 16px;
        padding-right: 25px;
    }
    &-items a {
        color: $gray;
        margin-bottom: 16px;
    }
    &-items a:hover {
        color: $yellow;
    }
}
.section-item-holder {
    /* border: 1px solid black; */
    @include display-flex();
    flex-direction: column;
    align-items: flex-end;
    margin-left: 45px;
    width: 130px;
}
a {
    text-decoration: none;
}
@media (max-width: 960px) {
    .nav-holder {
        display: none;
    }
}
</style>
