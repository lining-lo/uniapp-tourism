"use strict";
const api_http = require("./http.js");
const getBanner = () => {
  return api_http.http("/user/getBanner");
};
const getHomeList = () => {
  return api_http.http("/user/getHomeList");
};
const getProject = () => {
  return api_http.http("/detail/project");
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
const getProjectInfo = (id) => {
  return api_http.http("/project/info", {
    id
  });
};
exports.getBanner = getBanner;
exports.getHomeList = getHomeList;
exports.getProject = getProject;
exports.getProjectInfo = getProjectInfo;
exports.getUserInfo = getUserInfo;
exports.login = login;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
