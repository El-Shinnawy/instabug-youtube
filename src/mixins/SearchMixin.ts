import xhr from "@/services/xhr";
import { SearchParams } from "@/models/search-params";
import store from "@/store";
import router from "@/router"
export default {
  computed: {
    query(): string {
      store.commit("setSearchQuery", (router.currentRoute.query.query ? router.currentRoute.query.query : ''));
      store.commit("setMainHeaderTitle", (store.state.searchQuery.length ? store.state.searchQuery : 'YouTube'));
      return store.state.searchQuery;
    }
  },
  methods: {
    $search: function (params: SearchParams) {
      return xhr
        .call({
          api: "search",
          params: params,
        })
        .then((res) => res);

      // return undefined;
    }
  }
}