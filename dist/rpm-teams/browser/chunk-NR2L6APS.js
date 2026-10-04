if (typeof globalThis.ngServerMode === 'undefined') globalThis.ngServerMode = typeof window === 'undefined';

// node_modules/primeng/node_modules/@primeuix/utils/dist/uuid/index.mjs
var t = {};
function s(n = "pui_id_") {
  return Object.hasOwn(t, n) || (t[n] = 0), t[n]++, `${n}${t[n]}`;
}

export {
  s
};
//# sourceMappingURL=chunk-NR2L6APS.js.map
