var E = Object.defineProperty;
var I = (e, t, r) => t in e ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var l = (e, t, r) => I(e, typeof t != "symbol" ? t + "" : t, r);
import { defineComponent as M, mergeDefaults as B, useSlots as T, computed as s, createElementBlock as c, openBlock as n, normalizeClass as H, createElementVNode as f, createCommentVNode as u, normalizeStyle as y, createBlock as b, resolveDynamicComponent as x, withCtx as g, createTextVNode as C, toDisplayString as L, unref as N, renderSlot as R } from "vue";
import "lkt-string-tools";
var F = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(F || {}), _ = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(_ || {}), z = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], o, U = (o = class {
  constructor(t) {
  }
  feed(t = {}, r = this) {
    if (typeof t == "object") for (let [i, d] of Object.entries(t)) r.assignProp(i, d);
  }
  assignProp(t, r) {
    if (!(z.includes(t) || o.lktExcludedProps.includes(t))) {
      if (o.lktDateProps.includes(t)) {
        this[t] = new Date(r);
        return;
      }
      this[t] = r;
    }
  }
}, l(o, "lktAllowUndefinedProps", []), l(o, "lktExcludedProps", []), l(o, "lktDateProps", []), l(o, "lktStrictItem", !1), l(o, "lktDefaultValues", []), o), V = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(V || {}), O = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(O || {}), j = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(j || {}), A = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(A || {}), m, q = (m = class extends U {
  constructor(t = {}) {
    super();
    l(this, "type", "static");
    l(this, "header");
    l(this, "subHeader");
    l(this, "art");
    l(this, "opacity");
    this.feed(t);
  }
}, l(m, "lktDefaultValues", ["type", "header", "subHeader", "art", "opacity"]), m), G = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(G || {}), J = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(J || {}), K = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(K || {}), Q = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Q || {}), X = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(X || {}), Z = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(Z || {}), $ = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))($ || {}), W = ((e) => (e.NotDefined = "", e.Button = "button", e))(W || {}), Y = ((e) => (e.Start = "start", e.End = "end", e))(Y || {}), ee = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(ee || {}), te = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(te || {}), ae = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ae || {}), re = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(re || {}), le = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(le || {}), oe = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(oe || {}), ne = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Entry = "entry", e))(ne || {}), ie = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(ie || {}), se = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(se || {}), ce = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(ce || {}), ue = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(ue || {}), de = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e))(de || {}), pe = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(pe || {}), me = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(me || {}), ve = ((e) => (e.Message = "message", e.Button = "button", e))(ve || {}), he = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(he || {}), ke = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(ke || {}), fe = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(fe || {}), ye = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(ye || {}), be = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(be || {}), xe = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(xe || {}), ge = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(ge || {}), Ce = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Ce || {}), Le = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Le || {}), Ae = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Ae || {}), we = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(we || {}), Se = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Se || {}), De = ((e) => (e.Quick = "quick", e.Full = "full", e))(De || {});
function Pe(e) {
  let t = new e(), r = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let i of e.lktDefaultValues) i in t && (r[i] = t[i]);
  return r;
}
const Ee = { class: "lkt-banner-main" }, Ie = { class: "lkt-banner-content" }, Me = {
  key: 0,
  class: "lkt-banner-label-container"
}, Be = {
  key: 1,
  class: "lkt-banner-sub-label-container"
}, Te = {
  key: 2,
  class: "lkt-banner-extra"
}, He = /* @__PURE__ */ M({
  __name: "LktBannerBox",
  props: /* @__PURE__ */ B({
    type: {},
    header: {},
    subHeader: {},
    art: {},
    opacity: {}
  }, Pe(q)),
  setup(e) {
    const t = e, r = T(), i = s(() => {
      var a;
      return (a = t.header) != null && a.tag ? t.header.tag : "p";
    }), d = s(() => {
      var a;
      return (a = t.subHeader) != null && a.tag ? t.subHeader.tag : "p";
    }), v = s(() => {
      var a;
      return ((a = t.art) == null ? void 0 : a.src) !== "";
    }), w = s(() => v.value ? !!t.opacity : !1), S = s(() => {
      var a, p;
      return (a = t.art) != null && a.src ? 'background-image: url("' + ((p = t.art) == null ? void 0 : p.src) + '");' : "";
    }), D = s(() => t.opacity ? "opacity: " + t.opacity : ""), P = s(() => {
      let a = [];
      return t.type === A.Parallax && a.push("is-parallax"), a.join(" ");
    });
    return (a, p) => {
      var h, k;
      return n(), c("div", {
        class: H(["lkt-banner", P.value])
      }, [
        f("div", Ee, [
          v.value ? (n(), c("div", {
            key: 0,
            class: "lkt-banner-art",
            style: y(S.value)
          }, null, 4)) : u("", !0),
          w.value ? (n(), c("div", {
            key: 1,
            class: "lkt-banner-opacity",
            style: y(D.value)
          }, null, 4)) : u("", !0),
          f("div", Ie, [
            (h = a.header) != null && h.text ? (n(), c("div", Me, [
              (n(), b(x(i.value), { class: "lkt-banner-label" }, {
                default: g(() => [
                  C(L(a.header.text), 1)
                ]),
                _: 1
              }))
            ])) : u("", !0),
            (k = a.subHeader) != null && k.text ? (n(), c("div", Be, [
              (n(), b(x(d.value), { class: "lkt-banner-sub-label" }, {
                default: g(() => [
                  C(L(a.subHeader.text), 1)
                ]),
                _: 1
              }))
            ])) : u("", !0),
            N(r).default ? (n(), c("div", Te, [
              R(a.$slots, "default")
            ])) : u("", !0)
          ])
        ])
      ], 2);
    };
  }
}), _e = {
  install: (e) => {
    e.component("lkt-banner") === void 0 && e.component("lkt-banner", He);
  }
};
export {
  _e as default
};
