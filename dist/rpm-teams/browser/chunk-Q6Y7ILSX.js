if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  x
} from "@nf-internal/chunk-72IGR2JC";

// node_modules/primeng/node_modules/@primeuix/utils/dist/dom/index.mjs
function I(t, e) {
  return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : false;
}
function R(t, e) {
  if (t && e) {
    let o = (n) => {
      I(t, n) || (t.classList ? t.classList.add(n) : t.className += " " + n);
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function U() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function ht(t) {
  typeof t == "string" ? R(document.body, t || "p-overflow-hidden") : (t != null && t.variableName && document.body.style.setProperty(t.variableName, U() + "px"), R(document.body, (t == null ? void 0 : t.className) || "p-overflow-hidden"));
}
function W(t, e) {
  if (t && e) {
    let o = (n) => {
      t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
  }
}
function bt(t) {
  typeof t == "string" ? W(document.body, t || "p-overflow-hidden") : (t != null && t.variableName && document.body.style.removeProperty(t.variableName), W(document.body, (t == null ? void 0 : t.className) || "p-overflow-hidden"));
}
function w(t) {
  if (typeof document == "undefined") return null;
  for (let e of Array.from(document.styleSheets || [])) try {
    for (let o of Array.from(e.cssRules || [])) {
      let n = o.style;
      if (n) {
        for (let r of Array.from(n)) if (t.lastIndex = 0, t.test(r)) return { name: r, value: n.getPropertyValue(r).trim() };
      }
    }
  } catch (o) {
    continue;
  }
  return null;
}
function h() {
  let t = window, e = document, o = e.documentElement, n = e.getElementsByTagName("body")[0], r = t.innerWidth || o.clientWidth || n.clientWidth, i = t.innerHeight || o.clientHeight || n.clientHeight;
  return { width: r, height: i };
}
function E(t) {
  return t ? Math.abs(t.scrollLeft) : 0;
}
var ge = /expression\s*\(|url\s*\(\s*['"]?\s*(?:javascript|vbscript):|@import\s+['"]?\s*(?:javascript|vbscript|data):/i;
var xt = /url\s*\(\s*['"]?\s*(data:[^'")]*)/gi;
var he = /* @__PURE__ */ new Set(["href", "src", "xlink:href", "action", "formaction"]);
var ye = /* @__PURE__ */ new Set(["http", "https", "mailto", "tel", "sms", "ftp", "ftps", "blob"]);
var wt = /^data:image\/(?:png|gif|jpeg|jpg|webp|bmp|avif);base64,[a-z0-9+/=\s]+$/i;
function _(t) {
  if (typeof t != "string") return false;
  if (ge.test(t)) return true;
  xt.lastIndex = 0;
  let e;
  for (; e = xt.exec(t); ) if (!wt.test(e[1].trim())) return true;
  return false;
}
function be(t) {
  let e = "";
  for (let o of t) {
    let n = o.charCodeAt(0);
    n <= 31 || n === 127 || /\s/.test(o) || (e += o);
  }
  return e;
}
function xe(t, e) {
  var i, s;
  let o = be(t), n = e.toLowerCase();
  if (o.startsWith("#") || o.startsWith("/") || o.startsWith("./") || o.startsWith("../") || o.startsWith("?")) return true;
  let r = (s = (i = o.match(/^([a-z][a-z0-9+.-]*):/i)) == null ? void 0 : i[1]) == null ? void 0 : s.toLowerCase();
  return r ? r === "data" ? (n === "src" || n === "xlink:href") && wt.test(t.trim()) : ye.has(r) : true;
}
function P(t, e) {
  return typeof e == "string" && he.has(t.toLowerCase()) && !xe(e, t);
}
function O(t, e) {
  return t.toLowerCase() === "srcdoc" && typeof e == "string" && /<\s*script\b|on\w+\s*=|javascript:|data:text\/html/i.test(e);
}
function Ee(t) {
  return t.startsWith("--") ? t : t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function X(t, e, o = {}) {
  o.clear && (t.style.cssText = ""), e.forEach((n) => {
    let r = n.indexOf(":");
    if (r < 0) return;
    let i = n.slice(0, r).trim(), s = n.slice(r + 1).trim();
    if (!i || _(s)) return;
    let l = "";
    /!\s*important$/i.test(s) && (s = s.replace(/!\s*important$/i, "").trim(), l = "important"), t.style.setProperty(i, s, l);
  });
}
function Se(t, e) {
  let o = 0;
  for (; e - 1 - o >= 0 && t[e - 1 - o] === "\\"; ) o++;
  return o % 2 === 1;
}
function ve(t) {
  let e = [], o = 0, n = "", r = 0;
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    n ? s === n && !Se(t, i) && (n = "") : s === "'" || s === '"' ? n = s : s === "(" ? r++ : s === ")" ? r = Math.max(0, r - 1) : s === ";" && r === 0 && (e.push(t.slice(o, i)), o = i + 1);
  }
  return e.push(t.slice(o)), e;
}
function S(t, e, o = {}) {
  if (typeof e == "string") {
    let n = ve(e);
    X(t, n, o);
    return;
  }
  o.clear && (t.style.cssText = ""), Object.entries(e).forEach(([n, r]) => {
    if (r == null || _(r)) return;
    let i = String(r), s = "";
    /!\s*important$/i.test(i) && (i = i.replace(/!\s*important$/i, "").trim(), s = "important"), t.style.setProperty(Ee(n), i, s);
  });
}
function C(t, e) {
  t && (typeof e == "string" ? S(t, e, { clear: true }) : S(t, e || {}));
}
function L(t, e) {
  if (t instanceof HTMLElement) {
    let o = t.offsetWidth;
    if (e) {
      let n = getComputedStyle(t);
      o += parseFloat(n.marginLeft) + parseFloat(n.marginRight);
    }
    return o;
  }
  return 0;
}
function y(t) {
  if (t) {
    let e = t.parentNode;
    return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
  }
  return null;
}
function H(t) {
  return !!(t !== null && typeof t != "undefined" && t.nodeName && y(t));
}
function p(t) {
  return typeof Element != "undefined" ? t instanceof Element : t !== null && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
}
function b(t) {
  var o;
  if (p(t)) return t;
  if (!t || typeof t != "object") return;
  let e = t;
  if ("current" in t) e = t.current, e = (o = b(e == null ? void 0 : e.elementRef)) != null ? o : e;
  else if ("value" in t) e = t.value;
  else if ("nativeElement" in t) e = t.nativeElement;
  else if ("el" in t) {
    let n = t.el;
    n && typeof n == "object" && "nativeElement" in n ? e = n.nativeElement : e = n;
  } else if ("elementRef" in t) return b(t.elementRef);
  return e = x(e), p(e) ? e : void 0;
}
function Y(t, e) {
  var o, n, r;
  if (t) switch (t) {
    case "document":
      return document;
    case "window":
      return window;
    case "body":
      return document.body;
    case "@next":
      return e == null ? void 0 : e.nextElementSibling;
    case "@prev":
      return e == null ? void 0 : e.previousElementSibling;
    case "@first":
      return e == null ? void 0 : e.firstElementChild;
    case "@last":
      return e == null ? void 0 : e.lastElementChild;
    case "@child":
      return (o = e == null ? void 0 : e.children) == null ? void 0 : o[0];
    case "@parent":
      return e == null ? void 0 : e.parentElement;
    case "@grandparent":
      return (n = e == null ? void 0 : e.parentElement) == null ? void 0 : n.parentElement;
    default: {
      if (typeof t == "string") {
        let d = t.match(/^@child\[(\d+)]/);
        return d ? ((r = e == null ? void 0 : e.children) == null ? void 0 : r[parseInt(d[1], 10)]) || null : document.querySelector(t) || null;
      }
      let s = ((d) => typeof d == "function" && "call" in d && "apply" in d)(t) ? t() : t, l = b(s);
      return H(l) ? l : (s == null ? void 0 : s.nodeType) === 9 ? s : void 0;
    }
  }
}
function St(t, e) {
  let o = Y(t, e);
  if (o) o.appendChild(e);
  else throw new Error("Cannot append " + e + " to " + t);
}
function A(t, e, o) {
  if (typeof o != "function" && !(typeof o == "object" && o !== null && "handleEvent" in o)) return;
  let n = t, r = n._pListeners || (n._pListeners = []), i = false;
  for (let s = r.length - 1; s >= 0; s--) r[s][0] === e && (r[s][1] === o ? i = true : (t.removeEventListener(e, r[s][1]), r.splice(s, 1)));
  i || (t.addEventListener(e, o), r.push([e, o]));
}
function $(t, e = {}) {
  if (p(t)) {
    let o = t == null ? void 0 : t.$attrs, n = (s, l) => {
      let d = o != null && o[s] ? [o[s]] : [];
      return [l].flat().reduce((f, a) => {
        if (a != null) {
          let u = typeof a;
          if (u === "string" || u === "number") f.push(a);
          else if (u === "object") {
            let c = Array.isArray(a) ? n(s, a) : Object.entries(a).map(([m, v]) => s === "style" && (v || v === 0) ? `${m.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${v}` : v ? m : void 0);
            f = c.length ? f.concat(c.filter((m) => !!m)) : f;
          }
        }
        return f;
      }, d);
    }, r = (s) => {
      let l = n("style", s);
      X(t, l);
    }, i = t;
    Object.entries(e).forEach(([s, l]) => {
      if (l != null) {
        let d = s.match(/^on(.+)/);
        if (d) A(t, d[1].toLowerCase(), l);
        else if (s === "p-bind" || s === "pBind") $(t, l);
        else if (s === "style") r(l), i.$attrs = i.$attrs || {}, i.$attrs[s] = t.style.cssText;
        else {
          if (P(s, l) || O(s, l)) return;
          l = s === "class" ? [...new Set(n("class", l))].join(" ").trim() : l, i.$attrs = i.$attrs || {}, i.$attrs[s] = l, t.setAttribute(s, l);
        }
      }
    });
  }
}
function Z(t, e = {}, ...o) {
  if (t) {
    let n = document.createElement(t);
    return $(n, e), n.append(...o), n;
  }
}
function Q(t) {
  return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function tt(t, e) {
  return p(t) ? Array.from(t.querySelectorAll(e)) : [];
}
function kt(t, e) {
  t && document.activeElement !== t && t.focus(e);
}
function x2(t, e = "") {
  let o = tt(t, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`), n = [];
  for (let r of o) {
    let i = getComputedStyle(r);
    i.display != "none" && i.visibility != "hidden" && n.push(r);
  }
  return n;
}
function Ot(t, e) {
  let o = x2(t, e);
  return o.length > 0 ? o[0] : null;
}
function Ft(t) {
  if (t) {
    let e = t.offsetHeight, o = getComputedStyle(t);
    return e -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), e;
  }
  return 0;
}
function Bt(t, e) {
  let o = x2(t, e);
  return o.length > 0 ? o[o.length - 1] : null;
}
function st(t) {
  if (t) {
    let e = t.getBoundingClientRect();
    return { top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0), left: e.left + (window.pageXOffset || E(document.documentElement) || E(document.body) || 0) };
  }
  return { top: "auto", left: "auto" };
}
function k(t, e) {
  if (t) {
    let o = t.offsetHeight;
    if (e) {
      let n = getComputedStyle(t);
      o += parseFloat(n.marginTop) + parseFloat(n.marginBottom);
    }
    return o;
  }
  return 0;
}
function zt(t) {
  if (t) {
    let e = t.offsetWidth, o = getComputedStyle(t);
    return e -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), e;
  }
  return 0;
}
function se() {
  return new Promise((t) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => t());
    });
  });
}
function le(t) {
  var e;
  t && ("remove" in Element.prototype ? t.remove() : (e = t.parentNode) == null || e.removeChild(t));
}
function ce(t, e = "", o) {
  if (p(t) && o !== null && o !== void 0) {
    let n = e.toLowerCase();
    if (/^on[a-z]/.test(n)) {
      A(t, n.slice(2), o);
      return;
    }
    if (n === "style") {
      typeof o == "string" ? S(t, o, { clear: true }) : typeof o == "object" && S(t, o);
      return;
    }
    if (P(e, o) || O(e, o)) return;
    t.setAttribute(e, o);
  }
}

export {
  I,
  R,
  ht,
  W,
  bt,
  w,
  h,
  C,
  L,
  St,
  $,
  Z,
  Q,
  kt,
  Ot,
  Ft,
  Bt,
  st,
  k,
  zt,
  se,
  le,
  ce
};
//# sourceMappingURL=chunk-Q6Y7ILSX.js.map
