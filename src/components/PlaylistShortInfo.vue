<!-- It could have been the same component with VideoShortInfo -->
<template>
  <router-link
    :to="'/video/' + info.id.playlistId + '/playlist'"
    v-if="info"
    class="yt-text-decoration-none yt-flex yt-margin-bottom-1"
  >
    <WatchItemThumbnail class="yt-margin-right-1" :thumbnails="info.snippet.thumbnails" />
    <div>
      <div class="yt-text-primary-color">{{ info.snippet.title }}</div>
      <router-link
        :to="'/channel/' + info.snippet.channelId"
        class="yt-text-secondary-color yt-font-size-smaller yt-text-decoration-underline"
      >{{ info.snippet.channelTitle }}</router-link>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import WatchItemThumbnail from "../components/WatchItemThumbnail.vue";
export default Vue.extend({
  components: { WatchItemThumbnail },
  props: ["info"]
});
</script>
