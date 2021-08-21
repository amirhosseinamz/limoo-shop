<template>
  <div class="p-tickets-content-main w-100 flex-column flex-wrap  d-rtl">
<!--    Add and edit Modal-->
    <transition name="backdrop-form">
      <div v-if="showModal || showAnsModal" class="backdrop"></div>
    </transition>
    <transition :name="modalAnimation">
        <add-ticket-modal
          v-if="showModal"
          :modal-mode="modalAnimation"
          :data-edit-ticket="dataEditTicket"
          @submit-ticket-add="submitTicketAdd"
          @close-modal="closeModal"
        />
    </transition>
<!--    Send Answer modal-->
    <transition :name="modalAnimation">
        <send-ans-ticket-modal
          v-if="showAnsModal"
          :modal-mode="modalAnimation"
          :data-edit-ticket="dataEditTicket"
          @submit-ticket-add="submitTicketAdd"
          @close-modal="closeModal"
        />
    </transition>
    <div class="w-100 flex-wrap p-tickets-content-btn-add-main">
      <base-button
        @button-clicked="addTicket"
        button-type="submit"
        classes="btn-change p-tickets-content-btn-data"
        base-color="yellow"
        mode="secondary-outline"
        >
        {{ getTextByTextKey("support_send_new_ticket") }}
      </base-button>

      <span class="p-ticket__topic" v-show="userTicket !== 0">
        {{ getTextByTextKey("support_request") }}
      </span>
    </div>
    <div class="user-Ticket__empty-container" v-show="userTicket === 0">
      <img
        src="/empty-pages/empty-ticket-list.svg"
        :alt="getTextByTextKey('support_empty')"
      />
      <span class="user-Ticket__empty">
        {{ getTextByTextKey("support_empty") }}
      </span>
    </div>
    <div class="w-100 flex-wrap">
      <div
        v-for="data in ticketData"
        :key="data.id"
        class="w-100 flex-wrap p-tickets-content-item"
      >
        <div
          class="flex-wrap w-100 p-ticketss-content-wrapper align-items-start"
        >
          <div class="w-100">
            <div class="w-100 flex-wrap  p-tickets-content-header">
              <!-- ======================== -->
              <div class="ticket__title">
                {{ data.ticketTitle }}
              </div>
              <!-- ----- -->
              <div class="p-tickets__state">

                <base-signs type="confirmed" v-if="data.state === 'accepted'"></base-signs>
                <base-signs type="waiting" v-if="data.state === 'acceptting'"></base-signs>
              </div>
              <!-- ----- -->
            </div>

            <div class="w-100 flex-column p-tickets-content-data-main">
              <div class="w-100 flex-wrap  p-tickets-content-data-wrapper">
                <div class="w-100 p-tickets-content-data">
                  <div class="ticket-content__question">
                    {{ data.question }}
                  </div>
                  <div v-show="data.answer" class="ticket-content__answer">
                    {{ getTextByTextKey("support_answer") }}
                    {{ data.answer }}
                  </div>
                </div>
                <div
                  class="p-tickets-content-data-btns w-100 justify-content-end"
                >
                  <div class="p-favorite-product-btn-main">
                    <base-button
                      @button-clicked="editTicket(data)"
                      button-type="button"
                      classes="p-ticket-content-btn-edit"
                      base-color="yellow"
                      mode="secondary-outline"
                    ></base-button>
                    <base-button
                      @button-clicked="showModalDeleteProduct(data)"
                      classes="p-favorite-product-btn-delete p-tickets-content-btn-delete"
                      no-box-shadow
                      base-color="light"
                    ></base-button>
                  </div>
                  <base-button
                    v-show="data.answer"
                    @button-clicked="sendAnswer"
                    classes="ticket__send-answer"
                    base-color="yellow"
                    mode="secondary-inline"
                    >
                    {{ getTextByTextKey("support_send_answer") }}
                  </base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addTicketModal from "./addTicketModal.vue";
import sendAnsTicketModal from "./sendAnsTicketModal.vue";
import { getTextByTextKey } from "~/modules/splitPartJsonResource.js";

export default {
  props: {
  },
  components: {
    addTicketModal,
    sendAnsTicketModal,
  },
  data() {
    return {
      sendAnswerToTicket: false,
      dataEditTicket: {},
      userTicket: -1,
      showModal: false,
      showAnsModal: false,
      windowWidth: 0
    };
  },
  computed: {
    modalAnimation() {
      if (this.windowWidth > 960) {
        return "form";
      } else {
        return "phone";
      }
    },
    ticketData() {
      return this.$store.getters["profile/ticket/ticket/ticketsData"];
    }
  },
  created() {
    this.userTicket = Object.values(this.ticketData).length;
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods: {
    getTextByTextKey,
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    showModalDeleteProduct(data) {
      this.$emit("show-modal-delete-product", data);
    },

    addTicket() {
      this.dataEditTicket = {};
      this.showModal = !this.showModal;
    },

    selectedProvince(data) {
      this.$emit("selected-province", data);
    },

    selectedCity(data) {
      this.$emit("selected-city", data);
    },

    submitTicketAdd(data) {
      // بر اساس آیدی تغیین می شود که حالت ویرایش است یا خیر //

      let stateEditAdd = "";
      if (typeof this.dataEditTicket.id == "undefined") {
        stateEditAdd = "add";
      } else {
        stateEditAdd = "edit";
      }
      this.showModal = false;
      this.$emit("submit-ticket-add", data, stateEditAdd);
    },

    closeModal() {
      this.dataEditTicket = {};
      this.showModal = false;
      this.showAnsModal = false;
      this.sendAnswerToTicket = false;
    },

    editTicket(data) {
      this.dataEditTicket = data;
      this.showModal = true;
    },
    sendAnswer(data) {
      this.showAnsModal = true;
      this.sendAnswerToTicket = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@include phone-modal-animation();
@include form-modal-animation();
@include backdrop-form-modal-animation();
.backdrop {
  @extend .modal-backdrop;
  background-color: $overlay--profile;
}
.user-Ticket__empty-container {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  height: toRem(220);
  background: $white;
  border-radius: toRem(10);
}
.user-Ticket__empty-container img {
  opacity: 1;
}
.user-Ticket__empty {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: center;
  color: $gray;
  margin-top: toRem(24);
  margin-bottom: toRem(24);
}
.v-leave-from {
  opacity: 0.5;
}
.v-leave-active {
  transition: all 300ms ease-in;
}
.v-leave-to {
  opacity: 0;
}
.p-tickets-content-main {
  border-bottom-left-radius: toRem(10);
  border-bottom-right-radius: toRem(10);
  background: $white;
  padding: 0 toRem(24) toRem(19) toRem(24);
}
.p-tickets-content-btn-add-main {
  @include display-flex();
  flex-direction: column;
  height: toRem(168);
}
.p-ticket__topic {
  font-size: toRem(18);
  line-height: 140.62%;
  text-align: right;
  margin-right: toRem(1);
  margin-top: toRem(28);
}
.p-tickets-content-btn-data {
  margin-top: 2rem;
  height: toRem(56);
  width: toRem(270);
}
.p-tickets-content-item {
  @include display-flex();
  border: toRem(1) solid $light-gray;
  border-radius: toRem(10);
  height: fit-content;
  min-height: toRem(247);
  margin-bottom: toRem(16);
  /* border: 1px solid red; */
}
.p-tickets-content-header {
  @include display-flex();
  justify-content: space-between;
  align-items: center;
  padding-right: toRem(16);
  padding-left: toRem(24);
  border-bottom: toRem(1) solid $light-gray;
  height: toRem(70);
  border-top-left-radius: toRem(10);
  border-top-right-radius: toRem(10);
}

.ticket__title {
  font-size: toRem(16);
  line-height: 140.62%;
  color: $red-logout;
  text-align: right;
}
.p-tickets__state {
  margin: auto 0;
}
.p-tickets-content-data {
  @include display-flex();
  flex-direction: column;
  justify-content: flex-start;
  padding-right: toRem(16);
  padding-left: toRem(16);
}
.ticket-content__question {
  text-align: right;
  margin-top: 24px;
  font-size: toRem(16);
  line-height: 140.62%;
  color: $black-topic;
}
.ticket-content__answer {
  text-align: right;
  margin-top: toRem(24);
  font-size: toRem(16);
  line-height: 140.62%;
  color: $green__answer;
}
.p-tickets-content-data-btns {
  @include display-flex();
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding-left: toRem(24);
  height: toRem(85);
  align-items: flex-start;
  margin-top: toRem(25);
}
.ticket__send-answer {
  height: toRem(47);
  width: toRem(130);
  font-family: inherit;
  margin-left: 1.5rem;
  transition: all 120ms ease-in;
}
.p-ticket-content-btn-edit::before {
  @include font-icon__limoo();
  font-size: toRem(16);
  content: "\e80e";
  color: $yellow;
}
.p-ticket-content-btn-edit {
  height: toRem(47);
  width: toRem(47);
  transition: all 120ms ease-in;
}
.p-ticketss-content-wrapper {
  @include display-flex();
}
.p-tickets-content-data-main {
  @include display-flex();
}

.p-favorite-product-btn-delete::before {
  @include font-icon__limoo();
  font-size: toRem(16);
  content: "\e826";
  color: $gray-3;
}

.p-tickets-content-data-wrapper {
  height: fit-content;
  min-height: toRem(177);
  @include display-flex();
  align-content: space-between;
}
.p-favorite-product-btn-main {
  margin-bottom: toRem(34);
}

@media (max-width: 1220px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 960px) {
  .p-tickets-content-main {
    border-radius: toRem(10);
    padding: 0 toRem(21) toRem(18) toRem(21);
  }
  .p-tickets-content-btn-add-main {
    margin-top: .5rem;
  }
  .p-tickets-content-btn-data {
    margin-top: 1rem;
    height: toRem(47);
    width: toRem(259);
  }
  .p-ticket__topic {
    font-size: toRem(14);
    margin-right: 0;
    margin-top: toRem(24);
    margin-bottom: toRem(14);
  }
  .ticket__send-answer {
    font-size: toRem(14);
    width: toRem(149);
  }
}

@media (max-width: 600px) {
  .p-tickets-content-btn-add-main::v-deep {
      .p-tickets-content-btn-data {
        width: 70%;
        margin: 1rem auto 0.5rem auto;
      }
  }
  .user-Ticket__empty-container {
    height: toRem(136);
  }
  .user-Ticket__empty-container img {
    margin: 0 auto;
    height: toRem(78);
    width: toRem(78);
  }
  .user-Ticket__empty {
    font-size: toRem(13);
    margin-top: toRem(24);
    margin-bottom: toRem(10);
  }
  .p-tickets-content-header {
    padding-right: toRem(16);
    padding-left: toRem(16);
    min-height: toRem(55);
    height: fit-content;
    background: $white;
  }
  .p-tickets-content-item {
    background: $white;
    min-height: fit-content;
    margin-bottom: toRem(8);
  }
  .p-tickets-content-main {
    padding: 0 toRem(11) toRem(18) toRem(11);
  }
  .p-tickets-content-data-btns {
    padding-left: toRem(16);
    margin-bottom: 0;
    margin-top: toRem(35);
    height: toRem(63);
    align-items: center;
    justify-content: space-between;
    border-top: toRem(1) solid $gray-border;
  }
  .ticket__title {
    font-size: toRem(13);
  }

  .ticket__send-answer {
    width: toRem(149);
    margin-right: toRem(8);
  }
  .ticket-content__question {
    text-align: justify;
    margin-top: toRem(8);
    font-size: toRem(14);
  }
  .ticket-content__answer {
    text-align: justify;
    margin-top: toRem(16);
    font-size: toRem(14);
  }
  .p-tickets-content-data {
    padding-right: toRem(8);
    padding-left: toRem(40);
  }

  .p-favorite-product-btn-delete {
    width: toRem(37)!important;
    height: toRem(37)!important;
  }
  .p-tickets-content-btn-delete {
    margin-right: 1rem;
  }
  .p-ticket-content-btn-edit {
    background: $yellow!important;
    height: toRem(36)!important;
    width: toRem(36)!important;
    border: none!important;
  }
  .p-ticket-content-btn-edit:hover {
    background: $white!important;
    border: toRem(2) solid $yellow!important;
  }
  .p-ticket-content-btn-edit::before {
    font-size: toRem(14);
    color: $white;
  }
  .p-ticket-content-btn-edit:hover::before {
    color: $yellow;
  }
  .p-tickets-content-data-wrapper {
    min-height: toRem(166);
  }
  .p-favorite-product-btn-main {
    margin-bottom: 0;
  }
  .p-tickets-content-item:last-of-type {
    margin-bottom: 0;
  }
}
@media (max-width: 280px) {
  .p-tickets-content-btn-data {
    width: toRem(200);
  }
  .p-tickets-content-main {
    padding: 0 0 toRem(18) 0;
  }
}
</style>
