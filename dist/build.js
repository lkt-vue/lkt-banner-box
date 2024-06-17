import { defineComponent as v, useSlots as _, computed as t, openBlock as l, createElementBlock as n, createElementVNode as s, normalizeClass as y, normalizeStyle as L, createCommentVNode as o, createBlock as u, resolveDynamicComponent as b, withCtx as c, createTextVNode as i, toDisplayString as d, unref as S, renderSlot as B } from "vue";
const T = { class: "lkt-banner-box-container" }, h = { class: "lkt-banner-box-content" }, C = {
  key: 0,
  class: "lkt-banner-box-label-container"
}, N = {
  key: 1,
  class: "lkt-banner-box-sub-label-container"
}, V = {
  key: 2,
  class: "lkt-banner-box-extra"
}, z = /* @__PURE__ */ v({
  __name: "LktBannerBox",
  props: {
    label: { default: "" },
    labelTag: { default: "p" },
    subLabel: { default: "" },
    subLabelTag: { default: "p" },
    imgSrc: { default: "" },
    isParallax: { type: Boolean, default: !1 }
  },
  setup(r) {
    const e = r, m = _(), f = t(() => e.labelTag ? e.labelTag : "p"), p = t(() => e.subLabelTag ? e.subLabelTag : "p"), k = t(() => e.imgSrc !== ""), x = t(() => e.imgSrc ? 'background-image: url("' + e.imgSrc + '");' : ""), g = t(() => {
      let a = [];
      return e.isParallax && a.push("is-parallax"), a.join(" ");
    });
    return (a, A) => (l(), n("div", T, [
      s("div", {
        class: y(["lkt-banner-box", g.value])
      }, [
        k.value ? (l(), n("div", {
          key: 0,
          class: "lkt-banner-box-art",
          style: L(x.value)
        }, null, 4)) : o("", !0),
        s("div", h, [
          a.label ? (l(), n("div", C, [
            (l(), u(b(f.value), { class: "lkt-banner-box-label" }, {
              default: c(() => [
                i(d(a.label), 1)
              ]),
              _: 1
            }))
          ])) : o("", !0),
          a.subLabel ? (l(), n("div", N, [
            (l(), u(b(p.value), { class: "lkt-banner-box-sub-label" }, {
              default: c(() => [
                i(d(a.subLabel), 1)
              ]),
              _: 1
            }))
          ])) : o("", !0),
          S(m).default ? (l(), n("div", V, [
            B(a.$slots, "default")
          ])) : o("", !0)
        ])
      ], 2)
    ]));
  }
}), E = {
  install: (r) => {
    r.component("lkt-banner-box") === void 0 && r.component("lkt-banner-box", z);
  }
};
export {
  E as default
};
