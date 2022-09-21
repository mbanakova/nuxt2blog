<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>
<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";

export default {
  components: { TheHeader, TheSidenav },
  data() {
    return {
      displaySidenav: false,
    };
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
  overflow-x: hidden;
  font-size: 16px;
  line-height: 20px;
}
</style>
