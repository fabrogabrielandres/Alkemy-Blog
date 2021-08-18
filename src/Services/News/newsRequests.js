import * as privateApi from "../privateApiService";
import { publicApiPost, publicApiGet } from "../publicApiService";
import { API_BASE_URL } from "../../common/configurations";
import { UrlBuilder } from "../../common/UrlBuilder";

const NewsUrl = new UrlBuilder(API_BASE_URL, `/news`);

const response = async (callback = async () => null, ...args) =>
  (await callback(NewsUrl.path, ...args)).data;

export const newsRequests = {
  get: ({ id = null, isPrivate = false }, thunkAPI = null) => {
    return response(isPrivate ? privateApi.GET : publicApiGet, id);
  },
  post: (data = null, isPrivate = false) =>
    response(isPrivate ? privateApi.POST : publicApiPost, data),
  put: (data = null, _isPrivate = false) =>
    response(privateApi.PUT, data.id, data),
  patch: (data = null, _isPrivate = false) =>
    response(privateApi.PATCH, data.id, data),
  delete: (id = null, _isPrivate = false) => response(privateApi.DELETE, id),
};
