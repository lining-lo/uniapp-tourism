"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_icon2 + _easycom_up_popup2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const isShowPopup = common_vendor.ref(true);
    const userInfo = common_vendor.ref();
    const toLogin = () => {
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "亲，授权登录微信后才能正常实现小程序",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.login({
              success: async (data) => {
                const { token } = await api_api.login(data.code);
                common_vendor.index.setStorageSync("token", token);
                const result = await api_api.getUserInfo();
                userInfo.value = result;
                isShowPopup.value = true;
              }
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "gift-fill",
          color: "#fff",
          size: "28"
        }),
        b: common_vendor.p({
          name: "setting",
          color: "#fff",
          size: "28"
        }),
        c: common_vendor.p({
          name: "chat",
          color: "#fff",
          size: "28"
        }),
        d: common_assets._imports_0,
        e: common_vendor.o(toLogin),
        f: common_vendor.p({
          name: "photo",
          color: "##959495"
        }),
        g: common_vendor.p({
          name: "arrow-right",
          color: "##959495"
        }),
        h: common_vendor.p({
          name: "photo",
          color: "##959495"
        }),
        i: common_vendor.p({
          name: "arrow-right",
          color: "##959495"
        }),
        j: common_vendor.p({
          name: "photo",
          color: "##959495"
        }),
        k: common_vendor.p({
          name: "arrow-right",
          color: "##959495"
        }),
        l: common_vendor.p({
          name: "photo",
          color: "##959495"
        }),
        m: common_vendor.p({
          name: "arrow-right",
          color: "##959495"
        }),
        n: common_vendor.p({
          name: "photo",
          color: "##959495"
        }),
        o: common_vendor.p({
          name: "arrow-right",
          color: "##959495"
        }),
        p: common_vendor.p({
          show: isShowPopup.value,
          round: "20"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
