<template>
    <modal
        id="p-profile-favorite-modal"
        class="p-profile-favorite-modal"
        size="800px"
        :show.sync="show"
        :footer="false"
    >
        <!-- <div
            class="w-100 p-profile-favorite-wrapper flex-wrap align-items-start flex-column "
        ></div> -->
        <modalSignUpStepOne
            @btn-close-modal="modalClose"
            @btn-go-back-signup-step-two="gotoSignUpStepTwo"
            v-if="SignUpStepOne"
        />
        <modalSignUpStepTwo
            @btn-go-back-signup-step-one="gotoSignUpStepOne"
            @event-show-modal-wellcome="showWellcomeModal"
            v-else-if="SignUpStepTwo"
        />
    </modal>
</template>

<script>
import modalSignUpStepOne from "~/components/Auth/AuthModals/modalSignUpStepOne";
import modalSignUpStepTwo from "~/components/Auth/AuthModals/modalSignUpStepTwo";
export default {
    props: {
        active: { type: [Boolean, Number], default: false }
    },
    data() {
        return {
            SignUpStepOne: true,
            SignUpStepTwo: false
        };
    },
    components: {
        modalSignUpStepOne,
        modalSignUpStepTwo
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
        },
        showWellcomeModal() {
            this.$emit("event-show-modal-wellcome");
        },
        gotoSignUpStepTwo() {
            this.SignUpStepOne = false;
            this.SignUpStepTwo = true;
        },
        gotoSignUpStepOne() {
            this.SignUpStepOne = true;
            this.SignUpStepTwo = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.modal-body {
    position: relative;
    padding: 0 !important;
    font-size: 12px;
}
#p-profile-favorite-modal {
    background-color: brown !important;
}
@media (max-width: 768px) {
}

@media (max-width: 460px) {
}
</style>
