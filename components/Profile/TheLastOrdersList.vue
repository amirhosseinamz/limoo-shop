<template>
    <div>
        <table class="d-rtl">
            <tr class="table_header">
                <th>شناسه سفارش</th>
                <th>تاریخ سفارش</th>
                <th>مبلغ کل</th>
                <th>وضعیت سفارش</th>
                <th>جزئیات</th>
            </tr>
            <tr v-show="userOrdersList == 0">
                <td></td>
                <td></td>
                <td class="user-listOrders__empty-holder">
                    <div class="user-listOrders__empty-container">
                        <span class="user-listOrders__empty d-rtl"
                            >موردی یافت نشد!</span
                        >
                    </div>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr v-for="data in tableData" :key="data.id" class="table_content">
                <td>{{ data.orderCode }}</td>
                <td>{{ data.orderDate }}</td>
                <td>{{ data.orderPrice }} تومان</td>
                <td>{{ data.orderSituation }}</td>
                <td>
                    <NuxtLink
                        :to="
                            '/profile/my-orders/in-progress/detail/' +
                                data.orderCode
                        "
                        class="p-order-list-btn-link"
                    >
                        <span class="btn-text__order-detail">مشاهده</span>
                    </NuxtLink>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        tableData: { type: [Object, Array], default: {} }
    },
    data() {
        return {
            userOrdersList: -1
        };
    },
    created() {
        this.userOrdersList = Object.values(this.tableData).length;
    }
};
</script>
<style lang="scss" scoped>
table {
    margin-right: 10px;
    border-spacing: 0px;
    width: 100%;
    margin-top: 13px;
}
.user-listOrders__empty-holder {
    @include display-flex();
    flex-direction: row;
    justify-content: center;
    /* border: 1px solid red; */
    width: 100%;
}
.user-listOrders__empty-container {
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 169px;
    width: 140px;
    /* border: 1px solid red; */
}
.user-listOrders__empty-container img {
    opacity:1;
}
.user-listOrders__empty {
    @include display-flex();
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    line-height: 140.62%;
    text-align: center;
    width: 100%;
    height: 100%;
    color: $gray;
}
.table_header {
    height: 72px;
    box-shadow: 0px 8px 16px $box__shadow;
}
.table_content {
    height: 68px;
}
.table_content:nth-child(2n) {
    background-color: $overlay;
}
.p-order-list-btn-link {
    text-decoration: none;
}
.btn-text__order-detail {
    font-size: 16px;
    line-height: 140.62%;
    color: $black-topic;
}
.btn-text__order-detail::after {
    @include font-icon__limoo();
    font-size: 11px;
    margin-right: 8px;
    content: "\e801";
    color: $black-topic;
}
th,
td {
    width: 20%;
}
td {
    font-family: inherit;
    font-size: 16px;
    font-weight: 400;
    color: $code;
}

th {
    font-family: inherit;
    font-size: 18px;
    font-weight: 400;
    color: $black-topic;
}

@media (max-width: 1220px) {
    th {
        font-size: 15px;
    }
    td {
        font-size: 14px;
    }
    .btn-text__order-detail {
        font-size: 14px;
    }
    .btn-text__order-detail::after {
        font-size: 10px;
        margin-right: 6px;
    }
}
</style>
