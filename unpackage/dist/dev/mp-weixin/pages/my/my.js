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
    const isShowPopup = common_vendor.ref(false);
    const onchooseavatar = (e) => {
      userInfo.value.avatarUrl = e.detail.avatarUrl;
    };
    const changeName = (e) => {
      userInfo.value.nickName = e.detail.value;
    };
    const submit = () => {
      common_vendor.index.setStorageSync("userInfo", JSON.stringify(userInfo.value));
      isShowPopup.value = false;
    };
    const userInfo = common_vendor.ref({
      avatarUrl: "",
      nickName: ""
    });
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
                userInfo.value.avatarUrl = result.avatarUrl;
                isShowPopup.value = true;
              }
            });
          }
        }
      });
    };
    common_vendor.onLoad(async () => {
      if (common_vendor.index.getStorageSync("token") && !common_vendor.index.getStorageSync("userInfo")) {
        const { avatarUrl, nickName } = await api_api.getUserInfo();
        userInfo.value.avatarUrl = avatarUrl;
        userInfo.value.nickName = nickName;
      } else if (common_vendor.index.getStorageSync("token") && common_vendor.index.getStorageSync("userInfo")) {
        const { avatarUrl, nickName } = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
        userInfo.value.avatarUrl = avatarUrl;
        userInfo.value.nickName = nickName;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
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
        d: !userInfo.value.avatarUrl
      }, !userInfo.value.avatarUrl ? {
        e: common_assets._imports_0
      } : {
        f: userInfo.value.avatarUrl
      }, {
        g: common_vendor.o(toLogin),
        h: !userInfo.value.nickName
      }, !userInfo.value.nickName ? {} : {
        i: common_vendor.t(userInfo.value.nickName)
      }, {
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
          name: "photo",
          color: "##959495"
        }),
        q: common_vendor.p({
          name: "arrow-right",
          color: "##959495"
        }),
        r: common_vendor.p({
          name: "photo",
          color: "##959495"
        }),
        s: common_vendor.p({
          name: "arrow-right",
          color: "##959495"
        }),
        t: common_vendor.o(($event) => isShowPopup.value = false),
        v: userInfo.value.avatarUrl,
        w: common_vendor.o(onchooseavatar),
        x: common_vendor.o([($event) => userInfo.value.nickName = $event.detail.value, changeName]),
        y: userInfo.value.nickName,
        z: common_vendor.o(submit),
        A: common_vendor.p({
          show: isShowPopup.value,
          round: "20"
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
