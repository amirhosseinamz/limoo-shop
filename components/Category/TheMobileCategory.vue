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
@media (max-width: 960px) {
    .mobile-category {
        overflow-y: scroll;
        @include display-flex();
        flex-direction: column;
        align-items: flex-end;
        width: 95%;
        height: 80%;
        margin: 55px 5px 75px 5px;
        background: $white;
        border-radius: 10px;
        position: fixed;
        top: 0;
        z-index: 3;
        /* z-index: 200; */
        &__header {
            font-size: 14px;
            line-height: 140.62%;
            color: $black-topic;
            margin-top: 16px;
            margin-right: 11px;
        }
    }
}
</style>
