<template>
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle', 'toggle')" />
    <div class="logo">
      <nuxt-link to="/">GB news</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
  },
};
</script>

<style lang="scss" scoped>
.the-header {
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $black;
  box-sizing: border-box;
  padding: 10px 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: $white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: $accent;
}
</style>
