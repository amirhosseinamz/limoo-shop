<template>
    <div class="nav-holder">
        <nav class="mega-menu">
            <div class="mega-menu__item">
                <NuxtLink to="/category/?electronic-devices/=10">
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
    box-shadow: 0 toRem(8) toRem(16) $box__shadow;
}

.mega-menu {
    @include display-flex();
    flex-direction: row-reverse;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    width: 100%;
    max-width: toRem(1800);
    height: toRem(54);
    margin-right: toRem(16);
    margin-left: toRem(100);

    &__item {
        padding: toRem(16) 0 toRem(14) 0;
        font-size: toRem(14);
    }
    &__item a {
        color: $code;
    }
    &__item:hover {
        border-bottom: toRem(3) solid $yellow;
        font-weight: 500;
        border-top: toRem(3) solid transparent;
    }
    &__item:hover a {
        color: $black-topic;
    }
    .section-header {
        width: toRem(130);
        font-size: toRem(14);
        text-align: right;
    }
    &__section {
        top: toRem(135);
        right: 0;
        height: toRem(337);
        width: 100vw;
        opacity: 0;
        box-shadow: 0 toRem(8) toRem(16) $box__shadow;
        border-bottom-left-radius: toRem(10);
        border-bottom-right-radius: toRem(10);
        position: absolute;
        visibility: hidden;
        background: $white;
        z-index: -1;
        left: 0;
    }
    &__item:hover &__section {
        visibility: visible;
        opacity: 1;
    }
    &__seperator {
        border-top: toRem(1) solid $gray-border;
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
        padding-right: toRem(25);
        padding-bottom: toRem(15);
        width: 100%;
        height: toRem(69);
    }
    &-header a {
        color: $code;
        margin-left: toRem(45);
    }
    &-items {
        @include display-flex();
        flex-direction: row-reverse;
        margin-top: toRem(16);
        padding-right: toRem(25);
    }
    &-items a {
        color: $gray;
        margin-bottom: toRem(16);
    }
    &-items a:hover {
        color: $yellow;
    }
}
.section-item-holder {
    @include display-flex();
    flex-direction: column;
    align-items: flex-end;
    margin-left: toRem(45);
    width: toRem(130);
}
a {
    text-decoration: none;
}
@include md {
    .nav-holder {
        display: none;
    }
}
</style>
