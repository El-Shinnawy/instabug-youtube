<template>
  <a
    :href="'https://www.youtube.com/watch?v=' + info.id.videoId"
    v-if="info"
    class="yt-text-decoration-none yt-flex yt-margin-bottom-1"
  >
    <WatchItemThumbnail class="yt-margin-right-1" :thumbnails="info.snippet.thumbnails" />
    <div>
      <div class="yt-text-primary-color">
        {{ info.snippet.title }}
      </div>
      <a
        :href="'https://www.youtube.com/channel/' + info.snippet.channelId"
        class="yt-text-secondary-color yt-font-size-smaller yt-text-decoration-underline"
      >
        {{ info.snippet.channelTitle }}
      </a>
    </div>
  </a>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import WatchItemThumbnail from "../components/WatchItemThumbnail.vue";
export default Vue.extend({
  components: { WatchItemThumbnail },
  props: ["info"],
  methods: {},
  watch: {},
});
</script>
