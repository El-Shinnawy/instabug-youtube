<template>
  <div class="channel">
    <ChannelHeader
      :title="info.items[0].snippet.title"
      :subscriberCount="info.items[0].statistics.subscriberCount"
      :thumbnails="info.items[0].snippet.thumbnails"
      :banners="info.items[0].brandingSettings.image"
    />
    <WatchItemsList class="yt-margin-top-1" :listItems="playlists.items" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ChannelHeader from "@/components/ChannelHeader.vue";
import WatchItemsList from "@/components/WatchItemsList.vue";
export default Vue.extend({
  components: { ChannelHeader, WatchItemsList },
  data: function() {
    return {
      info: {
        kind: "youtube#channelListResponse",
        etag: "BPNMgl_ugR8mxPTwLAEIRzqiJqI",
        pageInfo: {
          totalResults: 1,
          resultsPerPage: 1
        },
        items: [
          {
            kind: "youtube#channel",
            etag: "bNsqWt87CClxfKhjOJNzp4pnryY",
            id: "UCZTLU39XbfN04FBXVc0vD1g",
            snippet: {
              title: "Nickelodeon Arabia",
              description:
                'اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة كـ"سبونج بوب سكوير بانتس" و"(هنري) البطل" و"آل (ثاندرمان)" و"منزل (لاود)"، وغيرهم الكثير!\n\nما هي أكثر البرامج التي تودون مشاهدتها عبر القناة؟ شاركونا آرائكم من خلال التعليقات ودردشوا معنا عبر صفحتنا المجتمعية!\nترقبوا الجديد لدى "نيكلوديون" على موقعنا الإلكتروني www.nickelodeon.com للاستمتاع بالعروض التلفزيونية الجديدة والكلاسيكية! العب بشخصياتك المفضلة في ألعاب الحركة الملحمية وأجب على أسئلة الاختبار لتعرف ما إذا كنت حقًا من أكبر المعجبين بـ"نيكلوديون"!\n\nتابعونا عبر مواقع التواصل الاجتماعي: \n"نيكلوديون" على "فيسبوك":\n"نيكلوديون" على "تويتر":\n"نيكلوديون" على "إنستغرام":',
              customUrl: "nickelodeonarabia",
              publishedAt: "2019-05-29T15:07:15Z",
              thumbnails: {
                default: {
                  url:
                    "https://yt3.ggpht.com/a/AATXAJwkaSxDrhDA-siZtfThMZCxMtryAp4AeQMPM92F=s88-c-k-c0xffffffff-no-rj-mo",
                  width: 88,
                  height: 88
                },
                medium: {
                  url:
                    "https://yt3.ggpht.com/a/AATXAJwkaSxDrhDA-siZtfThMZCxMtryAp4AeQMPM92F=s240-c-k-c0xffffffff-no-rj-mo",
                  width: 240,
                  height: 240
                },
                high: {
                  url:
                    "https://yt3.ggpht.com/a/AATXAJwkaSxDrhDA-siZtfThMZCxMtryAp4AeQMPM92F=s800-c-k-c0xffffffff-no-rj-mo",
                  width: 800,
                  height: 800
                }
              },
              localized: {
                title: "Nickelodeon Arabia",
                description:
                  'اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة كـ"سبونج بوب سكوير بانتس" و"(هنري) البطل" و"آل (ثاندرمان)" و"منزل (لاود)"، وغيرهم الكثير!\n\nما هي أكثر البرامج التي تودون مشاهدتها عبر القناة؟ شاركونا آرائكم من خلال التعليقات ودردشوا معنا عبر صفحتنا المجتمعية!\nترقبوا الجديد لدى "نيكلوديون" على موقعنا الإلكتروني www.nickelodeon.com للاستمتاع بالعروض التلفزيونية الجديدة والكلاسيكية! العب بشخصياتك المفضلة في ألعاب الحركة الملحمية وأجب على أسئلة الاختبار لتعرف ما إذا كنت حقًا من أكبر المعجبين بـ"نيكلوديون"!\n\nتابعونا عبر مواقع التواصل الاجتماعي: \n"نيكلوديون" على "فيسبوك":\n"نيكلوديون" على "تويتر":\n"نيكلوديون" على "إنستغرام":'
              },
              country: "AE"
            },
            statistics: {
              viewCount: "219752382",
              commentCount: "0",
              subscriberCount: "790000",
              hiddenSubscriberCount: false,
              videoCount: "181"
            },
            brandingSettings: {
              channel: {
                title: "Nickelodeon Arabia",
                description:
                  'اشترك الآن لمشاهدة أفضل الأحداث والمغامرات المسلية من عروضكم المفضلة كـ"سبونج بوب سكوير بانتس" و"(هنري) البطل" و"آل (ثاندرمان)" و"منزل (لاود)"، وغيرهم الكثير!\n\nما هي أكثر البرامج التي تودون مشاهدتها عبر القناة؟ شاركونا آرائكم من خلال التعليقات ودردشوا معنا عبر صفحتنا المجتمعية!\nترقبوا الجديد لدى "نيكلوديون" على موقعنا الإلكتروني www.nickelodeon.com للاستمتاع بالعروض التلفزيونية الجديدة والكلاسيكية! العب بشخصياتك المفضلة في ألعاب الحركة الملحمية وأجب على أسئلة الاختبار لتعرف ما إذا كنت حقًا من أكبر المعجبين بـ"نيكلوديون"!\n\nتابعونا عبر مواقع التواصل الاجتماعي: \n"نيكلوديون" على "فيسبوك":\n"نيكلوديون" على "تويتر":\n"نيكلوديون" على "إنستغرام":',
                keywords:
                  'نيكلوديون "تلفزيون الأطفال" "أفلام الكرتون" كرتون "العروض التلفزيونية المضحكة" "مسلسلات تلفزيون الأطفال" "العروض الملحمية" "البرامج الترفيهية للأطفال" "الرسوم المتحركة" "الرسوم المتحركة على" "الموسم الأول" "الحلقة 1" "الحلقات الكاملة" Nickelodeon',
                defaultTab: "Featured",
                moderateComments: true,
                showRelatedChannels: true,
                showBrowseView: true,
                featuredChannelsTitle: "Featured channels",
                featuredChannelsUrls: [
                  "UCkYjxitEIMZzyMaEzP7iVDA",
                  "UCTJDdO9klWGpTekswnXreGQ",
                  "UCeGvSi1Tb8OV78ue3_tux1A",
                  "UCTfMaiRjr3goFg_Iqie2I8g",
                  "UCNeq3Obf4zOv5rhORI8Vz5g",
                  "UCx68_7D0FoZSu_u0z7Qc8sQ",
                  "UCMfYMB69Y1B-SlGKm1Tdb0Q"
                ],
                unsubscribedTrailer: "_tQSG6jjpBA",
                profileColor: "#000000",
                country: "AE"
              },
              image: {
                bannerImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                bannerMobileImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w640-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                bannerTabletLowImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                bannerTabletImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                bannerTabletHdImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                bannerTabletExtraHdImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
                bannerMobileLowImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w320-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                bannerMobileMediumHdImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w960-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                bannerMobileHdImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w1280-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                bannerMobileExtraHdImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w1440-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj",
                bannerTvImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w2120-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                bannerTvLowImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w854-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                bannerTvMediumImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w1280-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj",
                bannerTvHighImageUrl:
                  "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w1920-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj"
              },
              hints: [
                {
                  property: "channel.featured_tab.template.string",
                  value: "Everything"
                },
                {
                  property: "channel.modules.show_comments.bool",
                  value: "True"
                },
                {
                  property: "channel.banner.mobile.medium.image.url",
                  value:
                    "https://yt3.ggpht.com/X-E6DlmrysFj4UGFpXfdJHIevOWgT_Sv2aBZrr3Y1xZRl2XdwJ0r5zlKcNCXFATkjYMPlGVlbH8=w640-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj"
                }
              ]
            }
          }
        ]
      },
      playlists: {
        kind: "youtube#playlistListResponse",
        etag: "rWGSdJGab1jYhErBHq-ruoSKoQo",
        nextPageToken: "CAUQAA",
        pageInfo: {
          totalResults: 7,
          resultsPerPage: 5
        },
        items: [
          {
            kind: "youtube#playlist",
            etag: "IMp00LPHuuFG6yOA6jZW-soMEco",
            id: "PLFmLgj33u1WKptrzrk_VZyhHku7rFD6EY",
            snippet: {
              publishedAt: "2020-01-22T12:32:05Z",
              channelId: "UCZTLU39XbfN04FBXVc0vD1g",
              title: "االصداقة | Nickelodeon Arabia",
              description: "",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/Ommz8QGztak/default.jpg",
                  width: 120,
                  height: 90
                },
                medium: {
                  url: "https://i.ytimg.com/vi/Ommz8QGztak/mqdefault.jpg",
                  width: 320,
                  height: 180
                },
                high: {
                  url: "https://i.ytimg.com/vi/Ommz8QGztak/hqdefault.jpg",
                  width: 480,
                  height: 360
                },
                standard: {
                  url: "https://i.ytimg.com/vi/Ommz8QGztak/sddefault.jpg",
                  width: 640,
                  height: 480
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/Ommz8QGztak/maxresdefault.jpg",
                  width: 1280,
                  height: 720
                }
              },
              channelTitle: "Nickelodeon Arabia",
              localized: {
                title: "االصداقة | Nickelodeon Arabia",
                description: ""
              }
            },
            contentDetails: {
              itemCount: 10
            }
          },
          {
            kind: "youtube#playlist",
            etag: "2ltnrc4AUt75Tqen6XJfwB1Ax7c",
            id: "PLFmLgj33u1WIJL-VcMFZjOW6Sa_9znDf_",
            snippet: {
              publishedAt: "2019-12-12T17:43:11Z",
              channelId: "UCZTLU39XbfN04FBXVc0vD1g",
              title: "KCA Abudabi | Nickelodeon Arabia",
              description: "",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/ft-RNC5e7-U/default.jpg",
                  width: 120,
                  height: 90
                },
                medium: {
                  url: "https://i.ytimg.com/vi/ft-RNC5e7-U/mqdefault.jpg",
                  width: 320,
                  height: 180
                },
                high: {
                  url: "https://i.ytimg.com/vi/ft-RNC5e7-U/hqdefault.jpg",
                  width: 480,
                  height: 360
                },
                standard: {
                  url: "https://i.ytimg.com/vi/ft-RNC5e7-U/sddefault.jpg",
                  width: 640,
                  height: 480
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/ft-RNC5e7-U/maxresdefault.jpg",
                  width: 1280,
                  height: 720
                }
              },
              channelTitle: "Nickelodeon Arabia",
              localized: {
                title: "KCA Abudabi | Nickelodeon Arabia",
                description: ""
              }
            },
            contentDetails: {
              itemCount: 4
            }
          },
          {
            kind: "youtube#playlist",
            etag: "x_-Vx7q-RPo_bgazanFXkxDK7yc",
            id: "PLFmLgj33u1WLOszM8rm9RDc56d0UCu0kZ",
            snippet: {
              publishedAt: "2019-08-15T14:44:07Z",
              channelId: "UCZTLU39XbfN04FBXVc0vD1g",
              title: "Nickelodeon Arabia | سبونج بوب",
              description: "",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/4eaAqNb_1Hw/default.jpg",
                  width: 120,
                  height: 90
                },
                medium: {
                  url: "https://i.ytimg.com/vi/4eaAqNb_1Hw/mqdefault.jpg",
                  width: 320,
                  height: 180
                },
                high: {
                  url: "https://i.ytimg.com/vi/4eaAqNb_1Hw/hqdefault.jpg",
                  width: 480,
                  height: 360
                },
                standard: {
                  url: "https://i.ytimg.com/vi/4eaAqNb_1Hw/sddefault.jpg",
                  width: 640,
                  height: 480
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/4eaAqNb_1Hw/maxresdefault.jpg",
                  width: 1280,
                  height: 720
                }
              },
              channelTitle: "Nickelodeon Arabia",
              localized: {
                title: "Nickelodeon Arabia | سبونج بوب",
                description: ""
              }
            },
            contentDetails: {
              itemCount: 44
            }
          },
          {
            kind: "youtube#playlist",
            etag: "_OVJ-_iONh7T0GPYfbq3J5EoSAg",
            id: "PLFmLgj33u1WIJu6f0qWjEMusxbP5fyYQs",
            snippet: {
              publishedAt: "2019-08-15T14:07:48Z",
              channelId: "UCZTLU39XbfN04FBXVc0vD1g",
              title: "Nickelodeon Arabia | آل ثاندرمان",
              description: "",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/RY4tPWy6tDQ/default.jpg",
                  width: 120,
                  height: 90
                },
                medium: {
                  url: "https://i.ytimg.com/vi/RY4tPWy6tDQ/mqdefault.jpg",
                  width: 320,
                  height: 180
                },
                high: {
                  url: "https://i.ytimg.com/vi/RY4tPWy6tDQ/hqdefault.jpg",
                  width: 480,
                  height: 360
                },
                standard: {
                  url: "https://i.ytimg.com/vi/RY4tPWy6tDQ/sddefault.jpg",
                  width: 640,
                  height: 480
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/RY4tPWy6tDQ/maxresdefault.jpg",
                  width: 1280,
                  height: 720
                }
              },
              channelTitle: "Nickelodeon Arabia",
              localized: {
                title: "Nickelodeon Arabia | آل ثاندرمان",
                description: ""
              }
            },
            contentDetails: {
              itemCount: 12
            }
          },
          {
            kind: "youtube#playlist",
            etag: "GoxpVBudeMbHH78i5_LLAVyaljY",
            id: "PLFmLgj33u1WJrnNsxacDl6bpeo0prp4IC",
            snippet: {
              publishedAt: "2019-08-15T13:25:37Z",
              channelId: "UCZTLU39XbfN04FBXVc0vD1g",
              title: "Nickelodeon Arabia | هنري البطل",
              description: "",
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/SCQLwTjj9KY/default.jpg",
                  width: 120,
                  height: 90
                },
                medium: {
                  url: "https://i.ytimg.com/vi/SCQLwTjj9KY/mqdefault.jpg",
                  width: 320,
                  height: 180
                },
                high: {
                  url: "https://i.ytimg.com/vi/SCQLwTjj9KY/hqdefault.jpg",
                  width: 480,
                  height: 360
                },
                standard: {
                  url: "https://i.ytimg.com/vi/SCQLwTjj9KY/sddefault.jpg",
                  width: 640,
                  height: 480
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/SCQLwTjj9KY/maxresdefault.jpg",
                  width: 1280,
                  height: 720
                }
              },
              channelTitle: "Nickelodeon Arabia",
              localized: {
                title: "Nickelodeon Arabia | هنري البطل",
                description: ""
              }
            },
            contentDetails: {
              itemCount: 20
            }
          }
        ]
      }
    };
  }
});
</script>

<style lang="scss" scoped>
</style>