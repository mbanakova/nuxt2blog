<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="toggleBurger, (this.show = !this.show)"
      :class="burgerClass"
    ></div>

    <div class="sidenav" :class="burgerClass">
      <ul class="nav-list" @click="toggleBurger">
        <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TheSidenav",
  data() {
    return {
      show: false,
    };
  },
  methods: mapMutations(["toggleBurger"]),
  computed: {
    ...mapGetters(["burgerStatus"]),
    burgerClass() {
      return {
        isopen: this.burgerStatus,
      };
    },
    backdropClass() {
      this.show = !this.show;
      console.log(this.show);
      return {
        show: this.burgerStatus,
      };
    },
  },
  created() {
    this.burgerStatus;
  },
};
</script>

<style lang="scss" scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 70px;
  left: 0;
  transition: $tr;
}

.sidenav {
  height: 100%;
  width: 100%;
  color: $white;
  background-color: $dark;
  z-index: 10000;
  position: fixed;
  top: 70px;
  transform: translateX(-100%);
  box-sizing: border-box;
  padding: 30px;
  transition: all 0.5s ease-out;
  opacity: 0;

  &.isopen {
    transform: translateX(0);
    opacity: 1;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  font-size: 1.5rem;
  color: $white;
  display: block;
  padding: 10px;
}

.nav-item a:hover,
.nav-item a:active {
  color: $accent;
}
</style>
