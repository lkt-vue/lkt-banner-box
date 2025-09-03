var _ = Object.defineProperty;
var F = (e, t, r) => t in e ? _(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var n = (e, t, r) => F(e, typeof t != "symbol" ? t + "" : t, r);
import { defineComponent as X, mergeDefaults as z, useSlots as U, computed as s, resolveComponent as b, createBlock as m, openBlock as l, resolveDynamicComponent as V, mergeProps as v, withCtx as y, createElementVNode as h, normalizeClass as O, createElementBlock as p, createCommentVNode as c, renderSlot as k, normalizeStyle as w, normalizeProps as G, unref as d, createSlots as B, Fragment as $, renderList as j } from "vue";
import "lkt-string-tools";
var q = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(q || {}), K = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.Time = "time", e.DateTime = "datetime", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Table = "table", e.Radio = "radio", e.ToggleButtonGroup = "toggle-button-group", e))(K || {}), Q = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], o, J = (o = class {
  constructor(t) {
  }
  feed(t = {}, r = this) {
    if (typeof t == "object") for (let [u, f] of Object.entries(t)) r.assignProp(u, f);
  }
  assignProp(t, r) {
    if (!(Q.includes(t) || o.lktExcludedProps.includes(t))) {
      if (o.lktDateProps.includes(t)) {
        this[t] = new Date(r);
        return;
      }
      this[t] = r;
    }
  }
}, n(o, "lktAllowUndefinedProps", []), n(o, "lktExcludedProps", []), n(o, "lktDateProps", []), n(o, "lktStrictItem", !1), n(o, "lktDefaultValues", []), o), W = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(W || {}), Y = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(Y || {}), Z = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Z || {}), A = ((e) => (e.Static = "static", e.Parallax = "parallax", e))(A || {}), x, ee = (x = class extends J {
  constructor(t = {}) {
    super();
    n(this, "type", "static");
    n(this, "header");
    n(this, "subHeader");
    n(this, "art");
    n(this, "media");
    n(this, "opacity");
    n(this, "globalButton");
    n(this, "navButtons", []);
    this.feed(t);
  }
}, n(x, "lktDefaultValues", ["type", "header", "subHeader", "art", "opacity", "globalButton", "navButtons"]), x), te = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e.InlineDrop = "inline-drop", e.ColumnIndex = "column-index", e))(te || {}), ae = ((e) => (e.Date = "date", e.Number = "number", e.Timer = "timer", e))(ae || {}), re = ((e) => (e.A0 = "a0", e.A1 = "a1", e.A2 = "a2", e.A3 = "a3", e.A4 = "a4", e.A5 = "a5", e.A6 = "a6", e.A7 = "a7", e.A8 = "a8", e.A9 = "a9", e))(re || {}), ne = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e.Table = "table", e))(ne || {}), oe = ((e) => (e.HTTPResponse = "http-response", e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(oe || {}), le = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(le || {}), ie = ((e) => (e.StorageUnit = "unit", e.Directory = "dir", e.Image = "img", e.Video = "vid", e.File = "file", e))(ie || {}), se = ((e) => (e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e))(se || {}), ue = ((e) => (e.NotDefined = "", e.Button = "button", e))(ue || {}), ce = ((e) => (e.Start = "start", e.End = "end", e))(ce || {}), de = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(de || {}), me = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(me || {}), ve = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(ve || {}), pe = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(pe || {}), he = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(he || {}), ke = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(ke || {}), fe = ((e) => (e.Current = "current", e.Modifications = "modifications", e.SplitView = "split-view", e.Differences = "differences", e))(fe || {}), be = ((e) => (e.Anchor = "anchor", e.Button = "button", e.Header = "header", e.Entry = "entry", e))(be || {}), ye = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(ye || {}), xe = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(xe || {}), ge = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(ge || {}), Ce = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Ce || {}), Le = ((e) => (e.Bar = "bar", e.Circle = "circle", e))(Le || {}), we = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e.Accordion = "accordion", e))(we || {}), Be = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Be || {}), Ae = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Ae || {}), Se = ((e) => (e.Message = "message", e.Button = "button", e))(Se || {}), De = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(De || {}), Pe = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Pe || {}), Me = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Me || {}), Te = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Te || {}), Ie = ((e) => (e.LktAnchor = "lkt-anchor", e.LktLayoutAccordion = "lkt-layout-accordion", e.LktTextAccordion = "lkt-text-accordion", e.LktLayoutBox = "lkt-layout-box", e.LktTextBox = "lkt-text-box", e.LktLayoutBanner = "lkt-layout-banner", e.LktTextBanner = "lkt-text-banner", e.LktButton = "lkt-button", e.LktLayout = "lkt-layout", e.LktHeader = "lkt-header", e.LktIcon = "lkt-icon", e.LktIcons = "lkt-icons", e.LktImage = "lkt-image", e.LktText = "lkt-text", e))(Ie || {}), Ee = ((e) => (e.Grid = "grid", e.FlexRow = "flex-row", e.FlexRows = "flex-rows", e.FlexColumn = "flex-column", e))(Ee || {}), He = ((e) => (e.Draft = "draft", e.Public = "public", e.Scheduled = "scheduled", e))(He || {}), Ne = ((e) => (e[e.XXS = 1] = "XXS", e[e.XS = 2] = "XS", e[e.SM = 3] = "SM", e[e.MD = 4] = "MD", e[e.LG = 5] = "LG", e[e.XL = 6] = "XL", e[e.XXL = 7] = "XXL", e))(Ne || {}), Re = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Re || {}), _e = ((e) => (e.Message = "message", e.Inline = "inline", e))(_e || {}), Fe = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(Fe || {}), Xe = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Xe || {}), ze = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(ze || {}), Ue = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Ue || {}), Ve = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Ve || {}), Oe = ((e) => (e.Page = "page", e.Element = "element", e))(Oe || {}), Ge = ((e) => (e.Quick = "quick", e.Full = "full", e))(Ge || {});
function $e(e) {
  let t = new e(), r = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let u of e.lktDefaultValues) u in t && (r[u] = t[u]);
  return r;
}
const je = { class: "lkt-banner--main" }, qe = { class: "lkt-banner--content" }, Ke = { class: "lkt-banner--content-main" }, Qe = {
  key: 2,
  class: "lkt-banner--extra"
}, Je = {
  key: 0,
  class: "lkt-banner--nav-buttons"
}, We = /* @__PURE__ */ X({
  __name: "LktBannerBox",
  props: /* @__PURE__ */ z({
    type: {},
    header: {},
    subHeader: {},
    art: {},
    media: {},
    opacity: {},
    globalButton: {},
    navButtons: {}
  }, $e(ee)),
  setup(e) {
    const t = e, r = U(), u = s(() => {
      var a, i;
      return typeof ((a = t.art) == null ? void 0 : a.src) == "string" && ((i = t.art) == null ? void 0 : i.src) !== "";
    }), f = s(() => {
      var a, i;
      return t.media && ((a = t.media) == null ? void 0 : a.src) && ((i = t.media) == null ? void 0 : i.src) !== "";
    }), S = s(() => u.value ? !!t.opacity : !1), D = s(() => {
      var a, i;
      return (a = t.art) != null && a.src ? 'background-image: url("' + ((i = t.art) == null ? void 0 : i.src) + '");' : "";
    }), P = s(() => t.opacity ? "opacity: " + t.opacity : ""), M = s(() => {
      let a = [];
      return t.type === A.Parallax && a.push("is-parallax"), a.join(" ");
    }), T = s(() => typeof t.globalButton < "u" ? "lkt-button" : "div"), I = s(() => typeof t.globalButton < "u" ? t.globalButton : {}), E = s(() => typeof t.globalButton < "u" ? "lkt-banner--global-button" : "");
    return (a, i) => {
      const H = b("lkt-image"), g = b("lkt-header"), N = b("lkt-button");
      return l(), m(V(T.value), v(I.value, { class: E.value }), {
        default: y(() => {
          var C, L;
          return [
            h("div", {
              class: O(["lkt-banner", M.value])
            }, [
              h("div", je, [
                u.value ? (l(), p("div", {
                  key: 0,
                  class: "lkt-banner--art",
                  style: w(D.value)
                }, null, 4)) : c("", !0),
                S.value ? (l(), p("div", {
                  key: 1,
                  class: "lkt-banner--opacity",
                  style: w(P.value)
                }, null, 4)) : c("", !0),
                h("div", qe, [
                  f.value ? (l(), m(H, G(v({ key: 0 }, a.media)), null, 16)) : c("", !0),
                  h("div", Ke, [
                    (C = a.header) != null && C.text || d(r).header ? (l(), m(g, v({ key: 0 }, a.header, { class: "lkt-banner--header" }), B({ _: 2 }, [
                      d(r).header ? {
                        name: "text",
                        fn: y(() => [
                          k(a.$slots, "header")
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040)) : c("", !0),
                    (L = a.subHeader) != null && L.text || d(r).subHeader ? (l(), m(g, v({ key: 1 }, a.subHeader, { class: "lkt-banner--sub-header" }), B({ _: 2 }, [
                      d(r).subHeader ? {
                        name: "text",
                        fn: y(() => [
                          k(a.$slots, "subHeader")
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040)) : c("", !0),
                    d(r).default ? (l(), p("div", Qe, [
                      k(a.$slots, "default")
                    ])) : c("", !0)
                  ])
                ])
              ]),
              a.navButtons.length > 0 ? (l(), p("nav", Je, [
                (l(!0), p($, null, j(a.navButtons, (R) => (l(), m(N, v({ ref_for: !0 }, R), null, 16))), 256))
              ])) : c("", !0),
              d(r)["web-element-actions"] ? k(a.$slots, "web-element-actions", { key: 1 }) : c("", !0)
            ], 2)
          ];
        }),
        _: 3
      }, 16, ["class"]);
    };
  }
}), tt = {
  install: (e) => {
    e.component("lkt-banner") === void 0 && e.component("lkt-banner", We);
  }
};
export {
  tt as default
};
