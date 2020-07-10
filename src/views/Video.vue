<template>
  <div class="page-wrapper">
    <div v-if="details">
      <VideoPlayer :info="details.items[0].player.embedHtml" />
      <div class="info yt-margin-top-1 yt-margin-bottom-1">
        <div class="yt-font-size-bigger yt-margin-bottom-1">
          {{ details.items[0].snippet.title }}
        </div>
        <div
          class="yt-text-secondary-color yt-margin-bottom-0-5 yt-flex yt-flex-align-center"
        >
          <a
            :href="
              'https://www.youtube.com/channel/' +
                details.items[0].snippet.channelId
            "
            class="yt-text-secondary-color yt-text-decoration-underline"
            >{{ details.items[0].snippet.channelTitle }}</a
          >
          <i class="fa fa-circle yt-margin-0-5" aria-hidden="true"></i>
          <span>{{ details.items[0].statistics.viewCount }} views</span>
        </div>
        <div
          class="yt-text-secondary-color yt-cursor-pointer yt-flex yt-flex-justify-between"
        >
          <div class="yt-flex yt-flex yt-flex-align-center">
            <i class="yt-margin-0-5 fa fa-thumbs-up" aria-hidden="true"></i>
            <span>{{ details.items[0].statistics.likeCount }}</span>
            <i class="yt-margin-0-5 fa fa-thumbs-down" aria-hidden="true"></i>
            <span>{{ details.items[0].statistics.dislikeCount }}</span>
          </div>
          <div class="yt-flex yt-flex yt-flex-align-center">
            <i class="yt-margin-0-5 fa fa-plus" aria-hidden="true"></i>
            <i class="yt-margin-0-5 fa fa-share" aria-hidden="true"></i>
            <i class="yt-margin-0-5 fa fa-flag" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <WatchItemsList v-if="relatedVideos" :listItems="relatedVideos" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import WatchItemsList from "@/components/WatchItemsList.vue";
import SearchMixin from "@/mixins/SearchMixin";
import xhr from "@/services/xhr";

export default Vue.extend({
  components: { VideoPlayer, WatchItemsList },
  created: function() {
    if (this.type === "playlist") {
      console.log(this.type);
    } else if (this.id) {
      this.getVideoDetails();
      this.getRelatedVideos();
    }
  },
  data: function() {
    return {
      id: this.$route.params.id,
      type: this.$route.params.type,
      relatedVideos: undefined,
      details: { items: [{ snippet: { title: "" } }] },
    };
  },
  methods: {
    getVideoDetails: function() {
      this.$store.commit(
        "setMainHeaderTitle",
        this.details.items[0].snippet.title
      );
      xhr
        .call({
          api: "videos",
          params: {
            part: ["snippet", "statistics", "player", "contentDetails"],
            id: this.id,
          },
        })
        .then((res) => (this.details = res));
    },
    getRelatedVideos: function() {
      SearchMixin.methods
        .$search({
          relatedToVideoId: this.id,
          type: "video",
          part: ["snippet"],
        })
        .then((res) => (this.relatedVideos = res.items));
    },
  },
  watch: {
    $route(to, from) {
      console.log(from, to);
      if (this.$route.params.type === "playlist") {
        console.log(this.type);
      } else if (this.$route.params.id) {
        this.id = this.$route.params.id;
        this.getVideoDetails();
        this.getRelatedVideos();
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.fa-circle {
  font-size: 4px;
}
</style>
