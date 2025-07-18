"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const _sfc_main = {
  __name: "like",
  setup(__props) {
    const likeList = common_vendor.ref();
    const getLikeList = async () => {
      const data = await api_api.getLike();
      likeList.value = data;
    };
    common_vendor.onLoad(() => {
      getLikeList();
    });
    const toDetail = (item) => {
      const can = JSON.stringify(item);
      common_vendor.index.navigateTo({
        url: `/pages/detail/detail?item=${encodeURIComponent(can)}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(likeList.value, (item, index, i0) => {
          return common_vendor.e(likeList.value ? {
            a: item.img
          } : {}, likeList.value ? {
            b: common_vendor.t(item.title)
          } : {}, likeList.value ? {
            c: common_vendor.t(item.introduce)
          } : {}, {
            d: common_vendor.o(($event) => toDetail(item), index),
            e: index
          });
        }),
        b: likeList.value,
        c: likeList.value,
        d: likeList.value
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/like/like.js.map
