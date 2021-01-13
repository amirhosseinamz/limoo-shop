<template>
    <div class="birthday" dir="rtl">
        <span class="birthday-title">تاریخ تولد:</span>
        <div class="birthday-container">
            <div class="birthday-item__days"></div>
            <span class="birthday-item__spliter"></span>
            <div class="birthday-item__months"></div>
            <span class="birthday-item__spliter"></span>
            <div class="birthday-item__years"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.birthday {
    @include display-flex();
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* border: 1px red solid; */
    &-title {
        font-size: 16px;
        font-family: inherit;
        line-height: 140.62%;
        align-items: center;
        text-align: right;
        color: $black-topic;
        margin-bottom: 16px;
    }
    &-container {
        @include display-flex();
        flex-direction: row;
        justify-content: space-between;
    }
    &-item {
        &__days,
        &__months,
        &__years {
            font-family: inherit;
            font-size: 16px;
            height: 52px;
            width: 91px;
            border: 1px solid $input-border;
            box-shadow: 0px 4px 4px $gray-border;
            border-radius: 15px;
            color: $gray;
            outline: none;
            padding: 11px;
        }
        &__years {
            width: 150px;
        }
        &__spliter {
            background-color: $light-gray;
            width: 1px;
            height: 24px;
            border: none;
            align-self: center;
            transform: rotate(-160deg);
            /* border-right: 1px solid red; */
        }
    }
}
@media (max-width: 1220px) {
    .birthday {
        &-item {
            &__days,
            &__months,
            &__years {
                width: 74px;
            }
            &__years {
                width: 120px;
            }
        }
    }
}
@media (max-width: 960px) {
    .birthday {
        &-title {
            font-size: 14px;
        }
        &-item {
            &__days,
            &__months,
            &__years {
                font-size: 13px;
                height: 46px;
                width: 74px;
            }
            &__years {
                width: 120px;
            }
            &__spliter {
                height: 15px;
            }
        }
    }
}
@media (max-width: 350px) {
    .birthday {
        &-item {
            &__days,
            &__months,
            &__years {
                width: 64px;
            }
            &__years {
                width: 105px;
            }
        }
    }
}
@media (max-width: 280px) {
    .birthday {
        &-item {
            &__days,
            &__months,
            &__years {
                width: 60px;
            }
            &__years {
                width: 80px;
            }
        }
    }
}
</style>
