<template>
  <div class="storeItem">
    <section class="storeItem__title">{{ item.brandName }}</section>
    <section class="storeItem__subTitle">{{ item.modelName }}</section>
    <section class="storeItem__price">{{ price }}</section>

    <additionalItems :bestSale="item.bestSale" :discount="item.discount" />
    <img
      src="../assets/icons/edit-black-18dp.svg"
      class="edit"
      @click="showModal"
    />
  </div>
</template>

<script>
import additionalItems from "./AdditionalIcon";

export default {
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {
    showModal() {
      this.$emit("letShowModal", true);
    },
  },
  computed: {
    price() {
      return `${this.item.price} UAH`;
    },
  },
  components: {
    additionalItems,
  },
};
</script>

<style scoped lang="scss">
.storeItem {
  position: relative;
  box-sizing: border-box;
  width: 23%;
  margin: 5px;
  padding: 3px;

  border: 1px solid #c2c2c2;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #f5f5f5;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: scale(1.05);
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 500;
  }
}

.edit {
  box-sizing: border-box;
  position: absolute;
  display: block;
  border-radius: 3px;
  right: 5px;
  bottom: 5px;

  &:hover {
    cursor: pointer;
    background: rgba(244, 143, 177, 0.5);
  }
}
</style>
