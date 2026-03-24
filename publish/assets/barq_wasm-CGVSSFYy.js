function M(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.argmax(e, r) >>> 0;
}
function R(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.argmin(e, r) >>> 0;
}
function F(n, e, r, c) {
  const o = l(n, t.__wbindgen_malloc), i = s, _ = t.avg_pooling_2d(o, i, e, r, c);
  var a = u(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 4, 4), a;
}
function O(n, e, r, c) {
  const o = l(n, t.__wbindgen_malloc), i = s, _ = t.batch_normalize(o, i, e, r, c);
  var a = u(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 4, 4), a;
}
function j(n, e, r, c, o) {
  const i = l(n, t.__wbindgen_malloc), _ = s, a = l(e, t.__wbindgen_malloc), d = s, m = t.conv2d_optimized(i, _, a, d, r, c, o);
  var w = u(m[0], m[1]).slice();
  return t.__wbindgen_free(m[0], m[1] * 4, 4), w;
}
function I(n, e, r, c, o) {
  const i = l(n, t.__wbindgen_malloc), _ = s, a = l(e, t.__wbindgen_malloc), d = s, m = t.conv2d_scalar(i, _, a, d, r, c, o);
  var w = u(m[0], m[1]).slice();
  return t.__wbindgen_free(m[0], m[1] * 4, 4), w;
}
function L(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s;
  return t.cosine_similarity_scalar(r, c, o, i);
}
function U(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s;
  return t.cosine_similarity_simd(r, c, o, i);
}
function S(n, e) {
  const r = p(n, t.__wbindgen_malloc), c = s, o = t.dequantize_int8(r, c, e);
  var i = u(o[0], o[1]).slice();
  return t.__wbindgen_free(o[0], o[1] * 4, 4), i;
}
function k(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s;
  return t.dot_product_scalar(r, c, o, i);
}
function T(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s;
  return t.dot_product_simd(r, c, o, i);
}
function E(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s;
  return t.euclidean_distance(r, c, o, i);
}
function C(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = t.leaky_relu(r, c, e);
  var i = u(o[0], o[1]).slice();
  return t.__wbindgen_free(o[0], o[1] * 4, 4), i;
}
function P(n) {
  const e = p(n, t.__wbindgen_malloc), r = s, c = t.lz4_compress_optimized(e, r);
  var o = A(c[0], c[1]).slice();
  return t.__wbindgen_free(c[0], c[1] * 1, 1), o;
}
function B(n) {
  const e = p(n, t.__wbindgen_malloc), r = s, c = t.lz4_compress_scalar(e, r);
  var o = A(c[0], c[1]).slice();
  return t.__wbindgen_free(c[0], c[1] * 1, 1), o;
}
function N(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s;
  return t.manhattan_distance(r, c, o, i);
}
function V(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s, _ = t.matrix_add(r, c, o, i);
  var a = u(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 4, 4), a;
}
function D(n, e, r) {
  const c = l(n, t.__wbindgen_malloc), o = s, i = l(e, t.__wbindgen_malloc), _ = s, a = t.matrix_multiply_scalar(c, o, i, _, r);
  var d = u(a[0], a[1]).slice();
  return t.__wbindgen_free(a[0], a[1] * 4, 4), d;
}
function G(n, e, r) {
  const c = l(n, t.__wbindgen_malloc), o = s, i = l(e, t.__wbindgen_malloc), _ = s, a = t.matrix_multiply_tiled(c, o, i, _, r);
  var d = u(a[0], a[1]).slice();
  return t.__wbindgen_free(a[0], a[1] * 4, 4), d;
}
function H(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = t.matrix_scalar_multiply(r, c, e);
  var i = u(o[0], o[1]).slice();
  return t.__wbindgen_free(o[0], o[1] * 4, 4), i;
}
function J(n, e, r) {
  const c = l(n, t.__wbindgen_malloc), o = s, i = t.matrix_transpose(c, o, e, r);
  var _ = u(i[0], i[1]).slice();
  return t.__wbindgen_free(i[0], i[1] * 4, 4), _;
}
function K(n, e, r, c) {
  const o = l(n, t.__wbindgen_malloc), i = s, _ = t.max_pooling_2d(o, i, e, r, c);
  var a = u(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 4, 4), a;
}
function Q(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.mean(e, r);
}
function X(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = t.quantize_int8_scalar(r, c, e);
  var i = y(o[0], o[1]).slice();
  return t.__wbindgen_free(o[0], o[1] * 1, 1), i;
}
function Y(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = t.quantize_int8_simd(r, c, e);
  var i = y(o[0], o[1]).slice();
  return t.__wbindgen_free(o[0], o[1] * 1, 1), i;
}
function Z(n) {
  const e = l(n, t.__wbindgen_malloc), r = s, c = t.relu(e, r);
  var o = u(c[0], c[1]).slice();
  return t.__wbindgen_free(c[0], c[1] * 4, 4), o;
}
function $(n) {
  const e = l(n, t.__wbindgen_malloc), r = s, c = t.sigmoid(e, r);
  var o = u(c[0], c[1]).slice();
  return t.__wbindgen_free(c[0], c[1] * 4, 4), o;
}
function nn(n) {
  const e = l(n, t.__wbindgen_malloc), r = s, c = t.softmax(e, r);
  var o = u(c[0], c[1]).slice();
  return t.__wbindgen_free(c[0], c[1] * 4, 4), o;
}
function tn(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.std_dev(e, r);
}
function en(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.variance(e, r);
}
function rn(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s, _ = t.vector_add(r, c, o, i);
  var a = u(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 4, 4), a;
}
function cn(n, e, r) {
  const c = l(n, t.__wbindgen_malloc), o = s, i = t.vector_clamp(c, o, e, r);
  var _ = u(i[0], i[1]).slice();
  return t.__wbindgen_free(i[0], i[1] * 4, 4), _;
}
function on(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s, _ = t.vector_elementwise_multiply(r, c, o, i);
  var a = u(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 4, 4), a;
}
function sn(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.vector_max(e, r);
}
function _n(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.vector_min(e, r);
}
function ln(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.vector_norm_scalar(e, r);
}
function an(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.vector_norm_simd(e, r);
}
function un(n) {
  const e = l(n, t.__wbindgen_malloc), r = s, c = t.vector_normalize(e, r);
  var o = u(c[0], c[1]).slice();
  return t.__wbindgen_free(c[0], c[1] * 4, 4), o;
}
function mn(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = t.vector_scale(r, c, e);
  var i = u(o[0], o[1]).slice();
  return t.__wbindgen_free(o[0], o[1] * 4, 4), i;
}
function dn(n, e) {
  const r = l(n, t.__wbindgen_malloc), c = s, o = l(e, t.__wbindgen_malloc), i = s, _ = t.vector_subtract(r, c, o, i);
  var a = u(_[0], _[1]).slice();
  return t.__wbindgen_free(_[0], _[1] * 4, 4), a;
}
function fn(n) {
  const e = l(n, t.__wbindgen_malloc), r = s;
  return t.vector_sum(e, r);
}
function v() {
  return { __proto__: null, "./barq_wasm_bg.js": { __proto__: null, __wbindgen_init_externref_table: function() {
    const e = t.__wbindgen_externrefs, r = e.grow(4);
    e.set(0, void 0), e.set(r + 0, void 0), e.set(r + 1, null), e.set(r + 2, true), e.set(r + 3, false);
  } } };
}
function u(n, e) {
  return n = n >>> 0, x().subarray(n / 4, n / 4 + e);
}
function y(n, e) {
  return n = n >>> 0, h().subarray(n / 1, n / 1 + e);
}
function A(n, e) {
  return n = n >>> 0, z().subarray(n / 1, n / 1 + e);
}
let f = null;
function x() {
  return (f === null || f.byteLength === 0) && (f = new Float32Array(t.memory.buffer)), f;
}
let b = null;
function h() {
  return (b === null || b.byteLength === 0) && (b = new Int8Array(t.memory.buffer)), b;
}
let g = null;
function z() {
  return (g === null || g.byteLength === 0) && (g = new Uint8Array(t.memory.buffer)), g;
}
function p(n, e) {
  const r = e(n.length * 1, 1) >>> 0;
  return z().set(n, r / 1), s = n.length, r;
}
function l(n, e) {
  const r = e(n.length * 4, 4) >>> 0;
  return x().set(n, r / 4), s = n.length, r;
}
let s = 0, t;
function W(n, e) {
  return t = n.exports, f = null, b = null, g = null, t.__wbindgen_start(), t;
}
async function q(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e);
    } catch (o) {
      if (n.ok && r(n.type) && n.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
      else throw o;
    }
    const c = await n.arrayBuffer();
    return await WebAssembly.instantiate(c, e);
  } else {
    const c = await WebAssembly.instantiate(n, e);
    return c instanceof WebAssembly.Instance ? { instance: c, module: n } : c;
  }
  function r(c) {
    switch (c) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function bn(n) {
  if (t !== void 0) return t;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module: n } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = v();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const r = new WebAssembly.Instance(n, e);
  return W(r);
}
async function gn(n) {
  if (t !== void 0) return t;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), n === void 0 && (n = new URL("/barq-wasm-pkg/barq_wasm_bg.wasm", import.meta.url));
  const e = v();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: r, module: c } = await q(await n, e);
  return W(r);
}
export {
  M as argmax,
  R as argmin,
  F as avg_pooling_2d,
  O as batch_normalize,
  j as conv2d_optimized,
  I as conv2d_scalar,
  L as cosine_similarity_scalar,
  U as cosine_similarity_simd,
  gn as default,
  S as dequantize_int8,
  k as dot_product_scalar,
  T as dot_product_simd,
  E as euclidean_distance,
  bn as initSync,
  C as leaky_relu,
  P as lz4_compress_optimized,
  B as lz4_compress_scalar,
  N as manhattan_distance,
  V as matrix_add,
  D as matrix_multiply_scalar,
  G as matrix_multiply_tiled,
  H as matrix_scalar_multiply,
  J as matrix_transpose,
  K as max_pooling_2d,
  Q as mean,
  X as quantize_int8_scalar,
  Y as quantize_int8_simd,
  Z as relu,
  $ as sigmoid,
  nn as softmax,
  tn as std_dev,
  en as variance,
  rn as vector_add,
  cn as vector_clamp,
  on as vector_elementwise_multiply,
  sn as vector_max,
  _n as vector_min,
  ln as vector_norm_scalar,
  an as vector_norm_simd,
  un as vector_normalize,
  mn as vector_scale,
  dn as vector_subtract,
  fn as vector_sum
};
