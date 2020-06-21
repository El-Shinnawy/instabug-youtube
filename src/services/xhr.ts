import { ServerCallOptions } from "@/models/server-call-options";
import { Configurations } from "@/configurations";
import axios from "axios";
import { apiMethods } from "@/enums/apiMethods";
import { responseCodes } from "@/enums/responseCodes";

export default {
  call(options: ServerCallOptions) {
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
      ...params
    };
  },
  // eslint-disable-next-line
  getFinalURL(api: string, params?: any) {
    return `${Configurations.baseUrl}${api}?${Object.keys(params)
      .map(key => key + "=" + params[key])
      .join("&")}`;
  }
};
