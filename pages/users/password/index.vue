<template>
  <keep-alive>
    <pass-change></pass-change>
  </keep-alive>
</template>

<script>
import PassChange from "~/components/Auth/PassChange";
export default {
  layout: "signinup",
  components: {
    PassChange,
  },
};
</script>
