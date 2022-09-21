<template>
  <div
    class="menu-btn"
    role="button"
    @click="$emit('toggle'), (isOpen = !isOpen)"
    :class="burgerOpen"
  >
    <div class="menu-burger"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    burgerOpen() {
      return { isopen: this.isOpen };
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  transition: $tr;
  border-radius: 5px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }

  &.isopen .menu-burger {
    transform: translateX(-50px);
    background-color: transparent;
    box-shadow: none;

    &::before {
      transform: rotate(45deg) translate(35px, -35px);
    }

    &::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
}

.menu-burger {
  width: 34px;
  height: 4px;
  background-color: $white;
  border-radius: 5px;
  transition: $tr;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 34px;
    height: 4px;
    background-color: $white;
    border-radius: 5px;
    transition: $tr;
  }

  &::before {
    transform: translateY(-12px);
  }

  &::after {
    transform: translateY(12px);
  }
}
</style>
