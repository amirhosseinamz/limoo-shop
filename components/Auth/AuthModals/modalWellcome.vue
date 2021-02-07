<template>
    <modal
        id="p-profile-favorite-modal"
        class="p-profile-favorite-modal d-rtl"
        size="800px"
        :show.sync="show"
        :footer="false"
    >
        <!-- <div
            class="w-100 p-profile-favorite-wrapper flex-wrap align-items-start flex-column "
        ></div> -->
        <wellcome-sign-up></wellcome-sign-up>
    </modal>
</template>

<script>
import WellcomeSignUp from "~/components/Auth/WellcomeSignUp.vue";
export default {
    props: {
        active: { type: [Boolean, Number], default: false }
    },

    components: {
        WellcomeSignUp
    },

    computed: {
        show: {
            set(val) {
                this.$emit("update:active", !!val);
            },
            get() {
                return !!this.active;
            }
        }
    },

    methods: {
        modalClose() {
            this.show = false;
        }
    }
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
}

@media (max-width: 460px) {
}
</style>
