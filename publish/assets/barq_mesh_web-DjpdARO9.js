class U {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, P.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    d.__wbg_barqvweb_free(e, 0);
  }
  backend_info() {
    let e, t;
    try {
      const r = d.barqvweb_backend_info(this.__wbg_ptr);
      return e = r[0], t = r[1], be(r[0], r[1]);
    } finally {
      d.__wbindgen_free(e, t, 1);
    }
  }
  clear() {
    return d.barqvweb_clear(this.__wbg_ptr);
  }
  count() {
    return d.barqvweb_count(this.__wbg_ptr) >>> 0;
  }
  delete(e) {
    return d.barqvweb_delete(this.__wbg_ptr, e);
  }
  insert_texts(e, t) {
    return d.barqvweb_insert_texts(this.__wbg_ptr, e, t);
  }
  insert_vectors(e, t, r) {
    return d.barqvweb_insert_vectors(this.__wbg_ptr, e, t, r);
  }
  load() {
    return d.barqvweb_load(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = D(e, d.__wbindgen_malloc, d.__wbindgen_realloc), o = R;
    var c = ue(t) ? 0 : D(t, d.__wbindgen_malloc, d.__wbindgen_realloc), s = R;
    const a = d.barqvweb_new(r, o, c, s);
    return this.__wbg_ptr = a >>> 0, P.register(this, this.__wbg_ptr, this), this;
  }
  save() {
    return d.barqvweb_save(this.__wbg_ptr);
  }
  search(e, t, r) {
    const o = D(e, d.__wbindgen_malloc, d.__wbindgen_realloc), c = R;
    return d.barqvweb_search(this.__wbg_ptr, o, c, t, r);
  }
  search_vector(e, t) {
    return d.barqvweb_search_vector(this.__wbg_ptr, e, t);
  }
}
Symbol.dispose && (U.prototype[Symbol.dispose] = U.prototype.free);
const P = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => d.__wbg_barqvweb_free(n >>> 0, 1));
typeof FinalizationRegistry > "u" || new FinalizationRegistry((n) => n.dtor(n.a, n.b));
function be(n, e) {
  return n = n >>> 0, fe(n, e);
}
let T = null;
function O() {
  return (T === null || T.byteLength === 0) && (T = new Uint8Array(d.memory.buffer)), T;
}
function ue(n) {
  return n == null;
}
function D(n, e, t) {
  if (t === void 0) {
    const a = M.encode(n), b = e(a.length, 1) >>> 0;
    return O().subarray(b, b + a.length).set(a), R = a.length, b;
  }
  let r = n.length, o = e(r, 1) >>> 0;
  const c = O();
  let s = 0;
  for (; s < r; s++) {
    const a = n.charCodeAt(s);
    if (a > 127) break;
    c[o + s] = a;
  }
  if (s !== r) {
    s !== 0 && (n = n.slice(s)), o = t(o, r, r = s + n.length * 3, 1) >>> 0;
    const a = O().subarray(o + s, o + r), b = M.encodeInto(n, a);
    s += b.written, o = t(o, r, s, 1) >>> 0;
  }
  return R = s, o;
}
let I = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
I.decode();
const de = 2146435072;
let $ = 0;
function fe(n, e) {
  return $ += e, $ >= de && (I = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), I.decode(), $ = e), I.decode(O().subarray(n, n + e));
}
const M = new TextEncoder();
"encodeInto" in M || (M.encodeInto = function(n, e) {
  const t = M.encode(n);
  return e.set(t), { read: n.length, written: t.length };
});
let R = 0, d;
class h {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(h.prototype);
    return t.__wbg_ptr = e, K.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, K.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    _.__wbg_aimesh_free(e, 0);
  }
  backend() {
    let e, t;
    try {
      const r = _.aimesh_backend(this.__wbg_ptr);
      return e = r[0], t = r[1], g(r[0], r[1]);
    } finally {
      _.__wbindgen_free(e, t, 1);
    }
  }
  clear() {
    return _.aimesh_clear(this.__wbg_ptr);
  }
  static create(e, t, r) {
    const o = f(t, _.__wbindgen_malloc, _.__wbindgen_realloc), c = i, s = _.aimesh_create(e, o, c, r);
    if (s[2]) throw q(s[1]);
    return h.__wrap(s[0]);
  }
  dispatch_task(e) {
    const t = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), r = i;
    return _.aimesh_dispatch_task(this.__wbg_ptr, t, r);
  }
  ingest_texts(e) {
    const t = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), r = i;
    return _.aimesh_ingest_texts(this.__wbg_ptr, t, r);
  }
  persist() {
    return _.aimesh_persist(this.__wbg_ptr);
  }
  pool_stats() {
    let e, t;
    try {
      const r = _.aimesh_pool_stats(this.__wbg_ptr);
      return e = r[0], t = r[1], g(r[0], r[1]);
    } finally {
      _.__wbindgen_free(e, t, 1);
    }
  }
  restore() {
    return _.aimesh_restore(this.__wbg_ptr);
  }
  retrieve(e, t) {
    const r = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i;
    return _.aimesh_retrieve(this.__wbg_ptr, r, o, t);
  }
  retrieve_hybrid(e, t) {
    const r = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i;
    return _.aimesh_retrieve_hybrid(this.__wbg_ptr, r, o, t);
  }
  run_pipeline(e) {
    const t = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), r = i;
    return _.aimesh_run_pipeline(this.__wbg_ptr, t, r);
  }
  shutdown() {
    return _.aimesh_shutdown(this.__wbg_ptr);
  }
  vector_count() {
    return _.aimesh_vector_count(this.__wbg_ptr) >>> 0;
  }
}
Symbol.dispose && (h.prototype[Symbol.dispose] = h.prototype.free);
class B {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    _.__wbg_barqmeshweb_free(e, 0);
  }
  backend_info() {
    let e, t;
    try {
      const r = _.barqmeshweb_backend_info(this.__wbg_ptr);
      return e = r[0], t = r[1], g(r[0], r[1]);
    } finally {
      _.__wbindgen_free(e, t, 1);
    }
  }
  clear() {
    return _.barqmeshweb_clear(this.__wbg_ptr);
  }
  collection_name() {
    let e, t;
    try {
      const r = _.barqmeshweb_collection_name(this.__wbg_ptr);
      return e = r[0], t = r[1], g(r[0], r[1]);
    } finally {
      _.__wbindgen_free(e, t, 1);
    }
  }
  count() {
    return _.barqmeshweb_count(this.__wbg_ptr) >>> 0;
  }
  dim() {
    return _.barqmeshweb_dim(this.__wbg_ptr) >>> 0;
  }
  embedding_stats(e) {
    let t, r;
    try {
      const o = l(e, _.__wbindgen_malloc), c = i, s = _.barqmeshweb_embedding_stats(this.__wbg_ptr, o, c);
      return t = s[0], r = s[1], g(s[0], s[1]);
    } finally {
      _.__wbindgen_free(t, r, 1);
    }
  }
  ingest_texts(e) {
    const t = qe(e, _.__wbindgen_malloc), r = i;
    return _.barqmeshweb_ingest_texts(this.__wbg_ptr, t, r);
  }
  load() {
    return _.barqmeshweb_load(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i, c = _.barqmeshweb_new(r, o, t);
    return this.__wbg_ptr = c >>> 0, Q.register(this, this.__wbg_ptr, this), this;
  }
  retrieve_hybrid(e, t) {
    const r = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i;
    return _.barqmeshweb_retrieve_hybrid(this.__wbg_ptr, r, o, t);
  }
  save() {
    return _.barqmeshweb_save(this.__wbg_ptr);
  }
  search_vector(e, t) {
    const r = l(e, _.__wbindgen_malloc), o = i;
    return _.barqmeshweb_search_vector(this.__wbg_ptr, r, o, t);
  }
  upsert_vector(e, t) {
    const r = l(e, _.__wbindgen_malloc), o = i;
    return _.barqmeshweb_upsert_vector(this.__wbg_ptr, r, o, t);
  }
  upsert_vectors(e, t) {
    const r = l(e, _.__wbindgen_malloc), o = i, c = ke(t, _.__wbindgen_malloc), s = i;
    return _.barqmeshweb_upsert_vectors(this.__wbg_ptr, r, o, c, s);
  }
}
Symbol.dispose && (B.prototype[Symbol.dispose] = B.prototype.free);
const Fe = Object.freeze({ WebLlm: 0, 0: "WebLlm", OpenRouter: 1, 1: "OpenRouter" });
class G {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    _.__wbg_llmrouter_free(e, 0);
  }
  constructor(e) {
    const t = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), r = i, o = _.llmrouter_new(t, r);
    return this.__wbg_ptr = o >>> 0, Z.register(this, this.__wbg_ptr, this), this;
  }
  prepare_rag_prompt(e, t) {
    N(e, h);
    const r = f(t, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i;
    return _.llmrouter_prepare_rag_prompt(this.__wbg_ptr, e.__wbg_ptr, r, o);
  }
  verify_output_semantically(e, t) {
    const r = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i, c = f(t, _.__wbindgen_malloc, _.__wbindgen_realloc), s = i;
    return _.llmrouter_verify_output_semantically(this.__wbg_ptr, r, o, c, s);
  }
}
Symbol.dispose && (G.prototype[Symbol.dispose] = G.prototype.free);
class J {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ee.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    _.__wbg_mcpserver_free(e, 0);
  }
  handle_request(e) {
    const t = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), r = i;
    return _.mcpserver_handle_request(this.__wbg_ptr, t, r);
  }
  constructor(e) {
    N(e, h);
    var t = e.__destroy_into_raw();
    const r = _.mcpserver_new(t);
    return this.__wbg_ptr = r >>> 0, ee.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (J.prototype[Symbol.dispose] = J.prototype.free);
class X {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, te.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    _.__wbg_topologymanager_free(e, 0);
  }
  claim_leadership() {
    const e = _.topologymanager_claim_leadership(this.__wbg_ptr);
    if (e[1]) throw q(e[0]);
  }
  is_leader() {
    return _.topologymanager_is_leader(this.__wbg_ptr) !== 0;
  }
  constructor(e) {
    const t = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), r = i, o = _.topologymanager_new(t, r);
    if (o[2]) throw q(o[1]);
    return this.__wbg_ptr = o[0] >>> 0, te.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (X.prototype[Symbol.dispose] = X.prototype.free);
class Y {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ne.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    _.__wbg_workerpool_free(e, 0);
  }
  dispatch_js(e, t) {
    const r = f(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o = i;
    return N(t, B), _.workerpool_dispatch_js(this.__wbg_ptr, r, o, t.__wbg_ptr);
  }
  get_stats() {
    let e, t;
    try {
      const r = _.workerpool_get_stats(this.__wbg_ptr);
      return e = r[0], t = r[1], g(r[0], r[1]);
    } finally {
      _.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e) {
    const t = _.workerpool_new_js(e);
    if (t[2]) throw q(t[1]);
    return this.__wbg_ptr = t[0] >>> 0, ne.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (Y.prototype[Symbol.dispose] = Y.prototype.free);
class H {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ye.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    _.__wbg_workerstats_free(e, 0);
  }
  get busy() {
    return _.__wbg_get_workerstats_busy(this.__wbg_ptr) >>> 0;
  }
  get completed() {
    return _.__wbg_get_workerstats_completed(this.__wbg_ptr) >>> 0;
  }
  get queued() {
    return _.__wbg_get_workerstats_queued(this.__wbg_ptr) >>> 0;
  }
  get workers() {
    return _.__wbg_get_workerstats_workers(this.__wbg_ptr) >>> 0;
  }
  set busy(e) {
    _.__wbg_set_workerstats_busy(this.__wbg_ptr, e);
  }
  set completed(e) {
    _.__wbg_set_workerstats_completed(this.__wbg_ptr, e);
  }
  set queued(e) {
    _.__wbg_set_workerstats_queued(this.__wbg_ptr, e);
  }
  set workers(e) {
    _.__wbg_set_workerstats_workers(this.__wbg_ptr, e);
  }
}
Symbol.dispose && (H.prototype[Symbol.dispose] = H.prototype.free);
function Se(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.argmax(e, t) >>> 0;
}
function Me(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.argmin(e, t) >>> 0;
}
function Re(n, e, t, r) {
  const o = l(n, _.__wbindgen_malloc), c = i, s = _.avg_pooling_2d(o, c, e, t, r);
  var a = u(s[0], s[1]).slice();
  return _.__wbindgen_free(s[0], s[1] * 4, 4), a;
}
function We(n, e, t, r) {
  const o = l(n, _.__wbindgen_malloc), c = i, s = _.batch_normalize(o, c, e, t, r);
  var a = u(s[0], s[1]).slice();
  return _.__wbindgen_free(s[0], s[1] * 4, 4), a;
}
function Te(n, e, t, r, o) {
  const c = l(n, _.__wbindgen_malloc), s = i, a = l(e, _.__wbindgen_malloc), b = i, w = _.conv2d_optimized(c, s, a, b, t, r, o);
  var L = u(w[0], w[1]).slice();
  return _.__wbindgen_free(w[0], w[1] * 4, 4), L;
}
function Oe(n, e, t, r, o) {
  const c = l(n, _.__wbindgen_malloc), s = i, a = l(e, _.__wbindgen_malloc), b = i, w = _.conv2d_scalar(c, s, a, b, t, r, o);
  var L = u(w[0], w[1]).slice();
  return _.__wbindgen_free(w[0], w[1] * 4, 4), L;
}
function Ie(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i;
  return _.cosine_similarity_scalar(t, r, o, c);
}
function Ee(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i;
  return _.cosine_similarity_simd(t, r, o, c);
}
function Le(n, e) {
  const t = V(n, _.__wbindgen_malloc), r = i, o = _.dequantize_int8(t, r, e);
  var c = u(o[0], o[1]).slice();
  return _.__wbindgen_free(o[0], o[1] * 4, 4), c;
}
function De(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i;
  return _.dot_product_scalar(t, r, o, c);
}
function $e(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i;
  return _.dot_product_simd(t, r, o, c);
}
function je(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i;
  return _.euclidean_distance(t, r, o, c);
}
function Ue(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = _.leaky_relu(t, r, e);
  var c = u(o[0], o[1]).slice();
  return _.__wbindgen_free(o[0], o[1] * 4, 4), c;
}
function Be(n) {
  const e = V(n, _.__wbindgen_malloc), t = i, r = _.lz4_compress_optimized(e, t);
  var o = ce(r[0], r[1]).slice();
  return _.__wbindgen_free(r[0], r[1] * 1, 1), o;
}
function Ce(n) {
  const e = V(n, _.__wbindgen_malloc), t = i, r = _.lz4_compress_scalar(e, t);
  var o = ce(r[0], r[1]).slice();
  return _.__wbindgen_free(r[0], r[1] * 1, 1), o;
}
function Ne(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i;
  return _.manhattan_distance(t, r, o, c);
}
function Ve(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i, s = _.matrix_add(t, r, o, c);
  var a = u(s[0], s[1]).slice();
  return _.__wbindgen_free(s[0], s[1] * 4, 4), a;
}
function Pe(n, e, t) {
  const r = l(n, _.__wbindgen_malloc), o = i, c = l(e, _.__wbindgen_malloc), s = i, a = _.matrix_multiply_scalar(r, o, c, s, t);
  var b = u(a[0], a[1]).slice();
  return _.__wbindgen_free(a[0], a[1] * 4, 4), b;
}
function Ge(n, e, t) {
  const r = l(n, _.__wbindgen_malloc), o = i, c = l(e, _.__wbindgen_malloc), s = i, a = _.matrix_multiply_tiled(r, o, c, s, t);
  var b = u(a[0], a[1]).slice();
  return _.__wbindgen_free(a[0], a[1] * 4, 4), b;
}
function Je(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = _.matrix_scalar_multiply(t, r, e);
  var c = u(o[0], o[1]).slice();
  return _.__wbindgen_free(o[0], o[1] * 4, 4), c;
}
function Xe(n, e, t) {
  const r = l(n, _.__wbindgen_malloc), o = i, c = _.matrix_transpose(r, o, e, t);
  var s = u(c[0], c[1]).slice();
  return _.__wbindgen_free(c[0], c[1] * 4, 4), s;
}
function Ye(n, e, t, r) {
  const o = l(n, _.__wbindgen_malloc), c = i, s = _.max_pooling_2d(o, c, e, t, r);
  var a = u(s[0], s[1]).slice();
  return _.__wbindgen_free(s[0], s[1] * 4, 4), a;
}
function He(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.mean(e, t);
}
function Ke(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = _.quantize_int8_scalar(t, r, e);
  var c = se(o[0], o[1]).slice();
  return _.__wbindgen_free(o[0], o[1] * 1, 1), c;
}
function Qe(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = _.quantize_int8_simd(t, r, e);
  var c = se(o[0], o[1]).slice();
  return _.__wbindgen_free(o[0], o[1] * 1, 1), c;
}
function Ze(n) {
  const e = l(n, _.__wbindgen_malloc), t = i, r = _.relu(e, t);
  var o = u(r[0], r[1]).slice();
  return _.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function et(n) {
  const e = l(n, _.__wbindgen_malloc), t = i, r = _.sigmoid(e, t);
  var o = u(r[0], r[1]).slice();
  return _.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function tt(n) {
  const e = l(n, _.__wbindgen_malloc), t = i, r = _.softmax(e, t);
  var o = u(r[0], r[1]).slice();
  return _.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function nt(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.std_dev(e, t);
}
function rt(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.variance(e, t);
}
function _t(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i, s = _.vector_add(t, r, o, c);
  var a = u(s[0], s[1]).slice();
  return _.__wbindgen_free(s[0], s[1] * 4, 4), a;
}
function ot(n, e, t) {
  const r = l(n, _.__wbindgen_malloc), o = i, c = _.vector_clamp(r, o, e, t);
  var s = u(c[0], c[1]).slice();
  return _.__wbindgen_free(c[0], c[1] * 4, 4), s;
}
function st(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i, s = _.vector_elementwise_multiply(t, r, o, c);
  var a = u(s[0], s[1]).slice();
  return _.__wbindgen_free(s[0], s[1] * 4, 4), a;
}
function ct(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.vector_max(e, t);
}
function it(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.vector_min(e, t);
}
function at(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.vector_norm_scalar(e, t);
}
function lt(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.vector_norm_simd(e, t);
}
function bt(n) {
  const e = l(n, _.__wbindgen_malloc), t = i, r = _.vector_normalize(e, t);
  var o = u(r[0], r[1]).slice();
  return _.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function ut(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = _.vector_scale(t, r, e);
  var c = u(o[0], o[1]).slice();
  return _.__wbindgen_free(o[0], o[1] * 4, 4), c;
}
function dt(n, e) {
  const t = l(n, _.__wbindgen_malloc), r = i, o = l(e, _.__wbindgen_malloc), c = i, s = _.vector_subtract(t, r, o, c);
  var a = u(s[0], s[1]).slice();
  return _.__wbindgen_free(s[0], s[1] * 4, 4), a;
}
function ft(n) {
  const e = l(n, _.__wbindgen_malloc), t = i;
  return _.vector_sum(e, t);
}
function gt() {
  _.wasm_start();
}
function wt(n, e) {
  const t = _.worker_entry_point(n, e);
  if (t[1]) throw q(t[0]);
}
function oe() {
  return { __proto__: null, "./barq_mesh_web_bg.js": { __proto__: null, __wbg___wbindgen_debug_string_5398f5bb970e0daa: function(e, t) {
    const r = C(t), o = f(r, _.__wbindgen_malloc, _.__wbindgen_realloc), c = i;
    m().setInt32(e + 4, c, true), m().setInt32(e + 0, o, true);
  }, __wbg___wbindgen_is_function_3c846841762788c1: function(e) {
    return typeof e == "function";
  }, __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_string_get_395e606bd0ee4427: function(e, t) {
    const r = t, o = typeof r == "string" ? r : void 0;
    var c = x(o) ? 0 : f(o, _.__wbindgen_malloc, _.__wbindgen_realloc), s = i;
    m().setInt32(e + 4, s, true), m().setInt32(e + 0, c, true);
  }, __wbg___wbindgen_throw_6ddd609b62940d55: function(e, t) {
    throw new Error(g(e, t));
  }, __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function(e) {
    e._wbg_cb_unref();
  }, __wbg_backend_info_fdb17cee94540389: function(e, t) {
    const r = t.backend_info(), o = f(r, _.__wbindgen_malloc, _.__wbindgen_realloc), c = i;
    m().setInt32(e + 4, c, true), m().setInt32(e + 0, o, true);
  }, __wbg_call_2d781c1f4d5c0ef8: function() {
    return p(function(e, t, r) {
      return e.call(t, r);
    }, arguments);
  }, __wbg_clear_a5d76b803b4255c8: function(e) {
    return e.clear();
  }, __wbg_count_d1a31c33b2e6b40a: function(e) {
    return e.count();
  }, __wbg_data_a3d9ff9cdd801002: function(e) {
    return e.data;
  }, __wbg_error_a6fa202b58aa1cd3: function(e, t) {
    let r, o;
    try {
      r = e, o = t, console.error(g(e, t));
    } finally {
      _.__wbindgen_free(r, o, 1);
    }
  }, __wbg_insert_texts_36a5c5373105d96a: function(e, t, r) {
    return e.insert_texts(t, r);
  }, __wbg_insert_vectors_8068863f08238089: function(e, t, r, o) {
    return e.insert_vectors(t, r, o >>> 0);
  }, __wbg_instanceof_DedicatedWorkerGlobalScope_c50082d7f5e65939: function(e) {
    let t;
    try {
      t = e instanceof DedicatedWorkerGlobalScope;
    } catch {
      t = false;
    }
    return t;
  }, __wbg_load_493e687e1fec3ad3: function(e) {
    return e.load();
  }, __wbg_new_227d7c05414eb861: function() {
    return new Error();
  }, __wbg_new_58457a061ec7cfeb: function(e, t, r) {
    return new U(g(e, t), r);
  }, __wbg_new_7beff0cea022eabb: function() {
    return p(function(e, t) {
      return new BroadcastChannel(g(e, t));
    }, arguments);
  }, __wbg_new_a70fbab9066b301f: function() {
    return new Array();
  }, __wbg_new_ab79df5bd7c26067: function() {
    return new Object();
  }, __wbg_new_f7708ba82c4c12f6: function() {
    return p(function() {
      return new MessageChannel();
    }, arguments);
  }, __wbg_new_from_slice_898ac63cbd46f332: function(e, t) {
    return new Uint32Array(he(e, t));
  }, __wbg_new_from_slice_ff2c15e8e05ffdfc: function(e, t) {
    return new Float32Array(u(e, t));
  }, __wbg_new_typed_aaaeaf29cf802876: function(e, t) {
    try {
      var r = { a: e, b: t }, o = (s, a) => {
        const b = r.a;
        r.a = 0;
        try {
          return pe(b, r.b, s, a);
        } finally {
          r.a = b;
        }
      };
      return new Promise(o);
    } finally {
      r.a = r.b = 0;
    }
  }, __wbg_new_with_options_4eec6fc3e29de99c: function() {
    return p(function(e, t, r) {
      return new Worker(g(e, t), r);
    }, arguments);
  }, __wbg_now_16f0c993d5dd6c27: function() {
    return Date.now();
  }, __wbg_port1_869a7ef90538dbdf: function(e) {
    return e.port1;
  }, __wbg_port2_947a51b8ba00adc9: function(e) {
    return e.port2;
  }, __wbg_postMessage_01834073e06a5a1c: function() {
    return p(function(e, t) {
      e.postMessage(t);
    }, arguments);
  }, __wbg_postMessage_5ed5275983f7dad2: function() {
    return p(function(e, t, r) {
      e.postMessage(t, r);
    }, arguments);
  }, __wbg_postMessage_c89a8b5edbf59ad0: function() {
    return p(function(e, t) {
      e.postMessage(t);
    }, arguments);
  }, __wbg_push_e87b0e732085a946: function(e, t) {
    return e.push(t);
  }, __wbg_queueMicrotask_0c399741342fb10f: function(e) {
    return e.queueMicrotask;
  }, __wbg_queueMicrotask_a082d78ce798393e: function(e) {
    queueMicrotask(e);
  }, __wbg_resolve_ae8d83246e5bcc12: function(e) {
    return Promise.resolve(e);
  }, __wbg_save_06af0d3814301780: function(e) {
    return e.save();
  }, __wbg_search_99ad0eaa60839d09: function(e, t, r, o, c) {
    let s, a;
    try {
      return s = t, a = r, e.search(g(t, r), o >>> 0, c !== 0);
    } finally {
      _.__wbindgen_free(s, a, 1);
    }
  }, __wbg_search_vector_edef126b4ca034af: function(e, t, r) {
    return e.search_vector(t, r >>> 0);
  }, __wbg_set_7eaa4f96924fd6b3: function() {
    return p(function(e, t, r) {
      return Reflect.set(e, t, r);
    }, arguments);
  }, __wbg_set_onmessage_59fc1df5e83ed05e: function(e, t) {
    e.onmessage = t;
  }, __wbg_set_onmessage_f939f8b6d08ca76b: function(e, t) {
    e.onmessage = t;
  }, __wbg_set_type_c96ec5d2b134f310: function(e, t) {
    e.type = me[t];
  }, __wbg_stack_3b0d974bbf31e44f: function(e, t) {
    const r = t.stack, o = f(r, _.__wbindgen_malloc, _.__wbindgen_realloc), c = i;
    m().setInt32(e + 4, c, true), m().setInt32(e + 0, o, true);
  }, __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
    const e = typeof global > "u" ? null : global;
    return x(e) ? 0 : v(e);
  }, __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return x(e) ? 0 : v(e);
  }, __wbg_static_accessor_SELF_f207c857566db248: function() {
    const e = typeof self > "u" ? null : self;
    return x(e) ? 0 : v(e);
  }, __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
    const e = typeof window > "u" ? null : window;
    return x(e) ? 0 : v(e);
  }, __wbg_stringify_5ae93966a84901ac: function() {
    return p(function(e) {
      return JSON.stringify(e);
    }, arguments);
  }, __wbg_then_098abe61755d12f6: function(e, t) {
    return e.then(t);
  }, __wbg_then_9e335f6dd892bc11: function(e, t, r) {
    return e.then(t, r);
  }, __wbindgen_cast_0000000000000001: function(e, t) {
    return _e(e, t, _.wasm_bindgen__closure__destroy__h1d445af615150f9b, ge);
  }, __wbindgen_cast_0000000000000002: function(e, t) {
    return _e(e, t, _.wasm_bindgen__closure__destroy__h9f3f5407e05f3b9c, we);
  }, __wbindgen_cast_0000000000000003: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000004: function(e, t) {
    return g(e, t);
  }, __wbindgen_init_externref_table: function() {
    const e = _.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  } } };
}
function ge(n, e, t) {
  _.wasm_bindgen__convert__closures_____invoke__h9c8bf75437b40c01(n, e, t);
}
function we(n, e, t) {
  const r = _.wasm_bindgen__convert__closures_____invoke__h82cd9d64b5eba286(n, e, t);
  if (r[1]) throw q(r[0]);
}
function pe(n, e, t, r) {
  _.wasm_bindgen__convert__closures_____invoke__ha1907031a984f678(n, e, t, r);
}
const me = ["classic", "module"], K = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => _.__wbg_aimesh_free(n >>> 0, 1)), Q = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => _.__wbg_barqmeshweb_free(n >>> 0, 1)), Z = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => _.__wbg_llmrouter_free(n >>> 0, 1)), ee = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => _.__wbg_mcpserver_free(n >>> 0, 1)), te = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => _.__wbg_topologymanager_free(n >>> 0, 1)), ne = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => _.__wbg_workerpool_free(n >>> 0, 1)), ye = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => _.__wbg_workerstats_free(n >>> 0, 1));
function v(n) {
  const e = _.__externref_table_alloc();
  return _.__wbindgen_externrefs.set(e, n), e;
}
function N(n, e) {
  if (!(n instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
const re = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => n.dtor(n.a, n.b));
function C(n) {
  const e = typeof n;
  if (e == "number" || e == "boolean" || n == null) return `${n}`;
  if (e == "string") return `"${n}"`;
  if (e == "symbol") {
    const o = n.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (e == "function") {
    const o = n.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(n)) {
    const o = n.length;
    let c = "[";
    o > 0 && (c += C(n[0]));
    for (let s = 1; s < o; s++) c += ", " + C(n[s]);
    return c += "]", c;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
  let r;
  if (t && t.length > 1) r = t[1];
  else return toString.call(n);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(n) + ")";
  } catch {
    return "Object";
  }
  return n instanceof Error ? `${n.name}: ${n.message}
${n.stack}` : r;
}
function u(n, e) {
  return n = n >>> 0, ie().subarray(n / 4, n / 4 + e);
}
function se(n, e) {
  return n = n >>> 0, ve().subarray(n / 1, n / 1 + e);
}
function he(n, e) {
  return n = n >>> 0, ae().subarray(n / 4, n / 4 + e);
}
function ce(n, e) {
  return n = n >>> 0, k().subarray(n / 1, n / 1 + e);
}
let y = null;
function m() {
  return (y === null || y.buffer.detached === true || y.buffer.detached === void 0 && y.buffer !== _.memory.buffer) && (y = new DataView(_.memory.buffer)), y;
}
let A = null;
function ie() {
  return (A === null || A.byteLength === 0) && (A = new Float32Array(_.memory.buffer)), A;
}
let z = null;
function ve() {
  return (z === null || z.byteLength === 0) && (z = new Int8Array(_.memory.buffer)), z;
}
function g(n, e) {
  return n = n >>> 0, Ae(n, e);
}
let F = null;
function ae() {
  return (F === null || F.byteLength === 0) && (F = new Uint32Array(_.memory.buffer)), F;
}
let S = null;
function k() {
  return (S === null || S.byteLength === 0) && (S = new Uint8Array(_.memory.buffer)), S;
}
function p(n, e) {
  try {
    return n.apply(this, e);
  } catch (t) {
    const r = v(t);
    _.__wbindgen_exn_store(r);
  }
}
function x(n) {
  return n == null;
}
function _e(n, e, t, r) {
  const o = { a: n, b: e, cnt: 1, dtor: t }, c = (...s) => {
    o.cnt++;
    const a = o.a;
    o.a = 0;
    try {
      return r(a, o.b, ...s);
    } finally {
      o.a = a, c._wbg_cb_unref();
    }
  };
  return c._wbg_cb_unref = () => {
    --o.cnt === 0 && (o.dtor(o.a, o.b), o.a = 0, re.unregister(o));
  }, re.register(c, o, o), c;
}
function ke(n, e) {
  const t = e(n.length * 4, 4) >>> 0;
  return ae().set(n, t / 4), i = n.length, t;
}
function V(n, e) {
  const t = e(n.length * 1, 1) >>> 0;
  return k().set(n, t / 1), i = n.length, t;
}
function l(n, e) {
  const t = e(n.length * 4, 4) >>> 0;
  return ie().set(n, t / 4), i = n.length, t;
}
function qe(n, e) {
  const t = e(n.length * 4, 4) >>> 0;
  for (let r = 0; r < n.length; r++) {
    const o = v(n[r]);
    m().setUint32(t + 4 * r, o, true);
  }
  return i = n.length, t;
}
function f(n, e, t) {
  if (t === void 0) {
    const a = W.encode(n), b = e(a.length, 1) >>> 0;
    return k().subarray(b, b + a.length).set(a), i = a.length, b;
  }
  let r = n.length, o = e(r, 1) >>> 0;
  const c = k();
  let s = 0;
  for (; s < r; s++) {
    const a = n.charCodeAt(s);
    if (a > 127) break;
    c[o + s] = a;
  }
  if (s !== r) {
    s !== 0 && (n = n.slice(s)), o = t(o, r, r = s + n.length * 3, 1) >>> 0;
    const a = k().subarray(o + s, o + r), b = W.encodeInto(n, a);
    s += b.written, o = t(o, r, s, 1) >>> 0;
  }
  return i = s, o;
}
function q(n) {
  const e = _.__wbindgen_externrefs.get(n);
  return _.__externref_table_dealloc(n), e;
}
let E = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
E.decode();
const xe = 2146435072;
let j = 0;
function Ae(n, e) {
  return j += e, j >= xe && (E = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), E.decode(), j = e), E.decode(k().subarray(n, n + e));
}
const W = new TextEncoder();
"encodeInto" in W || (W.encodeInto = function(n, e) {
  const t = W.encode(n);
  return e.set(t), { read: n.length, written: t.length };
});
let i = 0, _;
function le(n, e) {
  return _ = n.exports, y = null, A = null, z = null, F = null, S = null, _.__wbindgen_start(), _;
}
async function ze(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e);
    } catch (o) {
      if (n.ok && t(n.type) && n.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
      else throw o;
    }
    const r = await n.arrayBuffer();
    return await WebAssembly.instantiate(r, e);
  } else {
    const r = await WebAssembly.instantiate(n, e);
    return r instanceof WebAssembly.Instance ? { instance: r, module: n } : r;
  }
  function t(r) {
    switch (r) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function pt(n) {
  if (_ !== void 0) return _;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module: n } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = oe();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const t = new WebAssembly.Instance(n, e);
  return le(t);
}
async function mt(n) {
  if (_ !== void 0) return _;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), n === void 0 && (n = new URL("/barq-mesh-web-pkg/barq_mesh_web_bg.wasm", import.meta.url));
  const e = oe();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: t, module: r } = await ze(await n, e);
  return le(t);
}
export {
  h as AiMesh,
  B as BarqMeshWeb,
  Fe as LlmProvider,
  G as LlmRouter,
  J as McpServer,
  X as TopologyManager,
  Y as WorkerPool,
  H as WorkerStats,
  Se as argmax,
  Me as argmin,
  Re as avg_pooling_2d,
  We as batch_normalize,
  Te as conv2d_optimized,
  Oe as conv2d_scalar,
  Ie as cosine_similarity_scalar,
  Ee as cosine_similarity_simd,
  mt as default,
  Le as dequantize_int8,
  De as dot_product_scalar,
  $e as dot_product_simd,
  je as euclidean_distance,
  pt as initSync,
  Ue as leaky_relu,
  Be as lz4_compress_optimized,
  Ce as lz4_compress_scalar,
  Ne as manhattan_distance,
  Ve as matrix_add,
  Pe as matrix_multiply_scalar,
  Ge as matrix_multiply_tiled,
  Je as matrix_scalar_multiply,
  Xe as matrix_transpose,
  Ye as max_pooling_2d,
  He as mean,
  Ke as quantize_int8_scalar,
  Qe as quantize_int8_simd,
  Ze as relu,
  et as sigmoid,
  tt as softmax,
  nt as std_dev,
  rt as variance,
  _t as vector_add,
  ot as vector_clamp,
  st as vector_elementwise_multiply,
  ct as vector_max,
  it as vector_min,
  at as vector_norm_scalar,
  lt as vector_norm_simd,
  bt as vector_normalize,
  ut as vector_scale,
  dt as vector_subtract,
  ft as vector_sum,
  gt as wasm_start,
  wt as worker_entry_point
};
