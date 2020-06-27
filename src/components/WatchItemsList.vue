<template>
  <div>
    <div v-for="(item, index) in lisItems" :key="index">
      <VideoShortInfo
        :info="item"
        v-if="item.id.kind === watchItemTypes.Video"
      />
      <PlaylistShortInfo
        :info="item"
        v-if="item.id.kind === watchItemTypes.Playlist"
      />
      <ChannelShortInfo
        :info="item"
        v-if="item.id.kind === watchItemTypes.Channel"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import VideoShortInfo from "../components/VideoShortInfo.vue";
import PlaylistShortInfo from "../components/PlaylistShortInfo.vue";
import ChannelShortInfo from "../components/ChannelShortInfo.vue";
import { watchItemTypes } from "../enums/watchItemTypes";
export default Vue.extend({
  components: { VideoShortInfo, PlaylistShortInfo, ChannelShortInfo },
  data: function() {
    return {
      query: "",
      watchItemTypes: watchItemTypes,
      listItems: undefined,
    };
  },
  props: ["lisItems"],
  methods: {},
  watch: {},
});
</script>
