<template>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__container"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: 0.5);

  &__inner {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__container {
    width: 50%;
    min-height: 300px;
    background: #ffffff;
  }
}
</style>