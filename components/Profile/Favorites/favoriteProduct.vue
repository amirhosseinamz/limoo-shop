<template>
  <div class="p-favorite-product-items w-100 flex-column flex-wrap">
    <div class="user-favorite__empty-container" v-show="userFavorite === 0">
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
            <div class="p-product-btn">
              <base-button
                base-color="yellow"
                link no-box-shadow no-hover
                :to="'/product/' + data.id"
                classes="p-favorite-product-btn-link p-favorite-product-btn-link-desktop"
                >مشاهده محصول</base-button>
              <base-button
                link
                :to="'/product/' + data.id"
                classes="p-favorite-product-btn-link p-favorite-product-btn-link-mobile"
                base-color="yellow"
                no-box-shadow
                >مشاهده</base-button>
            </div>
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
  computed: {
    favoriteData() {
      return this.$store.getters["profile/favorites/favorites/favoriteData"];
    }
  },

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
  height: toRem(268);
  background: $white;
  border-radius: toRem(10);
}
.user-favorite__empty-container img {
  opacity: 1;
}
.user-favorite__empty {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: toRem(42);
}
.user-favorite__empty-link {
  text-decoration: none;
  font-size: toRem(14);
  line-height: 140.62%;
  text-align: center;
  margin-top: toRem(8);
  color: $code-request;
  cursor: pointer;
}
.p-favorite-product-item {
  @include display-flex();
}
.p-favorite-product-items {
  @include display-flex();
  direction: rtl;
  padding-right: toRem(25);
  padding-left: toRem(25);
  padding-top: toRem(65);
}
.p-favorite-product-right {
  @include display-flex();
  width: 70%;
}
.p-favorite-product-left {
  @include display-flex();
  width: 30%;
  justify-content: flex-end;
  padding-top: toRem(19);
}
.p-favorite-product-img {
  width: toRem(120);
  height: toRem(120);
}
.p-favorite-product-img-main {
  @include display-flex();
}
.p-favorite-product-content {
  @include display-flex();
}
.p-favorite-product-content-left {
  @include display-flex();
  padding-top: toRem(19);
  width: 72%;
}
.p-favorite-product-content-title {
  font-size: toRem(15);
  color: #212121;
  font-weight: 500;
  width: 70%;
}
.p-favorite-product-content-right {
  width: toRem(140);
}
.p-favorite-product-content-price {
  @include display-flex();
  padding-top: toRem(15);
}
.p-favorite-product-content-price-title {
  font-size: toRem(15);
  color: $red-logout;
}
.p-favorite-product-content-price-unit {
  margin-right: toRem(6);
  color: $red-logout;
}

.p-favorite-product-line {
  @include display-flex();
  background: #f2f2f2;
  margin-top: toRem(24);
  margin-bottom: toRem(24);
  height: toRem(1);
}
.p-favorite-product-item-main {
  @include display-flex();
}
.p-favorite-product-item-icon-delete {
  width: toRem(19);
}
.p-favorite-product-item-icon-delete::after {
  content: "\e826";
  @include font-icon__limoo();
  font-size: toRem(16);
  color: $gray-3;
}
.p-favorite-product-btn-link-mobile {
  display: none!important;
}
.p-product-btn {
  width: toRem(150);
  height: toRem(47);
  font-family: inherit;
  font-size: toRem(14);
  transition: all 120ms ease-in;
}
@include lg {
  .p-favorite-product-content-left {
    width: 52%;
  }
  .p-favorite-product-content-title {
    width: 92%;
  }
  .p-favorite-product-content-right {
    width: toRem(128);
  }
}

@include sm {

  .p-favorite-product-btn-link {
    height: toRem(47);
    width: toRem(110);
    font-size: toRem(14);
  }
  .p-favorite-product-content-left {
    width: 70%;
  }
  .p-favorite-product-btn-delete {
    width: toRem(45);
  }
  .p-favorite-product-btn-main .p-product-btn {
    width: toRem(116);
    height: toRem(43);
  }
}

@include xs {
  .user-favorite__empty-container {
    height: toRem(243);
  }
  .user-favorite__empty-container img {
    margin: toRem(24) auto 0 auto;
    width: toRem(78);
    height: toRem(78);
  }
  .user-favorite__empty {
    font-size: toRem(14);
    margin-top: toRem(24);
  }
  .user-favorite__empty-link {
    font-size: toRem(13);
    margin-top: toRem(14);
  }
  /*  */
  .p-favorite-product-content-right {
    width: 91px;
  }
  .p-favorite-product-img {
    width: toRem(80);
    height: toRem(75);
  }
  .p-favorite-product-content-title {
    font-size: toRem(14);
  }
  .p-favorite-product-content-price-title {
    font-size: toRem(12);
  }
  .p-favorite-product-item-main {
    flex-flow: column;
    width: 100%;
  }
  .p-favorite-product-left {
    width: 100%;
    padding-left: toRem(13);
  }
  .p-favorite-product-right {
    width: 100%;
    border-bottom: solid toRem(1) $gray-border;
    padding-bottom: toRem(22);
  }
  .p-favorite-product-desktop {
    display: none;
  }
  .p-favorite-product-items {
    padding-top: 0;
    padding-right: toRem(3);
    padding-left: toRem(3);
  }
  .p-favorite-product-item {
    background: $white;
    border-radius: toRem(10);
    margin-bottom: toRem(10);
    box-shadow: 0 toRem(8) toRem(16) rgba(17, 17, 17, 0.03);
    padding-top: toRem(29);
    padding-bottom: toRem(10);
  }
  .p-favorite-product-btn-delete {
    width: toRem(36);
    height: toRem(36);
  }
  .p-favorite-product-btn {
    height: toRem(40);
    width: toRem(40);
  }
  .p-favorite-product-content-left {
    width: 73%;
    padding-top: toRem(3);
  }
  .p-favorite-product-btn-link {
    width: toRem(104);
    height: toRem(35);
    font-size: toRem(13);
  }
  .p-favorite-product-btn-link-mobile {
    display: flex!important;
  }
  .p-favorite-product-btn-link-desktop {
    display: none!important;
  }
  .p-favorite-product-btn-main .p-product-btn {
    width: toRem(104);
    height: toRem(36);
  }
  .p-favorite-product-item-icon-delete {
    width: toRem(16)!important;
  }
}


@include xxs {
  .p-favorite-product-content-left {
    width: 69%;
  }
}

@include xxxs {
  .p-favorite-product-content-left {
    width: 60%;
  }
  .p-favorite-product-content-title {
    width: 100%;
  }
}
</style>
