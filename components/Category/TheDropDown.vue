<template>
    <div class="nav" dir="rtl">
        <input type="checkbox" id="menu" />
        <img src="/icons/arrow-down.svg" class="arrow" />
        <label for="menu" id="menu-header">کالای دیجیتال</label>
        <div class="multi-level">
            <div class="item">
                <hr class="seperator" />
                <input type="checkbox" id="nested-menu" />
                <img src="/icons/arrow-down.svg" class="nested-arrow" /><label
                    for="nested-menu"
                    >موبایل و تبلت</label
                >
                <ul>
                    <hr class="seperator" />
                    <li><a href="#">اندرویدی</a></li>
                    <hr class="seperator" />
                    <li><a href="#">ios</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.multi-level,
.item ul,
.nav input[type="checkbox"] {
    display: none;
}
#menu:checked ~ .multi-level,
.item input:checked ~ ul {
    display: block;
}
.seperator {
    border: none;
    border-top: toRem(2) solid $gray-border;
    opacity: 0.5;
    border-radius: toRem(8);
    width: 100%;
}
.arrow {
    width: toRem(17);
    height: toRem(17);
    float: left;
    z-index: 0;
    margin: toRem(16) 0 toRem(15) toRem(8);
}
.nested-arrow {
    width: toRem(17);
    height: toRem(17);
    vertical-align: middle;
    float: right;
    z-index: 0;
    margin: toRem(17) toRem(24) toRem(10) toRem(4);
}
.item input + .arrow,
.item input + .nested-arrow {
    transform: rotate(0deg);
}
.item input:checked + .arrow,
.item input:checked + .nested-arrow {
    transform: rotate(180deg);
}
#menu:checked + .arrow {
    transform: rotate(180deg);
}
#menu:checked + .arrow + #menu-header {
    font-size: toRem(14);
    color: $black-topic;
}
label {
    width: 100%;
    display: block;
    z-index: 3;
    position: relative;
}
.nav {
    width: 89vw;
    border-radius: toRem(10);
    margin: toRem(4) 0;
    border: toRem(1) solid $gray-border;
    overflow-x: hidden;
}

.nav ul,
.nav li,
label {
    line-height: toRem(50);
    margin: 0;
    padding: 0 toRem(8);
    list-style: none;
    text-decoration: none;
    color: $code;
    font-size: toRem(13);
    width: 100%;
}
.item ul {
    padding: 0 0.25em;
}
.nav li a {
    line-height: toRem(50);
    margin: 0;
    padding: 0 toRem(47);
    list-style: none;
    text-decoration: none;
    color: $gray;
    font-size: toRem(13);
}
</style>
