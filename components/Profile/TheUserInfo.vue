<template>
    <div class="user-info">
        <div @click="goToProfile" class="user-info__profile">
            <div class="user-info__profile__holder">
                <div class="user-info__profile__imgholder">
                    <img
                        class="user-info__profile__imgholder-default"
                        src="/icons/profile-holder.svg"
                    />
                </div>
                <div class="user-info__profile__nameholder">
                    <div class="user-info__name">شروین پیکارجو</div>
                    <div class="user-info__phone">09120080960</div>
                </div>
            </div>
            <span class="user-info__profile-icon setting-icon"></span>
        </div>
        <hr class="splicer" />
        <div class="user-info__wallet">
            <div class="user-info__wallet__holder">
                <div class="user-info__wallet__imgholder">
<!--                    <img
                        class="user-info__wallet__imgholder-img"
                        src="/icons/wallet.svg"
                    />-->
                  <span class="user-info__wallet__imgholder-icon"></span>
                </div>
                <div class="user-info__wallet__nameholder">
                    <div class="user-info__name">موجودی دایور</div>
                    <div class="user-info__credit">
                        <div class="user-info__credit-value">256,000</div>
                        <span class="user-info__credit-toman">تومان</span>
                    </div>
                </div>
            </div>
            <span class="user-info__profile-icon add-icon"></span>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheUserInfo",
    methods: {
        goToProfile() {
            this.$router.push("/profile");
        }
    }
};
</script>
<style lang="scss" scoped>
.user-info {
    width: 100%;
    height: 227px;
    background: $white;
    box-shadow: 0 8px 16px $box__shadow;
    border-radius: 10px;
    margin-bottom: 25px;
    &__wallet,
    &__profile {
        @include display-flex();
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        height: 110px;

        /* border: 1px solid; */
        &__holder {
            @include display-flex();
            flex-direction: row-reverse;
            align-items: center;
            margin-right: 21px;
        }
        &__imgholder {
            width: 68px;
            height: 68px;
            background: $gray-border;
            border-radius: 50%;
            @include display-flex();
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &-default {
                width: 42px;
                height: 42px;
            }
        }
        &__nameholder {
            margin-right: 21px;
            cursor: pointer;
        }
        &-icon {
            margin-left: 24px;
            cursor: pointer;
            width: 32px;
            height: 32px;
        }
    }
    &__name {
        font-size: 16px;
        line-height: 140.62%;
        color: $black;
    }
    &__credit {
        @include display-flex();
        flex-direction: row-reverse;
        align-items: center;
        color: $gray;
        &-value {
            margin-left: 5px;
        }
    }
    &__phone {
        font-size: 16px;
        line-height: 140.62%;
        color: $gray;
    }
    &__wallet {
        height: 116px;
        &__holder {
            @include display-flex();
            flex-direction: row-reverse;
            align-items: center;
            margin-right: 21px;
        }
        &__imgholder {
            width: 68px;
            height: 68px;
            background: $light-green__bg;
            border-radius: 50%;
            @include display-flex();
            justify-content: center;
            align-items: center;
            &-icon {
              @extend .align-center;
              &::before {
                content: "\e833";
                @include font-icon__limoo();
                font-size: toRem(30);
                color: $green-2;
              }
            }
        }
        &__nameholder {
            margin-right: 21px;
        }
    }
}
.splicer {
    border: none;
    border-top: 1px solid $gray-border;
}
.setting-icon::before {
    @include font-icon__limoo();
    color: $gray;
    content: "\e86a";
    font-size: 32px;
}
.add-icon::before {
    @include font-icon__limoo();
    color: $icon__green;
    content: "\e86b";
    font-size: 32px;
    font-weight: bold;
}
@media (max-width: 960px) {
    .user-info {
        width: 100%;
        height: 164px;
        border-radius: 0;
        margin-bottom: 16px;
        &__wallet,
        &__profile {
            height: 90px;
            &__holder {
                margin-right: 14px;
            }
            &__imgholder {
                width: 42px;
                height: 42px;
                &-default {
                    width: 24px;
                    height: 24px;
                }
            }
            &__nameholder {
                margin-right: 18px;
            }
            &-icon {
                margin-left: 28px;
            }
        }
        &__credit {
            @include display-flex();
            flex-direction: row-reverse;
            align-items: center;
            color: $gray;
            font-size: 14px;
            &-value {
                margin-left: 5px;
            }
        }
        &__phone {
            font-size: 14px;
        }
        &__wallet {
            height: 74px;
            &__holder {
                margin-right: 14px;
            }
            &__imgholder {
                width: 42px;
                height: 42px;
                &-icon {
                  &::before {
                    font-size: toRem(19);
                  }
                }
            }
            &__nameholder {
                margin-right: 20px;
            }
        }
    }
}
</style>
