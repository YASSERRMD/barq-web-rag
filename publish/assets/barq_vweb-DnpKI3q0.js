class R {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, x.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    c.__wbg_barqvweb_free(e, 0);
  }
  backend_info() {
    let e, t;
    try {
      const r = c.barqvweb_backend_info(this.__wbg_ptr);
      return e = r[0], t = r[1], A(r[0], r[1]);
    } finally {
      c.__wbindgen_free(e, t, 1);
    }
  }
  clear() {
    return c.barqvweb_clear(this.__wbg_ptr);
  }
  count() {
    return c.barqvweb_count(this.__wbg_ptr) >>> 0;
  }
  delete(e) {
    return c.barqvweb_delete(this.__wbg_ptr, e);
  }
  insert_texts(e, t) {
    return c.barqvweb_insert_texts(this.__wbg_ptr, e, t);
  }
  insert_vectors(e, t, r) {
    return c.barqvweb_insert_vectors(this.__wbg_ptr, e, t, r);
  }
  load() {
    return c.barqvweb_load(this.__wbg_ptr);
  }
  constructor(e, t) {
    const r = m(e, c.__wbindgen_malloc, c.__wbindgen_realloc), _ = l;
    var i = b(t) ? 0 : m(t, c.__wbindgen_malloc, c.__wbindgen_realloc), o = l;
    const s = c.barqvweb_new(r, _, i, o);
    return this.__wbg_ptr = s >>> 0, x.register(this, this.__wbg_ptr, this), this;
  }
  save() {
    return c.barqvweb_save(this.__wbg_ptr);
  }
  search(e, t, r) {
    const _ = m(e, c.__wbindgen_malloc, c.__wbindgen_realloc), i = l;
    return c.barqvweb_search(this.__wbg_ptr, _, i, t, r);
  }
  search_vector(e, t) {
    return c.barqvweb_search_vector(this.__wbg_ptr, e, t);
  }
}
Symbol.dispose && (R.prototype[Symbol.dispose] = R.prototype.free);
function S() {
  return { __proto__: null, "./barq_vweb_bg.js": { __proto__: null, __wbg___wbindgen_is_function_3c846841762788c1: function(e) {
    return typeof e == "function";
  }, __wbg___wbindgen_is_object_781bc9f159099513: function(e) {
    const t = e;
    return typeof t == "object" && t !== null;
  }, __wbg___wbindgen_is_string_7ef6b97b02428fae: function(e) {
    return typeof e == "string";
  }, __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(e) {
    return e === void 0;
  }, __wbg___wbindgen_number_get_34bb9d9dcfa21373: function(e, t) {
    const r = t, _ = typeof r == "number" ? r : void 0;
    d().setFloat64(e + 8, b(_) ? 0 : _, true), d().setInt32(e + 0, !b(_), true);
  }, __wbg___wbindgen_string_get_395e606bd0ee4427: function(e, t) {
    const r = t, _ = typeof r == "string" ? r : void 0;
    var i = b(_) ? 0 : m(_, c.__wbindgen_malloc, c.__wbindgen_realloc), o = l;
    d().setInt32(e + 4, o, true), d().setInt32(e + 0, i, true);
  }, __wbg___wbindgen_throw_6ddd609b62940d55: function(e, t) {
    throw new Error(A(e, t));
  }, __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function(e) {
    e._wbg_cb_unref();
  }, __wbg_apply_d7728efbea08f95e: function() {
    return u(function(e, t, r) {
      return Reflect.apply(e, t, r);
    }, arguments);
  }, __wbg_call_2d781c1f4d5c0ef8: function() {
    return u(function(e, t, r) {
      return e.call(t, r);
    }, arguments);
  }, __wbg_call_dcc2662fa17a72cf: function() {
    return u(function(e, t, r, _) {
      return e.call(t, r, _);
    }, arguments);
  }, __wbg_crypto_38df2bab126b63dc: function(e) {
    return e.crypto;
  }, __wbg_error_a6fa202b58aa1cd3: function(e, t) {
    let r, _;
    try {
      r = e, _ = t, console.error(A(e, t));
    } finally {
      c.__wbindgen_free(r, _, 1);
    }
  }, __wbg_getRandomValues_c44a50d8cfdaebeb: function() {
    return u(function(e, t) {
      e.getRandomValues(t);
    }, arguments);
  }, __wbg_get_3ef1eba1850ade27: function() {
    return u(function(e, t) {
      return Reflect.get(e, t);
    }, arguments);
  }, __wbg_get_a8ee5c45dabc1b3b: function(e, t) {
    return e[t >>> 0];
  }, __wbg_length_259ee9d041e381ad: function(e) {
    return e.length;
  }, __wbg_length_27280eca2d70010e: function(e) {
    return e.length;
  }, __wbg_length_b3416cf66a5452c8: function(e) {
    return e.length;
  }, __wbg_length_ea16607d7b61445b: function(e) {
    return e.length;
  }, __wbg_msCrypto_bd5a034af96bcba6: function(e) {
    return e.msCrypto;
  }, __wbg_new_227d7c05414eb861: function() {
    return new Error();
  }, __wbg_new_5f486cdf45a04d78: function(e) {
    return new Uint8Array(e);
  }, __wbg_new_a70fbab9066b301f: function() {
    return new Array();
  }, __wbg_new_ab79df5bd7c26067: function() {
    return new Object();
  }, __wbg_new_from_slice_ff2c15e8e05ffdfc: function(e, t) {
    return new Float32Array(W(e, t));
  }, __wbg_new_typed_aaaeaf29cf802876: function(e, t) {
    try {
      var r = { a: e, b: t }, _ = (o, s) => {
        const a = r.a;
        r.a = 0;
        try {
          return U(a, r.b, o, s);
        } finally {
          r.a = a;
        }
      };
      return new Promise(_);
    } finally {
      r.a = r.b = 0;
    }
  }, __wbg_new_with_length_825018a1616e9e55: function(e) {
    return new Uint8Array(e >>> 0);
  }, __wbg_node_84ea875411254db1: function(e) {
    return e.node;
  }, __wbg_process_44c7a14e11e9f69e: function(e) {
    return e.process;
  }, __wbg_prototypesetcall_247ac4333d4d3cb4: function(e, t, r) {
    Float32Array.prototype.set.call(W(e, t), r);
  }, __wbg_prototypesetcall_d62e5099504357e6: function(e, t, r) {
    Uint8Array.prototype.set.call(k(e, t), r);
  }, __wbg_prototypesetcall_f04613188bde902d: function(e, t, r) {
    Uint32Array.prototype.set.call(E(e, t), r);
  }, __wbg_push_e87b0e732085a946: function(e, t) {
    return e.push(t);
  }, __wbg_queueMicrotask_0c399741342fb10f: function(e) {
    return e.queueMicrotask;
  }, __wbg_queueMicrotask_a082d78ce798393e: function(e) {
    queueMicrotask(e);
  }, __wbg_randomFillSync_6c25eac9869eb53c: function() {
    return u(function(e, t) {
      e.randomFillSync(t);
    }, arguments);
  }, __wbg_require_b4edbdcf3e2a1ef0: function() {
    return u(function() {
      return module.require;
    }, arguments);
  }, __wbg_resolve_ae8d83246e5bcc12: function(e) {
    return Promise.resolve(e);
  }, __wbg_set_282384002438957f: function(e, t, r) {
    e[t >>> 0] = r;
  }, __wbg_set_6be42768c690e380: function(e, t, r) {
    e[t] = r;
  }, __wbg_set_7eaa4f96924fd6b3: function() {
    return u(function(e, t, r) {
      return Reflect.set(e, t, r);
    }, arguments);
  }, __wbg_stack_3b0d974bbf31e44f: function(e, t) {
    const r = t.stack, _ = m(r, c.__wbindgen_malloc, c.__wbindgen_realloc), i = l;
    d().setInt32(e + 4, i, true), d().setInt32(e + 0, _, true);
  }, __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() {
    const e = typeof global > "u" ? null : global;
    return b(e) ? 0 : w(e);
  }, __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return b(e) ? 0 : w(e);
  }, __wbg_static_accessor_SELF_f207c857566db248: function() {
    const e = typeof self > "u" ? null : self;
    return b(e) ? 0 : w(e);
  }, __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() {
    const e = typeof window > "u" ? null : window;
    return b(e) ? 0 : w(e);
  }, __wbg_subarray_a068d24e39478a8a: function(e, t, r) {
    return e.subarray(t >>> 0, r >>> 0);
  }, __wbg_then_098abe61755d12f6: function(e, t) {
    return e.then(t);
  }, __wbg_then_9e335f6dd892bc11: function(e, t, r) {
    return e.then(t, r);
  }, __wbg_versions_276b2795b1c6a219: function(e) {
    return e.versions;
  }, __wbindgen_cast_0000000000000001: function(e, t) {
    return j(e, t, c.wasm_bindgen__closure__destroy__h5fc7b39f71c2d967, O);
  }, __wbindgen_cast_0000000000000002: function(e) {
    return e;
  }, __wbindgen_cast_0000000000000003: function(e, t) {
    return k(e, t);
  }, __wbindgen_cast_0000000000000004: function(e, t) {
    return A(e, t);
  }, __wbindgen_init_externref_table: function() {
    const e = c.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  } } };
}
function O(n, e, t) {
  const r = c.wasm_bindgen__convert__closures_____invoke__h85e564a221c428e3(n, e, t);
  if (r[1]) throw D(r[0]);
}
function U(n, e, t, r) {
  c.wasm_bindgen__convert__closures_____invoke__h14d9ba7aff402d3a(n, e, t, r);
}
const x = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => c.__wbg_barqvweb_free(n >>> 0, 1));
function w(n) {
  const e = c.__externref_table_alloc();
  return c.__wbindgen_externrefs.set(e, n), e;
}
const M = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((n) => n.dtor(n.a, n.b));
function W(n, e) {
  return n = n >>> 0, I().subarray(n / 4, n / 4 + e);
}
function E(n, e) {
  return n = n >>> 0, L().subarray(n / 4, n / 4 + e);
}
function k(n, e) {
  return n = n >>> 0, h().subarray(n / 1, n / 1 + e);
}
let f = null;
function d() {
  return (f === null || f.buffer.detached === true || f.buffer.detached === void 0 && f.buffer !== c.memory.buffer) && (f = new DataView(c.memory.buffer)), f;
}
let g = null;
function I() {
  return (g === null || g.byteLength === 0) && (g = new Float32Array(c.memory.buffer)), g;
}
function A(n, e) {
  return n = n >>> 0, C(n, e);
}
let y = null;
function L() {
  return (y === null || y.byteLength === 0) && (y = new Uint32Array(c.memory.buffer)), y;
}
let p = null;
function h() {
  return (p === null || p.byteLength === 0) && (p = new Uint8Array(c.memory.buffer)), p;
}
function u(n, e) {
  try {
    return n.apply(this, e);
  } catch (t) {
    const r = w(t);
    c.__wbindgen_exn_store(r);
  }
}
function b(n) {
  return n == null;
}
function j(n, e, t, r) {
  const _ = { a: n, b: e, cnt: 1, dtor: t }, i = (...o) => {
    _.cnt++;
    const s = _.a;
    _.a = 0;
    try {
      return r(s, _.b, ...o);
    } finally {
      _.a = s, i._wbg_cb_unref();
    }
  };
  return i._wbg_cb_unref = () => {
    --_.cnt === 0 && (_.dtor(_.a, _.b), _.a = 0, M.unregister(_));
  }, M.register(i, _, _), i;
}
function m(n, e, t) {
  if (t === void 0) {
    const s = v.encode(n), a = e(s.length, 1) >>> 0;
    return h().subarray(a, a + s.length).set(s), l = s.length, a;
  }
  let r = n.length, _ = e(r, 1) >>> 0;
  const i = h();
  let o = 0;
  for (; o < r; o++) {
    const s = n.charCodeAt(o);
    if (s > 127) break;
    i[_ + o] = s;
  }
  if (o !== r) {
    o !== 0 && (n = n.slice(o)), _ = t(_, r, r = o + n.length * 3, 1) >>> 0;
    const s = h().subarray(_ + o, _ + r), a = v.encodeInto(n, s);
    o += a.written, _ = t(_, r, o, 1) >>> 0;
  }
  return l = o, _;
}
function D(n) {
  const e = c.__wbindgen_externrefs.get(n);
  return c.__externref_table_dealloc(n), e;
}
let q = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
q.decode();
const B = 2146435072;
let F = 0;
function C(n, e) {
  return F += e, F >= B && (q = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), q.decode(), F = e), q.decode(h().subarray(n, n + e));
}
const v = new TextEncoder();
"encodeInto" in v || (v.encodeInto = function(n, e) {
  const t = v.encode(n);
  return e.set(t), { read: n.length, written: t.length };
});
let l = 0, c;
function T(n, e) {
  return c = n.exports, f = null, g = null, y = null, p = null, c.__wbindgen_start(), c;
}
async function V(n, e) {
  if (typeof Response == "function" && n instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(n, e);
    } catch (_) {
      if (n.ok && t(n.type) && n.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _);
      else throw _;
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
function z(n) {
  if (c !== void 0) return c;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module: n } = n : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = S();
  n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n));
  const t = new WebAssembly.Instance(n, e);
  return T(t);
}
async function P(n) {
  if (c !== void 0) return c;
  n !== void 0 && (Object.getPrototypeOf(n) === Object.prototype ? { module_or_path: n } = n : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), n === void 0 && (n = new URL("/barq-vweb-pkg/barq_vweb_bg.wasm", import.meta.url));
  const e = S();
  (typeof n == "string" || typeof Request == "function" && n instanceof Request || typeof URL == "function" && n instanceof URL) && (n = fetch(n));
  const { instance: t, module: r } = await V(await n, e);
  return T(t);
}
export {
  R as BarqVWeb,
  P as default,
  z as initSync
};
