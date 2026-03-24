var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
let Vn, Wn, Xn, qn, Yn, Kn, Qn, Jn, Zn, tr, er, sr, ir, nr, rr, ar, or, lr, hr, cr, dr, ur, fr, pr, gr, mr, br, Ar, _r, yr, vr, wr, Sr, Er, xr, Cr, Tr, Pr, kr, Rr, Mr, Ir, Lr, Dr, Fr;
let __tla = (async () => {
  var _C_static, t_fn, e_fn, _t, _t2, _e2, _s2, _i2, _r2, _n2, _Yt_static, l_fn, _Yt_instances, o_fn, c_fn, h_fn, u_fn, d_get, _t3, _e3, _s3, _di_instances, i_fn, r_fn, n_fn, _t4, _t5, _e4, _s4, _He_instances, i_fn2, _t6, _e5, _s5, _i3, _te_instances, t_fn2, _t7, _e6, _s6, _i4, _r3, _n3, _l, _o, _c, _h, _u, _d, _f, _a, _p, _m, _g, _b, _y, _A, _v, _S, _x, _T, _k, _w, _P, _C, _M, _D, _N, _E, __, _L, _G, _z, _U, _O, _F, _B, _j, _I, _kt_instances, H_fn, X_fn, Z_fn, tt_fn, W_fn, et_fn, st_fn, it_fn, q_fn, nt_fn, Y_fn, K_fn, rt_fn, R_fn, $_fn, at_fn, ot_fn, Q_fn, lt_get, V_fn, J_fn, _t8, _e7, _s7, _i5, _r4, _n4, _l2, _o2, _c2, _h2, _u2, _d2, _f2, _wt_instances, a_get, p_fn, _t9, _e8, _s8, _i6, _r5, _n5, _l3, _o3, _c3, _h3, _u3, _ge_instances, d_fn, f_fn, a_fn, _t10, _e9, _s9, _i7, _r6, _n6, _l4, _o4, _c4, _h4, _u4, _d3, _f3, _a2, _p2, _m2, _g2, _b2, _y2, _A2, _v2, _S2, _x2, _T2, _R_instances, k_fn, _R_static, w_fn, P_fn, C_fn, M_fn, D_fn, N_fn, E_fn, __fn, L_fn, G_fn, z_fn, U_fn, O_fn, F_fn, B_fn, j_fn, I_fn, H_fn2, _t11, _e10, _s10, _Ge_instances, i_fn3, _t12, _t13, _t14, _Xt_instances, e_fn2, s_fn, i_fn4, r_fn2, _t15, _t16, _e11, _s11, _i8, _r7, _n7, _l5, _Ai_instances, o_get, c_get, h_get, u_fn2, d_fn2, f_fn2, a_fn2, p_fn2, m_fn, g_fn, b_fn, y_fn, _Ht_instances, t_fn3, e_fn3, s_fn2, _t17, _e12, _t18, _e13, _t19, _e14, _s12, _i9, _t20, _e15, _s13, _i10, _Bi_instances, r_fn3, _a3, _t21, _e16, _s14, _i11, _r8, _n8, _l6, _o5, _c5, _h5, _u5, _d4, _f4, _a4, _p3, _m3, _g3, _b3, _y3, _A3, _v3, _S3, _x3, _rt_instances, T_fn, k_fn2, w_fn2, _rt_static, P_fn2, C_fn2, M_fn2, D_fn2, _t22, _t23, _e17, _gn_instances, s_fn3, i_fn5, _t24, _e18, _t25, _e19, _s15, _J_instances, i_fn6, _J_static, r_get, _t26, _e20, _s16, _i12, _r9, _bn_instances, n_fn2, _t27, _Fs_instances, e_fn4, _t28, _t29, _e21, _t30, _e22, _s17, _V_instances, i_fn7, _Os_instances, t_fn4, e_fn5, s_fn4, _t31, _e23, _s18, _i13, _r10, _n9, _l7, _o6, _c6, _h6, _u6, _d5, _f5, _a5, _p4, _m4, _g4, _b4, _y4, _Rn_instances, A_get, v_get, S_get, x_fn, T_fn2, k_fn3, w_fn3, P_fn3, C_fn3, _t32, _t33, _t34, _t35, _t36, _e24, _We_instances, s_fn5, _t37, _Hn_instances, e_fn6, _t38, _e25, _s19, _i14, _$n_instances, r_fn4, n_fn3, _t39, _e26, _s20, _i15, _r11, _Q_instances, n_fn4, l_fn2, o_fn2, c_fn2, _Q_static, h_fn2, u_fn3, d_fn3, f_fn3, a_fn3, _t40, _e27, _s21, _i16, _r12, _n10, _l8, _o7, _c7, _h7, _u7, _d6, _f6, _a6, _p5, _m5, _Mt_instances, g_fn2, b_fn2, y_fn2, A_fn, v_fn, S_fn, x_fn2, _t41, _e28, _s22, _i17, _r13, _n11, _l9, _Us_instances, o_fn3, _t42, _e29, _s23, _i18, _Ie_instances, r_fn5, n_fn5, l_fn3, o_fn4, c_fn3, _t43, _e30, _t44, _e31, _s24, _i19, _r14, _n12, _l10, _o8, _c8, _h8, _u8, _d7, _mt_instances, f_fn4, a_fn4, p_fn3, m_fn2, g_fn3, b_get, _t45, _e32, _s25, _i20, _r15, _n13, _l11, _o9, _c9, _h9, _u9, _d8, _f7, _a7, _p6, _m6, _g5, _b5, _j_instances, y_fn3, A_fn2, v_fn2, S_fn2, x_fn3, T_fn3, k_fn4, _j_static, w_fn4, P_fn4, C_fn4, M_fn3, D_fn3, N_fn2, E_fn2, __fn2, L_fn2, _t46, _t47, _e33, _s26, _i21, _r16, _n14, _l12, _o10, _c10, _k_instances, h_fn3, u_fn4, d_fn4, f_fn5, a_fn5, p_fn4, m_fn3, g_fn4, _t48, _e34, _s27, _i22, _r17, _n15, _l13, _o11, _c11, _h10, _u10, _jn_instances, d_fn5, _t49, _e35, _s28, _i23, _r18, _n16, _l14, _o12, _c12, _Ae_instances, h_fn4, u_fn5, d_fn6, f_fn6, _t50, _qe_instances, t_fn5, _t51, _e36, _s29, _i24, _r19, _n17, _l15, _o13, _c13, _h11, _Ye_instances, u_fn6, d_fn7, f_fn7, a_fn6, p_fn5, m_fn4, g_fn5, b_fn3, _t52, _e37, _s30, _i25, _r20, _n18, _l16, _o14, _c14, _h12, _u11, _d9, _f8, _a8, _p7, _xt_instances, m_fn5, g_get, b_fn4, y_fn4, A_fn3, _t53, _e38, _s31, _i26, _nt_static, r_fn6, _nt_instances, n_fn6, l_fn4, o_fn5;
  var qt = {};
  qt.d = (c, t) => {
    for (var e in t) qt.o(t, e) && !qt.o(c, e) && Object.defineProperty(c, e, {
      enumerable: true,
      get: t[e]
    });
  };
  qt.o = (c, t) => Object.prototype.hasOwnProperty.call(c, t);
  var I = globalThis.pdfjsLib = {};
  qt.d(I, {
    AbortException: () => Pt,
    AnnotationEditorLayer: () => xt,
    AnnotationEditorParamsType: () => O,
    AnnotationEditorType: () => L,
    AnnotationEditorUIManager: () => kt,
    AnnotationLayer: () => $n,
    AnnotationMode: () => Ct,
    ColorPicker: () => mt,
    DOMSVGFactory: () => Ve,
    DrawLayer: () => nt,
    FeatureTest: () => at,
    GlobalWorkerOptions: () => Kt,
    ImageKind: () => ae,
    InvalidPDFException: () => Te,
    MissingPDFException: () => Qt,
    OPS: () => bt,
    OutputScale: () => Pe,
    PDFDataRangeTransport: () => Ds,
    PDFDateString: () => As,
    PDFWorker: () => J,
    PasswordResponses: () => qs,
    PermissionFlag: () => Xs,
    PixelsPerInch: () => $t,
    RenderingCancelledException: () => Ne,
    TextLayer: () => rt,
    TouchManager: () => ge,
    UnexpectedResponseException: () => oe,
    Util: () => C,
    VerbosityLevel: () => he,
    XfaLayer: () => Ns,
    build: () => yn,
    createValidAbsoluteUrl: () => Js,
    fetchData: () => fe,
    getDocument: () => dn,
    getFilenameFromUrl: () => oi,
    getPdfFilenameFromUrl: () => li,
    getXfaPageViewport: () => hi,
    isDataScheme: () => pe,
    isPdfFile: () => Oe,
    noContextMenu: () => At,
    normalizeUnicode: () => ni,
    setLayerDimensions: () => It,
    shadow: () => F,
    stopEvent: () => ft,
    version: () => _n
  });
  const st = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), ms = [
    1,
    0,
    0,
    1,
    0,
    0
  ], Ce = [
    1e-3,
    0,
    0,
    1e-3,
    0,
    0
  ], Vs = 1e7, _e = 1.35, ut = {
    ANY: 1,
    DISPLAY: 2,
    PRINT: 4,
    ANNOTATIONS_FORMS: 16,
    ANNOTATIONS_STORAGE: 32,
    ANNOTATIONS_DISABLE: 64,
    IS_EDITING: 128,
    OPLIST: 256
  }, Ct = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3
  }, Ws = "pdfjs_internal_editor_", L = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    HIGHLIGHT: 9,
    STAMP: 13,
    INK: 15
  }, O = {
    RESIZE: 1,
    CREATE: 2,
    FREETEXT_SIZE: 11,
    FREETEXT_COLOR: 12,
    FREETEXT_OPACITY: 13,
    INK_COLOR: 21,
    INK_THICKNESS: 22,
    INK_OPACITY: 23,
    HIGHLIGHT_COLOR: 31,
    HIGHLIGHT_DEFAULT_COLOR: 32,
    HIGHLIGHT_THICKNESS: 33,
    HIGHLIGHT_FREE: 34,
    HIGHLIGHT_SHOW_ALL: 35,
    DRAW_STEP: 41
  }, Xs = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048
  }, tt = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4
  }, ae = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
  }, K = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    WIDGET: 20
  }, zt = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5
  }, he = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5
  }, bt = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91,
    setStrokeTransparent: 92,
    setFillTransparent: 93
  }, qs = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
  };
  let ce = he.WARNINGS;
  function Ys(c) {
    Number.isInteger(c) && (ce = c);
  }
  function Ks() {
    return ce;
  }
  function de(c) {
    ce >= he.INFOS && console.log(`Info: ${c}`);
  }
  function D(c) {
    ce >= he.WARNINGS && console.log(`Warning: ${c}`);
  }
  function H(c) {
    throw new Error(c);
  }
  function X(c, t) {
    c || H(t);
  }
  function Qs(c) {
    switch (c == null ? void 0 : c.protocol) {
      case "http:":
      case "https:":
      case "ftp:":
      case "mailto:":
      case "tel:":
        return true;
      default:
        return false;
    }
  }
  function Js(c, t = null, e = null) {
    var _a9;
    if (!c) return null;
    try {
      if (e && typeof c == "string" && (e.addDefaultProtocol && c.startsWith("www.") && ((_a9 = c.match(/\./g)) == null ? void 0 : _a9.length) >= 2 && (c = `http://${c}`), e.tryConvertEncoding)) try {
        c = ii(c);
      } catch {
      }
      const s = t ? new URL(c, t) : new URL(c);
      if (Qs(s)) return s;
    } catch {
    }
    return null;
  }
  function F(c, t, e, s = false) {
    return Object.defineProperty(c, t, {
      value: e,
      enumerable: !s,
      configurable: true,
      writable: false
    }), e;
  }
  const Rt = (function() {
    function t(e, s) {
      this.message = e, this.name = s;
    }
    return t.prototype = new Error(), t.constructor = t, t;
  })();
  class Qe extends Rt {
    constructor(t, e) {
      super(t, "PasswordException"), this.code = e;
    }
  }
  class ye extends Rt {
    constructor(t, e) {
      super(t, "UnknownErrorException"), this.details = e;
    }
  }
  class Te extends Rt {
    constructor(t) {
      super(t, "InvalidPDFException");
    }
  }
  class Qt extends Rt {
    constructor(t) {
      super(t, "MissingPDFException");
    }
  }
  class oe extends Rt {
    constructor(t, e) {
      super(t, "UnexpectedResponseException"), this.status = e;
    }
  }
  class Zs extends Rt {
    constructor(t) {
      super(t, "FormatError");
    }
  }
  class Pt extends Rt {
    constructor(t) {
      super(t, "AbortException");
    }
  }
  function bs(c) {
    (typeof c != "object" || (c == null ? void 0 : c.length) === void 0) && H("Invalid argument for bytesToString");
    const t = c.length, e = 8192;
    if (t < e) return String.fromCharCode.apply(null, c);
    const s = [];
    for (let i = 0; i < t; i += e) {
      const n = Math.min(i + e, t), r = c.subarray(i, n);
      s.push(String.fromCharCode.apply(null, r));
    }
    return s.join("");
  }
  function ue(c) {
    typeof c != "string" && H("Invalid argument for stringToBytes");
    const t = c.length, e = new Uint8Array(t);
    for (let s = 0; s < t; ++s) e[s] = c.charCodeAt(s) & 255;
    return e;
  }
  function ti(c) {
    return String.fromCharCode(c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, c & 255);
  }
  function De(c) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const [e, s] of c) t[e] = s;
    return t;
  }
  function ei() {
    const c = new Uint8Array(4);
    return c[0] = 1, new Uint32Array(c.buffer, 0, 1)[0] === 1;
  }
  function si() {
    try {
      return new Function(""), true;
    } catch {
      return false;
    }
  }
  class at {
    static get isLittleEndian() {
      return F(this, "isLittleEndian", ei());
    }
    static get isEvalSupported() {
      return F(this, "isEvalSupported", si());
    }
    static get isOffscreenCanvasSupported() {
      return F(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
    }
    static get isImageDecoderSupported() {
      return F(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
    }
    static get platform() {
      return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? F(this, "platform", {
        isMac: navigator.platform.includes("Mac"),
        isWindows: navigator.platform.includes("Win"),
        isFirefox: typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && navigator.userAgent.includes("Firefox")
      }) : F(this, "platform", {
        isMac: false,
        isWindows: false,
        isFirefox: false
      });
    }
    static get isCSSRoundSupported() {
      var _a9, _b6;
      return F(this, "isCSSRoundSupported", (_b6 = (_a9 = globalThis.CSS) == null ? void 0 : _a9.supports) == null ? void 0 : _b6.call(_a9, "width: round(1.5px, 1px)"));
    }
  }
  const ve = Array.from(Array(256).keys(), (c) => c.toString(16).padStart(2, "0"));
  class C {
    static makeHexColor(t, e, s) {
      return `#${ve[t]}${ve[e]}${ve[s]}`;
    }
    static scaleMinMax(t, e) {
      let s;
      t[0] ? (t[0] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[0], e[2] *= t[0], t[3] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[3], e[3] *= t[3]) : (s = e[0], e[0] = e[1], e[1] = s, s = e[2], e[2] = e[3], e[3] = s, t[1] < 0 && (s = e[1], e[1] = e[3], e[3] = s), e[1] *= t[1], e[3] *= t[1], t[2] < 0 && (s = e[0], e[0] = e[2], e[2] = s), e[0] *= t[2], e[2] *= t[2]), e[0] += t[4], e[1] += t[5], e[2] += t[4], e[3] += t[5];
    }
    static transform(t, e) {
      return [
        t[0] * e[0] + t[2] * e[1],
        t[1] * e[0] + t[3] * e[1],
        t[0] * e[2] + t[2] * e[3],
        t[1] * e[2] + t[3] * e[3],
        t[0] * e[4] + t[2] * e[5] + t[4],
        t[1] * e[4] + t[3] * e[5] + t[5]
      ];
    }
    static applyTransform(t, e) {
      const s = t[0] * e[0] + t[1] * e[2] + e[4], i = t[0] * e[1] + t[1] * e[3] + e[5];
      return [
        s,
        i
      ];
    }
    static applyInverseTransform(t, e) {
      const s = e[0] * e[3] - e[1] * e[2], i = (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / s, n = (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / s;
      return [
        i,
        n
      ];
    }
    static getAxialAlignedBoundingBox(t, e) {
      const s = this.applyTransform(t, e), i = this.applyTransform(t.slice(2, 4), e), n = this.applyTransform([
        t[0],
        t[3]
      ], e), r = this.applyTransform([
        t[2],
        t[1]
      ], e);
      return [
        Math.min(s[0], i[0], n[0], r[0]),
        Math.min(s[1], i[1], n[1], r[1]),
        Math.max(s[0], i[0], n[0], r[0]),
        Math.max(s[1], i[1], n[1], r[1])
      ];
    }
    static inverseTransform(t) {
      const e = t[0] * t[3] - t[1] * t[2];
      return [
        t[3] / e,
        -t[1] / e,
        -t[2] / e,
        t[0] / e,
        (t[2] * t[5] - t[4] * t[3]) / e,
        (t[4] * t[1] - t[5] * t[0]) / e
      ];
    }
    static singularValueDecompose2dScale(t) {
      const e = [
        t[0],
        t[2],
        t[1],
        t[3]
      ], s = t[0] * e[0] + t[1] * e[2], i = t[0] * e[1] + t[1] * e[3], n = t[2] * e[0] + t[3] * e[2], r = t[2] * e[1] + t[3] * e[3], a = (s + r) / 2, o = Math.sqrt((s + r) ** 2 - 4 * (s * r - n * i)) / 2, l = a + o || 1, h = a - o || 1;
      return [
        Math.sqrt(l),
        Math.sqrt(h)
      ];
    }
    static normalizeRect(t) {
      const e = t.slice(0);
      return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
    }
    static intersect(t, e) {
      const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
      if (s > i) return null;
      const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), r = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
      return n > r ? null : [
        s,
        n,
        i,
        r
      ];
    }
    static bezierBoundingBox(t, e, s, i, n, r, a, o, l) {
      return l ? (l[0] = Math.min(l[0], t, a), l[1] = Math.min(l[1], e, o), l[2] = Math.max(l[2], t, a), l[3] = Math.max(l[3], e, o)) : l = [
        Math.min(t, a),
        Math.min(e, o),
        Math.max(t, a),
        Math.max(e, o)
      ], __privateMethod(this, _C_static, e_fn).call(this, t, s, n, a, e, i, r, o, 3 * (-t + 3 * (s - n) + a), 6 * (t - 2 * s + n), 3 * (s - t), l), __privateMethod(this, _C_static, e_fn).call(this, t, s, n, a, e, i, r, o, 3 * (-e + 3 * (i - r) + o), 6 * (e - 2 * i + r), 3 * (i - e), l), l;
    }
  }
  _C_static = new WeakSet();
  t_fn = function(t, e, s, i, n, r, a, o, l, h) {
    if (l <= 0 || l >= 1) return;
    const d = 1 - l, u = l * l, f = u * l, p = d * (d * (d * t + 3 * l * e) + 3 * u * s) + f * i, g = d * (d * (d * n + 3 * l * r) + 3 * u * a) + f * o;
    h[0] = Math.min(h[0], p), h[1] = Math.min(h[1], g), h[2] = Math.max(h[2], p), h[3] = Math.max(h[3], g);
  };
  e_fn = function(t, e, s, i, n, r, a, o, l, h, d, u) {
    if (Math.abs(l) < 1e-12) {
      Math.abs(h) >= 1e-12 && __privateMethod(this, _C_static, t_fn).call(this, t, e, s, i, n, r, a, o, -d / h, u);
      return;
    }
    const f = h ** 2 - 4 * d * l;
    if (f < 0) return;
    const p = Math.sqrt(f), g = 2 * l;
    __privateMethod(this, _C_static, t_fn).call(this, t, e, s, i, n, r, a, o, (-h + p) / g, u), __privateMethod(this, _C_static, t_fn).call(this, t, e, s, i, n, r, a, o, (-h - p) / g, u);
  };
  __privateAdd(C, _C_static);
  function ii(c) {
    return decodeURIComponent(escape(c));
  }
  let we = null, Je = null;
  function ni(c) {
    return we || (we = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Je = /* @__PURE__ */ new Map([
      [
        "\uFB05",
        "\u017Ft"
      ]
    ])), c.replaceAll(we, (t, e, s) => e ? e.normalize("NFKC") : Je.get(s));
  }
  function ri() {
    if (typeof crypto.randomUUID == "function") return crypto.randomUUID();
    const c = new Uint8Array(32);
    return crypto.getRandomValues(c), bs(c);
  }
  const Fe = "pdfjs_internal_id_";
  function ai(c) {
    return Uint8Array.prototype.toBase64 ? c.toBase64() : btoa(bs(c));
  }
  typeof Promise.try != "function" && (Promise.try = function(c, ...t) {
    return new Promise((e) => {
      e(c(...t));
    });
  });
  const Et = "http://www.w3.org/2000/svg";
  const _$t = class _$t {
  };
  __publicField(_$t, "CSS", 96);
  __publicField(_$t, "PDF", 72);
  __publicField(_$t, "PDF_TO_CSS_UNITS", _$t.CSS / _$t.PDF);
  let $t = _$t;
  async function fe(c, t = "text") {
    if (Wt(c, document.baseURI)) {
      const e = await fetch(c);
      if (!e.ok) throw new Error(e.statusText);
      switch (t) {
        case "arraybuffer":
          return e.arrayBuffer();
        case "blob":
          return e.blob();
        case "json":
          return e.json();
      }
      return e.text();
    }
    return new Promise((e, s) => {
      const i = new XMLHttpRequest();
      i.open("GET", c, true), i.responseType = t, i.onreadystatechange = () => {
        if (i.readyState === XMLHttpRequest.DONE) {
          if (i.status === 200 || i.status === 0) {
            switch (t) {
              case "arraybuffer":
              case "blob":
              case "json":
                e(i.response);
                return;
            }
            e(i.responseText);
            return;
          }
          s(new Error(i.statusText));
        }
      }, i.send(null);
    });
  }
  class Zt {
    constructor({ viewBox: t, userUnit: e, scale: s, rotation: i, offsetX: n = 0, offsetY: r = 0, dontFlip: a = false }) {
      this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = n, this.offsetY = r, s *= e;
      const o = (t[2] + t[0]) / 2, l = (t[3] + t[1]) / 2;
      let h, d, u, f;
      switch (i %= 360, i < 0 && (i += 360), i) {
        case 180:
          h = -1, d = 0, u = 0, f = 1;
          break;
        case 90:
          h = 0, d = 1, u = 1, f = 0;
          break;
        case 270:
          h = 0, d = -1, u = -1, f = 0;
          break;
        case 0:
          h = 1, d = 0, u = 0, f = -1;
          break;
        default:
          throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
      }
      a && (u = -u, f = -f);
      let p, g, b, m;
      h === 0 ? (p = Math.abs(l - t[1]) * s + n, g = Math.abs(o - t[0]) * s + r, b = (t[3] - t[1]) * s, m = (t[2] - t[0]) * s) : (p = Math.abs(o - t[0]) * s + n, g = Math.abs(l - t[1]) * s + r, b = (t[2] - t[0]) * s, m = (t[3] - t[1]) * s), this.transform = [
        h * s,
        d * s,
        u * s,
        f * s,
        p - h * s * o - u * s * l,
        g - d * s * o - f * s * l
      ], this.width = b, this.height = m;
    }
    get rawDims() {
      const { userUnit: t, viewBox: e } = this, s = e.map((i) => i * t);
      return F(this, "rawDims", {
        pageWidth: s[2] - s[0],
        pageHeight: s[3] - s[1],
        pageX: s[0],
        pageY: s[1]
      });
    }
    clone({ scale: t = this.scale, rotation: e = this.rotation, offsetX: s = this.offsetX, offsetY: i = this.offsetY, dontFlip: n = false } = {}) {
      return new Zt({
        viewBox: this.viewBox.slice(),
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: s,
        offsetY: i,
        dontFlip: n
      });
    }
    convertToViewportPoint(t, e) {
      return C.applyTransform([
        t,
        e
      ], this.transform);
    }
    convertToViewportRectangle(t) {
      const e = C.applyTransform([
        t[0],
        t[1]
      ], this.transform), s = C.applyTransform([
        t[2],
        t[3]
      ], this.transform);
      return [
        e[0],
        e[1],
        s[0],
        s[1]
      ];
    }
    convertToPdfPoint(t, e) {
      return C.applyInverseTransform([
        t,
        e
      ], this.transform);
    }
  }
  class Ne extends Rt {
    constructor(t, e = 0) {
      super(t, "RenderingCancelledException"), this.extraDelay = e;
    }
  }
  function pe(c) {
    const t = c.length;
    let e = 0;
    for (; e < t && c[e].trim() === ""; ) e++;
    return c.substring(e, e + 5).toLowerCase() === "data:";
  }
  function Oe(c) {
    return typeof c == "string" && /\.pdf$/i.test(c);
  }
  function oi(c) {
    return [c] = c.split(/[#?]/, 1), c.substring(c.lastIndexOf("/") + 1);
  }
  function li(c, t = "document.pdf") {
    if (typeof c != "string") return t;
    if (pe(c)) return D('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
    const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, s = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, i = e.exec(c);
    let n = s.exec(i[1]) || s.exec(i[2]) || s.exec(i[3]);
    if (n && (n = n[0], n.includes("%"))) try {
      n = s.exec(decodeURIComponent(n))[0];
    } catch {
    }
    return n || t;
  }
  class Ze {
    constructor() {
      __publicField(this, "started", /* @__PURE__ */ Object.create(null));
      __publicField(this, "times", []);
    }
    time(t) {
      t in this.started && D(`Timer is already running for ${t}`), this.started[t] = Date.now();
    }
    timeEnd(t) {
      t in this.started || D(`Timer has not been started for ${t}`), this.times.push({
        name: t,
        start: this.started[t],
        end: Date.now()
      }), delete this.started[t];
    }
    toString() {
      const t = [];
      let e = 0;
      for (const { name: s } of this.times) e = Math.max(s.length, e);
      for (const { name: s, start: i, end: n } of this.times) t.push(`${s.padEnd(e)} ${n - i}ms
`);
      return t.join("");
    }
  }
  function Wt(c, t) {
    try {
      const { protocol: e } = t ? new URL(c, t) : new URL(c);
      return e === "http:" || e === "https:";
    } catch {
      return false;
    }
  }
  function At(c) {
    c.preventDefault();
  }
  function ft(c) {
    c.preventDefault(), c.stopPropagation();
  }
  class As {
    static toDateObject(t) {
      if (!t || typeof t != "string") return null;
      __privateGet(this, _t) || __privateSet(this, _t, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
      const e = __privateGet(this, _t).exec(t);
      if (!e) return null;
      const s = parseInt(e[1], 10);
      let i = parseInt(e[2], 10);
      i = i >= 1 && i <= 12 ? i - 1 : 0;
      let n = parseInt(e[3], 10);
      n = n >= 1 && n <= 31 ? n : 1;
      let r = parseInt(e[4], 10);
      r = r >= 0 && r <= 23 ? r : 0;
      let a = parseInt(e[5], 10);
      a = a >= 0 && a <= 59 ? a : 0;
      let o = parseInt(e[6], 10);
      o = o >= 0 && o <= 59 ? o : 0;
      const l = e[7] || "Z";
      let h = parseInt(e[8], 10);
      h = h >= 0 && h <= 23 ? h : 0;
      let d = parseInt(e[9], 10) || 0;
      return d = d >= 0 && d <= 59 ? d : 0, l === "-" ? (r += h, a += d) : l === "+" && (r -= h, a -= d), new Date(Date.UTC(s, i, n, r, a, o));
    }
  }
  _t = new WeakMap();
  __privateAdd(As, _t);
  function hi(c, { scale: t = 1, rotation: e = 0 }) {
    const { width: s, height: i } = c.attributes.style, n = [
      0,
      0,
      parseInt(s),
      parseInt(i)
    ];
    return new Zt({
      viewBox: n,
      userUnit: 1,
      scale: t,
      rotation: e
    });
  }
  function Be(c) {
    if (c.startsWith("#")) {
      const t = parseInt(c.slice(1), 16);
      return [
        (t & 16711680) >> 16,
        (t & 65280) >> 8,
        t & 255
      ];
    }
    return c.startsWith("rgb(") ? c.slice(4, -1).split(",").map((t) => parseInt(t)) : c.startsWith("rgba(") ? c.slice(5, -1).split(",").map((t) => parseInt(t)).slice(0, 3) : (D(`Not a valid color format: "${c}"`), [
      0,
      0,
      0
    ]);
  }
  function ci(c) {
    const t = document.createElement("span");
    t.style.visibility = "hidden", document.body.append(t);
    for (const e of c.keys()) {
      t.style.color = e;
      const s = window.getComputedStyle(t).color;
      c.set(e, Be(s));
    }
    t.remove();
  }
  function U(c) {
    const { a: t, b: e, c: s, d: i, e: n, f: r } = c.getTransform();
    return [
      t,
      e,
      s,
      i,
      n,
      r
    ];
  }
  function yt(c) {
    const { a: t, b: e, c: s, d: i, e: n, f: r } = c.getTransform().invertSelf();
    return [
      t,
      e,
      s,
      i,
      n,
      r
    ];
  }
  function It(c, t, e = false, s = true) {
    if (t instanceof Zt) {
      const { pageWidth: i, pageHeight: n } = t.rawDims, { style: r } = c, a = at.isCSSRoundSupported, o = `var(--scale-factor) * ${i}px`, l = `var(--scale-factor) * ${n}px`, h = a ? `round(down, ${o}, var(--scale-round-x, 1px))` : `calc(${o})`, d = a ? `round(down, ${l}, var(--scale-round-y, 1px))` : `calc(${l})`;
      !e || t.rotation % 180 === 0 ? (r.width = h, r.height = d) : (r.width = d, r.height = h);
    }
    s && c.setAttribute("data-main-rotation", t.rotation);
  }
  class Pe {
    constructor() {
      const t = window.devicePixelRatio || 1;
      this.sx = t, this.sy = t;
    }
    get scaled() {
      return this.sx !== 1 || this.sy !== 1;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
  }
  const _Yt = class _Yt {
    constructor(t) {
      __privateAdd(this, _Yt_instances);
      __privateAdd(this, _t2, null);
      __privateAdd(this, _e2, null);
      __privateAdd(this, _s2);
      __privateAdd(this, _i2, null);
      __privateAdd(this, _r2, null);
      __privateSet(this, _s2, t), __privateGet(_Yt, _n2) || __privateSet(_Yt, _n2, Object.freeze({
        freetext: "pdfjs-editor-remove-freetext-button",
        highlight: "pdfjs-editor-remove-highlight-button",
        ink: "pdfjs-editor-remove-ink-button",
        stamp: "pdfjs-editor-remove-stamp-button"
      }));
    }
    render() {
      const t = __privateSet(this, _t2, document.createElement("div"));
      t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
      const e = __privateGet(this, _s2)._uiManager._signal;
      t.addEventListener("contextmenu", At, {
        signal: e
      }), t.addEventListener("pointerdown", __privateMethod(_Yt, _Yt_static, l_fn), {
        signal: e
      });
      const s = __privateSet(this, _i2, document.createElement("div"));
      s.className = "buttons", t.append(s);
      const i = __privateGet(this, _s2).toolbarPosition;
      if (i) {
        const { style: n } = t, r = __privateGet(this, _s2)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
        n.insetInlineEnd = `${100 * r}%`, n.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
      }
      return __privateMethod(this, _Yt_instances, u_fn).call(this), t;
    }
    get div() {
      return __privateGet(this, _t2);
    }
    hide() {
      var _a9;
      __privateGet(this, _t2).classList.add("hidden"), (_a9 = __privateGet(this, _e2)) == null ? void 0 : _a9.hideDropdown();
    }
    show() {
      var _a9;
      __privateGet(this, _t2).classList.remove("hidden"), (_a9 = __privateGet(this, _r2)) == null ? void 0 : _a9.shown();
    }
    async addAltText(t) {
      const e = await t.render();
      __privateMethod(this, _Yt_instances, h_fn).call(this, e), __privateGet(this, _i2).prepend(e, __privateGet(this, _Yt_instances, d_get)), __privateSet(this, _r2, t);
    }
    addColorPicker(t) {
      __privateSet(this, _e2, t);
      const e = t.renderButton();
      __privateMethod(this, _Yt_instances, h_fn).call(this, e), __privateGet(this, _i2).prepend(e, __privateGet(this, _Yt_instances, d_get));
    }
    remove() {
      var _a9;
      __privateGet(this, _t2).remove(), (_a9 = __privateGet(this, _e2)) == null ? void 0 : _a9.destroy(), __privateSet(this, _e2, null);
    }
  };
  _t2 = new WeakMap();
  _e2 = new WeakMap();
  _s2 = new WeakMap();
  _i2 = new WeakMap();
  _r2 = new WeakMap();
  _n2 = new WeakMap();
  _Yt_static = new WeakSet();
  l_fn = function(t) {
    t.stopPropagation();
  };
  _Yt_instances = new WeakSet();
  o_fn = function(t) {
    __privateGet(this, _s2)._focusEventsAllowed = false, ft(t);
  };
  c_fn = function(t) {
    __privateGet(this, _s2)._focusEventsAllowed = true, ft(t);
  };
  h_fn = function(t) {
    const e = __privateGet(this, _s2)._uiManager._signal;
    t.addEventListener("focusin", __privateMethod(this, _Yt_instances, o_fn).bind(this), {
      capture: true,
      signal: e
    }), t.addEventListener("focusout", __privateMethod(this, _Yt_instances, c_fn).bind(this), {
      capture: true,
      signal: e
    }), t.addEventListener("contextmenu", At, {
      signal: e
    });
  };
  u_fn = function() {
    const { editorType: t, _uiManager: e } = __privateGet(this, _s2), s = document.createElement("button");
    s.className = "delete", s.tabIndex = 0, s.setAttribute("data-l10n-id", __privateGet(_Yt, _n2)[t]), __privateMethod(this, _Yt_instances, h_fn).call(this, s), s.addEventListener("click", (i) => {
      e.delete();
    }, {
      signal: e._signal
    }), __privateGet(this, _i2).append(s);
  };
  d_get = function() {
    const t = document.createElement("div");
    return t.className = "divider", t;
  };
  __privateAdd(_Yt, _Yt_static);
  __privateAdd(_Yt, _n2, null);
  let Yt = _Yt;
  class di {
    constructor(t) {
      __privateAdd(this, _di_instances);
      __privateAdd(this, _t3, null);
      __privateAdd(this, _e3, null);
      __privateAdd(this, _s3);
      __privateSet(this, _s3, t);
    }
    show(t, e, s) {
      const [i, n] = __privateMethod(this, _di_instances, r_fn).call(this, e, s), { style: r } = __privateGet(this, _e3) || __privateSet(this, _e3, __privateMethod(this, _di_instances, i_fn).call(this));
      t.append(__privateGet(this, _e3)), r.insetInlineEnd = `${100 * i}%`, r.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
      __privateGet(this, _e3).remove();
    }
  }
  _t3 = new WeakMap();
  _e3 = new WeakMap();
  _s3 = new WeakMap();
  _di_instances = new WeakSet();
  i_fn = function() {
    const t = __privateSet(this, _e3, document.createElement("div"));
    t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.addEventListener("contextmenu", At, {
      signal: __privateGet(this, _s3)._signal
    });
    const e = __privateSet(this, _t3, document.createElement("div"));
    return e.className = "buttons", t.append(e), __privateMethod(this, _di_instances, n_fn).call(this), t;
  };
  r_fn = function(t, e) {
    let s = 0, i = 0;
    for (const n of t) {
      const r = n.y + n.height;
      if (r < s) continue;
      const a = n.x + (e ? n.width : 0);
      if (r > s) {
        i = a, s = r;
        continue;
      }
      e ? a > i && (i = a) : a < i && (i = a);
    }
    return [
      e ? 1 - i : i,
      s
    ];
  };
  n_fn = function() {
    const t = document.createElement("button");
    t.className = "highlightButton", t.tabIndex = 0, t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
    const e = document.createElement("span");
    t.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
    const s = __privateGet(this, _s3)._signal;
    t.addEventListener("contextmenu", At, {
      signal: s
    }), t.addEventListener("click", () => {
      __privateGet(this, _s3).highlightSelection("floating_button");
    }, {
      signal: s
    }), __privateGet(this, _t3).append(t);
  };
  function le(c, t, e) {
    for (const s of e) t.addEventListener(s, c[s].bind(c));
  }
  class ui {
    constructor() {
      __privateAdd(this, _t4, 0);
    }
    get id() {
      return `${Ws}${__privateWrapper(this, _t4)._++}`;
    }
  }
  _t4 = new WeakMap();
  const _He = class _He {
    constructor() {
      __privateAdd(this, _He_instances);
      __privateAdd(this, _t5, ri());
      __privateAdd(this, _e4, 0);
      __privateAdd(this, _s4, null);
    }
    static get _isSVGFittingCanvas() {
      const t = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', s = new OffscreenCanvas(1, 3).getContext("2d", {
        willReadFrequently: true
      }), i = new Image();
      i.src = t;
      const n = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
      return F(this, "_isSVGFittingCanvas", n);
    }
    async getFromFile(t) {
      const { lastModified: e, name: s, size: i, type: n } = t;
      return __privateMethod(this, _He_instances, i_fn2).call(this, `${e}_${s}_${i}_${n}`, t);
    }
    async getFromUrl(t) {
      return __privateMethod(this, _He_instances, i_fn2).call(this, t, t);
    }
    async getFromBlob(t, e) {
      const s = await e;
      return __privateMethod(this, _He_instances, i_fn2).call(this, t, s);
    }
    async getFromId(t) {
      __privateGet(this, _s4) || __privateSet(this, _s4, /* @__PURE__ */ new Map());
      const e = __privateGet(this, _s4).get(t);
      if (!e) return null;
      if (e.bitmap) return e.refCounter += 1, e;
      if (e.file) return this.getFromFile(e.file);
      if (e.blobPromise) {
        const { blobPromise: s } = e;
        return delete e.blobPromise, this.getFromBlob(e.id, s);
      }
      return this.getFromUrl(e.url);
    }
    getFromCanvas(t, e) {
      __privateGet(this, _s4) || __privateSet(this, _s4, /* @__PURE__ */ new Map());
      let s = __privateGet(this, _s4).get(t);
      if (s == null ? void 0 : s.bitmap) return s.refCounter += 1, s;
      const i = new OffscreenCanvas(e.width, e.height);
      return i.getContext("2d").drawImage(e, 0, 0), s = {
        bitmap: i.transferToImageBitmap(),
        id: `image_${__privateGet(this, _t5)}_${__privateWrapper(this, _e4)._++}`,
        refCounter: 1,
        isSvg: false
      }, __privateGet(this, _s4).set(t, s), __privateGet(this, _s4).set(s.id, s), s;
    }
    getSvgUrl(t) {
      const e = __privateGet(this, _s4).get(t);
      return (e == null ? void 0 : e.isSvg) ? e.svgUrl : null;
    }
    deleteId(t) {
      var _a9;
      __privateGet(this, _s4) || __privateSet(this, _s4, /* @__PURE__ */ new Map());
      const e = __privateGet(this, _s4).get(t);
      if (!e || (e.refCounter -= 1, e.refCounter !== 0)) return;
      const { bitmap: s } = e;
      if (!e.url && !e.file) {
        const i = new OffscreenCanvas(s.width, s.height);
        i.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = i.convertToBlob();
      }
      (_a9 = s.close) == null ? void 0 : _a9.call(s), e.bitmap = null;
    }
    isValidId(t) {
      return t.startsWith(`image_${__privateGet(this, _t5)}_`);
    }
  };
  _t5 = new WeakMap();
  _e4 = new WeakMap();
  _s4 = new WeakMap();
  _He_instances = new WeakSet();
  i_fn2 = async function(t, e) {
    __privateGet(this, _s4) || __privateSet(this, _s4, /* @__PURE__ */ new Map());
    let s = __privateGet(this, _s4).get(t);
    if (s === null) return null;
    if (s == null ? void 0 : s.bitmap) return s.refCounter += 1, s;
    try {
      s || (s = {
        bitmap: null,
        id: `image_${__privateGet(this, _t5)}_${__privateWrapper(this, _e4)._++}`,
        refCounter: 0,
        isSvg: false
      });
      let i;
      if (typeof e == "string" ? (s.url = e, i = await fe(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
        const n = _He._isSVGFittingCanvas, r = new FileReader(), a = new Image(), o = new Promise((l, h) => {
          a.onload = () => {
            s.bitmap = a, s.isSvg = true, l();
          }, r.onload = async () => {
            const d = s.svgUrl = r.result;
            a.src = await n ? `${d}#svgView(preserveAspectRatio(none))` : d;
          }, a.onerror = r.onerror = h;
        });
        r.readAsDataURL(i), await o;
      } else s.bitmap = await createImageBitmap(i);
      s.refCounter = 1;
    } catch (i) {
      D(i), s = null;
    }
    return __privateGet(this, _s4).set(t, s), s && __privateGet(this, _s4).set(s.id, s), s;
  };
  let He = _He;
  class fi {
    constructor(t = 128) {
      __privateAdd(this, _t6, []);
      __privateAdd(this, _e5, false);
      __privateAdd(this, _s5);
      __privateAdd(this, _i3, -1);
      __privateSet(this, _s5, t);
    }
    add({ cmd: t, undo: e, post: s, mustExec: i, type: n = NaN, overwriteIfSameType: r = false, keepUndo: a = false }) {
      if (i && t(), __privateGet(this, _e5)) return;
      const o = {
        cmd: t,
        undo: e,
        post: s,
        type: n
      };
      if (__privateGet(this, _i3) === -1) {
        __privateGet(this, _t6).length > 0 && (__privateGet(this, _t6).length = 0), __privateSet(this, _i3, 0), __privateGet(this, _t6).push(o);
        return;
      }
      if (r && __privateGet(this, _t6)[__privateGet(this, _i3)].type === n) {
        a && (o.undo = __privateGet(this, _t6)[__privateGet(this, _i3)].undo), __privateGet(this, _t6)[__privateGet(this, _i3)] = o;
        return;
      }
      const l = __privateGet(this, _i3) + 1;
      l === __privateGet(this, _s5) ? __privateGet(this, _t6).splice(0, 1) : (__privateSet(this, _i3, l), l < __privateGet(this, _t6).length && __privateGet(this, _t6).splice(l)), __privateGet(this, _t6).push(o);
    }
    undo() {
      if (__privateGet(this, _i3) === -1) return;
      __privateSet(this, _e5, true);
      const { undo: t, post: e } = __privateGet(this, _t6)[__privateGet(this, _i3)];
      t(), e == null ? void 0 : e(), __privateSet(this, _e5, false), __privateSet(this, _i3, __privateGet(this, _i3) - 1);
    }
    redo() {
      if (__privateGet(this, _i3) < __privateGet(this, _t6).length - 1) {
        __privateSet(this, _i3, __privateGet(this, _i3) + 1), __privateSet(this, _e5, true);
        const { cmd: t, post: e } = __privateGet(this, _t6)[__privateGet(this, _i3)];
        t(), e == null ? void 0 : e(), __privateSet(this, _e5, false);
      }
    }
    hasSomethingToUndo() {
      return __privateGet(this, _i3) !== -1;
    }
    hasSomethingToRedo() {
      return __privateGet(this, _i3) < __privateGet(this, _t6).length - 1;
    }
    cleanType(t) {
      if (__privateGet(this, _i3) !== -1) {
        for (let e = __privateGet(this, _i3); e >= 0; e--) if (__privateGet(this, _t6)[e].type !== t) {
          __privateGet(this, _t6).splice(e + 1, __privateGet(this, _i3) - e), __privateSet(this, _i3, e);
          return;
        }
        __privateGet(this, _t6).length = 0, __privateSet(this, _i3, -1);
      }
    }
    destroy() {
      __privateSet(this, _t6, null);
    }
  }
  _t6 = new WeakMap();
  _e5 = new WeakMap();
  _s5 = new WeakMap();
  _i3 = new WeakMap();
  class te {
    constructor(t) {
      __privateAdd(this, _te_instances);
      this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
      const { isMac: e } = at.platform;
      for (const [s, i, n = {}] of t) for (const r of s) {
        const a = r.startsWith("mac+");
        e && a ? (this.callbacks.set(r.slice(4), {
          callback: i,
          options: n
        }), this.allKeys.add(r.split("+").at(-1))) : !e && !a && (this.callbacks.set(r, {
          callback: i,
          options: n
        }), this.allKeys.add(r.split("+").at(-1)));
      }
    }
    exec(t, e) {
      if (!this.allKeys.has(e.key)) return;
      const s = this.callbacks.get(__privateMethod(this, _te_instances, t_fn2).call(this, e));
      if (!s) return;
      const { callback: i, options: { bubbles: n = false, args: r = [], checker: a = null } } = s;
      a && !a(t, e) || (i.bind(t, ...r, e)(), n || ft(e));
    }
  }
  _te_instances = new WeakSet();
  t_fn2 = function(t) {
    t.altKey && this.buffer.push("alt"), t.ctrlKey && this.buffer.push("ctrl"), t.metaKey && this.buffer.push("meta"), t.shiftKey && this.buffer.push("shift"), this.buffer.push(t.key);
    const e = this.buffer.join("+");
    return this.buffer.length = 0, e;
  };
  const _$e = class _$e {
    get _colors() {
      const t = /* @__PURE__ */ new Map([
        [
          "CanvasText",
          null
        ],
        [
          "Canvas",
          null
        ]
      ]);
      return ci(t), F(this, "_colors", t);
    }
    convert(t) {
      const e = Be(t);
      if (!window.matchMedia("(forced-colors: active)").matches) return e;
      for (const [s, i] of this._colors) if (i.every((n, r) => n === e[r])) return _$e._colorsMapping.get(s);
      return e;
    }
    getHexCode(t) {
      const e = this._colors.get(t);
      return e ? C.makeHexColor(...e) : t;
    }
  };
  __publicField(_$e, "_colorsMapping", /* @__PURE__ */ new Map([
    [
      "CanvasText",
      [
        0,
        0,
        0
      ]
    ],
    [
      "Canvas",
      [
        255,
        255,
        255
      ]
    ]
  ]));
  let $e = _$e;
  const _kt = class _kt {
    constructor(t, e, s, i, n, r, a, o, l, h, d, u, f) {
      __privateAdd(this, _kt_instances);
      __privateAdd(this, _t7, new AbortController());
      __privateAdd(this, _e6, null);
      __privateAdd(this, _s6, /* @__PURE__ */ new Map());
      __privateAdd(this, _i4, /* @__PURE__ */ new Map());
      __privateAdd(this, _r3, null);
      __privateAdd(this, _n3, null);
      __privateAdd(this, _l, null);
      __privateAdd(this, _o, new fi());
      __privateAdd(this, _c, null);
      __privateAdd(this, _h, null);
      __privateAdd(this, _u, 0);
      __privateAdd(this, _d, /* @__PURE__ */ new Set());
      __privateAdd(this, _f, null);
      __privateAdd(this, _a, null);
      __privateAdd(this, _p, /* @__PURE__ */ new Set());
      __publicField(this, "_editorUndoBar", null);
      __privateAdd(this, _m, false);
      __privateAdd(this, _g, false);
      __privateAdd(this, _b, false);
      __privateAdd(this, _y, null);
      __privateAdd(this, _A, null);
      __privateAdd(this, _v, null);
      __privateAdd(this, _S, null);
      __privateAdd(this, _x, false);
      __privateAdd(this, _T, null);
      __privateAdd(this, _k, new ui());
      __privateAdd(this, _w, false);
      __privateAdd(this, _P, false);
      __privateAdd(this, _C, null);
      __privateAdd(this, _M, null);
      __privateAdd(this, _D, null);
      __privateAdd(this, _N, null);
      __privateAdd(this, _E, L.NONE);
      __privateAdd(this, __, /* @__PURE__ */ new Set());
      __privateAdd(this, _L, null);
      __privateAdd(this, _G, null);
      __privateAdd(this, _z, null);
      __privateAdd(this, _U, {
        isEditing: false,
        isEmpty: true,
        hasSomethingToUndo: false,
        hasSomethingToRedo: false,
        hasSelectedEditor: false,
        hasSelectedText: false
      });
      __privateAdd(this, _O, [
        0,
        0
      ]);
      __privateAdd(this, _F, null);
      __privateAdd(this, _B, null);
      __privateAdd(this, _j, null);
      __privateAdd(this, _I, null);
      const p = this._signal = __privateGet(this, _t7).signal;
      __privateSet(this, _B, t), __privateSet(this, _j, e), __privateSet(this, _r3, s), this._eventBus = i, i._on("editingaction", this.onEditingAction.bind(this), {
        signal: p
      }), i._on("pagechanging", this.onPageChanging.bind(this), {
        signal: p
      }), i._on("scalechanging", this.onScaleChanging.bind(this), {
        signal: p
      }), i._on("rotationchanging", this.onRotationChanging.bind(this), {
        signal: p
      }), i._on("setpreference", this.onSetPreference.bind(this), {
        signal: p
      }), i._on("switchannotationeditorparams", (g) => this.updateParams(g.type, g.value), {
        signal: p
      }), __privateMethod(this, _kt_instances, et_fn).call(this), __privateMethod(this, _kt_instances, rt_fn).call(this), __privateMethod(this, _kt_instances, q_fn).call(this), __privateSet(this, _n3, n.annotationStorage), __privateSet(this, _y, n.filterFactory), __privateSet(this, _G, r), __privateSet(this, _S, a || null), __privateSet(this, _m, o), __privateSet(this, _g, l), __privateSet(this, _b, h), __privateSet(this, _N, d || null), this.viewParameters = {
        realScale: $t.PDF_TO_CSS_UNITS,
        rotation: 0
      }, this.isShiftKeyDown = false, this._editorUndoBar = u || null, this._supportsPinchToZoom = f !== false;
    }
    static get _keyboardManager() {
      const t = _kt.prototype, e = (r) => __privateGet(r, _B).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && r.hasSomethingToControl(), s = (r, { target: a }) => {
        if (a instanceof HTMLInputElement) {
          const { type: o } = a;
          return o !== "text" && o !== "number";
        }
        return true;
      }, i = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
      return F(this, "_keyboardManager", new te([
        [
          [
            "ctrl+a",
            "mac+meta+a"
          ],
          t.selectAll,
          {
            checker: s
          }
        ],
        [
          [
            "ctrl+z",
            "mac+meta+z"
          ],
          t.undo,
          {
            checker: s
          }
        ],
        [
          [
            "ctrl+y",
            "ctrl+shift+z",
            "mac+meta+shift+z",
            "ctrl+shift+Z",
            "mac+meta+shift+Z"
          ],
          t.redo,
          {
            checker: s
          }
        ],
        [
          [
            "Backspace",
            "alt+Backspace",
            "ctrl+Backspace",
            "shift+Backspace",
            "mac+Backspace",
            "mac+alt+Backspace",
            "mac+ctrl+Backspace",
            "Delete",
            "ctrl+Delete",
            "shift+Delete",
            "mac+Delete"
          ],
          t.delete,
          {
            checker: s
          }
        ],
        [
          [
            "Enter",
            "mac+Enter"
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && __privateGet(r, _B).contains(a) && !r.isEnterHandled
          }
        ],
        [
          [
            " ",
            "mac+ "
          ],
          t.addNewEditorFromKeyboard,
          {
            checker: (r, { target: a }) => !(a instanceof HTMLButtonElement) && __privateGet(r, _B).contains(document.activeElement)
          }
        ],
        [
          [
            "Escape",
            "mac+Escape"
          ],
          t.unselectAll
        ],
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t.translateSelectedEditors,
          {
            args: [
              -n,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t.translateSelectedEditors,
          {
            args: [
              n,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              -n
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              i
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t.translateSelectedEditors,
          {
            args: [
              0,
              n
            ],
            checker: e
          }
        ]
      ]));
    }
    destroy() {
      var _a9, _b6, _c15, _d10, _e39;
      (_a9 = __privateGet(this, _I)) == null ? void 0 : _a9.resolve(), __privateSet(this, _I, null), (_b6 = __privateGet(this, _t7)) == null ? void 0 : _b6.abort(), __privateSet(this, _t7, null), this._signal = null;
      for (const t of __privateGet(this, _i4).values()) t.destroy();
      __privateGet(this, _i4).clear(), __privateGet(this, _s6).clear(), __privateGet(this, _p).clear(), __privateSet(this, _e6, null), __privateGet(this, __).clear(), __privateGet(this, _o).destroy(), (_c15 = __privateGet(this, _r3)) == null ? void 0 : _c15.destroy(), (_d10 = __privateGet(this, _T)) == null ? void 0 : _d10.hide(), __privateSet(this, _T, null), __privateGet(this, _A) && (clearTimeout(__privateGet(this, _A)), __privateSet(this, _A, null)), __privateGet(this, _F) && (clearTimeout(__privateGet(this, _F)), __privateSet(this, _F, null)), (_e39 = this._editorUndoBar) == null ? void 0 : _e39.destroy();
    }
    combinedSignal(t) {
      return AbortSignal.any([
        this._signal,
        t.signal
      ]);
    }
    get mlManager() {
      return __privateGet(this, _N);
    }
    get useNewAltTextFlow() {
      return __privateGet(this, _g);
    }
    get useNewAltTextWhenAddingImage() {
      return __privateGet(this, _b);
    }
    get hcmFilter() {
      return F(this, "hcmFilter", __privateGet(this, _G) ? __privateGet(this, _y).addHCMFilter(__privateGet(this, _G).foreground, __privateGet(this, _G).background) : "none");
    }
    get direction() {
      return F(this, "direction", getComputedStyle(__privateGet(this, _B)).direction);
    }
    get highlightColors() {
      return F(this, "highlightColors", __privateGet(this, _S) ? new Map(__privateGet(this, _S).split(",").map((t) => t.split("=").map((e) => e.trim()))) : null);
    }
    get highlightColorNames() {
      return F(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
    }
    setCurrentDrawingSession(t) {
      t ? (this.unselectAll(), this.disableUserSelect(true)) : this.disableUserSelect(false), __privateSet(this, _h, t);
    }
    setMainHighlightColorPicker(t) {
      __privateSet(this, _D, t);
    }
    editAltText(t, e = false) {
      var _a9;
      (_a9 = __privateGet(this, _r3)) == null ? void 0 : _a9.editAltText(this, t, e);
    }
    switchToMode(t, e) {
      this._eventBus.on("annotationeditormodechanged", e, {
        once: true,
        signal: this._signal
      }), this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: t
      });
    }
    setPreference(t, e) {
      this._eventBus.dispatch("setpreference", {
        source: this,
        name: t,
        value: e
      });
    }
    onSetPreference({ name: t, value: e }) {
      switch (t) {
        case "enableNewAltTextWhenAddingImage":
          __privateSet(this, _b, e);
          break;
      }
    }
    onPageChanging({ pageNumber: t }) {
      __privateSet(this, _u, t - 1);
    }
    focusMainContainer() {
      __privateGet(this, _B).focus();
    }
    findParent(t, e) {
      for (const s of __privateGet(this, _i4).values()) {
        const { x: i, y: n, width: r, height: a } = s.div.getBoundingClientRect();
        if (t >= i && t <= i + r && e >= n && e <= n + a) return s;
      }
      return null;
    }
    disableUserSelect(t = false) {
      __privateGet(this, _j).classList.toggle("noUserSelect", t);
    }
    addShouldRescale(t) {
      __privateGet(this, _p).add(t);
    }
    removeShouldRescale(t) {
      __privateGet(this, _p).delete(t);
    }
    onScaleChanging({ scale: t }) {
      var _a9;
      this.commitOrRemove(), this.viewParameters.realScale = t * $t.PDF_TO_CSS_UNITS;
      for (const e of __privateGet(this, _p)) e.onScaleChanging();
      (_a9 = __privateGet(this, _h)) == null ? void 0 : _a9.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t }) {
      this.commitOrRemove(), this.viewParameters.rotation = t;
    }
    highlightSelection(t = "") {
      const e = document.getSelection();
      if (!e || e.isCollapsed) return;
      const { anchorNode: s, anchorOffset: i, focusNode: n, focusOffset: r } = e, a = e.toString(), l = __privateMethod(this, _kt_instances, H_fn).call(this, e).closest(".textLayer"), h = this.getSelectionBoxes(l);
      if (!h) return;
      e.empty();
      const d = __privateMethod(this, _kt_instances, X_fn).call(this, l), u = __privateGet(this, _E) === L.NONE, f = () => {
        d == null ? void 0 : d.createAndAddNewEditor({
          x: 0,
          y: 0
        }, false, {
          methodOfCreation: t,
          boxes: h,
          anchorNode: s,
          anchorOffset: i,
          focusNode: n,
          focusOffset: r,
          text: a
        }), u && this.showAllEditors("highlight", true, true);
      };
      if (u) {
        this.switchToMode(L.HIGHLIGHT, f);
        return;
      }
      f();
    }
    addToAnnotationStorage(t) {
      !t.isEmpty() && __privateGet(this, _n3) && !__privateGet(this, _n3).has(t.id) && __privateGet(this, _n3).setValue(t.id, t);
    }
    blur() {
      if (this.isShiftKeyDown = false, __privateGet(this, _x) && (__privateSet(this, _x, false), __privateMethod(this, _kt_instances, W_fn).call(this, "main_toolbar")), !this.hasSelection) return;
      const { activeElement: t } = document;
      for (const e of __privateGet(this, __)) if (e.div.contains(t)) {
        __privateSet(this, _M, [
          e,
          t
        ]), e._focusEventsAllowed = false;
        break;
      }
    }
    focus() {
      if (!__privateGet(this, _M)) return;
      const [t, e] = __privateGet(this, _M);
      __privateSet(this, _M, null), e.addEventListener("focusin", () => {
        t._focusEventsAllowed = true;
      }, {
        once: true,
        signal: this._signal
      }), e.focus();
    }
    addEditListeners() {
      __privateMethod(this, _kt_instances, q_fn).call(this), __privateMethod(this, _kt_instances, Y_fn).call(this);
    }
    removeEditListeners() {
      __privateMethod(this, _kt_instances, nt_fn).call(this), __privateMethod(this, _kt_instances, K_fn).call(this);
    }
    dragOver(t) {
      for (const { type: e } of t.dataTransfer.items) for (const s of __privateGet(this, _a)) if (s.isHandlingMimeForPasting(e)) {
        t.dataTransfer.dropEffect = "copy", t.preventDefault();
        return;
      }
    }
    drop(t) {
      for (const e of t.dataTransfer.items) for (const s of __privateGet(this, _a)) if (s.isHandlingMimeForPasting(e.type)) {
        s.paste(e, this.currentLayer), t.preventDefault();
        return;
      }
    }
    copy(t) {
      var _a9;
      if (t.preventDefault(), (_a9 = __privateGet(this, _e6)) == null ? void 0 : _a9.commitOrRemove(), !this.hasSelection) return;
      const e = [];
      for (const s of __privateGet(this, __)) {
        const i = s.serialize(true);
        i && e.push(i);
      }
      e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
    }
    cut(t) {
      this.copy(t), this.delete();
    }
    async paste(t) {
      t.preventDefault();
      const { clipboardData: e } = t;
      for (const n of e.items) for (const r of __privateGet(this, _a)) if (r.isHandlingMimeForPasting(n.type)) {
        r.paste(n, this.currentLayer);
        return;
      }
      let s = e.getData("application/pdfjs");
      if (!s) return;
      try {
        s = JSON.parse(s);
      } catch (n) {
        D(`paste: "${n.message}".`);
        return;
      }
      if (!Array.isArray(s)) return;
      this.unselectAll();
      const i = this.currentLayer;
      try {
        const n = [];
        for (const o of s) {
          const l = await i.deserialize(o);
          if (!l) return;
          n.push(l);
        }
        const r = () => {
          for (const o of n) __privateMethod(this, _kt_instances, Q_fn).call(this, o);
          __privateMethod(this, _kt_instances, J_fn).call(this, n);
        }, a = () => {
          for (const o of n) o.remove();
        };
        this.addCommands({
          cmd: r,
          undo: a,
          mustExec: true
        });
      } catch (n) {
        D(`paste: "${n.message}".`);
      }
    }
    keydown(t) {
      !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = true), __privateGet(this, _E) !== L.NONE && !this.isEditorHandlingKeyboard && _kt._keyboardManager.exec(this, t);
    }
    keyup(t) {
      this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = false, __privateGet(this, _x) && (__privateSet(this, _x, false), __privateMethod(this, _kt_instances, W_fn).call(this, "main_toolbar")));
    }
    onEditingAction({ name: t }) {
      switch (t) {
        case "undo":
        case "redo":
        case "delete":
        case "selectAll":
          this[t]();
          break;
        case "highlightSelection":
          this.highlightSelection("context_menu");
          break;
      }
    }
    setEditingState(t) {
      t ? (__privateMethod(this, _kt_instances, st_fn).call(this), __privateMethod(this, _kt_instances, Y_fn).call(this), __privateMethod(this, _kt_instances, R_fn).call(this, {
        isEditing: __privateGet(this, _E) !== L.NONE,
        isEmpty: __privateMethod(this, _kt_instances, V_fn).call(this),
        hasSomethingToUndo: __privateGet(this, _o).hasSomethingToUndo(),
        hasSomethingToRedo: __privateGet(this, _o).hasSomethingToRedo(),
        hasSelectedEditor: false
      })) : (__privateMethod(this, _kt_instances, it_fn).call(this), __privateMethod(this, _kt_instances, K_fn).call(this), __privateMethod(this, _kt_instances, R_fn).call(this, {
        isEditing: false
      }), this.disableUserSelect(false));
    }
    registerEditorTypes(t) {
      if (!__privateGet(this, _a)) {
        __privateSet(this, _a, t);
        for (const e of __privateGet(this, _a)) __privateMethod(this, _kt_instances, $_fn).call(this, e.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return __privateGet(this, _k).id;
    }
    get currentLayer() {
      return __privateGet(this, _i4).get(__privateGet(this, _u));
    }
    getLayer(t) {
      return __privateGet(this, _i4).get(t);
    }
    get currentPageIndex() {
      return __privateGet(this, _u);
    }
    addLayer(t) {
      __privateGet(this, _i4).set(t.pageIndex, t), __privateGet(this, _w) ? t.enable() : t.disable();
    }
    removeLayer(t) {
      __privateGet(this, _i4).delete(t.pageIndex);
    }
    async updateMode(t, e = null, s = false) {
      var _a9;
      if (__privateGet(this, _E) !== t && !(__privateGet(this, _I) && (await __privateGet(this, _I).promise, !__privateGet(this, _I)))) {
        if (__privateSet(this, _I, Promise.withResolvers()), __privateSet(this, _E, t), t === L.NONE) {
          this.setEditingState(false), __privateMethod(this, _kt_instances, ot_fn).call(this), (_a9 = this._editorUndoBar) == null ? void 0 : _a9.hide(), __privateGet(this, _I).resolve();
          return;
        }
        this.setEditingState(true), await __privateMethod(this, _kt_instances, at_fn).call(this), this.unselectAll();
        for (const i of __privateGet(this, _i4).values()) i.updateMode(t);
        if (!e) {
          s && this.addNewEditorFromKeyboard(), __privateGet(this, _I).resolve();
          return;
        }
        for (const i of __privateGet(this, _s6).values()) i.annotationElementId === e ? (this.setSelected(i), i.enterInEditMode()) : i.unselect();
        __privateGet(this, _I).resolve();
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t) {
      t !== __privateGet(this, _E) && this._eventBus.dispatch("switchannotationeditormode", {
        source: this,
        mode: t
      });
    }
    updateParams(t, e) {
      var _a9;
      if (__privateGet(this, _a)) {
        switch (t) {
          case O.CREATE:
            this.currentLayer.addNewEditor();
            return;
          case O.HIGHLIGHT_DEFAULT_COLOR:
            (_a9 = __privateGet(this, _D)) == null ? void 0 : _a9.updateColor(e);
            break;
          case O.HIGHLIGHT_SHOW_ALL:
            this._eventBus.dispatch("reporttelemetry", {
              source: this,
              details: {
                type: "editing",
                data: {
                  type: "highlight",
                  action: "toggle_visibility"
                }
              }
            }), (__privateGet(this, _z) || __privateSet(this, _z, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
            break;
        }
        for (const s of __privateGet(this, __)) s.updateParams(t, e);
        for (const s of __privateGet(this, _a)) s.updateDefaultParams(t, e);
      }
    }
    showAllEditors(t, e, s = false) {
      var _a9;
      for (const n of __privateGet(this, _s6).values()) n.editorType === t && n.show(e);
      (((_a9 = __privateGet(this, _z)) == null ? void 0 : _a9.get(O.HIGHLIGHT_SHOW_ALL)) ?? true) !== e && __privateMethod(this, _kt_instances, $_fn).call(this, [
        [
          O.HIGHLIGHT_SHOW_ALL,
          e
        ]
      ]);
    }
    enableWaiting(t = false) {
      if (__privateGet(this, _P) !== t) {
        __privateSet(this, _P, t);
        for (const e of __privateGet(this, _i4).values()) t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
      }
    }
    getEditors(t) {
      const e = [];
      for (const s of __privateGet(this, _s6).values()) s.pageIndex === t && e.push(s);
      return e;
    }
    getEditor(t) {
      return __privateGet(this, _s6).get(t);
    }
    addEditor(t) {
      __privateGet(this, _s6).set(t.id, t);
    }
    removeEditor(t) {
      var _a9;
      t.div.contains(document.activeElement) && (__privateGet(this, _A) && clearTimeout(__privateGet(this, _A)), __privateSet(this, _A, setTimeout(() => {
        this.focusMainContainer(), __privateSet(this, _A, null);
      }, 0))), __privateGet(this, _s6).delete(t.id), this.unselect(t), (!t.annotationElementId || !__privateGet(this, _d).has(t.annotationElementId)) && ((_a9 = __privateGet(this, _n3)) == null ? void 0 : _a9.remove(t.id));
    }
    addDeletedAnnotationElement(t) {
      __privateGet(this, _d).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = true;
    }
    isDeletedAnnotationElement(t) {
      return __privateGet(this, _d).has(t);
    }
    removeDeletedAnnotationElement(t) {
      __privateGet(this, _d).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = false;
    }
    setActiveEditor(t) {
      __privateGet(this, _e6) !== t && (__privateSet(this, _e6, t), t && __privateMethod(this, _kt_instances, $_fn).call(this, t.propertiesToUpdate));
    }
    updateUI(t) {
      __privateGet(this, _kt_instances, lt_get) === t && __privateMethod(this, _kt_instances, $_fn).call(this, t.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t) {
      __privateMethod(this, _kt_instances, $_fn).call(this, t.defaultPropertiesToUpdate);
    }
    toggleSelected(t) {
      if (__privateGet(this, __).has(t)) {
        __privateGet(this, __).delete(t), t.unselect(), __privateMethod(this, _kt_instances, R_fn).call(this, {
          hasSelectedEditor: this.hasSelection
        });
        return;
      }
      __privateGet(this, __).add(t), t.select(), __privateMethod(this, _kt_instances, $_fn).call(this, t.propertiesToUpdate), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSelectedEditor: true
      });
    }
    setSelected(t) {
      var _a9;
      (_a9 = __privateGet(this, _h)) == null ? void 0 : _a9.commitOrRemove();
      for (const e of __privateGet(this, __)) e !== t && e.unselect();
      __privateGet(this, __).clear(), __privateGet(this, __).add(t), t.select(), __privateMethod(this, _kt_instances, $_fn).call(this, t.propertiesToUpdate), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSelectedEditor: true
      });
    }
    isSelected(t) {
      return __privateGet(this, __).has(t);
    }
    get firstSelectedEditor() {
      return __privateGet(this, __).values().next().value;
    }
    unselect(t) {
      t.unselect(), __privateGet(this, __).delete(t), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSelectedEditor: this.hasSelection
      });
    }
    get hasSelection() {
      return __privateGet(this, __).size !== 0;
    }
    get isEnterHandled() {
      return __privateGet(this, __).size === 1 && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      var _a9;
      __privateGet(this, _o).undo(), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSomethingToUndo: __privateGet(this, _o).hasSomethingToUndo(),
        hasSomethingToRedo: true,
        isEmpty: __privateMethod(this, _kt_instances, V_fn).call(this)
      }), (_a9 = this._editorUndoBar) == null ? void 0 : _a9.hide();
    }
    redo() {
      __privateGet(this, _o).redo(), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSomethingToUndo: true,
        hasSomethingToRedo: __privateGet(this, _o).hasSomethingToRedo(),
        isEmpty: __privateMethod(this, _kt_instances, V_fn).call(this)
      });
    }
    addCommands(t) {
      __privateGet(this, _o).add(t), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSomethingToUndo: true,
        hasSomethingToRedo: false,
        isEmpty: __privateMethod(this, _kt_instances, V_fn).call(this)
      });
    }
    cleanUndoStack(t) {
      __privateGet(this, _o).cleanType(t);
    }
    delete() {
      var _a9;
      this.commitOrRemove();
      const t = (_a9 = this.currentLayer) == null ? void 0 : _a9.endDrawingSession(true);
      if (!this.hasSelection && !t) return;
      const e = t ? [
        t
      ] : [
        ...__privateGet(this, __)
      ], s = () => {
        var _a10;
        (_a10 = this._editorUndoBar) == null ? void 0 : _a10.show(i, e.length === 1 ? e[0].editorType : e.length);
        for (const n of e) n.remove();
      }, i = () => {
        for (const n of e) __privateMethod(this, _kt_instances, Q_fn).call(this, n);
      };
      this.addCommands({
        cmd: s,
        undo: i,
        mustExec: true
      });
    }
    commitOrRemove() {
      var _a9;
      (_a9 = __privateGet(this, _e6)) == null ? void 0 : _a9.commitOrRemove();
    }
    hasSomethingToControl() {
      return __privateGet(this, _e6) || this.hasSelection;
    }
    selectAll() {
      for (const t of __privateGet(this, __)) t.commit();
      __privateMethod(this, _kt_instances, J_fn).call(this, __privateGet(this, _s6).values());
    }
    unselectAll() {
      var _a9;
      if (!(__privateGet(this, _e6) && (__privateGet(this, _e6).commitOrRemove(), __privateGet(this, _E) !== L.NONE)) && !((_a9 = __privateGet(this, _h)) == null ? void 0 : _a9.commitOrRemove()) && this.hasSelection) {
        for (const t of __privateGet(this, __)) t.unselect();
        __privateGet(this, __).clear(), __privateMethod(this, _kt_instances, R_fn).call(this, {
          hasSelectedEditor: false
        });
      }
    }
    translateSelectedEditors(t, e, s = false) {
      if (s || this.commitOrRemove(), !this.hasSelection) return;
      __privateGet(this, _O)[0] += t, __privateGet(this, _O)[1] += e;
      const [i, n] = __privateGet(this, _O), r = [
        ...__privateGet(this, __)
      ], a = 1e3;
      __privateGet(this, _F) && clearTimeout(__privateGet(this, _F)), __privateSet(this, _F, setTimeout(() => {
        __privateSet(this, _F, null), __privateGet(this, _O)[0] = __privateGet(this, _O)[1] = 0, this.addCommands({
          cmd: () => {
            for (const o of r) __privateGet(this, _s6).has(o.id) && o.translateInPage(i, n);
          },
          undo: () => {
            for (const o of r) __privateGet(this, _s6).has(o.id) && o.translateInPage(-i, -n);
          },
          mustExec: false
        });
      }, a));
      for (const o of r) o.translateInPage(t, e);
    }
    setUpDragSession() {
      if (this.hasSelection) {
        this.disableUserSelect(true), __privateSet(this, _f, /* @__PURE__ */ new Map());
        for (const t of __privateGet(this, __)) __privateGet(this, _f).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
      }
    }
    endDragSession() {
      if (!__privateGet(this, _f)) return false;
      this.disableUserSelect(false);
      const t = __privateGet(this, _f);
      __privateSet(this, _f, null);
      let e = false;
      for (const [{ x: i, y: n, pageIndex: r }, a] of t) a.newX = i, a.newY = n, a.newPageIndex = r, e || (e = i !== a.savedX || n !== a.savedY || r !== a.savedPageIndex);
      if (!e) return false;
      const s = (i, n, r, a) => {
        if (__privateGet(this, _s6).has(i.id)) {
          const o = __privateGet(this, _i4).get(a);
          o ? i._setParentAndPosition(o, n, r) : (i.pageIndex = a, i.x = n, i.y = r);
        }
      };
      return this.addCommands({
        cmd: () => {
          for (const [i, { newX: n, newY: r, newPageIndex: a }] of t) s(i, n, r, a);
        },
        undo: () => {
          for (const [i, { savedX: n, savedY: r, savedPageIndex: a }] of t) s(i, n, r, a);
        },
        mustExec: true
      }), true;
    }
    dragSelectedEditors(t, e) {
      if (__privateGet(this, _f)) for (const s of __privateGet(this, _f).keys()) s.drag(t, e);
    }
    rebuild(t) {
      if (t.parent === null) {
        const e = this.getLayer(t.pageIndex);
        e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
      } else t.parent.addOrRebuild(t);
    }
    get isEditorHandlingKeyboard() {
      var _a9;
      return ((_a9 = this.getActive()) == null ? void 0 : _a9.shouldGetKeyboardEvents()) || __privateGet(this, __).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
    }
    isActive(t) {
      return __privateGet(this, _e6) === t;
    }
    getActive() {
      return __privateGet(this, _e6);
    }
    getMode() {
      return __privateGet(this, _E);
    }
    get imageManager() {
      return F(this, "imageManager", new He());
    }
    getSelectionBoxes(t) {
      if (!t) return null;
      const e = document.getSelection();
      for (let l = 0, h = e.rangeCount; l < h; l++) if (!t.contains(e.getRangeAt(l).commonAncestorContainer)) return null;
      const { x: s, y: i, width: n, height: r } = t.getBoundingClientRect();
      let a;
      switch (t.getAttribute("data-main-rotation")) {
        case "90":
          a = (l, h, d, u) => ({
            x: (h - i) / r,
            y: 1 - (l + d - s) / n,
            width: u / r,
            height: d / n
          });
          break;
        case "180":
          a = (l, h, d, u) => ({
            x: 1 - (l + d - s) / n,
            y: 1 - (h + u - i) / r,
            width: d / n,
            height: u / r
          });
          break;
        case "270":
          a = (l, h, d, u) => ({
            x: 1 - (h + u - i) / r,
            y: (l - s) / n,
            width: u / r,
            height: d / n
          });
          break;
        default:
          a = (l, h, d, u) => ({
            x: (l - s) / n,
            y: (h - i) / r,
            width: d / n,
            height: u / r
          });
          break;
      }
      const o = [];
      for (let l = 0, h = e.rangeCount; l < h; l++) {
        const d = e.getRangeAt(l);
        if (!d.collapsed) for (const { x: u, y: f, width: p, height: g } of d.getClientRects()) p === 0 || g === 0 || o.push(a(u, f, p, g));
      }
      return o.length === 0 ? null : o;
    }
    addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
      (__privateGet(this, _l) || __privateSet(this, _l, /* @__PURE__ */ new Map())).set(t, e);
    }
    removeChangedExistingAnnotation({ annotationElementId: t }) {
      var _a9;
      (_a9 = __privateGet(this, _l)) == null ? void 0 : _a9.delete(t);
    }
    renderAnnotationElement(t) {
      var _a9;
      const e = (_a9 = __privateGet(this, _l)) == null ? void 0 : _a9.get(t.data.id);
      if (!e) return;
      const s = __privateGet(this, _n3).getRawValue(e);
      s && (__privateGet(this, _E) === L.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
    }
  };
  _t7 = new WeakMap();
  _e6 = new WeakMap();
  _s6 = new WeakMap();
  _i4 = new WeakMap();
  _r3 = new WeakMap();
  _n3 = new WeakMap();
  _l = new WeakMap();
  _o = new WeakMap();
  _c = new WeakMap();
  _h = new WeakMap();
  _u = new WeakMap();
  _d = new WeakMap();
  _f = new WeakMap();
  _a = new WeakMap();
  _p = new WeakMap();
  _m = new WeakMap();
  _g = new WeakMap();
  _b = new WeakMap();
  _y = new WeakMap();
  _A = new WeakMap();
  _v = new WeakMap();
  _S = new WeakMap();
  _x = new WeakMap();
  _T = new WeakMap();
  _k = new WeakMap();
  _w = new WeakMap();
  _P = new WeakMap();
  _C = new WeakMap();
  _M = new WeakMap();
  _D = new WeakMap();
  _N = new WeakMap();
  _E = new WeakMap();
  __ = new WeakMap();
  _L = new WeakMap();
  _G = new WeakMap();
  _z = new WeakMap();
  _U = new WeakMap();
  _O = new WeakMap();
  _F = new WeakMap();
  _B = new WeakMap();
  _j = new WeakMap();
  _I = new WeakMap();
  _kt_instances = new WeakSet();
  H_fn = function({ anchorNode: t }) {
    return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
  };
  X_fn = function(t) {
    const { currentLayer: e } = this;
    if (e.hasTextLayer(t)) return e;
    for (const s of __privateGet(this, _i4).values()) if (s.hasTextLayer(t)) return s;
    return null;
  };
  Z_fn = function() {
    const t = document.getSelection();
    if (!t || t.isCollapsed) return;
    const s = __privateMethod(this, _kt_instances, H_fn).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
    i && (__privateGet(this, _T) || __privateSet(this, _T, new di(this)), __privateGet(this, _T).show(s, i, this.direction === "ltr"));
  };
  tt_fn = function() {
    var _a9, _b6, _c15;
    const t = document.getSelection();
    if (!t || t.isCollapsed) {
      __privateGet(this, _L) && ((_a9 = __privateGet(this, _T)) == null ? void 0 : _a9.hide(), __privateSet(this, _L, null), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSelectedText: false
      }));
      return;
    }
    const { anchorNode: e } = t;
    if (e === __privateGet(this, _L)) return;
    const i = __privateMethod(this, _kt_instances, H_fn).call(this, t).closest(".textLayer");
    if (!i) {
      __privateGet(this, _L) && ((_b6 = __privateGet(this, _T)) == null ? void 0 : _b6.hide(), __privateSet(this, _L, null), __privateMethod(this, _kt_instances, R_fn).call(this, {
        hasSelectedText: false
      }));
      return;
    }
    if ((_c15 = __privateGet(this, _T)) == null ? void 0 : _c15.hide(), __privateSet(this, _L, e), __privateMethod(this, _kt_instances, R_fn).call(this, {
      hasSelectedText: true
    }), !(__privateGet(this, _E) !== L.HIGHLIGHT && __privateGet(this, _E) !== L.NONE) && (__privateGet(this, _E) === L.HIGHLIGHT && this.showAllEditors("highlight", true, true), __privateSet(this, _x, this.isShiftKeyDown), !this.isShiftKeyDown)) {
      const n = __privateGet(this, _E) === L.HIGHLIGHT ? __privateMethod(this, _kt_instances, X_fn).call(this, i) : null;
      n == null ? void 0 : n.toggleDrawing();
      const r = new AbortController(), a = this.combinedSignal(r), o = (l) => {
        l.type === "pointerup" && l.button !== 0 || (r.abort(), n == null ? void 0 : n.toggleDrawing(true), l.type === "pointerup" && __privateMethod(this, _kt_instances, W_fn).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", o, {
        signal: a
      }), window.addEventListener("blur", o, {
        signal: a
      });
    }
  };
  W_fn = function(t = "") {
    __privateGet(this, _E) === L.HIGHLIGHT ? this.highlightSelection(t) : __privateGet(this, _m) && __privateMethod(this, _kt_instances, Z_fn).call(this);
  };
  et_fn = function() {
    document.addEventListener("selectionchange", __privateMethod(this, _kt_instances, tt_fn).bind(this), {
      signal: this._signal
    });
  };
  st_fn = function() {
    if (__privateGet(this, _v)) return;
    __privateSet(this, _v, new AbortController());
    const t = this.combinedSignal(__privateGet(this, _v));
    window.addEventListener("focus", this.focus.bind(this), {
      signal: t
    }), window.addEventListener("blur", this.blur.bind(this), {
      signal: t
    });
  };
  it_fn = function() {
    var _a9;
    (_a9 = __privateGet(this, _v)) == null ? void 0 : _a9.abort(), __privateSet(this, _v, null);
  };
  q_fn = function() {
    if (__privateGet(this, _C)) return;
    __privateSet(this, _C, new AbortController());
    const t = this.combinedSignal(__privateGet(this, _C));
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal: t
    }), window.addEventListener("keyup", this.keyup.bind(this), {
      signal: t
    });
  };
  nt_fn = function() {
    var _a9;
    (_a9 = __privateGet(this, _C)) == null ? void 0 : _a9.abort(), __privateSet(this, _C, null);
  };
  Y_fn = function() {
    if (__privateGet(this, _c)) return;
    __privateSet(this, _c, new AbortController());
    const t = this.combinedSignal(__privateGet(this, _c));
    document.addEventListener("copy", this.copy.bind(this), {
      signal: t
    }), document.addEventListener("cut", this.cut.bind(this), {
      signal: t
    }), document.addEventListener("paste", this.paste.bind(this), {
      signal: t
    });
  };
  K_fn = function() {
    var _a9;
    (_a9 = __privateGet(this, _c)) == null ? void 0 : _a9.abort(), __privateSet(this, _c, null);
  };
  rt_fn = function() {
    const t = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal: t
    }), document.addEventListener("drop", this.drop.bind(this), {
      signal: t
    });
  };
  R_fn = function(t) {
    Object.entries(t).some(([s, i]) => __privateGet(this, _U)[s] !== i) && (this._eventBus.dispatch("annotationeditorstateschanged", {
      source: this,
      details: Object.assign(__privateGet(this, _U), t)
    }), __privateGet(this, _E) === L.HIGHLIGHT && t.hasSelectedEditor === false && __privateMethod(this, _kt_instances, $_fn).call(this, [
      [
        O.HIGHLIGHT_FREE,
        true
      ]
    ]));
  };
  $_fn = function(t) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details: t
    });
  };
  at_fn = async function() {
    if (!__privateGet(this, _w)) {
      __privateSet(this, _w, true);
      const t = [];
      for (const e of __privateGet(this, _i4).values()) t.push(e.enable());
      await Promise.all(t);
      for (const e of __privateGet(this, _s6).values()) e.enable();
    }
  };
  ot_fn = function() {
    if (this.unselectAll(), __privateGet(this, _w)) {
      __privateSet(this, _w, false);
      for (const t of __privateGet(this, _i4).values()) t.disable();
      for (const t of __privateGet(this, _s6).values()) t.disable();
    }
  };
  Q_fn = function(t) {
    const e = __privateGet(this, _i4).get(t.pageIndex);
    e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
  };
  lt_get = function() {
    let t = null;
    for (t of __privateGet(this, __)) ;
    return t;
  };
  V_fn = function() {
    if (__privateGet(this, _s6).size === 0) return true;
    if (__privateGet(this, _s6).size === 1) for (const t of __privateGet(this, _s6).values()) return t.isEmpty();
    return false;
  };
  J_fn = function(t) {
    for (const e of __privateGet(this, __)) e.unselect();
    __privateGet(this, __).clear();
    for (const e of t) e.isEmpty() || (__privateGet(this, __).add(e), e.select());
    __privateMethod(this, _kt_instances, R_fn).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  };
  __publicField(_kt, "TRANSLATE_SMALL", 1);
  __publicField(_kt, "TRANSLATE_BIG", 10);
  let kt = _kt;
  const _wt = class _wt {
    constructor(t) {
      __privateAdd(this, _wt_instances);
      __privateAdd(this, _t8, null);
      __privateAdd(this, _e7, false);
      __privateAdd(this, _s7, null);
      __privateAdd(this, _i5, null);
      __privateAdd(this, _r4, null);
      __privateAdd(this, _n4, null);
      __privateAdd(this, _l2, false);
      __privateAdd(this, _o2, null);
      __privateAdd(this, _c2, null);
      __privateAdd(this, _h2, null);
      __privateAdd(this, _u2, null);
      __privateAdd(this, _d2, false);
      __privateSet(this, _c2, t), __privateSet(this, _d2, t._uiManager.useNewAltTextFlow), __privateGet(_wt, _f2) || __privateSet(_wt, _f2, Object.freeze({
        added: "pdfjs-editor-new-alt-text-added-button",
        "added-label": "pdfjs-editor-new-alt-text-added-button-label",
        missing: "pdfjs-editor-new-alt-text-missing-button",
        "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
        review: "pdfjs-editor-new-alt-text-to-review-button",
        "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
      }));
    }
    static initialize(t) {
      _wt._l10n ?? (_wt._l10n = t);
    }
    async render() {
      const t = __privateSet(this, _s7, document.createElement("button"));
      t.className = "altText", t.tabIndex = "0";
      const e = __privateSet(this, _i5, document.createElement("span"));
      t.append(e), __privateGet(this, _d2) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", __privateGet(_wt, _f2).missing), e.setAttribute("data-l10n-id", __privateGet(_wt, _f2)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
      const s = __privateGet(this, _c2)._uiManager._signal;
      t.addEventListener("contextmenu", At, {
        signal: s
      }), t.addEventListener("pointerdown", (n) => n.stopPropagation(), {
        signal: s
      });
      const i = (n) => {
        n.preventDefault(), __privateGet(this, _c2)._uiManager.editAltText(__privateGet(this, _c2)), __privateGet(this, _d2) && __privateGet(this, _c2)._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: __privateGet(this, _wt_instances, a_get)
          }
        });
      };
      return t.addEventListener("click", i, {
        capture: true,
        signal: s
      }), t.addEventListener("keydown", (n) => {
        n.target === t && n.key === "Enter" && (__privateSet(this, _l2, true), i(n));
      }, {
        signal: s
      }), await __privateMethod(this, _wt_instances, p_fn).call(this), t;
    }
    finish() {
      __privateGet(this, _s7) && (__privateGet(this, _s7).focus({
        focusVisible: __privateGet(this, _l2)
      }), __privateSet(this, _l2, false));
    }
    isEmpty() {
      return __privateGet(this, _d2) ? __privateGet(this, _t8) === null : !__privateGet(this, _t8) && !__privateGet(this, _e7);
    }
    hasData() {
      return __privateGet(this, _d2) ? __privateGet(this, _t8) !== null || !!__privateGet(this, _h2) : this.isEmpty();
    }
    get guessedText() {
      return __privateGet(this, _h2);
    }
    async setGuessedText(t) {
      __privateGet(this, _t8) === null && (__privateSet(this, _h2, t), __privateSet(this, _u2, await _wt._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
        generatedAltText: t
      })), __privateMethod(this, _wt_instances, p_fn).call(this));
    }
    toggleAltTextBadge(t = false) {
      var _a9;
      if (!__privateGet(this, _d2) || __privateGet(this, _t8)) {
        (_a9 = __privateGet(this, _o2)) == null ? void 0 : _a9.remove(), __privateSet(this, _o2, null);
        return;
      }
      if (!__privateGet(this, _o2)) {
        const e = __privateSet(this, _o2, document.createElement("div"));
        e.className = "noAltTextBadge", __privateGet(this, _c2).div.append(e);
      }
      __privateGet(this, _o2).classList.toggle("hidden", !t);
    }
    serialize(t) {
      let e = __privateGet(this, _t8);
      return !t && __privateGet(this, _h2) === e && (e = __privateGet(this, _u2)), {
        altText: e,
        decorative: __privateGet(this, _e7),
        guessedText: __privateGet(this, _h2),
        textWithDisclaimer: __privateGet(this, _u2)
      };
    }
    get data() {
      return {
        altText: __privateGet(this, _t8),
        decorative: __privateGet(this, _e7)
      };
    }
    set data({ altText: t, decorative: e, guessedText: s, textWithDisclaimer: i, cancel: n = false }) {
      s && (__privateSet(this, _h2, s), __privateSet(this, _u2, i)), !(__privateGet(this, _t8) === t && __privateGet(this, _e7) === e) && (n || (__privateSet(this, _t8, t), __privateSet(this, _e7, e)), __privateMethod(this, _wt_instances, p_fn).call(this));
    }
    toggle(t = false) {
      __privateGet(this, _s7) && (!t && __privateGet(this, _n4) && (clearTimeout(__privateGet(this, _n4)), __privateSet(this, _n4, null)), __privateGet(this, _s7).disabled = !t);
    }
    shown() {
      __privateGet(this, _c2)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_displayed",
        data: {
          label: __privateGet(this, _wt_instances, a_get)
        }
      });
    }
    destroy() {
      var _a9, _b6;
      (_a9 = __privateGet(this, _s7)) == null ? void 0 : _a9.remove(), __privateSet(this, _s7, null), __privateSet(this, _i5, null), __privateSet(this, _r4, null), (_b6 = __privateGet(this, _o2)) == null ? void 0 : _b6.remove(), __privateSet(this, _o2, null);
    }
  };
  _t8 = new WeakMap();
  _e7 = new WeakMap();
  _s7 = new WeakMap();
  _i5 = new WeakMap();
  _r4 = new WeakMap();
  _n4 = new WeakMap();
  _l2 = new WeakMap();
  _o2 = new WeakMap();
  _c2 = new WeakMap();
  _h2 = new WeakMap();
  _u2 = new WeakMap();
  _d2 = new WeakMap();
  _f2 = new WeakMap();
  _wt_instances = new WeakSet();
  a_get = function() {
    return __privateGet(this, _t8) && "added" || __privateGet(this, _t8) === null && this.guessedText && "review" || "missing";
  };
  p_fn = async function() {
    var _a9, _b6, _c15, _d10;
    const t = __privateGet(this, _s7);
    if (!t) return;
    if (__privateGet(this, _d2)) {
      if (t.classList.toggle("done", !!__privateGet(this, _t8)), t.setAttribute("data-l10n-id", __privateGet(_wt, _f2)[__privateGet(this, _wt_instances, a_get)]), (_a9 = __privateGet(this, _i5)) == null ? void 0 : _a9.setAttribute("data-l10n-id", __privateGet(_wt, _f2)[`${__privateGet(this, _wt_instances, a_get)}-label`]), !__privateGet(this, _t8)) {
        (_b6 = __privateGet(this, _r4)) == null ? void 0 : _b6.remove();
        return;
      }
    } else {
      if (!__privateGet(this, _t8) && !__privateGet(this, _e7)) {
        t.classList.remove("done"), (_c15 = __privateGet(this, _r4)) == null ? void 0 : _c15.remove();
        return;
      }
      t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let e = __privateGet(this, _r4);
    if (!e) {
      __privateSet(this, _r4, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${__privateGet(this, _c2).id}`;
      const i = 100, n = __privateGet(this, _c2)._uiManager._signal;
      n.addEventListener("abort", () => {
        clearTimeout(__privateGet(this, _n4)), __privateSet(this, _n4, null);
      }, {
        once: true
      }), t.addEventListener("mouseenter", () => {
        __privateSet(this, _n4, setTimeout(() => {
          __privateSet(this, _n4, null), __privateGet(this, _r4).classList.add("show"), __privateGet(this, _c2)._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, i));
      }, {
        signal: n
      }), t.addEventListener("mouseleave", () => {
        var _a10;
        __privateGet(this, _n4) && (clearTimeout(__privateGet(this, _n4)), __privateSet(this, _n4, null)), (_a10 = __privateGet(this, _r4)) == null ? void 0 : _a10.classList.remove("show");
      }, {
        signal: n
      });
    }
    __privateGet(this, _e7) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = __privateGet(this, _t8)), e.parentNode || t.append(e), (_d10 = __privateGet(this, _c2).getImageForAltText()) == null ? void 0 : _d10.setAttribute("aria-describedby", e.id);
  };
  __privateAdd(_wt, _f2, null);
  __publicField(_wt, "_l10n", null);
  let wt = _wt;
  const _ge = class _ge {
    constructor({ container: t, isPinchingDisabled: e = null, isPinchingStopped: s = null, onPinchStart: i = null, onPinching: n = null, onPinchEnd: r = null, signal: a }) {
      __privateAdd(this, _ge_instances);
      __privateAdd(this, _t9);
      __privateAdd(this, _e8, false);
      __privateAdd(this, _s8, null);
      __privateAdd(this, _i6);
      __privateAdd(this, _r5);
      __privateAdd(this, _n5);
      __privateAdd(this, _l3);
      __privateAdd(this, _o3);
      __privateAdd(this, _c3, null);
      __privateAdd(this, _h3);
      __privateAdd(this, _u3, null);
      __privateSet(this, _t9, t), __privateSet(this, _s8, s), __privateSet(this, _i6, e), __privateSet(this, _r5, i), __privateSet(this, _n5, n), __privateSet(this, _l3, r), __privateSet(this, _h3, new AbortController()), __privateSet(this, _o3, AbortSignal.any([
        a,
        __privateGet(this, _h3).signal
      ])), t.addEventListener("touchstart", __privateMethod(this, _ge_instances, d_fn).bind(this), {
        passive: false,
        signal: __privateGet(this, _o3)
      });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return F(this, "MIN_TOUCH_DISTANCE_TO_PINCH", 35 / (window.devicePixelRatio || 1));
    }
    destroy() {
      var _a9;
      (_a9 = __privateGet(this, _h3)) == null ? void 0 : _a9.abort(), __privateSet(this, _h3, null);
    }
  };
  _t9 = new WeakMap();
  _e8 = new WeakMap();
  _s8 = new WeakMap();
  _i6 = new WeakMap();
  _r5 = new WeakMap();
  _n5 = new WeakMap();
  _l3 = new WeakMap();
  _o3 = new WeakMap();
  _c3 = new WeakMap();
  _h3 = new WeakMap();
  _u3 = new WeakMap();
  _ge_instances = new WeakSet();
  d_fn = function(t) {
    var _a9, _b6, _c15;
    if (((_a9 = __privateGet(this, _i6)) == null ? void 0 : _a9.call(this)) || t.touches.length < 2) return;
    if (!__privateGet(this, _u3)) {
      __privateSet(this, _u3, new AbortController());
      const i = AbortSignal.any([
        __privateGet(this, _o3),
        __privateGet(this, _u3).signal
      ]), n = __privateGet(this, _t9), r = {
        signal: i,
        passive: false
      };
      n.addEventListener("touchmove", __privateMethod(this, _ge_instances, f_fn).bind(this), r), n.addEventListener("touchend", __privateMethod(this, _ge_instances, a_fn).bind(this), r), n.addEventListener("touchcancel", __privateMethod(this, _ge_instances, a_fn).bind(this), r), (_b6 = __privateGet(this, _r5)) == null ? void 0 : _b6.call(this);
    }
    if (ft(t), t.touches.length !== 2 || ((_c15 = __privateGet(this, _s8)) == null ? void 0 : _c15.call(this))) {
      __privateSet(this, _c3, null);
      return;
    }
    let [e, s] = t.touches;
    e.identifier > s.identifier && ([e, s] = [
      s,
      e
    ]), __privateSet(this, _c3, {
      touch0X: e.screenX,
      touch0Y: e.screenY,
      touch1X: s.screenX,
      touch1Y: s.screenY
    });
  };
  f_fn = function(t) {
    var _a9;
    if (!__privateGet(this, _c3) || t.touches.length !== 2) return;
    let [e, s] = t.touches;
    e.identifier > s.identifier && ([e, s] = [
      s,
      e
    ]);
    const { screenX: i, screenY: n } = e, { screenX: r, screenY: a } = s, o = __privateGet(this, _c3), { touch0X: l, touch0Y: h, touch1X: d, touch1Y: u } = o, f = d - l, p = u - h, g = r - i, b = a - n, m = Math.hypot(g, b) || 1, A = Math.hypot(f, p) || 1;
    if (!__privateGet(this, _e8) && Math.abs(A - m) <= _ge.MIN_TOUCH_DISTANCE_TO_PINCH) return;
    if (o.touch0X = i, o.touch0Y = n, o.touch1X = r, o.touch1Y = a, t.preventDefault(), !__privateGet(this, _e8)) {
      __privateSet(this, _e8, true);
      return;
    }
    const _ = [
      (i + r) / 2,
      (n + a) / 2
    ];
    (_a9 = __privateGet(this, _n5)) == null ? void 0 : _a9.call(this, _, A, m);
  };
  a_fn = function(t) {
    var _a9;
    __privateGet(this, _u3).abort(), __privateSet(this, _u3, null), (_a9 = __privateGet(this, _l3)) == null ? void 0 : _a9.call(this), __privateGet(this, _c3) && (t.preventDefault(), __privateSet(this, _c3, null), __privateSet(this, _e8, false));
  };
  let ge = _ge;
  const _R = class _R {
    constructor(t) {
      __privateAdd(this, _R_instances);
      __privateAdd(this, _t10, null);
      __privateAdd(this, _e9, null);
      __privateAdd(this, _s9, null);
      __privateAdd(this, _i7, false);
      __privateAdd(this, _r6, null);
      __privateAdd(this, _n6, "");
      __privateAdd(this, _l4, false);
      __privateAdd(this, _o4, null);
      __privateAdd(this, _c4, null);
      __privateAdd(this, _h4, null);
      __privateAdd(this, _u4, null);
      __privateAdd(this, _d3, "");
      __privateAdd(this, _f3, false);
      __privateAdd(this, _a2, null);
      __privateAdd(this, _p2, false);
      __privateAdd(this, _m2, false);
      __privateAdd(this, _g2, false);
      __privateAdd(this, _b2, null);
      __privateAdd(this, _y2, 0);
      __privateAdd(this, _A2, 0);
      __privateAdd(this, _v2, null);
      __privateAdd(this, _S2, null);
      __publicField(this, "_editToolbar", null);
      __publicField(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
      __publicField(this, "_initialData", null);
      __publicField(this, "_isVisible", true);
      __publicField(this, "_uiManager", null);
      __publicField(this, "_focusEventsAllowed", true);
      __privateAdd(this, _x2, false);
      __privateAdd(this, _T2, _R._zIndex++);
      this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = false, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null;
      const { rotation: e, rawDims: { pageWidth: s, pageHeight: i, pageX: n, pageY: r } } = this.parent.viewport;
      this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [
        s,
        i
      ], this.pageTranslation = [
        n,
        r
      ];
      const [a, o] = this.parentDimensions;
      this.x = t.x / a, this.y = t.y / o, this.isAttachedToDOM = false, this.deleted = false;
    }
    static get _resizerKeyboardManager() {
      const t = _R.prototype._resizeWithKeyboard, e = kt.TRANSLATE_SMALL, s = kt.TRANSLATE_BIG;
      return F(this, "_resizerKeyboardManager", new te([
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t,
          {
            args: [
              -e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t,
          {
            args: [
              -s,
              0
            ]
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t,
          {
            args: [
              e,
              0
            ]
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t,
          {
            args: [
              s,
              0
            ]
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t,
          {
            args: [
              0,
              -s
            ]
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t,
          {
            args: [
              0,
              e
            ]
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t,
          {
            args: [
              0,
              s
            ]
          }
        ],
        [
          [
            "Escape",
            "mac+Escape"
          ],
          _R.prototype._stopResizingWithKeyboard
        ]
      ]));
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    static get isDrawer() {
      return false;
    }
    static get _defaultLineColor() {
      return F(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t) {
      const e = new pi({
        id: t.parent.getNextId(),
        parent: t.parent,
        uiManager: t._uiManager
      });
      e.annotationElementId = t.annotationElementId, e.deleted = true, e._uiManager.addToAnnotationStorage(e);
    }
    static initialize(t, e) {
      if (_R._l10n ?? (_R._l10n = t), _R._l10nResizer || (_R._l10nResizer = Object.freeze({
        topLeft: "pdfjs-editor-resizer-top-left",
        topMiddle: "pdfjs-editor-resizer-top-middle",
        topRight: "pdfjs-editor-resizer-top-right",
        middleRight: "pdfjs-editor-resizer-middle-right",
        bottomRight: "pdfjs-editor-resizer-bottom-right",
        bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
        bottomLeft: "pdfjs-editor-resizer-bottom-left",
        middleLeft: "pdfjs-editor-resizer-middle-left"
      })), _R._borderLineWidth !== -1) return;
      const s = getComputedStyle(document.documentElement);
      _R._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t, e) {
    }
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(t) {
      return false;
    }
    static paste(t, e) {
      H("Not implemented");
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return __privateGet(this, _x2);
    }
    set _isDraggable(t) {
      var _a9;
      __privateSet(this, _x2, t), (_a9 = this.div) == null ? void 0 : _a9.classList.toggle("draggable", t);
    }
    get isEnterHandled() {
      return true;
    }
    center() {
      const [t, e] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
          break;
        case 180:
          this.x += this.width / 2, this.y += this.height / 2;
          break;
        case 270:
          this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
          break;
        default:
          this.x -= this.width / 2, this.y -= this.height / 2;
          break;
      }
      this.fixAndSetPosition();
    }
    addCommands(t) {
      this._uiManager.addCommands(t);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = __privateGet(this, _T2);
    }
    setParent(t) {
      t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : __privateMethod(this, _R_instances, H_fn2).call(this), this.parent = t;
    }
    focusin(t) {
      this._focusEventsAllowed && (__privateGet(this, _f3) ? __privateSet(this, _f3, false) : this.parent.setSelected(this));
    }
    focusout(t) {
      var _a9, _b6;
      !this._focusEventsAllowed || !this.isAttachedToDOM || ((_a9 = t.relatedTarget) == null ? void 0 : _a9.closest(`#${this.id}`)) || (t.preventDefault(), ((_b6 = this.parent) == null ? void 0 : _b6.isMultipleSelection) || this.commitOrRemove());
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t, e, s, i) {
      const [n, r] = this.parentDimensions;
      [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / n, this.y = (e + i) / r, this.fixAndSetPosition();
    }
    translate(t, e) {
      __privateMethod(this, _R_instances, k_fn).call(this, this.parentDimensions, t, e);
    }
    translateInPage(t, e) {
      __privateGet(this, _a2) || __privateSet(this, _a2, [
        this.x,
        this.y,
        this.width,
        this.height
      ]), __privateMethod(this, _R_instances, k_fn).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
        block: "nearest"
      });
    }
    drag(t, e) {
      __privateGet(this, _a2) || __privateSet(this, _a2, [
        this.x,
        this.y,
        this.width,
        this.height
      ]);
      const { div: s, parentDimensions: [i, n] } = this;
      if (this.x += t / i, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
        const { x: d, y: u } = this.div.getBoundingClientRect();
        this.parent.findNewParent(this, d, u) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
      }
      let { x: r, y: a } = this;
      const [o, l] = this.getBaseTranslation();
      r += o, a += l;
      const { style: h } = s;
      h.left = `${(100 * r).toFixed(2)}%`, h.top = `${(100 * a).toFixed(2)}%`, this._onTranslating(r, a), s.scrollIntoView({
        block: "nearest"
      });
    }
    _onTranslating(t, e) {
    }
    _onTranslated(t, e) {
    }
    get _hasBeenMoved() {
      return !!__privateGet(this, _a2) && (__privateGet(this, _a2)[0] !== this.x || __privateGet(this, _a2)[1] !== this.y);
    }
    get _hasBeenResized() {
      return !!__privateGet(this, _a2) && (__privateGet(this, _a2)[2] !== this.width || __privateGet(this, _a2)[3] !== this.height);
    }
    getBaseTranslation() {
      const [t, e] = this.parentDimensions, { _borderLineWidth: s } = _R, i = s / t, n = s / e;
      switch (this.rotation) {
        case 90:
          return [
            -i,
            n
          ];
        case 180:
          return [
            i,
            n
          ];
        case 270:
          return [
            i,
            -n
          ];
        default:
          return [
            -i,
            -n
          ];
      }
    }
    get _mustFixPosition() {
      return true;
    }
    fixAndSetPosition(t = this.rotation) {
      const { div: { style: e }, pageDimensions: [s, i] } = this;
      let { x: n, y: r, width: a, height: o } = this;
      if (a *= s, o *= i, n *= s, r *= i, this._mustFixPosition) switch (t) {
        case 0:
          n = Math.max(0, Math.min(s - a, n)), r = Math.max(0, Math.min(i - o, r));
          break;
        case 90:
          n = Math.max(0, Math.min(s - o, n)), r = Math.min(i, Math.max(a, r));
          break;
        case 180:
          n = Math.min(s, Math.max(a, n)), r = Math.min(i, Math.max(o, r));
          break;
        case 270:
          n = Math.min(s, Math.max(o, n)), r = Math.max(0, Math.min(i - a, r));
          break;
      }
      this.x = n /= s, this.y = r /= i;
      const [l, h] = this.getBaseTranslation();
      n += l, r += h, e.left = `${(100 * n).toFixed(2)}%`, e.top = `${(100 * r).toFixed(2)}%`, this.moveInDOM();
    }
    screenToPageTranslation(t, e) {
      var _a9;
      return __privateMethod(_a9 = _R, _R_static, w_fn).call(_a9, t, e, this.parentRotation);
    }
    pageTranslationToScreen(t, e) {
      var _a9;
      return __privateMethod(_a9 = _R, _R_static, w_fn).call(_a9, t, e, 360 - this.parentRotation);
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
      const { parentScale: t, pageDimensions: [e, s] } = this;
      return [
        e * t,
        s * t
      ];
    }
    setDims(t, e) {
      const [s, i] = this.parentDimensions, { style: n } = this.div;
      n.width = `${(100 * t / s).toFixed(2)}%`, __privateGet(this, _l4) || (n.height = `${(100 * e / i).toFixed(2)}%`);
    }
    fixDims() {
      const { style: t } = this.div, { height: e, width: s } = t, i = s.endsWith("%"), n = !__privateGet(this, _l4) && e.endsWith("%");
      if (i && n) return;
      const [r, a] = this.parentDimensions;
      i || (t.width = `${(100 * parseFloat(s) / r).toFixed(2)}%`), !__privateGet(this, _l4) && !n && (t.height = `${(100 * parseFloat(e) / a).toFixed(2)}%`);
    }
    getInitialTranslation() {
      return [
        0,
        0
      ];
    }
    _onResized() {
    }
    static _round(t) {
      return Math.round(t * 1e4) / 1e4;
    }
    _onResizing() {
    }
    altTextFinish() {
      var _a9;
      (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.finish();
    }
    async addEditToolbar() {
      return this._editToolbar || __privateGet(this, _m2) ? this._editToolbar : (this._editToolbar = new Yt(this), this.div.append(this._editToolbar.render()), __privateGet(this, _s9) && await this._editToolbar.addAltText(__privateGet(this, _s9)), this._editToolbar);
    }
    removeEditToolbar() {
      var _a9;
      this._editToolbar && (this._editToolbar.remove(), this._editToolbar = null, (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.destroy());
    }
    addContainer(t) {
      var _a9;
      const e = (_a9 = this._editToolbar) == null ? void 0 : _a9.div;
      e ? e.before(t) : this.div.append(t);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    async addAltTextButton() {
      __privateGet(this, _s9) || (wt.initialize(_R._l10n), __privateSet(this, _s9, new wt(this)), __privateGet(this, _t10) && (__privateGet(this, _s9).data = __privateGet(this, _t10), __privateSet(this, _t10, null)), await this.addEditToolbar());
    }
    get altTextData() {
      var _a9;
      return (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.data;
    }
    set altTextData(t) {
      __privateGet(this, _s9) && (__privateGet(this, _s9).data = t);
    }
    get guessedAltText() {
      var _a9;
      return (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.guessedText;
    }
    async setGuessedAltText(t) {
      var _a9;
      await ((_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.setGuessedText(t));
    }
    serializeAltText(t) {
      var _a9;
      return (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.serialize(t);
    }
    hasAltText() {
      return !!__privateGet(this, _s9) && !__privateGet(this, _s9).isEmpty();
    }
    hasAltTextData() {
      var _a9;
      return ((_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.hasData()) ?? false;
    }
    render() {
      var _a9;
      this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = __privateGet(this, _i7) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground(), __privateMethod(this, _R_instances, O_fn).call(this);
      const [t, e] = this.parentDimensions;
      this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * e / t).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * t / e).toFixed(2)}%`);
      const [s, i] = this.getInitialTranslation();
      return this.translate(s, i), le(this, this.div, [
        "pointerdown"
      ]), this.isResizable && this._uiManager._supportsPinchToZoom && (__privateGet(this, _S2) || __privateSet(this, _S2, new ge({
        container: this.div,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: __privateMethod(this, _R_instances, __fn).bind(this),
        onPinching: __privateMethod(this, _R_instances, L_fn).bind(this),
        onPinchEnd: __privateMethod(this, _R_instances, G_fn).bind(this),
        signal: this._uiManager._signal
      }))), (_a9 = this._uiManager._editorUndoBar) == null ? void 0 : _a9.hide(), this.div;
    }
    pointerdown(t) {
      const { isMac: e } = at.platform;
      if (t.button !== 0 || t.ctrlKey && e) {
        t.preventDefault();
        return;
      }
      if (__privateSet(this, _f3, true), this._isDraggable) {
        __privateMethod(this, _R_instances, U_fn).call(this, t);
        return;
      }
      __privateMethod(this, _R_instances, z_fn).call(this, t);
    }
    get isSelected() {
      return this._uiManager.isSelected(this);
    }
    _onStartDragging() {
    }
    _onStopDragging() {
    }
    moveInDOM() {
      __privateGet(this, _b2) && clearTimeout(__privateGet(this, _b2)), __privateSet(this, _b2, setTimeout(() => {
        var _a9;
        __privateSet(this, _b2, null), (_a9 = this.parent) == null ? void 0 : _a9.moveEditorInDOM(this);
      }, 0));
    }
    _setParentAndPosition(t, e, s) {
      t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
    }
    getRect(t, e, s = this.rotation) {
      const i = this.parentScale, [n, r] = this.pageDimensions, [a, o] = this.pageTranslation, l = t / i, h = e / i, d = this.x * n, u = this.y * r, f = this.width * n, p = this.height * r;
      switch (s) {
        case 0:
          return [
            d + l + a,
            r - u - h - p + o,
            d + l + f + a,
            r - u - h + o
          ];
        case 90:
          return [
            d + h + a,
            r - u + l + o,
            d + h + p + a,
            r - u + l + f + o
          ];
        case 180:
          return [
            d - l - f + a,
            r - u + h + o,
            d - l + a,
            r - u + h + p + o
          ];
        case 270:
          return [
            d - h - p + a,
            r - u - l - f + o,
            d - h + a,
            r - u - l + o
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    getRectInCurrentCoords(t, e) {
      const [s, i, n, r] = t, a = n - s, o = r - i;
      switch (this.rotation) {
        case 0:
          return [
            s,
            e - r,
            a,
            o
          ];
        case 90:
          return [
            s,
            e - i,
            o,
            a
          ];
        case 180:
          return [
            n,
            e - i,
            a,
            o
          ];
        case 270:
          return [
            n,
            e - r,
            o,
            a
          ];
        default:
          throw new Error("Invalid rotation");
      }
    }
    onceAdded(t) {
    }
    isEmpty() {
      return false;
    }
    enableEditMode() {
      __privateSet(this, _m2, true);
    }
    disableEditMode() {
      __privateSet(this, _m2, false);
    }
    isInEditMode() {
      return __privateGet(this, _m2);
    }
    shouldGetKeyboardEvents() {
      return __privateGet(this, _g2);
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
      const { top: t, left: e, bottom: s, right: i } = this.getClientDimensions(), { innerHeight: n, innerWidth: r } = window;
      return e < r && i > 0 && t < n && s > 0;
    }
    rebuild() {
      __privateMethod(this, _R_instances, O_fn).call(this);
    }
    rotate(t) {
    }
    resize() {
    }
    serializeDeleted() {
      var _a9;
      return {
        id: this.annotationElementId,
        deleted: true,
        pageIndex: this.pageIndex,
        popupRef: ((_a9 = this._initialData) == null ? void 0 : _a9.popupRef) || ""
      };
    }
    serialize(t = false, e = null) {
      H("An editor must be serializable");
    }
    static async deserialize(t, e, s) {
      const i = new this.prototype.constructor({
        parent: e,
        id: e.getNextId(),
        uiManager: s
      });
      i.rotation = t.rotation, __privateSet(i, _t10, t.accessibilityData);
      const [n, r] = i.pageDimensions, [a, o, l, h] = i.getRectInCurrentCoords(t.rect, r);
      return i.x = a / n, i.y = o / r, i.width = l / n, i.height = h / r, i;
    }
    get hasBeenModified() {
      return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
    }
    remove() {
      var _a9, _b6;
      if ((_a9 = __privateGet(this, _u4)) == null ? void 0 : _a9.abort(), __privateSet(this, _u4, null), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), __privateGet(this, _b2) && (clearTimeout(__privateGet(this, _b2)), __privateSet(this, _b2, null)), __privateMethod(this, _R_instances, H_fn2).call(this), this.removeEditToolbar(), __privateGet(this, _v2)) {
        for (const t of __privateGet(this, _v2).values()) clearTimeout(t);
        __privateSet(this, _v2, null);
      }
      this.parent = null, (_b6 = __privateGet(this, _S2)) == null ? void 0 : _b6.destroy(), __privateSet(this, _S2, null);
    }
    get isResizable() {
      return false;
    }
    makeResizable() {
      this.isResizable && (__privateMethod(this, _R_instances, C_fn).call(this), __privateGet(this, _o4).classList.remove("hidden"), le(this, this.div, [
        "keydown"
      ]));
    }
    get toolbarPosition() {
      return null;
    }
    keydown(t) {
      if (!this.isResizable || t.target !== this.div || t.key !== "Enter") return;
      this._uiManager.setSelected(this), __privateSet(this, _h4, {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height
      });
      const e = __privateGet(this, _o4).children;
      if (!__privateGet(this, _e9)) {
        __privateSet(this, _e9, Array.from(e));
        const r = __privateMethod(this, _R_instances, F_fn).bind(this), a = __privateMethod(this, _R_instances, B_fn).bind(this), o = this._uiManager._signal;
        for (const l of __privateGet(this, _e9)) {
          const h = l.getAttribute("data-resizer-name");
          l.setAttribute("role", "spinbutton"), l.addEventListener("keydown", r, {
            signal: o
          }), l.addEventListener("blur", a, {
            signal: o
          }), l.addEventListener("focus", __privateMethod(this, _R_instances, j_fn).bind(this, h), {
            signal: o
          }), l.setAttribute("data-l10n-id", _R._l10nResizer[h]);
        }
      }
      const s = __privateGet(this, _e9)[0];
      let i = 0;
      for (const r of e) {
        if (r === s) break;
        i++;
      }
      const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (__privateGet(this, _e9).length / 4);
      if (n !== i) {
        if (n < i) for (let a = 0; a < i - n; a++) __privateGet(this, _o4).append(__privateGet(this, _o4).firstChild);
        else if (n > i) for (let a = 0; a < n - i; a++) __privateGet(this, _o4).firstChild.before(__privateGet(this, _o4).lastChild);
        let r = 0;
        for (const a of e) {
          const l = __privateGet(this, _e9)[r++].getAttribute("data-resizer-name");
          a.setAttribute("data-l10n-id", _R._l10nResizer[l]);
        }
      }
      __privateMethod(this, _R_instances, I_fn).call(this, 0), __privateSet(this, _g2, true), __privateGet(this, _o4).firstChild.focus({
        focusVisible: true
      }), t.preventDefault(), t.stopImmediatePropagation();
    }
    _resizeWithKeyboard(t, e) {
      __privateGet(this, _g2) && __privateMethod(this, _R_instances, E_fn).call(this, __privateGet(this, _d3), {
        deltaX: t,
        deltaY: e,
        fromKeyboard: true
      });
    }
    _stopResizingWithKeyboard() {
      __privateMethod(this, _R_instances, H_fn2).call(this), this.div.focus();
    }
    select() {
      var _a9, _b6, _c15;
      if (this.makeResizable(), (_a9 = this.div) == null ? void 0 : _a9.classList.add("selectedEditor"), !this._editToolbar) {
        this.addEditToolbar().then(() => {
          var _a10, _b7;
          ((_a10 = this.div) == null ? void 0 : _a10.classList.contains("selectedEditor")) && ((_b7 = this._editToolbar) == null ? void 0 : _b7.show());
        });
        return;
      }
      (_b6 = this._editToolbar) == null ? void 0 : _b6.show(), (_c15 = __privateGet(this, _s9)) == null ? void 0 : _c15.toggleAltTextBadge(false);
    }
    unselect() {
      var _a9, _b6, _c15, _d10, _e39;
      (_a9 = __privateGet(this, _o4)) == null ? void 0 : _a9.classList.add("hidden"), (_b6 = this.div) == null ? void 0 : _b6.classList.remove("selectedEditor"), ((_c15 = this.div) == null ? void 0 : _c15.contains(document.activeElement)) && this._uiManager.currentLayer.div.focus({
        preventScroll: true
      }), (_d10 = this._editToolbar) == null ? void 0 : _d10.hide(), (_e39 = __privateGet(this, _s9)) == null ? void 0 : _e39.toggleAltTextBadge(true);
    }
    updateParams(t, e) {
    }
    disableEditing() {
    }
    enableEditing() {
    }
    enterInEditMode() {
    }
    getImageForAltText() {
      return null;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return __privateGet(this, _p2);
    }
    set isEditing(t) {
      __privateSet(this, _p2, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
    }
    setAspectRatio(t, e) {
      __privateSet(this, _l4, true);
      const s = t / e, { style: i } = this.div;
      i.aspectRatio = s, i.height = "auto";
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return true;
    }
    get telemetryInitialData() {
      return {
        action: "added"
      };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(t, e = false) {
      if (e) {
        __privateGet(this, _v2) || __privateSet(this, _v2, /* @__PURE__ */ new Map());
        const { action: s } = t;
        let i = __privateGet(this, _v2).get(s);
        i && clearTimeout(i), i = setTimeout(() => {
          this._reportTelemetry(t), __privateGet(this, _v2).delete(s), __privateGet(this, _v2).size === 0 && __privateSet(this, _v2, null);
        }, _R._telemetryTimeout), __privateGet(this, _v2).set(s, i);
        return;
      }
      t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
        source: this,
        details: {
          type: "editing",
          data: t
        }
      });
    }
    show(t = this._isVisible) {
      this.div.classList.toggle("hidden", !t), this._isVisible = t;
    }
    enable() {
      this.div && (this.div.tabIndex = 0), __privateSet(this, _i7, false);
    }
    disable() {
      this.div && (this.div.tabIndex = -1), __privateSet(this, _i7, true);
    }
    renderAnnotationElement(t) {
      let e = t.container.querySelector(".annotationContent");
      if (!e) e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
      else if (e.nodeName === "CANVAS") {
        const s = e;
        e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
      }
      return e;
    }
    resetAnnotationElement(t) {
      const { firstChild: e } = t.container;
      (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
    }
  };
  _t10 = new WeakMap();
  _e9 = new WeakMap();
  _s9 = new WeakMap();
  _i7 = new WeakMap();
  _r6 = new WeakMap();
  _n6 = new WeakMap();
  _l4 = new WeakMap();
  _o4 = new WeakMap();
  _c4 = new WeakMap();
  _h4 = new WeakMap();
  _u4 = new WeakMap();
  _d3 = new WeakMap();
  _f3 = new WeakMap();
  _a2 = new WeakMap();
  _p2 = new WeakMap();
  _m2 = new WeakMap();
  _g2 = new WeakMap();
  _b2 = new WeakMap();
  _y2 = new WeakMap();
  _A2 = new WeakMap();
  _v2 = new WeakMap();
  _S2 = new WeakMap();
  _x2 = new WeakMap();
  _T2 = new WeakMap();
  _R_instances = new WeakSet();
  k_fn = function([t, e], s, i) {
    [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
  };
  _R_static = new WeakSet();
  w_fn = function(t, e, s) {
    switch (s) {
      case 90:
        return [
          e,
          -t
        ];
      case 180:
        return [
          -t,
          -e
        ];
      case 270:
        return [
          -e,
          t
        ];
      default:
        return [
          t,
          e
        ];
    }
  };
  P_fn = function(t) {
    switch (t) {
      case 90: {
        const [e, s] = this.pageDimensions;
        return [
          0,
          -e / s,
          s / e,
          0
        ];
      }
      case 180:
        return [
          -1,
          0,
          0,
          -1
        ];
      case 270: {
        const [e, s] = this.pageDimensions;
        return [
          0,
          e / s,
          -s / e,
          0
        ];
      }
      default:
        return [
          1,
          0,
          0,
          1
        ];
    }
  };
  C_fn = function() {
    if (__privateGet(this, _o4)) return;
    __privateSet(this, _o4, document.createElement("div")), __privateGet(this, _o4).classList.add("resizers");
    const t = this._willKeepAspectRatio ? [
      "topLeft",
      "topRight",
      "bottomRight",
      "bottomLeft"
    ] : [
      "topLeft",
      "topMiddle",
      "topRight",
      "middleRight",
      "bottomRight",
      "bottomMiddle",
      "bottomLeft",
      "middleLeft"
    ], e = this._uiManager._signal;
    for (const s of t) {
      const i = document.createElement("div");
      __privateGet(this, _o4).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", __privateMethod(this, _R_instances, M_fn).bind(this, s), {
        signal: e
      }), i.addEventListener("contextmenu", At, {
        signal: e
      }), i.tabIndex = -1;
    }
    this.div.prepend(__privateGet(this, _o4));
  };
  M_fn = function(t, e) {
    var _a9;
    e.preventDefault();
    const { isMac: s } = at.platform;
    if (e.button !== 0 || e.ctrlKey && s) return;
    (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.toggle(false);
    const i = this._isDraggable;
    this._isDraggable = false, __privateSet(this, _c4, [
      e.screenX,
      e.screenY
    ]);
    const n = new AbortController(), r = this._uiManager.combinedSignal(n);
    this.parent.togglePointerEvents(false), window.addEventListener("pointermove", __privateMethod(this, _R_instances, E_fn).bind(this, t), {
      passive: true,
      capture: true,
      signal: r
    }), window.addEventListener("touchmove", ft, {
      passive: false,
      signal: r
    }), window.addEventListener("contextmenu", At, {
      signal: r
    }), __privateSet(this, _h4, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const a = this.parent.div.style.cursor, o = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
    const l = () => {
      var _a10;
      n.abort(), this.parent.togglePointerEvents(true), (_a10 = __privateGet(this, _s9)) == null ? void 0 : _a10.toggle(true), this._isDraggable = i, this.parent.div.style.cursor = a, this.div.style.cursor = o, __privateMethod(this, _R_instances, N_fn).call(this);
    };
    window.addEventListener("pointerup", l, {
      signal: r
    }), window.addEventListener("blur", l, {
      signal: r
    });
  };
  D_fn = function(t, e, s, i) {
    this.width = s, this.height = i, this.x = t, this.y = e;
    const [n, r] = this.parentDimensions;
    this.setDims(n * s, r * i), this.fixAndSetPosition(), this._onResized();
  };
  N_fn = function() {
    if (!__privateGet(this, _h4)) return;
    const { savedX: t, savedY: e, savedWidth: s, savedHeight: i } = __privateGet(this, _h4);
    __privateSet(this, _h4, null);
    const n = this.x, r = this.y, a = this.width, o = this.height;
    n === t && r === e && a === s && o === i || this.addCommands({
      cmd: __privateMethod(this, _R_instances, D_fn).bind(this, n, r, a, o),
      undo: __privateMethod(this, _R_instances, D_fn).bind(this, t, e, s, i),
      mustExec: true
    });
  };
  E_fn = function(t, e) {
    const [s, i] = this.parentDimensions, n = this.x, r = this.y, a = this.width, o = this.height, l = _R.MIN_SIZE / s, h = _R.MIN_SIZE / i, d = __privateMethod(this, _R_instances, P_fn).call(this, this.rotation), u = (x, P) => [
      d[0] * x + d[2] * P,
      d[1] * x + d[3] * P
    ], f = __privateMethod(this, _R_instances, P_fn).call(this, 360 - this.rotation), p = (x, P) => [
      f[0] * x + f[2] * P,
      f[1] * x + f[3] * P
    ];
    let g, b, m = false, A = false;
    switch (t) {
      case "topLeft":
        m = true, g = (x, P) => [
          0,
          0
        ], b = (x, P) => [
          x,
          P
        ];
        break;
      case "topMiddle":
        g = (x, P) => [
          x / 2,
          0
        ], b = (x, P) => [
          x / 2,
          P
        ];
        break;
      case "topRight":
        m = true, g = (x, P) => [
          x,
          0
        ], b = (x, P) => [
          0,
          P
        ];
        break;
      case "middleRight":
        A = true, g = (x, P) => [
          x,
          P / 2
        ], b = (x, P) => [
          0,
          P / 2
        ];
        break;
      case "bottomRight":
        m = true, g = (x, P) => [
          x,
          P
        ], b = (x, P) => [
          0,
          0
        ];
        break;
      case "bottomMiddle":
        g = (x, P) => [
          x / 2,
          P
        ], b = (x, P) => [
          x / 2,
          0
        ];
        break;
      case "bottomLeft":
        m = true, g = (x, P) => [
          0,
          P
        ], b = (x, P) => [
          x,
          0
        ];
        break;
      case "middleLeft":
        A = true, g = (x, P) => [
          0,
          P / 2
        ], b = (x, P) => [
          x,
          P / 2
        ];
        break;
    }
    const _ = g(a, o), y = b(a, o);
    let v = u(...y);
    const S = _R._round(n + v[0]), w = _R._round(r + v[1]);
    let T = 1, M = 1, B, N;
    if (e.fromKeyboard) ({ deltaX: B, deltaY: N } = e);
    else {
      const { screenX: x, screenY: P } = e, [dt, _t54] = __privateGet(this, _c4);
      [B, N] = this.screenToPageTranslation(x - dt, P - _t54), __privateGet(this, _c4)[0] = x, __privateGet(this, _c4)[1] = P;
    }
    if ([B, N] = p(B / s, N / i), m) {
      const x = Math.hypot(a, o);
      T = M = Math.max(Math.min(Math.hypot(y[0] - _[0] - B, y[1] - _[1] - N) / x, 1 / a, 1 / o), l / a, h / o);
    } else A ? T = Math.max(l, Math.min(1, Math.abs(y[0] - _[0] - B))) / a : M = Math.max(h, Math.min(1, Math.abs(y[1] - _[1] - N))) / o;
    const G = _R._round(a * T), q = _R._round(o * M);
    v = u(...b(G, q));
    const $ = S - v[0], it = w - v[1];
    __privateGet(this, _a2) || __privateSet(this, _a2, [
      this.x,
      this.y,
      this.width,
      this.height
    ]), this.width = G, this.height = q, this.x = $, this.y = it, this.setDims(s * G, i * q), this.fixAndSetPosition(), this._onResizing();
  };
  __fn = function() {
    var _a9;
    __privateSet(this, _h4, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    }), (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.toggle(false), this.parent.togglePointerEvents(false);
  };
  L_fn = function(t, e, s) {
    let n = 0.7 * (s / e) + 1 - 0.7;
    if (n === 1) return;
    const r = __privateMethod(this, _R_instances, P_fn).call(this, this.rotation), a = (S, w) => [
      r[0] * S + r[2] * w,
      r[1] * S + r[3] * w
    ], [o, l] = this.parentDimensions, h = this.x, d = this.y, u = this.width, f = this.height, p = _R.MIN_SIZE / o, g = _R.MIN_SIZE / l;
    n = Math.max(Math.min(n, 1 / u, 1 / f), p / u, g / f);
    const b = _R._round(u * n), m = _R._round(f * n);
    if (b === u && m === f) return;
    __privateGet(this, _a2) || __privateSet(this, _a2, [
      h,
      d,
      u,
      f
    ]);
    const A = a(u / 2, f / 2), _ = _R._round(h + A[0]), y = _R._round(d + A[1]), v = a(b / 2, m / 2);
    this.x = _ - v[0], this.y = y - v[1], this.width = b, this.height = m, this.setDims(o * b, l * m), this.fixAndSetPosition(), this._onResizing();
  };
  G_fn = function() {
    var _a9;
    (_a9 = __privateGet(this, _s9)) == null ? void 0 : _a9.toggle(true), this.parent.togglePointerEvents(true), __privateMethod(this, _R_instances, N_fn).call(this);
  };
  z_fn = function(t) {
    const { isMac: e } = at.platform;
    t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
  };
  U_fn = function(t) {
    const { isSelected: e } = this;
    this._uiManager.setUpDragSession();
    let s = false;
    const i = new AbortController(), n = this._uiManager.combinedSignal(i), r = {
      capture: true,
      passive: false,
      signal: n
    }, a = (l) => {
      i.abort(), __privateSet(this, _r6, null), __privateSet(this, _f3, false), this._uiManager.endDragSession() || __privateMethod(this, _R_instances, z_fn).call(this, l), s && this._onStopDragging();
    };
    e && (__privateSet(this, _y2, t.clientX), __privateSet(this, _A2, t.clientY), __privateSet(this, _r6, t.pointerId), __privateSet(this, _n6, t.pointerType), window.addEventListener("pointermove", (l) => {
      s || (s = true, this._onStartDragging());
      const { clientX: h, clientY: d, pointerId: u } = l;
      if (u !== __privateGet(this, _r6)) {
        ft(l);
        return;
      }
      const [f, p] = this.screenToPageTranslation(h - __privateGet(this, _y2), d - __privateGet(this, _A2));
      __privateSet(this, _y2, h), __privateSet(this, _A2, d), this._uiManager.dragSelectedEditors(f, p);
    }, r), window.addEventListener("touchmove", ft, r), window.addEventListener("pointerdown", (l) => {
      l.pointerType === __privateGet(this, _n6) && (__privateGet(this, _S2) || l.isPrimary) && a(l), ft(l);
    }, r));
    const o = (l) => {
      if (!__privateGet(this, _r6) || __privateGet(this, _r6) === l.pointerId) {
        a(l);
        return;
      }
      ft(l);
    };
    window.addEventListener("pointerup", o, {
      signal: n
    }), window.addEventListener("blur", o, {
      signal: n
    });
  };
  O_fn = function() {
    if (__privateGet(this, _u4) || !this.div) return;
    __privateSet(this, _u4, new AbortController());
    const t = this._uiManager.combinedSignal(__privateGet(this, _u4));
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal: t
    }), this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal: t
    });
  };
  F_fn = function(t) {
    _R._resizerKeyboardManager.exec(this, t);
  };
  B_fn = function(t) {
    var _a9;
    __privateGet(this, _g2) && ((_a9 = t.relatedTarget) == null ? void 0 : _a9.parentNode) !== __privateGet(this, _o4) && __privateMethod(this, _R_instances, H_fn2).call(this);
  };
  j_fn = function(t) {
    __privateSet(this, _d3, __privateGet(this, _g2) ? t : "");
  };
  I_fn = function(t) {
    if (__privateGet(this, _e9)) for (const e of __privateGet(this, _e9)) e.tabIndex = t;
  };
  H_fn2 = function() {
    __privateSet(this, _g2, false), __privateMethod(this, _R_instances, I_fn).call(this, -1), __privateMethod(this, _R_instances, N_fn).call(this);
  };
  __privateAdd(_R, _R_static);
  __publicField(_R, "_l10n", null);
  __publicField(_R, "_l10nResizer", null);
  __publicField(_R, "_borderLineWidth", -1);
  __publicField(_R, "_colorManager", new $e());
  __publicField(_R, "_zIndex", 1);
  __publicField(_R, "_telemetryTimeout", 1e3);
  let R = _R;
  class pi extends R {
    constructor(t) {
      super(t), this.annotationElementId = t.annotationElementId, this.deleted = true;
    }
    serialize() {
      return this.serializeDeleted();
    }
  }
  const ts = 3285377520, gt = 4294901760, vt = 65535;
  class _s {
    constructor(t) {
      this.h1 = t ? t & 4294967295 : ts, this.h2 = t ? t & 4294967295 : ts;
    }
    update(t) {
      let e, s;
      if (typeof t == "string") {
        e = new Uint8Array(t.length * 2), s = 0;
        for (let g = 0, b = t.length; g < b; g++) {
          const m = t.charCodeAt(g);
          m <= 255 ? e[s++] = m : (e[s++] = m >>> 8, e[s++] = m & 255);
        }
      } else if (ArrayBuffer.isView(t)) e = t.slice(), s = e.byteLength;
      else throw new Error("Invalid data format, must be a string or TypedArray.");
      const i = s >> 2, n = s - i * 4, r = new Uint32Array(e.buffer, 0, i);
      let a = 0, o = 0, l = this.h1, h = this.h2;
      const d = 3432918353, u = 461845907, f = d & vt, p = u & vt;
      for (let g = 0; g < i; g++) g & 1 ? (a = r[g], a = a * d & gt | a * f & vt, a = a << 15 | a >>> 17, a = a * u & gt | a * p & vt, l ^= a, l = l << 13 | l >>> 19, l = l * 5 + 3864292196) : (o = r[g], o = o * d & gt | o * f & vt, o = o << 15 | o >>> 17, o = o * u & gt | o * p & vt, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196);
      switch (a = 0, n) {
        case 3:
          a ^= e[i * 4 + 2] << 16;
        case 2:
          a ^= e[i * 4 + 1] << 8;
        case 1:
          a ^= e[i * 4], a = a * d & gt | a * f & vt, a = a << 15 | a >>> 17, a = a * u & gt | a * p & vt, i & 1 ? l ^= a : h ^= a;
      }
      this.h1 = l, this.h2 = h;
    }
    hexdigest() {
      let t = this.h1, e = this.h2;
      return t ^= e >>> 1, t = t * 3981806797 & gt | t * 36045 & vt, e = e * 4283543511 & gt | ((e << 16 | t >>> 16) * 2950163797 & gt) >>> 16, t ^= e >>> 1, t = t * 444984403 & gt | t * 60499 & vt, e = e * 3301882366 & gt | ((e << 16 | t >>> 16) * 3120437893 & gt) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
    }
  }
  const ke = Object.freeze({
    map: null,
    hash: "",
    transfer: void 0
  });
  class Ge {
    constructor() {
      __privateAdd(this, _Ge_instances);
      __privateAdd(this, _t11, false);
      __privateAdd(this, _e10, null);
      __privateAdd(this, _s10, /* @__PURE__ */ new Map());
      this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
    }
    getValue(t, e) {
      const s = __privateGet(this, _s10).get(t);
      return s === void 0 ? e : Object.assign(e, s);
    }
    getRawValue(t) {
      return __privateGet(this, _s10).get(t);
    }
    remove(t) {
      if (__privateGet(this, _s10).delete(t), __privateGet(this, _s10).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
        for (const e of __privateGet(this, _s10).values()) if (e instanceof R) return;
        this.onAnnotationEditor(null);
      }
    }
    setValue(t, e) {
      const s = __privateGet(this, _s10).get(t);
      let i = false;
      if (s !== void 0) for (const [n, r] of Object.entries(e)) s[n] !== r && (i = true, s[n] = r);
      else i = true, __privateGet(this, _s10).set(t, e);
      i && __privateMethod(this, _Ge_instances, i_fn3).call(this), e instanceof R && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
    }
    has(t) {
      return __privateGet(this, _s10).has(t);
    }
    getAll() {
      return __privateGet(this, _s10).size > 0 ? De(__privateGet(this, _s10)) : null;
    }
    setAll(t) {
      for (const [e, s] of Object.entries(t)) this.setValue(e, s);
    }
    get size() {
      return __privateGet(this, _s10).size;
    }
    resetModified() {
      __privateGet(this, _t11) && (__privateSet(this, _t11, false), typeof this.onResetModified == "function" && this.onResetModified());
    }
    get print() {
      return new ys(this);
    }
    get serializable() {
      if (__privateGet(this, _s10).size === 0) return ke;
      const t = /* @__PURE__ */ new Map(), e = new _s(), s = [], i = /* @__PURE__ */ Object.create(null);
      let n = false;
      for (const [r, a] of __privateGet(this, _s10)) {
        const o = a instanceof R ? a.serialize(false, i) : a;
        o && (t.set(r, o), e.update(`${r}:${JSON.stringify(o)}`), n || (n = !!o.bitmap));
      }
      if (n) for (const r of t.values()) r.bitmap && s.push(r.bitmap);
      return t.size > 0 ? {
        map: t,
        hash: e.hexdigest(),
        transfer: s
      } : ke;
    }
    get editorStats() {
      let t = null;
      const e = /* @__PURE__ */ new Map();
      for (const s of __privateGet(this, _s10).values()) {
        if (!(s instanceof R)) continue;
        const i = s.telemetryFinalData;
        if (!i) continue;
        const { type: n } = i;
        e.has(n) || e.set(n, Object.getPrototypeOf(s).constructor), t || (t = /* @__PURE__ */ Object.create(null));
        const r = t[n] || (t[n] = /* @__PURE__ */ new Map());
        for (const [a, o] of Object.entries(i)) {
          if (a === "type") continue;
          let l = r.get(a);
          l || (l = /* @__PURE__ */ new Map(), r.set(a, l));
          const h = l.get(o) ?? 0;
          l.set(o, h + 1);
        }
      }
      for (const [s, i] of e) t[s] = i.computeTelemetryFinalData(t[s]);
      return t;
    }
    resetModifiedIds() {
      __privateSet(this, _e10, null);
    }
    get modifiedIds() {
      if (__privateGet(this, _e10)) return __privateGet(this, _e10);
      const t = [];
      for (const e of __privateGet(this, _s10).values()) !(e instanceof R) || !e.annotationElementId || !e.serialize() || t.push(e.annotationElementId);
      return __privateSet(this, _e10, {
        ids: new Set(t),
        hash: t.join(",")
      });
    }
  }
  _t11 = new WeakMap();
  _e10 = new WeakMap();
  _s10 = new WeakMap();
  _Ge_instances = new WeakSet();
  i_fn3 = function() {
    __privateGet(this, _t11) || (__privateSet(this, _t11, true), typeof this.onSetModified == "function" && this.onSetModified());
  };
  class ys extends Ge {
    constructor(t) {
      super();
      __privateAdd(this, _t12);
      const { map: e, hash: s, transfer: i } = t.serializable, n = structuredClone(e, i ? {
        transfer: i
      } : null);
      __privateSet(this, _t12, {
        map: n,
        hash: s,
        transfer: i
      });
    }
    get print() {
      H("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
      return __privateGet(this, _t12);
    }
    get modifiedIds() {
      return F(this, "modifiedIds", {
        ids: /* @__PURE__ */ new Set(),
        hash: ""
      });
    }
  }
  _t12 = new WeakMap();
  class gi {
    constructor({ ownerDocument: t = globalThis.document, styleElement: e = null }) {
      __privateAdd(this, _t13, /* @__PURE__ */ new Set());
      this._document = t, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
    }
    addNativeFontFace(t) {
      this.nativeFontFaces.add(t), this._document.fonts.add(t);
    }
    removeNativeFontFace(t) {
      this.nativeFontFaces.delete(t), this._document.fonts.delete(t);
    }
    insertRule(t) {
      this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
      const e = this.styleElement.sheet;
      e.insertRule(t, e.cssRules.length);
    }
    clear() {
      for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
      this.nativeFontFaces.clear(), __privateGet(this, _t13).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
    }
    async loadSystemFont({ systemFontInfo: t, _inspectFont: e }) {
      if (!(!t || __privateGet(this, _t13).has(t.loadedName))) {
        if (X(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
          const { loadedName: s, src: i, style: n } = t, r = new FontFace(s, i, n);
          this.addNativeFontFace(r);
          try {
            await r.load(), __privateGet(this, _t13).add(s), e == null ? void 0 : e(t);
          } catch {
            D(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(r);
          }
          return;
        }
        H("Not implemented: loadSystemFont without the Font Loading API.");
      }
    }
    async bind(t) {
      if (t.attached || t.missingFile && !t.systemFontInfo) return;
      if (t.attached = true, t.systemFontInfo) {
        await this.loadSystemFont(t);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        const s = t.createNativeFontFace();
        if (s) {
          this.addNativeFontFace(s);
          try {
            await s.loaded;
          } catch (i) {
            throw D(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = true, i;
          }
        }
        return;
      }
      const e = t.createFontFaceRule();
      if (e) {
        if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
        await new Promise((s) => {
          const i = this._queueLoadingCallback(s);
          this._prepareFontLoadEvent(t, i);
        });
      }
    }
    get isFontLoadingAPISupported() {
      var _a9;
      const t = !!((_a9 = this._document) == null ? void 0 : _a9.fonts);
      return F(this, "isFontLoadingAPISupported", t);
    }
    get isSyncFontLoadingSupported() {
      let t = false;
      return (st || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (t = true), F(this, "isSyncFontLoadingSupported", t);
    }
    _queueLoadingCallback(t) {
      function e() {
        for (X(!i.done, "completeRequest() cannot be called twice."), i.done = true; s.length > 0 && s[0].done; ) {
          const n = s.shift();
          setTimeout(n.callback, 0);
        }
      }
      const { loadingRequests: s } = this, i = {
        done: false,
        complete: e,
        callback: t
      };
      return s.push(i), i;
    }
    get _loadTestFont() {
      const t = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
      return F(this, "_loadTestFont", t);
    }
    _prepareFontLoadEvent(t, e) {
      function s(y, v) {
        return y.charCodeAt(v) << 24 | y.charCodeAt(v + 1) << 16 | y.charCodeAt(v + 2) << 8 | y.charCodeAt(v + 3) & 255;
      }
      function i(y, v, S, w) {
        const T = y.substring(0, v), M = y.substring(v + S);
        return T + w + M;
      }
      let n, r;
      const a = this._document.createElement("canvas");
      a.width = 1, a.height = 1;
      const o = a.getContext("2d");
      let l = 0;
      function h(y, v) {
        if (++l > 30) {
          D("Load test font never loaded."), v();
          return;
        }
        if (o.font = "30px " + y, o.fillText(".", 0, 20), o.getImageData(0, 0, 1, 1).data[3] > 0) {
          v();
          return;
        }
        setTimeout(h.bind(null, y, v));
      }
      const d = `lt${Date.now()}${this.loadTestFontId++}`;
      let u = this._loadTestFont;
      u = i(u, 976, d.length, d);
      const p = 16, g = 1482184792;
      let b = s(u, p);
      for (n = 0, r = d.length - 3; n < r; n += 4) b = b - g + s(d, n) | 0;
      n < d.length && (b = b - g + s(d + "XXX", n) | 0), u = i(u, p, 4, ti(b));
      const m = `url(data:font/opentype;base64,${btoa(u)});`, A = `@font-face {font-family:"${d}";src:${m}}`;
      this.insertRule(A);
      const _ = this._document.createElement("div");
      _.style.visibility = "hidden", _.style.width = _.style.height = "10px", _.style.position = "absolute", _.style.top = _.style.left = "0px";
      for (const y of [
        t.loadedName,
        d
      ]) {
        const v = this._document.createElement("span");
        v.textContent = "Hi", v.style.fontFamily = y, _.append(v);
      }
      this._document.body.append(_), h(d, () => {
        _.remove(), e.complete();
      });
    }
  }
  _t13 = new WeakMap();
  class mi {
    constructor(t, { disableFontFace: e = false, fontExtraProperties: s = false, inspectFont: i = null }) {
      this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
      for (const n in t) this[n] = t[n];
      this.disableFontFace = e === true, this.fontExtraProperties = s === true, this._inspectFont = i;
    }
    createNativeFontFace() {
      var _a9;
      if (!this.data || this.disableFontFace) return null;
      let t;
      if (!this.cssFontInfo) t = new FontFace(this.loadedName, this.data, {});
      else {
        const e = {
          weight: this.cssFontInfo.fontWeight
        };
        this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
      }
      return (_a9 = this._inspectFont) == null ? void 0 : _a9.call(this, this), t;
    }
    createFontFaceRule() {
      var _a9;
      if (!this.data || this.disableFontFace) return null;
      const t = `url(data:${this.mimetype};base64,${ai(this.data)});`;
      let e;
      if (!this.cssFontInfo) e = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
      else {
        let s = `font-weight: ${this.cssFontInfo.fontWeight};`;
        this.cssFontInfo.italicAngle && (s += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${s}src:${t}}`;
      }
      return (_a9 = this._inspectFont) == null ? void 0 : _a9.call(this, this, t), e;
    }
    getPathGenerator(t, e) {
      if (this.compiledGlyphs[e] !== void 0) return this.compiledGlyphs[e];
      const s = this.loadedName + "_path_" + e;
      let i;
      try {
        i = t.get(s);
      } catch (r) {
        D(`getPathGenerator - ignoring character: "${r}".`);
      }
      const n = new Path2D(i || "");
      return this.fontExtraProperties || t.delete(s), this.compiledGlyphs[e] = n;
    }
  }
  const se = {
    DATA: 1,
    ERROR: 2
  }, W = {
    CANCEL: 1,
    CANCEL_COMPLETE: 2,
    CLOSE: 3,
    ENQUEUE: 4,
    ERROR: 5,
    PULL: 6,
    PULL_COMPLETE: 7,
    START_COMPLETE: 8
  };
  function es() {
  }
  function ht(c) {
    if (c instanceof Pt || c instanceof Te || c instanceof Qt || c instanceof Qe || c instanceof oe || c instanceof ye) return c;
    switch (c instanceof Error || typeof c == "object" && c !== null || H('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), c.name) {
      case "AbortException":
        return new Pt(c.message);
      case "InvalidPDFException":
        return new Te(c.message);
      case "MissingPDFException":
        return new Qt(c.message);
      case "PasswordException":
        return new Qe(c.message, c.code);
      case "UnexpectedResponseException":
        return new oe(c.message, c.status);
      case "UnknownErrorException":
        return new ye(c.message, c.details);
    }
    return new ye(c.message, c.toString());
  }
  class Xt {
    constructor(t, e, s) {
      __privateAdd(this, _Xt_instances);
      __privateAdd(this, _t14, new AbortController());
      this.sourceName = t, this.targetName = e, this.comObj = s, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), s.addEventListener("message", __privateMethod(this, _Xt_instances, e_fn2).bind(this), {
        signal: __privateGet(this, _t14).signal
      });
    }
    on(t, e) {
      const s = this.actionHandler;
      if (s[t]) throw new Error(`There is already an actionName called "${t}"`);
      s[t] = e;
    }
    send(t, e, s) {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        data: e
      }, s);
    }
    sendWithPromise(t, e, s) {
      const i = this.callbackId++, n = Promise.withResolvers();
      this.callbackCapabilities[i] = n;
      try {
        this.comObj.postMessage({
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: t,
          callbackId: i,
          data: e
        }, s);
      } catch (r) {
        n.reject(r);
      }
      return n.promise;
    }
    sendWithStream(t, e, s, i) {
      const n = this.streamId++, r = this.sourceName, a = this.targetName, o = this.comObj;
      return new ReadableStream({
        start: (l) => {
          const h = Promise.withResolvers();
          return this.streamControllers[n] = {
            controller: l,
            startCall: h,
            pullCall: null,
            cancelCall: null,
            isClosed: false
          }, o.postMessage({
            sourceName: r,
            targetName: a,
            action: t,
            streamId: n,
            data: e,
            desiredSize: l.desiredSize
          }, i), h.promise;
        },
        pull: (l) => {
          const h = Promise.withResolvers();
          return this.streamControllers[n].pullCall = h, o.postMessage({
            sourceName: r,
            targetName: a,
            stream: W.PULL,
            streamId: n,
            desiredSize: l.desiredSize
          }), h.promise;
        },
        cancel: (l) => {
          X(l instanceof Error, "cancel must have a valid reason");
          const h = Promise.withResolvers();
          return this.streamControllers[n].cancelCall = h, this.streamControllers[n].isClosed = true, o.postMessage({
            sourceName: r,
            targetName: a,
            stream: W.CANCEL,
            streamId: n,
            reason: ht(l)
          }), h.promise;
        }
      }, s);
    }
    destroy() {
      var _a9;
      (_a9 = __privateGet(this, _t14)) == null ? void 0 : _a9.abort(), __privateSet(this, _t14, null);
    }
  }
  _t14 = new WeakMap();
  _Xt_instances = new WeakSet();
  e_fn2 = function({ data: t }) {
    if (t.targetName !== this.sourceName) return;
    if (t.stream) {
      __privateMethod(this, _Xt_instances, i_fn4).call(this, t);
      return;
    }
    if (t.callback) {
      const s = t.callbackId, i = this.callbackCapabilities[s];
      if (!i) throw new Error(`Cannot resolve callback ${s}`);
      if (delete this.callbackCapabilities[s], t.callback === se.DATA) i.resolve(t.data);
      else if (t.callback === se.ERROR) i.reject(ht(t.reason));
      else throw new Error("Unexpected callback case");
      return;
    }
    const e = this.actionHandler[t.action];
    if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
    if (t.callbackId) {
      const s = this.sourceName, i = t.sourceName, n = this.comObj;
      Promise.try(e, t.data).then(function(r) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          callback: se.DATA,
          callbackId: t.callbackId,
          data: r
        });
      }, function(r) {
        n.postMessage({
          sourceName: s,
          targetName: i,
          callback: se.ERROR,
          callbackId: t.callbackId,
          reason: ht(r)
        });
      });
      return;
    }
    if (t.streamId) {
      __privateMethod(this, _Xt_instances, s_fn).call(this, t);
      return;
    }
    e(t.data);
  };
  s_fn = function(t) {
    const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, r = this, a = this.actionHandler[t.action], o = {
      enqueue(l, h = 1, d) {
        if (this.isCancelled) return;
        const u = this.desiredSize;
        this.desiredSize -= h, u > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
          sourceName: s,
          targetName: i,
          stream: W.ENQUEUE,
          streamId: e,
          chunk: l
        }, d);
      },
      close() {
        this.isCancelled || (this.isCancelled = true, n.postMessage({
          sourceName: s,
          targetName: i,
          stream: W.CLOSE,
          streamId: e
        }), delete r.streamSinks[e]);
      },
      error(l) {
        X(l instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = true, n.postMessage({
          sourceName: s,
          targetName: i,
          stream: W.ERROR,
          streamId: e,
          reason: ht(l)
        }));
      },
      sinkCapability: Promise.withResolvers(),
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize: t.desiredSize,
      ready: null
    };
    o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[e] = o, Promise.try(a, t.data, o).then(function() {
      n.postMessage({
        sourceName: s,
        targetName: i,
        stream: W.START_COMPLETE,
        streamId: e,
        success: true
      });
    }, function(l) {
      n.postMessage({
        sourceName: s,
        targetName: i,
        stream: W.START_COMPLETE,
        streamId: e,
        reason: ht(l)
      });
    });
  };
  i_fn4 = function(t) {
    const e = t.streamId, s = this.sourceName, i = t.sourceName, n = this.comObj, r = this.streamControllers[e], a = this.streamSinks[e];
    switch (t.stream) {
      case W.START_COMPLETE:
        t.success ? r.startCall.resolve() : r.startCall.reject(ht(t.reason));
        break;
      case W.PULL_COMPLETE:
        t.success ? r.pullCall.resolve() : r.pullCall.reject(ht(t.reason));
        break;
      case W.PULL:
        if (!a) {
          n.postMessage({
            sourceName: s,
            targetName: i,
            stream: W.PULL_COMPLETE,
            streamId: e,
            success: true
          });
          break;
        }
        a.desiredSize <= 0 && t.desiredSize > 0 && a.sinkCapability.resolve(), a.desiredSize = t.desiredSize, Promise.try(a.onPull || es).then(function() {
          n.postMessage({
            sourceName: s,
            targetName: i,
            stream: W.PULL_COMPLETE,
            streamId: e,
            success: true
          });
        }, function(l) {
          n.postMessage({
            sourceName: s,
            targetName: i,
            stream: W.PULL_COMPLETE,
            streamId: e,
            reason: ht(l)
          });
        });
        break;
      case W.ENQUEUE:
        if (X(r, "enqueue should have stream controller"), r.isClosed) break;
        r.controller.enqueue(t.chunk);
        break;
      case W.CLOSE:
        if (X(r, "close should have stream controller"), r.isClosed) break;
        r.isClosed = true, r.controller.close(), __privateMethod(this, _Xt_instances, r_fn2).call(this, r, e);
        break;
      case W.ERROR:
        X(r, "error should have stream controller"), r.controller.error(ht(t.reason)), __privateMethod(this, _Xt_instances, r_fn2).call(this, r, e);
        break;
      case W.CANCEL_COMPLETE:
        t.success ? r.cancelCall.resolve() : r.cancelCall.reject(ht(t.reason)), __privateMethod(this, _Xt_instances, r_fn2).call(this, r, e);
        break;
      case W.CANCEL:
        if (!a) break;
        const o = ht(t.reason);
        Promise.try(a.onCancel || es, o).then(function() {
          n.postMessage({
            sourceName: s,
            targetName: i,
            stream: W.CANCEL_COMPLETE,
            streamId: e,
            success: true
          });
        }, function(l) {
          n.postMessage({
            sourceName: s,
            targetName: i,
            stream: W.CANCEL_COMPLETE,
            streamId: e,
            reason: ht(l)
          });
        }), a.sinkCapability.reject(o), a.isCancelled = true, delete this.streamSinks[e];
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  };
  r_fn2 = async function(t, e) {
    var _a9, _b6, _c15;
    await Promise.allSettled([
      (_a9 = t.startCall) == null ? void 0 : _a9.promise,
      (_b6 = t.pullCall) == null ? void 0 : _b6.promise,
      (_c15 = t.cancelCall) == null ? void 0 : _c15.promise
    ]), delete this.streamControllers[e];
  };
  class vs {
    constructor({ enableHWA: t = false }) {
      __privateAdd(this, _t15, false);
      __privateSet(this, _t15, t);
    }
    create(t, e) {
      if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
      const s = this._createCanvas(t, e);
      return {
        canvas: s,
        context: s.getContext("2d", {
          willReadFrequently: !__privateGet(this, _t15)
        })
      };
    }
    reset(t, e, s) {
      if (!t.canvas) throw new Error("Canvas is not specified");
      if (e <= 0 || s <= 0) throw new Error("Invalid canvas size");
      t.canvas.width = e, t.canvas.height = s;
    }
    destroy(t) {
      if (!t.canvas) throw new Error("Canvas is not specified");
      t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null;
    }
    _createCanvas(t, e) {
      H("Abstract method `_createCanvas` called.");
    }
  }
  _t15 = new WeakMap();
  class bi extends vs {
    constructor({ ownerDocument: t = globalThis.document, enableHWA: e = false }) {
      super({
        enableHWA: e
      }), this._document = t;
    }
    _createCanvas(t, e) {
      const s = this._document.createElement("canvas");
      return s.width = t, s.height = e, s;
    }
  }
  class ws {
    constructor({ baseUrl: t = null, isCompressed: e = true }) {
      this.baseUrl = t, this.isCompressed = e;
    }
    async fetch({ name: t }) {
      if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
      if (!t) throw new Error("CMap name must be specified.");
      const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
      return this._fetch(e).then((s) => ({
        cMapData: s,
        isCompressed: this.isCompressed
      })).catch((s) => {
        throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
      });
    }
    async _fetch(t) {
      H("Abstract method `_fetch` called.");
    }
  }
  class Ss extends ws {
    async _fetch(t) {
      const e = await fe(t, this.isCompressed ? "arraybuffer" : "text");
      return e instanceof ArrayBuffer ? new Uint8Array(e) : ue(e);
    }
  }
  class Es {
    addFilter(t) {
      return "none";
    }
    addHCMFilter(t, e) {
      return "none";
    }
    addAlphaFilter(t) {
      return "none";
    }
    addLuminosityFilter(t) {
      return "none";
    }
    addHighlightHCMFilter(t, e, s, i, n) {
      return "none";
    }
    destroy(t = false) {
    }
  }
  class Ai extends Es {
    constructor({ docId: t, ownerDocument: e = globalThis.document }) {
      super();
      __privateAdd(this, _Ai_instances);
      __privateAdd(this, _t16);
      __privateAdd(this, _e11);
      __privateAdd(this, _s11);
      __privateAdd(this, _i8);
      __privateAdd(this, _r7);
      __privateAdd(this, _n7);
      __privateAdd(this, _l5, 0);
      __privateSet(this, _i8, t), __privateSet(this, _r7, e);
    }
    addFilter(t) {
      if (!t) return "none";
      let e = __privateGet(this, _Ai_instances, o_get).get(t);
      if (e) return e;
      const [s, i, n] = __privateMethod(this, _Ai_instances, u_fn2).call(this, t), r = t.length === 1 ? s : `${s}${i}${n}`;
      if (e = __privateGet(this, _Ai_instances, o_get).get(r), e) return __privateGet(this, _Ai_instances, o_get).set(t, e), e;
      const a = `g_${__privateGet(this, _i8)}_transfer_map_${__privateWrapper(this, _l5)._++}`, o = __privateMethod(this, _Ai_instances, d_fn2).call(this, a);
      __privateGet(this, _Ai_instances, o_get).set(t, o), __privateGet(this, _Ai_instances, o_get).set(r, o);
      const l = __privateMethod(this, _Ai_instances, p_fn2).call(this, a);
      return __privateMethod(this, _Ai_instances, g_fn).call(this, s, i, n, l), o;
    }
    addHCMFilter(t, e) {
      var _a9;
      const s = `${t}-${e}`, i = "base";
      let n = __privateGet(this, _Ai_instances, c_get).get(i);
      if ((n == null ? void 0 : n.key) === s || (n ? ((_a9 = n.filter) == null ? void 0 : _a9.remove(), n.key = s, n.url = "none", n.filter = null) : (n = {
        key: s,
        url: "none",
        filter: null
      }, __privateGet(this, _Ai_instances, c_get).set(i, n)), !t || !e)) return n.url;
      const r = __privateMethod(this, _Ai_instances, y_fn).call(this, t);
      t = C.makeHexColor(...r);
      const a = __privateMethod(this, _Ai_instances, y_fn).call(this, e);
      if (e = C.makeHexColor(...a), __privateGet(this, _Ai_instances, h_get).style.color = "", t === "#000000" && e === "#ffffff" || t === e) return n.url;
      const o = new Array(256);
      for (let f = 0; f <= 255; f++) {
        const p = f / 255;
        o[f] = p <= 0.03928 ? p / 12.92 : ((p + 0.055) / 1.055) ** 2.4;
      }
      const l = o.join(","), h = `g_${__privateGet(this, _i8)}_hcm_filter`, d = n.filter = __privateMethod(this, _Ai_instances, p_fn2).call(this, h);
      __privateMethod(this, _Ai_instances, g_fn).call(this, l, l, l, d), __privateMethod(this, _Ai_instances, a_fn2).call(this, d);
      const u = (f, p) => {
        const g = r[f] / 255, b = a[f] / 255, m = new Array(p + 1);
        for (let A = 0; A <= p; A++) m[A] = g + A / p * (b - g);
        return m.join(",");
      };
      return __privateMethod(this, _Ai_instances, g_fn).call(this, u(0, 5), u(1, 5), u(2, 5), d), n.url = __privateMethod(this, _Ai_instances, d_fn2).call(this, h), n.url;
    }
    addAlphaFilter(t) {
      let e = __privateGet(this, _Ai_instances, o_get).get(t);
      if (e) return e;
      const [s] = __privateMethod(this, _Ai_instances, u_fn2).call(this, [
        t
      ]), i = `alpha_${s}`;
      if (e = __privateGet(this, _Ai_instances, o_get).get(i), e) return __privateGet(this, _Ai_instances, o_get).set(t, e), e;
      const n = `g_${__privateGet(this, _i8)}_alpha_map_${__privateWrapper(this, _l5)._++}`, r = __privateMethod(this, _Ai_instances, d_fn2).call(this, n);
      __privateGet(this, _Ai_instances, o_get).set(t, r), __privateGet(this, _Ai_instances, o_get).set(i, r);
      const a = __privateMethod(this, _Ai_instances, p_fn2).call(this, n);
      return __privateMethod(this, _Ai_instances, b_fn).call(this, s, a), r;
    }
    addLuminosityFilter(t) {
      let e = __privateGet(this, _Ai_instances, o_get).get(t || "luminosity");
      if (e) return e;
      let s, i;
      if (t ? ([s] = __privateMethod(this, _Ai_instances, u_fn2).call(this, [
        t
      ]), i = `luminosity_${s}`) : i = "luminosity", e = __privateGet(this, _Ai_instances, o_get).get(i), e) return __privateGet(this, _Ai_instances, o_get).set(t, e), e;
      const n = `g_${__privateGet(this, _i8)}_luminosity_map_${__privateWrapper(this, _l5)._++}`, r = __privateMethod(this, _Ai_instances, d_fn2).call(this, n);
      __privateGet(this, _Ai_instances, o_get).set(t, r), __privateGet(this, _Ai_instances, o_get).set(i, r);
      const a = __privateMethod(this, _Ai_instances, p_fn2).call(this, n);
      return __privateMethod(this, _Ai_instances, f_fn2).call(this, a), t && __privateMethod(this, _Ai_instances, b_fn).call(this, s, a), r;
    }
    addHighlightHCMFilter(t, e, s, i, n) {
      var _a9;
      const r = `${e}-${s}-${i}-${n}`;
      let a = __privateGet(this, _Ai_instances, c_get).get(t);
      if ((a == null ? void 0 : a.key) === r || (a ? ((_a9 = a.filter) == null ? void 0 : _a9.remove(), a.key = r, a.url = "none", a.filter = null) : (a = {
        key: r,
        url: "none",
        filter: null
      }, __privateGet(this, _Ai_instances, c_get).set(t, a)), !e || !s)) return a.url;
      const [o, l] = [
        e,
        s
      ].map(__privateMethod(this, _Ai_instances, y_fn).bind(this));
      let h = Math.round(0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]), d = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), [u, f] = [
        i,
        n
      ].map(__privateMethod(this, _Ai_instances, y_fn).bind(this));
      d < h && ([h, d, u, f] = [
        d,
        h,
        f,
        u
      ]), __privateGet(this, _Ai_instances, h_get).style.color = "";
      const p = (m, A, _) => {
        const y = new Array(256), v = (d - h) / _, S = m / 255, w = (A - m) / (255 * _);
        let T = 0;
        for (let M = 0; M <= _; M++) {
          const B = Math.round(h + M * v), N = S + M * w;
          for (let G = T; G <= B; G++) y[G] = N;
          T = B + 1;
        }
        for (let M = T; M < 256; M++) y[M] = y[T - 1];
        return y.join(",");
      }, g = `g_${__privateGet(this, _i8)}_hcm_${t}_filter`, b = a.filter = __privateMethod(this, _Ai_instances, p_fn2).call(this, g);
      return __privateMethod(this, _Ai_instances, a_fn2).call(this, b), __privateMethod(this, _Ai_instances, g_fn).call(this, p(u[0], f[0], 5), p(u[1], f[1], 5), p(u[2], f[2], 5), b), a.url = __privateMethod(this, _Ai_instances, d_fn2).call(this, g), a.url;
    }
    destroy(t = false) {
      var _a9, _b6, _c15, _d10;
      t && ((_a9 = __privateGet(this, _n7)) == null ? void 0 : _a9.size) || ((_b6 = __privateGet(this, _s11)) == null ? void 0 : _b6.parentNode.parentNode.remove(), __privateSet(this, _s11, null), (_c15 = __privateGet(this, _e11)) == null ? void 0 : _c15.clear(), __privateSet(this, _e11, null), (_d10 = __privateGet(this, _n7)) == null ? void 0 : _d10.clear(), __privateSet(this, _n7, null), __privateSet(this, _l5, 0));
    }
  }
  _t16 = new WeakMap();
  _e11 = new WeakMap();
  _s11 = new WeakMap();
  _i8 = new WeakMap();
  _r7 = new WeakMap();
  _n7 = new WeakMap();
  _l5 = new WeakMap();
  _Ai_instances = new WeakSet();
  o_get = function() {
    return __privateGet(this, _e11) || __privateSet(this, _e11, /* @__PURE__ */ new Map());
  };
  c_get = function() {
    return __privateGet(this, _n7) || __privateSet(this, _n7, /* @__PURE__ */ new Map());
  };
  h_get = function() {
    if (!__privateGet(this, _s11)) {
      const t = __privateGet(this, _r7).createElement("div"), { style: e } = t;
      e.visibility = "hidden", e.contain = "strict", e.width = e.height = 0, e.position = "absolute", e.top = e.left = 0, e.zIndex = -1;
      const s = __privateGet(this, _r7).createElementNS(Et, "svg");
      s.setAttribute("width", 0), s.setAttribute("height", 0), __privateSet(this, _s11, __privateGet(this, _r7).createElementNS(Et, "defs")), t.append(s), s.append(__privateGet(this, _s11)), __privateGet(this, _r7).body.append(t);
    }
    return __privateGet(this, _s11);
  };
  u_fn2 = function(t) {
    if (t.length === 1) {
      const o = t[0], l = new Array(256);
      for (let d = 0; d < 256; d++) l[d] = o[d] / 255;
      const h = l.join(",");
      return [
        h,
        h,
        h
      ];
    }
    const [e, s, i] = t, n = new Array(256), r = new Array(256), a = new Array(256);
    for (let o = 0; o < 256; o++) n[o] = e[o] / 255, r[o] = s[o] / 255, a[o] = i[o] / 255;
    return [
      n.join(","),
      r.join(","),
      a.join(",")
    ];
  };
  d_fn2 = function(t) {
    if (__privateGet(this, _t16) === void 0) {
      __privateSet(this, _t16, "");
      const e = __privateGet(this, _r7).URL;
      e !== __privateGet(this, _r7).baseURI && (pe(e) ? D('#createUrl: ignore "data:"-URL for performance reasons.') : __privateSet(this, _t16, e.split("#", 1)[0]));
    }
    return `url(${__privateGet(this, _t16)}#${t})`;
  };
  f_fn2 = function(t) {
    const e = __privateGet(this, _r7).createElementNS(Et, "feColorMatrix");
    e.setAttribute("type", "matrix"), e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t.append(e);
  };
  a_fn2 = function(t) {
    const e = __privateGet(this, _r7).createElementNS(Et, "feColorMatrix");
    e.setAttribute("type", "matrix"), e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t.append(e);
  };
  p_fn2 = function(t) {
    const e = __privateGet(this, _r7).createElementNS(Et, "filter");
    return e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("id", t), __privateGet(this, _Ai_instances, h_get).append(e), e;
  };
  m_fn = function(t, e, s) {
    const i = __privateGet(this, _r7).createElementNS(Et, e);
    i.setAttribute("type", "discrete"), i.setAttribute("tableValues", s), t.append(i);
  };
  g_fn = function(t, e, s, i) {
    const n = __privateGet(this, _r7).createElementNS(Et, "feComponentTransfer");
    i.append(n), __privateMethod(this, _Ai_instances, m_fn).call(this, n, "feFuncR", t), __privateMethod(this, _Ai_instances, m_fn).call(this, n, "feFuncG", e), __privateMethod(this, _Ai_instances, m_fn).call(this, n, "feFuncB", s);
  };
  b_fn = function(t, e) {
    const s = __privateGet(this, _r7).createElementNS(Et, "feComponentTransfer");
    e.append(s), __privateMethod(this, _Ai_instances, m_fn).call(this, s, "feFuncA", t);
  };
  y_fn = function(t) {
    return __privateGet(this, _Ai_instances, h_get).style.color = t, Be(getComputedStyle(__privateGet(this, _Ai_instances, h_get)).getPropertyValue("color"));
  };
  class xs {
    constructor({ baseUrl: t = null }) {
      this.baseUrl = t;
    }
    async fetch({ filename: t }) {
      if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
      if (!t) throw new Error("Font filename must be specified.");
      const e = `${this.baseUrl}${t}`;
      return this._fetch(e).catch((s) => {
        throw new Error(`Unable to load font data at: ${e}`);
      });
    }
    async _fetch(t) {
      H("Abstract method `_fetch` called.");
    }
  }
  class Cs extends xs {
    async _fetch(t) {
      const e = await fe(t, "arraybuffer");
      return new Uint8Array(e);
    }
  }
  st && D("Please use the `legacy` build in Node.js environments.");
  async function Ts(c) {
    const e = await process.getBuiltinModule("fs").promises.readFile(c);
    return new Uint8Array(e);
  }
  class _i extends Es {
  }
  class yi extends vs {
    _createCanvas(t, e) {
      return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
    }
  }
  class vi extends ws {
    async _fetch(t) {
      return Ts(t);
    }
  }
  class wi extends xs {
    async _fetch(t) {
      return Ts(t);
    }
  }
  const et = {
    FILL: "Fill",
    STROKE: "Stroke",
    SHADING: "Shading"
  };
  function Re(c, t) {
    if (!t) return;
    const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
    i.rect(t[0], t[1], e, s), c.clip(i);
  }
  class ze {
    getPattern() {
      H("Abstract method `getPattern` called.");
    }
  }
  class Si extends ze {
    constructor(t) {
      super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7], this.matrix = null;
    }
    _createGradient(t) {
      let e;
      this._type === "axial" ? e = t.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = t.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
      for (const s of this._colorStops) e.addColorStop(s[0], s[1]);
      return e;
    }
    getPattern(t, e, s, i) {
      let n;
      if (i === et.STROKE || i === et.FILL) {
        const r = e.current.getClippedPathBoundingBox(i, U(t)) || [
          0,
          0,
          0,
          0
        ], a = Math.ceil(r[2] - r[0]) || 1, o = Math.ceil(r[3] - r[1]) || 1, l = e.cachedCanvases.getCanvas("pattern", a, o), h = l.context;
        h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-r[0], -r[1]), s = C.transform(s, [
          1,
          0,
          0,
          1,
          r[0],
          r[1]
        ]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), Re(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), n = t.createPattern(l.canvas, "no-repeat");
        const d = new DOMMatrix(s);
        n.setTransform(d);
      } else Re(t, this._bbox), n = this._createGradient(t);
      return n;
    }
  }
  function Se(c, t, e, s, i, n, r, a) {
    const o = t.coords, l = t.colors, h = c.data, d = c.width * 4;
    let u;
    o[e + 1] > o[s + 1] && (u = e, e = s, s = u, u = n, n = r, r = u), o[s + 1] > o[i + 1] && (u = s, s = i, i = u, u = r, r = a, a = u), o[e + 1] > o[s + 1] && (u = e, e = s, s = u, u = n, n = r, r = u);
    const f = (o[e] + t.offsetX) * t.scaleX, p = (o[e + 1] + t.offsetY) * t.scaleY, g = (o[s] + t.offsetX) * t.scaleX, b = (o[s + 1] + t.offsetY) * t.scaleY, m = (o[i] + t.offsetX) * t.scaleX, A = (o[i + 1] + t.offsetY) * t.scaleY;
    if (p >= A) return;
    const _ = l[n], y = l[n + 1], v = l[n + 2], S = l[r], w = l[r + 1], T = l[r + 2], M = l[a], B = l[a + 1], N = l[a + 2], G = Math.round(p), q = Math.round(A);
    let $, it, x, P, dt, _t54, St, pt;
    for (let Z = G; Z <= q; Z++) {
      if (Z < b) {
        const z = Z < p ? 0 : (p - Z) / (p - b);
        $ = f - (f - g) * z, it = _ - (_ - S) * z, x = y - (y - w) * z, P = v - (v - T) * z;
      } else {
        let z;
        Z > A ? z = 1 : b === A ? z = 0 : z = (b - Z) / (b - A), $ = g - (g - m) * z, it = S - (S - M) * z, x = w - (w - B) * z, P = T - (T - N) * z;
      }
      let Y;
      Z < p ? Y = 0 : Z > A ? Y = 1 : Y = (p - Z) / (p - A), dt = f - (f - m) * Y, _t54 = _ - (_ - M) * Y, St = y - (y - B) * Y, pt = v - (v - N) * Y;
      const Ft = Math.round(Math.min($, dt)), Gt = Math.round(Math.max($, dt));
      let ot = d * Z + Ft * 4;
      for (let z = Ft; z <= Gt; z++) Y = ($ - z) / ($ - dt), Y < 0 ? Y = 0 : Y > 1 && (Y = 1), h[ot++] = it - (it - _t54) * Y | 0, h[ot++] = x - (x - St) * Y | 0, h[ot++] = P - (P - pt) * Y | 0, h[ot++] = 255;
    }
  }
  function Ei(c, t, e) {
    const s = t.coords, i = t.colors;
    let n, r;
    switch (t.type) {
      case "lattice":
        const a = t.verticesPerRow, o = Math.floor(s.length / a) - 1, l = a - 1;
        for (n = 0; n < o; n++) {
          let h = n * a;
          for (let d = 0; d < l; d++, h++) Se(c, e, s[h], s[h + 1], s[h + a], i[h], i[h + 1], i[h + a]), Se(c, e, s[h + a + 1], s[h + 1], s[h + a], i[h + a + 1], i[h + 1], i[h + a]);
        }
        break;
      case "triangles":
        for (n = 0, r = s.length; n < r; n += 3) Se(c, e, s[n], s[n + 1], s[n + 2], i[n], i[n + 1], i[n + 2]);
        break;
      default:
        throw new Error("illegal figure");
    }
  }
  class xi extends ze {
    constructor(t) {
      super(), this._coords = t[2], this._colors = t[3], this._figures = t[4], this._bounds = t[5], this._bbox = t[7], this._background = t[8], this.matrix = null;
    }
    _createMeshCanvas(t, e, s) {
      const a = Math.floor(this._bounds[0]), o = Math.floor(this._bounds[1]), l = Math.ceil(this._bounds[2]) - a, h = Math.ceil(this._bounds[3]) - o, d = Math.min(Math.ceil(Math.abs(l * t[0] * 1.1)), 3e3), u = Math.min(Math.ceil(Math.abs(h * t[1] * 1.1)), 3e3), f = l / d, p = h / u, g = {
        coords: this._coords,
        colors: this._colors,
        offsetX: -a,
        offsetY: -o,
        scaleX: 1 / f,
        scaleY: 1 / p
      }, b = d + 4, m = u + 4, A = s.getCanvas("mesh", b, m), _ = A.context, y = _.createImageData(d, u);
      if (e) {
        const S = y.data;
        for (let w = 0, T = S.length; w < T; w += 4) S[w] = e[0], S[w + 1] = e[1], S[w + 2] = e[2], S[w + 3] = 255;
      }
      for (const S of this._figures) Ei(y, S, g);
      return _.putImageData(y, 2, 2), {
        canvas: A.canvas,
        offsetX: a - 2 * f,
        offsetY: o - 2 * p,
        scaleX: f,
        scaleY: p
      };
    }
    getPattern(t, e, s, i) {
      Re(t, this._bbox);
      let n;
      if (i === et.SHADING) n = C.singularValueDecompose2dScale(U(t));
      else if (n = C.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
        const a = C.singularValueDecompose2dScale(this.matrix);
        n = [
          n[0] * a[0],
          n[1] * a[1]
        ];
      }
      const r = this._createMeshCanvas(n, i === et.SHADING ? null : this._background, e.cachedCanvases);
      return i !== et.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(r.offsetX, r.offsetY), t.scale(r.scaleX, r.scaleY), t.createPattern(r.canvas, "no-repeat");
    }
  }
  class Ci extends ze {
    getPattern() {
      return "hotpink";
    }
  }
  function Ti(c) {
    switch (c[0]) {
      case "RadialAxial":
        return new Si(c);
      case "Mesh":
        return new xi(c);
      case "Dummy":
        return new Ci();
    }
    throw new Error(`Unknown IR type: ${c[0]}`);
  }
  const ss = {
    COLORED: 1,
    UNCOLORED: 2
  };
  const _Ue = class _Ue {
    constructor(t, e, s, i, n) {
      this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.ctx = s, this.canvasGraphicsFactory = i, this.baseTransform = n;
    }
    createPatternCanvas(t) {
      const { bbox: e, operatorList: s, paintType: i, tilingType: n, color: r, canvasGraphicsFactory: a } = this;
      let { xstep: o, ystep: l } = this;
      o = Math.abs(o), l = Math.abs(l), de("TilingType: " + n);
      const h = e[0], d = e[1], u = e[2], f = e[3], p = u - h, g = f - d, b = C.singularValueDecompose2dScale(this.matrix), m = C.singularValueDecompose2dScale(this.baseTransform), A = b[0] * m[0], _ = b[1] * m[1];
      let y = p, v = g, S = false, w = false;
      const T = Math.ceil(o * A), M = Math.ceil(l * _), B = Math.ceil(p * A), N = Math.ceil(g * _);
      T >= B ? y = o : S = true, M >= N ? v = l : w = true;
      const G = this.getSizeAndScale(y, this.ctx.canvas.width, A), q = this.getSizeAndScale(v, this.ctx.canvas.height, _), $ = t.cachedCanvases.getCanvas("pattern", G.size, q.size), it = $.context, x = a.createCanvasGraphics(it);
      if (x.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(x, i, r), it.translate(-G.scale * h, -q.scale * d), x.transform(G.scale, 0, 0, q.scale, 0, 0), it.save(), this.clipBbox(x, h, d, u, f), x.baseTransform = U(x.ctx), x.executeOperatorList(s), x.endDrawing(), it.restore(), S || w) {
        const P = $.canvas;
        S && (y = o), w && (v = l);
        const dt = this.getSizeAndScale(y, this.ctx.canvas.width, A), _t54 = this.getSizeAndScale(v, this.ctx.canvas.height, _), St = dt.size, pt = _t54.size, Z = t.cachedCanvases.getCanvas("pattern-workaround", St, pt), Y = Z.context, Ft = S ? Math.floor(p / o) : 0, Gt = w ? Math.floor(g / l) : 0;
        for (let ot = 0; ot <= Ft; ot++) for (let z = 0; z <= Gt; z++) Y.drawImage(P, St * ot, pt * z, St, pt, 0, 0, St, pt);
        return {
          canvas: Z.canvas,
          scaleX: dt.scale,
          scaleY: _t54.scale,
          offsetX: h,
          offsetY: d
        };
      }
      return {
        canvas: $.canvas,
        scaleX: G.scale,
        scaleY: q.scale,
        offsetX: h,
        offsetY: d
      };
    }
    getSizeAndScale(t, e, s) {
      const i = Math.max(_Ue.MAX_PATTERN_SIZE, e);
      let n = Math.ceil(t * s);
      return n >= i ? n = i : s = n / t, {
        scale: s,
        size: n
      };
    }
    clipBbox(t, e, s, i, n) {
      const r = i - e, a = n - s;
      t.ctx.rect(e, s, r, a), t.current.updateRectMinMax(U(t.ctx), [
        e,
        s,
        i,
        n
      ]), t.clip(), t.endPath();
    }
    setFillAndStrokeStyleToContext(t, e, s) {
      const i = t.ctx, n = t.current;
      switch (e) {
        case ss.COLORED:
          const r = this.ctx;
          i.fillStyle = r.fillStyle, i.strokeStyle = r.strokeStyle, n.fillColor = r.fillStyle, n.strokeColor = r.strokeStyle;
          break;
        case ss.UNCOLORED:
          const a = C.makeHexColor(s[0], s[1], s[2]);
          i.fillStyle = a, i.strokeStyle = a, n.fillColor = a, n.strokeColor = a;
          break;
        default:
          throw new Zs(`Unsupported paint type: ${e}`);
      }
    }
    getPattern(t, e, s, i) {
      let n = s;
      i !== et.SHADING && (n = C.transform(n, e.baseTransform), this.matrix && (n = C.transform(n, this.matrix)));
      const r = this.createPatternCanvas(e);
      let a = new DOMMatrix(n);
      a = a.translate(r.offsetX, r.offsetY), a = a.scale(1 / r.scaleX, 1 / r.scaleY);
      const o = t.createPattern(r.canvas, "repeat");
      return o.setTransform(a), o;
    }
  };
  __publicField(_Ue, "MAX_PATTERN_SIZE", 3e3);
  let Ue = _Ue;
  function Pi({ src: c, srcPos: t = 0, dest: e, width: s, height: i, nonBlackColor: n = 4294967295, inverseDecode: r = false }) {
    const a = at.isLittleEndian ? 4278190080 : 255, [o, l] = r ? [
      n,
      a
    ] : [
      a,
      n
    ], h = s >> 3, d = s & 7, u = c.length;
    e = new Uint32Array(e.buffer);
    let f = 0;
    for (let p = 0; p < i; p++) {
      for (const b = t + h; t < b; t++) {
        const m = t < u ? c[t] : 255;
        e[f++] = m & 128 ? l : o, e[f++] = m & 64 ? l : o, e[f++] = m & 32 ? l : o, e[f++] = m & 16 ? l : o, e[f++] = m & 8 ? l : o, e[f++] = m & 4 ? l : o, e[f++] = m & 2 ? l : o, e[f++] = m & 1 ? l : o;
      }
      if (d === 0) continue;
      const g = t < u ? c[t++] : 255;
      for (let b = 0; b < d; b++) e[f++] = g & 1 << 7 - b ? l : o;
    }
    return {
      srcPos: t,
      destPos: f
    };
  }
  const is = 16, ns = 100, ki = 15, rs = 10, as = 1e3, ct = 16;
  function Ri(c, t) {
    if (c._removeMirroring) throw new Error("Context is already forwarding operations.");
    c.__originalSave = c.save, c.__originalRestore = c.restore, c.__originalRotate = c.rotate, c.__originalScale = c.scale, c.__originalTranslate = c.translate, c.__originalTransform = c.transform, c.__originalSetTransform = c.setTransform, c.__originalResetTransform = c.resetTransform, c.__originalClip = c.clip, c.__originalMoveTo = c.moveTo, c.__originalLineTo = c.lineTo, c.__originalBezierCurveTo = c.bezierCurveTo, c.__originalRect = c.rect, c.__originalClosePath = c.closePath, c.__originalBeginPath = c.beginPath, c._removeMirroring = () => {
      c.save = c.__originalSave, c.restore = c.__originalRestore, c.rotate = c.__originalRotate, c.scale = c.__originalScale, c.translate = c.__originalTranslate, c.transform = c.__originalTransform, c.setTransform = c.__originalSetTransform, c.resetTransform = c.__originalResetTransform, c.clip = c.__originalClip, c.moveTo = c.__originalMoveTo, c.lineTo = c.__originalLineTo, c.bezierCurveTo = c.__originalBezierCurveTo, c.rect = c.__originalRect, c.closePath = c.__originalClosePath, c.beginPath = c.__originalBeginPath, delete c._removeMirroring;
    }, c.save = function() {
      t.save(), this.__originalSave();
    }, c.restore = function() {
      t.restore(), this.__originalRestore();
    }, c.translate = function(s, i) {
      t.translate(s, i), this.__originalTranslate(s, i);
    }, c.scale = function(s, i) {
      t.scale(s, i), this.__originalScale(s, i);
    }, c.transform = function(s, i, n, r, a, o) {
      t.transform(s, i, n, r, a, o), this.__originalTransform(s, i, n, r, a, o);
    }, c.setTransform = function(s, i, n, r, a, o) {
      t.setTransform(s, i, n, r, a, o), this.__originalSetTransform(s, i, n, r, a, o);
    }, c.resetTransform = function() {
      t.resetTransform(), this.__originalResetTransform();
    }, c.rotate = function(s) {
      t.rotate(s), this.__originalRotate(s);
    }, c.clip = function(s) {
      t.clip(s), this.__originalClip(s);
    }, c.moveTo = function(e, s) {
      t.moveTo(e, s), this.__originalMoveTo(e, s);
    }, c.lineTo = function(e, s) {
      t.lineTo(e, s), this.__originalLineTo(e, s);
    }, c.bezierCurveTo = function(e, s, i, n, r, a) {
      t.bezierCurveTo(e, s, i, n, r, a), this.__originalBezierCurveTo(e, s, i, n, r, a);
    }, c.rect = function(e, s, i, n) {
      t.rect(e, s, i, n), this.__originalRect(e, s, i, n);
    }, c.closePath = function() {
      t.closePath(), this.__originalClosePath();
    }, c.beginPath = function() {
      t.beginPath(), this.__originalBeginPath();
    };
  }
  class Mi {
    constructor(t) {
      this.canvasFactory = t, this.cache = /* @__PURE__ */ Object.create(null);
    }
    getCanvas(t, e, s) {
      let i;
      return this.cache[t] !== void 0 ? (i = this.cache[t], this.canvasFactory.reset(i, e, s)) : (i = this.canvasFactory.create(e, s), this.cache[t] = i), i;
    }
    delete(t) {
      delete this.cache[t];
    }
    clear() {
      for (const t in this.cache) {
        const e = this.cache[t];
        this.canvasFactory.destroy(e), delete this.cache[t];
      }
    }
  }
  function ie(c, t, e, s, i, n, r, a, o, l) {
    const [h, d, u, f, p, g] = U(c);
    if (d === 0 && u === 0) {
      const A = r * h + p, _ = Math.round(A), y = a * f + g, v = Math.round(y), S = (r + o) * h + p, w = Math.abs(Math.round(S) - _) || 1, T = (a + l) * f + g, M = Math.abs(Math.round(T) - v) || 1;
      return c.setTransform(Math.sign(h), 0, 0, Math.sign(f), _, v), c.drawImage(t, e, s, i, n, 0, 0, w, M), c.setTransform(h, d, u, f, p, g), [
        w,
        M
      ];
    }
    if (h === 0 && f === 0) {
      const A = a * u + p, _ = Math.round(A), y = r * d + g, v = Math.round(y), S = (a + l) * u + p, w = Math.abs(Math.round(S) - _) || 1, T = (r + o) * d + g, M = Math.abs(Math.round(T) - v) || 1;
      return c.setTransform(0, Math.sign(d), Math.sign(u), 0, _, v), c.drawImage(t, e, s, i, n, 0, 0, M, w), c.setTransform(h, d, u, f, p, g), [
        M,
        w
      ];
    }
    c.drawImage(t, e, s, i, n, r, a, o, l);
    const b = Math.hypot(h, d), m = Math.hypot(u, f);
    return [
      b * o,
      m * l
    ];
  }
  function Ii(c) {
    const { width: t, height: e } = c;
    if (t > as || e > as) return null;
    const s = 1e3, i = new Uint8Array([
      0,
      2,
      4,
      0,
      1,
      0,
      5,
      4,
      8,
      10,
      0,
      8,
      0,
      2,
      1,
      0
    ]), n = t + 1;
    let r = new Uint8Array(n * (e + 1)), a, o, l;
    const h = t + 7 & -8;
    let d = new Uint8Array(h * e), u = 0;
    for (const m of c.data) {
      let A = 128;
      for (; A > 0; ) d[u++] = m & A ? 0 : 255, A >>= 1;
    }
    let f = 0;
    for (u = 0, d[u] !== 0 && (r[0] = 1, ++f), o = 1; o < t; o++) d[u] !== d[u + 1] && (r[o] = d[u] ? 2 : 1, ++f), u++;
    for (d[u] !== 0 && (r[o] = 2, ++f), a = 1; a < e; a++) {
      u = a * h, l = a * n, d[u - h] !== d[u] && (r[l] = d[u] ? 1 : 8, ++f);
      let m = (d[u] ? 4 : 0) + (d[u - h] ? 8 : 0);
      for (o = 1; o < t; o++) m = (m >> 2) + (d[u + 1] ? 4 : 0) + (d[u - h + 1] ? 8 : 0), i[m] && (r[l + o] = i[m], ++f), u++;
      if (d[u - h] !== d[u] && (r[l + o] = d[u] ? 2 : 4, ++f), f > s) return null;
    }
    for (u = h * (e - 1), l = a * n, d[u] !== 0 && (r[l] = 8, ++f), o = 1; o < t; o++) d[u] !== d[u + 1] && (r[l + o] = d[u] ? 4 : 8, ++f), u++;
    if (d[u] !== 0 && (r[l + o] = 4, ++f), f > s) return null;
    const p = new Int32Array([
      0,
      n,
      -1,
      0,
      -n,
      0,
      0,
      0,
      1
    ]), g = new Path2D();
    for (a = 0; f && a <= e; a++) {
      let m = a * n;
      const A = m + t;
      for (; m < A && !r[m]; ) m++;
      if (m === A) continue;
      g.moveTo(m % n, a);
      const _ = m;
      let y = r[m];
      do {
        const v = p[y];
        do
          m += v;
        while (!r[m]);
        const S = r[m];
        S !== 5 && S !== 10 ? (y = S, r[m] = 0) : (y = S & 51 * y >> 4, r[m] &= y >> 2 | y << 2), g.lineTo(m % n, m / n | 0), r[m] || --f;
      } while (_ !== m);
      --a;
    }
    return d = null, r = null, function(m) {
      m.save(), m.scale(1 / t, -1 / e), m.translate(0, -e), m.fill(g), m.beginPath(), m.restore();
    };
  }
  class os {
    constructor(t, e) {
      this.alphaIsShape = false, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = ms, this.textMatrixScale = 1, this.fontMatrix = Ce, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = tt.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = false, this.patternStroke = false, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([
        0,
        0,
        t,
        e
      ]);
    }
    clone() {
      const t = Object.create(this);
      return t.clipBox = this.clipBox.slice(), t;
    }
    setCurrentPoint(t, e) {
      this.x = t, this.y = e;
    }
    updatePathMinMax(t, e, s) {
      [e, s] = C.applyTransform([
        e,
        s
      ], t), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, s), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, s);
    }
    updateRectMinMax(t, e) {
      const s = C.applyTransform(e, t), i = C.applyTransform(e.slice(2), t), n = C.applyTransform([
        e[0],
        e[3]
      ], t), r = C.applyTransform([
        e[2],
        e[1]
      ], t);
      this.minX = Math.min(this.minX, s[0], i[0], n[0], r[0]), this.minY = Math.min(this.minY, s[1], i[1], n[1], r[1]), this.maxX = Math.max(this.maxX, s[0], i[0], n[0], r[0]), this.maxY = Math.max(this.maxY, s[1], i[1], n[1], r[1]);
    }
    updateScalingPathMinMax(t, e) {
      C.scaleMinMax(t, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
    }
    updateCurvePathMinMax(t, e, s, i, n, r, a, o, l, h) {
      const d = C.bezierBoundingBox(e, s, i, n, r, a, o, l, h);
      h || this.updateRectMinMax(t, d);
    }
    getPathBoundingBox(t = et.FILL, e = null) {
      const s = [
        this.minX,
        this.minY,
        this.maxX,
        this.maxY
      ];
      if (t === et.STROKE) {
        e || H("Stroke bounding box must include transform.");
        const i = C.singularValueDecompose2dScale(e), n = i[0] * this.lineWidth / 2, r = i[1] * this.lineWidth / 2;
        s[0] -= n, s[1] -= r, s[2] += n, s[3] += r;
      }
      return s;
    }
    updateClipFromPath() {
      const t = C.intersect(this.clipBox, this.getPathBoundingBox());
      this.startNewPathAndClipBox(t || [
        0,
        0,
        0,
        0
      ]);
    }
    isEmptyClip() {
      return this.minX === 1 / 0;
    }
    startNewPathAndClipBox(t) {
      this.clipBox = t, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
    }
    getClippedPathBoundingBox(t = et.FILL, e = null) {
      return C.intersect(this.clipBox, this.getPathBoundingBox(t, e));
    }
  }
  function ls(c, t) {
    if (t instanceof ImageData) {
      c.putImageData(t, 0, 0);
      return;
    }
    const e = t.height, s = t.width, i = e % ct, n = (e - i) / ct, r = i === 0 ? n : n + 1, a = c.createImageData(s, ct);
    let o = 0, l;
    const h = t.data, d = a.data;
    let u, f, p, g;
    if (t.kind === ae.GRAYSCALE_1BPP) {
      const b = h.byteLength, m = new Uint32Array(d.buffer, 0, d.byteLength >> 2), A = m.length, _ = s + 7 >> 3, y = 4294967295, v = at.isLittleEndian ? 4278190080 : 255;
      for (u = 0; u < r; u++) {
        for (p = u < n ? ct : i, l = 0, f = 0; f < p; f++) {
          const S = b - o;
          let w = 0;
          const T = S > _ ? s : S * 8 - 7, M = T & -8;
          let B = 0, N = 0;
          for (; w < M; w += 8) N = h[o++], m[l++] = N & 128 ? y : v, m[l++] = N & 64 ? y : v, m[l++] = N & 32 ? y : v, m[l++] = N & 16 ? y : v, m[l++] = N & 8 ? y : v, m[l++] = N & 4 ? y : v, m[l++] = N & 2 ? y : v, m[l++] = N & 1 ? y : v;
          for (; w < T; w++) B === 0 && (N = h[o++], B = 128), m[l++] = N & B ? y : v, B >>= 1;
        }
        for (; l < A; ) m[l++] = 0;
        c.putImageData(a, 0, u * ct);
      }
    } else if (t.kind === ae.RGBA_32BPP) {
      for (f = 0, g = s * ct * 4, u = 0; u < n; u++) d.set(h.subarray(o, o + g)), o += g, c.putImageData(a, 0, f), f += ct;
      u < r && (g = s * i * 4, d.set(h.subarray(o, o + g)), c.putImageData(a, 0, f));
    } else if (t.kind === ae.RGB_24BPP) for (p = ct, g = s * p, u = 0; u < r; u++) {
      for (u >= n && (p = i, g = s * p), l = 0, f = g; f--; ) d[l++] = h[o++], d[l++] = h[o++], d[l++] = h[o++], d[l++] = 255;
      c.putImageData(a, 0, u * ct);
    }
    else throw new Error(`bad image kind: ${t.kind}`);
  }
  function hs(c, t) {
    if (t.bitmap) {
      c.drawImage(t.bitmap, 0, 0);
      return;
    }
    const e = t.height, s = t.width, i = e % ct, n = (e - i) / ct, r = i === 0 ? n : n + 1, a = c.createImageData(s, ct);
    let o = 0;
    const l = t.data, h = a.data;
    for (let d = 0; d < r; d++) {
      const u = d < n ? ct : i;
      ({ srcPos: o } = Pi({
        src: l,
        srcPos: o,
        dest: h,
        width: s,
        height: u,
        nonBlackColor: 0
      })), c.putImageData(a, 0, d * ct);
    }
  }
  function Ut(c, t) {
    const e = [
      "strokeStyle",
      "fillStyle",
      "fillRule",
      "globalAlpha",
      "lineWidth",
      "lineCap",
      "lineJoin",
      "miterLimit",
      "globalCompositeOperation",
      "font",
      "filter"
    ];
    for (const s of e) c[s] !== void 0 && (t[s] = c[s]);
    c.setLineDash !== void 0 && (t.setLineDash(c.getLineDash()), t.lineDashOffset = c.lineDashOffset);
  }
  function ne(c) {
    if (c.strokeStyle = c.fillStyle = "#000000", c.fillRule = "nonzero", c.globalAlpha = 1, c.lineWidth = 1, c.lineCap = "butt", c.lineJoin = "miter", c.miterLimit = 10, c.globalCompositeOperation = "source-over", c.font = "10px sans-serif", c.setLineDash !== void 0 && (c.setLineDash([]), c.lineDashOffset = 0), !st) {
      const { filter: t } = c;
      t !== "none" && t !== "" && (c.filter = "none");
    }
  }
  function cs(c, t) {
    if (t) return true;
    const e = C.singularValueDecompose2dScale(c);
    e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
    const s = Math.fround((globalThis.devicePixelRatio || 1) * $t.PDF_TO_CSS_UNITS);
    return e[0] <= s && e[1] <= s;
  }
  const Li = [
    "butt",
    "round",
    "square"
  ], Di = [
    "miter",
    "round",
    "bevel"
  ], Fi = {}, ds = {};
  const _Ht = class _Ht {
    constructor(t, e, s, i, n, { optionalContentConfig: r, markedContentStack: a = null }, o, l) {
      __privateAdd(this, _Ht_instances);
      this.ctx = t, this.current = new os(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = false, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = n, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = true, this.markedContentStack = a || [], this.optionalContentConfig = r, this.cachedCanvases = new Mi(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = o, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [
        -1,
        0
      ], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
    }
    getObject(t, e = null) {
      return typeof t == "string" ? t.startsWith("g_") ? this.commonObjs.get(t) : this.objs.get(t) : e;
    }
    beginDrawing({ transform: t, viewport: e, transparency: s = false, background: i = null }) {
      const n = this.ctx.canvas.width, r = this.ctx.canvas.height, a = this.ctx.fillStyle;
      if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, n, r), this.ctx.fillStyle = a, s) {
        const o = this.cachedCanvases.getCanvas("transparent", n, r);
        this.compositeCtx = this.ctx, this.transparentCanvas = o.canvas, this.ctx = o.context, this.ctx.save(), this.ctx.transform(...U(this.compositeCtx));
      }
      this.ctx.save(), ne(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = U(this.ctx);
    }
    executeOperatorList(t, e, s, i) {
      const n = t.argsArray, r = t.fnArray;
      let a = e || 0;
      const o = n.length;
      if (o === a) return a;
      const l = o - a > rs && typeof s == "function", h = l ? Date.now() + ki : 0;
      let d = 0;
      const u = this.commonObjs, f = this.objs;
      let p;
      for (; ; ) {
        if (i !== void 0 && a === i.nextBreakPoint) return i.breakIt(a, s), a;
        if (p = r[a], p !== bt.dependency) this[p].apply(this, n[a]);
        else for (const g of n[a]) {
          const b = g.startsWith("g_") ? u : f;
          if (!b.has(g)) return b.get(g, s), a;
        }
        if (a++, a === o) return a;
        if (l && ++d > rs) {
          if (Date.now() > h) return s(), a;
          d = 0;
        }
      }
    }
    endDrawing() {
      __privateMethod(this, _Ht_instances, t_fn3).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
      for (const t of this._cachedBitmapsMap.values()) {
        for (const e of t.values()) typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
        t.clear();
      }
      this._cachedBitmapsMap.clear(), __privateMethod(this, _Ht_instances, e_fn3).call(this);
    }
    _scaleImage(t, e) {
      const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight;
      let n = Math.max(Math.hypot(e[0], e[1]), 1), r = Math.max(Math.hypot(e[2], e[3]), 1), a = s, o = i, l = "prescale1", h, d;
      for (; n > 2 && a > 1 || r > 2 && o > 1; ) {
        let u = a, f = o;
        n > 2 && a > 1 && (u = a >= 16384 ? Math.floor(a / 2) - 1 || 1 : Math.ceil(a / 2), n /= a / u), r > 2 && o > 1 && (f = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o) / 2, r /= o / f), h = this.cachedCanvases.getCanvas(l, u, f), d = h.context, d.clearRect(0, 0, u, f), d.drawImage(t, 0, 0, a, o, 0, 0, u, f), t = h.canvas, a = u, o = f, l = l === "prescale1" ? "prescale2" : "prescale1";
      }
      return {
        img: t,
        paintWidth: a,
        paintHeight: o
      };
    }
    _createMaskCanvas(t) {
      const e = this.ctx, { width: s, height: i } = t, n = this.current.fillColor, r = this.current.patternFill, a = U(e);
      let o, l, h, d;
      if ((t.bitmap || t.data) && t.count > 1) {
        const T = t.bitmap || t.data.buffer;
        l = JSON.stringify(r ? a : [
          a.slice(0, 4),
          n
        ]), o = this._cachedBitmapsMap.get(T), o || (o = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(T, o));
        const M = o.get(l);
        if (M && !r) {
          const B = Math.round(Math.min(a[0], a[2]) + a[4]), N = Math.round(Math.min(a[1], a[3]) + a[5]);
          return {
            canvas: M,
            offsetX: B,
            offsetY: N
          };
        }
        h = M;
      }
      h || (d = this.cachedCanvases.getCanvas("maskCanvas", s, i), hs(d.context, t));
      let u = C.transform(a, [
        1 / s,
        0,
        0,
        -1 / i,
        0,
        0
      ]);
      u = C.transform(u, [
        1,
        0,
        0,
        1,
        0,
        -i
      ]);
      const [f, p, g, b] = C.getAxialAlignedBoundingBox([
        0,
        0,
        s,
        i
      ], u), m = Math.round(g - f) || 1, A = Math.round(b - p) || 1, _ = this.cachedCanvases.getCanvas("fillCanvas", m, A), y = _.context, v = f, S = p;
      y.translate(-v, -S), y.transform(...u), h || (h = this._scaleImage(d.canvas, yt(y)), h = h.img, o && r && o.set(l, h)), y.imageSmoothingEnabled = cs(U(y), t.interpolate), ie(y, h, 0, 0, h.width, h.height, 0, 0, s, i), y.globalCompositeOperation = "source-in";
      const w = C.transform(yt(y), [
        1,
        0,
        0,
        1,
        -v,
        -S
      ]);
      return y.fillStyle = r ? n.getPattern(e, this, w, et.FILL) : n, y.fillRect(0, 0, s, i), o && !r && (this.cachedCanvases.delete("fillCanvas"), o.set(l, _.canvas)), {
        canvas: _.canvas,
        offsetX: Math.round(v),
        offsetY: Math.round(S)
      };
    }
    setLineWidth(t) {
      t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = t, this.ctx.lineWidth = t;
    }
    setLineCap(t) {
      this.ctx.lineCap = Li[t];
    }
    setLineJoin(t) {
      this.ctx.lineJoin = Di[t];
    }
    setMiterLimit(t) {
      this.ctx.miterLimit = t;
    }
    setDash(t, e) {
      const s = this.ctx;
      s.setLineDash !== void 0 && (s.setLineDash(t), s.lineDashOffset = e);
    }
    setRenderingIntent(t) {
    }
    setFlatness(t) {
    }
    setGState(t) {
      for (const [e, s] of t) switch (e) {
        case "LW":
          this.setLineWidth(s);
          break;
        case "LC":
          this.setLineCap(s);
          break;
        case "LJ":
          this.setLineJoin(s);
          break;
        case "ML":
          this.setMiterLimit(s);
          break;
        case "D":
          this.setDash(s[0], s[1]);
          break;
        case "RI":
          this.setRenderingIntent(s);
          break;
        case "FL":
          this.setFlatness(s);
          break;
        case "Font":
          this.setFont(s[0], s[1]);
          break;
        case "CA":
          this.current.strokeAlpha = s;
          break;
        case "ca":
          this.current.fillAlpha = s, this.ctx.globalAlpha = s;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = s;
          break;
        case "SMask":
          this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
          break;
      }
    }
    get inSMaskMode() {
      return !!this.suspendedCtx;
    }
    checkSMaskState() {
      const t = this.inSMaskMode;
      this.current.activeSMask && !t ? this.beginSMaskMode() : !this.current.activeSMask && t && this.endSMaskMode();
    }
    beginSMaskMode() {
      if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
      const t = this.ctx.canvas.width, e = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, i = this.cachedCanvases.getCanvas(s, t, e);
      this.suspendedCtx = this.ctx, this.ctx = i.context;
      const n = this.ctx;
      n.setTransform(...U(this.suspendedCtx)), Ut(this.suspendedCtx, n), Ri(n, this.suspendedCtx), this.setGState([
        [
          "BM",
          "source-over"
        ],
        [
          "ca",
          1
        ],
        [
          "CA",
          1
        ]
      ]);
    }
    endSMaskMode() {
      if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
      this.ctx._removeMirroring(), Ut(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
    }
    compose(t) {
      if (!this.current.activeSMask) return;
      t ? (t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.ceil(t[2]), t[3] = Math.ceil(t[3])) : t = [
        0,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height
      ];
      const e = this.current.activeSMask, s = this.suspendedCtx;
      this.composeSMask(s, e, this.ctx, t), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
    }
    composeSMask(t, e, s, i) {
      const n = i[0], r = i[1], a = i[2] - n, o = i[3] - r;
      a === 0 || o === 0 || (this.genericComposeSMask(e.context, s, a, o, e.subtype, e.backdrop, e.transferMap, n, r, e.offsetX, e.offsetY), t.save(), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, 0, 0), t.restore());
    }
    genericComposeSMask(t, e, s, i, n, r, a, o, l, h, d) {
      let u = t.canvas, f = o - h, p = l - d;
      if (r) {
        const b = C.makeHexColor(...r);
        if (f < 0 || p < 0 || f + s > u.width || p + i > u.height) {
          const m = this.cachedCanvases.getCanvas("maskExtension", s, i), A = m.context;
          A.drawImage(u, -f, -p), A.globalCompositeOperation = "destination-atop", A.fillStyle = b, A.fillRect(0, 0, s, i), A.globalCompositeOperation = "source-over", u = m.canvas, f = p = 0;
        } else {
          t.save(), t.globalAlpha = 1, t.setTransform(1, 0, 0, 1, 0, 0);
          const m = new Path2D();
          m.rect(f, p, s, i), t.clip(m), t.globalCompositeOperation = "destination-atop", t.fillStyle = b, t.fillRect(f, p, s, i), t.restore();
        }
      }
      e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), n === "Alpha" && a ? e.filter = this.filterFactory.addAlphaFilter(a) : n === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(a));
      const g = new Path2D();
      g.rect(o, l, s, i), e.clip(g), e.globalCompositeOperation = "destination-in", e.drawImage(u, f, p, s, i, o, l, s, i), e.restore();
    }
    save() {
      this.inSMaskMode ? (Ut(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
      const t = this.current;
      this.stateStack.push(t), this.current = t.clone();
    }
    restore() {
      this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), Ut(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
    }
    transform(t, e, s, i, n, r) {
      this.ctx.transform(t, e, s, i, n, r), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t, e, s) {
      const i = this.ctx, n = this.current;
      let r = n.x, a = n.y, o, l;
      const h = U(i), d = h[0] === 0 && h[3] === 0 || h[1] === 0 && h[2] === 0, u = d ? s.slice(0) : null;
      for (let f = 0, p = 0, g = t.length; f < g; f++) switch (t[f] | 0) {
        case bt.rectangle:
          r = e[p++], a = e[p++];
          const b = e[p++], m = e[p++], A = r + b, _ = a + m;
          i.moveTo(r, a), b === 0 || m === 0 ? i.lineTo(A, _) : (i.lineTo(A, a), i.lineTo(A, _), i.lineTo(r, _)), d || n.updateRectMinMax(h, [
            r,
            a,
            A,
            _
          ]), i.closePath();
          break;
        case bt.moveTo:
          r = e[p++], a = e[p++], i.moveTo(r, a), d || n.updatePathMinMax(h, r, a);
          break;
        case bt.lineTo:
          r = e[p++], a = e[p++], i.lineTo(r, a), d || n.updatePathMinMax(h, r, a);
          break;
        case bt.curveTo:
          o = r, l = a, r = e[p + 4], a = e[p + 5], i.bezierCurveTo(e[p], e[p + 1], e[p + 2], e[p + 3], r, a), n.updateCurvePathMinMax(h, o, l, e[p], e[p + 1], e[p + 2], e[p + 3], r, a, u), p += 6;
          break;
        case bt.curveTo2:
          o = r, l = a, i.bezierCurveTo(r, a, e[p], e[p + 1], e[p + 2], e[p + 3]), n.updateCurvePathMinMax(h, o, l, r, a, e[p], e[p + 1], e[p + 2], e[p + 3], u), r = e[p + 2], a = e[p + 3], p += 4;
          break;
        case bt.curveTo3:
          o = r, l = a, r = e[p + 2], a = e[p + 3], i.bezierCurveTo(e[p], e[p + 1], r, a, r, a), n.updateCurvePathMinMax(h, o, l, e[p], e[p + 1], r, a, r, a, u), p += 4;
          break;
        case bt.closePath:
          i.closePath();
          break;
      }
      d && n.updateScalingPathMinMax(h, u), n.setCurrentPoint(r, a);
    }
    closePath() {
      this.ctx.closePath();
    }
    stroke(t = true) {
      const e = this.ctx, s = this.current.strokeColor;
      e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof s == "object" && (s == null ? void 0 : s.getPattern) ? (e.save(), e.strokeStyle = s.getPattern(e, this, yt(e), et.STROKE), this.rescaleAndStroke(false), e.restore()) : this.rescaleAndStroke(true)), t && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
    }
    closeStroke() {
      this.closePath(), this.stroke();
    }
    fill(t = true) {
      const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
      let n = false;
      i && (e.save(), e.fillStyle = s.getPattern(e, this, yt(e), et.FILL), n = true);
      const r = this.current.getClippedPathBoundingBox();
      this.contentVisible && r !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = false) : e.fill()), n && e.restore(), t && this.consumePath(r);
    }
    eoFill() {
      this.pendingEOFill = true, this.fill();
    }
    fillStroke() {
      this.fill(false), this.stroke(false), this.consumePath();
    }
    eoFillStroke() {
      this.pendingEOFill = true, this.fillStroke();
    }
    closeFillStroke() {
      this.closePath(), this.fillStroke();
    }
    closeEOFillStroke() {
      this.pendingEOFill = true, this.closePath(), this.fillStroke();
    }
    endPath() {
      this.consumePath();
    }
    clip() {
      this.pendingClip = Fi;
    }
    eoClip() {
      this.pendingClip = ds;
    }
    beginText() {
      this.current.textMatrix = ms, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
    }
    endText() {
      const t = this.pendingTextPaths, e = this.ctx;
      if (t === void 0) {
        e.beginPath();
        return;
      }
      const s = new Path2D(), i = e.getTransform().invertSelf();
      for (const { transform: n, x: r, y: a, fontSize: o, path: l } of t) s.addPath(l, new DOMMatrix(n).preMultiplySelf(i).translate(r, a).scale(o, -o));
      e.clip(s), e.beginPath(), delete this.pendingTextPaths;
    }
    setCharSpacing(t) {
      this.current.charSpacing = t;
    }
    setWordSpacing(t) {
      this.current.wordSpacing = t;
    }
    setHScale(t) {
      this.current.textHScale = t / 100;
    }
    setLeading(t) {
      this.current.leading = -t;
    }
    setFont(t, e) {
      var _a9;
      const s = this.commonObjs.get(t), i = this.current;
      if (!s) throw new Error(`Can't find font for ${t}`);
      if (i.fontMatrix = s.fontMatrix || Ce, (i.fontMatrix[0] === 0 || i.fontMatrix[3] === 0) && D("Invalid font matrix for font " + t), e < 0 ? (e = -e, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = s, this.current.fontSize = e, s.isType3Font) return;
      const n = s.loadedName || "sans-serif", r = ((_a9 = s.systemFontInfo) == null ? void 0 : _a9.css) || `"${n}", ${s.fallbackName}`;
      let a = "normal";
      s.black ? a = "900" : s.bold && (a = "bold");
      const o = s.italic ? "italic" : "normal";
      let l = e;
      e < is ? l = is : e > ns && (l = ns), this.current.fontSizeScale = e / l, this.ctx.font = `${o} ${a} ${l}px ${r}`;
    }
    setTextRenderingMode(t) {
      this.current.textRenderingMode = t;
    }
    setTextRise(t) {
      this.current.textRise = t;
    }
    moveText(t, e) {
      this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e;
    }
    setLeadingMoveText(t, e) {
      this.setLeading(-e), this.moveText(t, e);
    }
    setTextMatrix(t, e, s, i, n, r) {
      this.current.textMatrix = [
        t,
        e,
        s,
        i,
        n,
        r
      ], this.current.textMatrixScale = Math.hypot(t, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
    }
    nextLine() {
      this.moveText(0, this.current.leading);
    }
    paintChar(t, e, s, i, n) {
      const r = this.ctx, a = this.current, o = a.font, l = a.textRenderingMode, h = a.fontSize / a.fontSizeScale, d = l & tt.FILL_STROKE_MASK, u = !!(l & tt.ADD_TO_PATH_FLAG), f = a.patternFill && !o.missingFile, p = a.patternStroke && !o.missingFile;
      let g;
      if ((o.disableFontFace || u || f || p) && (g = o.getPathGenerator(this.commonObjs, t)), o.disableFontFace || f || p) {
        if (r.save(), r.translate(e, s), r.scale(h, -h), d === tt.FILL || d === tt.FILL_STROKE) if (i) {
          const b = r.getTransform();
          r.setTransform(...i), r.fill(__privateMethod(this, _Ht_instances, s_fn2).call(this, g, b, i));
        } else r.fill(g);
        if (d === tt.STROKE || d === tt.FILL_STROKE) if (n) {
          const b = r.getTransform();
          r.setTransform(...n), r.stroke(__privateMethod(this, _Ht_instances, s_fn2).call(this, g, b, n));
        } else r.lineWidth /= h, r.stroke(g);
        r.restore();
      } else (d === tt.FILL || d === tt.FILL_STROKE) && r.fillText(t, e, s), (d === tt.STROKE || d === tt.FILL_STROKE) && r.strokeText(t, e, s);
      u && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
        transform: U(r),
        x: e,
        y: s,
        fontSize: h,
        path: g
      });
    }
    get isFontSubpixelAAEnabled() {
      const { context: t } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
      t.scale(1.5, 1), t.fillText("I", 0, 10);
      const e = t.getImageData(0, 0, 10, 10).data;
      let s = false;
      for (let i = 3; i < e.length; i += 4) if (e[i] > 0 && e[i] < 255) {
        s = true;
        break;
      }
      return F(this, "isFontSubpixelAAEnabled", s);
    }
    showText(t) {
      const e = this.current, s = e.font;
      if (s.isType3Font) return this.showType3Text(t);
      const i = e.fontSize;
      if (i === 0) return;
      const n = this.ctx, r = e.fontSizeScale, a = e.charSpacing, o = e.wordSpacing, l = e.fontDirection, h = e.textHScale * l, d = t.length, u = s.vertical, f = u ? 1 : -1, p = s.defaultVMetrics, g = i * e.fontMatrix[0], b = e.textRenderingMode === tt.FILL && !s.disableFontFace && !e.patternFill;
      n.save(), n.transform(...e.textMatrix), n.translate(e.x, e.y + e.textRise), l > 0 ? n.scale(h, -1) : n.scale(h, 1);
      let m, A;
      if (e.patternFill) {
        n.save();
        const w = e.fillColor.getPattern(n, this, yt(n), et.FILL);
        m = U(n), n.restore(), n.fillStyle = w;
      }
      if (e.patternStroke) {
        n.save();
        const w = e.strokeColor.getPattern(n, this, yt(n), et.STROKE);
        A = U(n), n.restore(), n.strokeStyle = w;
      }
      let _ = e.lineWidth;
      const y = e.textMatrixScale;
      if (y === 0 || _ === 0) {
        const w = e.textRenderingMode & tt.FILL_STROKE_MASK;
        (w === tt.STROKE || w === tt.FILL_STROKE) && (_ = this.getSinglePixelWidth());
      } else _ /= y;
      if (r !== 1 && (n.scale(r, r), _ /= r), n.lineWidth = _, s.isInvalidPDFjsFont) {
        const w = [];
        let T = 0;
        for (const M of t) w.push(M.unicode), T += M.width;
        n.fillText(w.join(""), 0, 0), e.x += T * g * h, n.restore(), this.compose();
        return;
      }
      let v = 0, S;
      for (S = 0; S < d; ++S) {
        const w = t[S];
        if (typeof w == "number") {
          v += f * w * i / 1e3;
          continue;
        }
        let T = false;
        const M = (w.isSpace ? o : 0) + a, B = w.fontChar, N = w.accent;
        let G, q, $ = w.width;
        if (u) {
          const x = w.vmetric || p, P = -(w.vmetric ? x[1] : $ * 0.5) * g, dt = x[2] * g;
          $ = x ? -x[0] : $, G = P / r, q = (v + dt) / r;
        } else G = v / r, q = 0;
        if (s.remeasure && $ > 0) {
          const x = n.measureText(B).width * 1e3 / i * r;
          if ($ < x && this.isFontSubpixelAAEnabled) {
            const P = $ / x;
            T = true, n.save(), n.scale(P, 1), G /= P;
          } else $ !== x && (G += ($ - x) / 2e3 * i / r);
        }
        if (this.contentVisible && (w.isInFont || s.missingFile)) {
          if (b && !N) n.fillText(B, G, q);
          else if (this.paintChar(B, G, q, m, A), N) {
            const x = G + i * N.offset.x / r, P = q - i * N.offset.y / r;
            this.paintChar(N.fontChar, x, P, m, A);
          }
        }
        const it = u ? $ * g - M * l : $ * g + M * l;
        v += it, T && n.restore();
      }
      u ? e.y -= v : e.x += v * h, n.restore(), this.compose();
    }
    showType3Text(t) {
      const e = this.ctx, s = this.current, i = s.font, n = s.fontSize, r = s.fontDirection, a = i.vertical ? 1 : -1, o = s.charSpacing, l = s.wordSpacing, h = s.textHScale * r, d = s.fontMatrix || Ce, u = t.length, f = s.textRenderingMode === tt.INVISIBLE;
      let p, g, b, m;
      if (!(f || n === 0)) {
        for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...s.textMatrix), e.translate(s.x, s.y), e.scale(h, r), p = 0; p < u; ++p) {
          if (g = t[p], typeof g == "number") {
            m = a * g * n / 1e3, this.ctx.translate(m, 0), s.x += m * h;
            continue;
          }
          const A = (g.isSpace ? l : 0) + o, _ = i.charProcOperatorList[g.operatorListId];
          if (!_) {
            D(`Type3 character "${g.operatorListId}" is not available.`);
            continue;
          }
          this.contentVisible && (this.processingType3 = g, this.save(), e.scale(n, n), e.transform(...d), this.executeOperatorList(_), this.restore()), b = C.applyTransform([
            g.width,
            0
          ], d)[0] * n + A, e.translate(b, 0), s.x += b * h;
        }
        e.restore(), this.processingType3 = null;
      }
    }
    setCharWidth(t, e) {
    }
    setCharWidthAndBounds(t, e, s, i, n, r) {
      this.ctx.rect(s, i, n - s, r - i), this.ctx.clip(), this.endPath();
    }
    getColorN_Pattern(t) {
      let e;
      if (t[0] === "TilingPattern") {
        const s = t[1], i = this.baseTransform || U(this.ctx), n = {
          createCanvasGraphics: (r) => new _Ht(r, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: this.optionalContentConfig,
            markedContentStack: this.markedContentStack
          })
        };
        e = new Ue(t, s, this.ctx, n, i);
      } else e = this._getPattern(t[1], t[2]);
      return e;
    }
    setStrokeColorN() {
      this.current.strokeColor = this.getColorN_Pattern(arguments), this.current.patternStroke = true;
    }
    setFillColorN() {
      this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = true;
    }
    setStrokeRGBColor(t, e, s) {
      this.ctx.strokeStyle = this.current.strokeColor = C.makeHexColor(t, e, s), this.current.patternStroke = false;
    }
    setStrokeTransparent() {
      this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = false;
    }
    setFillRGBColor(t, e, s) {
      this.ctx.fillStyle = this.current.fillColor = C.makeHexColor(t, e, s), this.current.patternFill = false;
    }
    setFillTransparent() {
      this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = false;
    }
    _getPattern(t, e = null) {
      let s;
      return this.cachedPatterns.has(t) ? s = this.cachedPatterns.get(t) : (s = Ti(this.getObject(t)), this.cachedPatterns.set(t, s)), e && (s.matrix = e), s;
    }
    shadingFill(t) {
      if (!this.contentVisible) return;
      const e = this.ctx;
      this.save();
      const s = this._getPattern(t);
      e.fillStyle = s.getPattern(e, this, yt(e), et.SHADING);
      const i = yt(e);
      if (i) {
        const { width: n, height: r } = e.canvas, [a, o, l, h] = C.getAxialAlignedBoundingBox([
          0,
          0,
          n,
          r
        ], i);
        this.ctx.fillRect(a, o, l - a, h - o);
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      this.compose(this.current.getClippedPathBoundingBox()), this.restore();
    }
    beginInlineImage() {
      H("Should not call beginInlineImage");
    }
    beginImageData() {
      H("Should not call beginImageData");
    }
    paintFormXObjectBegin(t, e) {
      if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), t && this.transform(...t), this.baseTransform = U(this.ctx), e)) {
        const s = e[2] - e[0], i = e[3] - e[1];
        this.ctx.rect(e[0], e[1], s, i), this.current.updateRectMinMax(U(this.ctx), e), this.clip(), this.endPath();
      }
    }
    paintFormXObjectEnd() {
      this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
    }
    beginGroup(t) {
      if (!this.contentVisible) return;
      this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
      const e = this.ctx;
      t.isolated || de("TODO: Support non-isolated groups."), t.knockout && D("Knockout groups not supported.");
      const s = U(e);
      if (t.matrix && e.transform(...t.matrix), !t.bbox) throw new Error("Bounding box is required.");
      let i = C.getAxialAlignedBoundingBox(t.bbox, U(e));
      const n = [
        0,
        0,
        e.canvas.width,
        e.canvas.height
      ];
      i = C.intersect(i, n) || [
        0,
        0,
        0,
        0
      ];
      const r = Math.floor(i[0]), a = Math.floor(i[1]), o = Math.max(Math.ceil(i[2]) - r, 1), l = Math.max(Math.ceil(i[3]) - a, 1);
      this.current.startNewPathAndClipBox([
        0,
        0,
        o,
        l
      ]);
      let h = "groupAt" + this.groupLevel;
      t.smask && (h += "_smask_" + this.smaskCounter++ % 2);
      const d = this.cachedCanvases.getCanvas(h, o, l), u = d.context;
      u.translate(-r, -a), u.transform(...s), t.smask ? this.smaskStack.push({
        canvas: d.canvas,
        context: u,
        offsetX: r,
        offsetY: a,
        subtype: t.smask.subtype,
        backdrop: t.smask.backdrop,
        transferMap: t.smask.transferMap || null,
        startTransformInverse: null
      }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(r, a), e.save()), Ut(e, u), this.ctx = u, this.setGState([
        [
          "BM",
          "source-over"
        ],
        [
          "ca",
          1
        ],
        [
          "CA",
          1
        ]
      ]), this.groupStack.push(e), this.groupLevel++;
    }
    endGroup(t) {
      if (!this.contentVisible) return;
      this.groupLevel--;
      const e = this.ctx, s = this.groupStack.pop();
      if (this.ctx = s, this.ctx.imageSmoothingEnabled = false, t.smask) this.tempSMask = this.smaskStack.pop(), this.restore();
      else {
        this.ctx.restore();
        const i = U(this.ctx);
        this.restore(), this.ctx.save(), this.ctx.setTransform(...i);
        const n = C.getAxialAlignedBoundingBox([
          0,
          0,
          e.canvas.width,
          e.canvas.height
        ], i);
        this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(n);
      }
    }
    beginAnnotation(t, e, s, i, n) {
      if (__privateMethod(this, _Ht_instances, t_fn3).call(this), ne(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
        const r = e[2] - e[0], a = e[3] - e[1];
        if (n && this.annotationCanvasMap) {
          s = s.slice(), s[4] -= e[0], s[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = r, e[3] = a;
          const [o, l] = C.singularValueDecompose2dScale(U(this.ctx)), { viewportScale: h } = this, d = Math.ceil(r * this.outputScaleX * h), u = Math.ceil(a * this.outputScaleY * h);
          this.annotationCanvas = this.canvasFactory.create(d, u);
          const { canvas: f, context: p } = this.annotationCanvas;
          this.annotationCanvasMap.set(t, f), this.annotationCanvas.savedCtx = this.ctx, this.ctx = p, this.ctx.save(), this.ctx.setTransform(o, 0, 0, -l, 0, a * l), ne(this.ctx);
        } else ne(this.ctx), this.endPath(), this.ctx.rect(e[0], e[1], r, a), this.ctx.clip(), this.ctx.beginPath();
      }
      this.current = new os(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...s), this.transform(...i);
    }
    endAnnotation() {
      this.annotationCanvas && (this.ctx.restore(), __privateMethod(this, _Ht_instances, e_fn3).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
    }
    paintImageMaskXObject(t) {
      if (!this.contentVisible) return;
      const e = t.count;
      t = this.getObject(t.data, t), t.count = e;
      const s = this.ctx, i = this.processingType3;
      if (i && (i.compiled === void 0 && (i.compiled = Ii(t)), i.compiled)) {
        i.compiled(s);
        return;
      }
      const n = this._createMaskCanvas(t), r = n.canvas;
      s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(r, n.offsetX, n.offsetY), s.restore(), this.compose();
    }
    paintImageMaskXObjectRepeat(t, e, s = 0, i = 0, n, r) {
      if (!this.contentVisible) return;
      t = this.getObject(t.data, t);
      const a = this.ctx;
      a.save();
      const o = U(a);
      a.transform(e, s, i, n, 0, 0);
      const l = this._createMaskCanvas(t);
      a.setTransform(1, 0, 0, 1, l.offsetX - o[4], l.offsetY - o[5]);
      for (let h = 0, d = r.length; h < d; h += 2) {
        const u = C.transform(o, [
          e,
          s,
          i,
          n,
          r[h],
          r[h + 1]
        ]), [f, p] = C.applyTransform([
          0,
          0
        ], u);
        a.drawImage(l.canvas, f, p);
      }
      a.restore(), this.compose();
    }
    paintImageMaskXObjectGroup(t) {
      if (!this.contentVisible) return;
      const e = this.ctx, s = this.current.fillColor, i = this.current.patternFill;
      for (const n of t) {
        const { data: r, width: a, height: o, transform: l } = n, h = this.cachedCanvases.getCanvas("maskCanvas", a, o), d = h.context;
        d.save();
        const u = this.getObject(r, n);
        hs(d, u), d.globalCompositeOperation = "source-in", d.fillStyle = i ? s.getPattern(d, this, yt(e), et.FILL) : s, d.fillRect(0, 0, a, o), d.restore(), e.save(), e.transform(...l), e.scale(1, -1), ie(e, h.canvas, 0, 0, a, o, 0, -1, 1, 1), e.restore();
      }
      this.compose();
    }
    paintImageXObject(t) {
      if (!this.contentVisible) return;
      const e = this.getObject(t);
      if (!e) {
        D("Dependent image isn't ready yet");
        return;
      }
      this.paintInlineImageXObject(e);
    }
    paintImageXObjectRepeat(t, e, s, i) {
      if (!this.contentVisible) return;
      const n = this.getObject(t);
      if (!n) {
        D("Dependent image isn't ready yet");
        return;
      }
      const r = n.width, a = n.height, o = [];
      for (let l = 0, h = i.length; l < h; l += 2) o.push({
        transform: [
          e,
          0,
          0,
          s,
          i[l],
          i[l + 1]
        ],
        x: 0,
        y: 0,
        w: r,
        h: a
      });
      this.paintInlineImageXObjectGroup(n, o);
    }
    applyTransferMapsToCanvas(t) {
      return this.current.transferMaps !== "none" && (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none"), t.canvas;
    }
    applyTransferMapsToBitmap(t) {
      if (this.current.transferMaps === "none") return t.bitmap;
      const { bitmap: e, width: s, height: i } = t, n = this.cachedCanvases.getCanvas("inlineImage", s, i), r = n.context;
      return r.filter = this.current.transferMaps, r.drawImage(e, 0, 0), r.filter = "none", n.canvas;
    }
    paintInlineImageXObject(t) {
      if (!this.contentVisible) return;
      const e = t.width, s = t.height, i = this.ctx;
      if (this.save(), !st) {
        const { filter: a } = i;
        a !== "none" && a !== "" && (i.filter = "none");
      }
      i.scale(1 / e, -1 / s);
      let n;
      if (t.bitmap) n = this.applyTransferMapsToBitmap(t);
      else if (typeof HTMLElement == "function" && t instanceof HTMLElement || !t.data) n = t;
      else {
        const o = this.cachedCanvases.getCanvas("inlineImage", e, s).context;
        ls(o, t), n = this.applyTransferMapsToCanvas(o);
      }
      const r = this._scaleImage(n, yt(i));
      i.imageSmoothingEnabled = cs(U(i), t.interpolate), ie(i, r.img, 0, 0, r.paintWidth, r.paintHeight, 0, -s, e, s), this.compose(), this.restore();
    }
    paintInlineImageXObjectGroup(t, e) {
      if (!this.contentVisible) return;
      const s = this.ctx;
      let i;
      if (t.bitmap) i = t.bitmap;
      else {
        const n = t.width, r = t.height, o = this.cachedCanvases.getCanvas("inlineImage", n, r).context;
        ls(o, t), i = this.applyTransferMapsToCanvas(o);
      }
      for (const n of e) s.save(), s.transform(...n.transform), s.scale(1, -1), ie(s, i, n.x, n.y, n.w, n.h, 0, -1, 1, 1), s.restore();
      this.compose();
    }
    paintSolidColorImageMask() {
      this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
    }
    markPoint(t) {
    }
    markPointProps(t, e) {
    }
    beginMarkedContent(t) {
      this.markedContentStack.push({
        visible: true
      });
    }
    beginMarkedContentProps(t, e) {
      t === "OC" ? this.markedContentStack.push({
        visible: this.optionalContentConfig.isVisible(e)
      }) : this.markedContentStack.push({
        visible: true
      }), this.contentVisible = this.isContentVisible();
    }
    endMarkedContent() {
      this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
    }
    beginCompat() {
    }
    endCompat() {
    }
    consumePath(t) {
      const e = this.current.isEmptyClip();
      this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(t);
      const s = this.ctx;
      this.pendingClip && (e || (this.pendingClip === ds ? s.clip("evenodd") : s.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), s.beginPath();
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        const t = U(this.ctx);
        if (t[1] === 0 && t[2] === 0) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
        else {
          const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
          this._cachedGetSinglePixelWidth = Math.max(s, i) / e;
        }
      }
      return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
      if (this._cachedScaleForStroking[0] === -1) {
        const { lineWidth: t } = this.current, { a: e, b: s, c: i, d: n } = this.ctx.getTransform();
        let r, a;
        if (s === 0 && i === 0) {
          const o = Math.abs(e), l = Math.abs(n);
          if (o === l) if (t === 0) r = a = 1 / o;
          else {
            const h = o * t;
            r = a = h < 1 ? 1 / h : 1;
          }
          else if (t === 0) r = 1 / o, a = 1 / l;
          else {
            const h = o * t, d = l * t;
            r = h < 1 ? 1 / h : 1, a = d < 1 ? 1 / d : 1;
          }
        } else {
          const o = Math.abs(e * n - s * i), l = Math.hypot(e, s), h = Math.hypot(i, n);
          if (t === 0) r = h / o, a = l / o;
          else {
            const d = t * o;
            r = h > d ? h / d : 1, a = l > d ? l / d : 1;
          }
        }
        this._cachedScaleForStroking[0] = r, this._cachedScaleForStroking[1] = a;
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t) {
      const { ctx: e } = this, { lineWidth: s } = this.current, [i, n] = this.getScaleForStroking();
      if (e.lineWidth = s || 1, i === 1 && n === 1) {
        e.stroke();
        return;
      }
      const r = e.getLineDash();
      if (t && e.save(), e.scale(i, n), r.length > 0) {
        const a = Math.max(i, n);
        e.setLineDash(r.map((o) => o / a)), e.lineDashOffset /= a;
      }
      e.stroke(), t && e.restore();
    }
    isContentVisible() {
      for (let t = this.markedContentStack.length - 1; t >= 0; t--) if (!this.markedContentStack[t].visible) return false;
      return true;
    }
  };
  _Ht_instances = new WeakSet();
  t_fn3 = function() {
    for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
    this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
  };
  e_fn3 = function() {
    if (this.pageColors) {
      const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
      if (t !== "none") {
        const e = this.ctx.filter;
        this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
      }
    }
  };
  s_fn2 = function(t, e, s) {
    const i = new Path2D();
    return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
  };
  let Ht = _Ht;
  for (const c in bt) Ht.prototype[c] !== void 0 && (Ht.prototype[bt[c]] = Ht.prototype[c]);
  class Kt {
    static get workerPort() {
      return __privateGet(this, _t17);
    }
    static set workerPort(t) {
      if (!(typeof Worker < "u" && t instanceof Worker) && t !== null) throw new Error("Invalid `workerPort` type.");
      __privateSet(this, _t17, t);
    }
    static get workerSrc() {
      return __privateGet(this, _e12);
    }
    static set workerSrc(t) {
      if (typeof t != "string") throw new Error("Invalid `workerSrc` type.");
      __privateSet(this, _e12, t);
    }
  }
  _t17 = new WeakMap();
  _e12 = new WeakMap();
  __privateAdd(Kt, _t17, null);
  __privateAdd(Kt, _e12, "");
  class Ni {
    constructor({ parsedData: t, rawData: e }) {
      __privateAdd(this, _t18);
      __privateAdd(this, _e13);
      __privateSet(this, _t18, t), __privateSet(this, _e13, e);
    }
    getRaw() {
      return __privateGet(this, _e13);
    }
    get(t) {
      return __privateGet(this, _t18).get(t) ?? null;
    }
    getAll() {
      return De(__privateGet(this, _t18));
    }
    has(t) {
      return __privateGet(this, _t18).has(t);
    }
  }
  _t18 = new WeakMap();
  _e13 = new WeakMap();
  const Ot = Symbol("INTERNAL");
  class Oi {
    constructor(t, { name: e, intent: s, usage: i, rbGroups: n }) {
      __privateAdd(this, _t19, false);
      __privateAdd(this, _e14, false);
      __privateAdd(this, _s12, false);
      __privateAdd(this, _i9, true);
      __privateSet(this, _t19, !!(t & ut.DISPLAY)), __privateSet(this, _e14, !!(t & ut.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = n;
    }
    get visible() {
      if (__privateGet(this, _s12)) return __privateGet(this, _i9);
      if (!__privateGet(this, _i9)) return false;
      const { print: t, view: e } = this.usage;
      return __privateGet(this, _t19) ? (e == null ? void 0 : e.viewState) !== "OFF" : __privateGet(this, _e14) ? (t == null ? void 0 : t.printState) !== "OFF" : true;
    }
    _setVisible(t, e, s = false) {
      t !== Ot && H("Internal method `_setVisible` called."), __privateSet(this, _s12, s), __privateSet(this, _i9, e);
    }
  }
  _t19 = new WeakMap();
  _e14 = new WeakMap();
  _s12 = new WeakMap();
  _i9 = new WeakMap();
  class Bi {
    constructor(t, e = ut.DISPLAY) {
      __privateAdd(this, _Bi_instances);
      __privateAdd(this, _t20, null);
      __privateAdd(this, _e15, /* @__PURE__ */ new Map());
      __privateAdd(this, _s13, null);
      __privateAdd(this, _i10, null);
      if (this.renderingIntent = e, this.name = null, this.creator = null, t !== null) {
        this.name = t.name, this.creator = t.creator, __privateSet(this, _i10, t.order);
        for (const s of t.groups) __privateGet(this, _e15).set(s.id, new Oi(e, s));
        if (t.baseState === "OFF") for (const s of __privateGet(this, _e15).values()) s._setVisible(Ot, false);
        for (const s of t.on) __privateGet(this, _e15).get(s)._setVisible(Ot, true);
        for (const s of t.off) __privateGet(this, _e15).get(s)._setVisible(Ot, false);
        __privateSet(this, _s13, this.getHash());
      }
    }
    isVisible(t) {
      if (__privateGet(this, _e15).size === 0) return true;
      if (!t) return de("Optional content group not defined."), true;
      if (t.type === "OCG") return __privateGet(this, _e15).has(t.id) ? __privateGet(this, _e15).get(t.id).visible : (D(`Optional content group not found: ${t.id}`), true);
      if (t.type === "OCMD") {
        if (t.expression) return __privateMethod(this, _Bi_instances, r_fn3).call(this, t.expression);
        if (!t.policy || t.policy === "AnyOn") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e15).has(e)) return D(`Optional content group not found: ${e}`), true;
            if (__privateGet(this, _e15).get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOn") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e15).has(e)) return D(`Optional content group not found: ${e}`), true;
            if (!__privateGet(this, _e15).get(e).visible) return false;
          }
          return true;
        } else if (t.policy === "AnyOff") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e15).has(e)) return D(`Optional content group not found: ${e}`), true;
            if (!__privateGet(this, _e15).get(e).visible) return true;
          }
          return false;
        } else if (t.policy === "AllOff") {
          for (const e of t.ids) {
            if (!__privateGet(this, _e15).has(e)) return D(`Optional content group not found: ${e}`), true;
            if (__privateGet(this, _e15).get(e).visible) return false;
          }
          return true;
        }
        return D(`Unknown optional content policy ${t.policy}.`), true;
      }
      return D(`Unknown group type ${t.type}.`), true;
    }
    setVisibility(t, e = true, s = true) {
      var _a9;
      const i = __privateGet(this, _e15).get(t);
      if (!i) {
        D(`Optional content group not found: ${t}`);
        return;
      }
      if (s && e && i.rbGroups.length) for (const n of i.rbGroups) for (const r of n) r !== t && ((_a9 = __privateGet(this, _e15).get(r)) == null ? void 0 : _a9._setVisible(Ot, false, true));
      i._setVisible(Ot, !!e, true), __privateSet(this, _t20, null);
    }
    setOCGState({ state: t, preserveRB: e }) {
      let s;
      for (const i of t) {
        switch (i) {
          case "ON":
          case "OFF":
          case "Toggle":
            s = i;
            continue;
        }
        const n = __privateGet(this, _e15).get(i);
        if (n) switch (s) {
          case "ON":
            this.setVisibility(i, true, e);
            break;
          case "OFF":
            this.setVisibility(i, false, e);
            break;
          case "Toggle":
            this.setVisibility(i, !n.visible, e);
            break;
        }
      }
      __privateSet(this, _t20, null);
    }
    get hasInitialVisibility() {
      return __privateGet(this, _s13) === null || this.getHash() === __privateGet(this, _s13);
    }
    getOrder() {
      return __privateGet(this, _e15).size ? __privateGet(this, _i10) ? __privateGet(this, _i10).slice() : [
        ...__privateGet(this, _e15).keys()
      ] : null;
    }
    getGroups() {
      return __privateGet(this, _e15).size > 0 ? De(__privateGet(this, _e15)) : null;
    }
    getGroup(t) {
      return __privateGet(this, _e15).get(t) || null;
    }
    getHash() {
      if (__privateGet(this, _t20) !== null) return __privateGet(this, _t20);
      const t = new _s();
      for (const [e, s] of __privateGet(this, _e15)) t.update(`${e}:${s.visible}`);
      return __privateSet(this, _t20, t.hexdigest());
    }
  }
  _t20 = new WeakMap();
  _e15 = new WeakMap();
  _s13 = new WeakMap();
  _i10 = new WeakMap();
  _Bi_instances = new WeakSet();
  r_fn3 = function(t) {
    const e = t.length;
    if (e < 2) return true;
    const s = t[0];
    for (let i = 1; i < e; i++) {
      const n = t[i];
      let r;
      if (Array.isArray(n)) r = __privateMethod(this, _Bi_instances, r_fn3).call(this, n);
      else if (__privateGet(this, _e15).has(n)) r = __privateGet(this, _e15).get(n).visible;
      else return D(`Optional content group not found: ${n}`), true;
      switch (s) {
        case "And":
          if (!r) return false;
          break;
        case "Or":
          if (r) return true;
          break;
        case "Not":
          return !r;
        default:
          return true;
      }
    }
    return s === "And";
  };
  class Hi {
    constructor(t, { disableRange: e = false, disableStream: s = false }) {
      X(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
      const { length: i, initialData: n, progressiveDone: r, contentDispositionFilename: a } = t;
      if (this._queuedChunks = [], this._progressiveDone = r, this._contentDispositionFilename = a, (n == null ? void 0 : n.length) > 0) {
        const o = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
        this._queuedChunks.push(o);
      }
      this._pdfDataRangeTransport = t, this._isStreamingSupported = !s, this._isRangeSupported = !e, this._contentLength = i, this._fullRequestReader = null, this._rangeReaders = [], t.addRangeListener((o, l) => {
        this._onReceiveData({
          begin: o,
          chunk: l
        });
      }), t.addProgressListener((o, l) => {
        this._onProgress({
          loaded: o,
          total: l
        });
      }), t.addProgressiveReadListener((o) => {
        this._onReceiveData({
          chunk: o
        });
      }), t.addProgressiveDoneListener(() => {
        this._onProgressiveDone();
      }), t.transportReady();
    }
    _onReceiveData({ begin: t, chunk: e }) {
      const s = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
      if (t === void 0) this._fullRequestReader ? this._fullRequestReader._enqueue(s) : this._queuedChunks.push(s);
      else {
        const i = this._rangeReaders.some(function(n) {
          return n._begin !== t ? false : (n._enqueue(s), true);
        });
        X(i, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
      }
    }
    get _progressiveDataLength() {
      var _a9;
      return ((_a9 = this._fullRequestReader) == null ? void 0 : _a9._loaded) ?? 0;
    }
    _onProgress(t) {
      var _a9, _b6, _c15, _d10;
      t.total === void 0 ? (_b6 = (_a9 = this._rangeReaders[0]) == null ? void 0 : _a9.onProgress) == null ? void 0 : _b6.call(_a9, {
        loaded: t.loaded
      }) : (_d10 = (_c15 = this._fullRequestReader) == null ? void 0 : _c15.onProgress) == null ? void 0 : _d10.call(_c15, {
        loaded: t.loaded,
        total: t.total
      });
    }
    _onProgressiveDone() {
      var _a9;
      (_a9 = this._fullRequestReader) == null ? void 0 : _a9.progressiveDone(), this._progressiveDone = true;
    }
    _removeRangeReader(t) {
      const e = this._rangeReaders.indexOf(t);
      e >= 0 && this._rangeReaders.splice(e, 1);
    }
    getFullReader() {
      X(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
      const t = this._queuedChunks;
      return this._queuedChunks = null, new $i(this, t, this._progressiveDone, this._contentDispositionFilename);
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const s = new Gi(this, t, e);
      return this._pdfDataRangeTransport.requestDataRange(t, e), this._rangeReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var _a9;
      (_a9 = this._fullRequestReader) == null ? void 0 : _a9.cancel(t);
      for (const e of this._rangeReaders.slice(0)) e.cancel(t);
      this._pdfDataRangeTransport.abort();
    }
  }
  class $i {
    constructor(t, e, s = false, i = null) {
      this._stream = t, this._done = s || false, this._filename = Oe(i) ? i : null, this._queuedChunks = e || [], this._loaded = 0;
      for (const n of this._queuedChunks) this._loaded += n.byteLength;
      this._requests = [], this._headersReady = Promise.resolve(), t._fullRequestReader = this, this.onProgress = null;
    }
    _enqueue(t) {
      this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
        value: t,
        done: false
      }) : this._queuedChunks.push(t), this._loaded += t.byteLength);
    }
    get headersReady() {
      return this._headersReady;
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._stream._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._stream._isStreamingSupported;
    }
    get contentLength() {
      return this._stream._contentLength;
    }
    async read() {
      if (this._queuedChunks.length > 0) return {
        value: this._queuedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true;
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0;
    }
    progressiveDone() {
      this._done || (this._done = true);
    }
  }
  class Gi {
    constructor(t, e, s) {
      this._stream = t, this._begin = e, this._end = s, this._queuedChunk = null, this._requests = [], this._done = false, this.onProgress = null;
    }
    _enqueue(t) {
      if (!this._done) {
        if (this._requests.length === 0) this._queuedChunk = t;
        else {
          this._requests.shift().resolve({
            value: t,
            done: false
          });
          for (const s of this._requests) s.resolve({
            value: void 0,
            done: true
          });
          this._requests.length = 0;
        }
        this._done = true, this._stream._removeRangeReader(this);
      }
    }
    get isStreamingSupported() {
      return false;
    }
    async read() {
      if (this._queuedChunk) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true;
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._stream._removeRangeReader(this);
    }
  }
  function zi(c) {
    let t = true, e = s("filename\\*", "i").exec(c);
    if (e) {
      e = e[1];
      let h = a(e);
      return h = unescape(h), h = o(h), h = l(h), n(h);
    }
    if (e = r(c), e) {
      const h = l(e);
      return n(h);
    }
    if (e = s("filename", "i").exec(c), e) {
      e = e[1];
      let h = a(e);
      return h = l(h), n(h);
    }
    function s(h, d) {
      return new RegExp("(?:^|;)\\s*" + h + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', d);
    }
    function i(h, d) {
      if (h) {
        if (!/^[\x00-\xFF]+$/.test(d)) return d;
        try {
          const u = new TextDecoder(h, {
            fatal: true
          }), f = ue(d);
          d = u.decode(f), t = false;
        } catch {
        }
      }
      return d;
    }
    function n(h) {
      return t && /[\x80-\xff]/.test(h) && (h = i("utf-8", h), t && (h = i("iso-8859-1", h))), h;
    }
    function r(h) {
      const d = [];
      let u;
      const f = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
      for (; (u = f.exec(h)) !== null; ) {
        let [, g, b, m] = u;
        if (g = parseInt(g, 10), g in d) {
          if (g === 0) break;
          continue;
        }
        d[g] = [
          b,
          m
        ];
      }
      const p = [];
      for (let g = 0; g < d.length && g in d; ++g) {
        let [b, m] = d[g];
        m = a(m), b && (m = unescape(m), g === 0 && (m = o(m))), p.push(m);
      }
      return p.join("");
    }
    function a(h) {
      if (h.startsWith('"')) {
        const d = h.slice(1).split('\\"');
        for (let u = 0; u < d.length; ++u) {
          const f = d[u].indexOf('"');
          f !== -1 && (d[u] = d[u].slice(0, f), d.length = u + 1), d[u] = d[u].replaceAll(/\\(.)/g, "$1");
        }
        h = d.join('"');
      }
      return h;
    }
    function o(h) {
      const d = h.indexOf("'");
      if (d === -1) return h;
      const u = h.slice(0, d), p = h.slice(d + 1).replace(/^[^']*'/, "");
      return i(u, p);
    }
    function l(h) {
      return !h.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(h) ? h : h.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(d, u, f, p) {
        if (f === "q" || f === "Q") return p = p.replaceAll("_", " "), p = p.replaceAll(/=([0-9a-fA-F]{2})/g, function(g, b) {
          return String.fromCharCode(parseInt(b, 16));
        }), i(u, p);
        try {
          p = atob(p);
        } catch {
        }
        return i(u, p);
      });
    }
    return "";
  }
  function Ps(c, t) {
    const e = new Headers();
    if (!c || !t || typeof t != "object") return e;
    for (const s in t) {
      const i = t[s];
      i !== void 0 && e.append(s, i);
    }
    return e;
  }
  function me(c) {
    try {
      return new URL(c).origin;
    } catch {
    }
    return null;
  }
  function ks({ responseHeaders: c, isHttp: t, rangeChunkSize: e, disableRange: s }) {
    const i = {
      allowRangeRequests: false,
      suggestedLength: void 0
    }, n = parseInt(c.get("Content-Length"), 10);
    return !Number.isInteger(n) || (i.suggestedLength = n, n <= 2 * e) || s || !t || c.get("Accept-Ranges") !== "bytes" || (c.get("Content-Encoding") || "identity") !== "identity" || (i.allowRangeRequests = true), i;
  }
  function Rs(c) {
    const t = c.get("Content-Disposition");
    if (t) {
      let e = zi(t);
      if (e.includes("%")) try {
        e = decodeURIComponent(e);
      } catch {
      }
      if (Oe(e)) return e;
    }
    return null;
  }
  function be(c, t) {
    return c === 404 || c === 0 && t.startsWith("file:") ? new Qt('Missing PDF "' + t + '".') : new oe(`Unexpected server response (${c}) while retrieving PDF "${t}".`, c);
  }
  function Ms(c) {
    return c === 200 || c === 206;
  }
  function Is(c, t, e) {
    return {
      method: "GET",
      headers: c,
      signal: e.signal,
      mode: "cors",
      credentials: t ? "include" : "same-origin",
      redirect: "follow"
    };
  }
  function Ls(c) {
    return c instanceof Uint8Array ? c.buffer : c instanceof ArrayBuffer ? c : (D(`getArrayBuffer - unexpected data format: ${c}`), new Uint8Array(c).buffer);
  }
  class us {
    constructor(t) {
      __publicField(this, "_responseOrigin", null);
      this.source = t, this.isHttp = /^https?:/i.test(t.url), this.headers = Ps(this.isHttp, t.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
      var _a9;
      return ((_a9 = this._fullRequestReader) == null ? void 0 : _a9._loaded) ?? 0;
    }
    getFullReader() {
      return X(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Ui(this), this._fullRequestReader;
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const s = new ji(this, t, e);
      return this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var _a9;
      (_a9 = this._fullRequestReader) == null ? void 0 : _a9.cancel(t);
      for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
    }
  }
  class Ui {
    constructor(t) {
      this._stream = t, this._reader = null, this._loaded = 0, this._filename = null;
      const e = t.source;
      this._withCredentials = e.withCredentials || false, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || false, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
      const s = new Headers(t.headers), i = e.url;
      fetch(i, Is(s, this._withCredentials, this._abortController)).then((n) => {
        if (t._responseOrigin = me(n.url), !Ms(n.status)) throw be(n.status, i);
        this._reader = n.body.getReader(), this._headersCapability.resolve();
        const r = n.headers, { allowRangeRequests: a, suggestedLength: o } = ks({
          responseHeaders: r,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange
        });
        this._isRangeSupported = a, this._contentLength = o || this._contentLength, this._filename = Rs(r), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Pt("Streaming is disabled."));
      }).catch(this._headersCapability.reject), this.onProgress = null;
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var _a9;
      await this._headersCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : (this._loaded += t.byteLength, (_a9 = this.onProgress) == null ? void 0 : _a9.call(this, {
        loaded: this._loaded,
        total: this._contentLength
      }), {
        value: Ls(t),
        done: false
      });
    }
    cancel(t) {
      var _a9;
      (_a9 = this._reader) == null ? void 0 : _a9.cancel(t), this._abortController.abort();
    }
  }
  class ji {
    constructor(t, e, s) {
      this._stream = t, this._reader = null, this._loaded = 0;
      const i = t.source;
      this._withCredentials = i.withCredentials || false, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !i.disableStream, this._abortController = new AbortController();
      const n = new Headers(t.headers);
      n.append("Range", `bytes=${e}-${s - 1}`);
      const r = i.url;
      fetch(r, Is(n, this._withCredentials, this._abortController)).then((a) => {
        const o = me(a.url);
        if (o !== t._responseOrigin) throw new Error(`Expected range response-origin "${o}" to match "${t._responseOrigin}".`);
        if (!Ms(a.status)) throw be(a.status, r);
        this._readCapability.resolve(), this._reader = a.body.getReader();
      }).catch(this._readCapability.reject), this.onProgress = null;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var _a9;
      await this._readCapability.promise;
      const { value: t, done: e } = await this._reader.read();
      return e ? {
        value: t,
        done: e
      } : (this._loaded += t.byteLength, (_a9 = this.onProgress) == null ? void 0 : _a9.call(this, {
        loaded: this._loaded
      }), {
        value: Ls(t),
        done: false
      });
    }
    cancel(t) {
      var _a9;
      (_a9 = this._reader) == null ? void 0 : _a9.cancel(t), this._abortController.abort();
    }
  }
  const Ee = 200, xe = 206;
  function Vi(c) {
    const t = c.response;
    return typeof t != "string" ? t : ue(t).buffer;
  }
  class Wi {
    constructor({ url: t, httpHeaders: e, withCredentials: s }) {
      __publicField(this, "_responseOrigin", null);
      this.url = t, this.isHttp = /^https?:/i.test(t), this.headers = Ps(this.isHttp, e), this.withCredentials = s || false, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
    }
    request(t) {
      const e = new XMLHttpRequest(), s = this.currXhrId++, i = this.pendingRequests[s] = {
        xhr: e
      };
      e.open("GET", this.url), e.withCredentials = this.withCredentials;
      for (const [n, r] of this.headers) e.setRequestHeader(n, r);
      return this.isHttp && "begin" in t && "end" in t ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`), i.expectedStatus = xe) : i.expectedStatus = Ee, e.responseType = "arraybuffer", X(t.onError, "Expected `onError` callback to be provided."), e.onerror = () => {
        t.onError(e.status);
      }, e.onreadystatechange = this.onStateChange.bind(this, s), e.onprogress = this.onProgress.bind(this, s), i.onHeadersReceived = t.onHeadersReceived, i.onDone = t.onDone, i.onError = t.onError, i.onProgress = t.onProgress, e.send(null), s;
    }
    onProgress(t, e) {
      var _a9;
      const s = this.pendingRequests[t];
      s && ((_a9 = s.onProgress) == null ? void 0 : _a9.call(s, e));
    }
    onStateChange(t, e) {
      const s = this.pendingRequests[t];
      if (!s) return;
      const i = s.xhr;
      if (i.readyState >= 2 && s.onHeadersReceived && (s.onHeadersReceived(), delete s.onHeadersReceived), i.readyState !== 4 || !(t in this.pendingRequests)) return;
      if (delete this.pendingRequests[t], i.status === 0 && this.isHttp) {
        s.onError(i.status);
        return;
      }
      const n = i.status || Ee;
      if (!(n === Ee && s.expectedStatus === xe) && n !== s.expectedStatus) {
        s.onError(i.status);
        return;
      }
      const a = Vi(i);
      if (n === xe) {
        const o = i.getResponseHeader("Content-Range"), l = /bytes (\d+)-(\d+)\/(\d+)/.exec(o);
        l ? s.onDone({
          begin: parseInt(l[1], 10),
          chunk: a
        }) : (D('Missing or invalid "Content-Range" header.'), s.onError(0));
      } else a ? s.onDone({
        begin: 0,
        chunk: a
      }) : s.onError(i.status);
    }
    getRequestXhr(t) {
      return this.pendingRequests[t].xhr;
    }
    isPendingRequest(t) {
      return t in this.pendingRequests;
    }
    abortRequest(t) {
      const e = this.pendingRequests[t].xhr;
      delete this.pendingRequests[t], e.abort();
    }
  }
  class Xi {
    constructor(t) {
      this._source = t, this._manager = new Wi(t), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    _onRangeRequestReaderClosed(t) {
      const e = this._rangeRequestReaders.indexOf(t);
      e >= 0 && this._rangeRequestReaders.splice(e, 1);
    }
    getFullReader() {
      return X(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new qi(this._manager, this._source), this._fullRequestReader;
    }
    getRangeReader(t, e) {
      const s = new Yi(this._manager, t, e);
      return s.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var _a9;
      (_a9 = this._fullRequestReader) == null ? void 0 : _a9.cancel(t);
      for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
    }
  }
  class qi {
    constructor(t, e) {
      this._manager = t, this._url = e.url, this._fullRequestId = t.request({
        onHeadersReceived: this._onHeadersReceived.bind(this),
        onDone: this._onDone.bind(this),
        onError: this._onError.bind(this),
        onProgress: this._onProgress.bind(this)
      }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || false, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = false, this._isRangeSupported = false, this._cachedChunks = [], this._requests = [], this._done = false, this._storedError = void 0, this._filename = null, this.onProgress = null;
    }
    _onHeadersReceived() {
      const t = this._fullRequestId, e = this._manager.getRequestXhr(t);
      this._manager._responseOrigin = me(e.responseURL);
      const s = e.getAllResponseHeaders(), i = new Headers(s ? s.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((a) => {
        const [o, ...l] = a.split(": ");
        return [
          o,
          l.join(": ")
        ];
      }) : []), { allowRangeRequests: n, suggestedLength: r } = ks({
        responseHeaders: i,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      n && (this._isRangeSupported = true), this._contentLength = r || this._contentLength, this._filename = Rs(i), this._isRangeSupported && this._manager.abortRequest(t), this._headersCapability.resolve();
    }
    _onDone(t) {
      if (t && (this._requests.length > 0 ? this._requests.shift().resolve({
        value: t.chunk,
        done: false
      }) : this._cachedChunks.push(t.chunk)), this._done = true, !(this._cachedChunks.length > 0)) {
        for (const e of this._requests) e.resolve({
          value: void 0,
          done: true
        });
        this._requests.length = 0;
      }
    }
    _onError(t) {
      this._storedError = be(t, this._url), this._headersCapability.reject(this._storedError);
      for (const e of this._requests) e.reject(this._storedError);
      this._requests.length = 0, this._cachedChunks.length = 0;
    }
    _onProgress(t) {
      var _a9;
      (_a9 = this.onProgress) == null ? void 0 : _a9.call(this, {
        loaded: t.loaded,
        total: t.lengthComputable ? t.total : this._contentLength
      });
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    get contentLength() {
      return this._contentLength;
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    async read() {
      if (await this._headersCapability.promise, this._storedError) throw this._storedError;
      if (this._cachedChunks.length > 0) return {
        value: this._cachedChunks.shift(),
        done: false
      };
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true, this._headersCapability.reject(t);
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
    }
  }
  class Yi {
    constructor(t, e, s) {
      this._manager = t, this._url = t.url, this._requestId = t.request({
        begin: e,
        end: s,
        onHeadersReceived: this._onHeadersReceived.bind(this),
        onDone: this._onDone.bind(this),
        onError: this._onError.bind(this),
        onProgress: this._onProgress.bind(this)
      }), this._requests = [], this._queuedChunk = null, this._done = false, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
    }
    _onHeadersReceived() {
      var _a9;
      const t = me((_a9 = this._manager.getRequestXhr(this._requestId)) == null ? void 0 : _a9.responseURL);
      t !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t}" to match "${this._manager._responseOrigin}".`), this._onError(0));
    }
    _close() {
      var _a9;
      (_a9 = this.onClosed) == null ? void 0 : _a9.call(this, this);
    }
    _onDone(t) {
      const e = t.chunk;
      this._requests.length > 0 ? this._requests.shift().resolve({
        value: e,
        done: false
      }) : this._queuedChunk = e, this._done = true;
      for (const s of this._requests) s.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._close();
    }
    _onError(t) {
      this._storedError ?? (this._storedError = be(t, this._url));
      for (const e of this._requests) e.reject(this._storedError);
      this._requests.length = 0, this._queuedChunk = null;
    }
    _onProgress(t) {
      var _a9;
      this.isStreamingSupported || ((_a9 = this.onProgress) == null ? void 0 : _a9.call(this, {
        loaded: t.loaded
      }));
    }
    get isStreamingSupported() {
      return false;
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (this._queuedChunk !== null) {
        const e = this._queuedChunk;
        return this._queuedChunk = null, {
          value: e,
          done: false
        };
      }
      if (this._done) return {
        value: void 0,
        done: true
      };
      const t = Promise.withResolvers();
      return this._requests.push(t), t.promise;
    }
    cancel(t) {
      this._done = true;
      for (const e of this._requests) e.resolve({
        value: void 0,
        done: true
      });
      this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
    }
  }
  const Ki = /^[a-z][a-z0-9\-+.]+:/i;
  function Qi(c) {
    if (Ki.test(c)) return new URL(c);
    const t = process.getBuiltinModule("url");
    return new URL(t.pathToFileURL(c));
  }
  class Ji {
    constructor(t) {
      this.source = t, this.url = Qi(t.url), X(this.url.protocol === "file:", "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
      var _a9;
      return ((_a9 = this._fullRequestReader) == null ? void 0 : _a9._loaded) ?? 0;
    }
    getFullReader() {
      return X(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new Zi(this), this._fullRequestReader;
    }
    getRangeReader(t, e) {
      if (e <= this._progressiveDataLength) return null;
      const s = new tn(this, t, e);
      return this._rangeRequestReaders.push(s), s;
    }
    cancelAllRequests(t) {
      var _a9;
      (_a9 = this._fullRequestReader) == null ? void 0 : _a9.cancel(t);
      for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
    }
  }
  class Zi {
    constructor(t) {
      this._url = t.url, this._done = false, this._storedError = null, this.onProgress = null;
      const e = t.source;
      this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || false, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = true), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
      const s = process.getBuiltinModule("fs");
      s.promises.lstat(this._url).then((i) => {
        this._contentLength = i.size, this._setReadableStream(s.createReadStream(this._url)), this._headersCapability.resolve();
      }, (i) => {
        i.code === "ENOENT" && (i = new Qt(`Missing PDF "${this._url}".`)), this._storedError = i, this._headersCapability.reject(i);
      });
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var _a9;
      if (await this._readCapability.promise, this._done) return {
        value: void 0,
        done: true
      };
      if (this._storedError) throw this._storedError;
      const t = this._readableStream.read();
      return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (_a9 = this.onProgress) == null ? void 0 : _a9.call(this, {
        loaded: this._loaded,
        total: this._contentLength
      }), {
        value: new Uint8Array(t).buffer,
        done: false
      });
    }
    cancel(t) {
      if (!this._readableStream) {
        this._error(t);
        return;
      }
      this._readableStream.destroy(t);
    }
    _error(t) {
      this._storedError = t, this._readCapability.resolve();
    }
    _setReadableStream(t) {
      this._readableStream = t, t.on("readable", () => {
        this._readCapability.resolve();
      }), t.on("end", () => {
        t.destroy(), this._done = true, this._readCapability.resolve();
      }), t.on("error", (e) => {
        this._error(e);
      }), !this._isStreamingSupported && this._isRangeSupported && this._error(new Pt("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  class tn {
    constructor(t, e, s) {
      this._url = t.url, this._done = false, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
      const i = t.source;
      this._isStreamingSupported = !i.disableStream;
      const n = process.getBuiltinModule("fs");
      this._setReadableStream(n.createReadStream(this._url, {
        start: e,
        end: s - 1
      }));
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      var _a9;
      if (await this._readCapability.promise, this._done) return {
        value: void 0,
        done: true
      };
      if (this._storedError) throw this._storedError;
      const t = this._readableStream.read();
      return t === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += t.length, (_a9 = this.onProgress) == null ? void 0 : _a9.call(this, {
        loaded: this._loaded
      }), {
        value: new Uint8Array(t).buffer,
        done: false
      });
    }
    cancel(t) {
      if (!this._readableStream) {
        this._error(t);
        return;
      }
      this._readableStream.destroy(t);
    }
    _error(t) {
      this._storedError = t, this._readCapability.resolve();
    }
    _setReadableStream(t) {
      this._readableStream = t, t.on("readable", () => {
        this._readCapability.resolve();
      }), t.on("end", () => {
        t.destroy(), this._done = true, this._readCapability.resolve();
      }), t.on("error", (e) => {
        this._error(e);
      }), this._storedError && this._readableStream.destroy(this._storedError);
    }
  }
  const en = 1e5, lt = 30, sn = 0.8;
  const _rt = class _rt {
    constructor({ textContentSource: t, container: e, viewport: s }) {
      __privateAdd(this, _rt_instances);
      __privateAdd(this, _t21, Promise.withResolvers());
      __privateAdd(this, _e16, null);
      __privateAdd(this, _s14, false);
      __privateAdd(this, _i11, !!((_a3 = globalThis.FontInspector) == null ? void 0 : _a3.enabled));
      __privateAdd(this, _r8, null);
      __privateAdd(this, _n8, null);
      __privateAdd(this, _l6, 0);
      __privateAdd(this, _o5, 0);
      __privateAdd(this, _c5, null);
      __privateAdd(this, _h5, null);
      __privateAdd(this, _u5, 0);
      __privateAdd(this, _d4, 0);
      __privateAdd(this, _f4, /* @__PURE__ */ Object.create(null));
      __privateAdd(this, _a4, []);
      __privateAdd(this, _p3, null);
      __privateAdd(this, _m3, []);
      __privateAdd(this, _g3, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _b3, null);
      var _a9;
      if (t instanceof ReadableStream) __privateSet(this, _p3, t);
      else if (typeof t == "object") __privateSet(this, _p3, new ReadableStream({
        start(o) {
          o.enqueue(t), o.close();
        }
      }));
      else throw new Error('No "textContentSource" parameter specified.');
      __privateSet(this, _e16, __privateSet(this, _h5, e)), __privateSet(this, _d4, s.scale * (globalThis.devicePixelRatio || 1)), __privateSet(this, _u5, s.rotation), __privateSet(this, _n8, {
        div: null,
        properties: null,
        ctx: null
      });
      const { pageWidth: i, pageHeight: n, pageX: r, pageY: a } = s.rawDims;
      __privateSet(this, _b3, [
        1,
        0,
        0,
        -1,
        -r,
        a + n
      ]), __privateSet(this, _o5, i), __privateSet(this, _l6, n), __privateMethod(_a9 = _rt, _rt_static, M_fn2).call(_a9), It(e, s), __privateGet(this, _t21).promise.finally(() => {
        __privateGet(_rt, _x3).delete(this), __privateSet(this, _n8, null), __privateSet(this, _f4, null);
      }).catch(() => {
      });
    }
    static get fontFamilyMap() {
      const { isWindows: t, isFirefox: e } = at.platform;
      return F(this, "fontFamilyMap", /* @__PURE__ */ new Map([
        [
          "sans-serif",
          `${t && e ? "Calibri, " : ""}sans-serif`
        ],
        [
          "monospace",
          `${t && e ? "Lucida Console, " : ""}monospace`
        ]
      ]));
    }
    render() {
      const t = () => {
        __privateGet(this, _c5).read().then(({ value: e, done: s }) => {
          if (s) {
            __privateGet(this, _t21).resolve();
            return;
          }
          __privateGet(this, _r8) ?? __privateSet(this, _r8, e.lang), Object.assign(__privateGet(this, _f4), e.styles), __privateMethod(this, _rt_instances, T_fn).call(this, e.items), t();
        }, __privateGet(this, _t21).reject);
      };
      return __privateSet(this, _c5, __privateGet(this, _p3).getReader()), __privateGet(_rt, _x3).add(this), t(), __privateGet(this, _t21).promise;
    }
    update({ viewport: t, onBefore: e = null }) {
      var _a9;
      const s = t.scale * (globalThis.devicePixelRatio || 1), i = t.rotation;
      if (i !== __privateGet(this, _u5) && (e == null ? void 0 : e(), __privateSet(this, _u5, i), It(__privateGet(this, _h5), {
        rotation: i
      })), s !== __privateGet(this, _d4)) {
        e == null ? void 0 : e(), __privateSet(this, _d4, s);
        const n = {
          div: null,
          properties: null,
          ctx: __privateMethod(_a9 = _rt, _rt_static, P_fn2).call(_a9, __privateGet(this, _r8))
        };
        for (const r of __privateGet(this, _m3)) n.properties = __privateGet(this, _g3).get(r), n.div = r, __privateMethod(this, _rt_instances, w_fn2).call(this, n);
      }
    }
    cancel() {
      var _a9;
      const t = new Pt("TextLayer task cancelled.");
      (_a9 = __privateGet(this, _c5)) == null ? void 0 : _a9.cancel(t).catch(() => {
      }), __privateSet(this, _c5, null), __privateGet(this, _t21).reject(t);
    }
    get textDivs() {
      return __privateGet(this, _m3);
    }
    get textContentItemsStr() {
      return __privateGet(this, _a4);
    }
    static cleanup() {
      if (!(__privateGet(this, _x3).size > 0)) {
        __privateGet(this, _y3).clear();
        for (const { canvas: t } of __privateGet(this, _A3).values()) t.remove();
        __privateGet(this, _A3).clear();
      }
    }
  };
  _t21 = new WeakMap();
  _e16 = new WeakMap();
  _s14 = new WeakMap();
  _i11 = new WeakMap();
  _r8 = new WeakMap();
  _n8 = new WeakMap();
  _l6 = new WeakMap();
  _o5 = new WeakMap();
  _c5 = new WeakMap();
  _h5 = new WeakMap();
  _u5 = new WeakMap();
  _d4 = new WeakMap();
  _f4 = new WeakMap();
  _a4 = new WeakMap();
  _p3 = new WeakMap();
  _m3 = new WeakMap();
  _g3 = new WeakMap();
  _b3 = new WeakMap();
  _y3 = new WeakMap();
  _A3 = new WeakMap();
  _v3 = new WeakMap();
  _S3 = new WeakMap();
  _x3 = new WeakMap();
  _rt_instances = new WeakSet();
  T_fn = function(t) {
    var _a9, _b6;
    if (__privateGet(this, _s14)) return;
    (_b6 = __privateGet(this, _n8)).ctx ?? (_b6.ctx = __privateMethod(_a9 = _rt, _rt_static, P_fn2).call(_a9, __privateGet(this, _r8)));
    const e = __privateGet(this, _m3), s = __privateGet(this, _a4);
    for (const i of t) {
      if (e.length > en) {
        D("Ignoring additional textDivs for performance reasons."), __privateSet(this, _s14, true);
        return;
      }
      if (i.str === void 0) {
        if (i.type === "beginMarkedContentProps" || i.type === "beginMarkedContent") {
          const n = __privateGet(this, _e16);
          __privateSet(this, _e16, document.createElement("span")), __privateGet(this, _e16).classList.add("markedContent"), i.id !== null && __privateGet(this, _e16).setAttribute("id", `${i.id}`), n.append(__privateGet(this, _e16));
        } else i.type === "endMarkedContent" && __privateSet(this, _e16, __privateGet(this, _e16).parentNode);
        continue;
      }
      s.push(i.str), __privateMethod(this, _rt_instances, k_fn2).call(this, i);
    }
  };
  k_fn2 = function(t) {
    var _a9;
    const e = document.createElement("span"), s = {
      angle: 0,
      canvasWidth: 0,
      hasText: t.str !== "",
      hasEOL: t.hasEOL,
      fontSize: 0
    };
    __privateGet(this, _m3).push(e);
    const i = C.transform(__privateGet(this, _b3), t.transform);
    let n = Math.atan2(i[1], i[0]);
    const r = __privateGet(this, _f4)[t.fontName];
    r.vertical && (n += Math.PI / 2);
    let a = __privateGet(this, _i11) && r.fontSubstitution || r.fontFamily;
    a = _rt.fontFamilyMap.get(a) || a;
    const o = Math.hypot(i[2], i[3]), l = o * __privateMethod(_a9 = _rt, _rt_static, D_fn2).call(_a9, a, __privateGet(this, _r8));
    let h, d;
    n === 0 ? (h = i[4], d = i[5] - l) : (h = i[4] + l * Math.sin(n), d = i[5] - l * Math.cos(n));
    const u = "calc(var(--scale-factor)*", f = e.style;
    __privateGet(this, _e16) === __privateGet(this, _h5) ? (f.left = `${(100 * h / __privateGet(this, _o5)).toFixed(2)}%`, f.top = `${(100 * d / __privateGet(this, _l6)).toFixed(2)}%`) : (f.left = `${u}${h.toFixed(2)}px)`, f.top = `${u}${d.toFixed(2)}px)`), f.fontSize = `${u}${(__privateGet(_rt, _S3) * o).toFixed(2)}px)`, f.fontFamily = a, s.fontSize = o, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, __privateGet(this, _i11) && (e.dataset.fontName = r.fontSubstitutionLoadedName || t.fontName), n !== 0 && (s.angle = n * (180 / Math.PI));
    let p = false;
    if (t.str.length > 1) p = true;
    else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
      const g = Math.abs(t.transform[0]), b = Math.abs(t.transform[3]);
      g !== b && Math.max(g, b) / Math.min(g, b) > 1.5 && (p = true);
    }
    if (p && (s.canvasWidth = r.vertical ? t.height : t.width), __privateGet(this, _g3).set(e, s), __privateGet(this, _n8).div = e, __privateGet(this, _n8).properties = s, __privateMethod(this, _rt_instances, w_fn2).call(this, __privateGet(this, _n8)), s.hasText && __privateGet(this, _e16).append(e), s.hasEOL) {
      const g = document.createElement("br");
      g.setAttribute("role", "presentation"), __privateGet(this, _e16).append(g);
    }
  };
  w_fn2 = function(t) {
    var _a9;
    const { div: e, properties: s, ctx: i } = t, { style: n } = e;
    let r = "";
    if (__privateGet(_rt, _S3) > 1 && (r = `scale(${1 / __privateGet(_rt, _S3)})`), s.canvasWidth !== 0 && s.hasText) {
      const { fontFamily: a } = n, { canvasWidth: o, fontSize: l } = s;
      __privateMethod(_a9 = _rt, _rt_static, C_fn2).call(_a9, i, l * __privateGet(this, _d4), a);
      const { width: h } = i.measureText(e.textContent);
      h > 0 && (r = `scaleX(${o * __privateGet(this, _d4) / h}) ${r}`);
    }
    s.angle !== 0 && (r = `rotate(${s.angle}deg) ${r}`), r.length > 0 && (n.transform = r);
  };
  _rt_static = new WeakSet();
  P_fn2 = function(t = null) {
    let e = __privateGet(this, _A3).get(t || (t = ""));
    if (!e) {
      const s = document.createElement("canvas");
      s.className = "hiddenCanvasElement", s.lang = t, document.body.append(s), e = s.getContext("2d", {
        alpha: false,
        willReadFrequently: true
      }), __privateGet(this, _A3).set(t, e), __privateGet(this, _v3).set(e, {
        size: 0,
        family: ""
      });
    }
    return e;
  };
  C_fn2 = function(t, e, s) {
    const i = __privateGet(this, _v3).get(t);
    e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
  };
  M_fn2 = function() {
    if (__privateGet(this, _S3) !== null) return;
    const t = document.createElement("div");
    t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), __privateSet(this, _S3, t.getBoundingClientRect().height), t.remove();
  };
  D_fn2 = function(t, e) {
    const s = __privateGet(this, _y3).get(t);
    if (s) return s;
    const i = __privateMethod(this, _rt_static, P_fn2).call(this, e);
    i.canvas.width = i.canvas.height = lt, __privateMethod(this, _rt_static, C_fn2).call(this, i, lt, t);
    const n = i.measureText("");
    let r = n.fontBoundingBoxAscent, a = Math.abs(n.fontBoundingBoxDescent);
    if (r) {
      const h = r / (r + a);
      return __privateGet(this, _y3).set(t, h), i.canvas.width = i.canvas.height = 0, h;
    }
    i.strokeStyle = "red", i.clearRect(0, 0, lt, lt), i.strokeText("g", 0, 0);
    let o = i.getImageData(0, 0, lt, lt).data;
    a = 0;
    for (let h = o.length - 1 - 3; h >= 0; h -= 4) if (o[h] > 0) {
      a = Math.ceil(h / 4 / lt);
      break;
    }
    i.clearRect(0, 0, lt, lt), i.strokeText("A", 0, lt), o = i.getImageData(0, 0, lt, lt).data, r = 0;
    for (let h = 0, d = o.length; h < d; h += 4) if (o[h] > 0) {
      r = lt - Math.floor(h / 4 / lt);
      break;
    }
    i.canvas.width = i.canvas.height = 0;
    const l = r ? r / (r + a) : sn;
    return __privateGet(this, _y3).set(t, l), l;
  };
  __privateAdd(_rt, _rt_static);
  __privateAdd(_rt, _y3, /* @__PURE__ */ new Map());
  __privateAdd(_rt, _A3, /* @__PURE__ */ new Map());
  __privateAdd(_rt, _v3, /* @__PURE__ */ new WeakMap());
  __privateAdd(_rt, _S3, null);
  __privateAdd(_rt, _x3, /* @__PURE__ */ new Set());
  let rt = _rt;
  class Jt {
    static textContent(t) {
      const e = [], s = {
        items: e,
        styles: /* @__PURE__ */ Object.create(null)
      };
      function i(n) {
        var _a9;
        if (!n) return;
        let r = null;
        const a = n.name;
        if (a === "#text") r = n.value;
        else if (Jt.shouldBuildText(a)) ((_a9 = n == null ? void 0 : n.attributes) == null ? void 0 : _a9.textContent) ? r = n.attributes.textContent : n.value && (r = n.value);
        else return;
        if (r !== null && e.push({
          str: r
        }), !!n.children) for (const o of n.children) i(o);
      }
      return i(t), s;
    }
    static shouldBuildText(t) {
      return !(t === "textarea" || t === "input" || t === "option" || t === "select");
    }
  }
  const nn = 65536, rn = 100, an = 5e3, on = st ? yi : bi, ln = st ? vi : Ss, hn = st ? _i : Ai, cn = st ? wi : Cs;
  function dn(c = {}) {
    typeof c == "string" || c instanceof URL ? c = {
      url: c
    } : (c instanceof ArrayBuffer || ArrayBuffer.isView(c)) && (c = {
      data: c
    });
    const t = new je(), { docId: e } = t, s = c.url ? un(c.url) : null, i = c.data ? fn(c.data) : null, n = c.httpHeaders || null, r = c.withCredentials === true, a = c.password ?? null, o = c.range instanceof Ds ? c.range : null, l = Number.isInteger(c.rangeChunkSize) && c.rangeChunkSize > 0 ? c.rangeChunkSize : nn;
    let h = c.worker instanceof J ? c.worker : null;
    const d = c.verbosity, u = typeof c.docBaseUrl == "string" && !pe(c.docBaseUrl) ? c.docBaseUrl : null, f = typeof c.cMapUrl == "string" ? c.cMapUrl : null, p = c.cMapPacked !== false, g = c.CMapReaderFactory || ln, b = typeof c.standardFontDataUrl == "string" ? c.standardFontDataUrl : null, m = c.StandardFontDataFactory || cn, A = c.stopAtErrors !== true, _ = Number.isInteger(c.maxImageSize) && c.maxImageSize > -1 ? c.maxImageSize : -1, y = c.isEvalSupported !== false, v = typeof c.isOffscreenCanvasSupported == "boolean" ? c.isOffscreenCanvasSupported : !st, S = typeof c.isImageDecoderSupported == "boolean" ? c.isImageDecoderSupported : !st && (at.platform.isFirefox || !globalThis.chrome), w = Number.isInteger(c.canvasMaxAreaInBytes) ? c.canvasMaxAreaInBytes : -1, T = typeof c.disableFontFace == "boolean" ? c.disableFontFace : st, M = c.fontExtraProperties === true, B = c.enableXfa === true, N = c.ownerDocument || globalThis.document, G = c.disableRange === true, q = c.disableStream === true, $ = c.disableAutoFetch === true, it = c.pdfBug === true, x = c.CanvasFactory || on, P = c.FilterFactory || hn, dt = c.enableHWA === true, _t54 = o ? o.length : c.length ?? NaN, St = typeof c.useSystemFonts == "boolean" ? c.useSystemFonts : !st && !T, pt = typeof c.useWorkerFetch == "boolean" ? c.useWorkerFetch : g === Ss && m === Cs && f && b && Wt(f, document.baseURI) && Wt(b, document.baseURI), Z = null;
    Ys(d);
    const Y = {
      canvasFactory: new x({
        ownerDocument: N,
        enableHWA: dt
      }),
      filterFactory: new P({
        docId: e,
        ownerDocument: N
      }),
      cMapReaderFactory: pt ? null : new g({
        baseUrl: f,
        isCompressed: p
      }),
      standardFontDataFactory: pt ? null : new m({
        baseUrl: b
      })
    };
    if (!h) {
      const ot = {
        verbosity: d,
        port: Kt.workerPort
      };
      h = ot.port ? J.fromPort(ot) : new J(ot), t._worker = h;
    }
    const Ft = {
      docId: e,
      apiVersion: "4.10.38",
      data: i,
      password: a,
      disableAutoFetch: $,
      rangeChunkSize: l,
      length: _t54,
      docBaseUrl: u,
      enableXfa: B,
      evaluatorOptions: {
        maxImageSize: _,
        disableFontFace: T,
        ignoreErrors: A,
        isEvalSupported: y,
        isOffscreenCanvasSupported: v,
        isImageDecoderSupported: S,
        canvasMaxAreaInBytes: w,
        fontExtraProperties: M,
        useSystemFonts: St,
        cMapUrl: pt ? f : null,
        standardFontDataUrl: pt ? b : null
      }
    }, Gt = {
      disableFontFace: T,
      fontExtraProperties: M,
      ownerDocument: N,
      pdfBug: it,
      styleElement: Z,
      loadingParams: {
        disableAutoFetch: $,
        enableXfa: B
      }
    };
    return h.promise.then(function() {
      if (t.destroyed) throw new Error("Loading aborted");
      if (h.destroyed) throw new Error("Worker was destroyed");
      const ot = h.messageHandler.sendWithPromise("GetDocRequest", Ft, i ? [
        i.buffer
      ] : null);
      let z;
      if (o) z = new Hi(o, {
        disableRange: G,
        disableStream: q
      });
      else if (!i) {
        if (!s) throw new Error("getDocument - no `url` parameter provided.");
        let Nt;
        if (st) if (Wt(s)) {
          if (typeof fetch > "u" || typeof Response > "u" || !("body" in Response.prototype)) throw new Error("getDocument - the Fetch API was disabled in Node.js, see `--no-experimental-fetch`.");
          Nt = us;
        } else Nt = Ji;
        else Nt = Wt(s) ? us : Xi;
        z = new Nt({
          url: s,
          length: _t54,
          httpHeaders: n,
          withCredentials: r,
          rangeChunkSize: l,
          disableRange: G,
          disableStream: q
        });
      }
      return ot.then((Nt) => {
        if (t.destroyed) throw new Error("Loading aborted");
        if (h.destroyed) throw new Error("Worker was destroyed");
        const Ke = new Xt(e, Nt, h.port), js = new bn(Ke, t, z, Gt, Y);
        t._transport = js, Ke.send("Ready", null);
      });
    }).catch(t._capability.reject), t;
  }
  function un(c) {
    if (c instanceof URL) return c.href;
    try {
      return new URL(c, window.location).href;
    } catch {
      if (st && typeof c == "string") return c;
    }
    throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
  }
  function fn(c) {
    if (st && typeof Buffer < "u" && c instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
    if (c instanceof Uint8Array && c.byteLength === c.buffer.byteLength) return c;
    if (typeof c == "string") return ue(c);
    if (c instanceof ArrayBuffer || ArrayBuffer.isView(c) || typeof c == "object" && !isNaN(c == null ? void 0 : c.length)) return new Uint8Array(c);
    throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
  }
  function fs(c) {
    return typeof c == "object" && Number.isInteger(c == null ? void 0 : c.num) && c.num >= 0 && Number.isInteger(c == null ? void 0 : c.gen) && c.gen >= 0;
  }
  const _je = class _je {
    constructor() {
      this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${__privateWrapper(_je, _t22)._++}`, this.destroyed = false, this.onPassword = null, this.onProgress = null;
    }
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      var _a9, _b6, _c15, _d10;
      this.destroyed = true;
      try {
        ((_a9 = this._worker) == null ? void 0 : _a9.port) && (this._worker._pendingDestroy = true), await ((_b6 = this._transport) == null ? void 0 : _b6.destroy());
      } catch (t) {
        throw ((_c15 = this._worker) == null ? void 0 : _c15.port) && delete this._worker._pendingDestroy, t;
      }
      this._transport = null, (_d10 = this._worker) == null ? void 0 : _d10.destroy(), this._worker = null;
    }
  };
  _t22 = new WeakMap();
  __privateAdd(_je, _t22, 0);
  let je = _je;
  class Ds {
    constructor(t, e, s = false, i = null) {
      this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
    }
    addRangeListener(t) {
      this._rangeListeners.push(t);
    }
    addProgressListener(t) {
      this._progressListeners.push(t);
    }
    addProgressiveReadListener(t) {
      this._progressiveReadListeners.push(t);
    }
    addProgressiveDoneListener(t) {
      this._progressiveDoneListeners.push(t);
    }
    onDataRange(t, e) {
      for (const s of this._rangeListeners) s(t, e);
    }
    onDataProgress(t, e) {
      this._readyCapability.promise.then(() => {
        for (const s of this._progressListeners) s(t, e);
      });
    }
    onDataProgressiveRead(t) {
      this._readyCapability.promise.then(() => {
        for (const e of this._progressiveReadListeners) e(t);
      });
    }
    onDataProgressiveDone() {
      this._readyCapability.promise.then(() => {
        for (const t of this._progressiveDoneListeners) t();
      });
    }
    transportReady() {
      this._readyCapability.resolve();
    }
    requestDataRange(t, e) {
      H("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {
    }
  }
  class pn {
    constructor(t, e) {
      this._pdfInfo = t, this._transport = e;
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get canvasFactory() {
      return this._transport.canvasFactory;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return F(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(t) {
      return this._transport.getPage(t);
    }
    getPageIndex(t) {
      return this._transport.getPageIndex(t);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(t) {
      return this._transport.getDestination(t);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getOptionalContentConfig(e);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    cleanup(t = false) {
      return this._transport.startCleanup(t || this.isPureXfa);
    }
    destroy() {
      return this.loadingTask.destroy();
    }
    cachedPageNumber(t) {
      return this._transport.cachedPageNumber(t);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  }
  class gn {
    constructor(t, e, s, i = false) {
      __privateAdd(this, _gn_instances);
      __privateAdd(this, _t23, null);
      __privateAdd(this, _e17, false);
      this._pageIndex = t, this._pageInfo = e, this._transport = s, this._stats = i ? new Ze() : null, this._pdfBug = i, this.commonObjs = s.commonObjs, this.objs = new Fs(), this._maybeCleanupAfterRender = false, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = false;
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({ scale: t, rotation: e = this.rotate, offsetX: s = 0, offsetY: i = 0, dontFlip: n = false } = {}) {
      return new Zt({
        viewBox: this.view,
        userUnit: this.userUnit,
        scale: t,
        rotation: e,
        offsetX: s,
        offsetY: i,
        dontFlip: n
      });
    }
    getAnnotations({ intent: t = "display" } = {}) {
      const { renderingIntent: e } = this._transport.getRenderingIntent(t);
      return this._transport.getAnnotations(this._pageIndex, e);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return F(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
      var _a9;
      return ((_a9 = this._transport._htmlForXfa) == null ? void 0 : _a9.children[this._pageIndex]) || null;
    }
    render({ canvasContext: t, viewport: e, intent: s = "display", annotationMode: i = Ct.ENABLE, transform: n = null, background: r = null, optionalContentConfigPromise: a = null, annotationCanvasMap: o = null, pageColors: l = null, printAnnotationStorage: h = null, isEditing: d = false }) {
      var _a9, _b6;
      (_a9 = this._stats) == null ? void 0 : _a9.time("Overall");
      const u = this._transport.getRenderingIntent(s, i, h, d), { renderingIntent: f, cacheKey: p } = u;
      __privateSet(this, _e17, false), __privateMethod(this, _gn_instances, i_fn5).call(this), a || (a = this._transport.getOptionalContentConfig(f));
      let g = this._intentStates.get(p);
      g || (g = /* @__PURE__ */ Object.create(null), this._intentStates.set(p, g)), g.streamReaderCancelTimeout && (clearTimeout(g.streamReaderCancelTimeout), g.streamReaderCancelTimeout = null);
      const b = !!(f & ut.PRINT);
      g.displayReadyCapability || (g.displayReadyCapability = Promise.withResolvers(), g.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, (_b6 = this._stats) == null ? void 0 : _b6.time("Page Request"), this._pumpOperatorList(u));
      const m = (y) => {
        var _a10;
        g.renderTasks.delete(A), (this._maybeCleanupAfterRender || b) && __privateSet(this, _e17, true), __privateMethod(this, _gn_instances, s_fn3).call(this, !b), y ? (A.capability.reject(y), this._abortOperatorList({
          intentState: g,
          reason: y instanceof Error ? y : new Error(y)
        })) : A.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), ((_a10 = globalThis.Stats) == null ? void 0 : _a10.enabled) && globalThis.Stats.add(this.pageNumber, this._stats));
      }, A = new Bt({
        callback: m,
        params: {
          canvasContext: t,
          viewport: e,
          transform: n,
          background: r
        },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: o,
        operatorList: g.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !b,
        pdfBug: this._pdfBug,
        pageColors: l
      });
      (g.renderTasks || (g.renderTasks = /* @__PURE__ */ new Set())).add(A);
      const _ = A.task;
      return Promise.all([
        g.displayReadyCapability.promise,
        a
      ]).then(([y, v]) => {
        var _a10;
        if (this.destroyed) {
          m();
          return;
        }
        if ((_a10 = this._stats) == null ? void 0 : _a10.time("Rendering"), !(v.renderingIntent & f)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
        A.initializeGraphics({
          transparency: y,
          optionalContentConfig: v
        }), A.operatorListChanged();
      }).catch(m), _;
    }
    getOperatorList({ intent: t = "display", annotationMode: e = Ct.ENABLE, printAnnotationStorage: s = null, isEditing: i = false } = {}) {
      var _a9;
      function n() {
        a.operatorList.lastChunk && (a.opListReadCapability.resolve(a.operatorList), a.renderTasks.delete(o));
      }
      const r = this._transport.getRenderingIntent(t, e, s, i, true);
      let a = this._intentStates.get(r.cacheKey);
      a || (a = /* @__PURE__ */ Object.create(null), this._intentStates.set(r.cacheKey, a));
      let o;
      return a.opListReadCapability || (o = /* @__PURE__ */ Object.create(null), o.operatorListChanged = n, a.opListReadCapability = Promise.withResolvers(), (a.renderTasks || (a.renderTasks = /* @__PURE__ */ new Set())).add(o), a.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: false,
        separateAnnots: null
      }, (_a9 = this._stats) == null ? void 0 : _a9.time("Page Request"), this._pumpOperatorList(r)), a.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t = false, disableNormalization: e = false } = {}) {
      return this._transport.messageHandler.sendWithStream("GetTextContent", {
        pageIndex: this._pageIndex,
        includeMarkedContent: t === true,
        disableNormalization: e === true
      }, {
        highWaterMark: 100,
        size(i) {
          return i.items.length;
        }
      });
    }
    getTextContent(t = {}) {
      if (this._transport._htmlForXfa) return this.getXfa().then((s) => Jt.textContent(s));
      const e = this.streamTextContent(t);
      return new Promise(function(s, i) {
        function n() {
          r.read().then(function({ value: o, done: l }) {
            if (l) {
              s(a);
              return;
            }
            a.lang ?? (a.lang = o.lang), Object.assign(a.styles, o.styles), a.items.push(...o.items), n();
          }, i);
        }
        const r = e.getReader(), a = {
          items: [],
          styles: /* @__PURE__ */ Object.create(null),
          lang: null
        };
        n();
      });
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = true;
      const t = [];
      for (const e of this._intentStates.values()) if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: true
      }), !e.opListReadCapability) for (const s of e.renderTasks) t.push(s.completed), s.cancel();
      return this.objs.clear(), __privateSet(this, _e17, false), __privateMethod(this, _gn_instances, i_fn5).call(this), Promise.all(t);
    }
    cleanup(t = false) {
      __privateSet(this, _e17, true);
      const e = __privateMethod(this, _gn_instances, s_fn3).call(this, false);
      return t && e && (this._stats && (this._stats = new Ze())), e;
    }
    _startRenderPage(t, e) {
      var _a9, _b6;
      const s = this._intentStates.get(e);
      s && ((_a9 = this._stats) == null ? void 0 : _a9.timeEnd("Page Request"), (_b6 = s.displayReadyCapability) == null ? void 0 : _b6.resolve(t));
    }
    _renderPageChunk(t, e) {
      for (let s = 0, i = t.length; s < i; s++) e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
      e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
      for (const s of e.renderTasks) s.operatorListChanged();
      t.lastChunk && __privateMethod(this, _gn_instances, s_fn3).call(this, true);
    }
    _pumpOperatorList({ renderingIntent: t, cacheKey: e, annotationStorageSerializable: s, modifiedIds: i }) {
      const { map: n, transfer: r } = s, o = this._transport.messageHandler.sendWithStream("GetOperatorList", {
        pageIndex: this._pageIndex,
        intent: t,
        cacheKey: e,
        annotationStorage: n,
        modifiedIds: i
      }, r).getReader(), l = this._intentStates.get(e);
      l.streamReader = o;
      const h = () => {
        o.read().then(({ value: d, done: u }) => {
          if (u) {
            l.streamReader = null;
            return;
          }
          this._transport.destroyed || (this._renderPageChunk(d, l), h());
        }, (d) => {
          if (l.streamReader = null, !this._transport.destroyed) {
            if (l.operatorList) {
              l.operatorList.lastChunk = true;
              for (const u of l.renderTasks) u.operatorListChanged();
              __privateMethod(this, _gn_instances, s_fn3).call(this, true);
            }
            if (l.displayReadyCapability) l.displayReadyCapability.reject(d);
            else if (l.opListReadCapability) l.opListReadCapability.reject(d);
            else throw d;
          }
        });
      };
      h();
    }
    _abortOperatorList({ intentState: t, reason: e, force: s = false }) {
      if (t.streamReader) {
        if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
          if (t.renderTasks.size > 0) return;
          if (e instanceof Ne) {
            let i = rn;
            e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
              t.streamReaderCancelTimeout = null, this._abortOperatorList({
                intentState: t,
                reason: e,
                force: true
              });
            }, i);
            return;
          }
        }
        if (t.streamReader.cancel(new Pt(e.message)).catch(() => {
        }), t.streamReader = null, !this._transport.destroyed) {
          for (const [i, n] of this._intentStates) if (n === t) {
            this._intentStates.delete(i);
            break;
          }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  }
  _t23 = new WeakMap();
  _e17 = new WeakMap();
  _gn_instances = new WeakSet();
  s_fn3 = function(t = false) {
    if (__privateMethod(this, _gn_instances, i_fn5).call(this), !__privateGet(this, _e17) || this.destroyed) return false;
    if (t) return __privateSet(this, _t23, setTimeout(() => {
      __privateSet(this, _t23, null), __privateMethod(this, _gn_instances, s_fn3).call(this, false);
    }, an)), false;
    for (const { renderTasks: e, operatorList: s } of this._intentStates.values()) if (e.size > 0 || !s.lastChunk) return false;
    return this._intentStates.clear(), this.objs.clear(), __privateSet(this, _e17, false), true;
  };
  i_fn5 = function() {
    __privateGet(this, _t23) && (clearTimeout(__privateGet(this, _t23)), __privateSet(this, _t23, null));
  };
  class mn {
    constructor() {
      __privateAdd(this, _t24, /* @__PURE__ */ new Map());
      __privateAdd(this, _e18, Promise.resolve());
    }
    postMessage(t, e) {
      const s = {
        data: structuredClone(t, e ? {
          transfer: e
        } : null)
      };
      __privateGet(this, _e18).then(() => {
        for (const [i] of __privateGet(this, _t24)) i.call(this, s);
      });
    }
    addEventListener(t, e, s = null) {
      let i = null;
      if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
        const { signal: n } = s;
        if (n.aborted) {
          D("LoopbackPort - cannot use an `aborted` signal.");
          return;
        }
        const r = () => this.removeEventListener(t, e);
        i = () => n.removeEventListener("abort", r), n.addEventListener("abort", r);
      }
      __privateGet(this, _t24).set(e, i);
    }
    removeEventListener(t, e) {
      var _a9;
      (_a9 = __privateGet(this, _t24).get(e)) == null ? void 0 : _a9(), __privateGet(this, _t24).delete(e);
    }
    terminate() {
      for (const [, t] of __privateGet(this, _t24)) t == null ? void 0 : t();
      __privateGet(this, _t24).clear();
    }
  }
  _t24 = new WeakMap();
  _e18 = new WeakMap();
  const _J = class _J {
    constructor({ name: t = null, port: e = null, verbosity: s = Ks() } = {}) {
      __privateAdd(this, _J_instances);
      var _a9;
      if (this.name = t, this.destroyed = false, this.verbosity = s, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
        if ((_a9 = __privateGet(_J, _s15)) == null ? void 0 : _a9.has(e)) throw new Error("Cannot use more than one PDFWorker per port.");
        (__privateGet(_J, _s15) || __privateSet(_J, _s15, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
        return;
      }
      this._initialize();
    }
    get promise() {
      return this._readyCapability.promise;
    }
    get port() {
      return this._port;
    }
    get messageHandler() {
      return this._messageHandler;
    }
    _initializeFromPort(t) {
      this._port = t, this._messageHandler = new Xt("main", "worker", t), this._messageHandler.on("ready", function() {
      }), __privateMethod(this, _J_instances, i_fn6).call(this);
    }
    _initialize() {
      if (__privateGet(_J, _e19) || __privateGet(_J, _J_static, r_get)) {
        this._setupFakeWorker();
        return;
      }
      let { workerSrc: t } = _J;
      try {
        _J._isSameOrigin(window.location.href, t) || (t = _J._createCDNWrapper(new URL(t, window.location).href));
        const e = new Worker(t, {
          type: "module"
        }), s = new Xt("main", "worker", e), i = () => {
          n.abort(), s.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
        }, n = new AbortController();
        e.addEventListener("error", () => {
          this._webWorker || i();
        }, {
          signal: n.signal
        }), s.on("test", (a) => {
          if (n.abort(), this.destroyed || !a) {
            i();
            return;
          }
          this._messageHandler = s, this._port = e, this._webWorker = e, __privateMethod(this, _J_instances, i_fn6).call(this);
        }), s.on("ready", (a) => {
          if (n.abort(), this.destroyed) {
            i();
            return;
          }
          try {
            r();
          } catch {
            this._setupFakeWorker();
          }
        });
        const r = () => {
          const a = new Uint8Array();
          s.send("test", a, [
            a.buffer
          ]);
        };
        r();
        return;
      } catch {
        de("The worker has been disabled.");
      }
      this._setupFakeWorker();
    }
    _setupFakeWorker() {
      __privateGet(_J, _e19) || (D("Setting up fake worker."), __privateSet(_J, _e19, true)), _J._setupFakeWorkerGlobal.then((t) => {
        if (this.destroyed) {
          this._readyCapability.reject(new Error("Worker was destroyed"));
          return;
        }
        const e = new mn();
        this._port = e;
        const s = `fake${__privateWrapper(_J, _t25)._++}`, i = new Xt(s + "_worker", s, e);
        t.setup(i, e), this._messageHandler = new Xt(s, s + "_worker", e), __privateMethod(this, _J_instances, i_fn6).call(this);
      }).catch((t) => {
        this._readyCapability.reject(new Error(`Setting up fake worker failed: "${t.message}".`));
      });
    }
    destroy() {
      var _a9, _b6, _c15;
      this.destroyed = true, (_a9 = this._webWorker) == null ? void 0 : _a9.terminate(), this._webWorker = null, (_b6 = __privateGet(_J, _s15)) == null ? void 0 : _b6.delete(this._port), this._port = null, (_c15 = this._messageHandler) == null ? void 0 : _c15.destroy(), this._messageHandler = null;
    }
    static fromPort(t) {
      var _a9;
      if (!(t == null ? void 0 : t.port)) throw new Error("PDFWorker.fromPort - invalid method signature.");
      const e = (_a9 = __privateGet(this, _s15)) == null ? void 0 : _a9.get(t.port);
      if (e) {
        if (e._pendingDestroy) throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
        return e;
      }
      return new _J(t);
    }
    static get workerSrc() {
      if (Kt.workerSrc) return Kt.workerSrc;
      throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get _setupFakeWorkerGlobal() {
      return F(this, "_setupFakeWorkerGlobal", (async () => __privateGet(this, _J_static, r_get) ? __privateGet(this, _J_static, r_get) : (await import(this.workerSrc).then(async (m) => {
        await m.__tla;
        return m;
      })).WorkerMessageHandler)());
    }
  };
  _t25 = new WeakMap();
  _e19 = new WeakMap();
  _s15 = new WeakMap();
  _J_instances = new WeakSet();
  i_fn6 = function() {
    this._readyCapability.resolve(), this._messageHandler.send("configure", {
      verbosity: this.verbosity
    });
  };
  _J_static = new WeakSet();
  r_get = function() {
    var _a9;
    try {
      return ((_a9 = globalThis.pdfjsWorker) == null ? void 0 : _a9.WorkerMessageHandler) || null;
    } catch {
      return null;
    }
  };
  __privateAdd(_J, _J_static);
  __privateAdd(_J, _t25, 0);
  __privateAdd(_J, _e19, false);
  __privateAdd(_J, _s15);
  st && (__privateSet(_J, _e19, true), Kt.workerSrc || (Kt.workerSrc = "./pdf.worker.mjs")), _J._isSameOrigin = (t, e) => {
    let s;
    try {
      if (s = new URL(t), !s.origin || s.origin === "null") return false;
    } catch {
      return false;
    }
    const i = new URL(e, s);
    return s.origin === i.origin;
  }, _J._createCDNWrapper = (t) => {
    const e = `await import("${t}");`;
    return URL.createObjectURL(new Blob([
      e
    ], {
      type: "text/javascript"
    }));
  };
  let J = _J;
  class bn {
    constructor(t, e, s, i, n) {
      __privateAdd(this, _bn_instances);
      __privateAdd(this, _t26, /* @__PURE__ */ new Map());
      __privateAdd(this, _e20, /* @__PURE__ */ new Map());
      __privateAdd(this, _s16, /* @__PURE__ */ new Map());
      __privateAdd(this, _i12, /* @__PURE__ */ new Map());
      __privateAdd(this, _r9, null);
      this.messageHandler = t, this.loadingTask = e, this.commonObjs = new Fs(), this.fontLoader = new gi({
        ownerDocument: i.ownerDocument,
        styleElement: i.styleElement
      }), this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.destroyed = false, this.destroyCapability = null, this._networkStream = s, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
    }
    get annotationStorage() {
      return F(this, "annotationStorage", new Ge());
    }
    getRenderingIntent(t, e = Ct.ENABLE, s = null, i = false, n = false) {
      let r = ut.DISPLAY, a = ke;
      switch (t) {
        case "any":
          r = ut.ANY;
          break;
        case "display":
          break;
        case "print":
          r = ut.PRINT;
          break;
        default:
          D(`getRenderingIntent - invalid intent: ${t}`);
      }
      const o = r & ut.PRINT && s instanceof ys ? s : this.annotationStorage;
      switch (e) {
        case Ct.DISABLE:
          r += ut.ANNOTATIONS_DISABLE;
          break;
        case Ct.ENABLE:
          break;
        case Ct.ENABLE_FORMS:
          r += ut.ANNOTATIONS_FORMS;
          break;
        case Ct.ENABLE_STORAGE:
          r += ut.ANNOTATIONS_STORAGE, a = o.serializable;
          break;
        default:
          D(`getRenderingIntent - invalid annotationMode: ${e}`);
      }
      i && (r += ut.IS_EDITING), n && (r += ut.OPLIST);
      const { ids: l, hash: h } = o.modifiedIds, d = [
        r,
        a.hash,
        h
      ];
      return {
        renderingIntent: r,
        cacheKey: d.join("_"),
        annotationStorageSerializable: a,
        modifiedIds: l
      };
    }
    destroy() {
      var _a9;
      if (this.destroyCapability) return this.destroyCapability.promise;
      this.destroyed = true, this.destroyCapability = Promise.withResolvers(), (_a9 = __privateGet(this, _r9)) == null ? void 0 : _a9.reject(new Error("Worker was destroyed during onPassword callback"));
      const t = [];
      for (const s of __privateGet(this, _e20).values()) t.push(s._destroy());
      __privateGet(this, _e20).clear(), __privateGet(this, _s16).clear(), __privateGet(this, _i12).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
      const e = this.messageHandler.sendWithPromise("Terminate", null);
      return t.push(e), Promise.all(t).then(() => {
        var _a10, _b6;
        this.commonObjs.clear(), this.fontLoader.clear(), __privateGet(this, _t26).clear(), this.filterFactory.destroy(), rt.cleanup(), (_a10 = this._networkStream) == null ? void 0 : _a10.cancelAllRequests(new Pt("Worker was terminated.")), (_b6 = this.messageHandler) == null ? void 0 : _b6.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
      }, this.destroyCapability.reject), this.destroyCapability.promise;
    }
    setupMessageHandler() {
      const { messageHandler: t, loadingTask: e } = this;
      t.on("GetReader", (s, i) => {
        X(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (n) => {
          this._lastProgress = {
            loaded: n.loaded,
            total: n.total
          };
        }, i.onPull = () => {
          this._fullReader.read().then(function({ value: n, done: r }) {
            if (r) {
              i.close();
              return;
            }
            X(n instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(n), 1, [
              n
            ]);
          }).catch((n) => {
            i.error(n);
          });
        }, i.onCancel = (n) => {
          this._fullReader.cancel(n), i.ready.catch((r) => {
            if (!this.destroyed) throw r;
          });
        };
      }), t.on("ReaderHeadersReady", async (s) => {
        var _a9;
        await this._fullReader.headersReady;
        const { isStreamingSupported: i, isRangeSupported: n, contentLength: r } = this._fullReader;
        return (!i || !n) && (this._lastProgress && ((_a9 = e.onProgress) == null ? void 0 : _a9.call(e, this._lastProgress)), this._fullReader.onProgress = (a) => {
          var _a10;
          (_a10 = e.onProgress) == null ? void 0 : _a10.call(e, {
            loaded: a.loaded,
            total: a.total
          });
        }), {
          isStreamingSupported: i,
          isRangeSupported: n,
          contentLength: r
        };
      }), t.on("GetRangeReader", (s, i) => {
        X(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
        const n = this._networkStream.getRangeReader(s.begin, s.end);
        if (!n) {
          i.close();
          return;
        }
        i.onPull = () => {
          n.read().then(function({ value: r, done: a }) {
            if (a) {
              i.close();
              return;
            }
            X(r instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [
              r
            ]);
          }).catch((r) => {
            i.error(r);
          });
        }, i.onCancel = (r) => {
          n.cancel(r), i.ready.catch((a) => {
            if (!this.destroyed) throw a;
          });
        };
      }), t.on("GetDoc", ({ pdfInfo: s }) => {
        this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new pn(s, this));
      }), t.on("DocException", (s) => {
        e._capability.reject(ht(s));
      }), t.on("PasswordRequest", (s) => {
        __privateSet(this, _r9, Promise.withResolvers());
        try {
          if (!e.onPassword) throw ht(s);
          const i = (n) => {
            n instanceof Error ? __privateGet(this, _r9).reject(n) : __privateGet(this, _r9).resolve({
              password: n
            });
          };
          e.onPassword(i, s.code);
        } catch (i) {
          __privateGet(this, _r9).reject(i);
        }
        return __privateGet(this, _r9).promise;
      }), t.on("DataLoaded", (s) => {
        var _a9;
        (_a9 = e.onProgress) == null ? void 0 : _a9.call(e, {
          loaded: s.length,
          total: s.length
        }), this.downloadInfoCapability.resolve(s);
      }), t.on("StartRenderPage", (s) => {
        if (this.destroyed) return;
        __privateGet(this, _e20).get(s.pageIndex)._startRenderPage(s.transparency, s.cacheKey);
      }), t.on("commonobj", ([s, i, n]) => {
        var _a9;
        if (this.destroyed || this.commonObjs.has(s)) return null;
        switch (i) {
          case "Font":
            const { disableFontFace: r, fontExtraProperties: a, pdfBug: o } = this._params;
            if ("error" in n) {
              const u = n.error;
              D(`Error during font loading: ${u}`), this.commonObjs.resolve(s, u);
              break;
            }
            const l = o && ((_a9 = globalThis.FontInspector) == null ? void 0 : _a9.enabled) ? (u, f) => globalThis.FontInspector.fontAdded(u, f) : null, h = new mi(n, {
              disableFontFace: r,
              fontExtraProperties: a,
              inspectFont: l
            });
            this.fontLoader.bind(h).catch(() => t.sendWithPromise("FontFallback", {
              id: s
            })).finally(() => {
              !a && h.data && (h.data = null), this.commonObjs.resolve(s, h);
            });
            break;
          case "CopyLocalImage":
            const { imageRef: d } = n;
            X(d, "The imageRef must be defined.");
            for (const u of __privateGet(this, _e20).values()) for (const [, f] of u.objs) if ((f == null ? void 0 : f.ref) === d) return f.dataLen ? (this.commonObjs.resolve(s, structuredClone(f)), f.dataLen) : null;
            break;
          case "FontPath":
          case "Image":
          case "Pattern":
            this.commonObjs.resolve(s, n);
            break;
          default:
            throw new Error(`Got unknown common object type ${i}`);
        }
        return null;
      }), t.on("obj", ([s, i, n, r]) => {
        var _a9;
        if (this.destroyed) return;
        const a = __privateGet(this, _e20).get(i);
        if (!a.objs.has(s)) {
          if (a._intentStates.size === 0) {
            (_a9 = r == null ? void 0 : r.bitmap) == null ? void 0 : _a9.close();
            return;
          }
          switch (n) {
            case "Image":
              a.objs.resolve(s, r), (r == null ? void 0 : r.dataLen) > Vs && (a._maybeCleanupAfterRender = true);
              break;
            case "Pattern":
              a.objs.resolve(s, r);
              break;
            default:
              throw new Error(`Got unknown object type ${n}`);
          }
        }
      }), t.on("DocProgress", (s) => {
        var _a9;
        this.destroyed || ((_a9 = e.onProgress) == null ? void 0 : _a9.call(e, {
          loaded: s.loaded,
          total: s.total
        }));
      }), t.on("FetchBuiltInCMap", async (s) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.cMapReaderFactory) throw new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.");
        return this.cMapReaderFactory.fetch(s);
      }), t.on("FetchStandardFontData", async (s) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.standardFontDataFactory) throw new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.");
        return this.standardFontDataFactory.fetch(s);
      });
    }
    getData() {
      return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
      var _a9;
      this.annotationStorage.size <= 0 && D("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
      const { map: t, transfer: e } = this.annotationStorage.serializable;
      return this.messageHandler.sendWithPromise("SaveDocument", {
        isPureXfa: !!this._htmlForXfa,
        numPages: this._numPages,
        annotationStorage: t,
        filename: ((_a9 = this._fullReader) == null ? void 0 : _a9.filename) ?? null
      }, e).finally(() => {
        this.annotationStorage.resetModified();
      });
    }
    getPage(t) {
      if (!Number.isInteger(t) || t <= 0 || t > this._numPages) return Promise.reject(new Error("Invalid page request."));
      const e = t - 1, s = __privateGet(this, _s16).get(e);
      if (s) return s;
      const i = this.messageHandler.sendWithPromise("GetPage", {
        pageIndex: e
      }).then((n) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        n.refStr && __privateGet(this, _i12).set(n.refStr, t);
        const r = new gn(e, n, this, this._params.pdfBug);
        return __privateGet(this, _e20).set(e, r), r;
      });
      return __privateGet(this, _s16).set(e, i), i;
    }
    getPageIndex(t) {
      return fs(t) ? this.messageHandler.sendWithPromise("GetPageIndex", {
        num: t.num,
        gen: t.gen
      }) : Promise.reject(new Error("Invalid pageIndex request."));
    }
    getAnnotations(t, e) {
      return this.messageHandler.sendWithPromise("GetAnnotations", {
        pageIndex: t,
        intent: e
      });
    }
    getFieldObjects() {
      return __privateMethod(this, _bn_instances, n_fn2).call(this, "GetFieldObjects");
    }
    hasJSActions() {
      return __privateMethod(this, _bn_instances, n_fn2).call(this, "HasJSActions");
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t) {
      return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
        id: t
      });
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getDocJSActions() {
      return __privateMethod(this, _bn_instances, n_fn2).call(this, "GetDocJSActions");
    }
    getPageJSActions(t) {
      return this.messageHandler.sendWithPromise("GetPageJSActions", {
        pageIndex: t
      });
    }
    getStructTree(t) {
      return this.messageHandler.sendWithPromise("GetStructTree", {
        pageIndex: t
      });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t) {
      return __privateMethod(this, _bn_instances, n_fn2).call(this, "GetOptionalContentConfig").then((e) => new Bi(e, t));
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
      const t = "GetMetadata", e = __privateGet(this, _t26).get(t);
      if (e) return e;
      const s = this.messageHandler.sendWithPromise(t, null).then((i) => {
        var _a9, _b6;
        return {
          info: i[0],
          metadata: i[1] ? new Ni(i[1]) : null,
          contentDispositionFilename: ((_a9 = this._fullReader) == null ? void 0 : _a9.filename) ?? null,
          contentLength: ((_b6 = this._fullReader) == null ? void 0 : _b6.contentLength) ?? null
        };
      });
      return __privateGet(this, _t26).set(t, s), s;
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    async startCleanup(t = false) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise("Cleanup", null);
        for (const e of __privateGet(this, _e20).values()) if (!e.cleanup()) throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
        this.commonObjs.clear(), t || this.fontLoader.clear(), __privateGet(this, _t26).clear(), this.filterFactory.destroy(true), rt.cleanup();
      }
    }
    cachedPageNumber(t) {
      if (!fs(t)) return null;
      const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`;
      return __privateGet(this, _i12).get(e) ?? null;
    }
  }
  _t26 = new WeakMap();
  _e20 = new WeakMap();
  _s16 = new WeakMap();
  _i12 = new WeakMap();
  _r9 = new WeakMap();
  _bn_instances = new WeakSet();
  n_fn2 = function(t, e = null) {
    const s = __privateGet(this, _t26).get(t);
    if (s) return s;
    const i = this.messageHandler.sendWithPromise(t, e);
    return __privateGet(this, _t26).set(t, i), i;
  };
  const jt = Symbol("INITIAL_DATA");
  class Fs {
    constructor() {
      __privateAdd(this, _Fs_instances);
      __privateAdd(this, _t27, /* @__PURE__ */ Object.create(null));
    }
    get(t, e = null) {
      if (e) {
        const i = __privateMethod(this, _Fs_instances, e_fn4).call(this, t);
        return i.promise.then(() => e(i.data)), null;
      }
      const s = __privateGet(this, _t27)[t];
      if (!s || s.data === jt) throw new Error(`Requesting object that isn't resolved yet ${t}.`);
      return s.data;
    }
    has(t) {
      const e = __privateGet(this, _t27)[t];
      return !!e && e.data !== jt;
    }
    delete(t) {
      const e = __privateGet(this, _t27)[t];
      return !e || e.data === jt ? false : (delete __privateGet(this, _t27)[t], true);
    }
    resolve(t, e = null) {
      const s = __privateMethod(this, _Fs_instances, e_fn4).call(this, t);
      s.data = e, s.resolve();
    }
    clear() {
      var _a9;
      for (const t in __privateGet(this, _t27)) {
        const { data: e } = __privateGet(this, _t27)[t];
        (_a9 = e == null ? void 0 : e.bitmap) == null ? void 0 : _a9.close();
      }
      __privateSet(this, _t27, /* @__PURE__ */ Object.create(null));
    }
    *[Symbol.iterator]() {
      for (const t in __privateGet(this, _t27)) {
        const { data: e } = __privateGet(this, _t27)[t];
        e !== jt && (yield [
          t,
          e
        ]);
      }
    }
  }
  _t27 = new WeakMap();
  _Fs_instances = new WeakSet();
  e_fn4 = function(t) {
    var _a9;
    return (_a9 = __privateGet(this, _t27))[t] || (_a9[t] = {
      ...Promise.withResolvers(),
      data: jt
    });
  };
  class An {
    constructor(t) {
      __privateAdd(this, _t28, null);
      __privateSet(this, _t28, t), this.onContinue = null;
    }
    get promise() {
      return __privateGet(this, _t28).capability.promise;
    }
    cancel(t = 0) {
      __privateGet(this, _t28).cancel(null, t);
    }
    get separateAnnots() {
      const { separateAnnots: t } = __privateGet(this, _t28).operatorList;
      if (!t) return false;
      const { annotationCanvasMap: e } = __privateGet(this, _t28);
      return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
    }
  }
  _t28 = new WeakMap();
  const _Bt = class _Bt {
    constructor({ callback: t, params: e, objs: s, commonObjs: i, annotationCanvasMap: n, operatorList: r, pageIndex: a, canvasFactory: o, filterFactory: l, useRequestAnimationFrame: h = false, pdfBug: d = false, pageColors: u = null }) {
      __privateAdd(this, _t29, null);
      this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = a, this.canvasFactory = o, this.filterFactory = l, this._pdfBug = d, this.pageColors = u, this.running = false, this.graphicsReadyCallback = null, this.graphicsReady = false, this._useRequestAnimationFrame = h === true && typeof window < "u", this.cancelled = false, this.capability = Promise.withResolvers(), this.task = new An(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
    }
    get completed() {
      return this.capability.promise.catch(function() {
      });
    }
    initializeGraphics({ transparency: t = false, optionalContentConfig: e }) {
      var _a9, _b6;
      if (this.cancelled) return;
      if (this._canvas) {
        if (__privateGet(_Bt, _e21).has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
        __privateGet(_Bt, _e21).add(this._canvas);
      }
      this._pdfBug && ((_a9 = globalThis.StepperManager) == null ? void 0 : _a9.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
      const { canvasContext: s, viewport: i, transform: n, background: r } = this.params;
      this.gfx = new Ht(s, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
        optionalContentConfig: e
      }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
        transform: n,
        viewport: i,
        transparency: t,
        background: r
      }), this.operatorListIdx = 0, this.graphicsReady = true, (_b6 = this.graphicsReadyCallback) == null ? void 0 : _b6.call(this);
    }
    cancel(t = null, e = 0) {
      var _a9;
      this.running = false, this.cancelled = true, (_a9 = this.gfx) == null ? void 0 : _a9.endDrawing(), __privateGet(this, _t29) && (window.cancelAnimationFrame(__privateGet(this, _t29)), __privateSet(this, _t29, null)), __privateGet(_Bt, _e21).delete(this._canvas), this.callback(t || new Ne(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
    }
    operatorListChanged() {
      var _a9;
      if (!this.graphicsReady) {
        this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
        return;
      }
      (_a9 = this.stepper) == null ? void 0 : _a9.updateOperatorList(this.operatorList), !this.running && this._continue();
    }
    _continue() {
      this.running = true, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
      this._useRequestAnimationFrame ? __privateSet(this, _t29, window.requestAnimationFrame(() => {
        __privateSet(this, _t29, null), this._nextBound().catch(this._cancelBound);
      })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = false, this.operatorList.lastChunk && (this.gfx.endDrawing(), __privateGet(_Bt, _e21).delete(this._canvas), this.callback())));
    }
  };
  _t29 = new WeakMap();
  _e21 = new WeakMap();
  __privateAdd(_Bt, _e21, /* @__PURE__ */ new WeakSet());
  let Bt = _Bt;
  const _n = "4.10.38", yn = "f9bea397f";
  function ps(c) {
    return Math.floor(Math.max(0, Math.min(1, c)) * 255).toString(16).padStart(2, "0");
  }
  function Vt(c) {
    return Math.max(0, Math.min(255, 255 * c));
  }
  class gs {
    static CMYK_G([t, e, s, i]) {
      return [
        "G",
        1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)
      ];
    }
    static G_CMYK([t]) {
      return [
        "CMYK",
        0,
        0,
        0,
        1 - t
      ];
    }
    static G_RGB([t]) {
      return [
        "RGB",
        t,
        t,
        t
      ];
    }
    static G_rgb([t]) {
      return t = Vt(t), [
        t,
        t,
        t
      ];
    }
    static G_HTML([t]) {
      const e = ps(t);
      return `#${e}${e}${e}`;
    }
    static RGB_G([t, e, s]) {
      return [
        "G",
        0.3 * t + 0.59 * e + 0.11 * s
      ];
    }
    static RGB_rgb(t) {
      return t.map(Vt);
    }
    static RGB_HTML(t) {
      return `#${t.map(ps).join("")}`;
    }
    static T_HTML() {
      return "#00000000";
    }
    static T_rgb() {
      return [
        null
      ];
    }
    static CMYK_RGB([t, e, s, i]) {
      return [
        "RGB",
        1 - Math.min(1, t + i),
        1 - Math.min(1, s + i),
        1 - Math.min(1, e + i)
      ];
    }
    static CMYK_rgb([t, e, s, i]) {
      return [
        Vt(1 - Math.min(1, t + i)),
        Vt(1 - Math.min(1, s + i)),
        Vt(1 - Math.min(1, e + i))
      ];
    }
    static CMYK_HTML(t) {
      const e = this.CMYK_RGB(t).slice(1);
      return this.RGB_HTML(e);
    }
    static RGB_CMYK([t, e, s]) {
      const i = 1 - t, n = 1 - e, r = 1 - s, a = Math.min(i, n, r);
      return [
        "CMYK",
        i,
        n,
        r,
        a
      ];
    }
  }
  class vn {
    create(t, e, s = false) {
      if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
      const i = this._createSVG("svg:svg");
      return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
    }
    createElement(t) {
      if (typeof t != "string") throw new Error("Invalid SVG element type");
      return this._createSVG(t);
    }
    _createSVG(t) {
      H("Abstract method `_createSVG` called.");
    }
  }
  class Ve extends vn {
    _createSVG(t) {
      return document.createElementNS(Et, t);
    }
  }
  class Ns {
    static setupStorage(t, e, s, i, n) {
      const r = i.getValue(e, {
        value: null
      });
      switch (s.name) {
        case "textarea":
          if (r.value !== null && (t.textContent = r.value), n === "print") break;
          t.addEventListener("input", (a) => {
            i.setValue(e, {
              value: a.target.value
            });
          });
          break;
        case "input":
          if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
            if (r.value === s.attributes.xfaOn ? t.setAttribute("checked", true) : r.value === s.attributes.xfaOff && t.removeAttribute("checked"), n === "print") break;
            t.addEventListener("change", (a) => {
              i.setValue(e, {
                value: a.target.checked ? a.target.getAttribute("xfaOn") : a.target.getAttribute("xfaOff")
              });
            });
          } else {
            if (r.value !== null && t.setAttribute("value", r.value), n === "print") break;
            t.addEventListener("input", (a) => {
              i.setValue(e, {
                value: a.target.value
              });
            });
          }
          break;
        case "select":
          if (r.value !== null) {
            t.setAttribute("value", r.value);
            for (const a of s.children) a.attributes.value === r.value ? a.attributes.selected = true : a.attributes.hasOwnProperty("selected") && delete a.attributes.selected;
          }
          t.addEventListener("input", (a) => {
            const o = a.target.options, l = o.selectedIndex === -1 ? "" : o[o.selectedIndex].value;
            i.setValue(e, {
              value: l
            });
          });
          break;
      }
    }
    static setAttributes({ html: t, element: e, storage: s = null, intent: i, linkService: n }) {
      const { attributes: r } = e, a = t instanceof HTMLAnchorElement;
      r.type === "radio" && (r.name = `${r.name}-${i}`);
      for (const [o, l] of Object.entries(r)) if (l != null) switch (o) {
        case "class":
          l.length && t.setAttribute(o, l.join(" "));
          break;
        case "dataId":
          break;
        case "id":
          t.setAttribute("data-element-id", l);
          break;
        case "style":
          Object.assign(t.style, l);
          break;
        case "textContent":
          t.textContent = l;
          break;
        default:
          (!a || o !== "href" && o !== "newWindow") && t.setAttribute(o, l);
      }
      a && n.addLinkAttributes(t, r.href, r.newWindow), s && r.dataId && this.setupStorage(t, r.dataId, e, s);
    }
    static render(t) {
      var _a9, _b6;
      const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, n = t.intent || "display", r = document.createElement(i.name);
      i.attributes && this.setAttributes({
        html: r,
        element: i,
        intent: n,
        linkService: s
      });
      const a = n !== "richText", o = t.div;
      if (o.append(r), t.viewport) {
        const d = `matrix(${t.viewport.transform.join(",")})`;
        o.style.transform = d;
      }
      a && o.setAttribute("class", "xfaLayer xfaFont");
      const l = [];
      if (i.children.length === 0) {
        if (i.value) {
          const d = document.createTextNode(i.value);
          r.append(d), a && Jt.shouldBuildText(i.name) && l.push(d);
        }
        return {
          textDivs: l
        };
      }
      const h = [
        [
          i,
          -1,
          r
        ]
      ];
      for (; h.length > 0; ) {
        const [d, u, f] = h.at(-1);
        if (u + 1 === d.children.length) {
          h.pop();
          continue;
        }
        const p = d.children[++h.at(-1)[1]];
        if (p === null) continue;
        const { name: g } = p;
        if (g === "#text") {
          const m = document.createTextNode(p.value);
          l.push(m), f.append(m);
          continue;
        }
        const b = ((_a9 = p == null ? void 0 : p.attributes) == null ? void 0 : _a9.xmlns) ? document.createElementNS(p.attributes.xmlns, g) : document.createElement(g);
        if (f.append(b), p.attributes && this.setAttributes({
          html: b,
          element: p,
          storage: e,
          intent: n,
          linkService: s
        }), ((_b6 = p.children) == null ? void 0 : _b6.length) > 0) h.push([
          p,
          -1,
          b
        ]);
        else if (p.value) {
          const m = document.createTextNode(p.value);
          a && Jt.shouldBuildText(g) && l.push(m), b.append(m);
        }
      }
      for (const d of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) d.setAttribute("readOnly", true);
      return {
        textDivs: l
      };
    }
    static update(t) {
      const e = `matrix(${t.viewport.transform.join(",")})`;
      t.div.style.transform = e, t.div.hidden = false;
    }
  }
  const ee = 1e3, wn = 9, Lt = /* @__PURE__ */ new WeakSet();
  function Tt(c) {
    return {
      width: c[2] - c[0],
      height: c[3] - c[1]
    };
  }
  class Sn {
    static create(t) {
      switch (t.data.annotationType) {
        case K.LINK:
          return new Os(t);
        case K.TEXT:
          return new En(t);
        case K.WIDGET:
          switch (t.data.fieldType) {
            case "Tx":
              return new xn(t);
            case "Btn":
              return t.data.radioButton ? new Bs(t) : t.data.checkBox ? new Tn(t) : new Pn(t);
            case "Ch":
              return new kn(t);
            case "Sig":
              return new Cn(t);
          }
          return new Dt(t);
        case K.POPUP:
          return new Me(t);
        case K.FREETEXT:
          return new Hs(t);
        case K.LINE:
          return new Mn(t);
        case K.SQUARE:
          return new In(t);
        case K.CIRCLE:
          return new Ln(t);
        case K.POLYLINE:
          return new $s(t);
        case K.CARET:
          return new Fn(t);
        case K.INK:
          return new We(t);
        case K.POLYGON:
          return new Dn(t);
        case K.HIGHLIGHT:
          return new Gs(t);
        case K.UNDERLINE:
          return new Nn(t);
        case K.SQUIGGLY:
          return new On(t);
        case K.STRIKEOUT:
          return new Bn(t);
        case K.STAMP:
          return new zs(t);
        case K.FILEATTACHMENT:
          return new Hn(t);
        default:
          return new V(t);
      }
    }
  }
  const _V = class _V {
    constructor(t, { isRenderable: e = false, ignoreBorder: s = false, createQuadrilaterals: i = false } = {}) {
      __privateAdd(this, _V_instances);
      __privateAdd(this, _t30, null);
      __privateAdd(this, _e22, false);
      __privateAdd(this, _s17, null);
      this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, e && (this.container = this._createContainer(s)), i && this._createQuadrilaterals();
    }
    static _hasPopupData({ titleObj: t, contentsObj: e, richText: s }) {
      return !!((t == null ? void 0 : t.str) || (e == null ? void 0 : e.str) || (s == null ? void 0 : s.str));
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return _V._hasPopupData(this.data);
    }
    updateEdited(t) {
      var _a9;
      if (!this.container) return;
      __privateGet(this, _t30) || __privateSet(this, _t30, {
        rect: this.data.rect.slice(0)
      });
      const { rect: e } = t;
      e && __privateMethod(this, _V_instances, i_fn7).call(this, e), (_a9 = __privateGet(this, _s17)) == null ? void 0 : _a9.popup.updateEdited(t);
    }
    resetEdited() {
      var _a9;
      __privateGet(this, _t30) && (__privateMethod(this, _V_instances, i_fn7).call(this, __privateGet(this, _t30).rect), (_a9 = __privateGet(this, _s17)) == null ? void 0 : _a9.popup.resetEdited(), __privateSet(this, _t30, null));
    }
    _createContainer(t) {
      const { data: e, parent: { page: s, viewport: i } } = this, n = document.createElement("section");
      n.setAttribute("data-annotation-id", e.id), this instanceof Dt || (n.tabIndex = ee);
      const { style: r } = n;
      if (r.zIndex = this.parent.zIndex++, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof Me) {
        const { rotation: g } = e;
        return !e.hasOwnCanvas && g !== 0 && this.setRotation(g, n), n;
      }
      const { width: a, height: o } = Tt(e.rect);
      if (!t && e.borderStyle.width > 0) {
        r.borderWidth = `${e.borderStyle.width}px`;
        const g = e.borderStyle.horizontalCornerRadius, b = e.borderStyle.verticalCornerRadius;
        if (g > 0 || b > 0) {
          const A = `calc(${g}px * var(--scale-factor)) / calc(${b}px * var(--scale-factor))`;
          r.borderRadius = A;
        } else if (this instanceof Bs) {
          const A = `calc(${a}px * var(--scale-factor)) / calc(${o}px * var(--scale-factor))`;
          r.borderRadius = A;
        }
        switch (e.borderStyle.style) {
          case zt.SOLID:
            r.borderStyle = "solid";
            break;
          case zt.DASHED:
            r.borderStyle = "dashed";
            break;
          case zt.BEVELED:
            D("Unimplemented border style: beveled");
            break;
          case zt.INSET:
            D("Unimplemented border style: inset");
            break;
          case zt.UNDERLINE:
            r.borderBottomStyle = "solid";
            break;
        }
        const m = e.borderColor || null;
        m ? (__privateSet(this, _e22, true), r.borderColor = C.makeHexColor(m[0] | 0, m[1] | 0, m[2] | 0)) : r.borderWidth = 0;
      }
      const l = C.normalizeRect([
        e.rect[0],
        s.view[3] - e.rect[1] + s.view[1],
        e.rect[2],
        s.view[3] - e.rect[3] + s.view[1]
      ]), { pageWidth: h, pageHeight: d, pageX: u, pageY: f } = i.rawDims;
      r.left = `${100 * (l[0] - u) / h}%`, r.top = `${100 * (l[1] - f) / d}%`;
      const { rotation: p } = e;
      return e.hasOwnCanvas || p === 0 ? (r.width = `${100 * a / h}%`, r.height = `${100 * o / d}%`) : this.setRotation(p, n), n;
    }
    setRotation(t, e = this.container) {
      if (!this.data.rect) return;
      const { pageWidth: s, pageHeight: i } = this.parent.viewport.rawDims, { width: n, height: r } = Tt(this.data.rect);
      let a, o;
      t % 180 === 0 ? (a = 100 * n / s, o = 100 * r / i) : (a = 100 * r / s, o = 100 * n / i), e.style.width = `${a}%`, e.style.height = `${o}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
    }
    get _commonActions() {
      const t = (e, s, i) => {
        const n = i.detail[e], r = n[0], a = n.slice(1);
        i.target.style[s] = gs[`${r}_HTML`](a), this.annotationStorage.setValue(this.data.id, {
          [s]: gs[`${r}_rgb`](a)
        });
      };
      return F(this, "_commonActions", {
        display: (e) => {
          const { display: s } = e.detail, i = s % 2 === 1;
          this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noView: i,
            noPrint: s === 1 || s === 2
          });
        },
        print: (e) => {
          this.annotationStorage.setValue(this.data.id, {
            noPrint: !e.detail.print
          });
        },
        hidden: (e) => {
          const { hidden: s } = e.detail;
          this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
            noPrint: s,
            noView: s
          });
        },
        focus: (e) => {
          setTimeout(() => e.target.focus({
            preventScroll: false
          }), 0);
        },
        userName: (e) => {
          e.target.title = e.detail.userName;
        },
        readonly: (e) => {
          e.target.disabled = e.detail.readonly;
        },
        required: (e) => {
          this._setRequired(e.target, e.detail.required);
        },
        bgColor: (e) => {
          t("bgColor", "backgroundColor", e);
        },
        fillColor: (e) => {
          t("fillColor", "backgroundColor", e);
        },
        fgColor: (e) => {
          t("fgColor", "color", e);
        },
        textColor: (e) => {
          t("textColor", "color", e);
        },
        borderColor: (e) => {
          t("borderColor", "borderColor", e);
        },
        strokeColor: (e) => {
          t("strokeColor", "borderColor", e);
        },
        rotation: (e) => {
          const s = e.detail.rotation;
          this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
            rotation: s
          });
        }
      });
    }
    _dispatchEventFromSandbox(t, e) {
      var _a9;
      const s = this._commonActions;
      for (const i of Object.keys(e.detail)) (_a9 = t[i] || s[i]) == null ? void 0 : _a9(e);
    }
    _setDefaultPropertiesFromJS(t) {
      if (!this.enableScripting) return;
      const e = this.annotationStorage.getRawValue(this.data.id);
      if (!e) return;
      const s = this._commonActions;
      for (const [i, n] of Object.entries(e)) {
        const r = s[i];
        if (r) {
          const a = {
            detail: {
              [i]: n
            },
            target: t
          };
          r(a), delete e[i];
        }
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      const { quadPoints: t } = this.data;
      if (!t) return;
      const [e, s, i, n] = this.data.rect.map((g) => Math.fround(g));
      if (t.length === 8) {
        const [g, b, m, A] = t.subarray(2, 6);
        if (i === g && n === b && e === m && s === A) return;
      }
      const { style: r } = this.container;
      let a;
      if (__privateGet(this, _e22)) {
        const { borderColor: g, borderWidth: b } = r;
        r.borderWidth = 0, a = [
          "url('data:image/svg+xml;utf8,",
          '<svg xmlns="http://www.w3.org/2000/svg"',
          ' preserveAspectRatio="none" viewBox="0 0 1 1">',
          `<g fill="transparent" stroke="${g}" stroke-width="${b}">`
        ], this.container.classList.add("hasBorder");
      }
      const o = i - e, l = n - s, { svgFactory: h } = this, d = h.createElement("svg");
      d.classList.add("quadrilateralsContainer"), d.setAttribute("width", 0), d.setAttribute("height", 0);
      const u = h.createElement("defs");
      d.append(u);
      const f = h.createElement("clipPath"), p = `clippath_${this.data.id}`;
      f.setAttribute("id", p), f.setAttribute("clipPathUnits", "objectBoundingBox"), u.append(f);
      for (let g = 2, b = t.length; g < b; g += 8) {
        const m = t[g], A = t[g + 1], _ = t[g + 2], y = t[g + 3], v = h.createElement("rect"), S = (_ - e) / o, w = (n - A) / l, T = (m - _) / o, M = (A - y) / l;
        v.setAttribute("x", S), v.setAttribute("y", w), v.setAttribute("width", T), v.setAttribute("height", M), f.append(v), a == null ? void 0 : a.push(`<rect vector-effect="non-scaling-stroke" x="${S}" y="${w}" width="${T}" height="${M}"/>`);
      }
      __privateGet(this, _e22) && (a.push("</g></svg>')"), r.backgroundImage = a.join("")), this.container.append(d), this.container.style.clipPath = `url(#${p})`;
    }
    _createPopup() {
      const { data: t } = this, e = __privateSet(this, _s17, new Me({
        data: {
          color: t.color,
          titleObj: t.titleObj,
          modificationDate: t.modificationDate,
          contentsObj: t.contentsObj,
          richText: t.richText,
          parentRect: t.rect,
          borderStyle: 0,
          id: `popup_${t.id}`,
          rotation: t.rotation
        },
        parent: this.parent,
        elements: [
          this
        ]
      }));
      this.parent.div.append(e.render());
    }
    render() {
      H("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t, e = null) {
      const s = [];
      if (this._fieldObjects) {
        const i = this._fieldObjects[t];
        if (i) for (const { page: n, id: r, exportValues: a } of i) {
          if (n === -1 || r === e) continue;
          const o = typeof a == "string" ? a : null, l = document.querySelector(`[data-element-id="${r}"]`);
          if (l && !Lt.has(l)) {
            D(`_getElementsByName - element not allowed: ${r}`);
            continue;
          }
          s.push({
            id: r,
            exportValue: o,
            domElement: l
          });
        }
        return s;
      }
      for (const i of document.getElementsByName(t)) {
        const { exportValue: n } = i, r = i.getAttribute("data-element-id");
        r !== e && Lt.has(i) && s.push({
          id: r,
          exportValue: n,
          domElement: i
        });
      }
      return s;
    }
    show() {
      var _a9;
      this.container && (this.container.hidden = false), (_a9 = this.popup) == null ? void 0 : _a9.maybeShow();
    }
    hide() {
      var _a9;
      this.container && (this.container.hidden = true), (_a9 = this.popup) == null ? void 0 : _a9.forceHide();
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      const t = this.getElementsToTriggerPopup();
      if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
      else t.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      const { annotationEditorType: t, data: { id: e } } = this;
      this.container.addEventListener("dblclick", () => {
        var _a9;
        (_a9 = this.linkService.eventBus) == null ? void 0 : _a9.dispatch("switchannotationeditormode", {
          source: this,
          mode: t,
          editId: e
        });
      });
    }
  };
  _t30 = new WeakMap();
  _e22 = new WeakMap();
  _s17 = new WeakMap();
  _V_instances = new WeakSet();
  i_fn7 = function(t) {
    const { container: { style: e }, data: { rect: s, rotation: i }, parent: { viewport: { rawDims: { pageWidth: n, pageHeight: r, pageX: a, pageY: o } } } } = this;
    s == null ? void 0 : s.splice(0, 4, ...t);
    const { width: l, height: h } = Tt(t);
    e.left = `${100 * (t[0] - a) / n}%`, e.top = `${100 * (r - t[3] + o) / r}%`, i === 0 ? (e.width = `${100 * l / n}%`, e.height = `${100 * h / r}%`) : this.setRotation(i);
  };
  let V = _V;
  class Os extends V {
    constructor(t, e = null) {
      super(t, {
        isRenderable: true,
        ignoreBorder: !!(e == null ? void 0 : e.ignoreBorder),
        createQuadrilaterals: true
      });
      __privateAdd(this, _Os_instances);
      this.isTooltipOnly = t.data.isTooltipOnly;
    }
    render() {
      const { data: t, linkService: e } = this, s = document.createElement("a");
      s.setAttribute("data-element-id", t.id);
      let i = false;
      return t.url ? (e.addLinkAttributes(s, t.url, t.newWindow), i = true) : t.action ? (this._bindNamedAction(s, t.action), i = true) : t.attachment ? (__privateMethod(this, _Os_instances, e_fn5).call(this, s, t.attachment, t.attachmentDest), i = true) : t.setOCGState ? (__privateMethod(this, _Os_instances, s_fn4).call(this, s, t.setOCGState), i = true) : t.dest ? (this._bindLink(s, t.dest), i = true) : (t.actions && (t.actions.Action || t.actions["Mouse Up"] || t.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(s, t), i = true), t.resetForm ? (this._bindResetFormAction(s, t.resetForm), i = true) : this.isTooltipOnly && !i && (this._bindLink(s, ""), i = true)), this.container.classList.add("linkAnnotation"), i && this.container.append(s), this.container;
    }
    _bindLink(t, e) {
      t.href = this.linkService.getDestinationHash(e), t.onclick = () => (e && this.linkService.goToDestination(e), false), (e || e === "") && __privateMethod(this, _Os_instances, t_fn4).call(this);
    }
    _bindNamedAction(t, e) {
      t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeNamedAction(e), false), __privateMethod(this, _Os_instances, t_fn4).call(this);
    }
    _bindJSAction(t, e) {
      t.href = this.linkService.getAnchorUrl("");
      const s = /* @__PURE__ */ new Map([
        [
          "Action",
          "onclick"
        ],
        [
          "Mouse Up",
          "onmouseup"
        ],
        [
          "Mouse Down",
          "onmousedown"
        ]
      ]);
      for (const i of Object.keys(e.actions)) {
        const n = s.get(i);
        n && (t[n] = () => {
          var _a9;
          return (_a9 = this.linkService.eventBus) == null ? void 0 : _a9.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e.id,
              name: i
            }
          }), false;
        });
      }
      t.onclick || (t.onclick = () => false), __privateMethod(this, _Os_instances, t_fn4).call(this);
    }
    _bindResetFormAction(t, e) {
      const s = t.onclick;
      if (s || (t.href = this.linkService.getAnchorUrl("")), __privateMethod(this, _Os_instances, t_fn4).call(this), !this._fieldObjects) {
        D('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), s || (t.onclick = () => false);
        return;
      }
      t.onclick = () => {
        var _a9;
        s == null ? void 0 : s();
        const { fields: i, refs: n, include: r } = e, a = [];
        if (i.length !== 0 || n.length !== 0) {
          const h = new Set(n);
          for (const d of i) {
            const u = this._fieldObjects[d] || [];
            for (const { id: f } of u) h.add(f);
          }
          for (const d of Object.values(this._fieldObjects)) for (const u of d) h.has(u.id) === r && a.push(u);
        } else for (const h of Object.values(this._fieldObjects)) a.push(...h);
        const o = this.annotationStorage, l = [];
        for (const h of a) {
          const { id: d } = h;
          switch (l.push(d), h.type) {
            case "text": {
              const f = h.defaultValue || "";
              o.setValue(d, {
                value: f
              });
              break;
            }
            case "checkbox":
            case "radiobutton": {
              const f = h.defaultValue === h.exportValues;
              o.setValue(d, {
                value: f
              });
              break;
            }
            case "combobox":
            case "listbox": {
              const f = h.defaultValue || "";
              o.setValue(d, {
                value: f
              });
              break;
            }
            default:
              continue;
          }
          const u = document.querySelector(`[data-element-id="${d}"]`);
          if (u) {
            if (!Lt.has(u)) {
              D(`_bindResetFormAction - element not allowed: ${d}`);
              continue;
            }
          } else continue;
          u.dispatchEvent(new Event("resetform"));
        }
        return this.enableScripting && ((_a9 = this.linkService.eventBus) == null ? void 0 : _a9.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: "app",
            ids: l,
            name: "ResetForm"
          }
        })), false;
      };
    }
  }
  _Os_instances = new WeakSet();
  t_fn4 = function() {
    this.container.setAttribute("data-internal-link", "");
  };
  e_fn5 = function(t, e, s = null) {
    t.href = this.linkService.getAnchorUrl(""), e.description && (t.title = e.description), t.onclick = () => {
      var _a9;
      return (_a9 = this.downloadManager) == null ? void 0 : _a9.openOrDownloadData(e.content, e.filename, s), false;
    }, __privateMethod(this, _Os_instances, t_fn4).call(this);
  };
  s_fn4 = function(t, e) {
    t.href = this.linkService.getAnchorUrl(""), t.onclick = () => (this.linkService.executeSetOCGState(e), false), __privateMethod(this, _Os_instances, t_fn4).call(this);
  };
  class En extends V {
    constructor(t) {
      super(t, {
        isRenderable: true
      });
    }
    render() {
      this.container.classList.add("textAnnotation");
      const t = document.createElement("img");
      return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
        type: this.data.name
      })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t), this.container;
    }
  }
  class Dt extends V {
    render() {
      return this.container;
    }
    showElementAndHideCanvas(t) {
      var _a9;
      this.data.hasOwnCanvas && (((_a9 = t.previousSibling) == null ? void 0 : _a9.nodeName) === "CANVAS" && (t.previousSibling.hidden = true), t.hidden = false);
    }
    _getKeyModifier(t) {
      return at.platform.isMac ? t.metaKey : t.ctrlKey;
    }
    _setEventListener(t, e, s, i, n) {
      s.includes("mouse") ? t.addEventListener(s, (r) => {
        var _a9;
        (_a9 = this.linkService.eventBus) == null ? void 0 : _a9.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: i,
            value: n(r),
            shift: r.shiftKey,
            modifier: this._getKeyModifier(r)
          }
        });
      }) : t.addEventListener(s, (r) => {
        var _a9;
        if (s === "blur") {
          if (!e.focused || !r.relatedTarget) return;
          e.focused = false;
        } else if (s === "focus") {
          if (e.focused) return;
          e.focused = true;
        }
        n && ((_a9 = this.linkService.eventBus) == null ? void 0 : _a9.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: this.data.id,
            name: i,
            value: n(r)
          }
        }));
      });
    }
    _setEventListeners(t, e, s, i) {
      var _a9, _b6, _c15;
      for (const [n, r] of s) (r === "Action" || ((_a9 = this.data.actions) == null ? void 0 : _a9[r])) && ((r === "Focus" || r === "Blur") && (e || (e = {
        focused: false
      })), this._setEventListener(t, e, n, r, i), r === "Focus" && !((_b6 = this.data.actions) == null ? void 0 : _b6.Blur) ? this._setEventListener(t, e, "blur", "Blur", null) : r === "Blur" && !((_c15 = this.data.actions) == null ? void 0 : _c15.Focus) && this._setEventListener(t, e, "focus", "Focus", null));
    }
    _setBackgroundColor(t) {
      const e = this.data.backgroundColor || null;
      t.style.backgroundColor = e === null ? "transparent" : C.makeHexColor(e[0], e[1], e[2]);
    }
    _setTextStyle(t) {
      const e = [
        "left",
        "center",
        "right"
      ], { fontColor: s } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || wn, n = t.style;
      let r;
      const a = 2, o = (l) => Math.round(10 * l) / 10;
      if (this.data.multiLine) {
        const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a), h = Math.round(l / (_e * i)) || 1, d = l / h;
        r = Math.min(i, o(d / _e));
      } else {
        const l = Math.abs(this.data.rect[3] - this.data.rect[1] - a);
        r = Math.min(i, o(l / _e));
      }
      n.fontSize = `calc(${r}px * var(--scale-factor))`, n.color = C.makeHexColor(s[0], s[1], s[2]), this.data.textAlignment !== null && (n.textAlign = e[this.data.textAlignment]);
    }
    _setRequired(t, e) {
      e ? t.setAttribute("required", true) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
    }
  }
  class xn extends Dt {
    constructor(t) {
      const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
      super(t, {
        isRenderable: e
      });
    }
    setPropertyOnSiblings(t, e, s, i) {
      const n = this.annotationStorage;
      for (const r of this._getElementsByName(t.name, t.id)) r.domElement && (r.domElement[e] = s), n.setValue(r.id, {
        [i]: s
      });
    }
    render() {
      var _a9, _b6;
      const t = this.annotationStorage, e = this.data.id;
      this.container.classList.add("textWidgetAnnotation");
      let s = null;
      if (this.renderForms) {
        const i = t.getValue(e, {
          value: this.data.fieldValue
        });
        let n = i.value || "";
        const r = t.getValue(e, {
          charLimit: this.data.maxLen
        }).charLimit;
        r && n.length > r && (n = n.slice(0, r));
        let a = i.formattedValue || ((_a9 = this.data.textContent) == null ? void 0 : _a9.join(`
`)) || null;
        a && this.data.comb && (a = a.replaceAll(/\s+/g, ""));
        const o = {
          userValue: n,
          formattedValue: a,
          lastCommittedValue: null,
          commitKey: 1,
          focused: false
        };
        this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = a ?? n, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = "text", s.setAttribute("value", a ?? n), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (s.hidden = true), Lt.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = ee, this._setRequired(s, this.data.required), r && (s.maxLength = r), s.addEventListener("input", (h) => {
          t.setValue(e, {
            value: h.target.value
          }), this.setPropertyOnSiblings(s, "value", h.target.value, "value"), o.formattedValue = null;
        }), s.addEventListener("resetform", (h) => {
          const d = this.data.defaultFieldValue ?? "";
          s.value = o.userValue = d, o.formattedValue = null;
        });
        let l = (h) => {
          const { formattedValue: d } = o;
          d != null && (h.target.value = d), h.target.scrollLeft = 0;
        };
        if (this.enableScripting && this.hasJSActions) {
          s.addEventListener("focus", (d) => {
            var _a10;
            if (o.focused) return;
            const { target: u } = d;
            o.userValue && (u.value = o.userValue), o.lastCommittedValue = u.value, o.commitKey = 1, ((_a10 = this.data.actions) == null ? void 0 : _a10.Focus) || (o.focused = true);
          }), s.addEventListener("updatefromsandbox", (d) => {
            this.showElementAndHideCanvas(d.target);
            const u = {
              value(f) {
                o.userValue = f.detail.value ?? "", t.setValue(e, {
                  value: o.userValue.toString()
                }), f.target.value = o.userValue;
              },
              formattedValue(f) {
                const { formattedValue: p } = f.detail;
                o.formattedValue = p, p != null && f.target !== document.activeElement && (f.target.value = p), t.setValue(e, {
                  formattedValue: p
                });
              },
              selRange(f) {
                f.target.setSelectionRange(...f.detail.selRange);
              },
              charLimit: (f) => {
                var _a10;
                const { charLimit: p } = f.detail, { target: g } = f;
                if (p === 0) {
                  g.removeAttribute("maxLength");
                  return;
                }
                g.setAttribute("maxLength", p);
                let b = o.userValue;
                !b || b.length <= p || (b = b.slice(0, p), g.value = o.userValue = b, t.setValue(e, {
                  value: b
                }), (_a10 = this.linkService.eventBus) == null ? void 0 : _a10.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: e,
                    name: "Keystroke",
                    value: b,
                    willCommit: true,
                    commitKey: 1,
                    selStart: g.selectionStart,
                    selEnd: g.selectionEnd
                  }
                }));
              }
            };
            this._dispatchEventFromSandbox(u, d);
          }), s.addEventListener("keydown", (d) => {
            var _a10;
            o.commitKey = 1;
            let u = -1;
            if (d.key === "Escape" ? u = 0 : d.key === "Enter" && !this.data.multiLine ? u = 2 : d.key === "Tab" && (o.commitKey = 3), u === -1) return;
            const { value: f } = d.target;
            o.lastCommittedValue !== f && (o.lastCommittedValue = f, o.userValue = f, (_a10 = this.linkService.eventBus) == null ? void 0 : _a10.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: f,
                willCommit: true,
                commitKey: u,
                selStart: d.target.selectionStart,
                selEnd: d.target.selectionEnd
              }
            }));
          });
          const h = l;
          l = null, s.addEventListener("blur", (d) => {
            var _a10, _b7;
            if (!o.focused || !d.relatedTarget) return;
            ((_a10 = this.data.actions) == null ? void 0 : _a10.Blur) || (o.focused = false);
            const { value: u } = d.target;
            o.userValue = u, o.lastCommittedValue !== u && ((_b7 = this.linkService.eventBus) == null ? void 0 : _b7.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: u,
                willCommit: true,
                commitKey: o.commitKey,
                selStart: d.target.selectionStart,
                selEnd: d.target.selectionEnd
              }
            })), h(d);
          }), ((_b6 = this.data.actions) == null ? void 0 : _b6.Keystroke) && s.addEventListener("beforeinput", (d) => {
            var _a10;
            o.lastCommittedValue = null;
            const { data: u, target: f } = d, { value: p, selectionStart: g, selectionEnd: b } = f;
            let m = g, A = b;
            switch (d.inputType) {
              case "deleteWordBackward": {
                const _ = p.substring(0, g).match(/\w*[^\w]*$/);
                _ && (m -= _[0].length);
                break;
              }
              case "deleteWordForward": {
                const _ = p.substring(g).match(/^[^\w]*\w*/);
                _ && (A += _[0].length);
                break;
              }
              case "deleteContentBackward":
                g === b && (m -= 1);
                break;
              case "deleteContentForward":
                g === b && (A += 1);
                break;
            }
            d.preventDefault(), (_a10 = this.linkService.eventBus) == null ? void 0 : _a10.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: e,
                name: "Keystroke",
                value: p,
                change: u || "",
                willCommit: false,
                selStart: m,
                selEnd: A
              }
            });
          }), this._setEventListeners(s, o, [
            [
              "focus",
              "Focus"
            ],
            [
              "blur",
              "Blur"
            ],
            [
              "mousedown",
              "Mouse Down"
            ],
            [
              "mouseenter",
              "Mouse Enter"
            ],
            [
              "mouseleave",
              "Mouse Exit"
            ],
            [
              "mouseup",
              "Mouse Up"
            ]
          ], (d) => d.target.value);
        }
        if (l && s.addEventListener("blur", l), this.data.comb) {
          const d = (this.data.rect[2] - this.data.rect[0]) / r;
          s.classList.add("comb"), s.style.letterSpacing = `calc(${d}px * var(--scale-factor) - 1ch)`;
        }
      } else s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = true);
      return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
    }
  }
  class Cn extends Dt {
    constructor(t) {
      super(t, {
        isRenderable: !!t.data.hasOwnCanvas
      });
    }
  }
  class Tn extends Dt {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      const t = this.annotationStorage, e = this.data, s = e.id;
      let i = t.getValue(s, {
        value: e.exportValue === e.fieldValue
      }).value;
      typeof i == "string" && (i = i !== "Off", t.setValue(s, {
        value: i
      })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
      const n = document.createElement("input");
      return Lt.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, i && n.setAttribute("checked", true), n.setAttribute("exportValue", e.exportValue), n.tabIndex = ee, n.addEventListener("change", (r) => {
        const { name: a, checked: o } = r.target;
        for (const l of this._getElementsByName(a, s)) {
          const h = o && l.exportValue === e.exportValue;
          l.domElement && (l.domElement.checked = h), t.setValue(l.id, {
            value: h
          });
        }
        t.setValue(s, {
          value: o
        });
      }), n.addEventListener("resetform", (r) => {
        const a = e.defaultFieldValue || "Off";
        r.target.checked = a === e.exportValue;
      }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (r) => {
        const a = {
          value(o) {
            o.target.checked = o.detail.value !== "Off", t.setValue(s, {
              value: o.target.checked
            });
          }
        };
        this._dispatchEventFromSandbox(a, r);
      }), this._setEventListeners(n, null, [
        [
          "change",
          "Validate"
        ],
        [
          "change",
          "Action"
        ],
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ]
      ], (r) => r.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
  }
  class Bs extends Dt {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("buttonWidgetAnnotation", "radioButton");
      const t = this.annotationStorage, e = this.data, s = e.id;
      let i = t.getValue(s, {
        value: e.fieldValue === e.buttonValue
      }).value;
      if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
        value: i
      })), i) for (const r of this._getElementsByName(e.fieldName, s)) t.setValue(r.id, {
        value: false
      });
      const n = document.createElement("input");
      if (Lt.add(n), n.setAttribute("data-element-id", s), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, i && n.setAttribute("checked", true), n.tabIndex = ee, n.addEventListener("change", (r) => {
        const { name: a, checked: o } = r.target;
        for (const l of this._getElementsByName(a, s)) t.setValue(l.id, {
          value: false
        });
        t.setValue(s, {
          value: o
        });
      }), n.addEventListener("resetform", (r) => {
        const a = e.defaultFieldValue;
        r.target.checked = a != null && a === e.buttonValue;
      }), this.enableScripting && this.hasJSActions) {
        const r = e.buttonValue;
        n.addEventListener("updatefromsandbox", (a) => {
          const o = {
            value: (l) => {
              const h = r === l.detail.value;
              for (const d of this._getElementsByName(l.target.name)) {
                const u = h && d.id === s;
                d.domElement && (d.domElement.checked = u), t.setValue(d.id, {
                  value: u
                });
              }
            }
          };
          this._dispatchEventFromSandbox(o, a);
        }), this._setEventListeners(n, null, [
          [
            "change",
            "Validate"
          ],
          [
            "change",
            "Action"
          ],
          [
            "focus",
            "Focus"
          ],
          [
            "blur",
            "Blur"
          ],
          [
            "mousedown",
            "Mouse Down"
          ],
          [
            "mouseenter",
            "Mouse Enter"
          ],
          [
            "mouseleave",
            "Mouse Exit"
          ],
          [
            "mouseup",
            "Mouse Up"
          ]
        ], (a) => a.target.checked);
      }
      return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
  }
  class Pn extends Os {
    constructor(t) {
      super(t, {
        ignoreBorder: t.data.hasAppearance
      });
    }
    render() {
      const t = super.render();
      t.classList.add("buttonWidgetAnnotation", "pushButton");
      const e = t.lastChild;
      return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
        this._dispatchEventFromSandbox({}, s);
      })), t;
    }
  }
  class kn extends Dt {
    constructor(t) {
      super(t, {
        isRenderable: t.renderForms
      });
    }
    render() {
      this.container.classList.add("choiceWidgetAnnotation");
      const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
        value: this.data.fieldValue
      }), i = document.createElement("select");
      Lt.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = ee;
      let n = this.data.combo && this.data.options.length > 0;
      this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = true)), i.addEventListener("resetform", (h) => {
        const d = this.data.defaultFieldValue;
        for (const u of i.options) u.selected = u.value === d;
      });
      for (const h of this.data.options) {
        const d = document.createElement("option");
        d.textContent = h.displayValue, d.value = h.exportValue, s.value.includes(h.exportValue) && (d.setAttribute("selected", true), n = false), i.append(d);
      }
      let r = null;
      if (n) {
        const h = document.createElement("option");
        h.value = " ", h.setAttribute("hidden", true), h.setAttribute("selected", true), i.prepend(h), r = () => {
          h.remove(), i.removeEventListener("input", r), r = null;
        }, i.addEventListener("input", r);
      }
      const a = (h) => {
        const d = h ? "value" : "textContent", { options: u, multiple: f } = i;
        return f ? Array.prototype.filter.call(u, (p) => p.selected).map((p) => p[d]) : u.selectedIndex === -1 ? null : u[u.selectedIndex][d];
      };
      let o = a(false);
      const l = (h) => {
        const d = h.target.options;
        return Array.prototype.map.call(d, (u) => ({
          displayValue: u.textContent,
          exportValue: u.value
        }));
      };
      return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (h) => {
        const d = {
          value(u) {
            r == null ? void 0 : r();
            const f = u.detail.value, p = new Set(Array.isArray(f) ? f : [
              f
            ]);
            for (const g of i.options) g.selected = p.has(g.value);
            t.setValue(e, {
              value: a(true)
            }), o = a(false);
          },
          multipleSelection(u) {
            i.multiple = true;
          },
          remove(u) {
            const f = i.options, p = u.detail.remove;
            f[p].selected = false, i.remove(p), f.length > 0 && Array.prototype.findIndex.call(f, (b) => b.selected) === -1 && (f[0].selected = true), t.setValue(e, {
              value: a(true),
              items: l(u)
            }), o = a(false);
          },
          clear(u) {
            for (; i.length !== 0; ) i.remove(0);
            t.setValue(e, {
              value: null,
              items: []
            }), o = a(false);
          },
          insert(u) {
            const { index: f, displayValue: p, exportValue: g } = u.detail.insert, b = i.children[f], m = document.createElement("option");
            m.textContent = p, m.value = g, b ? b.before(m) : i.append(m), t.setValue(e, {
              value: a(true),
              items: l(u)
            }), o = a(false);
          },
          items(u) {
            const { items: f } = u.detail;
            for (; i.length !== 0; ) i.remove(0);
            for (const p of f) {
              const { displayValue: g, exportValue: b } = p, m = document.createElement("option");
              m.textContent = g, m.value = b, i.append(m);
            }
            i.options.length > 0 && (i.options[0].selected = true), t.setValue(e, {
              value: a(true),
              items: l(u)
            }), o = a(false);
          },
          indices(u) {
            const f = new Set(u.detail.indices);
            for (const p of u.target.options) p.selected = f.has(p.index);
            t.setValue(e, {
              value: a(true)
            }), o = a(false);
          },
          editable(u) {
            u.target.disabled = !u.detail.editable;
          }
        };
        this._dispatchEventFromSandbox(d, h);
      }), i.addEventListener("input", (h) => {
        var _a9;
        const d = a(true), u = a(false);
        t.setValue(e, {
          value: d
        }), h.preventDefault(), (_a9 = this.linkService.eventBus) == null ? void 0 : _a9.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: e,
            name: "Keystroke",
            value: o,
            change: u,
            changeEx: d,
            willCommit: false,
            commitKey: 1,
            keyDown: false
          }
        });
      }), this._setEventListeners(i, null, [
        [
          "focus",
          "Focus"
        ],
        [
          "blur",
          "Blur"
        ],
        [
          "mousedown",
          "Mouse Down"
        ],
        [
          "mouseenter",
          "Mouse Enter"
        ],
        [
          "mouseleave",
          "Mouse Exit"
        ],
        [
          "mouseup",
          "Mouse Up"
        ],
        [
          "input",
          "Action"
        ],
        [
          "input",
          "Validate"
        ]
      ], (h) => h.target.value)) : i.addEventListener("input", function(h) {
        t.setValue(e, {
          value: a(true)
        });
      }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
    }
  }
  class Me extends V {
    constructor(t) {
      const { data: e, elements: s } = t;
      super(t, {
        isRenderable: V._hasPopupData(e)
      }), this.elements = s, this.popup = null;
    }
    render() {
      this.container.classList.add("popupAnnotation");
      const t = this.popup = new Rn({
        container: this.container,
        color: this.data.color,
        titleObj: this.data.titleObj,
        modificationDate: this.data.modificationDate,
        contentsObj: this.data.contentsObj,
        richText: this.data.richText,
        rect: this.data.rect,
        parentRect: this.data.parentRect || null,
        parent: this.parent,
        elements: this.elements,
        open: this.data.open
      }), e = [];
      for (const s of this.elements) s.popup = t, s.container.ariaHasPopup = "dialog", e.push(s.data.id), s.addHighlightArea();
      return this.container.setAttribute("aria-controls", e.map((s) => `${Fe}${s}`).join(",")), this.container;
    }
  }
  class Rn {
    constructor({ container: t, color: e, elements: s, titleObj: i, modificationDate: n, contentsObj: r, richText: a, parent: o, rect: l, parentRect: h, open: d }) {
      __privateAdd(this, _Rn_instances);
      __privateAdd(this, _t31, __privateMethod(this, _Rn_instances, T_fn2).bind(this));
      __privateAdd(this, _e23, __privateMethod(this, _Rn_instances, C_fn3).bind(this));
      __privateAdd(this, _s18, __privateMethod(this, _Rn_instances, P_fn3).bind(this));
      __privateAdd(this, _i13, __privateMethod(this, _Rn_instances, w_fn3).bind(this));
      __privateAdd(this, _r10, null);
      __privateAdd(this, _n9, null);
      __privateAdd(this, _l7, null);
      __privateAdd(this, _o6, null);
      __privateAdd(this, _c6, null);
      __privateAdd(this, _h6, null);
      __privateAdd(this, _u6, null);
      __privateAdd(this, _d5, false);
      __privateAdd(this, _f5, null);
      __privateAdd(this, _a5, null);
      __privateAdd(this, _p4, null);
      __privateAdd(this, _m4, null);
      __privateAdd(this, _g4, null);
      __privateAdd(this, _b4, null);
      __privateAdd(this, _y4, false);
      var _a9;
      __privateSet(this, _n9, t), __privateSet(this, _g4, i), __privateSet(this, _l7, r), __privateSet(this, _m4, a), __privateSet(this, _h6, o), __privateSet(this, _r10, e), __privateSet(this, _p4, l), __privateSet(this, _u6, h), __privateSet(this, _c6, s), __privateSet(this, _o6, As.toDateObject(n)), this.trigger = s.flatMap((u) => u.getElementsToTriggerPopup());
      for (const u of this.trigger) u.addEventListener("click", __privateGet(this, _i13)), u.addEventListener("mouseenter", __privateGet(this, _s18)), u.addEventListener("mouseleave", __privateGet(this, _e23)), u.classList.add("popupTriggerArea");
      for (const u of s) (_a9 = u.container) == null ? void 0 : _a9.addEventListener("keydown", __privateGet(this, _t31));
      __privateGet(this, _n9).hidden = true, d && __privateMethod(this, _Rn_instances, w_fn3).call(this);
    }
    render() {
      if (__privateGet(this, _f5)) return;
      const t = __privateSet(this, _f5, document.createElement("div"));
      if (t.className = "popup", __privateGet(this, _r10)) {
        const n = t.style.outlineColor = C.makeHexColor(...__privateGet(this, _r10));
        CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? t.style.backgroundColor = `color-mix(in srgb, ${n} 30%, white)` : t.style.backgroundColor = C.makeHexColor(...__privateGet(this, _r10).map((a) => Math.floor(0.7 * (255 - a) + a)));
      }
      const e = document.createElement("span");
      e.className = "header";
      const s = document.createElement("h1");
      if (e.append(s), { dir: s.dir, str: s.textContent } = __privateGet(this, _g4), t.append(e), __privateGet(this, _o6)) {
        const n = document.createElement("span");
        n.classList.add("popupDate"), n.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), n.setAttribute("data-l10n-args", JSON.stringify({
          dateObj: __privateGet(this, _o6).valueOf()
        })), e.append(n);
      }
      const i = __privateGet(this, _Rn_instances, A_get);
      if (i) Ns.render({
        xfaHtml: i,
        intent: "richText",
        div: t
      }), t.lastChild.classList.add("richText", "popupContent");
      else {
        const n = this._formatContents(__privateGet(this, _l7));
        t.append(n);
      }
      __privateGet(this, _n9).append(t);
    }
    _formatContents({ str: t, dir: e }) {
      const s = document.createElement("p");
      s.classList.add("popupContent"), s.dir = e;
      const i = t.split(/(?:\r\n?|\n)/);
      for (let n = 0, r = i.length; n < r; ++n) {
        const a = i[n];
        s.append(document.createTextNode(a)), n < r - 1 && s.append(document.createElement("br"));
      }
      return s;
    }
    updateEdited({ rect: t, popupContent: e }) {
      var _a9;
      __privateGet(this, _b4) || __privateSet(this, _b4, {
        contentsObj: __privateGet(this, _l7),
        richText: __privateGet(this, _m4)
      }), t && __privateSet(this, _a5, null), e && (__privateSet(this, _m4, __privateMethod(this, _Rn_instances, x_fn).call(this, e)), __privateSet(this, _l7, null)), (_a9 = __privateGet(this, _f5)) == null ? void 0 : _a9.remove(), __privateSet(this, _f5, null);
    }
    resetEdited() {
      var _a9;
      __privateGet(this, _b4) && ({ contentsObj: __privateWrapper(this, _l7)._, richText: __privateWrapper(this, _m4)._ } = __privateGet(this, _b4), __privateSet(this, _b4, null), (_a9 = __privateGet(this, _f5)) == null ? void 0 : _a9.remove(), __privateSet(this, _f5, null), __privateSet(this, _a5, null));
    }
    forceHide() {
      __privateSet(this, _y4, this.isVisible), __privateGet(this, _y4) && (__privateGet(this, _n9).hidden = true);
    }
    maybeShow() {
      __privateGet(this, _y4) && (__privateGet(this, _f5) || __privateMethod(this, _Rn_instances, P_fn3).call(this), __privateSet(this, _y4, false), __privateGet(this, _n9).hidden = false);
    }
    get isVisible() {
      return __privateGet(this, _n9).hidden === false;
    }
  }
  _t31 = new WeakMap();
  _e23 = new WeakMap();
  _s18 = new WeakMap();
  _i13 = new WeakMap();
  _r10 = new WeakMap();
  _n9 = new WeakMap();
  _l7 = new WeakMap();
  _o6 = new WeakMap();
  _c6 = new WeakMap();
  _h6 = new WeakMap();
  _u6 = new WeakMap();
  _d5 = new WeakMap();
  _f5 = new WeakMap();
  _a5 = new WeakMap();
  _p4 = new WeakMap();
  _m4 = new WeakMap();
  _g4 = new WeakMap();
  _b4 = new WeakMap();
  _y4 = new WeakMap();
  _Rn_instances = new WeakSet();
  A_get = function() {
    const t = __privateGet(this, _m4), e = __privateGet(this, _l7);
    return (t == null ? void 0 : t.str) && (!(e == null ? void 0 : e.str) || e.str === t.str) && __privateGet(this, _m4).html || null;
  };
  v_get = function() {
    var _a9, _b6, _c15;
    return ((_c15 = (_b6 = (_a9 = __privateGet(this, _Rn_instances, A_get)) == null ? void 0 : _a9.attributes) == null ? void 0 : _b6.style) == null ? void 0 : _c15.fontSize) || 0;
  };
  S_get = function() {
    var _a9, _b6, _c15;
    return ((_c15 = (_b6 = (_a9 = __privateGet(this, _Rn_instances, A_get)) == null ? void 0 : _a9.attributes) == null ? void 0 : _b6.style) == null ? void 0 : _c15.color) || null;
  };
  x_fn = function(t) {
    const e = [], s = {
      str: t,
      html: {
        name: "div",
        attributes: {
          dir: "auto"
        },
        children: [
          {
            name: "p",
            children: e
          }
        ]
      }
    }, i = {
      style: {
        color: __privateGet(this, _Rn_instances, S_get),
        fontSize: __privateGet(this, _Rn_instances, v_get) ? `calc(${__privateGet(this, _Rn_instances, v_get)}px * var(--scale-factor))` : ""
      }
    };
    for (const n of t.split(`
`)) e.push({
      name: "span",
      value: n,
      attributes: i
    });
    return s;
  };
  T_fn2 = function(t) {
    t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && __privateGet(this, _d5)) && __privateMethod(this, _Rn_instances, w_fn3).call(this);
  };
  k_fn3 = function() {
    if (__privateGet(this, _a5) !== null) return;
    const { page: { view: t }, viewport: { rawDims: { pageWidth: e, pageHeight: s, pageX: i, pageY: n } } } = __privateGet(this, _h6);
    let r = !!__privateGet(this, _u6), a = r ? __privateGet(this, _u6) : __privateGet(this, _p4);
    for (const p of __privateGet(this, _c6)) if (!a || C.intersect(p.data.rect, a) !== null) {
      a = p.data.rect, r = true;
      break;
    }
    const o = C.normalizeRect([
      a[0],
      t[3] - a[1] + t[1],
      a[2],
      t[3] - a[3] + t[1]
    ]), h = r ? a[2] - a[0] + 5 : 0, d = o[0] + h, u = o[1];
    __privateSet(this, _a5, [
      100 * (d - i) / e,
      100 * (u - n) / s
    ]);
    const { style: f } = __privateGet(this, _n9);
    f.left = `${__privateGet(this, _a5)[0]}%`, f.top = `${__privateGet(this, _a5)[1]}%`;
  };
  w_fn3 = function() {
    __privateSet(this, _d5, !__privateGet(this, _d5)), __privateGet(this, _d5) ? (__privateMethod(this, _Rn_instances, P_fn3).call(this), __privateGet(this, _n9).addEventListener("click", __privateGet(this, _i13)), __privateGet(this, _n9).addEventListener("keydown", __privateGet(this, _t31))) : (__privateMethod(this, _Rn_instances, C_fn3).call(this), __privateGet(this, _n9).removeEventListener("click", __privateGet(this, _i13)), __privateGet(this, _n9).removeEventListener("keydown", __privateGet(this, _t31)));
  };
  P_fn3 = function() {
    __privateGet(this, _f5) || this.render(), this.isVisible ? __privateGet(this, _d5) && __privateGet(this, _n9).classList.add("focused") : (__privateMethod(this, _Rn_instances, k_fn3).call(this), __privateGet(this, _n9).hidden = false, __privateGet(this, _n9).style.zIndex = parseInt(__privateGet(this, _n9).style.zIndex) + 1e3);
  };
  C_fn3 = function() {
    __privateGet(this, _n9).classList.remove("focused"), !(__privateGet(this, _d5) || !this.isVisible) && (__privateGet(this, _n9).hidden = true, __privateGet(this, _n9).style.zIndex = parseInt(__privateGet(this, _n9).style.zIndex) - 1e3);
  };
  class Hs extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = L.FREETEXT;
    }
    render() {
      if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
        const t = document.createElement("div");
        t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
        for (const e of this.textContent) {
          const s = document.createElement("span");
          s.textContent = e, t.append(s);
        }
        this.container.append(t);
      }
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
  }
  class Mn extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t32, null);
    }
    render() {
      this.container.classList.add("lineAnnotation");
      const t = this.data, { width: e, height: s } = Tt(t.rect), i = this.svgFactory.create(e, s, true), n = __privateSet(this, _t32, this.svgFactory.createElement("svg:line"));
      return n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]), n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]), n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]), n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]), n.setAttribute("stroke-width", t.borderStyle.width || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), i.append(n), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t32);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t32 = new WeakMap();
  class In extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t33, null);
    }
    render() {
      this.container.classList.add("squareAnnotation");
      const t = this.data, { width: e, height: s } = Tt(t.rect), i = this.svgFactory.create(e, s, true), n = t.borderStyle.width, r = __privateSet(this, _t33, this.svgFactory.createElement("svg:rect"));
      return r.setAttribute("x", n / 2), r.setAttribute("y", n / 2), r.setAttribute("width", e - n), r.setAttribute("height", s - n), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), i.append(r), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t33);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t33 = new WeakMap();
  class Ln extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t34, null);
    }
    render() {
      this.container.classList.add("circleAnnotation");
      const t = this.data, { width: e, height: s } = Tt(t.rect), i = this.svgFactory.create(e, s, true), n = t.borderStyle.width, r = __privateSet(this, _t34, this.svgFactory.createElement("svg:ellipse"));
      return r.setAttribute("cx", e / 2), r.setAttribute("cy", s / 2), r.setAttribute("rx", e / 2 - n / 2), r.setAttribute("ry", s / 2 - n / 2), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), i.append(r), this.container.append(i), !t.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t34);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t34 = new WeakMap();
  class $s extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _t35, null);
      this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, vertices: e, borderStyle: s, popupRef: i } } = this;
      if (!e) return this.container;
      const { width: n, height: r } = Tt(t), a = this.svgFactory.create(n, r, true);
      let o = [];
      for (let h = 0, d = e.length; h < d; h += 2) {
        const u = e[h] - t[0], f = t[3] - e[h + 1];
        o.push(`${u},${f}`);
      }
      o = o.join(" ");
      const l = __privateSet(this, _t35, this.svgFactory.createElement(this.svgElementName));
      return l.setAttribute("points", o), l.setAttribute("stroke-width", s.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), a.append(l), this.container.append(a), !i && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t35);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t35 = new WeakMap();
  class Dn extends $s {
    constructor(t) {
      super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
    }
  }
  class Fn extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
    }
    render() {
      return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
  }
  class We extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      });
      __privateAdd(this, _We_instances);
      __privateAdd(this, _t36, null);
      __privateAdd(this, _e24, []);
      this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? L.HIGHLIGHT : L.INK;
    }
    render() {
      this.container.classList.add(this.containerClassName);
      const { data: { rect: t, rotation: e, inkLists: s, borderStyle: i, popupRef: n } } = this, { transform: r, width: a, height: o } = __privateMethod(this, _We_instances, s_fn5).call(this, e, t), l = this.svgFactory.create(a, o, true), h = __privateSet(this, _t36, this.svgFactory.createElement("svg:g"));
      l.append(h), h.setAttribute("stroke-width", i.width || 1), h.setAttribute("stroke-linecap", "round"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", 10), h.setAttribute("stroke", "transparent"), h.setAttribute("fill", "transparent"), h.setAttribute("transform", r);
      for (let d = 0, u = s.length; d < u; d++) {
        const f = this.svgFactory.createElement(this.svgElementName);
        __privateGet(this, _e24).push(f), f.setAttribute("points", s[d].join(",")), h.append(f);
      }
      return !n && this.hasPopupData && this._createPopup(), this.container.append(l), this._editOnDoubleClick(), this.container;
    }
    updateEdited(t) {
      super.updateEdited(t);
      const { thickness: e, points: s, rect: i } = t, n = __privateGet(this, _t36);
      if (e >= 0 && n.setAttribute("stroke-width", e || 1), s) for (let r = 0, a = __privateGet(this, _e24).length; r < a; r++) __privateGet(this, _e24)[r].setAttribute("points", s[r].join(","));
      if (i) {
        const { transform: r, width: a, height: o } = __privateMethod(this, _We_instances, s_fn5).call(this, this.data.rotation, i);
        n.parentElement.setAttribute("viewBox", `0 0 ${a} ${o}`), n.setAttribute("transform", r);
      }
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _e24);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t36 = new WeakMap();
  _e24 = new WeakMap();
  _We_instances = new WeakSet();
  s_fn5 = function(t, e) {
    switch (t) {
      case 90:
        return {
          transform: `rotate(90) translate(${-e[0]},${e[1]}) scale(1,-1)`,
          width: e[3] - e[1],
          height: e[2] - e[0]
        };
      case 180:
        return {
          transform: `rotate(180) translate(${-e[2]},${e[1]}) scale(1,-1)`,
          width: e[2] - e[0],
          height: e[3] - e[1]
        };
      case 270:
        return {
          transform: `rotate(270) translate(${-e[2]},${e[3]}) scale(1,-1)`,
          width: e[3] - e[1],
          height: e[2] - e[0]
        };
      default:
        return {
          transform: `translate(${-e[0]},${e[3]}) scale(1,-1)`,
          width: e[2] - e[0],
          height: e[3] - e[1]
        };
    }
  };
  class Gs extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      }), this.annotationEditorType = L.HIGHLIGHT;
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), this.container;
    }
  }
  class Nn extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
    }
  }
  class On extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
    }
  }
  class Bn extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true,
        createQuadrilaterals: true
      });
    }
    render() {
      return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
    }
  }
  class zs extends V {
    constructor(t) {
      super(t, {
        isRenderable: true,
        ignoreBorder: true
      }), this.annotationEditorType = L.STAMP;
    }
    render() {
      return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
  }
  class Hn extends V {
    constructor(t) {
      var _a9;
      super(t, {
        isRenderable: true
      });
      __privateAdd(this, _Hn_instances);
      __privateAdd(this, _t37, null);
      const { file: e } = this.data;
      this.filename = e.filename, this.content = e.content, (_a9 = this.linkService.eventBus) == null ? void 0 : _a9.dispatch("fileattachmentannotation", {
        source: this,
        ...e
      });
    }
    render() {
      this.container.classList.add("fileAttachmentAnnotation");
      const { container: t, data: e } = this;
      let s;
      e.hasAppearance || e.fillAlpha === 0 ? s = document.createElement("div") : (s = document.createElement("img"), s.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`, e.fillAlpha && e.fillAlpha < 1 && (s.style = `filter: opacity(${Math.round(e.fillAlpha * 100)}%);`)), s.addEventListener("dblclick", __privateMethod(this, _Hn_instances, e_fn6).bind(this)), __privateSet(this, _t37, s);
      const { isMac: i } = at.platform;
      return t.addEventListener("keydown", (n) => {
        n.key === "Enter" && (i ? n.metaKey : n.ctrlKey) && __privateMethod(this, _Hn_instances, e_fn6).call(this);
      }), !e.popupRef && this.hasPopupData ? this._createPopup() : s.classList.add("popupTriggerArea"), t.append(s), t;
    }
    getElementsToTriggerPopup() {
      return __privateGet(this, _t37);
    }
    addHighlightArea() {
      this.container.classList.add("highlightArea");
    }
  }
  _t37 = new WeakMap();
  _Hn_instances = new WeakSet();
  e_fn6 = function() {
    var _a9;
    (_a9 = this.downloadManager) == null ? void 0 : _a9.openOrDownloadData(this.content, this.filename);
  };
  class $n {
    constructor({ div: t, accessibilityManager: e, annotationCanvasMap: s, annotationEditorUIManager: i, page: n, viewport: r, structTreeLayer: a }) {
      __privateAdd(this, _$n_instances);
      __privateAdd(this, _t38, null);
      __privateAdd(this, _e25, null);
      __privateAdd(this, _s19, /* @__PURE__ */ new Map());
      __privateAdd(this, _i14, null);
      this.div = t, __privateSet(this, _t38, e), __privateSet(this, _e25, s), __privateSet(this, _i14, a || null), this.page = n, this.viewport = r, this.zIndex = 0, this._annotationEditorUIManager = i;
    }
    hasEditableAnnotations() {
      return __privateGet(this, _s19).size > 0;
    }
    async render(t) {
      var _a9;
      const { annotations: e } = t, s = this.div;
      It(s, this.viewport);
      const i = /* @__PURE__ */ new Map(), n = {
        data: null,
        layer: s,
        linkService: t.linkService,
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || "",
        renderForms: t.renderForms !== false,
        svgFactory: new Ve(),
        annotationStorage: t.annotationStorage || new Ge(),
        enableScripting: t.enableScripting === true,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null
      };
      for (const r of e) {
        if (r.noHTML) continue;
        const a = r.annotationType === K.POPUP;
        if (a) {
          const h = i.get(r.id);
          if (!h) continue;
          n.elements = h;
        } else {
          const { width: h, height: d } = Tt(r.rect);
          if (h <= 0 || d <= 0) continue;
        }
        n.data = r;
        const o = Sn.create(n);
        if (!o.isRenderable) continue;
        if (!a && r.popupRef) {
          const h = i.get(r.popupRef);
          h ? h.push(o) : i.set(r.popupRef, [
            o
          ]);
        }
        const l = o.render();
        r.hidden && (l.style.visibility = "hidden"), await __privateMethod(this, _$n_instances, r_fn4).call(this, l, r.id), o._isEditable && (__privateGet(this, _s19).set(o.data.id, o), (_a9 = this._annotationEditorUIManager) == null ? void 0 : _a9.renderAnnotationElement(o));
      }
      __privateMethod(this, _$n_instances, n_fn3).call(this);
    }
    update({ viewport: t }) {
      const e = this.div;
      this.viewport = t, It(e, {
        rotation: t.rotation
      }), __privateMethod(this, _$n_instances, n_fn3).call(this), e.hidden = false;
    }
    getEditableAnnotations() {
      return Array.from(__privateGet(this, _s19).values());
    }
    getEditableAnnotation(t) {
      return __privateGet(this, _s19).get(t);
    }
  }
  _t38 = new WeakMap();
  _e25 = new WeakMap();
  _s19 = new WeakMap();
  _i14 = new WeakMap();
  _$n_instances = new WeakSet();
  r_fn4 = async function(t, e) {
    var _a9, _b6;
    const s = t.firstChild || t, i = s.id = `${Fe}${e}`, n = await ((_a9 = __privateGet(this, _i14)) == null ? void 0 : _a9.getAriaAttributes(i));
    if (n) for (const [r, a] of n) s.setAttribute(r, a);
    this.div.append(t), (_b6 = __privateGet(this, _t38)) == null ? void 0 : _b6.moveElementInDOM(this.div, t, s, false);
  };
  n_fn3 = function() {
    if (!__privateGet(this, _e25)) return;
    const t = this.div;
    for (const [e, s] of __privateGet(this, _e25)) {
      const i = t.querySelector(`[data-annotation-id="${e}"]`);
      if (!i) continue;
      s.className = "annotationContent";
      const { firstChild: n } = i;
      n ? n.nodeName === "CANVAS" ? n.replaceWith(s) : n.classList.contains("annotationContent") ? n.after(s) : n.before(s) : i.append(s);
    }
    __privateGet(this, _e25).clear();
  };
  const re = /\r\n?|\n/g;
  const _Q = class _Q extends R {
    constructor(t) {
      super({
        ...t,
        name: "freeTextEditor"
      });
      __privateAdd(this, _Q_instances);
      __privateAdd(this, _t39);
      __privateAdd(this, _e26, "");
      __privateAdd(this, _s20, `${this.id}-editor`);
      __privateAdd(this, _i15, null);
      __privateAdd(this, _r11);
      __privateSet(this, _t39, t.color || _Q._defaultColor || R._defaultLineColor), __privateSet(this, _r11, t.fontSize || _Q._defaultFontSize);
    }
    static get _keyboardManager() {
      const t = _Q.prototype, e = (n) => n.isEmpty(), s = kt.TRANSLATE_SMALL, i = kt.TRANSLATE_BIG;
      return F(this, "_keyboardManager", new te([
        [
          [
            "ctrl+s",
            "mac+meta+s",
            "ctrl+p",
            "mac+meta+p"
          ],
          t.commitOrRemove,
          {
            bubbles: true
          }
        ],
        [
          [
            "ctrl+Enter",
            "mac+meta+Enter",
            "Escape",
            "mac+Escape"
          ],
          t.commitOrRemove
        ],
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowLeft",
            "mac+shift+ArrowLeft"
          ],
          t._translateEmpty,
          {
            args: [
              -i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              s,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowRight",
            "mac+shift+ArrowRight"
          ],
          t._translateEmpty,
          {
            args: [
              i,
              0
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowUp",
            "mac+shift+ArrowUp"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              -i
            ],
            checker: e
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              s
            ],
            checker: e
          }
        ],
        [
          [
            "ctrl+ArrowDown",
            "mac+shift+ArrowDown"
          ],
          t._translateEmpty,
          {
            args: [
              0,
              i
            ],
            checker: e
          }
        ]
      ]));
    }
    static initialize(t, e) {
      R.initialize(t, e);
      const s = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(s.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case O.FREETEXT_SIZE:
          _Q._defaultFontSize = e;
          break;
        case O.FREETEXT_COLOR:
          _Q._defaultColor = e;
          break;
      }
    }
    updateParams(t, e) {
      switch (t) {
        case O.FREETEXT_SIZE:
          __privateMethod(this, _Q_instances, n_fn4).call(this, e);
          break;
        case O.FREETEXT_COLOR:
          __privateMethod(this, _Q_instances, l_fn2).call(this, e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          O.FREETEXT_SIZE,
          _Q._defaultFontSize
        ],
        [
          O.FREETEXT_COLOR,
          _Q._defaultColor || R._defaultLineColor
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          O.FREETEXT_SIZE,
          __privateGet(this, _r11)
        ],
        [
          O.FREETEXT_COLOR,
          __privateGet(this, _t39)
        ]
      ];
    }
    _translateEmpty(t, e) {
      this._uiManager.translateSelectedEditors(t, e, true);
    }
    getInitialTranslation() {
      const t = this.parentScale;
      return [
        -_Q._internalPadding * t,
        -(_Q._internalPadding + __privateGet(this, _r11)) * t
      ];
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
      if (this.isInEditMode()) return;
      this.parent.setEditingState(false), this.parent.updateToolbar(L.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = true, this._isDraggable = false, this.div.removeAttribute("aria-activedescendant"), __privateSet(this, _i15, new AbortController());
      const t = this._uiManager.combinedSignal(__privateGet(this, _i15));
      this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
        signal: t
      }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
        signal: t
      });
    }
    disableEditMode() {
      var _a9;
      this.isInEditMode() && (this.parent.setEditingState(true), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = false, this.div.setAttribute("aria-activedescendant", __privateGet(this, _s20)), this._isDraggable = true, (_a9 = __privateGet(this, _i15)) == null ? void 0 : _a9.abort(), __privateSet(this, _i15, null), this.div.focus({
        preventScroll: true
      }), this.isEditing = false, this.parent.div.classList.add("freetextEditing"));
    }
    focusin(t) {
      this._focusEventsAllowed && (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(t) {
      var _a9;
      this.width || (this.enableEditMode(), t && this.editorDiv.focus(), ((_a9 = this._initialOptions) == null ? void 0 : _a9.isCentered) && this.center(), this._initialOptions = null);
    }
    isEmpty() {
      return !this.editorDiv || this.editorDiv.innerText.trim() === "";
    }
    remove() {
      this.isEditing = false, this.parent && (this.parent.setEditingState(true), this.parent.div.classList.add("freetextEditing")), super.remove();
    }
    commit() {
      if (!this.isInEditMode()) return;
      super.commit(), this.disableEditMode();
      const t = __privateGet(this, _e26), e = __privateSet(this, _e26, __privateMethod(this, _Q_instances, o_fn2).call(this).trimEnd());
      if (t === e) return;
      const s = (i) => {
        if (__privateSet(this, _e26, i), !i) {
          this.remove();
          return;
        }
        __privateMethod(this, _Q_instances, u_fn3).call(this), this._uiManager.rebuild(this), __privateMethod(this, _Q_instances, c_fn2).call(this);
      };
      this.addCommands({
        cmd: () => {
          s(e);
        },
        undo: () => {
          s(t);
        },
        mustExec: false
      }), __privateMethod(this, _Q_instances, c_fn2).call(this);
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      this.enableEditMode(), this.editorDiv.focus();
    }
    dblclick(t) {
      this.enterInEditMode();
    }
    keydown(t) {
      t.target === this.div && t.key === "Enter" && (this.enterInEditMode(), t.preventDefault());
    }
    editorDivKeydown(t) {
      _Q._keyboardManager.exec(this, t);
    }
    editorDivFocus(t) {
      this.isEditing = true;
    }
    editorDivBlur(t) {
      this.isEditing = false;
    }
    editorDivInput(t) {
      this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
      this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
      this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", true);
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      this.width && (t = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", __privateGet(this, _s20)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = true;
      const { style: s } = this.editorDiv;
      if (s.fontSize = `calc(${__privateGet(this, _r11)}px * var(--scale-factor))`, s.color = __privateGet(this, _t39), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), le(this, this.div, [
        "dblclick",
        "keydown"
      ]), this.width) {
        const [i, n] = this.parentDimensions;
        if (this.annotationElementId) {
          const { position: r } = this._initialData;
          let [a, o] = this.getInitialTranslation();
          [a, o] = this.pageTranslationToScreen(a, o);
          const [l, h] = this.pageDimensions, [d, u] = this.pageTranslation;
          let f, p;
          switch (this.rotation) {
            case 0:
              f = t + (r[0] - d) / l, p = e + this.height - (r[1] - u) / h;
              break;
            case 90:
              f = t + (r[0] - d) / l, p = e - (r[1] - u) / h, [a, o] = [
                o,
                -a
              ];
              break;
            case 180:
              f = t - this.width + (r[0] - d) / l, p = e - (r[1] - u) / h, [a, o] = [
                -a,
                -o
              ];
              break;
            case 270:
              f = t + (r[0] - d - this.height * h) / l, p = e + (r[1] - u - this.width * l) / h, [a, o] = [
                -o,
                a
              ];
              break;
          }
          this.setAt(f * i, p * n, a, o);
        } else this.setAt(t * i, e * n, this.width * i, this.height * n);
        __privateMethod(this, _Q_instances, u_fn3).call(this), this._isDraggable = true, this.editorDiv.contentEditable = false;
      } else this._isDraggable = false, this.editorDiv.contentEditable = true;
      return this.div;
    }
    editorDivPaste(t) {
      var _a9, _b6, _c15;
      const e = t.clipboardData || window.clipboardData, { types: s } = e;
      if (s.length === 1 && s[0] === "text/plain") return;
      t.preventDefault();
      const i = __privateMethod(_a9 = _Q, _Q_static, f_fn3).call(_a9, e.getData("text") || "").replaceAll(re, `
`);
      if (!i) return;
      const n = window.getSelection();
      if (!n.rangeCount) return;
      this.editorDiv.normalize(), n.deleteFromDocument();
      const r = n.getRangeAt(0);
      if (!i.includes(`
`)) {
        r.insertNode(document.createTextNode(i)), this.editorDiv.normalize(), n.collapseToStart();
        return;
      }
      const { startContainer: a, startOffset: o } = r, l = [], h = [];
      if (a.nodeType === Node.TEXT_NODE) {
        const f = a.parentElement;
        if (h.push(a.nodeValue.slice(o).replaceAll(re, "")), f !== this.editorDiv) {
          let p = l;
          for (const g of this.editorDiv.childNodes) {
            if (g === f) {
              p = h;
              continue;
            }
            p.push(__privateMethod(_b6 = _Q, _Q_static, h_fn2).call(_b6, g));
          }
        }
        l.push(a.nodeValue.slice(0, o).replaceAll(re, ""));
      } else if (a === this.editorDiv) {
        let f = l, p = 0;
        for (const g of this.editorDiv.childNodes) p++ === o && (f = h), f.push(__privateMethod(_c15 = _Q, _Q_static, h_fn2).call(_c15, g));
      }
      __privateSet(this, _e26, `${l.join(`
`)}${i}${h.join(`
`)}`), __privateMethod(this, _Q_instances, u_fn3).call(this);
      const d = new Range();
      let u = l.reduce((f, p) => f + p.length, 0);
      for (const { firstChild: f } of this.editorDiv.childNodes) if (f.nodeType === Node.TEXT_NODE) {
        const p = f.nodeValue.length;
        if (u <= p) {
          d.setStart(f, u), d.setEnd(f, u);
          break;
        }
        u -= p;
      }
      n.removeAllRanges(), n.addRange(d);
    }
    get contentDiv() {
      return this.editorDiv;
    }
    static async deserialize(t, e, s) {
      var _a9;
      let i = null;
      if (t instanceof Hs) {
        const { data: { defaultAppearanceData: { fontSize: r, fontColor: a }, rect: o, rotation: l, id: h, popupRef: d }, textContent: u, textPosition: f, parent: { page: { pageNumber: p } } } = t;
        if (!u || u.length === 0) return null;
        i = t = {
          annotationType: L.FREETEXT,
          color: Array.from(a),
          fontSize: r,
          value: u.join(`
`),
          position: f,
          pageIndex: p - 1,
          rect: o.slice(0),
          rotation: l,
          id: h,
          deleted: false,
          popupRef: d
        };
      }
      const n = await super.deserialize(t, e, s);
      return __privateSet(n, _r11, t.fontSize), __privateSet(n, _t39, C.makeHexColor(...t.color)), __privateSet(n, _e26, __privateMethod(_a9 = _Q, _Q_static, f_fn3).call(_a9, t.value)), n.annotationElementId = t.id || null, n._initialData = i, n;
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = _Q._internalPadding * this.parentScale, s = this.getRect(e, e), i = R._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : __privateGet(this, _t39)), n = {
        annotationType: L.FREETEXT,
        color: i,
        fontSize: __privateGet(this, _r11),
        value: __privateMethod(this, _Q_instances, d_fn3).call(this),
        pageIndex: this.pageIndex,
        rect: s,
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId
      };
      return t ? n : this.annotationElementId && !__privateMethod(this, _Q_instances, a_fn3).call(this, n) ? null : (n.id = this.annotationElementId, n);
    }
    renderAnnotationElement(t) {
      const e = super.renderAnnotationElement(t);
      if (this.deleted) return e;
      const { style: s } = e;
      s.fontSize = `calc(${__privateGet(this, _r11)}px * var(--scale-factor))`, s.color = __privateGet(this, _t39), e.replaceChildren();
      for (const n of __privateGet(this, _e26).split(`
`)) {
        const r = document.createElement("div");
        r.append(n ? document.createTextNode(n) : document.createElement("br")), e.append(r);
      }
      const i = _Q._internalPadding * this.parentScale;
      return t.updateEdited({
        rect: this.getRect(i, i),
        popupContent: __privateGet(this, _e26)
      }), e;
    }
    resetAnnotationElement(t) {
      super.resetAnnotationElement(t), t.resetEdited();
    }
  };
  _t39 = new WeakMap();
  _e26 = new WeakMap();
  _s20 = new WeakMap();
  _i15 = new WeakMap();
  _r11 = new WeakMap();
  _Q_instances = new WeakSet();
  n_fn4 = function(t) {
    const e = (i) => {
      this.editorDiv.style.fontSize = `calc(${i}px * var(--scale-factor))`, this.translate(0, -(i - __privateGet(this, _r11)) * this.parentScale), __privateSet(this, _r11, i), __privateMethod(this, _Q_instances, c_fn2).call(this);
    }, s = __privateGet(this, _r11);
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: O.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true
    });
  };
  l_fn2 = function(t) {
    const e = (i) => {
      __privateSet(this, _t39, this.editorDiv.style.color = i);
    }, s = __privateGet(this, _t39);
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: O.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  };
  o_fn2 = function() {
    var _a9;
    const t = [];
    this.editorDiv.normalize();
    let e = null;
    for (const s of this.editorDiv.childNodes) (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE && s.nodeName === "BR" || (t.push(__privateMethod(_a9 = _Q, _Q_static, h_fn2).call(_a9, s)), e = s);
    return t.join(`
`);
  };
  c_fn2 = function() {
    const [t, e] = this.parentDimensions;
    let s;
    if (this.isAttachedToDOM) s = this.div.getBoundingClientRect();
    else {
      const { currentLayer: i, div: n } = this, r = n.style.display, a = n.classList.contains("hidden");
      n.classList.remove("hidden"), n.style.display = "hidden", i.div.append(this.div), s = n.getBoundingClientRect(), n.remove(), n.style.display = r, n.classList.toggle("hidden", a);
    }
    this.rotation % 180 === this.parentRotation % 180 ? (this.width = s.width / t, this.height = s.height / e) : (this.width = s.height / t, this.height = s.width / e), this.fixAndSetPosition();
  };
  _Q_static = new WeakSet();
  h_fn2 = function(t) {
    return (t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText).replaceAll(re, "");
  };
  u_fn3 = function() {
    if (this.editorDiv.replaceChildren(), !!__privateGet(this, _e26)) for (const t of __privateGet(this, _e26).split(`
`)) {
      const e = document.createElement("div");
      e.append(t ? document.createTextNode(t) : document.createElement("br")), this.editorDiv.append(e);
    }
  };
  d_fn3 = function() {
    return __privateGet(this, _e26).replaceAll("\xA0", " ");
  };
  f_fn3 = function(t) {
    return t.replaceAll(" ", "\xA0");
  };
  a_fn3 = function(t) {
    const { value: e, fontSize: s, color: i, pageIndex: n } = this._initialData;
    return this._hasBeenMoved || t.value !== e || t.fontSize !== s || t.color.some((r, a) => r !== i[a]) || t.pageIndex !== n;
  };
  __privateAdd(_Q, _Q_static);
  __publicField(_Q, "_freeTextDefaultContent", "");
  __publicField(_Q, "_internalPadding", 0);
  __publicField(_Q, "_defaultColor", null);
  __publicField(_Q, "_defaultFontSize", 10);
  __publicField(_Q, "_type", "freetext");
  __publicField(_Q, "_editorType", L.FREETEXT);
  let Q = _Q;
  class E {
    toSVGPath() {
      H("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      H("Abstract getter `box` must be implemented.");
    }
    serialize(t, e) {
      H("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t, e, s, i, n, r) {
      r || (r = new Float32Array(t.length));
      for (let a = 0, o = t.length; a < o; a += 2) r[a] = e + t[a] * i, r[a + 1] = s + t[a + 1] * n;
      return r;
    }
    static _rescaleAndSwap(t, e, s, i, n, r) {
      r || (r = new Float32Array(t.length));
      for (let a = 0, o = t.length; a < o; a += 2) r[a] = e + t[a + 1] * i, r[a + 1] = s + t[a] * n;
      return r;
    }
    static _translate(t, e, s, i) {
      i || (i = new Float32Array(t.length));
      for (let n = 0, r = t.length; n < r; n += 2) i[n] = e + t[n], i[n + 1] = s + t[n + 1];
      return i;
    }
    static svgRound(t) {
      return Math.round(t * 1e4);
    }
    static _normalizePoint(t, e, s, i, n) {
      switch (n) {
        case 90:
          return [
            1 - e / s,
            t / i
          ];
        case 180:
          return [
            1 - t / s,
            1 - e / i
          ];
        case 270:
          return [
            e / s,
            1 - t / i
          ];
        default:
          return [
            t / s,
            e / i
          ];
      }
    }
    static _normalizePagePoint(t, e, s) {
      switch (s) {
        case 90:
          return [
            1 - e,
            t
          ];
        case 180:
          return [
            1 - t,
            1 - e
          ];
        case 270:
          return [
            e,
            1 - t
          ];
        default:
          return [
            t,
            e
          ];
      }
    }
    static createBezierPoints(t, e, s, i, n, r) {
      return [
        (t + 5 * s) / 6,
        (e + 5 * i) / 6,
        (5 * s + n) / 6,
        (5 * i + r) / 6,
        (s + n) / 2,
        (i + r) / 2
      ];
    }
  }
  __publicField(E, "PRECISION", 1e-4);
  const _Mt = class _Mt {
    constructor({ x: t, y: e }, s, i, n, r, a = 0) {
      __privateAdd(this, _Mt_instances);
      __privateAdd(this, _t40);
      __privateAdd(this, _e27, []);
      __privateAdd(this, _s21);
      __privateAdd(this, _i16);
      __privateAdd(this, _r12, []);
      __privateAdd(this, _n10, new Float32Array(18));
      __privateAdd(this, _l8);
      __privateAdd(this, _o7);
      __privateAdd(this, _c7);
      __privateAdd(this, _h7);
      __privateAdd(this, _u7);
      __privateAdd(this, _d6);
      __privateAdd(this, _f6, []);
      __privateSet(this, _t40, s), __privateSet(this, _d6, n * i), __privateSet(this, _i16, r), __privateGet(this, _n10).set([
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ], 6), __privateSet(this, _s21, a), __privateSet(this, _h7, __privateGet(_Mt, _a6) * i), __privateSet(this, _c7, __privateGet(_Mt, _m5) * i), __privateSet(this, _u7, i), __privateGet(this, _f6).push(t, e);
    }
    isEmpty() {
      return isNaN(__privateGet(this, _n10)[8]);
    }
    add({ x: t, y: e }) {
      var _a9;
      __privateSet(this, _l8, t), __privateSet(this, _o7, e);
      const [s, i, n, r] = __privateGet(this, _t40);
      let [a, o, l, h] = __privateGet(this, _n10).subarray(8, 12);
      const d = t - l, u = e - h, f = Math.hypot(d, u);
      if (f < __privateGet(this, _c7)) return false;
      const p = f - __privateGet(this, _h7), g = p / f, b = g * d, m = g * u;
      let A = a, _ = o;
      a = l, o = h, l += b, h += m, (_a9 = __privateGet(this, _f6)) == null ? void 0 : _a9.push(t, e);
      const y = -m / p, v = b / p, S = y * __privateGet(this, _d6), w = v * __privateGet(this, _d6);
      return __privateGet(this, _n10).set(__privateGet(this, _n10).subarray(2, 8), 0), __privateGet(this, _n10).set([
        l + S,
        h + w
      ], 4), __privateGet(this, _n10).set(__privateGet(this, _n10).subarray(14, 18), 12), __privateGet(this, _n10).set([
        l - S,
        h - w
      ], 16), isNaN(__privateGet(this, _n10)[6]) ? (__privateGet(this, _r12).length === 0 && (__privateGet(this, _n10).set([
        a + S,
        o + w
      ], 2), __privateGet(this, _r12).push(NaN, NaN, NaN, NaN, (a + S - s) / n, (o + w - i) / r), __privateGet(this, _n10).set([
        a - S,
        o - w
      ], 14), __privateGet(this, _e27).push(NaN, NaN, NaN, NaN, (a - S - s) / n, (o - w - i) / r)), __privateGet(this, _n10).set([
        A,
        _,
        a,
        o,
        l,
        h
      ], 6), !this.isEmpty()) : (__privateGet(this, _n10).set([
        A,
        _,
        a,
        o,
        l,
        h
      ], 6), Math.abs(Math.atan2(_ - o, A - a) - Math.atan2(m, b)) < Math.PI / 2 ? ([a, o, l, h] = __privateGet(this, _n10).subarray(2, 6), __privateGet(this, _r12).push(NaN, NaN, NaN, NaN, ((a + l) / 2 - s) / n, ((o + h) / 2 - i) / r), [a, o, A, _] = __privateGet(this, _n10).subarray(14, 18), __privateGet(this, _e27).push(NaN, NaN, NaN, NaN, ((A + a) / 2 - s) / n, ((_ + o) / 2 - i) / r), true) : ([A, _, a, o, l, h] = __privateGet(this, _n10).subarray(0, 6), __privateGet(this, _r12).push(((A + 5 * a) / 6 - s) / n, ((_ + 5 * o) / 6 - i) / r, ((5 * a + l) / 6 - s) / n, ((5 * o + h) / 6 - i) / r, ((a + l) / 2 - s) / n, ((o + h) / 2 - i) / r), [l, h, a, o, A, _] = __privateGet(this, _n10).subarray(12, 18), __privateGet(this, _e27).push(((A + 5 * a) / 6 - s) / n, ((_ + 5 * o) / 6 - i) / r, ((5 * a + l) / 6 - s) / n, ((5 * o + h) / 6 - i) / r, ((a + l) / 2 - s) / n, ((o + h) / 2 - i) / r), true));
    }
    toSVGPath() {
      if (this.isEmpty()) return "";
      const t = __privateGet(this, _r12), e = __privateGet(this, _e27);
      if (isNaN(__privateGet(this, _n10)[6]) && !this.isEmpty()) return __privateMethod(this, _Mt_instances, b_fn2).call(this);
      const s = [];
      s.push(`M${t[4]} ${t[5]}`);
      for (let i = 6; i < t.length; i += 6) isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
      __privateMethod(this, _Mt_instances, A_fn).call(this, s);
      for (let i = e.length - 6; i >= 6; i -= 6) isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
      return __privateMethod(this, _Mt_instances, y_fn2).call(this, s), s.join(" ");
    }
    newFreeDrawOutline(t, e, s, i, n, r) {
      return new Us(t, e, s, i, n, r);
    }
    getOutlines() {
      var _a9;
      const t = __privateGet(this, _r12), e = __privateGet(this, _e27), s = __privateGet(this, _n10), [i, n, r, a] = __privateGet(this, _t40), o = new Float32Array((((_a9 = __privateGet(this, _f6)) == null ? void 0 : _a9.length) ?? 0) + 2);
      for (let d = 0, u = o.length - 2; d < u; d += 2) o[d] = (__privateGet(this, _f6)[d] - i) / r, o[d + 1] = (__privateGet(this, _f6)[d + 1] - n) / a;
      if (o[o.length - 2] = (__privateGet(this, _l8) - i) / r, o[o.length - 1] = (__privateGet(this, _o7) - n) / a, isNaN(s[6]) && !this.isEmpty()) return __privateMethod(this, _Mt_instances, v_fn).call(this, o);
      const l = new Float32Array(__privateGet(this, _r12).length + 24 + __privateGet(this, _e27).length);
      let h = t.length;
      for (let d = 0; d < h; d += 2) {
        if (isNaN(t[d])) {
          l[d] = l[d + 1] = NaN;
          continue;
        }
        l[d] = t[d], l[d + 1] = t[d + 1];
      }
      h = __privateMethod(this, _Mt_instances, x_fn2).call(this, l, h);
      for (let d = e.length - 6; d >= 6; d -= 6) for (let u = 0; u < 6; u += 2) {
        if (isNaN(e[d + u])) {
          l[h] = l[h + 1] = NaN, h += 2;
          continue;
        }
        l[h] = e[d + u], l[h + 1] = e[d + u + 1], h += 2;
      }
      return __privateMethod(this, _Mt_instances, S_fn).call(this, l, h), this.newFreeDrawOutline(l, o, __privateGet(this, _t40), __privateGet(this, _u7), __privateGet(this, _s21), __privateGet(this, _i16));
    }
  };
  _t40 = new WeakMap();
  _e27 = new WeakMap();
  _s21 = new WeakMap();
  _i16 = new WeakMap();
  _r12 = new WeakMap();
  _n10 = new WeakMap();
  _l8 = new WeakMap();
  _o7 = new WeakMap();
  _c7 = new WeakMap();
  _h7 = new WeakMap();
  _u7 = new WeakMap();
  _d6 = new WeakMap();
  _f6 = new WeakMap();
  _a6 = new WeakMap();
  _p5 = new WeakMap();
  _m5 = new WeakMap();
  _Mt_instances = new WeakSet();
  g_fn2 = function() {
    const t = __privateGet(this, _n10).subarray(4, 6), e = __privateGet(this, _n10).subarray(16, 18), [s, i, n, r] = __privateGet(this, _t40);
    return [
      (__privateGet(this, _l8) + (t[0] - e[0]) / 2 - s) / n,
      (__privateGet(this, _o7) + (t[1] - e[1]) / 2 - i) / r,
      (__privateGet(this, _l8) + (e[0] - t[0]) / 2 - s) / n,
      (__privateGet(this, _o7) + (e[1] - t[1]) / 2 - i) / r
    ];
  };
  b_fn2 = function() {
    const [t, e, s, i] = __privateGet(this, _t40), [n, r, a, o] = __privateMethod(this, _Mt_instances, g_fn2).call(this);
    return `M${(__privateGet(this, _n10)[2] - t) / s} ${(__privateGet(this, _n10)[3] - e) / i} L${(__privateGet(this, _n10)[4] - t) / s} ${(__privateGet(this, _n10)[5] - e) / i} L${n} ${r} L${a} ${o} L${(__privateGet(this, _n10)[16] - t) / s} ${(__privateGet(this, _n10)[17] - e) / i} L${(__privateGet(this, _n10)[14] - t) / s} ${(__privateGet(this, _n10)[15] - e) / i} Z`;
  };
  y_fn2 = function(t) {
    const e = __privateGet(this, _e27);
    t.push(`L${e[4]} ${e[5]} Z`);
  };
  A_fn = function(t) {
    const [e, s, i, n] = __privateGet(this, _t40), r = __privateGet(this, _n10).subarray(4, 6), a = __privateGet(this, _n10).subarray(16, 18), [o, l, h, d] = __privateMethod(this, _Mt_instances, g_fn2).call(this);
    t.push(`L${(r[0] - e) / i} ${(r[1] - s) / n} L${o} ${l} L${h} ${d} L${(a[0] - e) / i} ${(a[1] - s) / n}`);
  };
  v_fn = function(t) {
    const e = __privateGet(this, _n10), [s, i, n, r] = __privateGet(this, _t40), [a, o, l, h] = __privateMethod(this, _Mt_instances, g_fn2).call(this), d = new Float32Array(36);
    return d.set([
      NaN,
      NaN,
      NaN,
      NaN,
      (e[2] - s) / n,
      (e[3] - i) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      (e[4] - s) / n,
      (e[5] - i) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      a,
      o,
      NaN,
      NaN,
      NaN,
      NaN,
      l,
      h,
      NaN,
      NaN,
      NaN,
      NaN,
      (e[16] - s) / n,
      (e[17] - i) / r,
      NaN,
      NaN,
      NaN,
      NaN,
      (e[14] - s) / n,
      (e[15] - i) / r
    ], 0), this.newFreeDrawOutline(d, t, __privateGet(this, _t40), __privateGet(this, _u7), __privateGet(this, _s21), __privateGet(this, _i16));
  };
  S_fn = function(t, e) {
    const s = __privateGet(this, _e27);
    return t.set([
      NaN,
      NaN,
      NaN,
      NaN,
      s[4],
      s[5]
    ], e), e += 6;
  };
  x_fn2 = function(t, e) {
    const s = __privateGet(this, _n10).subarray(4, 6), i = __privateGet(this, _n10).subarray(16, 18), [n, r, a, o] = __privateGet(this, _t40), [l, h, d, u] = __privateMethod(this, _Mt_instances, g_fn2).call(this);
    return t.set([
      NaN,
      NaN,
      NaN,
      NaN,
      (s[0] - n) / a,
      (s[1] - r) / o,
      NaN,
      NaN,
      NaN,
      NaN,
      l,
      h,
      NaN,
      NaN,
      NaN,
      NaN,
      d,
      u,
      NaN,
      NaN,
      NaN,
      NaN,
      (i[0] - n) / a,
      (i[1] - r) / o
    ], e), e += 24;
  };
  __privateAdd(_Mt, _a6, 8);
  __privateAdd(_Mt, _p5, 2);
  __privateAdd(_Mt, _m5, __privateGet(_Mt, _a6) + __privateGet(_Mt, _p5));
  let Mt = _Mt;
  class Us extends E {
    constructor(t, e, s, i, n, r) {
      super();
      __privateAdd(this, _Us_instances);
      __privateAdd(this, _t41);
      __privateAdd(this, _e28, new Float32Array(4));
      __privateAdd(this, _s22);
      __privateAdd(this, _i17);
      __privateAdd(this, _r13);
      __privateAdd(this, _n11);
      __privateAdd(this, _l9);
      __privateSet(this, _l9, t), __privateSet(this, _r13, e), __privateSet(this, _t41, s), __privateSet(this, _n11, i), __privateSet(this, _s22, n), __privateSet(this, _i17, r), this.lastPoint = [
        NaN,
        NaN
      ], __privateMethod(this, _Us_instances, o_fn3).call(this, r);
      const [a, o, l, h] = __privateGet(this, _e28);
      for (let d = 0, u = t.length; d < u; d += 2) t[d] = (t[d] - a) / l, t[d + 1] = (t[d + 1] - o) / h;
      for (let d = 0, u = e.length; d < u; d += 2) e[d] = (e[d] - a) / l, e[d + 1] = (e[d + 1] - o) / h;
    }
    toSVGPath() {
      const t = [
        `M${__privateGet(this, _l9)[4]} ${__privateGet(this, _l9)[5]}`
      ];
      for (let e = 6, s = __privateGet(this, _l9).length; e < s; e += 6) {
        if (isNaN(__privateGet(this, _l9)[e])) {
          t.push(`L${__privateGet(this, _l9)[e + 4]} ${__privateGet(this, _l9)[e + 5]}`);
          continue;
        }
        t.push(`C${__privateGet(this, _l9)[e]} ${__privateGet(this, _l9)[e + 1]} ${__privateGet(this, _l9)[e + 2]} ${__privateGet(this, _l9)[e + 3]} ${__privateGet(this, _l9)[e + 4]} ${__privateGet(this, _l9)[e + 5]}`);
      }
      return t.push("Z"), t.join(" ");
    }
    serialize([t, e, s, i], n) {
      const r = s - t, a = i - e;
      let o, l;
      switch (n) {
        case 0:
          o = E._rescale(__privateGet(this, _l9), t, i, r, -a), l = E._rescale(__privateGet(this, _r13), t, i, r, -a);
          break;
        case 90:
          o = E._rescaleAndSwap(__privateGet(this, _l9), t, e, r, a), l = E._rescaleAndSwap(__privateGet(this, _r13), t, e, r, a);
          break;
        case 180:
          o = E._rescale(__privateGet(this, _l9), s, e, -r, a), l = E._rescale(__privateGet(this, _r13), s, e, -r, a);
          break;
        case 270:
          o = E._rescaleAndSwap(__privateGet(this, _l9), s, i, -r, -a), l = E._rescaleAndSwap(__privateGet(this, _r13), s, i, -r, -a);
          break;
      }
      return {
        outline: Array.from(o),
        points: [
          Array.from(l)
        ]
      };
    }
    get box() {
      return __privateGet(this, _e28);
    }
    newOutliner(t, e, s, i, n, r = 0) {
      return new Mt(t, e, s, i, n, r);
    }
    getNewOutline(t, e) {
      const [s, i, n, r] = __privateGet(this, _e28), [a, o, l, h] = __privateGet(this, _t41), d = n * l, u = r * h, f = s * l + a, p = i * h + o, g = this.newOutliner({
        x: __privateGet(this, _r13)[0] * d + f,
        y: __privateGet(this, _r13)[1] * u + p
      }, __privateGet(this, _t41), __privateGet(this, _n11), t, __privateGet(this, _i17), e ?? __privateGet(this, _s22));
      for (let b = 2; b < __privateGet(this, _r13).length; b += 2) g.add({
        x: __privateGet(this, _r13)[b] * d + f,
        y: __privateGet(this, _r13)[b + 1] * u + p
      });
      return g.getOutlines();
    }
  }
  _t41 = new WeakMap();
  _e28 = new WeakMap();
  _s22 = new WeakMap();
  _i17 = new WeakMap();
  _r13 = new WeakMap();
  _n11 = new WeakMap();
  _l9 = new WeakMap();
  _Us_instances = new WeakSet();
  o_fn3 = function(t) {
    const e = __privateGet(this, _l9);
    let s = e[4], i = e[5], n = s, r = i, a = s, o = i, l = s, h = i;
    const d = t ? Math.max : Math.min;
    for (let f = 6, p = e.length; f < p; f += 6) {
      if (isNaN(e[f])) n = Math.min(n, e[f + 4]), r = Math.min(r, e[f + 5]), a = Math.max(a, e[f + 4]), o = Math.max(o, e[f + 5]), h < e[f + 5] ? (l = e[f + 4], h = e[f + 5]) : h === e[f + 5] && (l = d(l, e[f + 4]));
      else {
        const g = C.bezierBoundingBox(s, i, ...e.slice(f, f + 6));
        n = Math.min(n, g[0]), r = Math.min(r, g[1]), a = Math.max(a, g[2]), o = Math.max(o, g[3]), h < g[3] ? (l = g[2], h = g[3]) : h === g[3] && (l = d(l, g[2]));
      }
      s = e[f + 4], i = e[f + 5];
    }
    const u = __privateGet(this, _e28);
    u[0] = n - __privateGet(this, _s22), u[1] = r - __privateGet(this, _s22), u[2] = a - n + 2 * __privateGet(this, _s22), u[3] = o - r + 2 * __privateGet(this, _s22), this.lastPoint = [
      l,
      h
    ];
  };
  class Ie {
    constructor(t, e = 0, s = 0, i = true) {
      __privateAdd(this, _Ie_instances);
      __privateAdd(this, _t42);
      __privateAdd(this, _e29);
      __privateAdd(this, _s23, []);
      __privateAdd(this, _i18, []);
      let n = 1 / 0, r = -1 / 0, a = 1 / 0, o = -1 / 0;
      const l = 10 ** -4;
      for (const { x: b, y: m, width: A, height: _ } of t) {
        const y = Math.floor((b - e) / l) * l, v = Math.ceil((b + A + e) / l) * l, S = Math.floor((m - e) / l) * l, w = Math.ceil((m + _ + e) / l) * l, T = [
          y,
          S,
          w,
          true
        ], M = [
          v,
          S,
          w,
          false
        ];
        __privateGet(this, _s23).push(T, M), n = Math.min(n, y), r = Math.max(r, v), a = Math.min(a, S), o = Math.max(o, w);
      }
      const h = r - n + 2 * s, d = o - a + 2 * s, u = n - s, f = a - s, p = __privateGet(this, _s23).at(i ? -1 : -2), g = [
        p[0],
        p[2]
      ];
      for (const b of __privateGet(this, _s23)) {
        const [m, A, _] = b;
        b[0] = (m - u) / h, b[1] = (A - f) / d, b[2] = (_ - f) / d;
      }
      __privateSet(this, _t42, new Float32Array([
        u,
        f,
        h,
        d
      ])), __privateSet(this, _e29, g);
    }
    getOutlines() {
      __privateGet(this, _s23).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
      const t = [];
      for (const e of __privateGet(this, _s23)) e[3] ? (t.push(...__privateMethod(this, _Ie_instances, c_fn3).call(this, e)), __privateMethod(this, _Ie_instances, l_fn3).call(this, e)) : (__privateMethod(this, _Ie_instances, o_fn4).call(this, e), t.push(...__privateMethod(this, _Ie_instances, c_fn3).call(this, e)));
      return __privateMethod(this, _Ie_instances, r_fn5).call(this, t);
    }
  }
  _t42 = new WeakMap();
  _e29 = new WeakMap();
  _s23 = new WeakMap();
  _i18 = new WeakMap();
  _Ie_instances = new WeakSet();
  r_fn5 = function(t) {
    const e = [], s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const [a, o, l] = r;
      e.push([
        a,
        o,
        r
      ], [
        a,
        l,
        r
      ]);
    }
    e.sort((r, a) => r[1] - a[1] || r[0] - a[0]);
    for (let r = 0, a = e.length; r < a; r += 2) {
      const o = e[r][2], l = e[r + 1][2];
      o.push(l), l.push(o), s.add(o), s.add(l);
    }
    const i = [];
    let n;
    for (; s.size > 0; ) {
      const r = s.values().next().value;
      let [a, o, l, h, d] = r;
      s.delete(r);
      let u = a, f = o;
      for (n = [
        a,
        l
      ], i.push(n); ; ) {
        let p;
        if (s.has(h)) p = h;
        else if (s.has(d)) p = d;
        else break;
        s.delete(p), [a, o, l, h, d] = p, u !== a && (n.push(u, f, a, f === o ? o : l), u = a), f = f === o ? l : o;
      }
      n.push(u, f);
    }
    return new Gn(i, __privateGet(this, _t42), __privateGet(this, _e29));
  };
  n_fn5 = function(t) {
    const e = __privateGet(this, _i18);
    let s = 0, i = e.length - 1;
    for (; s <= i; ) {
      const n = s + i >> 1, r = e[n][0];
      if (r === t) return n;
      r < t ? s = n + 1 : i = n - 1;
    }
    return i + 1;
  };
  l_fn3 = function([, t, e]) {
    const s = __privateMethod(this, _Ie_instances, n_fn5).call(this, t);
    __privateGet(this, _i18).splice(s, 0, [
      t,
      e
    ]);
  };
  o_fn4 = function([, t, e]) {
    const s = __privateMethod(this, _Ie_instances, n_fn5).call(this, t);
    for (let i = s; i < __privateGet(this, _i18).length; i++) {
      const [n, r] = __privateGet(this, _i18)[i];
      if (n !== t) break;
      if (n === t && r === e) {
        __privateGet(this, _i18).splice(i, 1);
        return;
      }
    }
    for (let i = s - 1; i >= 0; i--) {
      const [n, r] = __privateGet(this, _i18)[i];
      if (n !== t) break;
      if (n === t && r === e) {
        __privateGet(this, _i18).splice(i, 1);
        return;
      }
    }
  };
  c_fn3 = function(t) {
    const [e, s, i] = t, n = [
      [
        e,
        s,
        i
      ]
    ], r = __privateMethod(this, _Ie_instances, n_fn5).call(this, i);
    for (let a = 0; a < r; a++) {
      const [o, l] = __privateGet(this, _i18)[a];
      for (let h = 0, d = n.length; h < d; h++) {
        const [, u, f] = n[h];
        if (!(l <= u || f <= o)) {
          if (u >= o) {
            if (f > l) n[h][1] = l;
            else {
              if (d === 1) return [];
              n.splice(h, 1), h--, d--;
            }
            continue;
          }
          n[h][2] = o, f > l && n.push([
            e,
            l,
            f
          ]);
        }
      }
    }
    return n;
  };
  class Gn extends E {
    constructor(t, e, s) {
      super();
      __privateAdd(this, _t43);
      __privateAdd(this, _e30);
      __privateSet(this, _e30, t), __privateSet(this, _t43, e), this.lastPoint = s;
    }
    toSVGPath() {
      const t = [];
      for (const e of __privateGet(this, _e30)) {
        let [s, i] = e;
        t.push(`M${s} ${i}`);
        for (let n = 2; n < e.length; n += 2) {
          const r = e[n], a = e[n + 1];
          r === s ? (t.push(`V${a}`), i = a) : a === i && (t.push(`H${r}`), s = r);
        }
        t.push("Z");
      }
      return t.join(" ");
    }
    serialize([t, e, s, i], n) {
      const r = [], a = s - t, o = i - e;
      for (const l of __privateGet(this, _e30)) {
        const h = new Array(l.length);
        for (let d = 0; d < l.length; d += 2) h[d] = t + l[d] * a, h[d + 1] = i - l[d + 1] * o;
        r.push(h);
      }
      return r;
    }
    get box() {
      return __privateGet(this, _t43);
    }
    get classNamesForOutlining() {
      return [
        "highlightOutline"
      ];
    }
  }
  _t43 = new WeakMap();
  _e30 = new WeakMap();
  class Le extends Mt {
    newFreeDrawOutline(t, e, s, i, n, r) {
      return new zn(t, e, s, i, n, r);
    }
  }
  class zn extends Us {
    newOutliner(t, e, s, i, n, r = 0) {
      return new Le(t, e, s, i, n, r);
    }
  }
  const _mt = class _mt {
    constructor({ editor: t = null, uiManager: e = null }) {
      __privateAdd(this, _mt_instances);
      __privateAdd(this, _t44, null);
      __privateAdd(this, _e31, null);
      __privateAdd(this, _s24);
      __privateAdd(this, _i19, null);
      __privateAdd(this, _r14, false);
      __privateAdd(this, _n12, false);
      __privateAdd(this, _l10, null);
      __privateAdd(this, _o8);
      __privateAdd(this, _c8, null);
      __privateAdd(this, _h8, null);
      __privateAdd(this, _u8);
      var _a9;
      t ? (__privateSet(this, _n12, false), __privateSet(this, _u8, O.HIGHLIGHT_COLOR), __privateSet(this, _l10, t)) : (__privateSet(this, _n12, true), __privateSet(this, _u8, O.HIGHLIGHT_DEFAULT_COLOR)), __privateSet(this, _h8, (t == null ? void 0 : t._uiManager) || e), __privateSet(this, _o8, __privateGet(this, _h8)._eventBus), __privateSet(this, _s24, (t == null ? void 0 : t.color) || ((_a9 = __privateGet(this, _h8)) == null ? void 0 : _a9.highlightColors.values().next().value) || "#FFFF98"), __privateGet(_mt, _d7) || __privateSet(_mt, _d7, Object.freeze({
        blue: "pdfjs-editor-colorpicker-blue",
        green: "pdfjs-editor-colorpicker-green",
        pink: "pdfjs-editor-colorpicker-pink",
        red: "pdfjs-editor-colorpicker-red",
        yellow: "pdfjs-editor-colorpicker-yellow"
      }));
    }
    static get _keyboardManager() {
      return F(this, "_keyboardManager", new te([
        [
          [
            "Escape",
            "mac+Escape"
          ],
          _mt.prototype._hideDropdownFromKeyboard
        ],
        [
          [
            " ",
            "mac+ "
          ],
          _mt.prototype._colorSelectFromKeyboard
        ],
        [
          [
            "ArrowDown",
            "ArrowRight",
            "mac+ArrowDown",
            "mac+ArrowRight"
          ],
          _mt.prototype._moveToNext
        ],
        [
          [
            "ArrowUp",
            "ArrowLeft",
            "mac+ArrowUp",
            "mac+ArrowLeft"
          ],
          _mt.prototype._moveToPrevious
        ],
        [
          [
            "Home",
            "mac+Home"
          ],
          _mt.prototype._moveToBeginning
        ],
        [
          [
            "End",
            "mac+End"
          ],
          _mt.prototype._moveToEnd
        ]
      ]));
    }
    renderButton() {
      const t = __privateSet(this, _t44, document.createElement("button"));
      t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.setAttribute("aria-haspopup", true);
      const e = __privateGet(this, _h8)._signal;
      t.addEventListener("click", __privateMethod(this, _mt_instances, m_fn2).bind(this), {
        signal: e
      }), t.addEventListener("keydown", __privateMethod(this, _mt_instances, p_fn3).bind(this), {
        signal: e
      });
      const s = __privateSet(this, _e31, document.createElement("span"));
      return s.className = "swatch", s.setAttribute("aria-hidden", true), s.style.backgroundColor = __privateGet(this, _s24), t.append(s), t;
    }
    renderMainDropdown() {
      const t = __privateSet(this, _i19, __privateMethod(this, _mt_instances, f_fn4).call(this));
      return t.setAttribute("aria-orientation", "horizontal"), t.setAttribute("aria-labelledby", "highlightColorPickerLabel"), t;
    }
    _colorSelectFromKeyboard(t) {
      if (t.target === __privateGet(this, _t44)) {
        __privateMethod(this, _mt_instances, m_fn2).call(this, t);
        return;
      }
      const e = t.target.getAttribute("data-color");
      e && __privateMethod(this, _mt_instances, a_fn4).call(this, e, t);
    }
    _moveToNext(t) {
      var _a9, _b6;
      if (!__privateGet(this, _mt_instances, b_get)) {
        __privateMethod(this, _mt_instances, m_fn2).call(this, t);
        return;
      }
      if (t.target === __privateGet(this, _t44)) {
        (_a9 = __privateGet(this, _i19).firstChild) == null ? void 0 : _a9.focus();
        return;
      }
      (_b6 = t.target.nextSibling) == null ? void 0 : _b6.focus();
    }
    _moveToPrevious(t) {
      var _a9, _b6;
      if (t.target === ((_a9 = __privateGet(this, _i19)) == null ? void 0 : _a9.firstChild) || t.target === __privateGet(this, _t44)) {
        __privateGet(this, _mt_instances, b_get) && this._hideDropdownFromKeyboard();
        return;
      }
      __privateGet(this, _mt_instances, b_get) || __privateMethod(this, _mt_instances, m_fn2).call(this, t), (_b6 = t.target.previousSibling) == null ? void 0 : _b6.focus();
    }
    _moveToBeginning(t) {
      var _a9;
      if (!__privateGet(this, _mt_instances, b_get)) {
        __privateMethod(this, _mt_instances, m_fn2).call(this, t);
        return;
      }
      (_a9 = __privateGet(this, _i19).firstChild) == null ? void 0 : _a9.focus();
    }
    _moveToEnd(t) {
      var _a9;
      if (!__privateGet(this, _mt_instances, b_get)) {
        __privateMethod(this, _mt_instances, m_fn2).call(this, t);
        return;
      }
      (_a9 = __privateGet(this, _i19).lastChild) == null ? void 0 : _a9.focus();
    }
    hideDropdown() {
      var _a9, _b6;
      (_a9 = __privateGet(this, _i19)) == null ? void 0 : _a9.classList.add("hidden"), (_b6 = __privateGet(this, _c8)) == null ? void 0 : _b6.abort(), __privateSet(this, _c8, null);
    }
    _hideDropdownFromKeyboard() {
      var _a9;
      if (!__privateGet(this, _n12)) {
        if (!__privateGet(this, _mt_instances, b_get)) {
          (_a9 = __privateGet(this, _l10)) == null ? void 0 : _a9.unselect();
          return;
        }
        this.hideDropdown(), __privateGet(this, _t44).focus({
          preventScroll: true,
          focusVisible: __privateGet(this, _r14)
        });
      }
    }
    updateColor(t) {
      if (__privateGet(this, _e31) && (__privateGet(this, _e31).style.backgroundColor = t), !__privateGet(this, _i19)) return;
      const e = __privateGet(this, _h8).highlightColors.values();
      for (const s of __privateGet(this, _i19).children) s.setAttribute("aria-selected", e.next().value === t);
    }
    destroy() {
      var _a9, _b6;
      (_a9 = __privateGet(this, _t44)) == null ? void 0 : _a9.remove(), __privateSet(this, _t44, null), __privateSet(this, _e31, null), (_b6 = __privateGet(this, _i19)) == null ? void 0 : _b6.remove(), __privateSet(this, _i19, null);
    }
  };
  _t44 = new WeakMap();
  _e31 = new WeakMap();
  _s24 = new WeakMap();
  _i19 = new WeakMap();
  _r14 = new WeakMap();
  _n12 = new WeakMap();
  _l10 = new WeakMap();
  _o8 = new WeakMap();
  _c8 = new WeakMap();
  _h8 = new WeakMap();
  _u8 = new WeakMap();
  _d7 = new WeakMap();
  _mt_instances = new WeakSet();
  f_fn4 = function() {
    const t = document.createElement("div"), e = __privateGet(this, _h8)._signal;
    t.addEventListener("contextmenu", At, {
      signal: e
    }), t.className = "dropdown", t.role = "listbox", t.setAttribute("aria-multiselectable", false), t.setAttribute("aria-orientation", "vertical"), t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
    for (const [s, i] of __privateGet(this, _h8).highlightColors) {
      const n = document.createElement("button");
      n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", i), n.title = s, n.setAttribute("data-l10n-id", __privateGet(_mt, _d7)[s]);
      const r = document.createElement("span");
      n.append(r), r.className = "swatch", r.style.backgroundColor = i, n.setAttribute("aria-selected", i === __privateGet(this, _s24)), n.addEventListener("click", __privateMethod(this, _mt_instances, a_fn4).bind(this, i), {
        signal: e
      }), t.append(n);
    }
    return t.addEventListener("keydown", __privateMethod(this, _mt_instances, p_fn3).bind(this), {
      signal: e
    }), t;
  };
  a_fn4 = function(t, e) {
    e.stopPropagation(), __privateGet(this, _o8).dispatch("switchannotationeditorparams", {
      source: this,
      type: __privateGet(this, _u8),
      value: t
    });
  };
  p_fn3 = function(t) {
    _mt._keyboardManager.exec(this, t);
  };
  m_fn2 = function(t) {
    if (__privateGet(this, _mt_instances, b_get)) {
      this.hideDropdown();
      return;
    }
    if (__privateSet(this, _r14, t.detail === 0), __privateGet(this, _c8) || (__privateSet(this, _c8, new AbortController()), window.addEventListener("pointerdown", __privateMethod(this, _mt_instances, g_fn3).bind(this), {
      signal: __privateGet(this, _h8).combinedSignal(__privateGet(this, _c8))
    })), __privateGet(this, _i19)) {
      __privateGet(this, _i19).classList.remove("hidden");
      return;
    }
    const e = __privateSet(this, _i19, __privateMethod(this, _mt_instances, f_fn4).call(this));
    __privateGet(this, _t44).append(e);
  };
  g_fn3 = function(t) {
    var _a9;
    ((_a9 = __privateGet(this, _i19)) == null ? void 0 : _a9.contains(t.target)) || this.hideDropdown();
  };
  b_get = function() {
    return __privateGet(this, _i19) && !__privateGet(this, _i19).classList.contains("hidden");
  };
  __privateAdd(_mt, _d7, null);
  let mt = _mt;
  const _j2 = class _j2 extends R {
    constructor(t) {
      super({
        ...t,
        name: "highlightEditor"
      });
      __privateAdd(this, _j_instances);
      __privateAdd(this, _t45, null);
      __privateAdd(this, _e32, 0);
      __privateAdd(this, _s25);
      __privateAdd(this, _i20, null);
      __privateAdd(this, _r15, null);
      __privateAdd(this, _n13, null);
      __privateAdd(this, _l11, null);
      __privateAdd(this, _o9, 0);
      __privateAdd(this, _c9, null);
      __privateAdd(this, _h9, null);
      __privateAdd(this, _u9, null);
      __privateAdd(this, _d8, false);
      __privateAdd(this, _f7, null);
      __privateAdd(this, _a7);
      __privateAdd(this, _p6, null);
      __privateAdd(this, _m6, "");
      __privateAdd(this, _g5);
      __privateAdd(this, _b5, "");
      this.color = t.color || _j2._defaultColor, __privateSet(this, _g5, t.thickness || _j2._defaultThickness), __privateSet(this, _a7, t.opacity || _j2._defaultOpacity), __privateSet(this, _s25, t.boxes || null), __privateSet(this, _b5, t.methodOfCreation || ""), __privateSet(this, _m6, t.text || ""), this._isDraggable = false, t.highlightId > -1 ? (__privateSet(this, _d8, true), __privateMethod(this, _j_instances, A_fn2).call(this, t), __privateMethod(this, _j_instances, k_fn4).call(this)) : __privateGet(this, _s25) && (__privateSet(this, _t45, t.anchorNode), __privateSet(this, _e32, t.anchorOffset), __privateSet(this, _l11, t.focusNode), __privateSet(this, _o9, t.focusOffset), __privateMethod(this, _j_instances, y_fn3).call(this), __privateMethod(this, _j_instances, k_fn4).call(this), this.rotate(this.rotation));
    }
    static get _keyboardManager() {
      const t = _j2.prototype;
      return F(this, "_keyboardManager", new te([
        [
          [
            "ArrowLeft",
            "mac+ArrowLeft"
          ],
          t._moveCaret,
          {
            args: [
              0
            ]
          }
        ],
        [
          [
            "ArrowRight",
            "mac+ArrowRight"
          ],
          t._moveCaret,
          {
            args: [
              1
            ]
          }
        ],
        [
          [
            "ArrowUp",
            "mac+ArrowUp"
          ],
          t._moveCaret,
          {
            args: [
              2
            ]
          }
        ],
        [
          [
            "ArrowDown",
            "mac+ArrowDown"
          ],
          t._moveCaret,
          {
            args: [
              3
            ]
          }
        ]
      ]));
    }
    get telemetryInitialData() {
      return {
        action: "added",
        type: __privateGet(this, _d8) ? "free_highlight" : "highlight",
        color: this._uiManager.highlightColorNames.get(this.color),
        thickness: __privateGet(this, _g5),
        methodOfCreation: __privateGet(this, _b5)
      };
    }
    get telemetryFinalData() {
      return {
        type: "highlight",
        color: this._uiManager.highlightColorNames.get(this.color)
      };
    }
    static computeTelemetryFinalData(t) {
      return {
        numberOfColors: t.get("color").size
      };
    }
    static initialize(t, e) {
      var _a9;
      R.initialize(t, e), _j2._defaultColor || (_j2._defaultColor = ((_a9 = e.highlightColors) == null ? void 0 : _a9.values().next().value) || "#fff066");
    }
    static updateDefaultParams(t, e) {
      switch (t) {
        case O.HIGHLIGHT_DEFAULT_COLOR:
          _j2._defaultColor = e;
          break;
        case O.HIGHLIGHT_THICKNESS:
          _j2._defaultThickness = e;
          break;
      }
    }
    translateInPage(t, e) {
    }
    get toolbarPosition() {
      return __privateGet(this, _f7);
    }
    updateParams(t, e) {
      switch (t) {
        case O.HIGHLIGHT_COLOR:
          __privateMethod(this, _j_instances, v_fn2).call(this, e);
          break;
        case O.HIGHLIGHT_THICKNESS:
          __privateMethod(this, _j_instances, S_fn2).call(this, e);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [
          O.HIGHLIGHT_DEFAULT_COLOR,
          _j2._defaultColor
        ],
        [
          O.HIGHLIGHT_THICKNESS,
          _j2._defaultThickness
        ]
      ];
    }
    get propertiesToUpdate() {
      return [
        [
          O.HIGHLIGHT_COLOR,
          this.color || _j2._defaultColor
        ],
        [
          O.HIGHLIGHT_THICKNESS,
          __privateGet(this, _g5) || _j2._defaultThickness
        ],
        [
          O.HIGHLIGHT_FREE,
          __privateGet(this, _d8)
        ]
      ];
    }
    async addEditToolbar() {
      const t = await super.addEditToolbar();
      return t ? (this._uiManager.highlightColors && (__privateSet(this, _r15, new mt({
        editor: this
      })), t.addColorPicker(__privateGet(this, _r15))), t) : null;
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(__privateMethod(this, _j_instances, M_fn3).call(this));
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    getRect(t, e) {
      return super.getRect(t, e, __privateMethod(this, _j_instances, M_fn3).call(this));
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), t && this.div.focus();
    }
    remove() {
      __privateMethod(this, _j_instances, T_fn3).call(this), this._reportTelemetry({
        action: "deleted"
      }), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (__privateMethod(this, _j_instances, k_fn4).call(this), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      var _a9;
      let e = false;
      this.parent && !t ? __privateMethod(this, _j_instances, T_fn3).call(this) : t && (__privateMethod(this, _j_instances, k_fn4).call(this, t), e = !this.parent && ((_a9 = this.div) == null ? void 0 : _a9.classList.contains("selectedEditor"))), super.setParent(t), this.show(this._isVisible), e && this.select();
    }
    rotate(t) {
      var _a9, _b6, _c15;
      const { drawLayer: e } = this.parent;
      let s;
      __privateGet(this, _d8) ? (t = (t - this.rotation + 360) % 360, s = __privateMethod(_a9 = _j2, _j_static, w_fn4).call(_a9, __privateGet(this, _h9).box, t)) : s = __privateMethod(_b6 = _j2, _j_static, w_fn4).call(_b6, [
        this.x,
        this.y,
        this.width,
        this.height
      ], t), e.updateProperties(__privateGet(this, _u9), {
        bbox: s,
        root: {
          "data-main-rotation": t
        }
      }), e.updateProperties(__privateGet(this, _p6), {
        bbox: __privateMethod(_c15 = _j2, _j_static, w_fn4).call(_c15, __privateGet(this, _n13).box, t),
        root: {
          "data-main-rotation": t
        }
      });
    }
    render() {
      if (this.div) return this.div;
      const t = super.render();
      __privateGet(this, _m6) && (t.setAttribute("aria-label", __privateGet(this, _m6)), t.setAttribute("role", "mark")), __privateGet(this, _d8) ? t.classList.add("free") : this.div.addEventListener("keydown", __privateMethod(this, _j_instances, P_fn4).bind(this), {
        signal: this._uiManager._signal
      });
      const e = __privateSet(this, _c9, document.createElement("div"));
      t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal", e.style.clipPath = __privateGet(this, _i20);
      const [s, i] = this.parentDimensions;
      return this.setDims(this.width * s, this.height * i), le(this, __privateGet(this, _c9), [
        "pointerover",
        "pointerleave"
      ]), this.enableEditing(), t;
    }
    pointerover() {
      var _a9;
      this.isSelected || ((_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(__privateGet(this, _p6), {
        rootClass: {
          hovered: true
        }
      }));
    }
    pointerleave() {
      var _a9;
      this.isSelected || ((_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(__privateGet(this, _p6), {
        rootClass: {
          hovered: false
        }
      }));
    }
    _moveCaret(t) {
      switch (this.parent.unselect(this), t) {
        case 0:
        case 2:
          __privateMethod(this, _j_instances, C_fn4).call(this, true);
          break;
        case 1:
        case 3:
          __privateMethod(this, _j_instances, C_fn4).call(this, false);
          break;
      }
    }
    select() {
      var _a9;
      super.select(), __privateGet(this, _p6) && ((_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(__privateGet(this, _p6), {
        rootClass: {
          hovered: false,
          selected: true
        }
      }));
    }
    unselect() {
      var _a9;
      super.unselect(), __privateGet(this, _p6) && ((_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(__privateGet(this, _p6), {
        rootClass: {
          selected: false
        }
      }), __privateGet(this, _d8) || __privateMethod(this, _j_instances, C_fn4).call(this, false));
    }
    get _mustFixPosition() {
      return !__privateGet(this, _d8);
    }
    show(t = this._isVisible) {
      super.show(t), this.parent && (this.parent.drawLayer.updateProperties(__privateGet(this, _u9), {
        rootClass: {
          hidden: !t
        }
      }), this.parent.drawLayer.updateProperties(__privateGet(this, _p6), {
        rootClass: {
          hidden: !t
        }
      }));
    }
    static startHighlighting(t, e, { target: s, x: i, y: n }) {
      const { x: r, y: a, width: o, height: l } = s.getBoundingClientRect(), h = new AbortController(), d = t.combinedSignal(h), u = (f) => {
        h.abort(), __privateMethod(this, _j_static, __fn2).call(this, t, f);
      };
      window.addEventListener("blur", u, {
        signal: d
      }), window.addEventListener("pointerup", u, {
        signal: d
      }), window.addEventListener("pointerdown", ft, {
        capture: true,
        passive: false,
        signal: d
      }), window.addEventListener("contextmenu", At, {
        signal: d
      }), s.addEventListener("pointermove", __privateMethod(this, _j_static, E_fn2).bind(this, t), {
        signal: d
      }), this._freeHighlight = new Le({
        x: i,
        y: n
      }, [
        r,
        a,
        o,
        l
      ], t.scale, this._defaultThickness / 2, e, 1e-3), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t.drawLayer.draw({
        bbox: [
          0,
          0,
          1,
          1
        ],
        root: {
          viewBox: "0 0 1 1",
          fill: this._defaultColor,
          "fill-opacity": this._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      }, true, true);
    }
    static async deserialize(t, e, s) {
      var _a9, _b6, _c15, _d10;
      let i = null;
      if (t instanceof Gs) {
        const { data: { quadPoints: p, rect: g, rotation: b, id: m, color: A, opacity: _, popupRef: y }, parent: { page: { pageNumber: v } } } = t;
        i = t = {
          annotationType: L.HIGHLIGHT,
          color: Array.from(A),
          opacity: _,
          quadPoints: p,
          boxes: null,
          pageIndex: v - 1,
          rect: g.slice(0),
          rotation: b,
          id: m,
          deleted: false,
          popupRef: y
        };
      } else if (t instanceof We) {
        const { data: { inkLists: p, rect: g, rotation: b, id: m, color: A, borderStyle: { rawWidth: _ }, popupRef: y }, parent: { page: { pageNumber: v } } } = t;
        i = t = {
          annotationType: L.HIGHLIGHT,
          color: Array.from(A),
          thickness: _,
          inkLists: p,
          boxes: null,
          pageIndex: v - 1,
          rect: g.slice(0),
          rotation: b,
          id: m,
          deleted: false,
          popupRef: y
        };
      }
      const { color: n, quadPoints: r, inkLists: a, opacity: o } = t, l = await super.deserialize(t, e, s);
      l.color = C.makeHexColor(...n), __privateSet(l, _a7, o || 1), a && __privateSet(l, _g5, t.thickness), l.annotationElementId = t.id || null, l._initialData = i;
      const [h, d] = l.pageDimensions, [u, f] = l.pageTranslation;
      if (r) {
        const p = __privateSet(l, _s25, []);
        for (let g = 0; g < r.length; g += 8) p.push({
          x: (r[g] - u) / h,
          y: 1 - (r[g + 1] - f) / d,
          width: (r[g + 2] - r[g]) / h,
          height: (r[g + 1] - r[g + 5]) / d
        });
        __privateMethod(_a9 = l, _j_instances, y_fn3).call(_a9), __privateMethod(_b6 = l, _j_instances, k_fn4).call(_b6), l.rotate(l.rotation);
      } else if (a) {
        __privateSet(l, _d8, true);
        const p = a[0], g = {
          x: p[0] - u,
          y: d - (p[1] - f)
        }, b = new Le(g, [
          0,
          0,
          h,
          d
        ], 1, __privateGet(l, _g5) / 2, true, 1e-3);
        for (let _ = 0, y = p.length; _ < y; _ += 2) g.x = p[_] - u, g.y = d - (p[_ + 1] - f), b.add(g);
        const { id: m, clipPathId: A } = e.drawLayer.draw({
          bbox: [
            0,
            0,
            1,
            1
          ],
          root: {
            viewBox: "0 0 1 1",
            fill: l.color,
            "fill-opacity": l._defaultOpacity
          },
          rootClass: {
            highlight: true,
            free: true
          },
          path: {
            d: b.toSVGPath()
          }
        }, true, true);
        __privateMethod(_c15 = l, _j_instances, A_fn2).call(_c15, {
          highlightOutlines: b.getOutlines(),
          highlightId: m,
          clipPathId: A
        }), __privateMethod(_d10 = l, _j_instances, k_fn4).call(_d10);
      }
      return l;
    }
    serialize(t = false) {
      if (this.isEmpty() || t) return null;
      if (this.deleted) return this.serializeDeleted();
      const e = this.getRect(0, 0), s = R._colorManager.convert(this.color), i = {
        annotationType: L.HIGHLIGHT,
        color: s,
        opacity: __privateGet(this, _a7),
        thickness: __privateGet(this, _g5),
        quadPoints: __privateMethod(this, _j_instances, D_fn3).call(this),
        outlines: __privateMethod(this, _j_instances, N_fn2).call(this, e),
        pageIndex: this.pageIndex,
        rect: e,
        rotation: __privateMethod(this, _j_instances, M_fn3).call(this),
        structTreeParentId: this._structTreeParentId
      };
      return this.annotationElementId && !__privateMethod(this, _j_instances, L_fn2).call(this, i) ? null : (i.id = this.annotationElementId, i);
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getRect(0, 0)
      }), null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  _t45 = new WeakMap();
  _e32 = new WeakMap();
  _s25 = new WeakMap();
  _i20 = new WeakMap();
  _r15 = new WeakMap();
  _n13 = new WeakMap();
  _l11 = new WeakMap();
  _o9 = new WeakMap();
  _c9 = new WeakMap();
  _h9 = new WeakMap();
  _u9 = new WeakMap();
  _d8 = new WeakMap();
  _f7 = new WeakMap();
  _a7 = new WeakMap();
  _p6 = new WeakMap();
  _m6 = new WeakMap();
  _g5 = new WeakMap();
  _b5 = new WeakMap();
  _j_instances = new WeakSet();
  y_fn3 = function() {
    const t = new Ie(__privateGet(this, _s25), 1e-3);
    __privateSet(this, _h9, t.getOutlines()), [this.x, this.y, this.width, this.height] = __privateGet(this, _h9).box;
    const e = new Ie(__privateGet(this, _s25), 25e-4, 1e-3, this._uiManager.direction === "ltr");
    __privateSet(this, _n13, e.getOutlines());
    const { lastPoint: s } = __privateGet(this, _n13);
    __privateSet(this, _f7, [
      (s[0] - this.x) / this.width,
      (s[1] - this.y) / this.height
    ]);
  };
  A_fn2 = function({ highlightOutlines: t, highlightId: e, clipPathId: s }) {
    var _a9, _b6;
    __privateSet(this, _h9, t);
    const i = 1.5;
    if (__privateSet(this, _n13, t.getNewOutline(__privateGet(this, _g5) / 2 + i, 25e-4)), e >= 0) __privateSet(this, _u9, e), __privateSet(this, _i20, s), this.parent.drawLayer.finalizeDraw(e, {
      bbox: t.box,
      path: {
        d: t.toSVGPath()
      }
    }), __privateSet(this, _p6, this.parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: true
      },
      bbox: __privateGet(this, _n13).box,
      path: {
        d: __privateGet(this, _n13).toSVGPath()
      }
    }, true));
    else if (this.parent) {
      const h = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(__privateGet(this, _u9), {
        bbox: __privateMethod(_a9 = _j2, _j_static, w_fn4).call(_a9, __privateGet(this, _h9).box, (h - this.rotation + 360) % 360),
        path: {
          d: t.toSVGPath()
        }
      }), this.parent.drawLayer.updateProperties(__privateGet(this, _p6), {
        bbox: __privateMethod(_b6 = _j2, _j_static, w_fn4).call(_b6, __privateGet(this, _n13).box, h),
        path: {
          d: __privateGet(this, _n13).toSVGPath()
        }
      });
    }
    const [n, r, a, o] = t.box;
    switch (this.rotation) {
      case 0:
        this.x = n, this.y = r, this.width = a, this.height = o;
        break;
      case 90: {
        const [h, d] = this.parentDimensions;
        this.x = r, this.y = 1 - n, this.width = a * d / h, this.height = o * h / d;
        break;
      }
      case 180:
        this.x = 1 - n, this.y = 1 - r, this.width = a, this.height = o;
        break;
      case 270: {
        const [h, d] = this.parentDimensions;
        this.x = 1 - r, this.y = n, this.width = a * d / h, this.height = o * h / d;
        break;
      }
    }
    const { lastPoint: l } = __privateGet(this, _n13);
    __privateSet(this, _f7, [
      (l[0] - n) / a,
      (l[1] - r) / o
    ]);
  };
  v_fn2 = function(t) {
    const e = (n, r) => {
      var _a9, _b6;
      this.color = n, __privateSet(this, _a7, r), (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(__privateGet(this, _u9), {
        root: {
          fill: n,
          "fill-opacity": r
        }
      }), (_b6 = __privateGet(this, _r15)) == null ? void 0 : _b6.updateColor(n);
    }, s = this.color, i = __privateGet(this, _a7);
    this.addCommands({
      cmd: e.bind(this, t, _j2._defaultOpacity),
      undo: e.bind(this, s, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: O.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    }), this._reportTelemetry({
      action: "color_changed",
      color: this._uiManager.highlightColorNames.get(t)
    }, true);
  };
  S_fn2 = function(t) {
    const e = __privateGet(this, _g5), s = (i) => {
      __privateSet(this, _g5, i), __privateMethod(this, _j_instances, x_fn3).call(this, i);
    };
    this.addCommands({
      cmd: s.bind(this, t),
      undo: s.bind(this, e),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: O.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    }), this._reportTelemetry({
      action: "thickness_changed",
      thickness: t
    }, true);
  };
  x_fn3 = function(t) {
    if (!__privateGet(this, _d8)) return;
    __privateMethod(this, _j_instances, A_fn2).call(this, {
      highlightOutlines: __privateGet(this, _h9).getNewOutline(t / 2)
    }), this.fixAndSetPosition();
    const [e, s] = this.parentDimensions;
    this.setDims(this.width * e, this.height * s);
  };
  T_fn3 = function() {
    __privateGet(this, _u9) === null || !this.parent || (this.parent.drawLayer.remove(__privateGet(this, _u9)), __privateSet(this, _u9, null), this.parent.drawLayer.remove(__privateGet(this, _p6)), __privateSet(this, _p6, null));
  };
  k_fn4 = function(t = this.parent) {
    __privateGet(this, _u9) === null && ({ id: __privateWrapper(this, _u9)._, clipPathId: __privateWrapper(this, _i20)._ } = t.drawLayer.draw({
      bbox: __privateGet(this, _h9).box,
      root: {
        viewBox: "0 0 1 1",
        fill: this.color,
        "fill-opacity": __privateGet(this, _a7)
      },
      rootClass: {
        highlight: true,
        free: __privateGet(this, _d8)
      },
      path: {
        d: __privateGet(this, _h9).toSVGPath()
      }
    }, false, true), __privateSet(this, _p6, t.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: __privateGet(this, _d8)
      },
      bbox: __privateGet(this, _n13).box,
      path: {
        d: __privateGet(this, _n13).toSVGPath()
      }
    }, __privateGet(this, _d8))), __privateGet(this, _c9) && (__privateGet(this, _c9).style.clipPath = __privateGet(this, _i20)));
  };
  _j_static = new WeakSet();
  w_fn4 = function([t, e, s, i], n) {
    switch (n) {
      case 90:
        return [
          1 - e - i,
          t,
          i,
          s
        ];
      case 180:
        return [
          1 - t - s,
          1 - e - i,
          s,
          i
        ];
      case 270:
        return [
          e,
          1 - t - s,
          i,
          s
        ];
    }
    return [
      t,
      e,
      s,
      i
    ];
  };
  P_fn4 = function(t) {
    _j2._keyboardManager.exec(this, t);
  };
  C_fn4 = function(t) {
    if (!__privateGet(this, _t45)) return;
    const e = window.getSelection();
    t ? e.setPosition(__privateGet(this, _t45), __privateGet(this, _e32)) : e.setPosition(__privateGet(this, _l11), __privateGet(this, _o9));
  };
  M_fn3 = function() {
    return __privateGet(this, _d8) ? this.rotation : 0;
  };
  D_fn3 = function() {
    if (__privateGet(this, _d8)) return null;
    const [t, e] = this.pageDimensions, [s, i] = this.pageTranslation, n = __privateGet(this, _s25), r = new Float32Array(n.length * 8);
    let a = 0;
    for (const { x: o, y: l, width: h, height: d } of n) {
      const u = o * t + s, f = (1 - l) * e + i;
      r[a] = r[a + 4] = u, r[a + 1] = r[a + 3] = f, r[a + 2] = r[a + 6] = u + h * t, r[a + 5] = r[a + 7] = f - d * e, a += 8;
    }
    return r;
  };
  N_fn2 = function(t) {
    return __privateGet(this, _h9).serialize(t, __privateMethod(this, _j_instances, M_fn3).call(this));
  };
  E_fn2 = function(t, e) {
    this._freeHighlight.add(e) && t.drawLayer.updateProperties(this._freeHighlightId, {
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    });
  };
  __fn2 = function(t, e) {
    this._freeHighlight.isEmpty() ? t.drawLayer.remove(this._freeHighlightId) : t.createAndAddNewEditor(e, false, {
      highlightId: this._freeHighlightId,
      highlightOutlines: this._freeHighlight.getOutlines(),
      clipPathId: this._freeHighlightClipId,
      methodOfCreation: "main_toolbar"
    }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
  };
  L_fn2 = function(t) {
    const { color: e } = this._initialData;
    return t.color.some((s, i) => s !== e[i]);
  };
  __privateAdd(_j2, _j_static);
  __publicField(_j2, "_defaultColor", null);
  __publicField(_j2, "_defaultOpacity", 1);
  __publicField(_j2, "_defaultThickness", 12);
  __publicField(_j2, "_type", "highlight");
  __publicField(_j2, "_editorType", L.HIGHLIGHT);
  __publicField(_j2, "_freeHighlightId", -1);
  __publicField(_j2, "_freeHighlight", null);
  __publicField(_j2, "_freeHighlightClipId", "");
  let j = _j2;
  class Un {
    constructor() {
      __privateAdd(this, _t46, /* @__PURE__ */ Object.create(null));
    }
    updateProperty(t, e) {
      this[t] = e, this.updateSVGProperty(t, e);
    }
    updateProperties(t) {
      if (t) for (const [e, s] of Object.entries(t)) this.updateProperty(e, s);
    }
    updateSVGProperty(t, e) {
      __privateGet(this, _t46)[t] = e;
    }
    toSVGProperties() {
      const t = __privateGet(this, _t46);
      return __privateSet(this, _t46, /* @__PURE__ */ Object.create(null)), {
        root: t
      };
    }
    reset() {
      __privateSet(this, _t46, /* @__PURE__ */ Object.create(null));
    }
    updateAll(t = this) {
      this.updateProperties(t);
    }
    clone() {
      H("Not implemented");
    }
  }
  _t46 = new WeakMap();
  const _k2 = class _k2 extends R {
    constructor(t) {
      super(t);
      __privateAdd(this, _k_instances);
      __privateAdd(this, _t47, null);
      __privateAdd(this, _e33);
      __publicField(this, "_drawId", null);
      __privateSet(this, _e33, t.mustBeCommitted || false), t.drawOutlines && (__privateMethod(this, _k_instances, h_fn3).call(this, t), __privateMethod(this, _k_instances, f_fn5).call(this));
    }
    static _mergeSVGProperties(t, e) {
      const s = new Set(Object.keys(t));
      for (const [i, n] of Object.entries(e)) s.has(i) ? Object.assign(t[i], n) : t[i] = n;
      return t;
    }
    static getDefaultDrawingOptions(t) {
      H("Not implemented");
    }
    static get typesMap() {
      H("Not implemented");
    }
    static get isDrawer() {
      return true;
    }
    static get supportMultipleDrawings() {
      return false;
    }
    static updateDefaultParams(t, e) {
      const s = this.typesMap.get(t);
      s && this._defaultDrawingOptions.updateProperty(s, e), this._currentParent && (__privateGet(_k2, _s26).updateProperty(s, e), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    updateParams(t, e) {
      const s = this.constructor.typesMap.get(t);
      s && this._updateProperty(t, s, e);
    }
    static get defaultPropertiesToUpdate() {
      const t = [], e = this._defaultDrawingOptions;
      for (const [s, i] of this.typesMap) t.push([
        s,
        e[i]
      ]);
      return t;
    }
    get propertiesToUpdate() {
      const t = [], { _drawingOptions: e } = this;
      for (const [s, i] of this.constructor.typesMap) t.push([
        s,
        e[i]
      ]);
      return t;
    }
    _updateProperty(t, e, s) {
      const i = this._drawingOptions, n = i[e], r = (a) => {
        var _a9;
        i.updateProperty(e, a);
        const o = __privateGet(this, _t47).updateProperty(e, a);
        o && __privateMethod(this, _k_instances, m_fn3).call(this, o), (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(this._drawId, i.toSVGProperties());
      };
      this.addCommands({
        cmd: r.bind(this, s),
        undo: r.bind(this, n),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: true,
        type: t,
        overwriteIfSameType: true,
        keepUndo: true
      });
    }
    _onResizing() {
      var _a9;
      (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(this._drawId, _k2._mergeSVGProperties(__privateGet(this, _t47).getPathResizingSVGProperties(__privateMethod(this, _k_instances, p_fn4).call(this)), {
        bbox: __privateMethod(this, _k_instances, g_fn4).call(this)
      }));
    }
    _onResized() {
      var _a9;
      (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(this._drawId, _k2._mergeSVGProperties(__privateGet(this, _t47).getPathResizedSVGProperties(__privateMethod(this, _k_instances, p_fn4).call(this)), {
        bbox: __privateMethod(this, _k_instances, g_fn4).call(this)
      }));
    }
    _onTranslating(t, e) {
      var _a9;
      (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(this._drawId, {
        bbox: __privateMethod(this, _k_instances, g_fn4).call(this, t, e)
      });
    }
    _onTranslated() {
      var _a9;
      (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(this._drawId, _k2._mergeSVGProperties(__privateGet(this, _t47).getPathTranslatedSVGProperties(__privateMethod(this, _k_instances, p_fn4).call(this), this.parentDimensions), {
        bbox: __privateMethod(this, _k_instances, g_fn4).call(this)
      }));
    }
    _onStartDragging() {
      var _a9;
      (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: true
        }
      });
    }
    _onStopDragging() {
      var _a9;
      (_a9 = this.parent) == null ? void 0 : _a9.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: false
        }
      });
    }
    commit() {
      super.commit(), this.disableEditMode(), this.disableEditing();
    }
    disableEditing() {
      super.disableEditing(), this.div.classList.toggle("disabled", true);
    }
    enableEditing() {
      super.enableEditing(), this.div.classList.toggle("disabled", false);
    }
    getBaseTranslation() {
      return [
        0,
        0
      ];
    }
    get isResizable() {
      return true;
    }
    onceAdded(t) {
      this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = true, __privateGet(this, _e33) && (__privateSet(this, _e33, false), this.commit(), this.parent.setSelected(this), t && this.isOnScreen && this.div.focus());
    }
    remove() {
      __privateMethod(this, _k_instances, d_fn4).call(this), super.remove();
    }
    rebuild() {
      this.parent && (super.rebuild(), this.div !== null && (__privateMethod(this, _k_instances, f_fn5).call(this), __privateMethod(this, _k_instances, m_fn3).call(this, __privateGet(this, _t47).box), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t) {
      var _a9;
      let e = false;
      this.parent && !t ? (this._uiManager.removeShouldRescale(this), __privateMethod(this, _k_instances, d_fn4).call(this)) : t && (this._uiManager.addShouldRescale(this), __privateMethod(this, _k_instances, f_fn5).call(this, t), e = !this.parent && ((_a9 = this.div) == null ? void 0 : _a9.classList.contains("selectedEditor"))), super.setParent(t), e && this.select();
    }
    rotate() {
      this.parent && this.parent.drawLayer.updateProperties(this._drawId, _k2._mergeSVGProperties({
        bbox: __privateMethod(this, _k_instances, g_fn4).call(this)
      }, __privateGet(this, _t47).updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
      this.parent && __privateMethod(this, _k_instances, m_fn3).call(this, __privateGet(this, _t47).updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {
    }
    render() {
      if (this.div) return this.div;
      const t = super.render();
      t.classList.add("draw");
      const e = document.createElement("div");
      t.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal";
      const [s, i] = this.parentDimensions;
      return this.setDims(this.width * s, this.height * i), this._uiManager.addShouldRescale(this), this.disableEditing(), t;
    }
    static createDrawerInstance(t, e, s, i, n) {
      H("Not implemented");
    }
    static startDrawing(t, e, s, i) {
      var _a9;
      const { target: n, offsetX: r, offsetY: a, pointerId: o, pointerType: l } = i;
      if (__privateGet(_k2, _l12) && __privateGet(_k2, _l12) !== l) return;
      const { viewport: { rotation: h } } = t, { width: d, height: u } = n.getBoundingClientRect(), f = __privateSet(_k2, _i21, new AbortController()), p = t.combinedSignal(f);
      if (__privateGet(_k2, _n14) || __privateSet(_k2, _n14, o), __privateGet(_k2, _l12) ?? __privateSet(_k2, _l12, l), window.addEventListener("pointerup", (g) => {
        var _a10;
        __privateGet(_k2, _n14) === g.pointerId ? this._endDraw(g) : (_a10 = __privateGet(_k2, _o10)) == null ? void 0 : _a10.delete(g.pointerId);
      }, {
        signal: p
      }), window.addEventListener("pointercancel", (g) => {
        var _a10;
        __privateGet(_k2, _n14) === g.pointerId ? this._currentParent.endDrawingSession() : (_a10 = __privateGet(_k2, _o10)) == null ? void 0 : _a10.delete(g.pointerId);
      }, {
        signal: p
      }), window.addEventListener("pointerdown", (g) => {
        __privateGet(_k2, _l12) === g.pointerType && ((__privateGet(_k2, _o10) || __privateSet(_k2, _o10, /* @__PURE__ */ new Set())).add(g.pointerId), __privateGet(_k2, _s26).isCancellable() && (__privateGet(_k2, _s26).removeLastElement(), __privateGet(_k2, _s26).isEmpty() ? this._currentParent.endDrawingSession(true) : this._endDraw(null)));
      }, {
        capture: true,
        passive: false,
        signal: p
      }), window.addEventListener("contextmenu", At, {
        signal: p
      }), n.addEventListener("pointermove", this._drawMove.bind(this), {
        signal: p
      }), n.addEventListener("touchmove", (g) => {
        g.timeStamp === __privateGet(_k2, _c10) && ft(g);
      }, {
        signal: p
      }), t.toggleDrawing(), (_a9 = e._editorUndoBar) == null ? void 0 : _a9.hide(), __privateGet(_k2, _s26)) {
        t.drawLayer.updateProperties(this._currentDrawId, __privateGet(_k2, _s26).startNew(r, a, d, u, h));
        return;
      }
      e.updateUIForDefaultProperties(this), __privateSet(_k2, _s26, this.createDrawerInstance(r, a, d, u, h)), __privateSet(_k2, _r16, this.getDefaultDrawingOptions()), this._currentParent = t, { id: this._currentDrawId } = t.drawLayer.draw(this._mergeSVGProperties(__privateGet(_k2, _r16).toSVGProperties(), __privateGet(_k2, _s26).defaultSVGProperties), true, false);
    }
    static _drawMove(t) {
      var _a9;
      if (__privateSet(_k2, _c10, -1), !__privateGet(_k2, _s26)) return;
      const { offsetX: e, offsetY: s, pointerId: i } = t;
      if (__privateGet(_k2, _n14) === i) {
        if (((_a9 = __privateGet(_k2, _o10)) == null ? void 0 : _a9.size) >= 1) {
          this._endDraw(t);
          return;
        }
        this._currentParent.drawLayer.updateProperties(this._currentDrawId, __privateGet(_k2, _s26).add(e, s)), __privateSet(_k2, _c10, t.timeStamp), ft(t);
      }
    }
    static _cleanup(t) {
      t && (this._currentDrawId = -1, this._currentParent = null, __privateSet(_k2, _s26, null), __privateSet(_k2, _r16, null), __privateSet(_k2, _l12, null), __privateSet(_k2, _c10, NaN)), __privateGet(_k2, _i21) && (__privateGet(_k2, _i21).abort(), __privateSet(_k2, _i21, null), __privateSet(_k2, _n14, NaN), __privateSet(_k2, _o10, null));
    }
    static _endDraw(t) {
      const e = this._currentParent;
      if (e) {
        if (e.toggleDrawing(true), this._cleanup(false), t && e.drawLayer.updateProperties(this._currentDrawId, __privateGet(_k2, _s26).end(t.offsetX, t.offsetY)), this.supportMultipleDrawings) {
          const s = __privateGet(_k2, _s26), i = this._currentDrawId, n = s.getLastElement();
          e.addCommands({
            cmd: () => {
              e.drawLayer.updateProperties(i, s.setLastElement(n));
            },
            undo: () => {
              e.drawLayer.updateProperties(i, s.removeLastElement());
            },
            mustExec: false,
            type: O.DRAW_STEP
          });
          return;
        }
        this.endDrawing(false);
      }
    }
    static endDrawing(t) {
      const e = this._currentParent;
      if (!e) return null;
      if (e.toggleDrawing(true), e.cleanUndoStack(O.DRAW_STEP), !__privateGet(_k2, _s26).isEmpty()) {
        const { pageDimensions: [s, i], scale: n } = e, r = e.createAndAddNewEditor({
          offsetX: 0,
          offsetY: 0
        }, false, {
          drawId: this._currentDrawId,
          drawOutlines: __privateGet(_k2, _s26).getOutlines(s * n, i * n, n, this._INNER_MARGIN),
          drawingOptions: __privateGet(_k2, _r16),
          mustBeCommitted: !t
        });
        return this._cleanup(true), r;
      }
      return e.drawLayer.remove(this._currentDrawId), this._cleanup(true), null;
    }
    createDrawingOptions(t) {
    }
    static deserializeDraw(t, e, s, i, n, r) {
      H("Not implemented");
    }
    static async deserialize(t, e, s) {
      var _a9, _b6;
      const { rawDims: { pageWidth: i, pageHeight: n, pageX: r, pageY: a } } = e.viewport, o = this.deserializeDraw(r, a, i, n, this._INNER_MARGIN, t), l = await super.deserialize(t, e, s);
      return l.createDrawingOptions(t), __privateMethod(_a9 = l, _k_instances, h_fn3).call(_a9, {
        drawOutlines: o
      }), __privateMethod(_b6 = l, _k_instances, f_fn5).call(_b6), l.onScaleChanging(), l.rotate(), l;
    }
    serializeDraw(t) {
      const [e, s] = this.pageTranslation, [i, n] = this.pageDimensions;
      return __privateGet(this, _t47).serialize([
        e,
        s,
        i,
        n
      ], t);
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getRect(0, 0)
      }), null;
    }
    static canCreateNewEmptyEditor() {
      return false;
    }
  };
  _t47 = new WeakMap();
  _e33 = new WeakMap();
  _s26 = new WeakMap();
  _i21 = new WeakMap();
  _r16 = new WeakMap();
  _n14 = new WeakMap();
  _l12 = new WeakMap();
  _o10 = new WeakMap();
  _c10 = new WeakMap();
  _k_instances = new WeakSet();
  h_fn3 = function({ drawOutlines: t, drawId: e, drawingOptions: s }) {
    __privateSet(this, _t47, t), this._drawingOptions || (this._drawingOptions = s), e >= 0 ? (this._drawId = e, this.parent.drawLayer.finalizeDraw(e, t.defaultProperties)) : this._drawId = __privateMethod(this, _k_instances, u_fn4).call(this, t, this.parent), __privateMethod(this, _k_instances, m_fn3).call(this, t.box);
  };
  u_fn4 = function(t, e) {
    const { id: s } = e.drawLayer.draw(_k2._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t.defaultSVGProperties), false, false);
    return s;
  };
  d_fn4 = function() {
    this._drawId === null || !this.parent || (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
  };
  f_fn5 = function(t = this.parent) {
    if (!(this._drawId !== null && this.parent === t)) {
      if (this._drawId !== null) {
        this.parent.drawLayer.updateParent(this._drawId, t.drawLayer);
        return;
      }
      this._drawingOptions.updateAll(), this._drawId = __privateMethod(this, _k_instances, u_fn4).call(this, __privateGet(this, _t47), t);
    }
  };
  a_fn5 = function([t, e, s, i]) {
    const { parentDimensions: [n, r], rotation: a } = this;
    switch (a) {
      case 90:
        return [
          e,
          1 - t,
          s * (r / n),
          i * (n / r)
        ];
      case 180:
        return [
          1 - t,
          1 - e,
          s,
          i
        ];
      case 270:
        return [
          1 - e,
          t,
          s * (r / n),
          i * (n / r)
        ];
      default:
        return [
          t,
          e,
          s,
          i
        ];
    }
  };
  p_fn4 = function() {
    const { x: t, y: e, width: s, height: i, parentDimensions: [n, r], rotation: a } = this;
    switch (a) {
      case 90:
        return [
          1 - e,
          t,
          s * (n / r),
          i * (r / n)
        ];
      case 180:
        return [
          1 - t,
          1 - e,
          s,
          i
        ];
      case 270:
        return [
          e,
          1 - t,
          s * (n / r),
          i * (r / n)
        ];
      default:
        return [
          t,
          e,
          s,
          i
        ];
    }
  };
  m_fn3 = function(t) {
    if ([this.x, this.y, this.width, this.height] = __privateMethod(this, _k_instances, a_fn5).call(this, t), this.div) {
      this.fixAndSetPosition();
      const [e, s] = this.parentDimensions;
      this.setDims(this.width * e, this.height * s);
    }
    this._onResized();
  };
  g_fn4 = function() {
    const { x: t, y: e, width: s, height: i, rotation: n, parentRotation: r, parentDimensions: [a, o] } = this;
    switch ((n * 4 + r) / 90) {
      case 1:
        return [
          1 - e - i,
          t,
          i,
          s
        ];
      case 2:
        return [
          1 - t - s,
          1 - e - i,
          s,
          i
        ];
      case 3:
        return [
          e,
          1 - t - s,
          i,
          s
        ];
      case 4:
        return [
          t,
          e - s * (a / o),
          i * (o / a),
          s * (a / o)
        ];
      case 5:
        return [
          1 - e,
          t,
          s * (a / o),
          i * (o / a)
        ];
      case 6:
        return [
          1 - t - i * (o / a),
          1 - e,
          i * (o / a),
          s * (a / o)
        ];
      case 7:
        return [
          e - s * (a / o),
          1 - t - i * (o / a),
          s * (a / o),
          i * (o / a)
        ];
      case 8:
        return [
          t - s,
          e - i,
          s,
          i
        ];
      case 9:
        return [
          1 - e,
          t - s,
          i,
          s
        ];
      case 10:
        return [
          1 - t,
          1 - e,
          s,
          i
        ];
      case 11:
        return [
          e - i,
          1 - t,
          i,
          s
        ];
      case 12:
        return [
          t - i * (o / a),
          e,
          i * (o / a),
          s * (a / o)
        ];
      case 13:
        return [
          1 - e - s * (a / o),
          t - i * (o / a),
          s * (a / o),
          i * (o / a)
        ];
      case 14:
        return [
          1 - t,
          1 - e - s * (a / o),
          i * (o / a),
          s * (a / o)
        ];
      case 15:
        return [
          e,
          1 - t,
          s * (a / o),
          i * (o / a)
        ];
      default:
        return [
          t,
          e,
          s,
          i
        ];
    }
  };
  __publicField(_k2, "_currentDrawId", -1);
  __publicField(_k2, "_currentParent", null);
  __privateAdd(_k2, _s26, null);
  __privateAdd(_k2, _i21, null);
  __privateAdd(_k2, _r16, null);
  __privateAdd(_k2, _n14, NaN);
  __privateAdd(_k2, _l12, null);
  __privateAdd(_k2, _o10, null);
  __privateAdd(_k2, _c10, NaN);
  __publicField(_k2, "_INNER_MARGIN", 3);
  let k = _k2;
  class jn {
    constructor(t, e, s, i, n, r) {
      __privateAdd(this, _jn_instances);
      __privateAdd(this, _t48, new Float64Array(6));
      __privateAdd(this, _e34);
      __privateAdd(this, _s27);
      __privateAdd(this, _i22);
      __privateAdd(this, _r17);
      __privateAdd(this, _n15);
      __privateAdd(this, _l13, "");
      __privateAdd(this, _o11, 0);
      __privateAdd(this, _c11, new Ae());
      __privateAdd(this, _h10);
      __privateAdd(this, _u10);
      __privateSet(this, _h10, s), __privateSet(this, _u10, i), __privateSet(this, _i22, n), __privateSet(this, _r17, r), [t, e] = __privateMethod(this, _jn_instances, d_fn5).call(this, t, e);
      const a = __privateSet(this, _e34, [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ]);
      __privateSet(this, _n15, [
        t,
        e
      ]), __privateSet(this, _s27, [
        {
          line: a,
          points: __privateGet(this, _n15)
        }
      ]), __privateGet(this, _t48).set(a, 0);
    }
    updateProperty(t, e) {
      t === "stroke-width" && __privateSet(this, _r17, e);
    }
    isEmpty() {
      return !__privateGet(this, _s27) || __privateGet(this, _s27).length === 0;
    }
    isCancellable() {
      return __privateGet(this, _n15).length <= 10;
    }
    add(t, e) {
      [t, e] = __privateMethod(this, _jn_instances, d_fn5).call(this, t, e);
      const [s, i, n, r] = __privateGet(this, _t48).subarray(2, 6), a = t - n, o = e - r;
      return Math.hypot(__privateGet(this, _h10) * a, __privateGet(this, _u10) * o) <= 2 ? null : (__privateGet(this, _n15).push(t, e), isNaN(s) ? (__privateGet(this, _t48).set([
        n,
        r,
        t,
        e
      ], 2), __privateGet(this, _e34).push(NaN, NaN, NaN, NaN, t, e), {
        path: {
          d: this.toSVGPath()
        }
      }) : (isNaN(__privateGet(this, _t48)[0]) && __privateGet(this, _e34).splice(6, 6), __privateGet(this, _t48).set([
        s,
        i,
        n,
        r,
        t,
        e
      ], 0), __privateGet(this, _e34).push(...E.createBezierPoints(s, i, n, r, t, e)), {
        path: {
          d: this.toSVGPath()
        }
      }));
    }
    end(t, e) {
      const s = this.add(t, e);
      return s || (__privateGet(this, _n15).length === 2 ? {
        path: {
          d: this.toSVGPath()
        }
      } : null);
    }
    startNew(t, e, s, i, n) {
      __privateSet(this, _h10, s), __privateSet(this, _u10, i), __privateSet(this, _i22, n), [t, e] = __privateMethod(this, _jn_instances, d_fn5).call(this, t, e);
      const r = __privateSet(this, _e34, [
        NaN,
        NaN,
        NaN,
        NaN,
        t,
        e
      ]);
      __privateSet(this, _n15, [
        t,
        e
      ]);
      const a = __privateGet(this, _s27).at(-1);
      return a && (a.line = new Float32Array(a.line), a.points = new Float32Array(a.points)), __privateGet(this, _s27).push({
        line: r,
        points: __privateGet(this, _n15)
      }), __privateGet(this, _t48).set(r, 0), __privateSet(this, _o11, 0), this.toSVGPath(), null;
    }
    getLastElement() {
      return __privateGet(this, _s27).at(-1);
    }
    setLastElement(t) {
      return __privateGet(this, _s27) ? (__privateGet(this, _s27).push(t), __privateSet(this, _e34, t.line), __privateSet(this, _n15, t.points), __privateSet(this, _o11, 0), {
        path: {
          d: this.toSVGPath()
        }
      }) : __privateGet(this, _c11).setLastElement(t);
    }
    removeLastElement() {
      if (!__privateGet(this, _s27)) return __privateGet(this, _c11).removeLastElement();
      __privateGet(this, _s27).pop(), __privateSet(this, _l13, "");
      for (let t = 0, e = __privateGet(this, _s27).length; t < e; t++) {
        const { line: s, points: i } = __privateGet(this, _s27)[t];
        __privateSet(this, _e34, s), __privateSet(this, _n15, i), __privateSet(this, _o11, 0), this.toSVGPath();
      }
      return {
        path: {
          d: __privateGet(this, _l13)
        }
      };
    }
    toSVGPath() {
      const t = E.svgRound(__privateGet(this, _e34)[4]), e = E.svgRound(__privateGet(this, _e34)[5]);
      if (__privateGet(this, _n15).length === 2) return __privateSet(this, _l13, `${__privateGet(this, _l13)} M ${t} ${e} Z`), __privateGet(this, _l13);
      if (__privateGet(this, _n15).length <= 6) {
        const i = __privateGet(this, _l13).lastIndexOf("M");
        __privateSet(this, _l13, `${__privateGet(this, _l13).slice(0, i)} M ${t} ${e}`), __privateSet(this, _o11, 6);
      }
      if (__privateGet(this, _n15).length === 4) {
        const i = E.svgRound(__privateGet(this, _e34)[10]), n = E.svgRound(__privateGet(this, _e34)[11]);
        return __privateSet(this, _l13, `${__privateGet(this, _l13)} L ${i} ${n}`), __privateSet(this, _o11, 12), __privateGet(this, _l13);
      }
      const s = [];
      __privateGet(this, _o11) === 0 && (s.push(`M ${t} ${e}`), __privateSet(this, _o11, 6));
      for (let i = __privateGet(this, _o11), n = __privateGet(this, _e34).length; i < n; i += 6) {
        const [r, a, o, l, h, d] = __privateGet(this, _e34).slice(i, i + 6).map(E.svgRound);
        s.push(`C${r} ${a} ${o} ${l} ${h} ${d}`);
      }
      return __privateSet(this, _l13, __privateGet(this, _l13) + s.join(" ")), __privateSet(this, _o11, __privateGet(this, _e34).length), __privateGet(this, _l13);
    }
    getOutlines(t, e, s, i) {
      const n = __privateGet(this, _s27).at(-1);
      return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), __privateGet(this, _c11).build(__privateGet(this, _s27), t, e, s, __privateGet(this, _i22), __privateGet(this, _r17), i), __privateSet(this, _t48, null), __privateSet(this, _e34, null), __privateSet(this, _s27, null), __privateSet(this, _l13, null), __privateGet(this, _c11);
    }
    get defaultSVGProperties() {
      return {
        root: {
          viewBox: "0 0 10000 10000"
        },
        rootClass: {
          draw: true
        },
        bbox: [
          0,
          0,
          1,
          1
        ]
      };
    }
  }
  _t48 = new WeakMap();
  _e34 = new WeakMap();
  _s27 = new WeakMap();
  _i22 = new WeakMap();
  _r17 = new WeakMap();
  _n15 = new WeakMap();
  _l13 = new WeakMap();
  _o11 = new WeakMap();
  _c11 = new WeakMap();
  _h10 = new WeakMap();
  _u10 = new WeakMap();
  _jn_instances = new WeakSet();
  d_fn5 = function(t, e) {
    return E._normalizePoint(t, e, __privateGet(this, _h10), __privateGet(this, _u10), __privateGet(this, _i22));
  };
  const _Ae = class _Ae extends E {
    constructor() {
      super(...arguments);
      __privateAdd(this, _Ae_instances);
      __privateAdd(this, _t49);
      __privateAdd(this, _e35, 0);
      __privateAdd(this, _s28);
      __privateAdd(this, _i23);
      __privateAdd(this, _r18);
      __privateAdd(this, _n16);
      __privateAdd(this, _l14);
      __privateAdd(this, _o12);
      __privateAdd(this, _c12);
    }
    build(t, e, s, i, n, r, a) {
      __privateSet(this, _r18, e), __privateSet(this, _n16, s), __privateSet(this, _l14, i), __privateSet(this, _o12, n), __privateSet(this, _c12, r), __privateSet(this, _s28, a ?? 0), __privateSet(this, _i23, t), __privateMethod(this, _Ae_instances, d_fn6).call(this);
    }
    setLastElement(t) {
      return __privateGet(this, _i23).push(t), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    removeLastElement() {
      return __privateGet(this, _i23).pop(), {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    toSVGPath() {
      const t = [];
      for (const { line: e } of __privateGet(this, _i23)) {
        if (t.push(`M${E.svgRound(e[4])} ${E.svgRound(e[5])}`), e.length === 6) {
          t.push("Z");
          continue;
        }
        if (e.length === 12) {
          t.push(`L${E.svgRound(e[10])} ${E.svgRound(e[11])}`);
          continue;
        }
        for (let s = 6, i = e.length; s < i; s += 6) {
          const [n, r, a, o, l, h] = e.subarray(s, s + 6).map(E.svgRound);
          t.push(`C${n} ${r} ${a} ${o} ${l} ${h}`);
        }
      }
      return t.join("");
    }
    serialize([t, e, s, i], n) {
      const r = [], a = [], [o, l, h, d] = __privateMethod(this, _Ae_instances, u_fn5).call(this);
      let u, f, p, g, b, m, A, _, y;
      switch (__privateGet(this, _o12)) {
        case 0:
          y = E._rescale, u = t, f = e + i, p = s, g = -i, b = t + o * s, m = e + (1 - l - d) * i, A = t + (o + h) * s, _ = e + (1 - l) * i;
          break;
        case 90:
          y = E._rescaleAndSwap, u = t, f = e, p = s, g = i, b = t + l * s, m = e + o * i, A = t + (l + d) * s, _ = e + (o + h) * i;
          break;
        case 180:
          y = E._rescale, u = t + s, f = e, p = -s, g = i, b = t + (1 - o - h) * s, m = e + l * i, A = t + (1 - o) * s, _ = e + (l + d) * i;
          break;
        case 270:
          y = E._rescaleAndSwap, u = t + s, f = e + i, p = -s, g = -i, b = t + (1 - l - d) * s, m = e + (1 - o - h) * i, A = t + (1 - l) * s, _ = e + (1 - o) * i;
          break;
      }
      for (const { line: v, points: S } of __privateGet(this, _i23)) r.push(y(v, u, f, p, g, n ? new Array(v.length) : null)), a.push(y(S, u, f, p, g, n ? new Array(S.length) : null));
      return {
        lines: r,
        points: a,
        rect: [
          b,
          m,
          A,
          _
        ]
      };
    }
    static deserialize(t, e, s, i, n, { paths: { lines: r, points: a }, rotation: o, thickness: l }) {
      const h = [];
      let d, u, f, p, g;
      switch (o) {
        case 0:
          g = E._rescale, d = -t / s, u = e / i + 1, f = 1 / s, p = -1 / i;
          break;
        case 90:
          g = E._rescaleAndSwap, d = -e / i, u = -t / s, f = 1 / i, p = 1 / s;
          break;
        case 180:
          g = E._rescale, d = t / s + 1, u = -e / i, f = -1 / s, p = 1 / i;
          break;
        case 270:
          g = E._rescaleAndSwap, d = e / i + 1, u = t / s + 1, f = -1 / i, p = -1 / s;
          break;
      }
      if (!r) {
        r = [];
        for (const m of a) {
          const A = m.length;
          if (A === 2) {
            r.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              m[0],
              m[1]
            ]));
            continue;
          }
          if (A === 4) {
            r.push(new Float32Array([
              NaN,
              NaN,
              NaN,
              NaN,
              m[0],
              m[1],
              NaN,
              NaN,
              NaN,
              NaN,
              m[2],
              m[3]
            ]));
            continue;
          }
          const _ = new Float32Array(3 * (A - 2));
          r.push(_);
          let [y, v, S, w] = m.subarray(0, 4);
          _.set([
            NaN,
            NaN,
            NaN,
            NaN,
            y,
            v
          ], 0);
          for (let T = 4; T < A; T += 2) {
            const M = m[T], B = m[T + 1];
            _.set(E.createBezierPoints(y, v, S, w, M, B), (T - 2) * 3), [y, v, S, w] = [
              S,
              w,
              M,
              B
            ];
          }
        }
      }
      for (let m = 0, A = r.length; m < A; m++) h.push({
        line: g(r[m].map((_) => _ ?? NaN), d, u, f, p),
        points: g(a[m].map((_) => _ ?? NaN), d, u, f, p)
      });
      const b = new _Ae();
      return b.build(h, s, i, 1, o, l, n), b;
    }
    get box() {
      return __privateGet(this, _t49);
    }
    updateProperty(t, e) {
      return t === "stroke-width" ? __privateMethod(this, _Ae_instances, f_fn6).call(this, e) : null;
    }
    updateParentDimensions([t, e], s) {
      const [i, n] = __privateMethod(this, _Ae_instances, h_fn4).call(this);
      __privateSet(this, _r18, t), __privateSet(this, _n16, e), __privateSet(this, _l14, s);
      const [r, a] = __privateMethod(this, _Ae_instances, h_fn4).call(this), o = r - i, l = a - n, h = __privateGet(this, _t49);
      return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
    }
    updateRotation(t) {
      return __privateSet(this, _e35, t), {
        path: {
          transform: this.rotationTransform
        }
      };
    }
    get viewBox() {
      return __privateGet(this, _t49).map(E.svgRound).join(" ");
    }
    get defaultProperties() {
      const [t, e] = __privateGet(this, _t49);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${E.svgRound(t)} ${E.svgRound(e)}`
        }
      };
    }
    get rotationTransform() {
      const [, , t, e] = __privateGet(this, _t49);
      let s = 0, i = 0, n = 0, r = 0, a = 0, o = 0;
      switch (__privateGet(this, _e35)) {
        case 90:
          i = e / t, n = -t / e, a = t;
          break;
        case 180:
          s = -1, r = -1, a = t, o = e;
          break;
        case 270:
          i = -e / t, n = t / e, o = e;
          break;
        default:
          return "";
      }
      return `matrix(${s} ${i} ${n} ${r} ${E.svgRound(a)} ${E.svgRound(o)})`;
    }
    getPathResizingSVGProperties([t, e, s, i]) {
      const [n, r] = __privateMethod(this, _Ae_instances, h_fn4).call(this), [a, o, l, h] = __privateGet(this, _t49);
      if (Math.abs(l - n) <= E.PRECISION || Math.abs(h - r) <= E.PRECISION) {
        const g = t + s / 2 - (a + l / 2), b = e + i / 2 - (o + h / 2);
        return {
          path: {
            "transform-origin": `${E.svgRound(t)} ${E.svgRound(e)}`,
            transform: `${this.rotationTransform} translate(${g} ${b})`
          }
        };
      }
      const d = (s - 2 * n) / (l - 2 * n), u = (i - 2 * r) / (h - 2 * r), f = l / s, p = h / i;
      return {
        path: {
          "transform-origin": `${E.svgRound(a)} ${E.svgRound(o)}`,
          transform: `${this.rotationTransform} scale(${f} ${p}) translate(${E.svgRound(n)} ${E.svgRound(r)}) scale(${d} ${u}) translate(${E.svgRound(-n)} ${E.svgRound(-r)})`
        }
      };
    }
    getPathResizedSVGProperties([t, e, s, i]) {
      const [n, r] = __privateMethod(this, _Ae_instances, h_fn4).call(this), a = __privateGet(this, _t49), [o, l, h, d] = a;
      if (a[0] = t, a[1] = e, a[2] = s, a[3] = i, Math.abs(h - n) <= E.PRECISION || Math.abs(d - r) <= E.PRECISION) {
        const b = t + s / 2 - (o + h / 2), m = e + i / 2 - (l + d / 2);
        for (const { line: A, points: _ } of __privateGet(this, _i23)) E._translate(A, b, m, A), E._translate(_, b, m, _);
        return {
          root: {
            viewBox: this.viewBox
          },
          path: {
            "transform-origin": `${E.svgRound(t)} ${E.svgRound(e)}`,
            transform: this.rotationTransform || null,
            d: this.toSVGPath()
          }
        };
      }
      const u = (s - 2 * n) / (h - 2 * n), f = (i - 2 * r) / (d - 2 * r), p = -u * (o + n) + t + n, g = -f * (l + r) + e + r;
      if (u !== 1 || f !== 1 || p !== 0 || g !== 0) for (const { line: b, points: m } of __privateGet(this, _i23)) E._rescale(b, p, g, u, f, b), E._rescale(m, p, g, u, f, m);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${E.svgRound(t)} ${E.svgRound(e)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    getPathTranslatedSVGProperties([t, e], s) {
      const [i, n] = s, r = __privateGet(this, _t49), a = t - r[0], o = e - r[1];
      if (__privateGet(this, _r18) === i && __privateGet(this, _n16) === n) for (const { line: l, points: h } of __privateGet(this, _i23)) E._translate(l, a, o, l), E._translate(h, a, o, h);
      else {
        const l = __privateGet(this, _r18) / i, h = __privateGet(this, _n16) / n;
        __privateSet(this, _r18, i), __privateSet(this, _n16, n);
        for (const { line: d, points: u } of __privateGet(this, _i23)) E._rescale(d, a, o, l, h, d), E._rescale(u, a, o, l, h, u);
        r[2] *= l, r[3] *= h;
      }
      return r[0] = t, r[1] = e, {
        root: {
          viewBox: this.viewBox
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${E.svgRound(t)} ${E.svgRound(e)}`
        }
      };
    }
    get defaultSVGProperties() {
      const t = __privateGet(this, _t49);
      return {
        root: {
          viewBox: this.viewBox
        },
        rootClass: {
          draw: true
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${E.svgRound(t[0])} ${E.svgRound(t[1])}`,
          transform: this.rotationTransform || null
        },
        bbox: t
      };
    }
  };
  _t49 = new WeakMap();
  _e35 = new WeakMap();
  _s28 = new WeakMap();
  _i23 = new WeakMap();
  _r18 = new WeakMap();
  _n16 = new WeakMap();
  _l14 = new WeakMap();
  _o12 = new WeakMap();
  _c12 = new WeakMap();
  _Ae_instances = new WeakSet();
  h_fn4 = function(t = __privateGet(this, _c12)) {
    const e = __privateGet(this, _s28) + t / 2 * __privateGet(this, _l14);
    return __privateGet(this, _o12) % 180 === 0 ? [
      e / __privateGet(this, _r18),
      e / __privateGet(this, _n16)
    ] : [
      e / __privateGet(this, _n16),
      e / __privateGet(this, _r18)
    ];
  };
  u_fn5 = function() {
    const [t, e, s, i] = __privateGet(this, _t49), [n, r] = __privateMethod(this, _Ae_instances, h_fn4).call(this, 0);
    return [
      t + n,
      e + r,
      s - 2 * n,
      i - 2 * r
    ];
  };
  d_fn6 = function() {
    const t = __privateSet(this, _t49, new Float32Array([
      1 / 0,
      1 / 0,
      -1 / 0,
      -1 / 0
    ]));
    for (const { line: i } of __privateGet(this, _i23)) {
      if (i.length <= 12) {
        for (let a = 4, o = i.length; a < o; a += 6) {
          const [l, h] = i.subarray(a, a + 2);
          t[0] = Math.min(t[0], l), t[1] = Math.min(t[1], h), t[2] = Math.max(t[2], l), t[3] = Math.max(t[3], h);
        }
        continue;
      }
      let n = i[4], r = i[5];
      for (let a = 6, o = i.length; a < o; a += 6) {
        const [l, h, d, u, f, p] = i.subarray(a, a + 6);
        C.bezierBoundingBox(n, r, l, h, d, u, f, p, t), n = f, r = p;
      }
    }
    const [e, s] = __privateMethod(this, _Ae_instances, h_fn4).call(this);
    t[0] = Math.min(1, Math.max(0, t[0] - e)), t[1] = Math.min(1, Math.max(0, t[1] - s)), t[2] = Math.min(1, Math.max(0, t[2] + e)), t[3] = Math.min(1, Math.max(0, t[3] + s)), t[2] -= t[0], t[3] -= t[1];
  };
  f_fn6 = function(t) {
    const [e, s] = __privateMethod(this, _Ae_instances, h_fn4).call(this);
    __privateSet(this, _c12, t);
    const [i, n] = __privateMethod(this, _Ae_instances, h_fn4).call(this), [r, a] = [
      i - e,
      n - s
    ], o = __privateGet(this, _t49);
    return o[0] -= r, o[1] -= a, o[2] += 2 * r, o[3] += 2 * a, o;
  };
  let Ae = _Ae;
  const _Xe = class _Xe extends Un {
    constructor(t) {
      super();
      __privateAdd(this, _t50);
      __privateSet(this, _t50, t), super.updateProperties({
        fill: "none",
        stroke: R._defaultLineColor,
        "stroke-opacity": 1,
        "stroke-width": 1,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": 10
      });
    }
    updateSVGProperty(t, e) {
      t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= __privateGet(this, _t50).realScale), super.updateSVGProperty(t, e);
    }
    clone() {
      const t = new _Xe(__privateGet(this, _t50));
      return t.updateAll(this), t;
    }
  };
  _t50 = new WeakMap();
  let Xe = _Xe;
  const _qe = class _qe extends k {
    constructor(t) {
      super({
        ...t,
        name: "inkEditor"
      });
      __privateAdd(this, _qe_instances);
      this._willKeepAspectRatio = true;
    }
    static initialize(t, e) {
      R.initialize(t, e), this._defaultDrawingOptions = new Xe(e.viewParameters);
    }
    static getDefaultDrawingOptions(t) {
      const e = this._defaultDrawingOptions.clone();
      return e.updateProperties(t), e;
    }
    static get supportMultipleDrawings() {
      return true;
    }
    static get typesMap() {
      return F(this, "typesMap", /* @__PURE__ */ new Map([
        [
          O.INK_THICKNESS,
          "stroke-width"
        ],
        [
          O.INK_COLOR,
          "stroke"
        ],
        [
          O.INK_OPACITY,
          "stroke-opacity"
        ]
      ]));
    }
    static createDrawerInstance(t, e, s, i, n) {
      return new jn(t, e, s, i, n, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t, e, s, i, n, r) {
      return Ae.deserialize(t, e, s, i, n, r);
    }
    static async deserialize(t, e, s) {
      let i = null;
      if (t instanceof We) {
        const { data: { inkLists: r, rect: a, rotation: o, id: l, color: h, opacity: d, borderStyle: { rawWidth: u }, popupRef: f }, parent: { page: { pageNumber: p } } } = t;
        i = t = {
          annotationType: L.INK,
          color: Array.from(h),
          thickness: u,
          opacity: d,
          paths: {
            points: r
          },
          boxes: null,
          pageIndex: p - 1,
          rect: a.slice(0),
          rotation: o,
          id: l,
          deleted: false,
          popupRef: f
        };
      }
      const n = await super.deserialize(t, e, s);
      return n.annotationElementId = t.id || null, n._initialData = i, n;
    }
    onScaleChanging() {
      if (!this.parent) return;
      super.onScaleChanging();
      const { _drawId: t, _drawingOptions: e, parent: s } = this;
      e.updateSVGProperty("stroke-width"), s.drawLayer.updateProperties(t, e.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
      const t = this._currentParent;
      t && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    createDrawingOptions({ color: t, thickness: e, opacity: s }) {
      this._drawingOptions = _qe.getDefaultDrawingOptions({
        stroke: C.makeHexColor(...t),
        "stroke-width": e,
        "stroke-opacity": s
      });
    }
    serialize(t = false) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const { lines: e, points: s, rect: i } = this.serializeDraw(t), { _drawingOptions: { stroke: n, "stroke-opacity": r, "stroke-width": a } } = this, o = {
        annotationType: L.INK,
        color: R._colorManager.convert(n),
        opacity: r,
        thickness: a,
        paths: {
          lines: e,
          points: s
        },
        pageIndex: this.pageIndex,
        rect: i,
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId
      };
      return t ? o : this.annotationElementId && !__privateMethod(this, _qe_instances, t_fn5).call(this, o) ? null : (o.id = this.annotationElementId, o);
    }
    renderAnnotationElement(t) {
      const { points: e, rect: s } = this.serializeDraw(false);
      return t.updateEdited({
        rect: s,
        thickness: this._drawingOptions["stroke-width"],
        points: e
      }), null;
    }
  };
  _qe_instances = new WeakSet();
  t_fn5 = function(t) {
    const { color: e, thickness: s, opacity: i, pageIndex: n } = this._initialData;
    return this._hasBeenMoved || this._hasBeenResized || t.color.some((r, a) => r !== e[a]) || t.thickness !== s || t.opacity !== i || t.pageIndex !== n;
  };
  __publicField(_qe, "_type", "ink");
  __publicField(_qe, "_editorType", L.INK);
  __publicField(_qe, "_defaultDrawingOptions", null);
  let qe = _qe;
  const _Ye = class _Ye extends R {
    constructor(t) {
      super({
        ...t,
        name: "stampEditor"
      });
      __privateAdd(this, _Ye_instances);
      __privateAdd(this, _t51, null);
      __privateAdd(this, _e36, null);
      __privateAdd(this, _s29, null);
      __privateAdd(this, _i24, null);
      __privateAdd(this, _r19, null);
      __privateAdd(this, _n17, "");
      __privateAdd(this, _l15, null);
      __privateAdd(this, _o13, null);
      __privateAdd(this, _c13, false);
      __privateAdd(this, _h11, false);
      __privateSet(this, _i24, t.bitmapUrl), __privateSet(this, _r19, t.bitmapFile);
    }
    static initialize(t, e) {
      R.initialize(t, e);
    }
    static get supportedTypes() {
      return F(this, "supportedTypes", [
        "apng",
        "avif",
        "bmp",
        "gif",
        "jpeg",
        "png",
        "svg+xml",
        "webp",
        "x-icon"
      ].map((e) => `image/${e}`));
    }
    static get supportedTypesStr() {
      return F(this, "supportedTypesStr", this.supportedTypes.join(","));
    }
    static isHandlingMimeForPasting(t) {
      return this.supportedTypes.includes(t);
    }
    static paste(t, e) {
      e.pasteEditor(L.STAMP, {
        bitmapFile: t.getAsFile()
      });
    }
    altTextFinish() {
      this._uiManager.useNewAltTextFlow && (this.div.hidden = false), super.altTextFinish();
    }
    get telemetryFinalData() {
      var _a9;
      return {
        type: "stamp",
        hasAltText: !!((_a9 = this.altTextData) == null ? void 0 : _a9.altText)
      };
    }
    static computeTelemetryFinalData(t) {
      const e = t.get("hasAltText");
      return {
        hasAltText: e.get(true) ?? 0,
        hasNoAltText: e.get(false) ?? 0
      };
    }
    async mlGuessAltText(t = null, e = true) {
      if (this.hasAltTextData()) return null;
      const { mlManager: s } = this._uiManager;
      if (!s) throw new Error("No ML.");
      if (!await s.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
      const { data: i, width: n, height: r } = t || this.copyCanvas(null, null, true).imageData, a = await s.guess({
        name: "altText",
        request: {
          data: i,
          width: n,
          height: r,
          channels: i.length / (n * r)
        }
      });
      if (!a) throw new Error("No response from the AI service.");
      if (a.error) throw new Error("Error from the AI service.");
      if (a.cancel) return null;
      if (!a.output) throw new Error("No valid response from the AI service.");
      const o = a.output;
      return await this.setGuessedAltText(o), e && !this.hasAltTextData() && (this.altTextData = {
        alt: o,
        decorative: false
      }), o;
    }
    remove() {
      var _a9;
      __privateGet(this, _e36) && (__privateSet(this, _t51, null), this._uiManager.imageManager.deleteId(__privateGet(this, _e36)), (_a9 = __privateGet(this, _l15)) == null ? void 0 : _a9.remove(), __privateSet(this, _l15, null), __privateGet(this, _o13) && (clearTimeout(__privateGet(this, _o13)), __privateSet(this, _o13, null))), super.remove();
    }
    rebuild() {
      if (!this.parent) {
        __privateGet(this, _e36) && __privateMethod(this, _Ye_instances, f_fn7).call(this);
        return;
      }
      super.rebuild(), this.div !== null && (__privateGet(this, _e36) && __privateGet(this, _l15) === null && __privateMethod(this, _Ye_instances, f_fn7).call(this), this.isAttachedToDOM || this.parent.add(this));
    }
    onceAdded(t) {
      this._isDraggable = true, t && this.div.focus();
    }
    isEmpty() {
      return !(__privateGet(this, _s29) || __privateGet(this, _t51) || __privateGet(this, _i24) || __privateGet(this, _r19) || __privateGet(this, _e36));
    }
    get isResizable() {
      return true;
    }
    render() {
      if (this.div) return this.div;
      let t, e;
      if (this.width && (t = this.x, e = this.y), super.render(), this.div.hidden = true, this.div.setAttribute("role", "figure"), this.addAltTextButton(), __privateGet(this, _t51) ? __privateMethod(this, _Ye_instances, a_fn6).call(this) : __privateMethod(this, _Ye_instances, f_fn7).call(this), this.width && !this.annotationElementId) {
        const [s, i] = this.parentDimensions;
        this.setAt(t * s, e * i, this.width * s, this.height * i);
      }
      return this._uiManager.addShouldRescale(this), this.div;
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      if (!this.parent) return;
      __privateGet(this, _o13) !== null && clearTimeout(__privateGet(this, _o13));
      const t = 200;
      __privateSet(this, _o13, setTimeout(() => {
        __privateSet(this, _o13, null), __privateMethod(this, _Ye_instances, m_fn4).call(this);
      }, t));
    }
    copyCanvas(t, e, s = false) {
      var _a9;
      t || (t = 224);
      const { width: i, height: n } = __privateGet(this, _t51), r = new Pe();
      let a = __privateGet(this, _t51), o = i, l = n, h = null;
      if (e) {
        if (i > e || n > e) {
          const S = Math.min(e / i, e / n);
          o = Math.floor(i * S), l = Math.floor(n * S);
        }
        h = document.createElement("canvas");
        const u = h.width = Math.ceil(o * r.sx), f = h.height = Math.ceil(l * r.sy);
        __privateGet(this, _c13) || (a = __privateMethod(this, _Ye_instances, p_fn5).call(this, u, f));
        const p = h.getContext("2d");
        p.filter = this._uiManager.hcmFilter;
        let g = "white", b = "#cfcfd8";
        this._uiManager.hcmFilter !== "none" ? b = "black" : ((_a9 = window.matchMedia) == null ? void 0 : _a9.call(window, "(prefers-color-scheme: dark)").matches) && (g = "#8f8f9d", b = "#42414d");
        const m = 15, A = m * r.sx, _ = m * r.sy, y = new OffscreenCanvas(A * 2, _ * 2), v = y.getContext("2d");
        v.fillStyle = g, v.fillRect(0, 0, A * 2, _ * 2), v.fillStyle = b, v.fillRect(0, 0, A, _), v.fillRect(A, _, A, _), p.fillStyle = p.createPattern(y, "repeat"), p.fillRect(0, 0, u, f), p.drawImage(a, 0, 0, a.width, a.height, 0, 0, u, f);
      }
      let d = null;
      if (s) {
        let u, f;
        if (r.symmetric && a.width < t && a.height < t) u = a.width, f = a.height;
        else if (a = __privateGet(this, _t51), i > t || n > t) {
          const b = Math.min(t / i, t / n);
          u = Math.floor(i * b), f = Math.floor(n * b), __privateGet(this, _c13) || (a = __privateMethod(this, _Ye_instances, p_fn5).call(this, u, f));
        }
        const g = new OffscreenCanvas(u, f).getContext("2d", {
          willReadFrequently: true
        });
        g.drawImage(a, 0, 0, a.width, a.height, 0, 0, u, f), d = {
          width: u,
          height: f,
          data: g.getImageData(0, 0, u, f).data
        };
      }
      return {
        canvas: h,
        width: o,
        height: l,
        imageData: d
      };
    }
    getImageForAltText() {
      return __privateGet(this, _l15);
    }
    static async deserialize(t, e, s) {
      var _a9;
      let i = null;
      if (t instanceof zs) {
        const { data: { rect: p, rotation: g, id: b, structParent: m, popupRef: A }, container: _, parent: { page: { pageNumber: y } } } = t, v = _.querySelector("canvas"), S = s.imageManager.getFromCanvas(_.id, v);
        v.remove();
        const w = ((_a9 = await e._structTree.getAriaAttributes(`${Fe}${b}`)) == null ? void 0 : _a9.get("aria-label")) || "";
        i = t = {
          annotationType: L.STAMP,
          bitmapId: S.id,
          bitmap: S.bitmap,
          pageIndex: y - 1,
          rect: p.slice(0),
          rotation: g,
          id: b,
          deleted: false,
          accessibilityData: {
            decorative: false,
            altText: w
          },
          isSvg: false,
          structParent: m,
          popupRef: A
        };
      }
      const n = await super.deserialize(t, e, s), { rect: r, bitmap: a, bitmapUrl: o, bitmapId: l, isSvg: h, accessibilityData: d } = t;
      l && s.imageManager.isValidId(l) ? (__privateSet(n, _e36, l), a && __privateSet(n, _t51, a)) : __privateSet(n, _i24, o), __privateSet(n, _c13, h);
      const [u, f] = n.pageDimensions;
      return n.width = (r[2] - r[0]) / u, n.height = (r[3] - r[1]) / f, n.annotationElementId = t.id || null, d && (n.altTextData = d), n._initialData = i, __privateSet(n, _h11, !!i), n;
    }
    serialize(t = false, e = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      const s = {
        annotationType: L.STAMP,
        bitmapId: __privateGet(this, _e36),
        pageIndex: this.pageIndex,
        rect: this.getRect(0, 0),
        rotation: this.rotation,
        isSvg: __privateGet(this, _c13),
        structTreeParentId: this._structTreeParentId
      };
      if (t) return s.bitmapUrl = __privateMethod(this, _Ye_instances, g_fn5).call(this, true), s.accessibilityData = this.serializeAltText(true), s;
      const { decorative: i, altText: n } = this.serializeAltText(false);
      if (!i && n && (s.accessibilityData = {
        type: "Figure",
        alt: n
      }), this.annotationElementId) {
        const a = __privateMethod(this, _Ye_instances, b_fn3).call(this, s);
        if (a.isSame) return null;
        a.isSameAltText ? delete s.accessibilityData : s.accessibilityData.structParent = this._initialData.structParent ?? -1;
      }
      if (s.id = this.annotationElementId, e === null) return s;
      e.stamps || (e.stamps = /* @__PURE__ */ new Map());
      const r = __privateGet(this, _c13) ? (s.rect[2] - s.rect[0]) * (s.rect[3] - s.rect[1]) : null;
      if (!e.stamps.has(__privateGet(this, _e36))) e.stamps.set(__privateGet(this, _e36), {
        area: r,
        serialized: s
      }), s.bitmap = __privateMethod(this, _Ye_instances, g_fn5).call(this, false);
      else if (__privateGet(this, _c13)) {
        const a = e.stamps.get(__privateGet(this, _e36));
        r > a.area && (a.area = r, a.serialized.bitmap.close(), a.serialized.bitmap = __privateMethod(this, _Ye_instances, g_fn5).call(this, false));
      }
      return s;
    }
    renderAnnotationElement(t) {
      return t.updateEdited({
        rect: this.getRect(0, 0)
      }), null;
    }
  };
  _t51 = new WeakMap();
  _e36 = new WeakMap();
  _s29 = new WeakMap();
  _i24 = new WeakMap();
  _r19 = new WeakMap();
  _n17 = new WeakMap();
  _l15 = new WeakMap();
  _o13 = new WeakMap();
  _c13 = new WeakMap();
  _h11 = new WeakMap();
  _Ye_instances = new WeakSet();
  u_fn6 = function(t, e = false) {
    if (!t) {
      this.remove();
      return;
    }
    __privateSet(this, _t51, t.bitmap), e || (__privateSet(this, _e36, t.id), __privateSet(this, _c13, t.isSvg)), t.file && __privateSet(this, _n17, t.file.name), __privateMethod(this, _Ye_instances, a_fn6).call(this);
  };
  d_fn7 = function() {
    if (__privateSet(this, _s29, null), this._uiManager.enableWaiting(false), !!__privateGet(this, _l15)) {
      if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _t51)) {
        this._editToolbar.hide(), this._uiManager.editAltText(this, true);
        return;
      }
      if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && __privateGet(this, _t51)) {
        this._reportTelemetry({
          action: "pdfjs.image.image_added",
          data: {
            alt_text_modal: false,
            alt_text_type: "empty"
          }
        });
        try {
          this.mlGuessAltText();
        } catch {
        }
      }
      this.div.focus();
    }
  };
  f_fn7 = function() {
    if (__privateGet(this, _e36)) {
      this._uiManager.enableWaiting(true), this._uiManager.imageManager.getFromId(__privateGet(this, _e36)).then((s) => __privateMethod(this, _Ye_instances, u_fn6).call(this, s, true)).finally(() => __privateMethod(this, _Ye_instances, d_fn7).call(this));
      return;
    }
    if (__privateGet(this, _i24)) {
      const s = __privateGet(this, _i24);
      __privateSet(this, _i24, null), this._uiManager.enableWaiting(true), __privateSet(this, _s29, this._uiManager.imageManager.getFromUrl(s).then((i) => __privateMethod(this, _Ye_instances, u_fn6).call(this, i)).finally(() => __privateMethod(this, _Ye_instances, d_fn7).call(this)));
      return;
    }
    if (__privateGet(this, _r19)) {
      const s = __privateGet(this, _r19);
      __privateSet(this, _r19, null), this._uiManager.enableWaiting(true), __privateSet(this, _s29, this._uiManager.imageManager.getFromFile(s).then((i) => __privateMethod(this, _Ye_instances, u_fn6).call(this, i)).finally(() => __privateMethod(this, _Ye_instances, d_fn7).call(this)));
      return;
    }
    const t = document.createElement("input");
    t.type = "file", t.accept = _Ye.supportedTypesStr;
    const e = this._uiManager._signal;
    __privateSet(this, _s29, new Promise((s) => {
      t.addEventListener("change", async () => {
        if (!t.files || t.files.length === 0) this.remove();
        else {
          this._uiManager.enableWaiting(true);
          const i = await this._uiManager.imageManager.getFromFile(t.files[0]);
          this._reportTelemetry({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: this._uiManager.useNewAltTextFlow
            }
          }), __privateMethod(this, _Ye_instances, u_fn6).call(this, i);
        }
        s();
      }, {
        signal: e
      }), t.addEventListener("cancel", () => {
        this.remove(), s();
      }, {
        signal: e
      });
    }).finally(() => __privateMethod(this, _Ye_instances, d_fn7).call(this))), t.click();
  };
  a_fn6 = function() {
    var _a9;
    const { div: t } = this;
    let { width: e, height: s } = __privateGet(this, _t51);
    const [i, n] = this.pageDimensions, r = 0.75;
    if (this.width) e = this.width * i, s = this.height * n;
    else if (e > r * i || s > r * n) {
      const h = Math.min(r * i / e, r * n / s);
      e *= h, s *= h;
    }
    const [a, o] = this.parentDimensions;
    this.setDims(e * a / i, s * o / n), this._uiManager.enableWaiting(false);
    const l = __privateSet(this, _l15, document.createElement("canvas"));
    l.setAttribute("role", "img"), this.addContainer(l), this.width = e / i, this.height = s / n, ((_a9 = this._initialOptions) == null ? void 0 : _a9.isCentered) ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (t.hidden = false), __privateMethod(this, _Ye_instances, m_fn4).call(this), __privateGet(this, _h11) || (this.parent.addUndoableEditor(this), __privateSet(this, _h11, true)), this._reportTelemetry({
      action: "inserted_image"
    }), __privateGet(this, _n17) && l.setAttribute("aria-label", __privateGet(this, _n17));
  };
  p_fn5 = function(t, e) {
    const { width: s, height: i } = __privateGet(this, _t51);
    let n = s, r = i, a = __privateGet(this, _t51);
    for (; n > 2 * t || r > 2 * e; ) {
      const o = n, l = r;
      n > 2 * t && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2)), r > 2 * e && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2));
      const h = new OffscreenCanvas(n, r);
      h.getContext("2d").drawImage(a, 0, 0, o, l, 0, 0, n, r), a = h.transferToImageBitmap();
    }
    return a;
  };
  m_fn4 = function() {
    const [t, e] = this.parentDimensions, { width: s, height: i } = this, n = new Pe(), r = Math.ceil(s * t * n.sx), a = Math.ceil(i * e * n.sy), o = __privateGet(this, _l15);
    if (!o || o.width === r && o.height === a) return;
    o.width = r, o.height = a;
    const l = __privateGet(this, _c13) ? __privateGet(this, _t51) : __privateMethod(this, _Ye_instances, p_fn5).call(this, r, a), h = o.getContext("2d");
    h.filter = this._uiManager.hcmFilter, h.drawImage(l, 0, 0, l.width, l.height, 0, 0, r, a);
  };
  g_fn5 = function(t) {
    if (t) {
      if (__privateGet(this, _c13)) {
        const i = this._uiManager.imageManager.getSvgUrl(__privateGet(this, _e36));
        if (i) return i;
      }
      const e = document.createElement("canvas");
      return { width: e.width, height: e.height } = __privateGet(this, _t51), e.getContext("2d").drawImage(__privateGet(this, _t51), 0, 0), e.toDataURL();
    }
    if (__privateGet(this, _c13)) {
      const [e, s] = this.pageDimensions, i = Math.round(this.width * e * $t.PDF_TO_CSS_UNITS), n = Math.round(this.height * s * $t.PDF_TO_CSS_UNITS), r = new OffscreenCanvas(i, n);
      return r.getContext("2d").drawImage(__privateGet(this, _t51), 0, 0, __privateGet(this, _t51).width, __privateGet(this, _t51).height, 0, 0, i, n), r.transferToImageBitmap();
    }
    return structuredClone(__privateGet(this, _t51));
  };
  b_fn3 = function(t) {
    var _a9;
    const { pageIndex: e, accessibilityData: { altText: s } } = this._initialData, i = t.pageIndex === e, n = (((_a9 = t.accessibilityData) == null ? void 0 : _a9.alt) || "") === s;
    return {
      isSame: !this._hasBeenMoved && !this._hasBeenResized && i && n,
      isSameAltText: n
    };
  };
  __publicField(_Ye, "_type", "stamp");
  __publicField(_Ye, "_editorType", L.STAMP);
  let Ye = _Ye;
  const _xt = class _xt {
    constructor({ uiManager: t, pageIndex: e, div: s, structTreeLayer: i, accessibilityManager: n, annotationLayer: r, drawLayer: a, textLayer: o, viewport: l, l10n: h }) {
      __privateAdd(this, _xt_instances);
      __privateAdd(this, _t52);
      __privateAdd(this, _e37, false);
      __privateAdd(this, _s30, null);
      __privateAdd(this, _i25, null);
      __privateAdd(this, _r20, null);
      __privateAdd(this, _n18, /* @__PURE__ */ new Map());
      __privateAdd(this, _l16, false);
      __privateAdd(this, _o14, false);
      __privateAdd(this, _c14, false);
      __privateAdd(this, _h12, null);
      __privateAdd(this, _u11, null);
      __privateAdd(this, _d9, null);
      __privateAdd(this, _f8, null);
      __privateAdd(this, _a8);
      const d = [
        ...__privateGet(_xt, _p7).values()
      ];
      if (!_xt._initialized) {
        _xt._initialized = true;
        for (const u of d) u.initialize(h, t);
      }
      t.registerEditorTypes(d), __privateSet(this, _a8, t), this.pageIndex = e, this.div = s, __privateSet(this, _t52, n), __privateSet(this, _s30, r), this.viewport = l, __privateSet(this, _d9, o), this.drawLayer = a, this._structTree = i, __privateGet(this, _a8).addLayer(this);
    }
    get isEmpty() {
      return __privateGet(this, _n18).size === 0;
    }
    get isInvisible() {
      return this.isEmpty && __privateGet(this, _a8).getMode() === L.NONE;
    }
    updateToolbar(t) {
      __privateGet(this, _a8).updateToolbar(t);
    }
    updateMode(t = __privateGet(this, _a8).getMode()) {
      switch (__privateMethod(this, _xt_instances, A_fn3).call(this), t) {
        case L.NONE:
          this.disableTextSelection(), this.togglePointerEvents(false), this.toggleAnnotationLayerPointerEvents(true), this.disableClick();
          return;
        case L.INK:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
          break;
        case L.HIGHLIGHT:
          this.enableTextSelection(), this.togglePointerEvents(false), this.disableClick();
          break;
        default:
          this.disableTextSelection(), this.togglePointerEvents(true), this.enableClick();
      }
      this.toggleAnnotationLayerPointerEvents(false);
      const { classList: e } = this.div;
      for (const s of __privateGet(_xt, _p7).values()) e.toggle(`${s._type}Editing`, t === s._editorType);
      this.div.hidden = false;
    }
    hasTextLayer(t) {
      var _a9;
      return t === ((_a9 = __privateGet(this, _d9)) == null ? void 0 : _a9.div);
    }
    setEditingState(t) {
      __privateGet(this, _a8).setEditingState(t);
    }
    addCommands(t) {
      __privateGet(this, _a8).addCommands(t);
    }
    cleanUndoStack(t) {
      __privateGet(this, _a8).cleanUndoStack(t);
    }
    toggleDrawing(t = false) {
      this.div.classList.toggle("drawing", !t);
    }
    togglePointerEvents(t = false) {
      this.div.classList.toggle("disabled", !t);
    }
    toggleAnnotationLayerPointerEvents(t = false) {
      var _a9;
      (_a9 = __privateGet(this, _s30)) == null ? void 0 : _a9.div.classList.toggle("disabled", !t);
    }
    async enable() {
      __privateSet(this, _c14, true), this.div.tabIndex = 0, this.togglePointerEvents(true);
      const t = /* @__PURE__ */ new Set();
      for (const s of __privateGet(this, _n18).values()) s.enableEditing(), s.show(true), s.annotationElementId && (__privateGet(this, _a8).removeChangedExistingAnnotation(s), t.add(s.annotationElementId));
      if (!__privateGet(this, _s30)) {
        __privateSet(this, _c14, false);
        return;
      }
      const e = __privateGet(this, _s30).getEditableAnnotations();
      for (const s of e) {
        if (s.hide(), __privateGet(this, _a8).isDeletedAnnotationElement(s.data.id) || t.has(s.data.id)) continue;
        const i = await this.deserialize(s);
        i && (this.addOrRebuild(i), i.enableEditing());
      }
      __privateSet(this, _c14, false);
    }
    disable() {
      var _a9;
      __privateSet(this, _o14, true), this.div.tabIndex = -1, this.togglePointerEvents(false);
      const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
      for (const i of __privateGet(this, _n18).values()) if (i.disableEditing(), !!i.annotationElementId) {
        if (i.serialize() !== null) {
          t.set(i.annotationElementId, i);
          continue;
        } else e.set(i.annotationElementId, i);
        (_a9 = this.getEditableAnnotation(i.annotationElementId)) == null ? void 0 : _a9.show(), i.remove();
      }
      if (__privateGet(this, _s30)) {
        const i = __privateGet(this, _s30).getEditableAnnotations();
        for (const n of i) {
          const { id: r } = n.data;
          if (__privateGet(this, _a8).isDeletedAnnotationElement(r)) continue;
          let a = e.get(r);
          if (a) {
            a.resetAnnotationElement(n), a.show(false), n.show();
            continue;
          }
          a = t.get(r), a && (__privateGet(this, _a8).addChangedExistingAnnotation(a), a.renderAnnotationElement(n) && a.show(false)), n.show();
        }
      }
      __privateMethod(this, _xt_instances, A_fn3).call(this), this.isEmpty && (this.div.hidden = true);
      const { classList: s } = this.div;
      for (const i of __privateGet(_xt, _p7).values()) s.remove(`${i._type}Editing`);
      this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(true), __privateSet(this, _o14, false);
    }
    getEditableAnnotation(t) {
      var _a9;
      return ((_a9 = __privateGet(this, _s30)) == null ? void 0 : _a9.getEditableAnnotation(t)) || null;
    }
    setActiveEditor(t) {
      __privateGet(this, _a8).getActive() !== t && __privateGet(this, _a8).setActiveEditor(t);
    }
    enableTextSelection() {
      var _a9;
      if (this.div.tabIndex = -1, ((_a9 = __privateGet(this, _d9)) == null ? void 0 : _a9.div) && !__privateGet(this, _f8)) {
        __privateSet(this, _f8, new AbortController());
        const t = __privateGet(this, _a8).combinedSignal(__privateGet(this, _f8));
        __privateGet(this, _d9).div.addEventListener("pointerdown", __privateMethod(this, _xt_instances, m_fn5).bind(this), {
          signal: t
        }), __privateGet(this, _d9).div.classList.add("highlighting");
      }
    }
    disableTextSelection() {
      var _a9;
      this.div.tabIndex = 0, ((_a9 = __privateGet(this, _d9)) == null ? void 0 : _a9.div) && __privateGet(this, _f8) && (__privateGet(this, _f8).abort(), __privateSet(this, _f8, null), __privateGet(this, _d9).div.classList.remove("highlighting"));
    }
    enableClick() {
      if (__privateGet(this, _i25)) return;
      __privateSet(this, _i25, new AbortController());
      const t = __privateGet(this, _a8).combinedSignal(__privateGet(this, _i25));
      this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
        signal: t
      });
      const e = this.pointerup.bind(this);
      this.div.addEventListener("pointerup", e, {
        signal: t
      }), this.div.addEventListener("pointercancel", e, {
        signal: t
      });
    }
    disableClick() {
      var _a9;
      (_a9 = __privateGet(this, _i25)) == null ? void 0 : _a9.abort(), __privateSet(this, _i25, null);
    }
    attach(t) {
      __privateGet(this, _n18).set(t.id, t);
      const { annotationElementId: e } = t;
      e && __privateGet(this, _a8).isDeletedAnnotationElement(e) && __privateGet(this, _a8).removeDeletedAnnotationElement(t);
    }
    detach(t) {
      var _a9;
      __privateGet(this, _n18).delete(t.id), (_a9 = __privateGet(this, _t52)) == null ? void 0 : _a9.removePointerInTextLayer(t.contentDiv), !__privateGet(this, _o14) && t.annotationElementId && __privateGet(this, _a8).addDeletedAnnotationElement(t);
    }
    remove(t) {
      this.detach(t), __privateGet(this, _a8).removeEditor(t), t.div.remove(), t.isAttachedToDOM = false;
    }
    changeParent(t) {
      var _a9;
      t.parent !== this && (t.parent && t.annotationElementId && (__privateGet(this, _a8).addDeletedAnnotationElement(t.annotationElementId), R.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (_a9 = t.parent) == null ? void 0 : _a9.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
    }
    add(t) {
      if (!(t.parent === this && t.isAttachedToDOM)) {
        if (this.changeParent(t), __privateGet(this, _a8).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
          const e = t.render();
          this.div.append(e), t.isAttachedToDOM = true;
        }
        t.fixAndSetPosition(), t.onceAdded(!__privateGet(this, _c14)), __privateGet(this, _a8).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
      }
    }
    moveEditorInDOM(t) {
      var _a9;
      if (!t.isAttachedToDOM) return;
      const { activeElement: e } = document;
      t.div.contains(e) && !__privateGet(this, _r20) && (t._focusEventsAllowed = false, __privateSet(this, _r20, setTimeout(() => {
        __privateSet(this, _r20, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = true : (t.div.addEventListener("focusin", () => {
          t._focusEventsAllowed = true;
        }, {
          once: true,
          signal: __privateGet(this, _a8)._signal
        }), e.focus());
      }, 0))), t._structTreeParentId = (_a9 = __privateGet(this, _t52)) == null ? void 0 : _a9.moveElementInDOM(this.div, t.div, t.contentDiv, true);
    }
    addOrRebuild(t) {
      t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
    }
    addUndoableEditor(t) {
      const e = () => t._uiManager.rebuild(t), s = () => {
        t.remove();
      };
      this.addCommands({
        cmd: e,
        undo: s,
        mustExec: false
      });
    }
    getNextId() {
      return __privateGet(this, _a8).getId();
    }
    combinedSignal(t) {
      return __privateGet(this, _a8).combinedSignal(t);
    }
    canCreateNewEmptyEditor() {
      var _a9;
      return (_a9 = __privateGet(this, _xt_instances, g_get)) == null ? void 0 : _a9.canCreateNewEmptyEditor();
    }
    pasteEditor(t, e) {
      __privateGet(this, _a8).updateToolbar(t), __privateGet(this, _a8).updateMode(t);
      const { offsetX: s, offsetY: i } = __privateMethod(this, _xt_instances, y_fn4).call(this), n = this.getNextId(), r = __privateMethod(this, _xt_instances, b_fn4).call(this, {
        parent: this,
        id: n,
        x: s,
        y: i,
        uiManager: __privateGet(this, _a8),
        isCentered: true,
        ...e
      });
      r && this.add(r);
    }
    async deserialize(t) {
      var _a9;
      return await ((_a9 = __privateGet(_xt, _p7).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : _a9.deserialize(t, this, __privateGet(this, _a8))) || null;
    }
    createAndAddNewEditor(t, e, s = {}) {
      const i = this.getNextId(), n = __privateMethod(this, _xt_instances, b_fn4).call(this, {
        parent: this,
        id: i,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: __privateGet(this, _a8),
        isCentered: e,
        ...s
      });
      return n && this.add(n), n;
    }
    addNewEditor() {
      this.createAndAddNewEditor(__privateMethod(this, _xt_instances, y_fn4).call(this), true);
    }
    setSelected(t) {
      __privateGet(this, _a8).setSelected(t);
    }
    toggleSelected(t) {
      __privateGet(this, _a8).toggleSelected(t);
    }
    unselect(t) {
      __privateGet(this, _a8).unselect(t);
    }
    pointerup(t) {
      var _a9;
      const { isMac: e } = at.platform;
      if (!(t.button !== 0 || t.ctrlKey && e) && t.target === this.div && __privateGet(this, _l16) && (__privateSet(this, _l16, false), !(((_a9 = __privateGet(this, _xt_instances, g_get)) == null ? void 0 : _a9.isDrawer) && __privateGet(this, _xt_instances, g_get).supportMultipleDrawings))) {
        if (!__privateGet(this, _e37)) {
          __privateSet(this, _e37, true);
          return;
        }
        if (__privateGet(this, _a8).getMode() === L.STAMP) {
          __privateGet(this, _a8).unselectAll();
          return;
        }
        this.createAndAddNewEditor(t, false);
      }
    }
    pointerdown(t) {
      var _a9;
      if (__privateGet(this, _a8).getMode() === L.HIGHLIGHT && this.enableTextSelection(), __privateGet(this, _l16)) {
        __privateSet(this, _l16, false);
        return;
      }
      const { isMac: e } = at.platform;
      if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div) return;
      if (__privateSet(this, _l16, true), (_a9 = __privateGet(this, _xt_instances, g_get)) == null ? void 0 : _a9.isDrawer) {
        this.startDrawingSession(t);
        return;
      }
      const s = __privateGet(this, _a8).getActive();
      __privateSet(this, _e37, !s || s.isEmpty());
    }
    startDrawingSession(t) {
      if (this.div.focus(), __privateGet(this, _h12)) {
        __privateGet(this, _xt_instances, g_get).startDrawing(this, __privateGet(this, _a8), false, t);
        return;
      }
      __privateGet(this, _a8).setCurrentDrawingSession(this), __privateSet(this, _h12, new AbortController());
      const e = __privateGet(this, _a8).combinedSignal(__privateGet(this, _h12));
      this.div.addEventListener("blur", ({ relatedTarget: s }) => {
        s && !this.div.contains(s) && (__privateSet(this, _u11, null), this.commitOrRemove());
      }, {
        signal: e
      }), __privateGet(this, _xt_instances, g_get).startDrawing(this, __privateGet(this, _a8), false, t);
    }
    pause(t) {
      if (t) {
        const { activeElement: e } = document;
        this.div.contains(e) && __privateSet(this, _u11, e);
        return;
      }
      __privateGet(this, _u11) && setTimeout(() => {
        var _a9;
        (_a9 = __privateGet(this, _u11)) == null ? void 0 : _a9.focus(), __privateSet(this, _u11, null);
      }, 0);
    }
    endDrawingSession(t = false) {
      return __privateGet(this, _h12) ? (__privateGet(this, _a8).setCurrentDrawingSession(null), __privateGet(this, _h12).abort(), __privateSet(this, _h12, null), __privateSet(this, _u11, null), __privateGet(this, _xt_instances, g_get).endDrawing(t)) : null;
    }
    findNewParent(t, e, s) {
      const i = __privateGet(this, _a8).findParent(e, s);
      return i === null || i === this ? false : (i.changeParent(t), true);
    }
    commitOrRemove() {
      return __privateGet(this, _h12) ? (this.endDrawingSession(), true) : false;
    }
    onScaleChanging() {
      __privateGet(this, _h12) && __privateGet(this, _xt_instances, g_get).onScaleChangingWhenDrawing(this);
    }
    destroy() {
      var _a9, _b6;
      this.commitOrRemove(), ((_a9 = __privateGet(this, _a8).getActive()) == null ? void 0 : _a9.parent) === this && (__privateGet(this, _a8).commitOrRemove(), __privateGet(this, _a8).setActiveEditor(null)), __privateGet(this, _r20) && (clearTimeout(__privateGet(this, _r20)), __privateSet(this, _r20, null));
      for (const t of __privateGet(this, _n18).values()) (_b6 = __privateGet(this, _t52)) == null ? void 0 : _b6.removePointerInTextLayer(t.contentDiv), t.setParent(null), t.isAttachedToDOM = false, t.div.remove();
      this.div = null, __privateGet(this, _n18).clear(), __privateGet(this, _a8).removeLayer(this);
    }
    render({ viewport: t }) {
      this.viewport = t, It(this.div, t);
      for (const e of __privateGet(this, _a8).getEditors(this.pageIndex)) this.add(e), e.rebuild();
      this.updateMode();
    }
    update({ viewport: t }) {
      __privateGet(this, _a8).commitOrRemove(), __privateMethod(this, _xt_instances, A_fn3).call(this);
      const e = this.viewport.rotation, s = t.rotation;
      if (this.viewport = t, It(this.div, {
        rotation: s
      }), e !== s) for (const i of __privateGet(this, _n18).values()) i.rotate(s);
    }
    get pageDimensions() {
      const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
      return [
        t,
        e
      ];
    }
    get scale() {
      return __privateGet(this, _a8).viewParameters.realScale;
    }
  };
  _t52 = new WeakMap();
  _e37 = new WeakMap();
  _s30 = new WeakMap();
  _i25 = new WeakMap();
  _r20 = new WeakMap();
  _n18 = new WeakMap();
  _l16 = new WeakMap();
  _o14 = new WeakMap();
  _c14 = new WeakMap();
  _h12 = new WeakMap();
  _u11 = new WeakMap();
  _d9 = new WeakMap();
  _f8 = new WeakMap();
  _a8 = new WeakMap();
  _p7 = new WeakMap();
  _xt_instances = new WeakSet();
  m_fn5 = function(t) {
    __privateGet(this, _a8).unselectAll();
    const { target: e } = t;
    if (e === __privateGet(this, _d9).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent")) && __privateGet(this, _d9).div.contains(e)) {
      const { isMac: s } = at.platform;
      if (t.button !== 0 || t.ctrlKey && s) return;
      __privateGet(this, _a8).showAllEditors("highlight", true, true), __privateGet(this, _d9).div.classList.add("free"), this.toggleDrawing(), j.startHighlighting(this, __privateGet(this, _a8).direction === "ltr", {
        target: __privateGet(this, _d9).div,
        x: t.x,
        y: t.y
      }), __privateGet(this, _d9).div.addEventListener("pointerup", () => {
        __privateGet(this, _d9).div.classList.remove("free"), this.toggleDrawing(true);
      }, {
        once: true,
        signal: __privateGet(this, _a8)._signal
      }), t.preventDefault();
    }
  };
  g_get = function() {
    return __privateGet(_xt, _p7).get(__privateGet(this, _a8).getMode());
  };
  b_fn4 = function(t) {
    const e = __privateGet(this, _xt_instances, g_get);
    return e ? new e.prototype.constructor(t) : null;
  };
  y_fn4 = function() {
    const { x: t, y: e, width: s, height: i } = this.div.getBoundingClientRect(), n = Math.max(0, t), r = Math.max(0, e), a = Math.min(window.innerWidth, t + s), o = Math.min(window.innerHeight, e + i), l = (n + a) / 2 - t, h = (r + o) / 2 - e, [d, u] = this.viewport.rotation % 180 === 0 ? [
      l,
      h
    ] : [
      h,
      l
    ];
    return {
      offsetX: d,
      offsetY: u
    };
  };
  A_fn3 = function() {
    for (const t of __privateGet(this, _n18).values()) t.isEmpty() && t.remove();
  };
  __publicField(_xt, "_initialized", false);
  __privateAdd(_xt, _p7, new Map([
    Q,
    qe,
    Ye,
    j
  ].map((t) => [
    t._editorType,
    t
  ])));
  let xt = _xt;
  const _nt = class _nt {
    constructor({ pageIndex: t }) {
      __privateAdd(this, _nt_instances);
      __privateAdd(this, _t53, null);
      __privateAdd(this, _e38, 0);
      __privateAdd(this, _s31, /* @__PURE__ */ new Map());
      __privateAdd(this, _i26, /* @__PURE__ */ new Map());
      this.pageIndex = t;
    }
    setParent(t) {
      if (!__privateGet(this, _t53)) {
        __privateSet(this, _t53, t);
        return;
      }
      if (__privateGet(this, _t53) !== t) {
        if (__privateGet(this, _s31).size > 0) for (const e of __privateGet(this, _s31).values()) e.remove(), t.append(e);
        __privateSet(this, _t53, t);
      }
    }
    static get _svgFactory() {
      return F(this, "_svgFactory", new Ve());
    }
    draw(t, e = false, s = false) {
      const i = __privateWrapper(this, _e38)._++, n = __privateMethod(this, _nt_instances, n_fn6).call(this), r = _nt._svgFactory.createElement("defs");
      n.append(r);
      const a = _nt._svgFactory.createElement("path");
      r.append(a);
      const o = `path_p${this.pageIndex}_${i}`;
      a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke"), e && __privateGet(this, _i26).set(i, a);
      const l = s ? __privateMethod(this, _nt_instances, l_fn4).call(this, r, o) : null, h = _nt._svgFactory.createElement("use");
      return n.append(h), h.setAttribute("href", `#${o}`), this.updateProperties(n, t), __privateGet(this, _s31).set(i, n), {
        id: i,
        clipPathId: `url(#${l})`
      };
    }
    drawOutline(t, e) {
      const s = __privateWrapper(this, _e38)._++, i = __privateMethod(this, _nt_instances, n_fn6).call(this), n = _nt._svgFactory.createElement("defs");
      i.append(n);
      const r = _nt._svgFactory.createElement("path");
      n.append(r);
      const a = `path_p${this.pageIndex}_${s}`;
      r.setAttribute("id", a), r.setAttribute("vector-effect", "non-scaling-stroke");
      let o;
      if (e) {
        const d = _nt._svgFactory.createElement("mask");
        n.append(d), o = `mask_p${this.pageIndex}_${s}`, d.setAttribute("id", o), d.setAttribute("maskUnits", "objectBoundingBox");
        const u = _nt._svgFactory.createElement("rect");
        d.append(u), u.setAttribute("width", "1"), u.setAttribute("height", "1"), u.setAttribute("fill", "white");
        const f = _nt._svgFactory.createElement("use");
        d.append(f), f.setAttribute("href", `#${a}`), f.setAttribute("stroke", "none"), f.setAttribute("fill", "black"), f.setAttribute("fill-rule", "nonzero"), f.classList.add("mask");
      }
      const l = _nt._svgFactory.createElement("use");
      i.append(l), l.setAttribute("href", `#${a}`), o && l.setAttribute("mask", `url(#${o})`);
      const h = l.cloneNode();
      return i.append(h), l.classList.add("mainOutline"), h.classList.add("secondaryOutline"), this.updateProperties(i, t), __privateGet(this, _s31).set(s, i), s;
    }
    finalizeDraw(t, e) {
      __privateGet(this, _i26).delete(t), this.updateProperties(t, e);
    }
    updateProperties(t, e) {
      var _a9;
      if (!e) return;
      const { root: s, bbox: i, rootClass: n, path: r } = e, a = typeof t == "number" ? __privateGet(this, _s31).get(t) : t;
      if (a) {
        if (s && __privateMethod(this, _nt_instances, o_fn5).call(this, a, s), i && __privateMethod(_a9 = _nt, _nt_static, r_fn6).call(_a9, a, i), n) {
          const { classList: o } = a;
          for (const [l, h] of Object.entries(n)) o.toggle(l, h);
        }
        if (r) {
          const l = a.firstChild.firstChild;
          __privateMethod(this, _nt_instances, o_fn5).call(this, l, r);
        }
      }
    }
    updateParent(t, e) {
      if (e === this) return;
      const s = __privateGet(this, _s31).get(t);
      s && (__privateGet(e, _t53).append(s), __privateGet(this, _s31).delete(t), __privateGet(e, _s31).set(t, s));
    }
    remove(t) {
      __privateGet(this, _i26).delete(t), __privateGet(this, _t53) !== null && (__privateGet(this, _s31).get(t).remove(), __privateGet(this, _s31).delete(t));
    }
    destroy() {
      __privateSet(this, _t53, null);
      for (const t of __privateGet(this, _s31).values()) t.remove();
      __privateGet(this, _s31).clear(), __privateGet(this, _i26).clear();
    }
  };
  _t53 = new WeakMap();
  _e38 = new WeakMap();
  _s31 = new WeakMap();
  _i26 = new WeakMap();
  _nt_static = new WeakSet();
  r_fn6 = function(t, [e, s, i, n]) {
    const { style: r } = t;
    r.top = `${100 * s}%`, r.left = `${100 * e}%`, r.width = `${100 * i}%`, r.height = `${100 * n}%`;
  };
  _nt_instances = new WeakSet();
  n_fn6 = function() {
    const t = _nt._svgFactory.create(1, 1, true);
    return __privateGet(this, _t53).append(t), t.setAttribute("aria-hidden", true), t;
  };
  l_fn4 = function(t, e) {
    const s = _nt._svgFactory.createElement("clipPath");
    t.append(s);
    const i = `clip_${e}`;
    s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
    const n = _nt._svgFactory.createElement("use");
    return s.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), i;
  };
  o_fn5 = function(t, e) {
    for (const [s, i] of Object.entries(e)) i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
  };
  __privateAdd(_nt, _nt_static);
  let nt = _nt;
  globalThis.pdfjsTestingUtils = {
    HighlightOutliner: Ie
  };
  Vn = I.AbortException;
  Wn = I.AnnotationEditorLayer;
  Xn = I.AnnotationEditorParamsType;
  qn = I.AnnotationEditorType;
  Yn = I.AnnotationEditorUIManager;
  Kn = I.AnnotationLayer;
  Qn = I.AnnotationMode;
  Jn = I.ColorPicker;
  Zn = I.DOMSVGFactory;
  tr = I.DrawLayer;
  er = I.FeatureTest;
  sr = I.GlobalWorkerOptions;
  ir = I.ImageKind;
  nr = I.InvalidPDFException;
  rr = I.MissingPDFException;
  ar = I.OPS;
  or = I.OutputScale;
  lr = I.PDFDataRangeTransport;
  hr = I.PDFDateString;
  cr = I.PDFWorker;
  dr = I.PasswordResponses;
  ur = I.PermissionFlag;
  fr = I.PixelsPerInch;
  pr = I.RenderingCancelledException;
  gr = I.TextLayer;
  mr = I.TouchManager;
  br = I.UnexpectedResponseException;
  Ar = I.Util;
  _r = I.VerbosityLevel;
  yr = I.XfaLayer;
  vr = I.build;
  wr = I.createValidAbsoluteUrl;
  Sr = I.fetchData;
  Er = I.getDocument;
  xr = I.getFilenameFromUrl;
  Cr = I.getPdfFilenameFromUrl;
  Tr = I.getXfaPageViewport;
  Pr = I.isDataScheme;
  kr = I.isPdfFile;
  Rr = I.noContextMenu;
  Mr = I.normalizeUnicode;
  Ir = I.setLayerDimensions;
  Lr = I.shadow;
  Dr = I.stopEvent;
  Fr = I.version;
})();
export {
  Vn as AbortException,
  Wn as AnnotationEditorLayer,
  Xn as AnnotationEditorParamsType,
  qn as AnnotationEditorType,
  Yn as AnnotationEditorUIManager,
  Kn as AnnotationLayer,
  Qn as AnnotationMode,
  Jn as ColorPicker,
  Zn as DOMSVGFactory,
  tr as DrawLayer,
  er as FeatureTest,
  sr as GlobalWorkerOptions,
  ir as ImageKind,
  nr as InvalidPDFException,
  rr as MissingPDFException,
  ar as OPS,
  or as OutputScale,
  lr as PDFDataRangeTransport,
  hr as PDFDateString,
  cr as PDFWorker,
  dr as PasswordResponses,
  ur as PermissionFlag,
  fr as PixelsPerInch,
  pr as RenderingCancelledException,
  gr as TextLayer,
  mr as TouchManager,
  br as UnexpectedResponseException,
  Ar as Util,
  _r as VerbosityLevel,
  yr as XfaLayer,
  __tla,
  vr as build,
  wr as createValidAbsoluteUrl,
  Sr as fetchData,
  Er as getDocument,
  xr as getFilenameFromUrl,
  Cr as getPdfFilenameFromUrl,
  Tr as getXfaPageViewport,
  Pr as isDataScheme,
  kr as isPdfFile,
  Rr as noContextMenu,
  Mr as normalizeUnicode,
  Ir as setLayerDimensions,
  Lr as shadow,
  Dr as stopEvent,
  Fr as version
};
