<template>
  <router-link
    :to="'/channel/' + info.id.channelId"
    v-if="info"
    class="yt-text-decoration-none yt-flex yt-margin-bottom-1"
  >
    <WatchItemThumbnail
      class="yt-margin-right-1"
      :isChannel="true"
      :thumbnails="info.snippet.thumbnails"
    />
    <div class="yt-text-primary-color">{{ info.snippet.title }}</div>
  </router-link>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import WatchItemThumbnail from "../components/WatchItemThumbnail.vue";
export default Vue.extend({
  components: { WatchItemThumbnail },
  props: ["info"],
  methods: {},
  watch: {}
});
</script>
