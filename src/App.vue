<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <MainHeader />
    <div class="main-content yt-padding-1">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import MainHeader from "@/components/MainHeader.vue";
export default {
  name: "App",
  components: {
    MainHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-primary-color;
}
</style>
