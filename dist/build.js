var T = Object.defineProperty;
var N = (e, t, r) => t in e ? T(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var n = (e, t, r) => N(e, typeof t != "symbol" ? t + "" : t, r);
import { defineComponent as R, mergeDefaults as F, useSlots as _, computed as i, resolveComponent as z, createElementBlock as s, openBlock as l, normalizeClass as U, createElementVNode as v, renderSlot as m, createCommentVNode as c, normalizeStyle as g, createBlock as k, normalizeProps as V, mergeProps as O, unref as d, resolveDynamicComponent as C, withCtx as L, Fragment as w, createTextVNode as A, toDisplayString as S } from "vue";
import "lkt-string-tools";
var j = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(j || {}), $ = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))($ || {}), q = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], o, G = (o = class {
  constructor(t) {
  }
  feed(t = {}, r = this) {
    if (typeof t == "object") for (let [u, p] of Object.entries(t)) r.assignProp(u, p);
  }
  assignProp(t, r) {
    if (!(q.includes(t) || o.lktExcludedProps.includes(t))) {
      if (o.lktDateProps.includes(t)) {
        this[t] = new Date(r);
        return;
      }
      this[t] = r;
    }
  }
}, n(o, "lktAllowUndefinedProps", []), n(o, "lktExcludedProps", []), n(o, "lktDateProps", []), n(o, "lktStrictItem", !1), n(o, "lktDefaultValues", []), o), J = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(J || {}), K = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(K || {}), Q = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Q || {}), P = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(P || {}), y, X = (y = class extends G {
  constructor(t = {}) {
    super();
    n(this, "type", "static");
    n(this, "header");
    n(this, "subHeader");
    n(this, "art");
    n(this, "media");
    n(this, "opacity");
    this.feed(t);
  }
}, n(y, "lktDefaultValues", ["type", "header", "subHeader", "art", "opacity"]), y), Z = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(Z || {}), W = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(W || {}), Y = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(Y || {}), ee = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(ee || {}), te = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(te || {}), ae = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(ae || {}), re = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(re || {}), ne = ((e) => (e.NotDefined = "", e.Button = "button", e))(ne || {}), oe = ((e) => (e.Start = "start", e.End = "end", e))(oe || {}), le = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(le || {}), ie = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(ie || {}), se = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(se || {}), ue = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(ue || {}), ce = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(ce || {}), de = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(de || {}), me = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(me || {}), pe = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(pe || {}), he = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(he || {}), ve = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(ve || {}), ke = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(ke || {}), ye = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e))(ye || {}), be = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(be || {}), fe = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(fe || {}), xe = ((e) => (e.Message = "message", e.Button = "button", e))(xe || {}), ge = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(ge || {}), Ce = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Ce || {}), Le = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Le || {}), we = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(we || {}), Ae = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(Ae || {}), Se = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Se || {}), Pe = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Pe || {}), De = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(De || {}), Be = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Be || {}), Ee = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Ee || {}), Ie = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Ie || {}), Me = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Me || {}), He = ((e) => (e.Quick = "quick", e.Full = "full", e))(He || {});
function Te(e) {
  let t = new e(), r = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let u of e.lktDefaultValues) u in t && (r[u] = t[u]);
  return r;
}
const Ne = { class: "lkt-banner-main" }, Re = { class: "lkt-banner-content" }, Fe = { class: "lkt-banner-content-main" }, _e = {
  key: 0,
  class: "lkt-banner-header-container"
}, ze = {
  key: 1,
  class: "lkt-banner-sub-header-container"
}, Ue = {
  key: 2,
  class: "lkt-banner-extra"
}, Ve = /* @__PURE__ */ R({
  __name: "LktBannerBox",
  props: /* @__PURE__ */ F({
    type: {},
    header: {},
    subHeader: {},
    art: {},
    media: {},
    opacity: {}
  }, Te(X)),
  setup(e) {
    const t = e, r = _(), u = i(() => {
      var a;
      return (a = t.header) != null && a.tag ? t.header.tag : "p";
    }), p = i(() => {
      var a;
      return (a = t.subHeader) != null && a.tag ? t.subHeader.tag : "p";
    }), b = i(() => {
      var a;
      return ((a = t.art) == null ? void 0 : a.src) !== "";
    }), D = i(() => {
      var a;
      return ((a = t.media) == null ? void 0 : a.src) !== "";
    }), B = i(() => b.value ? !!t.opacity : !1), E = i(() => {
      var a, h;
      return (a = t.art) != null && a.src ? 'background-image: url("' + ((h = t.art) == null ? void 0 : h.src) + '");' : "";
    }), I = i(() => t.opacity ? "opacity: " + t.opacity : ""), M = i(() => {
      let a = [];
      return t.type === P.Parallax && a.push("is-parallax"), a.join(" ");
    });
    return (a, h) => {
      var f, x;
      const H = z("lkt-image");
      return l(), s("div", {
        class: U(["lkt-banner", M.value])
      }, [
        v("div", Ne, [
          b.value ? (l(), s("div", {
            key: 0,
            class: "lkt-banner-art",
            style: g(E.value)
          }, null, 4)) : c("", !0),
          B.value ? (l(), s("div", {
            key: 1,
            class: "lkt-banner-opacity",
            style: g(I.value)
          }, null, 4)) : c("", !0),
          v("div", Re, [
            D.value ? (l(), k(H, V(O({ key: 0 }, a.media)), null, 16)) : c("", !0),
            v("div", Fe, [
              (f = a.header) != null && f.text || d(r).header ? (l(), s("div", _e, [
                (l(), k(C(u.value), { class: "lkt-banner-header" }, {
                  default: L(() => [
                    d(r).header ? m(a.$slots, "header", { key: 0 }) : (l(), s(w, { key: 1 }, [
                      A(S(a.header.text), 1)
                    ], 64))
                  ]),
                  _: 3
                }))
              ])) : c("", !0),
              (x = a.subHeader) != null && x.text || d(r).subHeader ? (l(), s("div", ze, [
                (l(), k(C(p.value), { class: "lkt-banner-sub-header" }, {
                  default: L(() => [
                    d(r).subHeader ? m(a.$slots, "subHeader", { key: 0 }) : (l(), s(w, { key: 1 }, [
                      A(S(a.subHeader.text), 1)
                    ], 64))
                  ]),
                  _: 3
                }))
              ])) : c("", !0),
              d(r).default ? (l(), s("div", Ue, [
                m(a.$slots, "default")
              ])) : c("", !0)
            ])
          ])
        ]),
        d(r)["web-element-actions"] ? m(a.$slots, "web-element-actions", { key: 0 }) : c("", !0)
      ], 2);
    };
  }
}), qe = {
  install: (e) => {
    e.component("lkt-banner") === void 0 && e.component("lkt-banner", Ve);
  }
};
export {
  qe as default
};
