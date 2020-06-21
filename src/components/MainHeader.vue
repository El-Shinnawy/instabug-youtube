<template>
  <div
    class="main-header-wrapper yt-flex yt-flex-align-center yt-flex-justify-between 
    yt-primary-background yt-padding-left-1 yt-padding-right-1"
  >
    <div class="brand-wrapper yt-font-size-big yt-flex yt-flex-align-center">
      <span class="fab fa-youtube"></span>
      <div class="yt-font-weight-bold yt-margin-left-0-5">
        <span v-if="!query">YouTube</span>
        <span v-else>{{ query }}</span>
      </div>
    </div>
    <SearchForm />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import SearchForm from "./SearchForm.vue";
export default Vue.extend({
  data: function() {
    return {
      query: "",
    };
  },
  components: {
    SearchForm,
  },
});
</script>

<style lang="scss" scoped>
.main-header-wrapper {
  height: 50px;
  background-color: $default-header-background;
  color: $default-header-text-color;

  @media screen and (min-width: $desktop-breakpoint) {
    background-color: $desktop-header-background;
    color: $desktop-header-text-color;
  }
}
</style>
