<template>
  <img
    v-if="thumbnails"
    :src="thumbnails.medium.url"
    class="thumbnail"
    :class="isChannel ? 'channel yt-circle' : ''"
  />
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default Vue.extend({
  mounted: function() {
    this.thumbnails.medium.url = this.thumbnails.medium.url.toString();
  },
  props: ["thumbnails", "isChannel"],
});
</script>

<style lang="scss" scoped>
.thumbnail {
  width: 250px;
  max-width: 50%;
  &.channel {
    width: 100px;
    height: 100px;
  }
}
</style>
