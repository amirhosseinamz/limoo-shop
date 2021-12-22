<template>
  <keep-alive>
    <pass-change></pass-change>
  </keep-alive>
</template>

<script>
import PassChange from "~/components/Auth/PassChange";
export default {
  layout: "signinup",
  middleware: "isAuthenticated",
  components: {
    PassChange,
  },
};
</script>
