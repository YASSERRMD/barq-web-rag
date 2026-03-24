import { BarqVWeb as te } from "./barq_vweb-DnpKI3q0.js";
class y {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(y.prototype);
    return t.__wbg_ptr = e, C.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, C.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_aimesh_free(e, 0);
  }
  backend() {
    let e, t;
    try {
      const r = n.aimesh_backend(this.__wbg_ptr);
      return e = r[0], t = r[1], d(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  clear() {
    return n.aimesh_clear(this.__wbg_ptr);
  }
  static create(e, t, r) {
    const o = b(t, n.__wbindgen_malloc, n.__wbindgen_realloc), s = i, c = n.aimesh_create(e, o, s, r);
    if (c[2]) throw k(c[1]);
    return y.__wrap(c[0]);
  }
  dispatch_task(e) {
    const t = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = i;
    return n.aimesh_dispatch_task(this.__wbg_ptr, t, r);
  }
  ingest_texts(e) {
    const t = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = i;
    return n.aimesh_ingest_texts(this.__wbg_ptr, t, r);
  }
  persist() {
    return n.aimesh_persist(this.__wbg_ptr);
  }
  pool_stats() {
    let e, t;
    try {
      const r = n.aimesh_pool_stats(this.__wbg_ptr);
      return e = r[0], t = r[1], d(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  restore() {
    return n.aimesh_restore(this.__wbg_ptr);
  }
  retrieve(e, t) {
    const r = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i;
    return n.aimesh_retrieve(this.__wbg_ptr, r, o, t);
  }
  retrieve_hybrid(e, t) {
    const r = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i;
    return n.aimesh_retrieve_hybrid(this.__wbg_ptr, r, o, t);
  }
  run_pipeline(e) {
    const t = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = i;
    return n.aimesh_run_pipeline(this.__wbg_ptr, t, r);
  }
  shutdown() {
    return n.aimesh_shutdown(this.__wbg_ptr);
  }
  vector_count() {
    return n.aimesh_vector_count(this.__wbg_ptr) >>> 0;
  }
}
Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
class O {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_barqmeshweb_free(e, 0);
  }
  backend_info() {
    let e, t;
    try {
      const r = n.barqmeshweb_backend_info(this.__wbg_ptr);
      return e = r[0], t = r[1], d(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  clear() {
    return n.barqmeshweb_clear(this.__wbg_ptr);
  }
  collection_name() {
    let e, t;
    try {
      const r = n.barqmeshweb_collection_name(this.__wbg_ptr);
      return e = r[0], t = r[1], d(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  count() {
    return n.barqmeshweb_count(this.__wbg_ptr) >>> 0;
  }
  dim() {
    return n.barqmeshweb_dim(this.__wbg_ptr) >>> 0;
  }
  embedding_stats(e) {
    let t, r;
    try {
      const o = a(e, n.__wbindgen_malloc), s = i, c = n.barqmeshweb_embedding_stats(this.__wbg_ptr, o, s);
      return t = c[0], r = c[1], d(c[0], c[1]);
    } finally {
      n.__wbindgen_free(t, r, 1);
    }
  }
  ingest_texts(e) {
    const t = le(e, n.__wbindgen_malloc), r = i;
    return n.barqmeshweb_ingest_texts(this.__wbg_ptr, t, r);
  }
  load() {
    return n.barqmeshweb_load(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i, s = n.barqmeshweb_new(r, o, t);
    return this.__wbg_ptr = s >>> 0, $.register(this, this.__wbg_ptr, this), this;
  }
  retrieve_hybrid(e, t) {
    const r = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i;
    return n.barqmeshweb_retrieve_hybrid(this.__wbg_ptr, r, o, t);
  }
  save() {
    return n.barqmeshweb_save(this.__wbg_ptr);
  }
  search_vector(e, t) {
    const r = a(e, n.__wbindgen_malloc), o = i;
    return n.barqmeshweb_search_vector(this.__wbg_ptr, r, o, t);
  }
  upsert_vector(e, t) {
    const r = a(e, n.__wbindgen_malloc), o = i;
    return n.barqmeshweb_upsert_vector(this.__wbg_ptr, r, o, t);
  }
  upsert_vectors(e, t) {
    const r = a(e, n.__wbindgen_malloc), o = i, s = ae(t, n.__wbindgen_malloc), c = i;
    return n.barqmeshweb_upsert_vectors(this.__wbg_ptr, r, o, s, c);
  }
}
Symbol.dispose && (O.prototype[Symbol.dispose] = O.prototype.free);
const ge = Object.freeze({ WebLlm: 0, 0: "WebLlm", OpenRouter: 1, 1: "OpenRouter" });
class j {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, P.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_llmrouter_free(e, 0);
  }
  constructor(e) {
    const t = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = i, o = n.llmrouter_new(t, r);
    return this.__wbg_ptr = o >>> 0, P.register(this, this.__wbg_ptr, this), this;
  }
  prepare_rag_prompt(e, t) {
    I(e, y);
    const r = b(t, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i;
    return n.llmrouter_prepare_rag_prompt(this.__wbg_ptr, e.__wbg_ptr, r, o);
  }
  verify_output_semantically(e, t) {
    const r = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i, s = b(t, n.__wbindgen_malloc, n.__wbindgen_realloc), c = i;
    return n.llmrouter_verify_output_semantically(this.__wbg_ptr, r, o, s, c);
  }
}
Symbol.dispose && (j.prototype[Symbol.dispose] = j.prototype.free);
class E {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, N.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_mcpserver_free(e, 0);
  }
  handle_request(e) {
    const t = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = i;
    return n.mcpserver_handle_request(this.__wbg_ptr, t, r);
  }
  constructor(e) {
    I(e, y);
    var t = e.__destroy_into_raw();
    const r = n.mcpserver_new(t);
    return this.__wbg_ptr = r >>> 0, N.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (E.prototype[Symbol.dispose] = E.prototype.free);
class D {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, V.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_topologymanager_free(e, 0);
  }
  claim_leadership() {
    const e = n.topologymanager_claim_leadership(this.__wbg_ptr);
    if (e[1]) throw k(e[0]);
  }
  is_leader() {
    return n.topologymanager_is_leader(this.__wbg_ptr) !== 0;
  }
  constructor(e) {
    const t = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), r = i, o = n.topologymanager_new(t, r);
    if (o[2]) throw k(o[1]);
    return this.__wbg_ptr = o[0] >>> 0, V.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (D.prototype[Symbol.dispose] = D.prototype.free);
class U {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, G.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_workerpool_free(e, 0);
  }
  dispatch_js(e, t) {
    const r = b(e, n.__wbindgen_malloc, n.__wbindgen_realloc), o = i;
    return I(t, O), n.workerpool_dispatch_js(this.__wbg_ptr, r, o, t.__wbg_ptr);
  }
  get_stats() {
    let e, t;
    try {
      const r = n.workerpool_get_stats(this.__wbg_ptr);
      return e = r[0], t = r[1], d(r[0], r[1]);
    } finally {
      n.__wbindgen_free(e, t, 1);
    }
  }
  constructor(e) {
    const t = n.workerpool_new_js(e);
    if (t[2]) throw k(t[1]);
    return this.__wbg_ptr = t[0] >>> 0, G.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (U.prototype[Symbol.dispose] = U.prototype.free);
class B {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, se.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    n.__wbg_workerstats_free(e, 0);
  }
  get busy() {
    return n.__wbg_get_workerstats_busy(this.__wbg_ptr) >>> 0;
  }
  get completed() {
    return n.__wbg_get_workerstats_completed(this.__wbg_ptr) >>> 0;
  }
  get queued() {
    return n.__wbg_get_workerstats_queued(this.__wbg_ptr) >>> 0;
  }
  get workers() {
    return n.__wbg_get_workerstats_workers(this.__wbg_ptr) >>> 0;
  }
  set busy(e) {
    n.__wbg_set_workerstats_busy(this.__wbg_ptr, e);
  }
  set completed(e) {
    n.__wbg_set_workerstats_completed(this.__wbg_ptr, e);
  }
  set queued(e) {
    n.__wbg_set_workerstats_queued(this.__wbg_ptr, e);
  }
  set workers(e) {
    n.__wbg_set_workerstats_workers(this.__wbg_ptr, e);
  }
}
Symbol.dispose && (B.prototype[Symbol.dispose] = B.prototype.free);
function we(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.argmax(e, t) >>> 0;
}
function pe(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.argmin(e, t) >>> 0;
}
function me(_, e, t, r) {
  const o = a(_, n.__wbindgen_malloc), s = i, c = n.avg_pooling_2d(o, s, e, t, r);
  var l = u(c[0], c[1]).slice();
  return n.__wbindgen_free(c[0], c[1] * 4, 4), l;
}
function ye(_, e, t, r) {
  const o = a(_, n.__wbindgen_malloc), s = i, c = n.batch_normalize(o, s, e, t, r);
  var l = u(c[0], c[1]).slice();
  return n.__wbindgen_free(c[0], c[1] * 4, 4), l;
}
function he(_, e, t, r, o) {
  const s = a(_, n.__wbindgen_malloc), c = i, l = a(e, n.__wbindgen_malloc), f = i, g = n.conv2d_optimized(s, c, l, f, t, r, o);
  var W = u(g[0], g[1]).slice();
  return n.__wbindgen_free(g[0], g[1] * 4, 4), W;
}
function ve(_, e, t, r, o) {
  const s = a(_, n.__wbindgen_malloc), c = i, l = a(e, n.__wbindgen_malloc), f = i, g = n.conv2d_scalar(s, c, l, f, t, r, o);
  var W = u(g[0], g[1]).slice();
  return n.__wbindgen_free(g[0], g[1] * 4, 4), W;
}
function ke(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i;
  return n.cosine_similarity_scalar(t, r, o, s);
}
function xe(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i;
  return n.cosine_similarity_simd(t, r, o, s);
}
function ze(_, e) {
  const t = L(_, n.__wbindgen_malloc), r = i, o = n.dequantize_int8(t, r, e);
  var s = u(o[0], o[1]).slice();
  return n.__wbindgen_free(o[0], o[1] * 4, 4), s;
}
function Ae(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i;
  return n.dot_product_scalar(t, r, o, s);
}
function Fe(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i;
  return n.dot_product_simd(t, r, o, s);
}
function Se(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i;
  return n.euclidean_distance(t, r, o, s);
}
function qe(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = n.leaky_relu(t, r, e);
  var s = u(o[0], o[1]).slice();
  return n.__wbindgen_free(o[0], o[1] * 4, 4), s;
}
function Me(_) {
  const e = L(_, n.__wbindgen_malloc), t = i, r = n.lz4_compress_optimized(e, t);
  var o = K(r[0], r[1]).slice();
  return n.__wbindgen_free(r[0], r[1] * 1, 1), o;
}
function We(_) {
  const e = L(_, n.__wbindgen_malloc), t = i, r = n.lz4_compress_scalar(e, t);
  var o = K(r[0], r[1]).slice();
  return n.__wbindgen_free(r[0], r[1] * 1, 1), o;
}
function Re(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i;
  return n.manhattan_distance(t, r, o, s);
}
function Oe(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i, c = n.matrix_add(t, r, o, s);
  var l = u(c[0], c[1]).slice();
  return n.__wbindgen_free(c[0], c[1] * 4, 4), l;
}
function Te(_, e, t) {
  const r = a(_, n.__wbindgen_malloc), o = i, s = a(e, n.__wbindgen_malloc), c = i, l = n.matrix_multiply_scalar(r, o, s, c, t);
  var f = u(l[0], l[1]).slice();
  return n.__wbindgen_free(l[0], l[1] * 4, 4), f;
}
function Ie(_, e, t) {
  const r = a(_, n.__wbindgen_malloc), o = i, s = a(e, n.__wbindgen_malloc), c = i, l = n.matrix_multiply_tiled(r, o, s, c, t);
  var f = u(l[0], l[1]).slice();
  return n.__wbindgen_free(l[0], l[1] * 4, 4), f;
}
function Le(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = n.matrix_scalar_multiply(t, r, e);
  var s = u(o[0], o[1]).slice();
  return n.__wbindgen_free(o[0], o[1] * 4, 4), s;
}
function je(_, e, t) {
  const r = a(_, n.__wbindgen_malloc), o = i, s = n.matrix_transpose(r, o, e, t);
  var c = u(s[0], s[1]).slice();
  return n.__wbindgen_free(s[0], s[1] * 4, 4), c;
}
function Ee(_, e, t, r) {
  const o = a(_, n.__wbindgen_malloc), s = i, c = n.max_pooling_2d(o, s, e, t, r);
  var l = u(c[0], c[1]).slice();
  return n.__wbindgen_free(c[0], c[1] * 4, 4), l;
}
function De(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.mean(e, t);
}
function Ue(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = n.quantize_int8_scalar(t, r, e);
  var s = Y(o[0], o[1]).slice();
  return n.__wbindgen_free(o[0], o[1] * 1, 1), s;
}
function Be(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = n.quantize_int8_simd(t, r, e);
  var s = Y(o[0], o[1]).slice();
  return n.__wbindgen_free(o[0], o[1] * 1, 1), s;
}
function Ce(_) {
  const e = a(_, n.__wbindgen_malloc), t = i, r = n.relu(e, t);
  var o = u(r[0], r[1]).slice();
  return n.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function $e(_) {
  const e = a(_, n.__wbindgen_malloc), t = i, r = n.sigmoid(e, t);
  var o = u(r[0], r[1]).slice();
  return n.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function Pe(_) {
  const e = a(_, n.__wbindgen_malloc), t = i, r = n.softmax(e, t);
  var o = u(r[0], r[1]).slice();
  return n.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function Ne(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.std_dev(e, t);
}
function Ve(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.variance(e, t);
}
function Ge(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i, c = n.vector_add(t, r, o, s);
  var l = u(c[0], c[1]).slice();
  return n.__wbindgen_free(c[0], c[1] * 4, 4), l;
}
function Je(_, e, t) {
  const r = a(_, n.__wbindgen_malloc), o = i, s = n.vector_clamp(r, o, e, t);
  var c = u(s[0], s[1]).slice();
  return n.__wbindgen_free(s[0], s[1] * 4, 4), c;
}
function He(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i, c = n.vector_elementwise_multiply(t, r, o, s);
  var l = u(c[0], c[1]).slice();
  return n.__wbindgen_free(c[0], c[1] * 4, 4), l;
}
function Xe(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.vector_max(e, t);
}
function Ye(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.vector_min(e, t);
}
function Ke(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.vector_norm_scalar(e, t);
}
function Qe(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.vector_norm_simd(e, t);
}
function Ze(_) {
  const e = a(_, n.__wbindgen_malloc), t = i, r = n.vector_normalize(e, t);
  var o = u(r[0], r[1]).slice();
  return n.__wbindgen_free(r[0], r[1] * 4, 4), o;
}
function et(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = n.vector_scale(t, r, e);
  var s = u(o[0], o[1]).slice();
  return n.__wbindgen_free(o[0], o[1] * 4, 4), s;
}
function tt(_, e) {
  const t = a(_, n.__wbindgen_malloc), r = i, o = a(e, n.__wbindgen_malloc), s = i, c = n.vector_subtract(t, r, o, s);
  var l = u(c[0], c[1]).slice();
  return n.__wbindgen_free(c[0], c[1] * 4, 4), l;
}
function nt(_) {
  const e = a(_, n.__wbindgen_malloc), t = i;
  return n.vector_sum(e, t);
}
function rt() {
  n.wasm_start();
}
function _t(_, e) {
  const t = n.worker_entry_point(_, e);
  if (t[1]) throw k(t[0]);
}
function X() {
  return { __proto__: null, "./barq_mesh_web_bg.js": { __proto__: null, __wbg___wbindgen_debug_string_5398f5bb970e0daa: function(e, t) {
    const r = T(t), o = b(r, n.__wbindgen_malloc, n.__wbindgen_realloc), s = i;
    p().setInt32(e + 4, s, true), p().setInt32(e + 0, o, true);
  }, __wbg___wbindgen_is_function_3c846841762788c1: function(e) {
    return typeof e == "function";
  }, __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_string_get_395e606bd0ee4427: function(e, t) {
    const r = t, o = typeof r == "string" ? r : void 0;
    var s = x(o) ? 0 : b(o, n.__wbindgen_malloc, n.__wbindgen_realloc), c = i;
    p().setInt32(e + 4, c, true), p().setInt32(e + 0, s, true);
  }, __wbg___wbindgen_throw_6ddd609b62940d55: function(e, t) {
    throw new Error(d(e, t));
  }, __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function(e) {
    e._wbg_cb_unref();
  }, __wbg_backend_info_fdb17cee94540389: function(e, t) {
    const r = t.backend_info(), o = b(r, n.__wbindgen_malloc, n.__wbindgen_realloc), s = i;
    p().setInt32(e + 4, s, true), p().setInt32(e + 0, o, true);
  }, __wbg_call_2d781c1f4d5c0ef8: function() {
    return w(function(e, t, r) {
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
      r = e, o = t, console.error(d(e, t));
    } finally {
      n.__wbindgen_free(r, o, 1);
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
    return new te(d(e, t), r);
  }, __wbg_new_7beff0cea022eabb: function() {
    return w(function(e, t) {
      return new BroadcastChannel(d(e, t));
    }, arguments);
  }, __wbg_new_a70fbab9066b301f: function() {
    return new Array();
  }, __wbg_new_ab79df5bd7c26067: function() {
    return new Object();
  }, __wbg_new_f7708ba82c4c12f6: function() {
    return w(function() {
      return new MessageChannel();
    }, arguments);
  }, __wbg_new_from_slice_898ac63cbd46f332: function(e, t) {
    return new Uint32Array(ce(e, t));
  }, __wbg_new_from_slice_ff2c15e8e05ffdfc: function(e, t) {
    return new Float32Array(u(e, t));
  }, __wbg_new_typed_aaaeaf29cf802876: function(e, t) {
    try {
      var r = { a: e, b: t }, o = (c, l) => {
        const f = r.a;
        r.a = 0;
        try {
          return _e(f, r.b, c, l);
        } finally {
          r.a = f;
        }
      };
      return new Promise(o);
    } finally {
      r.a = r.b = 0;
    }
  }, __wbg_new_with_options_4eec6fc3e29de99c: function() {
    return w(function(e, t, r) {
      return new Worker(d(e, t), r);
    }, arguments);
  }, __wbg_now_16f0c993d5dd6c27: function() {
    return Date.now();
  }, __wbg_port1_869a7ef90538dbdf: function(e) {
    return e.port1;
  }, __wbg_port2_947a51b8ba00adc9: function(e) {
    return e.port2;
  }, __wbg_postMessage_01834073e06a5a1c: function() {
    return w(function(e, t) {
      e.postMessage(t);
    }, arguments);
  }, __wbg_postMessage_5ed5275983f7dad2: function() {
    return w(function(e, t, r) {
      e.postMessage(t, r);
    }, arguments);
  }, __wbg_postMessage_c89a8b5edbf59ad0: function() {
    return w(function(e, t) {
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
  }, __wbg_search_99ad0eaa60839d09: function(e, t, r, o, s) {
    let c, l;
    try {
      return c = t, l = r, e.search(d(t, r), o >>> 0, s !== 0);
    } finally {
      n.__wbindgen_free(c, l, 1);
    }
  }, __wbg_search_vector_edef126b4ca034af: function(e, t, r) {
    return e.search_vector(t, r >>> 0);
  }, __wbg_set_7eaa4f96924fd6b3: function() {
    return w(function(e, t, r) {
      return Reflect.set(e, t, r);
    }, arguments);
  }, __wbg_set_onmessage_59fc1df5e83ed05e: function(e, t) {
    e.onmessage = t;
  }, __wbg_set_onmessage_f939f8b6d08ca76b: function(e, t) {
    e.onmessage = t;
  }, __wbg_set_type_c96ec5d2b134f310: function(e, t) {
    e.type = oe[t];
  }, __wbg_stack_3b0d974bbf31e44f: function(e, t) {
    const r = t.stack, o = b(r, n.__wbindgen_malloc, n.__wbindgen_realloc), s = i;
    p().setInt32(e + 4, s, true), p().setInt32(e + 0, o, true);
  }, __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
    const e = typeof global > "u" ? null : global;
    return x(e) ? 0 : h(e);
  }, __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return x(e) ? 0 : h(e);
  }, __wbg_static_accessor_SELF_f207c857566db248: function() {
    const e = typeof self > "u" ? null : self;
    return x(e) ? 0 : h(e);
  }, __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
    const e = typeof window > "u" ? null : window;
    return x(e) ? 0 : h(e);
  }, __wbg_stringify_5ae93966a84901ac: function() {
    return w(function(e) {
      return JSON.stringify(e);
    }, arguments);
  }, __wbg_then_098abe61755d12f6: function(e, t) {
    return e.then(t);
  }, __wbg_then_9e335f6dd892bc11: function(e, t, r) {
    return e.then(t, r);
  }, __wbindgen_cast_0000000000000001: function(e, t) {
    return H(e, t, n.wasm_bindgen__closure__destroy__h1d445af615150f9b, ne);
  }, __wbindgen_cast_0000000000000002: function(e, t) {
    return H(e, t, n.wasm_bindgen__closure__destroy__h9f3f5407e05f3b9c, re);
  }, __wbindgen_cast_0000000000000003: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000004: function(e, t) {
    return d(e, t);
  }, __wbindgen_init_externref_table: function() {
    const e = n.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  } } };
}
function ne(_, e, t) {
  n.wasm_bindgen__convert__closures_____invoke__h9c8bf75437b40c01(_, e, t);
}
function re(_, e, t) {
  const r = n.wasm_bindgen__convert__closures_____invoke__h82cd9d64b5eba286(_, e, t);
  if (r[1]) throw k(r[0]);
}
function _e(_, e, t, r) {
  n.wasm_bindgen__convert__closures_____invoke__ha1907031a984f678(_, e, t, r);
}
const oe = ["classic", "module"], C = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => n.__wbg_aimesh_free(_ >>> 0, 1)), $ = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => n.__wbg_barqmeshweb_free(_ >>> 0, 1)), P = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => n.__wbg_llmrouter_free(_ >>> 0, 1)), N = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => n.__wbg_mcpserver_free(_ >>> 0, 1)), V = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => n.__wbg_topologymanager_free(_ >>> 0, 1)), G = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => n.__wbg_workerpool_free(_ >>> 0, 1)), se = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => n.__wbg_workerstats_free(_ >>> 0, 1));
function h(_) {
  const e = n.__externref_table_alloc();
  return n.__wbindgen_externrefs.set(e, _), e;
}
function I(_, e) {
  if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
const J = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((_) => _.dtor(_.a, _.b));
function T(_) {
  const e = typeof _;
  if (e == "number" || e == "boolean" || _ == null) return `${_}`;
  if (e == "string") return `"${_}"`;
  if (e == "symbol") {
    const o = _.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (e == "function") {
    const o = _.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(_)) {
    const o = _.length;
    let s = "[";
    o > 0 && (s += T(_[0]));
    for (let c = 1; c < o; c++) s += ", " + T(_[c]);
    return s += "]", s;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(_));
  let r;
  if (t && t.length > 1) r = t[1];
  else return toString.call(_);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(_) + ")";
  } catch {
    return "Object";
  }
  return _ instanceof Error ? `${_.name}: ${_.message}
${_.stack}` : r;
}
function u(_, e) {
  return _ = _ >>> 0, Q().subarray(_ / 4, _ / 4 + e);
}
function Y(_, e) {
  return _ = _ >>> 0, ie().subarray(_ / 1, _ / 1 + e);
}
function ce(_, e) {
  return _ = _ >>> 0, Z().subarray(_ / 4, _ / 4 + e);
}
function K(_, e) {
  return _ = _ >>> 0, v().subarray(_ / 1, _ / 1 + e);
}
let m = null;
function p() {
  return (m === null || m.buffer.detached === true || m.buffer.detached === void 0 && m.buffer !== n.memory.buffer) && (m = new DataView(n.memory.buffer)), m;
}
let z = null;
function Q() {
  return (z === null || z.byteLength === 0) && (z = new Float32Array(n.memory.buffer)), z;
}
let A = null;
function ie() {
  return (A === null || A.byteLength === 0) && (A = new Int8Array(n.memory.buffer)), A;
}
function d(_, e) {
  return _ = _ >>> 0, be(_, e);
}
let F = null;
function Z() {
  return (F === null || F.byteLength === 0) && (F = new Uint32Array(n.memory.buffer)), F;
}
let S = null;
function v() {
  return (S === null || S.byteLength === 0) && (S = new Uint8Array(n.memory.buffer)), S;
}
function w(_, e) {
  try {
    return _.apply(this, e);
  } catch (t) {
    const r = h(t);
    n.__wbindgen_exn_store(r);
  }
}
function x(_) {
  return _ == null;
}
function H(_, e, t, r) {
  const o = { a: _, b: e, cnt: 1, dtor: t }, s = (...c) => {
    o.cnt++;
    const l = o.a;
    o.a = 0;
    try {
      return r(l, o.b, ...c);
    } finally {
      o.a = l, s._wbg_cb_unref();
    }
  };
  return s._wbg_cb_unref = () => {
    --o.cnt === 0 && (o.dtor(o.a, o.b), o.a = 0, J.unregister(o));
  }, J.register(s, o, o), s;
}
function ae(_, e) {
  const t = e(_.length * 4, 4) >>> 0;
  return Z().set(_, t / 4), i = _.length, t;
}
function L(_, e) {
  const t = e(_.length * 1, 1) >>> 0;
  return v().set(_, t / 1), i = _.length, t;
}
function a(_, e) {
  const t = e(_.length * 4, 4) >>> 0;
  return Q().set(_, t / 4), i = _.length, t;
}
function le(_, e) {
  const t = e(_.length * 4, 4) >>> 0;
  for (let r = 0; r < _.length; r++) {
    const o = h(_[r]);
    p().setUint32(t + 4 * r, o, true);
  }
  return i = _.length, t;
}
function b(_, e, t) {
  if (t === void 0) {
    const l = q.encode(_), f = e(l.length, 1) >>> 0;
    return v().subarray(f, f + l.length).set(l), i = l.length, f;
  }
  let r = _.length, o = e(r, 1) >>> 0;
  const s = v();
  let c = 0;
  for (; c < r; c++) {
    const l = _.charCodeAt(c);
    if (l > 127) break;
    s[o + c] = l;
  }
  if (c !== r) {
    c !== 0 && (_ = _.slice(c)), o = t(o, r, r = c + _.length * 3, 1) >>> 0;
    const l = v().subarray(o + c, o + r), f = q.encodeInto(_, l);
    c += f.written, o = t(o, r, c, 1) >>> 0;
  }
  return i = c, o;
}
function k(_) {
  const e = n.__wbindgen_externrefs.get(_);
  return n.__externref_table_dealloc(_), e;
}
let M = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
M.decode();
const ue = 2146435072;
let R = 0;
function be(_, e) {
  return R += e, R >= ue && (M = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), M.decode(), R = e), M.decode(v().subarray(_, _ + e));
}
const q = new TextEncoder();
"encodeInto" in q || (q.encodeInto = function(_, e) {
  const t = q.encode(_);
  return e.set(t), { read: _.length, written: t.length };
});
let i = 0, n;
function ee(_, e) {
  return n = _.exports, m = null, z = null, A = null, F = null, S = null, n.__wbindgen_start(), n;
}
async function fe(_, e) {
  if (typeof Response == "function" && _ instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(_, e);
    } catch (o) {
      if (_.ok && t(_.type) && _.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
      else throw o;
    }
    const r = await _.arrayBuffer();
    return await WebAssembly.instantiate(r, e);
  } else {
    const r = await WebAssembly.instantiate(_, e);
    return r instanceof WebAssembly.Instance ? { instance: r, module: _ } : r;
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
function ot(_) {
  if (n !== void 0) return n;
  _ !== void 0 && (Object.getPrototypeOf(_) === Object.prototype ? { module: _ } = _ : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = X();
  _ instanceof WebAssembly.Module || (_ = new WebAssembly.Module(_));
  const t = new WebAssembly.Instance(_, e);
  return ee(t);
}
async function st(_) {
  if (n !== void 0) return n;
  _ !== void 0 && (Object.getPrototypeOf(_) === Object.prototype ? { module_or_path: _ } = _ : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), _ === void 0 && (_ = new URL("/barq-mesh-web-pkg/barq_mesh_web_bg.wasm", import.meta.url));
  const e = X();
  (typeof _ == "string" || typeof Request == "function" && _ instanceof Request || typeof URL == "function" && _ instanceof URL) && (_ = fetch(_));
  const { instance: t, module: r } = await fe(await _, e);
  return ee(t);
}
export {
  y as AiMesh,
  O as BarqMeshWeb,
  ge as LlmProvider,
  j as LlmRouter,
  E as McpServer,
  D as TopologyManager,
  U as WorkerPool,
  B as WorkerStats,
  we as argmax,
  pe as argmin,
  me as avg_pooling_2d,
  ye as batch_normalize,
  he as conv2d_optimized,
  ve as conv2d_scalar,
  ke as cosine_similarity_scalar,
  xe as cosine_similarity_simd,
  st as default,
  ze as dequantize_int8,
  Ae as dot_product_scalar,
  Fe as dot_product_simd,
  Se as euclidean_distance,
  ot as initSync,
  qe as leaky_relu,
  Me as lz4_compress_optimized,
  We as lz4_compress_scalar,
  Re as manhattan_distance,
  Oe as matrix_add,
  Te as matrix_multiply_scalar,
  Ie as matrix_multiply_tiled,
  Le as matrix_scalar_multiply,
  je as matrix_transpose,
  Ee as max_pooling_2d,
  De as mean,
  Ue as quantize_int8_scalar,
  Be as quantize_int8_simd,
  Ce as relu,
  $e as sigmoid,
  Pe as softmax,
  Ne as std_dev,
  Ve as variance,
  Ge as vector_add,
  Je as vector_clamp,
  He as vector_elementwise_multiply,
  Xe as vector_max,
  Ye as vector_min,
  Ke as vector_norm_scalar,
  Qe as vector_norm_simd,
  Ze as vector_normalize,
  et as vector_scale,
  tt as vector_subtract,
  nt as vector_sum,
  rt as wasm_start,
  _t as worker_entry_point
};
