"use strict";
const common_vendor = require("../common/vendor.js");
const baseUrl = "https://m1.apifoxmock.com/m1/4728220-0-default/api";
function http(url, data = {}, method = "GET") {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: baseUrl + url,
      data,
      method,
      header: {
        "token": common_vendor.index.getStorageSync("token") || ""
      },
      success: (result) => {
        if (result.statusCode === 200) {
          if (result.data.code === 1) {
            resolve(result.data.data);
          } else {
            common_vendor.index.showToast({
              title: result.data.msg || "请求失败",
              icon: "none"
            });
            reject(result.data.msg);
          }
        } else {
          common_vendor.index.showToast({
            title: `网络错误：${result.statusCode}`,
            icon: "none"
          });
          reject(`HTTP错误：${result.statusCode}`);
        }
      },
      fail: (err) => {
        common_vendor.index.showToast({
          title: "服务器请求异常",
          icon: "none"
        });
        reject(err);
      }
    });
  });
}
exports.http = http;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/http.js.map
