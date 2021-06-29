<template>
  <div class="wellcome-container">
    <div class="card">
      <div class="card-body">
        <div class="form-control">
          <p class="txt-header" dir="rtl">
            {{ getTextByTextKey("auth_welcome") }}
          </p>
          <p dir="rtl" class="txt-content">
            {{ getTextByTextKey("auth_wellcome_content") }}
          </p>
        </div>
        <div class="btn-control">
          <!-- to="/profile/personal-info" -->
            <base-button
              @button-clicked="closeWellcomeModalandGoToProfile"
              classes="badge-btn complete-btn"
              base-color="yellow"
              no-box-shadow
            >
            {{ getTextByTextKey("auth_aignup_complete") }}
          </base-button>
            <base-button
              @button-clicked="closeWellcomeModal"
              classes="badge-btn later-btn"
              no-box-shadow
              base-color="light-gray"
            >
            {{ getTextByTextKey("auth_aignup_now_not") }}
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  data() {
    return {};
  },
  methods: {
    getTextByTextKey,
    closeWellcomeModal() {
      this.$emit("event-close-modal-wellcome");
    },
    closeWellcomeModalandGoToProfile() {
      this.$emit("event-close-modal-and-go-to-perofile");
    },
  },
};
</script>

<style lang="scss" scoped>
.wellcome-container {
  height: 100vh;
  width: 100%;
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 72px 115px 0 0;
}

.card {
  @include display-flex();
  flex-direction: column;
  justify-content: center;
  width: 469px;
  height: 224px;
  background-color: $white;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px $box__shadow;
  border-radius: 10px;
}

.form-control {
  direction: rtl;
  font-family: inherit;
}
.btn-control {
  @include display-flex();
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
  font-family: inherit;
  width: 200px;
  height: 52px;
  font-size: 14px;
}
.complete-btn {
  margin: 0 0.625rem 1.75rem 1.5rem;
}
.later-btn {
  margin: 0 1.5rem 1.75rem 0.625rem;
}

@media screen and (max-width: 700px) {
  .wellcome-container {
    height: 100vh;
    @include display-flex();
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0 32px 0;
  }
  .btn-control {
    flex-direction: row-reverse;
  }
  .signup-container {
    height: 85vh;
    @include display-flex();
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
