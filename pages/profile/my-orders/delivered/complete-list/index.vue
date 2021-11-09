<template>
  <div class="complete-list-wrapper">
    <the-profile-side-bar class="profile-sidebar"/>
    <complete-list class="complete-list"></complete-list>
  </div>

</template>

<script>
import CompleteList from "~/components/Profile/UserOrder/CompleteList";
import TheProfileSideBar from "~/components/Profile/TheProfileSideBar.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource";

export default {
  name: "index",
  components: { CompleteList, TheProfileSideBar },
  methods: {
    getTextByTextKey,
    goToProfile() {
      this.$router.push("/profile");
    },
  }
};
</script>

<style lang="scss" scoped>
.complete-list-wrapper {
  display: flex;
  flex-direction: row-reverse;
  .complete-list {
    margin-top: toRem(166);
    margin-left: toRem(17);
    @include xl {
      margin-right: toRem(-10);
    }
    @include md {
      margin-right: toRem(17);
      margin-top: toRem(60);
    }
  }
  .profile-sidebar {
    @include md {
      display: none;
    }
  }
}

</style>
