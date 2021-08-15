import * as privateApi from "../privateApiService";
import { publicApiPost, publicApiGet } from "../publicApiService";
import { API_BASE_URL } from "../../common/configurations";
import { UrlBuilder } from "../../common/UrlBuilder";

const NewsUrl = new UrlBuilder(API_BASE_URL, `/news`);

const response = async (callback = async () => null, ...args) =>
  (await callback(NewsUrl.path, ...args)).data;

export const newsRequests = {
  get: (id = null, isPrivate = false) =>
    isPrivate ? response(privateApi.GET, id) : response(publicApiGet, id),
  post: (data = null, isPrivate = false) =>
    isPrivate ? response(privateApi.POST, data) : response(publicApiPost, data),
  put: (data = null, isPrivate = false) => response(privateApi.PUT, data),
  patch: (data = null, isPrivate = false) => response(privateApi.PATCH, data),
  delete: (id = null, isPrivate = false) => response(privateApi.DELETE, id),
};
