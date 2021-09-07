<template>
    <div class="modal">
        <div class="mobile-category">
            <div class="mobile-category__header">
                دسته بندی کالاها
            </div>
            <The-category-box />
        </div>
    </div>
</template>
<script>
import TheCategoryBox from "~/components/Category/TheCategoryBox.vue";
export default {
    components: {
        TheCategoryBox
    }
};
</script>
<style lang="scss" scoped>
.modal {
    @include display-flex();
    flex-direction: row;
    justify-content: center;
}
.mobile-category {
    display: none;
}
@include md {
    .mobile-category {
        overflow-y: scroll;
        @include display-flex();
        flex-direction: column;
        align-items: flex-end;
        width: 95%;
        height: 80%;
        margin: toRem(55) toRem(5) toRem(75) toRem(5);
        background: $white;
        border-radius: toRem(10);
        position: fixed;
        top: 0;
        z-index: 3;
        &__header {
            font-size: toRem(14);
            line-height: 140.62%;
            color: $black-topic;
            margin-top: toRem(16);
            margin-right: toRem(11);
        }
    }
}
</style>
