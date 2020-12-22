<template>
    <div class="wellcome-container">
        <div class="card">
            <div class="card-body">
                <form @submit.prevent="pressed">
                    <div class="form-control">
                        <p class="txt-header" dir="rtl">خوش اومدی!</p>
                        <p dir="rtl" class="txt-content">
                            شما عضو لیمو شدی و حالا میتونی مشخصاتت رو تکمیل کنی
                            یا به پر کردن سبد خریدت برسی!
                        </p>
                    </div>
                    <div class="btn-control">
                        <button class="badge-btn complete-btn" type="submit">
                            تکمیل مشخصات
                        </button>
                        <button class="badge-btn later-btn" type="submit">
                            فعلا نه
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
body {
    background-color: #ffffff;
}
.wellcome-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 72px;
    margin-right: 115px;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 469px;
    height: 224px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.03);
    border-radius: 10px;
}

.form-control {
    direction: rtl;
    font-family: IRANYekanWeb;
}
.btn-control {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.txt-header {
    font-size: 20px;
    line-height: 140.62%;
    font-weight: normal;
    text-align: right;
    margin: 27px 25px 16px 18px;
}
.txt-content {
    font-size: 14px;
    line-height: 140.62%;
    font-weight: normal;
    text-align: right;
    margin-bottom: 26px;
    margin-right: 25px;
    padding-left: 50px;
}
.badge-btn {
    font-family: "IRANYekanWeb";
    text-align: center;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    width: 200px;
    height: 52px;
    font-weight: 500;
    font-size: 14px;
}
.complete-btn {
    color: #ffffff;
    background: #ffcc40;
    margin: 0px 10px 28px 24px;
}
.later-btn {
    background: #f2f2f2;
    color: #515151;
    margin: 0px 24px 28px 10px;
}

@media screen and (max-width: 540px) {
    .btn-control {
        flex-direction: row-reverse;
    }
    .signup-container {
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        margin-right: 16px;
        margin-left: 16px;
        margin-bottom: 32px;
    }
    .card {
        width: 328px;
        height: 198px;
        border-radius: 25px;
        padding-right: 5px;
    }

    .badge-btn {
        width: 140px;
        height: 45px;
    }
    .complete-btn {
        margin: 0px 16px 20px 8px;
    }
    .later-btn {
        margin: 0px 8px 20px 16px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 296px;
        height: 25px;
        margin-right: 16px;
        margin-left: 16px;
    }
    .txt-content {
        width: 322px;
        font-size: 14px;
        margin-bottom: 15px;
        margin-right: 16px;
        margin-left: 16px;
    }
}
@media screen and (max-width: 350px) {
    .card {
        padding-right: 0px;
        width: 300px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 280px;
        margin: 37px 10px 20px 10px;
    }
    .txt-content {
        width: 280px;
        margin-right: 10px;
    }
}
@media screen and (max-width: 280px) {
    .card {
        margin-right: 0px;
        width: 270px;
    }
    .badge-btn {
        width: 130px;
        height: 45px;
    }
    .txt-header {
        font-size: 20px;
        line-height: 140.62%;
        width: 270px;
        margin-right: 5px;
    }
    .txt-content {
        width: 265px;
        margin-right: 5px;
        padding-left: 5px;
    }
}
</style>
