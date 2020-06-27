<template>
  <div class="channel-header">
    <img class="banner" :src="banners.bannerMobileImageUrl" />
    <div class="info yt-margin-left-0-5 yt-margin-right-0-5">
      <img class="thumbnail yt-circle" :src="thumbnails.default.url" />
      <div class="title yt-font-size-bigger">{{title}}</div>
      <div class="stats yt-padding-top-0-5 yt-padding-bottom-0-5 yt-flex yt-flex-align-between">
        <div class="subscribtion yt-text-brand-color yt-cursor-pointer yt-margin-right-1">
          <i class="fab fa-youtube yt-margin-right-0-5" aria-hidden="true"></i>
          Subscribe
        </div>
        <span class="yt-text-color-secondary">{{subscriberCount}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["title", "subscriberCount", "banners", "thumbnails"]
});
</script>

<style lang="scss" scoped>
.channel-header {
  background-color: $very-light-grey;
  .banner {
    width: 100%;
  }
  .info {
    margin-top: -40px;

    .thumbnail {
      width: 70px;
    }
  }
}
</style>