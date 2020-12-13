<template>
  <div class="modal">
    <div class="modal__inner">
      <div class="modal__container">
        <section class="modal__header">
          <slot name="header"></slot>
        </section>

        <section class="modal__content">
          <slot name="content"></slot>
        </section>

        <section class="modal__footer">
          <slot name="footer"></slot>
        </section>

        <span class="modal__close" @click="close">X</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
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
    padding: 10px;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    position: relative;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ff4986;
    font-weight: 500;
    transition: transform 0.3s;

    &:hover {
      cursor: pointer;
      transform: scale(0.8);
    }
  }

  &__header {
    font-size: 1.5rem;
    font-weight: 500;
    padding: 20px 0;
    border-bottom: 1px solid #c2c2c2;
  }

  &__footer {
    padding: 20px 0;
    border-top: 1px solid #c2c2c2;
  }
}
</style>