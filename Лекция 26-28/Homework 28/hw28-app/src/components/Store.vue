<template>
  <div class="store">
    <StoreItem
      v-for="item in data"
      :key="item.id"
      :item="item"
      @letShowModal="showHideModal"
    />

    <modal v-if="showModal" class="store__modal" @close="showHideModal">
      <template v-slot:header>
        <span>Редактирование</span>
      </template>

      <template v-slot:content>
        <form class="modal__content">
          <div class="modal__field">
            <label>Бренд:</label>
            <input type="text" />
          </div>

          <div class="modal__field">
            <label>Модель:</label>
            <input type="text" />
          </div>

          <div class="modal__field">
            <label>Цена:</label>
            <input type="number" />
          </div>
        </form>
      </template>

      <template v-slot:footer>
        <button class="pure-material-button-contained">Редактировать</button>
      </template>
    </modal>
  </div>
</template>

<script>
import StoreItem from "./StoreItem.vue";
import modal from "./common/Modal";

export default {
  data() {
    return {
      data: [],
      showModal: false,
    };
  },
  methods: {
    showHideModal(value) {
      this.showModal = value;
    },
  },
  async created() {
    const data = await (await fetch("http://localhost:3003/")).json();
    this.data = data;
  },
  components: {
    StoreItem,
    modal,
  },
};
</script>

<style scoped lang="scss">
.store {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
}

.modal {
  &__content {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__field {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
  }

  &__field > label {
    padding: 5px;
    flex: 1;
  }

  &__field > input {
    border-radius: 3px;
    border: 1px solid #c2c2c2;
    flex: 2;

    &:focus {
      outline: 0;
    }
  }
}
</style>