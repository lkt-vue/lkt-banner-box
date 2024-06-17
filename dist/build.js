import { defineComponent as S, useSlots as B, computed as l, openBlock as t, createElementBlock as n, createElementVNode as u, normalizeClass as L, normalizeStyle as c, createCommentVNode as r, createBlock as i, resolveDynamicComponent as b, withCtx as d, createTextVNode as p, toDisplayString as f, unref as T, renderSlot as h } from "vue";
const C = { class: "lkt-banner-box-container" }, N = { class: "lkt-banner-box-content" }, V = {
  key: 0,
  class: "lkt-banner-box-label-container"
}, z = {
  key: 1,
  class: "lkt-banner-box-sub-label-container"
}, A = {
  key: 2,
  class: "lkt-banner-box-extra"
}, D = /* @__PURE__ */ S({
  __name: "LktBannerBox",
  props: {
    label: { default: "" },
    labelTag: { default: "p" },
    subLabel: { default: "" },
    subLabelTag: { default: "p" },
    imgSrc: { default: "" },
    isParallax: { type: Boolean, default: !1 },
    opacity: { default: "" }
  },
  setup(o) {
    const e = o, m = B(), k = l(() => e.labelTag ? e.labelTag : "p"), y = l(() => e.subLabelTag ? e.subLabelTag : "p"), s = l(() => e.imgSrc !== ""), x = l(() => s.value ? e.opacity !== "" : !1), v = l(() => e.imgSrc ? 'background-image: url("' + e.imgSrc + '");' : ""), g = l(() => e.opacity ? "opacity: " + e.opacity : ""), _ = l(() => {
      let a = [];
      return e.isParallax && a.push("is-parallax"), a.join(" ");
    });
    return (a, E) => (t(), n("div", C, [
      u("div", {
        class: L(["lkt-banner-box", _.value])
      }, [
        s.value ? (t(), n("div", {
          key: 0,
          class: "lkt-banner-box-art",
          style: c(v.value)
        }, null, 4)) : r("", !0),
        x.value ? (t(), n("div", {
          key: 1,
          class: "lkt-banner-box-opacity",
          style: c(g.value)
        }, null, 4)) : r("", !0),
        u("div", N, [
          a.label ? (t(), n("div", V, [
            (t(), i(b(k.value), { class: "lkt-banner-box-label" }, {
              default: d(() => [
                p(f(a.label), 1)
              ]),
              _: 1
            }))
          ])) : r("", !0),
          a.subLabel ? (t(), n("div", z, [
            (t(), i(b(y.value), { class: "lkt-banner-box-sub-label" }, {
              default: d(() => [
                p(f(a.subLabel), 1)
              ]),
              _: 1
            }))
          ])) : r("", !0),
          T(m).default ? (t(), n("div", A, [
            h(a.$slots, "default")
          ])) : r("", !0)
        ])
      ], 2)
    ]));
  }
}), P = {
  install: (o) => {
    o.component("lkt-banner-box") === void 0 && o.component("lkt-banner-box", D);
  }
};
export {
  P as default
};
