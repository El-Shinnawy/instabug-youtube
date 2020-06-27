<template>
  <WatchItemsList :listItems="searchResultsList" />
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { Configurations } from "../configurations";
import router from "../router";
import WatchItemsList from "../components/WatchItemsList.vue";
import SearchMixin from "../mixins/SearchMixin";
import { SearchParams } from "@/models/search-params";
export default Vue.extend({
  components: { WatchItemsList },
  created: function() {
    // this.search();
  },
  data: function() {
    return {
      query: "",
      searchResultsList: [
        {
          kind: "youtube#searchResult",
          etag: "j2OL1OEpLGE2rHgNErSpKfuCvfw",
          id: {
            kind: "youtube#video",
            videoId: "0bKVpc8U2go",
          },
          snippet: {
            publishedAt: "2019-04-11T10:00:00Z",
            channelId: "UCx27Pkk8plpiosF14qXq-VA",
            title: "Top 13 Krabby Patty Moments! 🍔 #TBT | SpongeBob",
            description:
              "It's the Krabby Patty in all its glory! Here's the best moments of the finest burger under the sea! Watch more of your favorite shows on Nick! ▻▻ Subscribe for ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/0bKVpc8U2go/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/0bKVpc8U2go/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/0bKVpc8U2go/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "SpongeBob SquarePants Official",
            liveBroadcastContent: "none",
            publishTime: "2019-04-11T10:00:00Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "WB7O2LRTEwVLs19kcUW8-OliPYo",
          id: {
            kind: "youtube#video",
            videoId: "Ommz8QGztak",
          },
          snippet: {
            publishedAt: "2020-01-16T14:00:02Z",
            channelId: "UCZTLU39XbfN04FBXVc0vD1g",
            title: "SpongeBob | Nickelodeon Arabia | سبونج بوب | حب الجيران",
            description:
              "ومن الذين لا يحبون جيرانهم؟ اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة مثل سبونج...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Ommz8QGztak/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Ommz8QGztak/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Ommz8QGztak/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Nickelodeon Arabia",
            liveBroadcastContent: "none",
            publishTime: "2020-01-16T14:00:02Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "AarcR83nF8pw8EilSRw26TdLIeY",
          id: {
            kind: "youtube#channel",
            channelId: "UCdP8PkMqzEo-JbIEWNpJCVw",
          },
          snippet: {
            publishedAt: "2019-01-16T08:38:49Z",
            channelId: "UCdP8PkMqzEo-JbIEWNpJCVw",
            title: "sponge pop",
            description: "",
            thumbnails: {
              default: {
                url:
                  "https://yt3.ggpht.com/-O6y2mv7MZIg/AAAAAAAAAAI/AAAAAAAAAAA/hbL5uSZGvOo/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
              medium: {
                url:
                  "https://yt3.ggpht.com/-O6y2mv7MZIg/AAAAAAAAAAI/AAAAAAAAAAA/hbL5uSZGvOo/s240-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
              high: {
                url:
                  "https://yt3.ggpht.com/-O6y2mv7MZIg/AAAAAAAAAAI/AAAAAAAAAAA/hbL5uSZGvOo/s800-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
            },
            channelTitle: "sponge pop",
            liveBroadcastContent: "none",
            publishTime: "2019-01-16T08:38:49Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "9s_ZsNzBYzFNonCyycGpGk4f6LQ",
          id: {
            kind: "youtube#video",
            videoId: "kpiPVnwKpmg",
          },
          snippet: {
            publishedAt: "2019-10-25T14:00:08Z",
            channelId: "UCZTLU39XbfN04FBXVc0vD1g",
            title: "SpongeBob | Nickelodeon Arabia | سبونج بوب | بريتي باتي",
            description:
              "ابتكر سبونج بوب فكرة عمل لكن السيد سلطع لا يريد أي جزء منها، لذلك قرر أن ينفّذها بنفسه. اشترك الآن لمشاهدة...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/kpiPVnwKpmg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/kpiPVnwKpmg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/kpiPVnwKpmg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Nickelodeon Arabia",
            liveBroadcastContent: "none",
            publishTime: "2019-10-25T14:00:08Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "xwLV-QUDCQs7Ns_Ph6xrUGk5_aM",
          id: {
            kind: "youtube#video",
            videoId: "FV2Q5_l7laA",
          },
          snippet: {
            publishedAt: "2019-08-03T06:00:00Z",
            channelId: "UCQU3PO2g_rmqbmr8VJWvrsA",
            title:
              "SpongeBob Schwammkopf | Nachbarschaftliche Liebe | Nickelodeon Deutschland",
            description:
              "Wer liebt seine Nachbarn nicht? Abonniere unseren Kanal, um noch mehr von deinen Nickelodeon-Lieblingsserien wie Spongebob Schwammkopf, Teenage ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/FV2Q5_l7laA/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/FV2Q5_l7laA/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/FV2Q5_l7laA/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Nickelodeon Deutschland",
            liveBroadcastContent: "none",
            publishTime: "2019-08-03T06:00:00Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "bP3KtbG0A5sNsKVa3gfuHAWuwM0",
          id: {
            kind: "youtube#video",
            videoId: "kmcDSmxpdZc",
          },
          snippet: {
            publishedAt: "2019-06-09T20:22:04Z",
            channelId: "UCm569FJjZlKbNCK9vpzfJNw",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/kmcDSmxpdZc/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/kmcDSmxpdZc/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/kmcDSmxpdZc/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Sabreen Abd",
            liveBroadcastContent: "none",
            publishTime: "2019-06-09T20:22:04Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "jTxrsf1PHm1ub0Bz_ofS8AAdmlw",
          id: {
            kind: "youtube#playlist",
            playlistId: "PL8SRCFFo9fr0G-KMsuhkn1eh7bP8eZkIQ",
          },
          snippet: {
            publishedAt: "2019-10-08T01:20:12Z",
            channelId: "UCPPD4g3-Q3TwvNDdqHF8GVQ",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/9Z09x_X4ZZ8/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/9Z09x_X4ZZ8/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/9Z09x_X4ZZ8/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "NOURHAN HAKAM",
            liveBroadcastContent: "none",
            publishTime: "2019-10-08T01:20:12Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "ssgX5pgj_xtCkKmuW-xRCRWXaLY",
          id: {
            kind: "youtube#playlist",
            playlistId: "PLBiY0dXdcWU0zQwff1SDKCC9dasNkjXGp",
          },
          snippet: {
            publishedAt: "2019-09-12T09:28:09Z",
            channelId: "UCu4gS2Bbw14Fk8v6sj1TwUA",
            title: "spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/XEjU65jDnVg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/XEjU65jDnVg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/XEjU65jDnVg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Rahaf Omar",
            liveBroadcastContent: "none",
            publishTime: "2019-09-12T09:28:09Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "UjOtbtU_DDaXZC5EMmm-GLUV1wk",
          id: {
            kind: "youtube#video",
            videoId: "xerjyfKCpfY",
          },
          snippet: {
            publishedAt: "2020-03-13T16:03:52Z",
            channelId: "UCN5GMwR-lLz_J9-HhKyH-mw",
            title: "spongepop remixx",
            description: "like,share and suscribe.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/xerjyfKCpfY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/xerjyfKCpfY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/xerjyfKCpfY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Afiq Trading",
            liveBroadcastContent: "none",
            publishTime: "2020-03-13T16:03:52Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "-cvSAYHe1tJQXbFLF3_oy7ac8cI",
          id: {
            kind: "youtube#playlist",
            playlistId: "PLhLFAl11rl8bXmcKKudePmmMjP84a7qcx",
          },
          snippet: {
            publishedAt: "2016-06-13T05:27:05Z",
            channelId: "UC0T9oacCInj9XUuE_9r9Zkw",
            title: "Spongepop der killer",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/ZXjWeHFap7c/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/ZXjWeHFap7c/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/ZXjWeHFap7c/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Fabian Vata",
            liveBroadcastContent: "none",
            publishTime: "2016-06-13T05:27:05Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "oodlOPiPWxRr7aFBfR6LeJV61D0",
          id: {
            kind: "youtube#video",
            videoId: "Fie6cBfjCyU",
          },
          snippet: {
            publishedAt: "2017-06-10T19:23:50Z",
            channelId: "UC2wvHBMsu2Zm9yMvYSQASJQ",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Fie6cBfjCyU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Fie6cBfjCyU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Fie6cBfjCyU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "eman raafat",
            liveBroadcastContent: "none",
            publishTime: "2017-06-10T19:23:50Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "QFFMONrNQNZVjLLvJIJ6fBpUetI",
          id: {
            kind: "youtube#video",
            videoId: "FkF8Aqz5bY8",
          },
          snippet: {
            publishedAt: "2020-06-22T05:16:54Z",
            channelId: "UCdP8PkMqzEo-JbIEWNpJCVw",
            title: "【情侣】❤️摸男友喉结是一种什么体验？抖音tiktok",
            description:
              "摸男友喉结是一种什么体验？ 评论告诉我你们摸过男友喉结吗  ？ 谢谢有你们你们就是我的动力丫❤️ #tiktok ＃抖音＃姐弟恋＃情侣嗯，没...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/FkF8Aqz5bY8/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/FkF8Aqz5bY8/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/FkF8Aqz5bY8/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "sponge pop",
            liveBroadcastContent: "none",
            publishTime: "2020-06-22T05:16:54Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "WlpTXbymIAcIrZFScYWaeI5h6Fc",
          id: {
            kind: "youtube#video",
            videoId: "BvsiQh_LlvM",
          },
          snippet: {
            publishedAt: "2015-03-13T18:36:26Z",
            channelId: "UCuUKRaK1z0si3whDFaPZ96g",
            title: "Spongepop",
            description: "Ist auch lustig.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/BvsiQh_LlvM/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/BvsiQh_LlvM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/BvsiQh_LlvM/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Pascal Godina",
            liveBroadcastContent: "none",
            publishTime: "2015-03-13T18:36:26Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "aFPWGWN4bLTyiko_tCX-jn2VyD0",
          id: {
            kind: "youtube#playlist",
            playlistId: "PLEU5HqhbhpEEw8jL9s1_aM72pKq0a9jbM",
          },
          snippet: {
            publishedAt: "2017-07-11T20:06:33Z",
            channelId: "UCAECgmwuFdQcR2rys_3XG5Q",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/bRW-w_UIjYk/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/bRW-w_UIjYk/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/bRW-w_UIjYk/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Tomáš Stejskal",
            liveBroadcastContent: "none",
            publishTime: "2017-07-11T20:06:33Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "NeMSQv5jCeB0U0s3dxPtudXvNM0",
          id: {
            kind: "youtube#video",
            videoId: "C0WjlgL2JZE",
          },
          snippet: {
            publishedAt: "2015-08-21T09:09:56Z",
            channelId: "UCuFw_C2R0dV--CCG-Amu5rQ",
            title: "SpongePop SquarePants",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/C0WjlgL2JZE/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/C0WjlgL2JZE/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/C0WjlgL2JZE/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Lara l",
            liveBroadcastContent: "none",
            publishTime: "2015-08-21T09:09:56Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "3vqB9AjQYtwhNRJZNfHwrGNq2kw",
          id: {
            kind: "youtube#video",
            videoId: "_TyhEj-4Y0o",
          },
          snippet: {
            publishedAt: "2016-07-02T08:47:52Z",
            channelId: "UCnbcrdaaQHxQPVLwqbaZBhQ",
            title: "Spongepop",
            description: "Cool.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/_TyhEj-4Y0o/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/_TyhEj-4Y0o/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/_TyhEj-4Y0o/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Alina Pichler",
            liveBroadcastContent: "none",
            publishTime: "2016-07-02T08:47:52Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "LzT9319GKM7ifSrTW9ClRdEj50c",
          id: {
            kind: "youtube#video",
            videoId: "GaVcuV1PsWE",
          },
          snippet: {
            publishedAt: "2011-12-17T17:15:32Z",
            channelId: "UCVH4OCvCde69kMd5alhbysw",
            title: "Spongepop.wmv",
            description: "sponge pop سبونج بوب.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/GaVcuV1PsWE/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/GaVcuV1PsWE/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/GaVcuV1PsWE/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "spongpopsq",
            liveBroadcastContent: "none",
            publishTime: "2011-12-17T17:15:32Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "YFmeUdiU2fU2etAfNcoBYDez-tk",
          id: {
            kind: "youtube#video",
            videoId: "0FK-ei8sZPM",
          },
          snippet: {
            publishedAt: "2019-08-14T18:51:23Z",
            channelId: "UC_TzJ7Z1ZGlGlp8PNTEaeOQ",
            title:
              "Spongebob Squarepants Spongepop Culturepants Squidward old timey figure Review",
            description:
              "He's just so amazing! Love him so much! I DO NOT OWN THE MUSIC!!! Happy 20th anniversary Spongebob!!!",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/0FK-ei8sZPM/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/0FK-ei8sZPM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/0FK-ei8sZPM/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "MsBerann",
            liveBroadcastContent: "none",
            publishTime: "2019-08-14T18:51:23Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "mdKswJkZUXgpsOX19IuKyRuRKdQ",
          id: {
            kind: "youtube#video",
            videoId: "-gVfQC6xuYY",
          },
          snippet: {
            publishedAt: "2019-06-30T15:22:30Z",
            channelId: "UCwd2m_0TSvBo0u5veid1-UA",
            title: "spongepop\\ episode cat kenny",
            description: "subscribe on my channel.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/-gVfQC6xuYY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/-gVfQC6xuYY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/-gVfQC6xuYY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Belal / بلال",
            liveBroadcastContent: "none",
            publishTime: "2019-06-30T15:22:30Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "TlYe9Y36yNLBDLfRFRHTSUaPSHg",
          id: {
            kind: "youtube#video",
            videoId: "n6s0OkQncp4",
          },
          snippet: {
            publishedAt: "2012-05-23T18:26:03Z",
            channelId: "UCgJil2x7DPT9UegdF2bPQkw",
            title: "spongepop",
            description:
              "J'ai créé cette vidéo avec le logiciel de caméra Web Logitech.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/n6s0OkQncp4/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/n6s0OkQncp4/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/n6s0OkQncp4/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Dany16121999",
            liveBroadcastContent: "none",
            publishTime: "2012-05-23T18:26:03Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "0YfDiJeZR0iVAcghQfOoyrs_-mM",
          id: {
            kind: "youtube#video",
            videoId: "4cBMD6JAPQU",
          },
          snippet: {
            publishedAt: "2016-09-03T00:59:16Z",
            channelId: "UCSE3YjLcUJICIvM7kCjmPkg",
            title: "Spongepop",
            description:
              "What if instead of having a hungry heart like Bruce Springsteen suggests, we all craved ass instead?",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/4cBMD6JAPQU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/4cBMD6JAPQU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/4cBMD6JAPQU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Jawsh",
            liveBroadcastContent: "none",
            publishTime: "2016-09-03T00:59:16Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Fkg84mVdsRma3zTaADGRXDCKTkI",
          id: {
            kind: "youtube#video",
            videoId: "8GM3jBo2MIY",
          },
          snippet: {
            publishedAt: "2019-12-27T04:52:33Z",
            channelId: "UC6Nh8w2Dh7nPx1nN2J-Ah2w",
            title: "SpongePop - color fill puzzle",
            description:
              "A simple but addictive coloring puzzle game that is completely free to play. ▷ DOWNLOAD ◁ • (Playstore) https://play.google.com/store/apps/details?id=com.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/8GM3jBo2MIY/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/8GM3jBo2MIY/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/8GM3jBo2MIY/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Seeplay",
            liveBroadcastContent: "none",
            publishTime: "2019-12-27T04:52:33Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "W4UA1JMKaiphybJLz9ul6up5ifY",
          id: {
            kind: "youtube#video",
            videoId: "4WCbjCyauLA",
          },
          snippet: {
            publishedAt: "2019-11-15T22:00:00Z",
            channelId: "UCtMeM-NXm5Fsne1G-cU1tNw",
            title:
              "The SpongeBob SquarePants Anime COMPLETE EDITION (OFFICIAL) - All openings + ending (Creditless)",
            description:
              "Everyone was already uploading all my openings so I decided to release a complete compilation of my own, including the ending animation! We're in the final ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/4WCbjCyauLA/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/4WCbjCyauLA/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/4WCbjCyauLA/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Narmak",
            liveBroadcastContent: "none",
            publishTime: "2019-11-15T22:00:00Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "mRmWL8jNI2etLxblUpNBSEa4Jms",
          id: {
            kind: "youtube#video",
            videoId: "1yBH0xURN-Y",
          },
          snippet: {
            publishedAt: "2012-05-04T18:49:28Z",
            channelId: "UCgJil2x7DPT9UegdF2bPQkw",
            title: "spongepop",
            description:
              "J'ai créé cette vidéo avec le logiciel de caméra Web Logitech.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/1yBH0xURN-Y/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/1yBH0xURN-Y/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/1yBH0xURN-Y/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Dany16121999",
            liveBroadcastContent: "none",
            publishTime: "2012-05-04T18:49:28Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "ibnwkdPYrWecV14cokhue4Tj0jc",
          id: {
            kind: "youtube#video",
            videoId: "GNpbQm3OafU",
          },
          snippet: {
            publishedAt: "2020-01-30T10:14:43Z",
            channelId: "UCNOlfPAzCbPLgmFj9txkpSg",
            title:
              "SpongePop - color fill puzzle (by Seeplay Inc.) IOS Gameplay Video (HD)",
            description:
              "App description: ▷ HOW TO PLAY ◁ • Color all sponges in the same color. • Once a sponge has been painted, it cannot be repainted. ▷ FEATURES ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/GNpbQm3OafU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/GNpbQm3OafU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/GNpbQm3OafU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "IOSTouchPlayHD",
            liveBroadcastContent: "none",
            publishTime: "2020-01-30T10:14:43Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "nC3oCpsh0bYLZUXKPx58L139Mzc",
          id: {
            kind: "youtube#channel",
            channelId: "UCUPHl427iBrLUKGGGovhcuQ",
          },
          snippet: {
            publishedAt: "2018-03-04T09:52:14Z",
            channelId: "UCUPHl427iBrLUKGGGovhcuQ",
            title: "spongepop squarepunk channell",
            description:
              "MELODIC POP PUNK, EST. 2016 KEEP SUPPORT US AND SMILE WITH SPONGEBOB :)",
            thumbnails: {
              default: {
                url:
                  "https://yt3.ggpht.com/-xF6wCdcXRCA/AAAAAAAAAAI/AAAAAAAAAAA/Ew5zSRKUnJk/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
              medium: {
                url:
                  "https://yt3.ggpht.com/-xF6wCdcXRCA/AAAAAAAAAAI/AAAAAAAAAAA/Ew5zSRKUnJk/s240-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
              high: {
                url:
                  "https://yt3.ggpht.com/-xF6wCdcXRCA/AAAAAAAAAAI/AAAAAAAAAAA/Ew5zSRKUnJk/s800-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
            },
            channelTitle: "spongepop squarepunk channell",
            liveBroadcastContent: "none",
            publishTime: "2018-03-04T09:52:14Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "DiXPKl7G-AGa_GadSbY1cR0BToY",
          id: {
            kind: "youtube#video",
            videoId: "zP0ACq0PJ4s",
          },
          snippet: {
            publishedAt: "2018-10-17T10:26:30Z",
            channelId: "UC4Pq3OTMPLspJeAOZz0kHVQ",
            title: "15#_ثانية | برجر سبونج بوب 15s | Sponge Pop Burger#",
            description:
              "برجر سبونج بوب   المقادير     لحم مفروم ناعم متبل بالفلفل الاسود والملح...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/zP0ACq0PJ4s/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/zP0ACq0PJ4s/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/zP0ACq0PJ4s/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "15 ثانية",
            liveBroadcastContent: "none",
            publishTime: "2018-10-17T10:26:30Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "QRKzIFhWLhIyAO3aFacPSqvIdUM",
          id: {
            kind: "youtube#video",
            videoId: "g7HhttYeojQ",
          },
          snippet: {
            publishedAt: "2018-03-26T15:29:09Z",
            channelId: "UCGP9g8UO_XsF7o1FScshP5g",
            title: "سبونج بوب Sponge pop",
            description:
              "Games for kids Sponge Pop Happy Sponge Pop العاب اطفال سبونج بوب.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/g7HhttYeojQ/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/g7HhttYeojQ/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/g7HhttYeojQ/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "EveryThing",
            liveBroadcastContent: "none",
            publishTime: "2018-03-26T15:29:09Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "e0tI1KlxQknCAfbWy9YJqmiq5NA",
          id: {
            kind: "youtube#playlist",
            playlistId: "PL70A40F7AE4F26D72",
          },
          snippet: {
            publishedAt: "2011-09-09T19:58:06Z",
            channelId: "UCDwoZG2EbxkESA6vBFogWUA",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/6vPDvbD1SKg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/6vPDvbD1SKg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/6vPDvbD1SKg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "mam saad",
            liveBroadcastContent: "none",
            publishTime: "2011-09-09T19:58:06Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "boelhyU15NAp6iyUUItCaggRQ-o",
          id: {
            kind: "youtube#playlist",
            playlistId: "PLpgF3cDq8oioJym3W_Cx8xjOitzs6opFC",
          },
          snippet: {
            publishedAt: "2019-06-08T23:08:50Z",
            channelId: "UCT2-OzBC6S2cDnnj2BNyeDw",
            title: "spongepop deutsch",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/Yumz0V5HIHo/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/Yumz0V5HIHo/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/Yumz0V5HIHo/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "stark5200",
            liveBroadcastContent: "none",
            publishTime: "2019-06-08T23:08:50Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "UzqQUfguBMmlY2lsQRfBEOH4L-U",
          id: {
            kind: "youtube#video",
            videoId: "_OXDjcxMWM4",
          },
          snippet: {
            publishedAt: "2020-01-07T15:05:09Z",
            channelId: "UCg4AC5sThIMtMVsZm8_3zxA",
            title:
              "#CRAZY #SPONGEPOP #COLORING تلوين #سبونج_بوب بألوان #مجنونة#",
            description:
              "تلوين سبونج بوب بألوان مجنونة و مختلفة، استخدمنا فيها الوان قوس قزح Coloring Spongepop with crazy colors and rainbow colors. رابط...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/_OXDjcxMWM4/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/_OXDjcxMWM4/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/_OXDjcxMWM4/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Pack of art حزمة فنون",
            liveBroadcastContent: "none",
            publishTime: "2020-01-07T15:05:09Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "1NghiVY-SpxSAQujZcWoLIsbQf4",
          id: {
            kind: "youtube#video",
            videoId: "24S2LERhaoI",
          },
          snippet: {
            publishedAt: "2015-03-14T14:14:24Z",
            channelId: "UCJBACTXv295ytjwFAeff26g",
            title: "protect your children from spongepop the like...",
            description:
              "Created using PowToon -- Free sign up at http://www.powtoon.com/join -- Create animated videos and animated presentations for free. PowToon is a free tool ...",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/24S2LERhaoI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/24S2LERhaoI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/24S2LERhaoI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Abdelghafour Akhayti",
            liveBroadcastContent: "none",
            publishTime: "2015-03-14T14:14:24Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "cEvSukjiPtijtzfKn9bebTQTa_s",
          id: {
            kind: "youtube#playlist",
            playlistId: "PLsCka8yrie6XSapn7V7LrmwhiI6A0G4p7",
          },
          snippet: {
            publishedAt: "2019-06-13T03:44:19Z",
            channelId: "UC-9NC6QkItsm6hw-4lVVb-Q",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/0KKc4Tc_ICI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/0KKc4Tc_ICI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/0KKc4Tc_ICI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "FulaWeh !!!",
            liveBroadcastContent: "none",
            publishTime: "2019-06-13T03:44:19Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "m3Wa7-NjrxehrMIhn2PDxkHPq8I",
          id: {
            kind: "youtube#playlist",
            playlistId: "PLEq4421aIvwTvLsin3iXDp1TxBmiFsF5Q",
          },
          snippet: {
            publishedAt: "2017-10-25T08:17:17Z",
            channelId: "UCUm3FbVXpEud5GO3kkHhwjA",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/T-OW-TLbvIw/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/T-OW-TLbvIw/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/T-OW-TLbvIw/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Samu Modawi",
            liveBroadcastContent: "none",
            publishTime: "2017-10-25T08:17:17Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "bGjrcvLeqHg0KpuquB2VzpOO2V8",
          id: {
            kind: "youtube#video",
            videoId: "HyZeCaSH0f4",
          },
          snippet: {
            publishedAt: "2015-02-04T19:19:21Z",
            channelId: "UCjsJ07MbQ2YKxVBt_q6MTyg",
            title: "Chocolate spongepop",
            description:
              "Wait for my next videos and share with ur friends every were and subscribe.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/HyZeCaSH0f4/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/HyZeCaSH0f4/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/HyZeCaSH0f4/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Rami Jarrar",
            liveBroadcastContent: "none",
            publishTime: "2015-02-04T19:19:21Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "svAItu5AdimcAy9gAQdtGOfzyfw",
          id: {
            kind: "youtube#video",
            videoId: "woeqN1Ae7eI",
          },
          snippet: {
            publishedAt: "2017-10-29T11:54:11Z",
            channelId: "UCL84-KmiUrOe-AykXUqTRDw",
            title: "Two Hours later - SpongePop 2017",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/woeqN1Ae7eI/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/woeqN1Ae7eI/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/woeqN1Ae7eI/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "BEST OF TUBE",
            liveBroadcastContent: "none",
            publishTime: "2017-10-29T11:54:11Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "rNiyonynN6m0a45yAMWuOUf1f-4",
          id: {
            kind: "youtube#channel",
            channelId: "UCpiZp5U4oyozUIFEHoVd-iw",
          },
          snippet: {
            publishedAt: "2019-12-22T13:30:21Z",
            channelId: "UCpiZp5U4oyozUIFEHoVd-iw",
            title: "سبونج بوب - spongepop",
            description: "",
            thumbnails: {
              default: {
                url:
                  "https://yt3.ggpht.com/-GOx3UcvWLwY/AAAAAAAAAAI/AAAAAAAAAAA/1q0kwUKByeY/s88-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
              medium: {
                url:
                  "https://yt3.ggpht.com/-GOx3UcvWLwY/AAAAAAAAAAI/AAAAAAAAAAA/1q0kwUKByeY/s240-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
              high: {
                url:
                  "https://yt3.ggpht.com/-GOx3UcvWLwY/AAAAAAAAAAI/AAAAAAAAAAA/1q0kwUKByeY/s800-c-k-no-mo-rj-c0xffffff/photo.jpg",
              },
            },
            channelTitle: "سبونج بوب - spongepop",
            liveBroadcastContent: "none",
            publishTime: "2019-12-22T13:30:21Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "9paoIhtbzSU0jNf7-U4Sh9vZC9o",
          id: {
            kind: "youtube#video",
            videoId: "eb6Y_5G9nRo",
          },
          snippet: {
            publishedAt: "2019-06-08T01:02:25Z",
            channelId: "UC1BUS4S3DsgyBVyL1hduugg",
            title: "SpongePop CulturePants “Dr.P B-Movie” Figure Review",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/eb6Y_5G9nRo/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/eb6Y_5G9nRo/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/eb6Y_5G9nRo/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "JJ The Crazy",
            liveBroadcastContent: "none",
            publishTime: "2019-06-08T01:02:25Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "oVajHwH9pcPgCfSZ4IuTjSx-1j8",
          id: {
            kind: "youtube#video",
            videoId: "mHA5Y_tgN6A",
          },
          snippet: {
            publishedAt: "2013-01-15T13:51:31Z",
            channelId: "UCEUsiLeGkPJTIJryhQ_QtIw",
            title: "سبونج بوب (spongepop) الشيخ نبيل العوضي",
            description:
              "سبونج بوب (spongepop) الشيخ نبيل العوضي قناة الاسلام الدائمة.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/mHA5Y_tgN6A/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/mHA5Y_tgN6A/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/mHA5Y_tgN6A/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "قناة الاسلام الدائمة",
            liveBroadcastContent: "none",
            publishTime: "2013-01-15T13:51:31Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "6RsD3zB_hPNprtWakAfGSmrL2Fo",
          id: {
            kind: "youtube#playlist",
            playlistId: "PLI6ykIvKuFcnQkdjGqwLewZphjOsSjwNq",
          },
          snippet: {
            publishedAt: "2019-10-20T11:39:21Z",
            channelId: "UCLQeb9MWXGRJtz8DCfiiY4A",
            title: "Spongepop game",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/qkpdB63W3Yw/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/qkpdB63W3Yw/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/qkpdB63W3Yw/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Gamplay",
            liveBroadcastContent: "none",
            publishTime: "2019-10-20T11:39:21Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "QisvB0A-NinfdV5cUuXVeGcmvII",
          id: {
            kind: "youtube#video",
            videoId: "p-KfSAPhCZk",
          },
          snippet: {
            publishedAt: "2012-03-19T10:04:28Z",
            channelId: "UC_SRlHDGxKrNl02BzJf60Gw",
            title: "flem spongepop",
            description: "فيديو.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/p-KfSAPhCZk/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/p-KfSAPhCZk/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/p-KfSAPhCZk/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "almhmoma",
            liveBroadcastContent: "none",
            publishTime: "2012-03-19T10:04:28Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "H7JaD4Xc0tyKJfDvR0zUedIq0Bk",
          id: {
            kind: "youtube#video",
            videoId: "gf-P9T1kcNM",
          },
          snippet: {
            publishedAt: "2018-11-27T22:35:08Z",
            channelId: "UCStJF1kj0MvFHIIrd843BEQ",
            title:
              "( RIP ) You no who&#39;s Him . Spongepop Legends never die.",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/gf-P9T1kcNM/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/gf-P9T1kcNM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/gf-P9T1kcNM/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Lee Be",
            liveBroadcastContent: "none",
            publishTime: "2018-11-27T22:35:08Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Jl506h4YmEtb15aT8oXHxhsahcw",
          id: {
            kind: "youtube#video",
            videoId: "wPLh4-c_uRs",
          },
          snippet: {
            publishedAt: "2019-04-21T13:16:30Z",
            channelId: "UCqvIlOaBsaY9oDUlidQKS1w",
            title: "Sponge pop",
            description: "Like.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/wPLh4-c_uRs/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/wPLh4-c_uRs/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/wPLh4-c_uRs/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "افلام كرتون لاتنسو ال إشتراك",
            liveBroadcastContent: "none",
            publishTime: "2019-04-21T13:16:30Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "MJjsn4CzjQex5QRWEkbxM6oZsrc",
          id: {
            kind: "youtube#video",
            videoId: "FqugqM8U75k",
          },
          snippet: {
            publishedAt: "2017-03-19T18:15:39Z",
            channelId: "UC-RMI8pj8l8vs_cI2tiwC4w",
            title: "Spongepop",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/FqugqM8U75k/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/FqugqM8U75k/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/FqugqM8U75k/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Tubemursu:D",
            liveBroadcastContent: "none",
            publishTime: "2017-03-19T18:15:39Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "7PFHQO3fmjrPbVkQm-oyah6jZqc",
          id: {
            kind: "youtube#video",
            videoId: "08fM-KvUa-c",
          },
          snippet: {
            publishedAt: "2019-05-21T21:07:03Z",
            channelId: "UCB9QqT6xQl0OsNnVFPp6MuA",
            title: "SpongePop&#39;s",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/08fM-KvUa-c/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/08fM-KvUa-c/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/08fM-KvUa-c/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Patrick Natzschka",
            liveBroadcastContent: "none",
            publishTime: "2019-05-21T21:07:03Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Dxt-H1ox-Yvvl1kRzxcTTlRbA-o",
          id: {
            kind: "youtube#video",
            videoId: "_3BRJsXczOs",
          },
          snippet: {
            publishedAt: "2019-11-09T16:28:27Z",
            channelId: "UCZUu5crkyTEP8pIUY41dENg",
            title: "قصة spongepop فى العيد",
            description: "SPONGEPOP.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/_3BRJsXczOs/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/_3BRJsXczOs/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/_3BRJsXczOs/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "قصص مصورة",
            liveBroadcastContent: "none",
            publishTime: "2019-11-09T16:28:27Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "9TEIWHw4Hwl_AhTsSoYZPS85uP4",
          id: {
            kind: "youtube#video",
            videoId: "92WfUYOoiGg",
          },
          snippet: {
            publishedAt: "2019-11-09T16:18:40Z",
            channelId: "UCZUu5crkyTEP8pIUY41dENg",
            title: "قصة spongepop فى عيد الهالوين",
            description: "SPONGEPOP.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/92WfUYOoiGg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/92WfUYOoiGg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/92WfUYOoiGg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "قصص مصورة",
            liveBroadcastContent: "none",
            publishTime: "2019-11-09T16:18:40Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "jKcNMPAc45TEtAqdxClH47EGn4M",
          id: {
            kind: "youtube#video",
            videoId: "v6EKyNQh5cg",
          },
          snippet: {
            publishedAt: "2019-06-03T15:34:02Z",
            channelId: "UC_zrzybRqqRi9Rmgdt8O5Rg",
            title:
              "تحميل مود سبونج بوب في لعبة جراني|granny mod spongepop(الحق) 👍🙀🙀🙀",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/v6EKyNQh5cg/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/v6EKyNQh5cg/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/v6EKyNQh5cg/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "AHMED GAMER",
            liveBroadcastContent: "none",
            publishTime: "2019-06-03T15:34:02Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "SyQRit0GnY8eMV5vzq3wLsRfe2E",
          id: {
            kind: "youtube#video",
            videoId: "nSyJcbaBdSA",
          },
          snippet: {
            publishedAt: "2018-02-25T18:05:56Z",
            channelId: "UCCa-r8dSGrZJCXAqh9Ne20w",
            title: "A portal to spongepop  world",
            description: "",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/nSyJcbaBdSA/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/nSyJcbaBdSA/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/nSyJcbaBdSA/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Hamza _Elfarra77",
            liveBroadcastContent: "none",
            publishTime: "2018-02-25T18:05:56Z",
          },
        },
        {
          kind: "youtube#searchResult",
          etag: "Fl114COFoVchb5dwtwozXY85NE0",
          id: {
            kind: "youtube#video",
            videoId: "8YQZz6oO1gU",
          },
          snippet: {
            publishedAt: "2013-10-21T15:56:33Z",
            channelId: "UCjhqIA2le4jSF1yoiH8VHaQ",
            title: "مناكير سبونج بوب,,,sponge pop mani,,,",
            description: "Mmiieeooww's shared video file.",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/8YQZz6oO1gU/default.jpg",
                width: 120,
                height: 90,
              },
              medium: {
                url: "https://i.ytimg.com/vi/8YQZz6oO1gU/mqdefault.jpg",
                width: 320,
                height: 180,
              },
              high: {
                url: "https://i.ytimg.com/vi/8YQZz6oO1gU/hqdefault.jpg",
                width: 480,
                height: 360,
              },
            },
            channelTitle: "Mmiieeooww",
            liveBroadcastContent: "none",
            publishTime: "2013-10-21T15:56:33Z",
          },
        },
      ],
    };
  },
  methods: {
    search() {
      SearchMixin.methods.$search({
        q: this.$route.query.query ? this.$route.query.query.toString() : "",
        part: ["snippet"]
      });
    },
  },
  mixins: [ SearchMixin ],
  watch: {
    // $route(to, from) {
    //   this.search();
    // },
  },
});
</script>
