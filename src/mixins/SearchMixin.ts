import xhr from "@/services/xhr";
import { SearchParams } from "@/models/search-params"
export default {
  methods: {
    $search: function(params: SearchParams) {
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