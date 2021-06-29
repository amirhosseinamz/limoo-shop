<template>
  <div class="p-favorite-product-items w-100 flex-column flex-wrap">
    <div class="user-favorite__empty-container" v-show="userFavorite == 0">
      <img
        src="/empty-pages/empty-favorite-list.svg"
        alt="فعلا لیست علاقه مندی های شما خالی است"
      />
      <span class="user-favorite__empty"
        >فعلا لیست علاقه مندی های شما خالی است!</span
      >
      <nuxt-link to="/" class="user-favorite__empty-link"
        >مشاهده محصولات پرفروش</nuxt-link
      >
    </div>
    <div
      v-for="data in favoriteData"
      :key="data.id"
      class="w-100 p-favorite-product-item flex-column flex-wrap"
    >
      <div class="p-favorite-product-item-main align-items-start flex-wrap">
        <div class="p-favorite-product-right align-items-start flex-wrap">
          <div
            class="p-favorite-product-img-main p-favorite-product-content-right"
          >
            <img :src="data.img" class="p-favorite-product-img" alt="" />
          </div>

          <div
            class="p-favorite-product-content-left flex-column w-100 align-items-start"
          >
            <h3 class="p-favorite-product-content-title w-100 text-right">
              اپل واچ سری 6 آلومینیوم آبی اپل واچ سری 6 آلومینیوم آبی
            </h3>
            <div class="p-favorite-product-content-price align-items-start">
              <h3 class="p-favorite-product-content-price-title">
                123,000,000
              </h3>
              <h3
                class="p-favorite-product-content-price-title p-favorite-product-content-price-unit"
              >
                تومان
              </h3>
            </div>
          </div>
        </div>

        <div class="p-favorite-product-left align-items-start">
          <div class="p-favorite-product-btn-main">
            <base-button base-color="yellow" link :to="'/product/' + data.id" no-box-shadow mode="secondary-outline" classes="p-product-btn">
              <NuxtLink
                :to="'/product/' + data.id"
                class="p-favorite-product-btn-link p-favorite-product-btn-link-desktop"
                >مشاهده محصول</NuxtLink>
              <NuxtLink
                :to="'/product/' + data.id"
                class="p-favorite-product-btn-link p-favorite-product-btn-link-mobile"
                >مشاهده</NuxtLink>
            </base-button>
              <base-button
                @button-clicked="deleteFav(data)"
                classes="p-favorite-product-btn-delete"
                no-box-shadow
                base-color="light"
              >

              <span class="p-favorite-product-item-icon-delete"></span>
            </base-button>
          </div>
        </div>
      </div>

      <span
        class="p-favorite-product-line w-100 p-favorite-product-desktop"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favoriteData: { type: [Object, Array], default: {} },
  },
  data() {
    return {
      userFavorite: -1,
    };
  },
  components: {},
  created() {
    this.userFavorite = Object.values(this.favoriteData).length;
  },
  computed: {},

  methods: {
    deleteFav(data) {
      this.$emit("event-show-modal-delete-favorite", data);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-favorite__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: 268px;
  background: $white;
  border-radius: 10px;
  /* border: 1px solid red; */
}
.user-favorite__empty-container img {
  opacity: 1;
}
.user-favorite__empty {
  font-size: 18px;
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: 42px;
}
.user-favorite__empty-link {
  text-decoration: none;
  font-size: 14px;
  line-height: 140.62%;
  text-align: center;
  margin-top: 8px;
  color: $code-request;
  cursor: pointer;
}
.p-favorite-product-btn-link {
  @include display-flex();
  align-items: center;
  justify-content: center;
}
.p-favorite-product-item {
  @include display-flex();
}
.p-favorite-product-items {
  @include display-flex();
  direction: rtl;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 65px;
}
.p-favorite-product-right {
  @include display-flex();
  width: 70%;
}
.p-favorite-product-left {
  @include display-flex();
  width: 30%;
  justify-content: flex-end;
  padding-top: 19px;
}
.p-favorite-product-img {
  width: 120px;
  height: 120px;
}
.p-favorite-product-img-main {
  @include display-flex();
}
.p-favorite-product-content {
  @include display-flex();
}
.p-favorite-product-content-left {
  @include display-flex();
  padding-top: 19px;
  width: 72%;
}
.p-favorite-product-content-title {
  font-size: 15px;
  color: #212121;
  font-weight: 500;
  width: 70%;
}
.p-favorite-product-content-right {
  width: 140px;
}
.p-favorite-product-content-price {
  @include display-flex();
  padding-top: 15px;
}
.p-favorite-product-content-price-title {
  font-size: 15px;
  color: $red-logout;
}
.p-favorite-product-content-price-unit {
  margin-right: 6px;
  color: $red-logout;
}

.p-favorite-product-line {
  @include display-flex();
  background: #f2f2f2;
  margin-top: 24px;
  margin-bottom: 24px;
  height: 1px;
}
.p-favorite-product-item-main {
  @include display-flex();
}
.p-favorite-product-item-icon-delete {
  width: 19px;
}
.p-favorite-product-item-icon-delete::after {
  content: "\e826";
  @include font-icon__limoo();
  font-size: 17px;
  color: $gray-3;
}
.p-favorite-product-btn-link-mobile {
  display: none;
}
.p-product-btn {
  font-size: 14px!important;
}

@media (max-width: 1024px) {
  .p-favorite-product-content-left {
    width: 52%;
  }
  .p-favorite-product-content-title {
    width: 92%;
  }
  .p-favorite-product-content-right {
    width: 128px;
  }
}

@media (max-width: 768px) {
  .p-favorite-product-btn {
    width: 123px;
    font-size: 13px;
    height: 45px;
  }
  .p-favorite-product-content-left {
    width: 70%;
  }
  .p-favorite-product-btn-delete {
    width: 45px!important;
  }
  .p-favorite-product-btn-main .p-product-btn {
    width: 116px;
    background: $yellow;
    color: $white;
    height: 43px;
  }
}

@media (max-width: 600px) {
  .user-favorite__empty-container {
    height: 243px;
  }
  .user-favorite__empty-container img {
    margin: 24px auto 0 auto;
    width: 78px;
    height: 78px;
  }
  .user-favorite__empty {
    font-size: 14px;
    margin-top: 24px;
  }
  .user-favorite__empty-link {
    font-size: 13px;
    margin-top: 14px;
  }
  /*  */
  .p-favorite-product-content-right {
    width: 91px;
  }
  .p-favorite-product-img {
    width: 80px;
    height: 75px;
  }
  .p-favorite-product-content-title {
    font-size: 14px;
  }
  .p-favorite-product-content-price-title {
    font-size: 12px;
  }
  .p-favorite-product-item-main {
    flex-flow: column;
    width: 100%;
  }
  .p-favorite-product-left {
    width: 100%;
    padding-left: 13px;
  }
  .p-favorite-product-right {
    width: 100%;
    border-bottom: solid 1px $gray-border;
    padding-bottom: 22px;
  }
  .p-favorite-product-desktop {
    display: none;
  }
  .p-favorite-product-items {
    padding-top: 0px;
    padding-right: 3px;
    padding-left: 3px;
  }
  .p-favorite-product-item {
    background: $white;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
    padding-top: 29px;
    padding-bottom: 10px;
  }
  .p-favorite-product-btn-delete {
    width: 36px!important;
    height: 36px!important;
  }
  .p-favorite-product-btn {
    background: $yellow;
    color: $white;
    height: 40px;
    width: 40px;
  }
  .p-favorite-product-content-left {
    padding-top: 3px;
  }
  .p-favorite-product-btn-link {
    width: 104px;
  }
  .p-favorite-product-btn-link-mobile {
    display: flex;
  }
  .p-favorite-product-btn-link-desktop {
    display: none;
  }
  .p-favorite-product-btn-main .p-product-btn {
    width: 104px;
    height: 36px;
  }
  .p-favorite-product-item-icon-delete {
    width: 16px;
  }
}

@media (max-width: 485px) {
  .p-favorite-product-content-left {
    width: 73%;
  }

  .p-favorite-product-btn-link {
    font-size: 13px;
  }
}

@media (max-width: 320px) {
  .p-favorite-product-content-left {
    width: 69%;
  }
}

@media (max-width: 280px) {
  .p-favorite-product-content-left {
    width: 60%;
  }
  .p-favorite-product-content-title {
    width: 100%;
  }
}
</style>
