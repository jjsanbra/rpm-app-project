if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';
import {
  R,
  S
} from "@nf-internal/chunk-2RYOTKFE";
import "@nf-internal/chunk-SU6R4COE";
import "@nf-internal/chunk-U52GCPZ3";
import {
  __spreadValues
} from "@nf-internal/chunk-75RLSLFM";

// node_modules/primeng/fesm2022/primeng-config.mjs
import * as i0 from "@angular/core";
import { Injectable, InjectionToken, PLATFORM_ID, effect, inject, makeEnvironmentProviders, provideAppInitializer, signal, untracked } from "@angular/core";
import { FilterMatchMode } from "primeng/api";
import { Subject } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { BaseStyle } from "primeng/base";

// node_modules/@primeui/license-manager/dist/index.mjs
var e = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty;
var n = Object.prototype.propertyIsEnumerable;
var i = (t2, r2, n2) => r2 in t2 ? e(t2, r2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[r2] = n2;
var o = (e2, o2) => {
  for (var c2 in o2 || (o2 = {})) r.call(o2, c2) && i(e2, c2, o2[c2]);
  if (t) for (var c2 of t(o2)) n.call(o2, c2) && i(e2, c2, o2[c2]);
  return e2;
};
var c = (e2, t2, r2) => new Promise((n2, i2) => {
  var o2 = (e3) => {
    try {
      u2(r2.next(e3));
    } catch (e4) {
      i2(e4);
    }
  }, c2 = (e3) => {
    try {
      u2(r2.throw(e3));
    } catch (e4) {
      i2(e4);
    }
  }, u2 = (e3) => e3.done ? n2(e3.value) : Promise.resolve(e3.value).then(o2, c2);
  u2((r2 = r2.apply(e2, t2)).next());
});
var u = class extends Error {
};
var l = (e2) => " " === e2 || "\n" === e2 || "\r" === e2 || "	" === e2;
var a = (e2) => void 0 !== e2 && e2 >= "0" && e2 <= "9";
function s(e2) {
  if (void 0 === e2) throw new u("Bad escape");
  if (e2 >= "0" && e2 <= "9") return e2.charCodeAt(0) - 48;
  if (e2 >= "a" && e2 <= "f") return e2.charCodeAt(0) - 87;
  if (e2 >= "A" && e2 <= "F") return e2.charCodeAt(0) - 55;
  throw new u("Bad escape");
}
var f = (() => {
  const e2 = /* @__PURE__ */ Object.create(null);
  for (let t2 = 0; t2 < 64; t2++) e2["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[t2]] = t2;
  return e2;
})();
function d(e2) {
  if (1 == e2.length % 4) throw new Error("Invalid base64url length");
  const t2 = Math.floor(6 * e2.length / 8), r2 = new Uint8Array(t2);
  let n2 = 0, i2 = 0, o2 = 0;
  for (let t3 = 0; t3 < e2.length; t3++) {
    const c2 = e2[t3], u2 = f[c2];
    if (void 0 === u2) throw new Error("Invalid base64url character");
    n2 = n2 << 6 | u2, i2 += 6, i2 >= 8 && (i2 -= 8, r2[o2++] = n2 >> i2 & 255);
  }
  if (i2 > 0 && n2 & (1 << i2) - 1) throw new Error("Invalid base64url trailing bits");
  return r2;
}
var h = "primeui";
var w = "primeui-pro:";
var y = Object.freeze({ primeui: "primeui", scheduler: "primeui-pro:scheduler", texteditor: "primeui-pro:text-editor", charts: "primeui-pro:charts", diagram: "primeui-pro:diagram", pdfviewer: "primeui-pro:pdf-viewer", taskboard: "primeui-pro:task-board", datagrid: "primeui-pro:datagrid", ganttchart: "primeui-pro:gantt-chart", filemanager: "primeui-pro:file-manager" });
var g = 16;
var v = 65536;
var m = () => new Array(g).fill(0);
function b(e2) {
  const t2 = m();
  let r2 = e2;
  for (let e3 = 0; e3 < g && 0 !== r2; e3++) t2[e3] = r2 % v, r2 = Math.floor(r2 / v);
  return t2;
}
var x = m();
var U = b(1);
var E = (() => {
  const e2 = m();
  e2[0] = 65517;
  for (let t2 = 1; t2 < 15; t2++) e2[t2] = 65535;
  return e2[15] = 32767, e2;
})();
function z(e2, t2) {
  let r2 = t2;
  for (; 0 !== r2; ) {
    let t3 = 38 * r2;
    r2 = 0;
    for (let r3 = 0; r3 < g; r3++) {
      const n2 = e2[r3] + t3;
      if (t3 = Math.floor(n2 / v), e2[r3] = n2 - t3 * v, 0 === t3) break;
    }
    r2 = t3;
  }
}
function k(e2, t2) {
  const r2 = new Array(32).fill(0);
  for (let n2 = 0; n2 < g; n2++) {
    const i2 = e2[n2];
    if (0 !== i2) {
      for (let e3 = 0; e3 < g; e3++) r2[n2 + e3] = r2[n2 + e3] + i2 * t2[e3];
      if (n2 % 4 == 3) {
        let e3 = 0;
        for (let t3 = 0; t3 < 32; t3++) {
          const n3 = r2[t3] + e3;
          e3 = Math.floor(n3 / v), r2[t3] = n3 - e3 * v;
        }
      }
    }
  }
  return (function(e3) {
    for (let t4 = g; t4 < e3.length; t4++) e3[t4 - g] = e3[t4 - g] + 38 * e3[t4], e3[t4] = 0;
    let t3 = 0;
    for (let r4 = 0; r4 < g; r4++) {
      const n2 = e3[r4] + t3;
      t3 = Math.floor(n2 / v), e3[r4] = n2 - t3 * v;
    }
    const r3 = e3.slice(0, g);
    return z(r3, t3), r3;
  })(r2);
}
function A(e2) {
  return k(e2, e2);
}
function O(e2, t2) {
  const r2 = m();
  let n2 = 0;
  for (let i2 = 0; i2 < g; i2++) {
    const o2 = e2[i2] + t2[i2] + n2;
    n2 = o2 >= v ? 1 : 0, r2[i2] = o2 - n2 * v;
  }
  return z(r2, n2), r2;
}
function j(e2, t2) {
  const r2 = m();
  let n2 = 0;
  for (let i2 = 0; i2 < g; i2++) {
    const o2 = e2[i2] - t2[i2] - n2;
    n2 = o2 < 0 ? 1 : 0, r2[i2] = o2 + n2 * v;
  }
  return z(r2, -n2), r2;
}
function P(e2) {
  return j(x, e2);
}
function I(e2) {
  for (let t2 = 15; t2 >= 0; t2--) {
    if (e2[t2] > E[t2]) return true;
    if (e2[t2] < E[t2]) return false;
  }
  return true;
}
function D(e2) {
  const t2 = (function(e3) {
    const t3 = e3.slice();
    let r3 = 0;
    for (let e4 = 0; e4 < g; e4++) {
      const n2 = t3[e4] + r3;
      r3 = Math.floor(n2 / v), t3[e4] = n2 - r3 * v;
    }
    z(t3, r3);
    for (let e4 = 0; e4 < 2 && I(t3); e4++) {
      let e5 = 0;
      for (let r4 = 0; r4 < g; r4++) {
        const n2 = t3[r4] - E[r4] - e5;
        e5 = n2 < 0 ? 1 : 0, t3[r4] = n2 + e5 * v;
      }
    }
    return t3;
  })(e2), r2 = new Uint8Array(32);
  for (let e3 = 0; e3 < g; e3++) r2[2 * e3] = 255 & t2[e3], r2[2 * e3 + 1] = t2[e3] >> 8 & 255;
  return r2;
}
function T(e2) {
  const t2 = D(e2);
  let r2 = 0;
  for (let e3 = 0; e3 < 32; e3++) r2 |= t2[e3];
  return 0 === r2;
}
function F(e2, t2) {
  return T(j(e2, t2));
}
function C(e2, t2) {
  let r2 = e2;
  for (let e3 = 0; e3 < t2; e3++) r2 = A(r2);
  return r2;
}
function M(e2) {
  const t2 = A(e2), r2 = k(e2, C(t2, 2)), n2 = k(t2, r2), i2 = k(r2, A(n2)), o2 = k(C(i2, 5), i2), c2 = k(C(o2, 10), o2), u2 = k(C(c2, 20), c2), l2 = k(C(u2, 10), o2), a2 = k(C(l2, 50), l2), s2 = k(C(a2, 100), a2);
  return { z11: n2, z250: k(C(s2, 50), l2) };
}
function $(e2) {
  const { z11: t2, z250: r2 } = M(e2);
  return k(C(r2, 5), t2);
}
var B = k(P(b(121665)), $(b(121666)));
var N = (() => {
  const e2 = new Uint8Array(32);
  e2[0] = 251;
  for (let t3 = 1; t3 < 31; t3++) e2[t3] = 255;
  e2[31] = 31;
  let t2 = U, r2 = b(2);
  for (let n2 = 0; n2 < 32; n2++) for (let i2 = 0; i2 < 8; i2++) 1 == (e2[n2] >> i2 & 1) && (t2 = k(t2, r2)), r2 = A(r2);
  return t2;
})();
function L(e2, t2) {
  const r2 = k(j(e2.y, e2.x), j(t2.y, t2.x)), n2 = k(O(e2.y, e2.x), O(t2.y, t2.x)), i2 = k(k(O(B, B), e2.t), t2.t), o2 = k(O(e2.z, e2.z), t2.z), c2 = j(n2, r2), u2 = j(o2, i2), l2 = O(o2, i2), a2 = O(n2, r2);
  return { x: k(c2, u2), y: k(l2, a2), z: k(u2, l2), t: k(c2, a2) };
}
function S2(e2) {
  return L(e2, e2);
}
function _(e2, t2) {
  let r2 = { x: x.slice(), y: U.slice(), z: U.slice(), t: x.slice() }, n2 = false;
  for (let i2 = e2.length - 1; i2 >= 0; i2--) for (let o2 = 7; o2 >= 0; o2--) n2 && (r2 = S2(r2)), 1 == (e2[i2] >> o2 & 1) && (n2 ? r2 = L(r2, t2) : (r2 = { x: t2.x.slice(), y: t2.y.slice(), z: t2.z.slice(), t: t2.t.slice() }, n2 = true));
  return r2;
}
function V(e2) {
  if (32 !== e2.length) return null;
  const t2 = Uint8Array.from(e2), r2 = 1 == (t2[31] >> 7 & 1);
  t2[31] = 127 & t2[31];
  const n2 = (function(e3) {
    const t3 = m();
    for (let r3 = 0; r3 < g; r3++) t3[r3] = e3[2 * r3] | e3[2 * r3 + 1] << 8;
    return t3;
  })(t2);
  if (I(n2)) return null;
  const i2 = A(n2), o2 = j(i2, U), c2 = O(k(B, i2), U), u2 = k(A(c2), c2), l2 = k(A(u2), c2);
  let a2 = k(k(o2, u2), (function(e3) {
    const { z250: t3 } = M(e3);
    return k(C(t3, 2), e3);
  })(k(o2, l2)));
  return F(k(A(a2), c2), o2) || (a2 = k(a2, N), F(k(A(a2), c2), o2)) ? T(a2) && r2 ? null : (!(1 & ~D(a2)[0]) !== r2 && (a2 = P(a2)), { x: a2, y: n2, z: U.slice(), t: k(a2, n2) }) : null;
}
var W = (() => {
  const e2 = V(D(k(b(4), $(b(5)))));
  if (!e2) throw new Error("[@primeui/license-manager] Ed25519 base point failed to initialise");
  return e2;
})();
function G(e2) {
  const t2 = S2(S2(S2(e2)));
  return T(k(t2.x, t2.z)) && F(t2.y, t2.z);
}
var R2 = new Uint8Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
function q(e2) {
  for (let t2 = 31; t2 >= 0; t2--) {
    if (e2[t2] < R2[t2]) return true;
    if (e2[t2] > R2[t2]) return false;
  }
  return false;
}
var K = Object.freeze({ primeui: "PrimeUI", scheduler: "Scheduler", texteditor: "TextEditor", charts: "Charts", diagram: "Diagram", pdfviewer: "PDF Viewer", taskboard: "Task Board", datagrid: "DataGrid", ganttchart: "Gantt", filemanager: "File Manager" });
var H = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2);
function J(e2) {
  return H(K, e2) ? K[e2] : "PrimeUI";
}
function Q(e2) {
  return H(y, e2) ? y[e2] : void 0;
}
function X(e2, t2 = "PrimeUI") {
  switch (e2) {
    case "active":
      return `${t2} license is active.`;
    case "grace":
      return `${t2} license is in its grace period. Renew soon to keep using this version.`;
    case "expired":
      return `${t2} license does not cover this version. Renew at primeui.store, or downgrade to a version released within your updates window.`;
    case "tampered":
      return `${t2} license signature is invalid.`;
    case "wrong-product":
      return `License does not cover ${t2}.`;
    case "missing":
      return `No license key configured for ${t2}.`;
    case "invalid":
      return `${t2} license is malformed.`;
    case "unconfigured":
      return `${t2} license is not configured.`;
    default:
      return `${t2} license status unknown.`;
  }
}
var Y = [[1116352408, 3609767458], [1899447441, 602891725], [3049323471, 3964484399], [3921009573, 2173295548], [961987163, 4081628472], [1508970993, 3053834265], [2453635748, 2937671579], [2870763221, 3664609560], [3624381080, 2734883394], [310598401, 1164996542], [607225278, 1323610764], [1426881987, 3590304994], [1925078388, 4068182383], [2162078206, 991336113], [2614888103, 633803317], [3248222580, 3479774868], [3835390401, 2666613458], [4022224774, 944711139], [264347078, 2341262773], [604807628, 2007800933], [770255983, 1495990901], [1249150122, 1856431235], [1555081692, 3175218132], [1996064986, 2198950837], [2554220882, 3999719339], [2821834349, 766784016], [2952996808, 2566594879], [3210313671, 3203337956], [3336571891, 1034457026], [3584528711, 2466948901], [113926993, 3758326383], [338241895, 168717936], [666307205, 1188179964], [773529912, 1546045734], [1294757372, 1522805485], [1396182291, 2643833823], [1695183700, 2343527390], [1986661051, 1014477480], [2177026350, 1206759142], [2456956037, 344077627], [2730485921, 1290863460], [2820302411, 3158454273], [3259730800, 3505952657], [3345764771, 106217008], [3516065817, 3606008344], [3600352804, 1432725776], [4094571909, 1467031594], [275423344, 851169720], [430227734, 3100823752], [506948616, 1363258195], [659060556, 3750685593], [883997877, 3785050280], [958139571, 3318307427], [1322822218, 3812723403], [1537002063, 2003034995], [1747873779, 3602036899], [1955562222, 1575990012], [2024104815, 1125592928], [2227730452, 2716904306], [2361852424, 442776044], [2428436474, 593698344], [2756734187, 3733110249], [3204031479, 2999351573], [3329325298, 3815920427], [3391569614, 3928383900], [3515267271, 566280711], [3940187606, 3454069534], [4118630271, 4000239992], [116418474, 1914138554], [174292421, 2731055270], [289380356, 3203993006], [460393269, 320620315], [685471733, 587496836], [852142971, 1086792851], [1017036298, 365543100], [1126000580, 2618297676], [1288033470, 3409855158], [1501505948, 4234509866], [1607167915, 987167468], [1816402316, 1246189591]];
var Z = [[1779033703, 4089235720], [3144134277, 2227873595], [1013904242, 4271175723], [2773480762, 1595750129], [1359893119, 2917565137], [2600822924, 725511199], [528734635, 4215389547], [1541459225, 327033209]];
function ee(e2, t2, r2) {
  return 32 === r2 ? [0 | t2, 0 | e2] : r2 < 32 ? [e2 >>> r2 | t2 << 32 - r2, t2 >>> r2 | e2 << 32 - r2] : [t2 >>> r2 - 32 | e2 << 64 - r2, e2 >>> r2 - 32 | t2 << 64 - r2];
}
function te(e2, t2, r2) {
  return r2 < 32 ? [e2 >>> r2, t2 >>> r2 | e2 << 32 - r2] : [0, e2 >>> r2 - 32];
}
function re(e2, t2, r2, n2) {
  const i2 = (t2 >>> 0) + (n2 >>> 0);
  return [e2 + r2 + (i2 / 4294967296 | 0) | 0, 0 | i2];
}
function ne(e2) {
  const t2 = e2.length, r2 = Math.floor(t2 / 536870912), n2 = t2 << 3 >>> 0, i2 = 128 * Math.ceil((t2 + 17) / 128), o2 = new Uint8Array(i2);
  o2.set(e2), o2[t2] = 128;
  const c2 = new DataView(o2.buffer);
  c2.setUint32(i2 - 8, r2), c2.setUint32(i2 - 4, n2);
  const u2 = Z.map((e3) => [e3[0], e3[1]]), l2 = new Array(160);
  for (let e3 = 0; e3 < i2; e3 += 128) {
    for (let t4 = 0; t4 < 16; t4++) l2[2 * t4] = c2.getUint32(e3 + 8 * t4), l2[2 * t4 + 1] = c2.getUint32(e3 + 8 * t4 + 4);
    for (let e4 = 16; e4 < 80; e4++) {
      const t4 = l2[2 * (e4 - 15)], r4 = l2[2 * (e4 - 15) + 1], [n4, i4] = ee(t4, r4, 1), [o4, c3] = ee(t4, r4, 8), [u3, a4] = te(t4, r4, 7), s4 = n4 ^ o4 ^ u3, f3 = i4 ^ c3 ^ a4, d3 = l2[2 * (e4 - 2)], p2 = l2[2 * (e4 - 2) + 1], [h3, w3] = ee(d3, p2, 19), [y3, g3] = ee(d3, p2, 61), [v3, m3] = te(d3, p2, 6), b2 = h3 ^ y3 ^ v3, x2 = w3 ^ g3 ^ m3;
      let [U2, E2] = re(l2[2 * (e4 - 16)], l2[2 * (e4 - 16) + 1], s4, f3);
      [U2, E2] = re(U2, E2, l2[2 * (e4 - 7)], l2[2 * (e4 - 7) + 1]), [U2, E2] = re(U2, E2, b2, x2), l2[2 * e4] = U2, l2[2 * e4 + 1] = E2;
    }
    let [t3, r3] = u2[0], [n3, i3] = u2[1], [o3, a3] = u2[2], [s3, f2] = u2[3], [d2, p] = u2[4], [h2, w2] = u2[5], [y2, g2] = u2[6], [v2, m2] = u2[7];
    for (let e4 = 0; e4 < 80; e4++) {
      const [c3, u3] = ee(d2, p, 14), [b2, x2] = ee(d2, p, 18), [U2, E2] = ee(d2, p, 41), z2 = c3 ^ b2 ^ U2, k2 = u3 ^ x2 ^ E2, A2 = d2 & h2 ^ ~d2 & y2, O2 = p & w2 ^ ~p & g2;
      let [j2, P2] = re(v2, m2, z2, k2);
      [j2, P2] = re(j2, P2, A2, O2), [j2, P2] = re(j2, P2, Y[e4][0], Y[e4][1]), [j2, P2] = re(j2, P2, l2[2 * e4], l2[2 * e4 + 1]);
      const [I2, D2] = ee(t3, r3, 28), [T2, F2] = ee(t3, r3, 34), [C2, M2] = ee(t3, r3, 39), $2 = I2 ^ T2 ^ C2, B2 = D2 ^ F2 ^ M2, N2 = t3 & n3 ^ t3 & o3 ^ n3 & o3, L2 = r3 & i3 ^ r3 & a3 ^ i3 & a3, [S3, _2] = re($2, B2, N2, L2);
      v2 = y2, m2 = g2, y2 = h2, g2 = w2, h2 = d2, w2 = p, [d2, p] = re(s3, f2, j2, P2), s3 = o3, f2 = a3, o3 = n3, a3 = i3, n3 = t3, i3 = r3, [t3, r3] = re(j2, P2, S3, _2);
    }
    u2[0] = re(u2[0][0], u2[0][1], t3, r3), u2[1] = re(u2[1][0], u2[1][1], n3, i3), u2[2] = re(u2[2][0], u2[2][1], o3, a3), u2[3] = re(u2[3][0], u2[3][1], s3, f2), u2[4] = re(u2[4][0], u2[4][1], d2, p), u2[5] = re(u2[5][0], u2[5][1], h2, w2), u2[6] = re(u2[6][0], u2[6][1], y2, g2), u2[7] = re(u2[7][0], u2[7][1], v2, m2);
  }
  const a2 = new Uint8Array(64), s2 = new DataView(a2.buffer);
  for (let e3 = 0; e3 < 8; e3++) s2.setUint32(8 * e3, u2[e3][0] >>> 0), s2.setUint32(8 * e3 + 4, u2[e3][1] >>> 0);
  return a2;
}
var ie = 864e5;
var oe = Date.UTC(2025, 0, 1);
var ce = (() => Object.assign(/* @__PURE__ */ Object.create(null), { community: true, commercial: true }))();
var ue = /* @__PURE__ */ Object.create(null);
var le = [];
function ae(e2) {
  let t2 = "";
  for (let r2 = 0; r2 < e2.length; r2++) t2 += (256 | e2[r2]).toString(16).slice(1);
  return t2;
}
function se(e2, t2, r2 = {}) {
  return o({ valid: "active" === e2 || "grace" === e2, status: e2, message: X(e2, t2) }, r2);
}
function fe(e2) {
  return "community" === e2.tier;
}
function de(e2, t2) {
  return c(this, null, function* () {
    const r2 = t2.productLabel;
    if ("string" != typeof e2 || e2.length > 2048 || !e2.includes(".")) return se("invalid", r2);
    const n2 = e2.split(".");
    if (2 !== n2.length) return se("invalid", r2);
    const [i2, o2] = n2;
    let f2;
    try {
      f2 = (function(e3) {
        let t3 = 0;
        const r3 = () => {
          for (; t3 < e3.length && l(e3[t3]); ) t3++;
        }, n3 = (r4) => {
          if (e3.substr(t3, r4.length) !== r4) throw new u("Unexpected token");
          t3 += r4.length;
        }, i3 = () => {
          let r4 = "";
          for (; ; ) {
            if (t3 >= e3.length) throw new u("Unterminated string");
            const n4 = e3[t3++];
            if ('"' === n4) return r4;
            if (n4 < " ") throw new u("Control character in string");
            if ("\\" !== n4) {
              r4 += n4;
              continue;
            }
            const i4 = e3[t3++];
            switch (i4) {
              case '"':
              case "\\":
              case "/":
                r4 += i4;
                break;
              case "b":
                r4 += "\b";
                break;
              case "f":
                r4 += "\f";
                break;
              case "n":
                r4 += "\n";
                break;
              case "r":
                r4 += "\r";
                break;
              case "t":
                r4 += "	";
                break;
              case "u": {
                const n5 = s(e3[t3]) << 12 | s(e3[t3 + 1]) << 8 | s(e3[t3 + 2]) << 4 | s(e3[t3 + 3]);
                t3 += 4, r4 += String.fromCharCode(n5);
                break;
              }
              default:
                throw new u("Bad escape");
            }
          }
        }, o3 = (c3) => {
          if (c3 > 16) throw new u("Too deep");
          r3();
          const l2 = e3[t3];
          if (void 0 === l2) throw new u("Unexpected end");
          if ("{" === l2) {
            t3++;
            const n4 = {};
            if (r3(), "}" === e3[t3]) return t3++, n4;
            for (; ; ) {
              if (r3(), '"' !== e3[t3]) throw new u("Expected key");
              t3++;
              const l3 = i3();
              if ("__proto__" === l3 || Object.prototype.hasOwnProperty.call(n4, l3)) throw new u("Bad key");
              if (r3(), ":" !== e3[t3]) throw new u("Expected colon");
              if (t3++, n4[l3] = o3(c3 + 1), r3(), "," !== e3[t3]) {
                if ("}" === e3[t3]) return t3++, n4;
                throw new u("Expected , or }");
              }
              t3++;
            }
          }
          if ("[" === l2) {
            t3++;
            const n4 = [];
            if (r3(), "]" === e3[t3]) return t3++, n4;
            for (; ; ) {
              if (n4.push(o3(c3 + 1)), r3(), "," !== e3[t3]) {
                if ("]" === e3[t3]) return t3++, n4;
                throw new u("Expected , or ]");
              }
              t3++;
            }
          }
          if ('"' === l2) return t3++, i3();
          if ("t" === l2) return n3("true"), true;
          if ("f" === l2) return n3("false"), false;
          if ("n" === l2) return n3("null"), null;
          if ("-" === l2 || a(l2)) return (() => {
            const r4 = t3;
            if ("-" === e3[t3] && t3++, "0" === e3[t3]) t3++;
            else {
              if (!a(e3[t3])) throw new u("Bad number");
              for (; a(e3[t3]); ) t3++;
            }
            if ("." === e3[t3]) {
              if (t3++, !a(e3[t3])) throw new u("Bad number");
              for (; a(e3[t3]); ) t3++;
            }
            if ("e" === e3[t3] || "E" === e3[t3]) {
              if (t3++, "+" !== e3[t3] && "-" !== e3[t3] || t3++, !a(e3[t3])) throw new u("Bad number");
              for (; a(e3[t3]); ) t3++;
            }
            return Number(e3.slice(r4, t3));
          })();
          throw new u("Unexpected token");
        }, c2 = o3(0);
        if (r3(), t3 !== e3.length) throw new u("Trailing characters");
        return c2;
      })((function(e3) {
        const t3 = [];
        let r3 = 0;
        for (; r3 < e3.length; ) {
          const n4 = e3[r3++];
          if (n4 < 128) {
            t3.push(n4);
            continue;
          }
          let i3, o3, c2;
          if (n4 >= 194 && n4 <= 223) i3 = 31 & n4, o3 = 1, c2 = 128;
          else if (n4 >= 224 && n4 <= 239) i3 = 15 & n4, o3 = 2, c2 = 2048;
          else {
            if (!(n4 >= 240 && n4 <= 244)) throw new u("Invalid UTF-8");
            i3 = 7 & n4, o3 = 3, c2 = 65536;
          }
          if (r3 + o3 > e3.length) throw new u("Invalid UTF-8");
          for (let t4 = 0; t4 < o3; t4++) {
            const t5 = e3[r3++];
            if (128 != (192 & t5)) throw new u("Invalid UTF-8");
            i3 = i3 << 6 | 63 & t5;
          }
          if (i3 < c2 || i3 > 1114111 || i3 >= 55296 && i3 <= 57343) throw new u("Invalid UTF-8");
          i3 >= 65536 ? (i3 -= 65536, t3.push(55296 | i3 >> 10, 56320 | 1023 & i3)) : t3.push(i3);
        }
        let n3 = "";
        for (let e4 = 0; e4 < t3.length; e4 += 4096) n3 += String.fromCharCode.apply(null, t3.slice(e4, e4 + 4096));
        return n3;
      })(d(i2)));
    } catch (e3) {
      return se("invalid", r2);
    }
    if (!f2 || "object" != typeof f2 || Array.isArray(f2)) return se("invalid", r2);
    const p = f2, y2 = (e3) => Object.prototype.hasOwnProperty.call(p, e3) ? p[e3] : void 0, g2 = { id: y2("id"), product: y2("product"), tier: y2("tier"), type: y2("type"), iat: y2("iat"), exp: y2("exp") };
    if ("string" != typeof g2.product || "string" != typeof g2.type || !Number.isFinite(g2.exp) || !Number.isFinite(g2.iat) || "string" != typeof g2.id) return se("invalid", r2);
    if (void 0 !== g2.tier && ("string" != typeof g2.tier || true !== ce[g2.tier])) return se("invalid", r2);
    if (g2.product === h && void 0 === g2.tier) return se("invalid", r2);
    let v2, m2, b2;
    try {
      v2 = d(o2), m2 = new TextEncoder().encode(i2);
    } catch (e3) {
      return se("invalid", r2);
    }
    try {
      b2 = (function(e3) {
        if (!/^[0-9a-fA-F]*$/.test(e3)) throw new Error("Invalid hex character");
        const t3 = new Uint8Array(32);
        for (let r3 = 0; r3 < t3.length; r3++) t3[r3] = parseInt(e3.slice(2 * r3, 2 * r3 + 2), 16);
        return t3;
      })("dae75e66b9f59bebf87d4bb29ca6494f37deccfcc2b132b98ee159ee7505373b");
    } catch (e3) {
      return se("invalid", r2);
    }
    let x2 = false;
    try {
      x2 = yield (function(e3, t3, r3) {
        return c(this, null, function* () {
          const n3 = (function(e4, t4, r4) {
            const n4 = ae(r4) + ":" + ae(e4) + ":" + ae(t4), i4 = ue[n4];
            if (true === i4 || false === i4) return i4;
            const o3 = (function(e5, t5, r5, n5) {
              if (64 !== e5.length || 32 !== r5.length) return false;
              const i5 = e5.slice(32, 64);
              if (!q(i5)) return false;
              const o4 = V(r5);
              if (!o4) return false;
              if (G(o4)) return false;
              const c2 = e5.slice(0, 32), u2 = V(c2);
              if (!u2) return false;
              if (G(u2)) return false;
              const l2 = new Uint8Array(64 + t5.length);
              l2.set(c2, 0), l2.set(r5, 32), l2.set(t5, 64);
              const a2 = (function(e6) {
                const t6 = new Uint8Array(32);
                for (let r6 = e6.length - 1; r6 >= 0; r6--) {
                  let n6 = e6[r6];
                  for (let e7 = 0; e7 < 32; e7++) {
                    const r7 = 256 * t6[e7] + n6;
                    t6[e7] = 255 & r7, n6 = r7 >> 8;
                  }
                  for (; n6 > 0 || !q(t6); ) {
                    let e7 = 0;
                    for (let r7 = 0; r7 < 32; r7++) {
                      const n7 = t6[r7] - R2[r7] - e7;
                      e7 = n7 < 0 ? 1 : 0, t6[r7] = n7 + 256 * e7;
                    }
                    n6 -= e7, n6 < 0 && (n6 = 0);
                  }
                }
                return t6;
              })(n5(l2)), s2 = _(i5, W);
              return d2 = L(u2, _(a2, o4)), F(k((f3 = s2).x, d2.z), k(d2.x, f3.z)) && F(k(f3.y, d2.z), k(d2.y, f3.z));
              var f3, d2;
            })(e4, t4, r4, ne);
            return le.length >= 32 && delete ue[le.shift()], le.push(n4), ue[n4] = true === o3, true === o3;
          })(e3, t3, r3);
          if (!n3) return false;
          const i3 = yield (function(e4, t4, r4) {
            return c(this, null, function* () {
              var n4;
              const i4 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0, o3 = null == (n4 = null == i4 ? void 0 : i4.crypto) ? void 0 : n4.subtle;
              if (o3) try {
                const n5 = yield o3.importKey("raw", r4, { name: "Ed25519" }, false, ["verify"]);
                return yield o3.verify({ name: "Ed25519" }, n5, e4, t4);
              } catch (e5) {
                return;
              }
            });
          })(e3, t3, r3);
          return void 0 === i3 || true === i3;
        });
      })(v2, m2, b2);
    } catch (e3) {
      return se("tampered", r2, { payload: g2 });
    }
    if (!x2) return se("tampered", r2, { payload: g2 });
    if (!(function(e3, t3) {
      return e3.product === t3 || !(!t3.startsWith(w) || e3.product !== h || "commercial" !== e3.tier);
    })(g2, t2.product)) return se("wrong-product", r2, { payload: g2 });
    const U2 = 1e3 * g2.exp, E2 = Date.now(), z2 = Math.floor((U2 - E2) / ie), A2 = (function(e3) {
      const t3 = (function(e4) {
        if ("number" == typeof e4) return Number.isFinite(e4) ? 1e3 * e4 : null;
        if ("string" != typeof e4 || "" === e4) return null;
        const t4 = Date.parse(e4);
        return Number.isNaN(t4) ? null : t4;
      })(e3);
      return null !== t3 && t3 >= oe ? t3 : null;
    })(t2.releaseDate);
    if (null === A2 && !fe(g2)) return se("invalid", r2, { daysUntilExpiry: z2, payload: g2 });
    if (null !== A2 && A2 > U2) return se("expired", r2, { daysUntilExpiry: z2, payload: g2 });
    if (fe(g2)) {
      if (E2 > U2 + 30 * ie) return se("expired", r2, { daysUntilExpiry: z2, payload: g2 });
      if (E2 > U2) return se("grace", r2, { daysUntilExpiry: z2, payload: g2 });
    }
    return se("active", r2, { daysUntilExpiry: z2, payload: g2 });
  });
}
function pe(e2, t2) {
  const r2 = Object.prototype.hasOwnProperty.call(e2, t2) ? e2[t2] : void 0;
  return "string" == typeof r2 ? r2 : void 0;
}
function he(e2, t2) {
  return { valid: false, status: e2, message: X(e2, t2) };
}
function we(e2, t2) {
  const r2 = {};
  return { verify(t3, n2) {
    return c(this, null, function* () {
      const i2 = Q(t3), c2 = J(t3), u2 = null == n2 ? void 0 : n2.releaseDate;
      if (!i2) return he("invalid", c2);
      const l2 = pe(e2, t3), a2 = pe(e2, "primeui");
      if (l2) {
        const e3 = yield de(l2, o({ product: i2, productLabel: c2, releaseDate: u2 }, r2));
        if (e3.valid) return e3;
        if ("wrong-product" !== e3.status) return e3;
      }
      return a2 && "primeui" !== t3 && i2.startsWith(w) ? de(a2, o({ product: i2, productLabel: c2, releaseDate: u2 }, r2)) : he(l2 ? "wrong-product" : "missing", c2);
    });
  }, has(t3) {
    const r3 = Q(t3);
    return !!r3 && (!!pe(e2, t3) || "primeui" !== t3 && r3.startsWith(w) && !!pe(e2, "primeui"));
  } };
}
var ye = null;
function ge(e2, t2) {
  if (!e2) throw new Error("[@primeui/license-manager] registerLicense: keys argument is required.");
  return ye = we(e2);
}
function me(e2, t2) {
  if (!ye) {
    const t3 = J(e2);
    return Promise.resolve({ valid: false, status: "unconfigured", message: X("unconfigured", t3) });
  }
  return ye.verify(e2, t2);
}

// node_modules/primeng/fesm2022/primeng-config.mjs
import { showInvalidLicenseBanner } from "primeng/license";
var ThemeProvider = class ThemeProvider2 {
  theme = signal(void 0, ...ngDevMode ? [{ debugName: "theme" }] : (
    /* istanbul ignore next */
    []
  ));
  csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : (
    /* istanbul ignore next */
    []
  ));
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  constructor() {
    effect(() => {
      R.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) this.onThemeChange(themeValue);
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    S.clearLoadedStyleNames();
    R.clear();
  }
  onThemeChange(value) {
    S.setTheme(value);
    if (this.document) this.loadCommonTheme();
  }
  loadCommonTheme() {
    if (this.theme() === "none") return;
    if (!S.isStyleNameLoaded("common")) {
      const { primitive, semantic, global, style } = this.baseStyle.getCommonTheme?.() || {};
      const styleOptions = { nonce: this.csp?.()?.nonce };
      this.baseStyle.load(primitive?.css, __spreadValues({
        name: "primitive-variables",
        variables: true
      }, styleOptions));
      this.baseStyle.load(semantic?.css, __spreadValues({
        name: "semantic-variables",
        variables: true
      }, styleOptions));
      this.baseStyle.load(global?.css, __spreadValues({
        name: "global-variables",
        variables: true
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style);
      S.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const { theme, csp } = config || {};
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeProvider2)();
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: ThemeProvider2,
    factory: ThemeProvider2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
var PrimeNG = class PrimeNG2 extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{ debugName: "ripple" }] : (
    /* istanbul ignore next */
    []
  ));
  platformId = inject(PLATFORM_ID);
  inputVariant = signal(null, ...ngDevMode ? [{ debugName: "inputVariant" }] : (
    /* istanbul ignore next */
    []
  ));
  _verified = signal(null, ...ngDevMode ? [{ debugName: "_verified" }] : (
    /* istanbul ignore next */
    []
  ));
  verified = this._verified.asReadonly();
  overlayAppendTo = signal("self", ...ngDevMode ? [{ debugName: "overlayAppendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayOptions = {};
  csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = signal(void 0, ...ngDevMode ? [{ debugName: "unstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  pt = signal(void 0, ...ngDevMode ? [{ debugName: "pt" }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = signal(void 0, ...ngDevMode ? [{ debugName: "ptOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  filterMatchModeOptions = {
    text: [
      FilterMatchMode.STARTS_WITH,
      FilterMatchMode.CONTAINS,
      FilterMatchMode.NOT_CONTAINS,
      FilterMatchMode.ENDS_WITH,
      FilterMatchMode.EQUALS,
      FilterMatchMode.NOT_EQUALS
    ],
    numeric: [
      FilterMatchMode.EQUALS,
      FilterMatchMode.NOT_EQUALS,
      FilterMatchMode.LESS_THAN,
      FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
      FilterMatchMode.GREATER_THAN,
      FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
    ],
    date: [
      FilterMatchMode.DATE_IS,
      FilterMatchMode.DATE_IS_NOT,
      FilterMatchMode.DATE_BEFORE,
      FilterMatchMode.DATE_AFTER
    ]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: [
      "B",
      "KB",
      "MB",
      "GB",
      "TB",
      "PB",
      "EB",
      "ZB",
      "YB"
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    dayNamesShort: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    dayNamesMin: [
      "Su",
      "Mo",
      "Tu",
      "We",
      "Th",
      "Fr",
      "Sa"
    ],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      expand: "Expand",
      collapse: "Collapse",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  _setVerified(value) {
    this._verified.set(value);
  }
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const { csp, ripple, inputVariant, theme, overlayOptions, translation, filterMatchModeOptions, overlayAppendTo, zIndex, ptOptions, pt, unstyled } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt) this.pt.set(pt);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory = void 0;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = i0.\u0275\u0275getInheritedFactory(PrimeNG2)))(__ngFactoryType__ || PrimeNG2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: PrimeNG2,
    factory: PrimeNG2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
var RELEASE_DATE = "2026-09-29";
function providePrimeNG(...features) {
  const providers = features?.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
    const license = features?.map((f2) => f2.license).find(Boolean);
    if (license) ge({ primeui: license });
    me("primeui", { releaseDate: RELEASE_DATE }).then((result) => {
      PrimeNGConfig._setVerified(result.valid);
      if (!result.valid) {
        console.warn(`[PrimeUI] ${result.message}`);
        showInvalidLicenseBanner();
      }
    });
  });
  return makeEnvironmentProviders([...providers, initializer]);
}
export {
  PRIME_NG_CONFIG,
  PrimeNG,
  ThemeProvider,
  providePrimeNG
};
//# sourceMappingURL=primeng_config.HotVuE3nxI-dev.js.map
