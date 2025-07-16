"use strict";
const api_http = require("./http.js");
const getBanner = () => {
  return api_http.http("/user/getBanner");
};
const getHomeList = () => {
  return api_http.http("/user/getHomeList");
};
const login = (data) => {
  return api_http.http(
    "/login",
    {
      code: data
    },
    "POST"
  );
};
const getUserInfo = () => {
  return api_http.http("/getUserInfo");
};
exports.getBanner = getBanner;
exports.getHomeList = getHomeList;
exports.getUserInfo = getUserInfo;
exports.login = login;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
