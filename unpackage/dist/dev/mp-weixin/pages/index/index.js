"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_up_search2 = common_vendor.resolveComponent("up-search");
  const _easycom_up_swiper2 = common_vendor.resolveComponent("up-swiper");
  const _easycom_up_notice_bar2 = common_vendor.resolveComponent("up-notice-bar");
  const _easycom_up_lazy_load2 = common_vendor.resolveComponent("up-lazy-load");
  const _easycom_up_waterfall2 = common_vendor.resolveComponent("up-waterfall");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  (_easycom_up_search2 + _easycom_up_swiper2 + _easycom_up_notice_bar2 + _easycom_up_lazy_load2 + _easycom_up_waterfall2 + _easycom_up_icon2)();
}
const _easycom_up_search = () => "../../uni_modules/uview-plus/components/u-search/u-search.js";
const _easycom_up_swiper = () => "../../uni_modules/uview-plus/components/u-swiper/u-swiper.js";
const _easycom_up_notice_bar = () => "../../uni_modules/uview-plus/components/u-notice-bar/u-notice-bar.js";
const _easycom_up_lazy_load = () => "../../uni_modules/uview-plus/components/u-lazy-load/u-lazy-load.js";
const _easycom_up_waterfall = () => "../../uni_modules/uview-plus/components/u-waterfall/u-waterfall.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  (_easycom_up_search + _easycom_up_swiper + _easycom_up_notice_bar + _easycom_up_lazy_load + _easycom_up_waterfall + _easycom_up_icon)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const keyword = common_vendor.ref("");
    const bannerList = common_vendor.ref([]);
    const getbannerList = async () => {
      const data = await api_api.getBanner();
      bannerList.value = data.bannerList;
    };
    const waterfallList = common_vendor.ref([]);
    const getWaterfallList = async () => {
      const data = await api_api.getHomeList();
      waterfallList.value = data;
    };
    common_vendor.onReachBottom(() => {
      setTimeout(() => {
        addRandomData();
      }, 500);
    });
    const addRandomData = () => {
      for (var i = 0; i < 10; i++) {
        let index = common_vendor.index.$u.random(0, waterfallList.value.length - 1);
        let item = JSON.parse(JSON.stringify(waterfallList.value[index]));
        item.id = common_vendor.index.$u.guid();
        waterfallList.value.push(item);
      }
    };
    const isShowTop = common_vendor.ref(false);
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 400) {
        isShowTop.value = true;
      } else {
        isShowTop.value = false;
      }
    });
    const toTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    };
    common_vendor.onLoad(() => {
      getbannerList();
      getWaterfallList();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => keyword.value = $event),
        b: common_vendor.p({
          placeholder: "搜索景点",
          ["bg-color"]: "#e3e3e3",
          modelValue: keyword.value
        }),
        c: common_vendor.p({
          list: bannerList.value,
          showTitle: true,
          keyName: "image",
          height: "160",
          radius: "8",
          autoplay: true
        }),
        d: common_vendor.p({
          text: "这是一个练习uniapp的旅游项目"
        }),
        e: common_vendor.w(({
          leftList
        }, s0, i0) => {
          return {
            a: common_vendor.f(leftList, (item, index, i1) => {
              return {
                a: "7fef823c-4-" + i0 + "-" + i1 + ",7fef823c-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.f(item.tag, (t, i, i2) => {
                  return {
                    a: common_vendor.t(t),
                    b: i
                  };
                }),
                f: common_vendor.t(item.isDot),
                g: index
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "left",
          path: "e",
          vueId: "7fef823c-3"
        }),
        f: common_vendor.w(({
          rightList
        }, s0, i0) => {
          return {
            a: common_vendor.f(rightList, (item, index, i1) => {
              return {
                a: "7fef823c-5-" + i0 + "-" + i1 + ",7fef823c-3",
                b: common_vendor.p({
                  threshold: "-450",
                  ["border-radius"]: "10",
                  image: item.img,
                  index
                }),
                c: common_vendor.t(item.title),
                d: common_vendor.t(item.times),
                e: common_vendor.f(item.tag, (t, i, i2) => {
                  return {
                    a: common_vendor.t(t),
                    b: i
                  };
                }),
                f: common_vendor.t(item.isDot),
                g: index
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "right",
          path: "f",
          vueId: "7fef823c-3"
        }),
        g: common_vendor.o(($event) => waterfallList.value = $event),
        h: common_vendor.p({
          modelValue: waterfallList.value
        }),
        i: isShowTop.value
      }, isShowTop.value ? {
        j: common_vendor.p({
          name: "arrow-upward",
          color: "#fff",
          size: "20"
        }),
        k: common_vendor.o(toTop)
      } : {});
    };
  }
};
_sfc_main.__runtimeHooks = 1;
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
