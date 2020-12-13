<template>
  <div class="store">
    <StoreItem
      v-for="item in data"
      :key="item.id"
      :item="item"
      @letShowModal="showHideModal"
    />

    <modal v-if="showModal" />
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
</style>