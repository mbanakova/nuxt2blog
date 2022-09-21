<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  font: inherit;
  background-color: $bright;
  text-transform: uppercase;
  font-weight: 700;
  color: $white;
  padding: 5px;
  cursor: pointer;
  border: 1px solid $black;
  transition: $tr;
}

.button:hover,
.button:active {
  background-color: rgb(51, 51, 51);
  border: 1px solid $black;
}

.inverted {
  background-color: $white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: $white;
  border: 1px solid transparent;
}

.cancel {
  background-color: $accent;
  color: $white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: $white;
}
</style>
