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
      qyery: ""
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchResults.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
