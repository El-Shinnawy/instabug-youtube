<template>
  <div class="about">
    <h1 @click="getData">This is an about page</h1>
    <span class="yti-search"></span>
    <div
      class="yt-flex yt-flex-align-center yt-flex-justify-center"
      style="width: 200px; height:200px"
    >
      <span class="yti-close"></span>
    </div>
  </div>
</template>
<script>
import xhr from "@/services/xhr";
export default {
  methods: {
    getData() {
      xhr
        .call({
          api: "search",
          params: {
            q: "spongebob"
          }
        })
        .then(res => console.log(res));
    }
  }
};
</script>
