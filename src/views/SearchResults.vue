<template>
  <WatchItemsList :lisItems="searchResultsList" />
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import xhr from "@/services/xhr";
import { Configurations } from "../configurations";
import router from "../router";
import WatchItemsList from "../components/WatchItemsList.vue";
export default Vue.extend({
  components: { WatchItemsList },
  // created: function() {
  //   this.search();
  // },
  data: function() {
    return {
      query: "",
      searchResultsList: [],
    };
  },
  methods: {
    search() {
      this.query = this.$route.query.query
        ? this.$route.query.query.toString()
        : "";
      xhr
        .call({
          api: "search",
          params: {
            q: this.query,
            maxResults: Configurations.searchResultsCount,
          },
        })
        .then((res) => console.log(res));
    },
  },
  // watch: {
  //   $route(to, from) {
  //     this.search();
  //   },
  // },
});
</script>
