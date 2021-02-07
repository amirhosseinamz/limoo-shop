<template>
    <keep-alive>
        <recycle-pass></recycle-pass>
    </keep-alive>
</template>

<script>
import RecyclePass from "~/components/Auth/RecyclePass";
export default {
    layout: "signinup",
    components: {
        RecyclePass
    }
};
</script>