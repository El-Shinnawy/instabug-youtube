<template>
  <div class="player-wrapper" v-html="info"></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["info"],
  methods: {},
});
</script>

<style lang="scss">
.player-wrapper {
  width: 100%;
  height: fit-content;
  iframe {
    width: 100%;
    height: 200px;
  }
}
</style>
