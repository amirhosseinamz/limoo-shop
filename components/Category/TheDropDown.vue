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
    border-top: 2px solid $gray-border;
    opacity: 0.5;
    border-radius: 8px;
    width: 100%;
}
.arrow {
    width: 17px;
    height: 17px;
    /* vertical-align: middle; */
    float: left;
    z-index: 0;
    margin: 16px 0 15px 8px;
}
.nested-arrow {
    width: 17px;
    height: 17px;
    vertical-align: middle;
    float: right;
    z-index: 0;
    margin: 17px 24px 10px 4px;
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
    font-size: 14px;
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
    border-radius: 10px;
    margin: 4px 0;
    border: 1px solid $gray-border;
    overflow-x: hidden;
}

.nav ul,
.nav li,
label {
    line-height: 50px;
    margin: 0;
    padding: 0 8px;
    list-style: none;
    text-decoration: none;
    color: $code;
    font-size: 13px;
    width: 100%;
}
.item ul {
    padding: 0 0.25em;
}
.nav li a {
    line-height: 50px;
    margin: 0;
    padding: 0 47px;
    list-style: none;
    text-decoration: none;
    color: $gray;
    font-size: 13px;
}
</style>
