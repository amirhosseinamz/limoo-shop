<template>
    <div class="nav-holder">
        <nav class="mega-menu">
            <div class="mega-menu__item">
                <a href="">
                    کالای دیجیتال
                </a>
                <div class="mega-menu__section">
                    <div class="mega-menu__section-header">
                        <a href="" class="section-header">
                            <span>موبایل و تبلت</span>
                        </a>

                        <a href="" class="section-header">
                            <span>لوازم جانبی</span>
                        </a>

                        <a href="" class="section-header">
                            <span>دوربین</span>
                        </a>

                        <a href="" class="section-header">
                            <span>هدست و هندزفری</span>
                        </a>
                    </div>
                    <span class="mega-menu__seperator"></span>
                    <div class="mega-menu__section-items">
                        <div class="section-item-holder">
                            <a href="" class="section-item">
                                گوشی
                            </a>
                            <a href="" class="section-item">
                                موبایل
                            </a>
                            <a href="" class="section-item">
                                دوربین
                            </a>
                            <a href="" class="section-item">
                                هدست و هندزفری
                            </a>
                        </div>
                        <div class="section-item-holder">
                            <a href="" class="section-link">
                                دکوراتیوی
                            </a>
                            <a href="" class="section-link">
                                صوتی و تصویری
                            </a>
                            <a href="" class="section-link">
                                لوازم خانگی
                            </a>
                        </div>
                        <div class="section-item-holder">
                            <a href="" class="section-link">
                                پوشاک مردانه
                            </a>
                            <a href="" class="section-link">
                                پوشاک زنانه
                            </a>
                            <a href="" class="section-link">
                                پوشاک بچگانه
                            </a>
                        </div>
                        <div class="section-item-holder">
                            <a href="" class="section-link">
                                شوینده
                            </a>
                            <a href="" class="section-link">
                                لبنیات
                            </a>
                            <a href="" class="section-link">
                                میوه و سبزیجات
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    خانه و آشپزخانه
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    مد و لباس
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    کالای سوپر مارکتی
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    زیبایی و سلامت
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    زیبایی و سلامت
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    موبایل و تبلت
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    موبایل و تبلت
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    موبایل و تبلت
                </a>
            </div>
            <div class="mega-menu__item">
                <a href="">
                    موبایل و تبلت
                </a>
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
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
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
        color: #212121;
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
        box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        position: absolute;
        visibility: hidden;
        background: #fff;
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
