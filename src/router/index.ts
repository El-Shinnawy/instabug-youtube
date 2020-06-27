import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/search"
  },
  {
    path: "/search",
    name: "Search",
    props: {
      query: ""
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchResults.vue")
  },
  {
    path: "/video/:id",
    name: "Video",
    // props: {
    //   query: ""
    // },
    component: () =>
      import(/* webpackChunkName: "video" */ "../views/Video.vue")
  },
  {
    path: "/channel/:id",
    name: "Channel",
    // props: {
    //   query: ""
    // },
    component: () =>
      import(/* webpackChunkName: "video" */ "../views/Channel.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
