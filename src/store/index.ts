import Vue from "vue";
import Vuex, { Store } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "",
    mainHeaderTitle: "YouTube"
  },
  mutations: {
    setMainHeaderTitle (state, title){
      state.mainHeaderTitle = title;
    },
    setSearchQuery(state, query){
      state.searchQuery = query;
    }
  },
  actions: {},
  modules: {}
});
