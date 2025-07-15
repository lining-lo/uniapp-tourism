"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  _easycom_up_button2();
}
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_up_button();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onLoad(() => {
      api_api.getBanner().then((res) => {
        common_vendor.index.__f__("log", "at pages/index/index.vue:17", res, "res");
      });
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(_ctx.title),
        c: common_vendor.p({
          text: "渐变色按钮",
          color: "linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
