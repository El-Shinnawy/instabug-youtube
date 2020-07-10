<template>
  <form @submit="search">
    <input type="text" :value="query" @input="setSearchQuery" />
    <button type="submit">
      <span class="fa fa-search"></span>
    </button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import router from "../router";
import SearchMixin from "../mixins/SearchMixin";
export default Vue.extend({
  data: function() {
    return {
      newSearchQuery: ""
    };
  },
  methods: {
    search() {
      this.$store.commit("setMainHeaderTitle", (this.newSearchQuery.length ? this.newSearchQuery : 'YouTube'));
      this.$store.commit("setSearchQuery", this.newSearchQuery);
      router.push({ path: `/search?query=${this.newSearchQuery}` });
    },
    setSearchQuery(e: any) {
      this.newSearchQuery = e.target.value;
    }
  },
  mixins: [SearchMixin]
});
</script>
