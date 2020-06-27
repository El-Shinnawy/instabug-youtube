<template>
  <div class="page-wrapper">
    <div v-if="details">
      <VideoPlayer :info="details.items[0].player.embedHtml" />
      <div class="info yt-margin-top-1 yt-margin-bottom-1">
        <div class="yt-font-size-bigger yt-margin-bottom-1">{{ details.items[0].snippet.title }}</div>
        <div class="yt-text-secondary-color yt-margin-bottom-0-5 yt-flex yt-flex-align-center">
          <a
            :href="'https://www.youtube.com/channel/' +
                details.items[0].snippet.channelId"
            class="yt-text-secondary-color yt-text-decoration-underline"
          >{{ details.items[0].snippet.channelTitle }}</a>
          <i class="fa fa-circle yt-margin-0-5" aria-hidden="true"></i>
          <span>{{ details.items[0].statistics.viewCount }} views</span>
        </div>
        <div class="yt-text-secondary-color yt-cursor-pointer yt-flex yt-flex-justify-between">
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
import { Configurations } from "@/configurations";
import xhr from "@/services/xhr";

export default Vue.extend({
  components: { VideoPlayer, WatchItemsList },
  created: function() {
    if (this.id) {
      this.getVideoDetails();
      this.getRelatedVideos();
    }
  },
  data: function() {
    return {
      id: this.$route.params.id,
      relatedVideos: {},
      details: {}
    };
  },
  methods: {
    getVideoDetails: function() {
      this.details = {
        kind: "youtube#videoListResponse",
        etag: "JKl-pCzc2iGO2YOSnDXbsRItNkA",
        items: [
          {
            kind: "youtube#video",
            etag: "a-ijgngx860XlLROIrJrgv_CLeg",
            id: "C0WjlgL2JZE",
            snippet: {
              publishedAt: "2015-08-21T09:09:56Z",
              channelId: "UCuFw_C2R0dV--CCG-Amu5rQ",
              title: "SpongePop SquarePants",
              description: "",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/C0WjlgL2JZE/default.jpg",
                  width: 120,
                  height: 90
                },
                medium: {
                  url: "https://i.ytimg.com/vi/C0WjlgL2JZE/mqdefault.jpg",
                  width: 320,
                  height: 180
                },
                high: {
                  url: "https://i.ytimg.com/vi/C0WjlgL2JZE/hqdefault.jpg",
                  width: 480,
                  height: 360
                },
                standard: {
                  url: "https://i.ytimg.com/vi/C0WjlgL2JZE/sddefault.jpg",
                  width: 640,
                  height: 480
                }
              },
              channelTitle: "Lara l",
              categoryId: "22",
              liveBroadcastContent: "none",
              localized: {
                title: "SpongePop SquarePants",
                description: ""
              }
            },
            contentDetails: {
              duration: "PT22S",
              dimension: "2d",
              definition: "sd",
              caption: "false",
              licensedContent: false,
              contentRating: {},
              projection: "rectangular"
            },
            statistics: {
              viewCount: "12",
              likeCount: "1",
              dislikeCount: "0",
              favoriteCount: "0",
              commentCount: "0"
            },
            player: {
              embedHtml:
                '\u003ciframe width="480" height="360" src="//www.youtube.com/embed/C0WjlgL2JZE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\u003e\u003c/iframe\u003e'
            }
          }
        ],
        pageInfo: {
          totalResults: 1,
          resultsPerPage: 1
        }
      };
      //   xhr
      //     .call({
      //       api: "videos",
      //       params: {
      //         part: ["snippet", "statistics", "player", "contentDetails"],
      //         id: this.id,
      //       },
      //     })
      //     .then((res) => (this.details = res));
    },
    getRelatedVideos: function() {
      this.relatedVideos = [
        {
          kind: "youtube#searchResult",
          etag: "hKkpaV3kdSRF9m-NlI6XxuzefkI",
          id: {
            kind: "youtube#video",
            videoId: "7xfeSvPdSrw"
          },
          snippet: {
            publishedAt: "2015-08-21T09:09:47Z",
            channelId: "UCuFw_C2R0dV--CCG-Amu5rQ",
            title: "Ben 10",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/7xfeSvPdSrw/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/7xfeSvPdSrw/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/7xfeSvPdSrw/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "Lara l",
            liveBroadcastContent: "none",
            publishTime: "2015-08-21T09:09:47Z"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: "3LB5fHONQqSxltLRZ7Xj4egCdIw",
          id: {
            kind: "youtube#video",
            videoId: "aVh1dPGbpqY"
          },
          snippet: {
            publishedAt: "2015-05-07T06:39:08Z",
            channelId: "UCs5jkQ41AXnwb5fF8pN7Yfw",
            title: "sponge pop balloon surprises babies",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/aVh1dPGbpqY/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/aVh1dPGbpqY/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/aVh1dPGbpqY/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "anas kali",
            liveBroadcastContent: "none",
            publishTime: "2015-05-07T06:39:08Z"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: "2E_b2Vy-asnhuytlB64mE2LmXMc",
          id: {
            kind: "youtube#video",
            videoId: "ioNng23DkIM"
          },
          snippet: {
            publishedAt: "2020-06-26T07:41:45Z",
            channelId: "UCOmHUn--16B90oW2L6FRR3A",
            title: "BLACKPINK - 'How You Like That' M/V",
            description:
              "BLACKPINK - 'How You Like That'\n\n보란 듯이 무너졌어\n바닥을 뚫고 저 지하까지\n옷 끝자락 잡겠다고\n저 높이 두 손을 뻗어봐도\n\n다시 캄캄한 이곳에 light up the sky\n네 두 눈을 보며 I’ll kiss you goodbye\n실컷 비웃어라 꼴좋으니까\n이제 너희 하나 둘 셋\n\nHa how you like that?\nYou gon’ like that that that that that\nHow you like that?\nHow you like that that that that that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nYour girl need it all and that’s a hundred\n백 개 중에 백 내 몫을 원해\nKarma come and get some \n딱하지만 어쩔 수 없잖아\nWhat’s up, I’m right back\n방아쇠를 cock back\nPlain Jane get hijacked\nDon’t like me? Then tell me how you like that\n\n더 캄캄한 이곳에 shine like the stars\n그 미소를 띠며 I’ll kiss you goodbye\n\n실컷 비웃어라 꼴좋으니까 \n이제 너희 하나 둘 셋\n\nHa how you like that?\nYou gon’ like that that that that that\nHow you like that?\nHow you like that that that that that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\n날개 잃은 채로 추락했던 날\n어두운 나날 속에 갇혀 있던 날\n그때쯤에 넌 날 끝내야 했어\nLook up in the sky it’s a bird it’s a plane\n\nBring out your boss bish\n\nBLACKPINK!\n\nHow you like that \nYou gon’ like that \nHow you like that \n\nMore about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttp://www.twitter.com/ygofficialblink\n\n#BLACKPINK #블랙핑크 #HowYouLikeThat #PreReleaseSingle #MV #20200626_6pm #OutNow #YG",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ioNng23DkIM/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/ioNng23DkIM/mqdefault.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/ioNng23DkIM/hqdefault.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "BLACKPINK",
            liveBroadcastContent: "none",
            publishTime: "2020-06-26T07:41:45Z"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: "M88l8vkTxfCYnvt01LUHZj28pPo",
          id: {
            kind: "youtube#video",
            videoId: "ahjFgO2OxzE"
          },
          snippet: {
            publishedAt: "2020-06-26T16:31:17Z",
            channelId: "UCtjwRHDID5qo9iGIaxpK6Nw",
            title:
              "MONSTER SCHOOL SONIC PIGGY ICE SCREAM PAW SECRET BASE REALISTIC MINECRAFT MINECRAFT ANIMATION",
            description:
              "SONIC ICE SCREAM BABY PIGGY PAW SECRET BASE MONSTER SCHOOL MINECRAFT ANIMATION REALISTIC MINECRAFT Hello Neighbor Mod minecraft\n\n#Minecraft #ШколаМонстров #MonsterSchool #RealLife #Minecraft #MinecraftLife #MinecraftLife #RealisticMinecraft",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ahjFgO2OxzE/default_live.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/ahjFgO2OxzE/mqdefault_live.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/ahjFgO2OxzE/hqdefault_live.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "Kotya Minecraft",
            liveBroadcastContent: "live",
            publishTime: "2020-06-26T16:31:17Z"
          }
        },
        {
          kind: "youtube#searchResult",
          etag: "-QfwgO7ujfrVS4ol2RLDOO8cbig",
          id: {
            kind: "youtube#video",
            videoId: "HCTf82W60Qg"
          },
          snippet: {
            publishedAt: "2020-06-26T21:43:23Z",
            channelId: "UC7yzMJSKJSp5O2zuzgt3Wsw",
            title: "Tails Plays Sonic 3 & Knuckles! PART 2! (Fun Friday #187)",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/HCTf82W60Qg/default_live.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/HCTf82W60Qg/mqdefault_live.jpg",
                width: 320,
                height: 180
              },
              high: {
                url: "https://i.ytimg.com/vi/HCTf82W60Qg/hqdefault_live.jpg",
                width: 480,
                height: 360
              }
            },
            channelTitle: "SonicSong182",
            liveBroadcastContent: "live",
            publishTime: "2020-06-26T21:43:23Z"
          }
        }
      ];

      //   SearchMixin.methods
      //     .$search({
      //       relatedToVideoId: this.id,
      //       type: "video",
      //       part: ["snippet"],
      //     })
      //     .then(res => (this.relatedVideos = res.items));
    }
  },
  watch: {
    $route(to, from) {
      if (this.$route.params.id) {
        this.id = this.$route.params.id;
        this.getVideoDetails();
        this.getRelatedVideos();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.fa-circle {
  font-size: 4px;
}
</style>
