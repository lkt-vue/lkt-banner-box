var M = Object.defineProperty;
var B = (e, t, r) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var l = (e, t, r) => B(e, typeof t != "symbol" ? t + "" : t, r);
import { defineComponent as T, mergeDefaults as N, useSlots as R, computed as c, createElementBlock as i, openBlock as n, normalizeClass as F, createElementVNode as f, createCommentVNode as u, normalizeStyle as x, unref as d, createBlock as g, resolveDynamicComponent as C, withCtx as L, renderSlot as v, Fragment as A, createTextVNode as w, toDisplayString as S } from "vue";
import "lkt-string-tools";
var z = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(z || {}), U = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(U || {}), V = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], o, _ = (o = class {
  constructor(t) {
  }
  feed(t = {}, r = this) {
    if (typeof t == "object") for (let [s, p] of Object.entries(t)) r.assignProp(s, p);
  }
  assignProp(t, r) {
    if (!(V.includes(t) || o.lktExcludedProps.includes(t))) {
      if (o.lktDateProps.includes(t)) {
        this[t] = new Date(r);
        return;
      }
      this[t] = r;
    }
  }
}, l(o, "lktAllowUndefinedProps", []), l(o, "lktExcludedProps", []), l(o, "lktDateProps", []), l(o, "lktStrictItem", !1), l(o, "lktDefaultValues", []), o), O = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(O || {}), j = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(j || {}), q = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(q || {}), D = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(D || {}), h, $ = (h = class extends _ {
  constructor(t = {}) {
    super();
    l(this, "type", "static");
    l(this, "header");
    l(this, "subHeader");
    l(this, "art");
    l(this, "opacity");
    this.feed(t);
  }
}, l(h, "lktDefaultValues", ["type", "header", "subHeader", "art", "opacity"]), h), G = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(G || {}), J = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(J || {}), K = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(K || {}), Q = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Q || {}), X = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(X || {}), Z = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(Z || {}), W = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(W || {}), Y = ((e) => (e.NotDefined = "", e.Button = "button", e))(Y || {}), ee = ((e) => (e.Start = "start", e.End = "end", e))(ee || {}), te = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(te || {}), ae = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(ae || {}), re = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(re || {}), le = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(le || {}), oe = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(oe || {}), ne = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(ne || {}), ie = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(ie || {}), se = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(se || {}), ce = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(ce || {}), ue = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(ue || {}), de = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(de || {}), pe = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e))(pe || {}), me = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(me || {}), ve = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(ve || {}), he = ((e) => (e.Message = "message", e.Button = "button", e))(he || {}), ke = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(ke || {}), ye = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(ye || {}), be = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(be || {}), fe = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(fe || {}), xe = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(xe || {}), ge = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(ge || {}), Ce = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Ce || {}), Le = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Le || {}), Ae = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ae || {}), we = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(we || {}), Se = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Se || {}), De = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(De || {}), Pe = ((e) => (e.Quick = "quick", e.Full = "full", e))(Pe || {});
function Ee(e) {
  let t = new e(), r = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let s of e.lktDefaultValues) s in t && (r[s] = t[s]);
  return r;
}
const Ie = { class: "lkt-banner-main" }, He = { class: "lkt-banner-content" }, Me = {
  key: 0,
  class: "lkt-banner-label-container"
}, Be = {
  key: 1,
  class: "lkt-banner-sub-label-container"
}, Te = {
  key: 2,
  class: "lkt-banner-extra"
}, Ne = /* @__PURE__ */ T({
  __name: "LktBannerBox",
  props: /* @__PURE__ */ N({
    type: {},
    header: {},
    subHeader: {},
    art: {},
    opacity: {}
  }, Ee($)),
  setup(e) {
    const t = e, r = R(), s = c(() => {
      var a;
      return (a = t.header) != null && a.tag ? t.header.tag : "p";
    }), p = c(() => {
      var a;
      return (a = t.subHeader) != null && a.tag ? t.subHeader.tag : "p";
    }), k = c(() => {
      var a;
      return ((a = t.art) == null ? void 0 : a.src) !== "";
    }), P = c(() => k.value ? !!t.opacity : !1), E = c(() => {
      var a, m;
      return (a = t.art) != null && a.src ? 'background-image: url("' + ((m = t.art) == null ? void 0 : m.src) + '");' : "";
    }), I = c(() => t.opacity ? "opacity: " + t.opacity : ""), H = c(() => {
      let a = [];
      return t.type === D.Parallax && a.push("is-parallax"), a.join(" ");
    });
    return (a, m) => {
      var y, b;
      return n(), i("div", {
        class: F(["lkt-banner", H.value])
      }, [
        f("div", Ie, [
          k.value ? (n(), i("div", {
            key: 0,
            class: "lkt-banner-art",
            style: x(E.value)
          }, null, 4)) : u("", !0),
          P.value ? (n(), i("div", {
            key: 1,
            class: "lkt-banner-opacity",
            style: x(I.value)
          }, null, 4)) : u("", !0),
          f("div", He, [
            (y = a.header) != null && y.text || d(r).header ? (n(), i("div", Me, [
              (n(), g(C(s.value), { class: "lkt-banner-label" }, {
                default: L(() => [
                  d(r).header ? v(a.$slots, "header", { key: 0 }) : (n(), i(A, { key: 1 }, [
                    w(S(a.header.text), 1)
                  ], 64))
                ]),
                _: 3
              }))
            ])) : u("", !0),
            (b = a.subHeader) != null && b.text || d(r).subHeader ? (n(), i("div", Be, [
              (n(), g(C(p.value), { class: "lkt-banner-sub-label" }, {
                default: L(() => [
                  d(r).subHeader ? v(a.$slots, "subHeader", { key: 0 }) : (n(), i(A, { key: 1 }, [
                    w(S(a.subHeader.text), 1)
                  ], 64))
                ]),
                _: 3
              }))
            ])) : u("", !0),
            d(r).default ? (n(), i("div", Te, [
              v(a.$slots, "default")
            ])) : u("", !0)
          ])
        ])
      ], 2);
    };
  }
}), Ue = {
  install: (e) => {
    e.component("lkt-banner") === void 0 && e.component("lkt-banner", Ne);
  }
};
export {
  Ue as default
};
