<template>
  <div
    class="main-header-wrapper yt-flex yt-flex-align-center yt-flex-justify-between yt-primary-background yt-padding-left-1 yt-padding-right-1"
  >
    <router-link
      to="/search?query="
      class="brand-wrapper yt-font-size-big yt-flex yt-flex-align-center yt-text-primary-accent yt-text-decoration-none"
    >
      <span class="fab fa-youtube"></span>
      <div class="yt-font-weight-bold yt-margin-left-0-5 yt-flex yt-flex-align-center">
        <span class="title">{{$store.state.mainHeaderTitle}}</span>
      </div>
    </router-link>
    <SearchForm />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import SearchForm from "./SearchForm.vue";
import SearchMixin from "../mixins/SearchMixin";
export default Vue.extend({
  components: {
    SearchForm
  },
  mixins: [SearchMixin],
  watch: {}
});
</script>

<style lang="scss" scoped>
.main-header-wrapper {
  height: 50px;
  background-color: $default-header-background;
  color: $default-header-text-color;

  .title {
    overflow: hidden;
    max-width: 100px;
    text-overflow: ellipsis;
    display: inline-block;
  }

  @media screen and (min-width: $desktop-breakpoint) {
    background-color: $desktop-header-background;
    color: $desktop-header-text-color;
  }
}
</style>
