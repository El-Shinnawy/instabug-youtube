<template>
  <form @submit="search">
    <input type="text" v-model="query" />
    <button type="submit"><span class="fa fa-search"></span></button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import router from "../router";
export default Vue.extend({
  data: function() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      router.push({ path: `/search?query=${this.query}` });
    },
  }
});
</script>
