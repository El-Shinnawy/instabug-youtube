import { ServerCallOptions } from "@/models/server-call-options";
import { Configurations } from "@/configurations";
import axios from "axios";
import { apiMethods } from "@/enums/apiMethods";
import { responseCodes } from "@/enums/responseCodes";

export default {
  call(options: ServerCallOptions) {
    console.log(
      this.getFinalURL(options.api, this.setFinalParams(options.params))
    );
    return axios({
      method: options.method ? options.method : apiMethods.Get,
      url: this.getFinalURL(options.api, this.setFinalParams(options.params))
    }).then(function(response) {
      if (response && response.status === responseCodes.Success)
        return response.data;
    });
  },
  // eslint-disable-next-line
  setFinalParams(params?: any) {
    return {
      key: Configurations.apiKey,
      ...params,
    };
  },
  // eslint-disable-next-line
  getFinalURL(api: string, params?: any) {
    const queryParams: string[] = [];
    Object.keys(params).map((key) => {
      if (Array.isArray(params[key])) {
        params[key].map((p: any) => queryParams.push(key + "=" + p));
      } else {
        queryParams.push(key + "=" + params[key]);
      }
    });
    return `${Configurations.baseUrl}${api}?${queryParams.join("&")}`;
  },
};
