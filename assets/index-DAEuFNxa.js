(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: true, subtree: true });
  function t(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const fa = "180", Bi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ni = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, th = 0, Fa = 1, nh = 2, cc = 1, ih = 2, Dn = 3, Bn = 0, Xt = 1, fn = 2, jn = 0, ki = 1, Oa = 2, Ba = 3, ka = 4, sh = 5, li = 100, rh = 101, oh = 102, ah = 103, lh = 104, ch = 200, hh = 201, uh = 202, dh = 203, So = 204, yo = 205, fh = 206, ph = 207, mh = 208, gh = 209, _h = 210, xh = 211, vh = 212, Mh = 213, Sh = 214, Eo = 0, To = 1, bo = 2, Gi = 3, Ao = 4, wo = 5, Ro = 6, Co = 7, hc = 0, yh = 1, Eh = 2, $n = 0, Th = 1, bh = 2, Ah = 3, uc = 4, wh = 5, Rh = 6, Ch = 7, za = "attached", Ph = "detached", dc = 300, Wi = 301, Xi = 302, Sr = 303, Po = 304, Rr = 306, Yi = 1e3, pn = 1001, yr = 1002, kt = 1003, fc = 1004, fs = 1005, It = 1006, mr = 1007, mn = 1008, xn = 1009, pc = 1010, mc = 1011, vs = 1012, pa = 1013, pi = 1014, Gt = 1015, Un = 1016, ma = 1017, ga = 1018, Ms = 1020, gc = 35902, _c = 35899, xc = 1021, vc = 1022, Pt = 1023, Ss = 1026, ys = 1027, ui = 1028, _a = 1029, ci = 1030, xa = 1031, va = 1033, gr = 33776, _r = 33777, xr = 33778, vr = 33779, Io = 35840, Do = 35841, Lo = 35842, Uo = 35843, No = 36196, Fo = 37492, Oo = 37496, Bo = 37808, ko = 37809, zo = 37810, Ho = 37811, Vo = 37812, Go = 37813, Wo = 37814, Xo = 37815, Yo = 37816, qo = 37817, Ko = 37818, Zo = 37819, jo = 37820, $o = 37821, Jo = 36492, Qo = 36494, ea = 36495, ta = 36283, na = 36284, ia = 36285, sa = 36286, Es = 2300, Ts = 2301, Dr = 2302, Ha = 2400, Va = 2401, Ga = 2402, Ih = 2500, Dh = 0, Mc = 1, ra = 2, Lh = 3200, Uh = 3201, Sc = 0, Nh = 1, Zn = "", Lt = "srgb", St = "srgb-linear", Er = "linear", dt = "srgb", vi = 7680, Wa = 519, Fh = 512, Oh = 513, Bh = 514, yc = 515, kh = 516, zh = 517, Hh = 518, Vh = 519, oa = 35044, Xa = "300 es", gn = 2e3, Tr = 2001;
class gi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? false : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const Ut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Ya = 1234567;
const ms = Math.PI / 180, qi = 180 / Math.PI;
function ln() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Ut[s & 255] + Ut[s >> 8 & 255] + Ut[s >> 16 & 255] + Ut[s >> 24 & 255] + "-" + Ut[e & 255] + Ut[e >> 8 & 255] + "-" + Ut[e >> 16 & 15 | 64] + Ut[e >> 24 & 255] + "-" + Ut[t & 63 | 128] + Ut[t >> 8 & 255] + "-" + Ut[t >> 16 & 255] + Ut[t >> 24 & 255] + Ut[n & 255] + Ut[n >> 8 & 255] + Ut[n >> 16 & 255] + Ut[n >> 24 & 255]).toLowerCase();
}
function Je(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Ma(s, e) {
  return (s % e + e) % e;
}
function Gh(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Wh(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function gs(s, e, t) {
  return (1 - t) * s + t * e;
}
function Xh(s, e, t, n) {
  return gs(s, e, 1 - Math.exp(-t * n));
}
function Yh(s, e = 1) {
  return e - Math.abs(Ma(s, e * 2) - e);
}
function qh(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function Kh(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Zh(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function jh(s, e) {
  return s + Math.random() * (e - s);
}
function $h(s) {
  return s * (0.5 - Math.random());
}
function Jh(s) {
  s !== void 0 && (Ya = s);
  let e = Ya += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Qh(s) {
  return s * ms;
}
function eu(s) {
  return s * qi;
}
function tu(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function nu(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function iu(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function su(s, e, t, n, i) {
  const r = Math.cos, o = Math.sin, a = r(t / 2), c = o(t / 2), l = r((e + n) / 2), u = o((e + n) / 2), h = r((e - n) / 2), f = o((e - n) / 2), g = r((n - e) / 2), v = o((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(a * u, c * h, c * f, a * l);
      break;
    case "YZY":
      s.set(c * f, a * u, c * h, a * l);
      break;
    case "ZXZ":
      s.set(c * h, c * f, a * u, a * l);
      break;
    case "XZX":
      s.set(a * u, c * v, c * g, a * l);
      break;
    case "YXY":
      s.set(c * g, a * u, c * v, a * l);
      break;
    case "ZYZ":
      s.set(c * v, c * g, a * u, a * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function on(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ct(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Ec = { DEG2RAD: ms, RAD2DEG: qi, generateUUID: ln, clamp: Je, euclideanModulo: Ma, mapLinear: Gh, inverseLerp: Wh, lerp: gs, damp: Xh, pingpong: Yh, smoothstep: qh, smootherstep: Kh, randInt: Zh, randFloat: jh, randFloatSpread: $h, seededRandom: Jh, degToRad: Qh, radToDeg: eu, isPowerOfTwo: tu, ceilPowerOfTwo: nu, floorPowerOfTwo: iu, setQuaternionFromProperEuler: su, normalize: ct, denormalize: on };
class Ge {
  constructor(e = 0, t = 0) {
    Ge.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Je(this.x, e.x, t.x), this.y = Je(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Je(this.x, e, t), this.y = Je(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Je(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Je(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y;
    return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class vn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let c = n[i + 0], l = n[i + 1], u = n[i + 2], h = n[i + 3];
    const f = r[o + 0], g = r[o + 1], v = r[o + 2], S = r[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = g, e[t + 2] = v, e[t + 3] = S;
      return;
    }
    if (h !== S || c !== f || l !== g || u !== v) {
      let _ = 1 - a;
      const p = c * f + l * g + u * v + h * S, I = p >= 0 ? 1 : -1, P = 1 - p * p;
      if (P > Number.EPSILON) {
        const L = Math.sqrt(P), O = Math.atan2(L, p * I);
        _ = Math.sin(_ * O) / L, a = Math.sin(a * O) / L;
      }
      const E = a * I;
      if (c = c * _ + f * E, l = l * _ + g * E, u = u * _ + v * E, h = h * _ + S * E, _ === 1 - a) {
        const L = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
        c *= L, l *= L, u *= L, h *= L;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i], c = n[i + 1], l = n[i + 2], u = n[i + 3], h = r[o], f = r[o + 1], g = r[o + 2], v = r[o + 3];
    return e[t] = a * v + u * h + c * g - l * f, e[t + 1] = c * v + u * f + l * h - a * g, e[t + 2] = l * v + u * g + a * f - c * h, e[t + 3] = u * v - a * h - c * f - l * g, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(i / 2), h = a(r / 2), f = c(n / 2), g = c(i / 2), v = c(r / 2);
    switch (o) {
      case "XYZ":
        this._x = f * u * h + l * g * v, this._y = l * g * h - f * u * v, this._z = l * u * v + f * g * h, this._w = l * u * h - f * g * v;
        break;
      case "YXZ":
        this._x = f * u * h + l * g * v, this._y = l * g * h - f * u * v, this._z = l * u * v - f * g * h, this._w = l * u * h + f * g * v;
        break;
      case "ZXY":
        this._x = f * u * h - l * g * v, this._y = l * g * h + f * u * v, this._z = l * u * v + f * g * h, this._w = l * u * h - f * g * v;
        break;
      case "ZYX":
        this._x = f * u * h - l * g * v, this._y = l * g * h + f * u * v, this._z = l * u * v - f * g * h, this._w = l * u * h + f * g * v;
        break;
      case "YZX":
        this._x = f * u * h + l * g * v, this._y = l * g * h + f * u * v, this._z = l * u * v - f * g * h, this._w = l * u * h - f * g * v;
        break;
      case "XZY":
        this._x = f * u * h - l * g * v, this._y = l * g * h - f * u * v, this._z = l * u * v + f * g * h, this._w = l * u * h + f * g * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], c = t[9], l = t[2], u = t[6], h = t[10], f = n + a + h;
    if (f > 0) {
      const g = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / g, this._x = (u - c) * g, this._y = (r - l) * g, this._z = (o - i) * g;
    } else if (n > a && n > h) {
      const g = 2 * Math.sqrt(1 + n - a - h);
      this._w = (u - c) / g, this._x = 0.25 * g, this._y = (i + o) / g, this._z = (r + l) / g;
    } else if (a > h) {
      const g = 2 * Math.sqrt(1 + a - n - h);
      this._w = (r - l) / g, this._x = (i + o) / g, this._y = 0.25 * g, this._z = (c + u) / g;
    } else {
      const g = 2 * Math.sqrt(1 + h - n - a);
      this._w = (o - i) / g, this._x = (r + l) / g, this._y = (c + u) / g, this._z = 0.25 * g;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Je(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + o * a + i * l - r * c, this._y = i * u + o * c + r * a - n * l, this._z = r * u + o * l + n * c - i * a, this._w = o * u - n * a - i * c - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const g = 1 - t;
      return this._w = g * o + t * this._w, this._x = g * n + t * this._x, this._y = g * i + t * this._y, this._z = g * r + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, a), h = Math.sin((1 - t) * u) / l, f = Math.sin(t * u) / l;
    return this._w = o * h + this._w * f, this._x = n * h + this._x * f, this._y = i * h + this._y * f, this._z = r * h + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class B {
  constructor(e = 0, t = 0, n = 0) {
    B.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(qa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(qa.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, c = e.w, l = 2 * (o * i - a * n), u = 2 * (a * t - r * i), h = 2 * (r * n - o * t);
    return this.x = t + c * l + o * h - a * u, this.y = n + c * u + a * l - r * h, this.z = i + c * h + r * u - o * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Je(this.x, e.x, t.x), this.y = Je(this.y, e.y, t.y), this.z = Je(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Je(this.x, e, t), this.y = Je(this.y, e, t), this.z = Je(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Je(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = i * c - r * a, this.y = r * o - n * c, this.z = n * a - i * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Lr.copy(this).projectOnVector(e), this.sub(Lr);
  }
  reflect(e) {
    return this.sub(Lr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Je(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Lr = new B(), qa = new vn();
class Ze {
  constructor(e, t, n, i, r, o, a, c, l) {
    Ze.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l);
  }
  set(e, t, n, i, r, o, a, c, l) {
    const u = this.elements;
    return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = r, u[5] = c, u[6] = n, u[7] = o, u[8] = l, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], u = n[4], h = n[7], f = n[2], g = n[5], v = n[8], S = i[0], _ = i[3], p = i[6], I = i[1], P = i[4], E = i[7], L = i[2], O = i[5], N = i[8];
    return r[0] = o * S + a * I + c * L, r[3] = o * _ + a * P + c * O, r[6] = o * p + a * E + c * N, r[1] = l * S + u * I + h * L, r[4] = l * _ + u * P + h * O, r[7] = l * p + u * E + h * N, r[2] = f * S + g * I + v * L, r[5] = f * _ + g * P + v * O, r[8] = f * p + g * E + v * N, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8];
    return t * o * u - t * a * l - n * r * u + n * a * c + i * r * l - i * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], h = u * o - a * l, f = a * c - u * r, g = l * r - o * c, v = t * h + n * f + i * g;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / v;
    return e[0] = h * S, e[1] = (i * l - u * n) * S, e[2] = (a * n - i * o) * S, e[3] = f * S, e[4] = (u * t - i * c) * S, e[5] = (i * r - a * t) * S, e[6] = g * S, e[7] = (n * c - l * t) * S, e[8] = (o * t - n * r) * S, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(n * c, n * l, -n * (c * o + l * a) + o + e, -i * l, i * c, -i * (-l * o + c * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(Ur.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Ur.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Ur.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ur = new Ze();
function Tc(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return true;
  return false;
}
function bs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function ru() {
  const s = bs("canvas");
  return s.style.display = "block", s;
}
const Ka = {};
function As(s) {
  s in Ka || (Ka[s] = true, console.warn(s));
}
function ou(s, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
const Za = new Ze().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), ja = new Ze().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function au() {
  const s = { enabled: true, workingColorSpace: St, spaces: {}, convert: function(i, r, o) {
    return this.enabled === false || r === o || !r || !o || (this.spaces[r].transfer === dt && (i.r = Fn(i.r), i.g = Fn(i.g), i.b = Fn(i.b)), this.spaces[r].primaries !== this.spaces[o].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[o].fromXYZ)), this.spaces[o].transfer === dt && (i.r = zi(i.r), i.g = zi(i.g), i.b = zi(i.b))), i;
  }, workingToColorSpace: function(i, r) {
    return this.convert(i, this.workingColorSpace, r);
  }, colorSpaceToWorking: function(i, r) {
    return this.convert(i, r, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === Zn ? Er : this.spaces[i].transfer;
  }, getToneMappingMode: function(i) {
    return this.spaces[i].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(i, r = this.workingColorSpace) {
    return i.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, r, o) {
    return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(i, r) {
    return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), s.workingToColorSpace(i, r);
  }, toWorkingColorSpace: function(i, r) {
    return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), s.colorSpaceToWorking(i, r);
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return s.define({ [St]: { primaries: e, whitePoint: n, transfer: Er, toXYZ: Za, fromXYZ: ja, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Lt }, outputColorSpaceConfig: { drawingBufferColorSpace: Lt } }, [Lt]: { primaries: e, whitePoint: n, transfer: dt, toXYZ: Za, fromXYZ: ja, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Lt } } }), s;
}
const rt = au();
function Fn(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function zi(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let Mi;
class lu {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Mi === void 0 && (Mi = bs("canvas")), Mi.width = e.width, Mi.height = e.height;
      const i = Mi.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), n = Mi;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = bs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = Fn(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Fn(t[n] / 255) * 255) : t[n] = Fn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let cu = 0;
class Sa {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: cu++ }), this.uuid = ln(), this.data = e, this.dataReady = true, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? r.push(Nr(i[o].image)) : r.push(Nr(i[o]));
      } else r = Nr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Nr(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? lu.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let hu = 0;
const Fr = new B();
class Dt extends gi {
  constructor(e = Dt.DEFAULT_IMAGE, t = Dt.DEFAULT_MAPPING, n = pn, i = pn, r = It, o = mn, a = Pt, c = xn, l = Dt.DEFAULT_ANISOTROPY, u = Zn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: hu++ }), this.uuid = ln(), this.name = "", this.source = new Sa(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new Ge(0, 0), this.repeat = new Ge(1, 1), this.center = new Ge(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ze(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(e && e.depth && e.depth > 1), this.pmremVersion = 0;
  }
  get width() {
    return this.source.getSize(Fr).x;
  }
  get height() {
    return this.source.getSize(Fr).y;
  }
  get depth() {
    return this.source.getSize(Fr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);
        continue;
      }
      i && n && i.isVector2 && n.isVector2 || i && n && i.isVector3 && n.isVector3 || i && n && i.isMatrix3 && n.isMatrix3 ? i.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== dc) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Yi:
        e.x = e.x - Math.floor(e.x);
        break;
      case pn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case yr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Yi:
        e.y = e.y - Math.floor(e.y);
        break;
      case pn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case yr:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
Dt.DEFAULT_IMAGE = null;
Dt.DEFAULT_MAPPING = dc;
Dt.DEFAULT_ANISOTROPY = 1;
class lt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    lt.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements, l = c[0], u = c[4], h = c[8], f = c[1], g = c[5], v = c[9], S = c[2], _ = c[6], p = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - S) < 0.01 && Math.abs(v - _) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + S) < 0.1 && Math.abs(v + _) < 0.1 && Math.abs(l + g + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const P = (l + 1) / 2, E = (g + 1) / 2, L = (p + 1) / 2, O = (u + f) / 4, N = (h + S) / 4, V = (v + _) / 4;
      return P > E && P > L ? P < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(P), i = O / n, r = N / n) : E > L ? E < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(E), n = O / i, r = V / i) : L < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(L), n = N / r, i = V / r), this.set(n, i, r, t), this;
    }
    let I = Math.sqrt((_ - v) * (_ - v) + (h - S) * (h - S) + (f - u) * (f - u));
    return Math.abs(I) < 1e-3 && (I = 1), this.x = (_ - v) / I, this.y = (h - S) / I, this.z = (f - u) / I, this.w = Math.acos((l + g + p - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Je(this.x, e.x, t.x), this.y = Je(this.y, e.y, t.y), this.z = Je(this.z, e.z, t.z), this.w = Je(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Je(this.x, e, t), this.y = Je(this.y, e, t), this.z = Je(this.z, e, t), this.w = Je(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Je(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class uu extends gi {
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: It, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new lt(0, 0, e, t), this.scissorTest = false, this.viewport = new lt(0, 0, e, t);
    const i = { width: e, height: t, depth: n.depth }, r = new Dt(i);
    this.textures = [];
    const o = n.count;
    for (let a = 0; a < o; a++) this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = true, this.textures[a].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview;
  }
  _setTextureOptions(e = {}) {
    const t = { minFilter: It, generateMipmaps: false, flipY: false, internalFormat: null };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n, this.textures[i].isArrayTexture = this.textures[i].image.depth > 1;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = true, this.textures[t].renderTarget = this;
      const i = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new Sa(i);
    }
    return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class mi extends uu {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class bc extends Dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = kt, this.minFilter = kt, this.wrapR = pn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class du extends Dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = kt, this.minFilter = kt, this.wrapR = pn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class kn {
  constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(en.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(en.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = en.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let o = 0, a = r.count; o < a; o++) e.isMesh === true ? e.getVertexPosition(o, en) : en.fromBufferAttribute(r, o), en.applyMatrix4(e.matrixWorld), this.expandByPoint(en);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), zs.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), zs.copy(n.boundingBox)), zs.applyMatrix4(e.matrixWorld), this.union(zs);
    }
    const i = e.children;
    for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, en), en.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(ss), Hs.subVectors(this.max, ss), Si.subVectors(e.a, ss), yi.subVectors(e.b, ss), Ei.subVectors(e.c, ss), zn.subVectors(yi, Si), Hn.subVectors(Ei, yi), ei.subVectors(Si, Ei);
    let t = [0, -zn.z, zn.y, 0, -Hn.z, Hn.y, 0, -ei.z, ei.y, zn.z, 0, -zn.x, Hn.z, 0, -Hn.x, ei.z, 0, -ei.x, -zn.y, zn.x, 0, -Hn.y, Hn.x, 0, -ei.y, ei.x, 0];
    return !Or(t, Si, yi, Ei, Hs) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Or(t, Si, yi, Ei, Hs)) ? false : (Vs.crossVectors(zn, Hn), t = [Vs.x, Vs.y, Vs.z], Or(t, Si, yi, Ei, Hs));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, en).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(en).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (An[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), An[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), An[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), An[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), An[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), An[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), An[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), An[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(An), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const An = [new B(), new B(), new B(), new B(), new B(), new B(), new B(), new B()], en = new B(), zs = new kn(), Si = new B(), yi = new B(), Ei = new B(), zn = new B(), Hn = new B(), ei = new B(), ss = new B(), Hs = new B(), Vs = new B(), ti = new B();
function Or(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    ti.fromArray(s, r);
    const a = i.x * Math.abs(ti.x) + i.y * Math.abs(ti.y) + i.z * Math.abs(ti.z), c = e.dot(ti), l = t.dot(ti), u = n.dot(ti);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a) return false;
  }
  return true;
}
const fu = new kn(), rs = new B(), Br = new B();
class Sn {
  constructor(e = new B(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : fu.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++) i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    rs.subVectors(e, this.center);
    const t = rs.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(rs, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Br.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(rs.copy(e.center).add(Br)), this.expandByPoint(rs.copy(e.center).sub(Br))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}
const wn = new B(), kr = new B(), Gs = new B(), Vn = new B(), zr = new B(), Ws = new B(), Hr = new B();
class Rs {
  constructor(e = new B(), t = new B(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, wn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = wn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (wn.copy(this.origin).addScaledVector(this.direction, t), wn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    kr.copy(e).add(t).multiplyScalar(0.5), Gs.copy(t).sub(e).normalize(), Vn.copy(this.origin).sub(kr);
    const r = e.distanceTo(t) * 0.5, o = -this.direction.dot(Gs), a = Vn.dot(this.direction), c = -Vn.dot(Gs), l = Vn.lengthSq(), u = Math.abs(1 - o * o);
    let h, f, g, v;
    if (u > 0) if (h = o * c - a, f = o * a - c, v = r * u, h >= 0) if (f >= -v) if (f <= v) {
      const S = 1 / u;
      h *= S, f *= S, g = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * c) + l;
    } else f = r, h = Math.max(0, -(o * f + a)), g = -h * h + f * (f + 2 * c) + l;
    else f = -r, h = Math.max(0, -(o * f + a)), g = -h * h + f * (f + 2 * c) + l;
    else f <= -v ? (h = Math.max(0, -(-o * r + a)), f = h > 0 ? -r : Math.min(Math.max(-r, -c), r), g = -h * h + f * (f + 2 * c) + l) : f <= v ? (h = 0, f = Math.min(Math.max(-r, -c), r), g = f * (f + 2 * c) + l) : (h = Math.max(0, -(o * r + a)), f = h > 0 ? r : Math.min(Math.max(-r, -c), r), g = -h * h + f * (f + 2 * c) + l);
    else f = o > 0 ? -r : r, h = Math.max(0, -(o * f + a)), g = -h * h + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(kr).addScaledVector(Gs, f), g;
  }
  intersectSphere(e, t) {
    wn.subVectors(e.center, this.origin);
    const n = wn.dot(this.direction), i = wn.dot(wn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i), a = n - o, c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? false : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, h = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (e.min.x - f.x) * l, i = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, i = (e.min.x - f.x) * l), u >= 0 ? (r = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (r = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), h >= 0 ? (a = (e.min.z - f.z) * h, c = (e.max.z - f.z) * h) : (a = (e.max.z - f.z) * h, c = (e.min.z - f.z) * h), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, wn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    zr.subVectors(t, e), Ws.subVectors(n, e), Hr.crossVectors(zr, Ws);
    let o = this.direction.dot(Hr), a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    Vn.subVectors(this.origin, e);
    const c = a * this.direction.dot(Ws.crossVectors(Vn, Ws));
    if (c < 0) return null;
    const l = a * this.direction.dot(zr.cross(Vn));
    if (l < 0 || c + l > o) return null;
    const u = -a * Vn.dot(Hr);
    return u < 0 ? null : this.at(u / o, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Qe {
  constructor(e, t, n, i, r, o, a, c, l, u, h, f, g, v, S, _) {
    Qe.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, c, l, u, h, f, g, v, S, _);
  }
  set(e, t, n, i, r, o, a, c, l, u, h, f, g, v, S, _) {
    const p = this.elements;
    return p[0] = e, p[4] = t, p[8] = n, p[12] = i, p[1] = r, p[5] = o, p[9] = a, p[13] = c, p[2] = l, p[6] = u, p[10] = h, p[14] = f, p[3] = g, p[7] = v, p[11] = S, p[15] = _, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Qe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Ti.setFromMatrixColumn(e, 0).length(), r = 1 / Ti.setFromMatrixColumn(e, 1).length(), o = 1 / Ti.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), u = Math.cos(r), h = Math.sin(r);
    if (e.order === "XYZ") {
      const f = o * u, g = o * h, v = a * u, S = a * h;
      t[0] = c * u, t[4] = -c * h, t[8] = l, t[1] = g + v * l, t[5] = f - S * l, t[9] = -a * c, t[2] = S - f * l, t[6] = v + g * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const f = c * u, g = c * h, v = l * u, S = l * h;
      t[0] = f + S * a, t[4] = v * a - g, t[8] = o * l, t[1] = o * h, t[5] = o * u, t[9] = -a, t[2] = g * a - v, t[6] = S + f * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const f = c * u, g = c * h, v = l * u, S = l * h;
      t[0] = f - S * a, t[4] = -o * h, t[8] = v + g * a, t[1] = g + v * a, t[5] = o * u, t[9] = S - f * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const f = o * u, g = o * h, v = a * u, S = a * h;
      t[0] = c * u, t[4] = v * l - g, t[8] = f * l + S, t[1] = c * h, t[5] = S * l + f, t[9] = g * l - v, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const f = o * c, g = o * l, v = a * c, S = a * l;
      t[0] = c * u, t[4] = S - f * h, t[8] = v * h + g, t[1] = h, t[5] = o * u, t[9] = -a * u, t[2] = -l * u, t[6] = g * h + v, t[10] = f - S * h;
    } else if (e.order === "XZY") {
      const f = o * c, g = o * l, v = a * c, S = a * l;
      t[0] = c * u, t[4] = -h, t[8] = l * u, t[1] = f * h + S, t[5] = o * u, t[9] = g * h - v, t[2] = v * h - g, t[6] = a * u, t[10] = S * h + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(pu, e, mu);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Yt.subVectors(e, t), Yt.lengthSq() === 0 && (Yt.z = 1), Yt.normalize(), Gn.crossVectors(n, Yt), Gn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Yt.x += 1e-4 : Yt.z += 1e-4, Yt.normalize(), Gn.crossVectors(n, Yt)), Gn.normalize(), Xs.crossVectors(Yt, Gn), i[0] = Gn.x, i[4] = Xs.x, i[8] = Yt.x, i[1] = Gn.y, i[5] = Xs.y, i[9] = Yt.y, i[2] = Gn.z, i[6] = Xs.z, i[10] = Yt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], u = n[1], h = n[5], f = n[9], g = n[13], v = n[2], S = n[6], _ = n[10], p = n[14], I = n[3], P = n[7], E = n[11], L = n[15], O = i[0], N = i[4], V = i[8], b = i[12], T = i[1], F = i[5], X = i[9], $ = i[13], ie = i[2], te = i[6], ee = i[10], oe = i[14], Z = i[3], pe = i[7], Me = i[11], Re = i[15];
    return r[0] = o * O + a * T + c * ie + l * Z, r[4] = o * N + a * F + c * te + l * pe, r[8] = o * V + a * X + c * ee + l * Me, r[12] = o * b + a * $ + c * oe + l * Re, r[1] = u * O + h * T + f * ie + g * Z, r[5] = u * N + h * F + f * te + g * pe, r[9] = u * V + h * X + f * ee + g * Me, r[13] = u * b + h * $ + f * oe + g * Re, r[2] = v * O + S * T + _ * ie + p * Z, r[6] = v * N + S * F + _ * te + p * pe, r[10] = v * V + S * X + _ * ee + p * Me, r[14] = v * b + S * $ + _ * oe + p * Re, r[3] = I * O + P * T + E * ie + L * Z, r[7] = I * N + P * F + E * te + L * pe, r[11] = I * V + P * X + E * ee + L * Me, r[15] = I * b + P * $ + E * oe + L * Re, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], c = e[9], l = e[13], u = e[2], h = e[6], f = e[10], g = e[14], v = e[3], S = e[7], _ = e[11], p = e[15];
    return v * (+r * c * h - i * l * h - r * a * f + n * l * f + i * a * g - n * c * g) + S * (+t * c * g - t * l * f + r * o * f - i * o * g + i * l * u - r * c * u) + _ * (+t * l * h - t * a * g - r * o * h + n * o * g + r * a * u - n * l * u) + p * (-i * a * u - t * c * h + t * a * f + i * o * h - n * o * f + n * c * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], h = e[9], f = e[10], g = e[11], v = e[12], S = e[13], _ = e[14], p = e[15], I = h * _ * l - S * f * l + S * c * g - a * _ * g - h * c * p + a * f * p, P = v * f * l - u * _ * l - v * c * g + o * _ * g + u * c * p - o * f * p, E = u * S * l - v * h * l + v * a * g - o * S * g - u * a * p + o * h * p, L = v * h * c - u * S * c - v * a * f + o * S * f + u * a * _ - o * h * _, O = t * I + n * P + i * E + r * L;
    if (O === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const N = 1 / O;
    return e[0] = I * N, e[1] = (S * f * r - h * _ * r - S * i * g + n * _ * g + h * i * p - n * f * p) * N, e[2] = (a * _ * r - S * c * r + S * i * l - n * _ * l - a * i * p + n * c * p) * N, e[3] = (h * c * r - a * f * r - h * i * l + n * f * l + a * i * g - n * c * g) * N, e[4] = P * N, e[5] = (u * _ * r - v * f * r + v * i * g - t * _ * g - u * i * p + t * f * p) * N, e[6] = (v * c * r - o * _ * r - v * i * l + t * _ * l + o * i * p - t * c * p) * N, e[7] = (o * f * r - u * c * r + u * i * l - t * f * l - o * i * g + t * c * g) * N, e[8] = E * N, e[9] = (v * h * r - u * S * r - v * n * g + t * S * g + u * n * p - t * h * p) * N, e[10] = (o * S * r - v * a * r + v * n * l - t * S * l - o * n * p + t * a * p) * N, e[11] = (u * a * r - o * h * r - u * n * l + t * h * l + o * n * g - t * a * g) * N, e[12] = L * N, e[13] = (u * S * i - v * h * i + v * n * f - t * S * f - u * n * _ + t * h * _) * N, e[14] = (v * a * i - o * S * i - v * n * c + t * S * c + o * n * _ - t * a * _) * N, e[15] = (o * h * i - u * a * i + u * n * c - t * h * c - o * n * f + t * a * f) * N, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, c = e.z, l = r * o, u = r * a;
    return this.set(l * o + n, l * a - i * c, l * c + i * a, 0, l * a + i * c, u * a + n, u * c - i * o, 0, l * c - i * a, u * c + i * o, r * c * c + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, o = t._y, a = t._z, c = t._w, l = r + r, u = o + o, h = a + a, f = r * l, g = r * u, v = r * h, S = o * u, _ = o * h, p = a * h, I = c * l, P = c * u, E = c * h, L = n.x, O = n.y, N = n.z;
    return i[0] = (1 - (S + p)) * L, i[1] = (g + E) * L, i[2] = (v - P) * L, i[3] = 0, i[4] = (g - E) * O, i[5] = (1 - (f + p)) * O, i[6] = (_ + I) * O, i[7] = 0, i[8] = (v + P) * N, i[9] = (_ - I) * N, i[10] = (1 - (f + S)) * N, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Ti.set(i[0], i[1], i[2]).length();
    const o = Ti.set(i[4], i[5], i[6]).length(), a = Ti.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], tn.copy(this);
    const l = 1 / r, u = 1 / o, h = 1 / a;
    return tn.elements[0] *= l, tn.elements[1] *= l, tn.elements[2] *= l, tn.elements[4] *= u, tn.elements[5] *= u, tn.elements[6] *= u, tn.elements[8] *= h, tn.elements[9] *= h, tn.elements[10] *= h, t.setFromRotationMatrix(tn), n.x = r, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, i, r, o, a = gn, c = false) {
    const l = this.elements, u = 2 * r / (t - e), h = 2 * r / (n - i), f = (t + e) / (t - e), g = (n + i) / (n - i);
    let v, S;
    if (c) v = r / (o - r), S = o * r / (o - r);
    else if (a === gn) v = -(o + r) / (o - r), S = -2 * o * r / (o - r);
    else if (a === Tr) v = -o / (o - r), S = -o * r / (o - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = u, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = g, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = v, l[14] = S, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, o, a = gn, c = false) {
    const l = this.elements, u = 2 / (t - e), h = 2 / (n - i), f = -(t + e) / (t - e), g = -(n + i) / (n - i);
    let v, S;
    if (c) v = 1 / (o - r), S = o / (o - r);
    else if (a === gn) v = -2 / (o - r), S = -(o + r) / (o - r);
    else if (a === Tr) v = -1 / (o - r), S = -r / (o - r);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = u, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = h, l[9] = 0, l[13] = g, l[2] = 0, l[6] = 0, l[10] = v, l[14] = S, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Ti = new B(), tn = new Qe(), pu = new B(0, 0, 0), mu = new B(1, 1, 1), Gn = new B(), Xs = new B(), Yt = new B(), $a = new Qe(), Ja = new vn();
class Mn {
  constructor(e = 0, t = 0, n = 0, i = Mn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const i = e.elements, r = i[0], o = i[4], a = i[8], c = i[1], l = i[5], u = i[9], h = i[2], f = i[6], g = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Je(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, g), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Je(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, g), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Je(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-h, g), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Je(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(f, g), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(Je(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, g));
        break;
      case "XZY":
        this._z = Math.asin(-Je(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-u, g), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return $a.makeRotationFromQuaternion(e), this.setFromRotationMatrix($a, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Ja.setFromEuler(this), this.setFromQuaternion(Ja, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Mn.DEFAULT_ORDER = "XYZ";
class Ac {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let gu = 0;
const Qa = new B(), bi = new vn(), Rn = new Qe(), Ys = new B(), os = new B(), _u = new B(), xu = new vn(), el = new B(1, 0, 0), tl = new B(0, 1, 0), nl = new B(0, 0, 1), il = { type: "added" }, vu = { type: "removed" }, Ai = { type: "childadded", child: null }, Vr = { type: "childremoved", child: null };
class Mt extends gi {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: gu++ }), this.uuid = ln(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Mt.DEFAULT_UP.clone();
    const e = new B(), t = new Mn(), n = new vn(), i = new B(1, 1, 1);
    function r() {
      n.setFromEuler(t, false);
    }
    function o() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Qe() }, normalMatrix: { value: new Ze() } }), this.matrix = new Qe(), this.matrixWorld = new Qe(), this.matrixAutoUpdate = Mt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Ac(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return bi.setFromAxisAngle(e, t), this.quaternion.multiply(bi), this;
  }
  rotateOnWorldAxis(e, t) {
    return bi.setFromAxisAngle(e, t), this.quaternion.premultiply(bi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(el, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(tl, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(nl, e);
  }
  translateOnAxis(e, t) {
    return Qa.copy(e).applyQuaternion(this.quaternion), this.position.add(Qa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(el, e);
  }
  translateY(e) {
    return this.translateOnAxis(tl, e);
  }
  translateZ(e) {
    return this.translateOnAxis(nl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Rn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ys.copy(e) : Ys.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), os.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Rn.lookAt(os, Ys, this.up) : Rn.lookAt(Ys, os, this.up), this.quaternion.setFromRotationMatrix(Rn), i && (Rn.extractRotation(i.matrixWorld), bi.setFromRotationMatrix(Rn), this.quaternion.premultiply(bi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(il), Ai.child = e, this.dispatchEvent(Ai), Ai.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(vu), Vr.child = e, this.dispatchEvent(Vr), Vr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Rn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Rn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Rn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(il), Ai.child = e, this.dispatchEvent(Ai), Ai.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, o = i.length; r < o; r++) i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(os, e, _u), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(os, xu, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.geometryInfo = this._geometryInfo.map((a) => ({ ...a, boundingBox: a.boundingBox ? a.boundingBox.toJSON() : void 0, boundingSphere: a.boundingSphere ? a.boundingSphere.toJSON() : void 0 })), i.instanceInfo = this._instanceInfo.map((a) => ({ ...a })), i.availableInstanceIds = this._availableInstanceIds.slice(), i.availableGeometryIds = this._availableGeometryIds.slice(), i.nextIndexStart = this._nextIndexStart, i.nextVertexStart = this._nextVertexStart, i.geometryCount = this._geometryCount, i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.matricesTexture = this._matricesTexture.toJSON(e), i.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (i.boundingBox = this.boundingBox.toJSON()));
    function r(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c)) for (let l = 0, u = c.length; l < u; l++) {
          const h = c[l];
          r(e.shapes, h);
        }
        else r(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let c = 0, l = this.material.length; c < l; c++) a.push(r(e.materials, this.material[c]));
      i.material = a;
    } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), u = o(e.images), h = o(e.shapes), f = o(e.skeletons), g = o(e.animations), v = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), h.length > 0 && (n.shapes = h), f.length > 0 && (n.skeletons = f), g.length > 0 && (n.animations = g), v.length > 0 && (n.nodes = v);
    }
    return n.object = i, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const u = a[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      this.add(i.clone());
    }
    return this;
  }
}
Mt.DEFAULT_UP = new B(0, 1, 0);
Mt.DEFAULT_MATRIX_AUTO_UPDATE = true;
Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const nn = new B(), Cn = new B(), Gr = new B(), Pn = new B(), wi = new B(), Ri = new B(), sl = new B(), Wr = new B(), Xr = new B(), Yr = new B(), qr = new lt(), Kr = new lt(), Zr = new lt();
class an {
  constructor(e = new B(), t = new B(), n = new B()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), nn.subVectors(e, t), i.cross(nn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    nn.subVectors(i, t), Cn.subVectors(n, t), Gr.subVectors(e, t);
    const o = nn.dot(nn), a = nn.dot(Cn), c = nn.dot(Gr), l = Cn.dot(Cn), u = Cn.dot(Gr), h = o * l - a * a;
    if (h === 0) return r.set(0, 0, 0), null;
    const f = 1 / h, g = (l * c - a * u) * f, v = (o * u - a * c) * f;
    return r.set(1 - g - v, v, g);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Pn) === null ? false : Pn.x >= 0 && Pn.y >= 0 && Pn.x + Pn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, o, a, c) {
    return this.getBarycoord(e, t, n, i, Pn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, Pn.x), c.addScaledVector(o, Pn.y), c.addScaledVector(a, Pn.z), c);
  }
  static getInterpolatedAttribute(e, t, n, i, r, o) {
    return qr.setScalar(0), Kr.setScalar(0), Zr.setScalar(0), qr.fromBufferAttribute(e, t), Kr.fromBufferAttribute(e, n), Zr.fromBufferAttribute(e, i), o.setScalar(0), o.addScaledVector(qr, r.x), o.addScaledVector(Kr, r.y), o.addScaledVector(Zr, r.z), o;
  }
  static isFrontFacing(e, t, n, i) {
    return nn.subVectors(n, t), Cn.subVectors(e, t), nn.cross(Cn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return nn.subVectors(this.c, this.b), Cn.subVectors(this.a, this.b), nn.cross(Cn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return an.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return an.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return an.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return an.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return an.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let o, a;
    wi.subVectors(i, n), Ri.subVectors(r, n), Wr.subVectors(e, n);
    const c = wi.dot(Wr), l = Ri.dot(Wr);
    if (c <= 0 && l <= 0) return t.copy(n);
    Xr.subVectors(e, i);
    const u = wi.dot(Xr), h = Ri.dot(Xr);
    if (u >= 0 && h <= u) return t.copy(i);
    const f = c * h - u * l;
    if (f <= 0 && c >= 0 && u <= 0) return o = c / (c - u), t.copy(n).addScaledVector(wi, o);
    Yr.subVectors(e, r);
    const g = wi.dot(Yr), v = Ri.dot(Yr);
    if (v >= 0 && g <= v) return t.copy(r);
    const S = g * l - c * v;
    if (S <= 0 && l >= 0 && v <= 0) return a = l / (l - v), t.copy(n).addScaledVector(Ri, a);
    const _ = u * v - g * h;
    if (_ <= 0 && h - u >= 0 && g - v >= 0) return sl.subVectors(r, i), a = (h - u) / (h - u + (g - v)), t.copy(i).addScaledVector(sl, a);
    const p = 1 / (_ + S + f);
    return o = S * p, a = f * p, t.copy(n).addScaledVector(wi, o).addScaledVector(Ri, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const wc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Wn = { h: 0, s: 0, l: 0 }, qs = { h: 0, s: 0, l: 0 };
function jr(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class qe {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Lt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, rt.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, n, i = rt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, rt.colorSpaceToWorking(this, i), this;
  }
  setHSL(e, t, n, i = rt.workingColorSpace) {
    if (e = Ma(e, 1), t = Je(t, 0, 1), n = Je(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r;
      this.r = jr(o, r, e + 1 / 3), this.g = jr(o, r, e), this.b = jr(o, r, e - 1 / 3);
    }
    return rt.colorSpaceToWorking(this, i), this;
  }
  setStyle(e, t = Lt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const o = i[1], a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], o = r.length;
      if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (o === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Lt) {
    const n = wc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Fn(e.r), this.g = Fn(e.g), this.b = Fn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = zi(e.r), this.g = zi(e.g), this.b = zi(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Lt) {
    return rt.workingToColorSpace(Nt.copy(this), e), Math.round(Je(Nt.r * 255, 0, 255)) * 65536 + Math.round(Je(Nt.g * 255, 0, 255)) * 256 + Math.round(Je(Nt.b * 255, 0, 255));
  }
  getHexString(e = Lt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = rt.workingColorSpace) {
    rt.workingToColorSpace(Nt.copy(this), t);
    const n = Nt.r, i = Nt.g, r = Nt.b, o = Math.max(n, i, r), a = Math.min(n, i, r);
    let c, l;
    const u = (a + o) / 2;
    if (a === o) c = 0, l = 0;
    else {
      const h = o - a;
      switch (l = u <= 0.5 ? h / (o + a) : h / (2 - o - a), o) {
        case n:
          c = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / h + 2;
          break;
        case r:
          c = (n - i) / h + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = u, e;
  }
  getRGB(e, t = rt.workingColorSpace) {
    return rt.workingToColorSpace(Nt.copy(this), t), e.r = Nt.r, e.g = Nt.g, e.b = Nt.b, e;
  }
  getStyle(e = Lt) {
    rt.workingToColorSpace(Nt.copy(this), e);
    const t = Nt.r, n = Nt.g, i = Nt.b;
    return e !== Lt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Wn), this.setHSL(Wn.h + e, Wn.s + t, Wn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Wn), e.getHSL(qs);
    const n = gs(Wn.h, qs.h, t), i = gs(Wn.s, qs.s, t), r = gs(Wn.l, qs.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Nt = new qe();
qe.NAMES = wc;
let Mu = 0;
class _n extends gi {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Mu++ }), this.uuid = ln(), this.name = "", this.type = "Material", this.blending = ki, this.side = Bn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = So, this.blendDst = yo, this.blendEquation = li, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new qe(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Gi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Wa, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = vi, this.stencilZFail = vi, this.stencilZPass = vi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ki && (n.blending = this.blending), this.side !== Bn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== So && (n.blendSrc = this.blendSrc), this.blendDst !== yo && (n.blendDst = this.blendDst), this.blendEquation !== li && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Gi && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Wa && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== vi && (n.stencilFail = this.stencilFail), this.stencilZFail !== vi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== vi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const c = r[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures), o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
}
class di extends _n {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new qe(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Mn(), this.combine = hc, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const Ln = Su();
function Su() {
  const s = new ArrayBuffer(4), e = new Float32Array(s), t = new Uint32Array(s), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const r = new Uint32Array(2048), o = new Uint32Array(64), a = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, u = 0;
    for (; (l & 8388608) === 0; ) l <<= 1, u -= 8388608;
    l &= -8388609, u += 947912704, r[c] = l | u;
  }
  for (let c = 1024; c < 2048; ++c) r[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c) o[c] = c << 23;
  o[31] = 1199570944, o[32] = 2147483648;
  for (let c = 33; c < 63; ++c) o[c] = 2147483648 + (c - 32 << 23);
  o[63] = 3347054592;
  for (let c = 1; c < 64; ++c) c !== 32 && (a[c] = 1024);
  return { floatView: e, uint32View: t, baseTable: n, shiftTable: i, mantissaTable: r, exponentTable: o, offsetTable: a };
}
function yu(s) {
  Math.abs(s) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), s = Je(s, -65504, 65504), Ln.floatView[0] = s;
  const e = Ln.uint32View[0], t = e >> 23 & 511;
  return Ln.baseTable[t] + ((e & 8388607) >> Ln.shiftTable[t]);
}
function Eu(s) {
  const e = s >> 10;
  return Ln.uint32View[0] = Ln.mantissaTable[Ln.offsetTable[e] + (s & 1023)] + Ln.exponentTable[e], Ln.floatView[0];
}
class rl {
  static toHalfFloat(e) {
    return yu(e);
  }
  static fromHalfFloat(e) {
    return Eu(e);
  }
}
const bt = new B(), Ks = new Ge();
let Tu = 0;
class zt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Tu++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = oa, this.updateRanges = [], this.gpuType = Gt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Ks.fromBufferAttribute(this, t), Ks.applyMatrix3(e), this.setXY(t, Ks.x, Ks.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.applyMatrix3(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.applyMatrix4(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.applyNormalMatrix(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) bt.fromBufferAttribute(this, t), bt.transformDirection(e), this.setXYZ(t, bt.x, bt.y, bt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = on(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = ct(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array), r = ct(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== oa && (e.usage = this.usage), e;
  }
}
class Rc extends zt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Cc extends zt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class On extends zt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let bu = 0;
const jt = new Qe(), $r = new Mt(), Ci = new B(), qt = new kn(), as = new kn(), Ct = new B();
class yn extends gi {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: bu++ }), this.uuid = ln(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Tc(e) ? Cc : Rc)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ze().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return jt.makeRotationFromQuaternion(e), this.applyMatrix4(jt), this;
  }
  rotateX(e) {
    return jt.makeRotationX(e), this.applyMatrix4(jt), this;
  }
  rotateY(e) {
    return jt.makeRotationY(e), this.applyMatrix4(jt), this;
  }
  rotateZ(e) {
    return jt.makeRotationZ(e), this.applyMatrix4(jt), this;
  }
  translate(e, t, n) {
    return jt.makeTranslation(e, t, n), this.applyMatrix4(jt), this;
  }
  scale(e, t, n) {
    return jt.makeScale(e, t, n), this.applyMatrix4(jt), this;
  }
  lookAt(e) {
    return $r.lookAt(e), $r.updateMatrix(), this.applyMatrix4($r.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Ci).negate(), this.translate(Ci.x, Ci.y, Ci.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const o = e[i];
        n.push(o.x, o.y, o.z || 0);
      }
      this.setAttribute("position", new On(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const r = e[i];
        t.setXYZ(i, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new kn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new B(-1 / 0, -1 / 0, -1 / 0), new B(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n];
        qt.setFromBufferAttribute(r), this.morphTargetsRelative ? (Ct.addVectors(this.boundingBox.min, qt.min), this.boundingBox.expandByPoint(Ct), Ct.addVectors(this.boundingBox.max, qt.max), this.boundingBox.expandByPoint(Ct)) : (this.boundingBox.expandByPoint(qt.min), this.boundingBox.expandByPoint(qt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Sn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (qt.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r];
        as.setFromBufferAttribute(a), this.morphTargetsRelative ? (Ct.addVectors(qt.min, as.min), qt.expandByPoint(Ct), Ct.addVectors(qt.max, as.max), qt.expandByPoint(Ct)) : (qt.expandByPoint(as.min), qt.expandByPoint(as.max));
      }
      qt.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++) Ct.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(Ct));
      if (t) for (let r = 0, o = t.length; r < o; r++) {
        const a = t[r], c = this.morphTargetsRelative;
        for (let l = 0, u = a.count; l < u; l++) Ct.fromBufferAttribute(a, l), c && (Ci.fromBufferAttribute(e, l), Ct.add(Ci)), i = Math.max(i, n.distanceToSquared(Ct));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new zt(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"), a = [], c = [];
    for (let V = 0; V < n.count; V++) a[V] = new B(), c[V] = new B();
    const l = new B(), u = new B(), h = new B(), f = new Ge(), g = new Ge(), v = new Ge(), S = new B(), _ = new B();
    function p(V, b, T) {
      l.fromBufferAttribute(n, V), u.fromBufferAttribute(n, b), h.fromBufferAttribute(n, T), f.fromBufferAttribute(r, V), g.fromBufferAttribute(r, b), v.fromBufferAttribute(r, T), u.sub(l), h.sub(l), g.sub(f), v.sub(f);
      const F = 1 / (g.x * v.y - v.x * g.y);
      isFinite(F) && (S.copy(u).multiplyScalar(v.y).addScaledVector(h, -g.y).multiplyScalar(F), _.copy(h).multiplyScalar(g.x).addScaledVector(u, -v.x).multiplyScalar(F), a[V].add(S), a[b].add(S), a[T].add(S), c[V].add(_), c[b].add(_), c[T].add(_));
    }
    let I = this.groups;
    I.length === 0 && (I = [{ start: 0, count: e.count }]);
    for (let V = 0, b = I.length; V < b; ++V) {
      const T = I[V], F = T.start, X = T.count;
      for (let $ = F, ie = F + X; $ < ie; $ += 3) p(e.getX($ + 0), e.getX($ + 1), e.getX($ + 2));
    }
    const P = new B(), E = new B(), L = new B(), O = new B();
    function N(V) {
      L.fromBufferAttribute(i, V), O.copy(L);
      const b = a[V];
      P.copy(b), P.sub(L.multiplyScalar(L.dot(b))).normalize(), E.crossVectors(O, b);
      const F = E.dot(c[V]) < 0 ? -1 : 1;
      o.setXYZW(V, P.x, P.y, P.z, F);
    }
    for (let V = 0, b = I.length; V < b; ++V) {
      const T = I[V], F = T.start, X = T.count;
      for (let $ = F, ie = F + X; $ < ie; $ += 3) N(e.getX($ + 0)), N(e.getX($ + 1)), N(e.getX($ + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new zt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, g = n.count; f < g; f++) n.setXYZ(f, 0, 0, 0);
      const i = new B(), r = new B(), o = new B(), a = new B(), c = new B(), l = new B(), u = new B(), h = new B();
      if (e) for (let f = 0, g = e.count; f < g; f += 3) {
        const v = e.getX(f + 0), S = e.getX(f + 1), _ = e.getX(f + 2);
        i.fromBufferAttribute(t, v), r.fromBufferAttribute(t, S), o.fromBufferAttribute(t, _), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), a.fromBufferAttribute(n, v), c.fromBufferAttribute(n, S), l.fromBufferAttribute(n, _), a.add(u), c.add(u), l.add(u), n.setXYZ(v, a.x, a.y, a.z), n.setXYZ(S, c.x, c.y, c.z), n.setXYZ(_, l.x, l.y, l.z);
      }
      else for (let f = 0, g = t.count; f < g; f += 3) i.fromBufferAttribute(t, f + 0), r.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, r), h.subVectors(i, r), u.cross(h), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) Ct.fromBufferAttribute(e, t), Ct.normalize(), e.setXYZ(t, Ct.x, Ct.y, Ct.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, u = a.itemSize, h = a.normalized, f = new l.constructor(c.length * u);
      let g = 0, v = 0;
      for (let S = 0, _ = c.length; S < _; S++) {
        a.isInterleavedBufferAttribute ? g = c[S] * a.data.stride + a.offset : g = c[S] * u;
        for (let p = 0; p < u; p++) f[v++] = l[g++];
      }
      return new zt(f, u, h);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new yn(), n = this.index.array, i = this.attributes;
    for (const a in i) {
      const c = i[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const c = [], l = r[a];
      for (let u = 0, h = l.length; u < h; u++) {
        const f = l[u], g = e(f, n);
        c.push(g);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = false;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let h = 0, f = l.length; h < f; h++) {
        const g = l[h];
        u.push(g.toJSON(e.data));
      }
      u.length > 0 && (i[c] = u, r = true);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = a.toJSON()), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const i = e.attributes;
    for (const l in i) {
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [], h = r[l];
      for (let f = 0, g = h.length; f < g; f++) u.push(h[f].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
      const h = o[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ol = new Qe(), ni = new Rs(), Zs = new Sn(), al = new B(), js = new B(), $s = new B(), Js = new B(), Jr = new B(), Qs = new B(), ll = new B(), er = new B();
class Wt extends Mt {
  constructor(e = new yn(), t = new di()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      Qs.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = a[c], h = r[c];
        u !== 0 && (Jr.fromBufferAttribute(h, e), o ? Qs.addScaledVector(Jr, u) : Qs.addScaledVector(Jr.sub(t), u));
      }
      t.add(Qs);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Zs.copy(n.boundingSphere), Zs.applyMatrix4(r), ni.copy(e.ray).recast(e.near), !(Zs.containsPoint(ni.origin) === false && (ni.intersectSphere(Zs, al) === null || ni.origin.distanceToSquared(al) > (e.far - e.near) ** 2)) && (ol.copy(r).invert(), ni.copy(e.ray).applyMatrix4(ol), !(n.boundingBox !== null && ni.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, ni)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, o = this.material, a = r.index, c = r.attributes.position, l = r.attributes.uv, u = r.attributes.uv1, h = r.attributes.normal, f = r.groups, g = r.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let v = 0, S = f.length; v < S; v++) {
      const _ = f[v], p = o[_.materialIndex], I = Math.max(_.start, g.start), P = Math.min(a.count, Math.min(_.start + _.count, g.start + g.count));
      for (let E = I, L = P; E < L; E += 3) {
        const O = a.getX(E), N = a.getX(E + 1), V = a.getX(E + 2);
        i = tr(this, p, e, n, l, u, h, O, N, V), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = _.materialIndex, t.push(i));
      }
    }
    else {
      const v = Math.max(0, g.start), S = Math.min(a.count, g.start + g.count);
      for (let _ = v, p = S; _ < p; _ += 3) {
        const I = a.getX(_), P = a.getX(_ + 1), E = a.getX(_ + 2);
        i = tr(this, o, e, n, l, u, h, I, P, E), i && (i.faceIndex = Math.floor(_ / 3), t.push(i));
      }
    }
    else if (c !== void 0) if (Array.isArray(o)) for (let v = 0, S = f.length; v < S; v++) {
      const _ = f[v], p = o[_.materialIndex], I = Math.max(_.start, g.start), P = Math.min(c.count, Math.min(_.start + _.count, g.start + g.count));
      for (let E = I, L = P; E < L; E += 3) {
        const O = E, N = E + 1, V = E + 2;
        i = tr(this, p, e, n, l, u, h, O, N, V), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = _.materialIndex, t.push(i));
      }
    }
    else {
      const v = Math.max(0, g.start), S = Math.min(c.count, g.start + g.count);
      for (let _ = v, p = S; _ < p; _ += 3) {
        const I = _, P = _ + 1, E = _ + 2;
        i = tr(this, o, e, n, l, u, h, I, P, E), i && (i.faceIndex = Math.floor(_ / 3), t.push(i));
      }
    }
  }
}
function Au(s, e, t, n, i, r, o, a) {
  let c;
  if (e.side === Xt ? c = n.intersectTriangle(o, r, i, true, a) : c = n.intersectTriangle(i, r, o, e.side === Bn, a), c === null) return null;
  er.copy(a), er.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(er);
  return l < t.near || l > t.far ? null : { distance: l, point: er.clone(), object: s };
}
function tr(s, e, t, n, i, r, o, a, c, l) {
  s.getVertexPosition(a, js), s.getVertexPosition(c, $s), s.getVertexPosition(l, Js);
  const u = Au(s, e, t, n, js, $s, Js, ll);
  if (u) {
    const h = new B();
    an.getBarycoord(ll, js, $s, Js, h), i && (u.uv = an.getInterpolatedAttribute(i, a, c, l, h, new Ge())), r && (u.uv1 = an.getInterpolatedAttribute(r, a, c, l, h, new Ge())), o && (u.normal = an.getInterpolatedAttribute(o, a, c, l, h, new B()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const f = { a, b: c, c: l, normal: new B(), materialIndex: 0 };
    an.getNormal(js, $s, Js, f.normal), u.face = f, u.barycoord = h;
  }
  return u;
}
class Cs extends yn {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o };
    const a = this;
    i = Math.floor(i), r = Math.floor(r), o = Math.floor(o);
    const c = [], l = [], u = [], h = [];
    let f = 0, g = 0;
    v("z", "y", "x", -1, -1, n, t, e, o, r, 0), v("z", "y", "x", 1, -1, n, t, -e, o, r, 1), v("x", "z", "y", 1, 1, e, n, t, i, o, 2), v("x", "z", "y", 1, -1, e, n, -t, i, o, 3), v("x", "y", "z", 1, -1, e, t, n, i, r, 4), v("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new On(l, 3)), this.setAttribute("normal", new On(u, 3)), this.setAttribute("uv", new On(h, 2));
    function v(S, _, p, I, P, E, L, O, N, V, b) {
      const T = E / N, F = L / V, X = E / 2, $ = L / 2, ie = O / 2, te = N + 1, ee = V + 1;
      let oe = 0, Z = 0;
      const pe = new B();
      for (let Me = 0; Me < ee; Me++) {
        const Re = Me * F - $;
        for (let Oe = 0; Oe < te; Oe++) {
          const nt = Oe * T - X;
          pe[S] = nt * I, pe[_] = Re * P, pe[p] = ie, l.push(pe.x, pe.y, pe.z), pe[S] = 0, pe[_] = 0, pe[p] = O > 0 ? 1 : -1, u.push(pe.x, pe.y, pe.z), h.push(Oe / N), h.push(1 - Me / V), oe += 1;
        }
      }
      for (let Me = 0; Me < V; Me++) for (let Re = 0; Re < N; Re++) {
        const Oe = f + Re + te * Me, nt = f + Re + te * (Me + 1), at = f + (Re + 1) + te * (Me + 1), et = f + (Re + 1) + te * Me;
        c.push(Oe, nt, et), c.push(nt, at, et), Z += 6;
      }
      a.addGroup(g, Z, b), g += Z, f += oe;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Cs(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ki(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Ot(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Ki(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function wu(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function Pc(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : rt.workingColorSpace;
}
const Ru = { clone: Ki, merge: Ot };
var Cu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Pu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Jn extends _n {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Cu, this.fragmentShader = Pu, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ki(e.uniforms), this.uniformsGroups = wu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ic extends Mt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Qe(), this.projectionMatrix = new Qe(), this.projectionMatrixInverse = new Qe(), this.coordinateSystem = gn, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xn = new B(), cl = new Ge(), hl = new Ge();
class Bt extends Ic {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = qi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ms * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return qi * 2 * Math.atan(Math.tan(ms * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Xn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Xn.x, Xn.y).multiplyScalar(-e / Xn.z), Xn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Xn.x, Xn.y).multiplyScalar(-e / Xn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, cl, hl), t.subVectors(hl, cl);
  }
  setViewOffset(e, t, n, i, r, o) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(ms * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      r += o.offsetX * i / c, t -= o.offsetY * n / l, i *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Pi = -90, Ii = 1;
class Iu extends Mt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Bt(Pi, Ii, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Bt(Pi, Ii, e, t);
    r.layers = this.layers, this.add(r);
    const o = new Bt(Pi, Ii, e, t);
    o.layers = this.layers, this.add(o);
    const a = new Bt(Pi, Ii, e, t);
    a.layers = this.layers, this.add(a);
    const c = new Bt(Pi, Ii, e, t);
    c.layers = this.layers, this.add(c);
    const l = new Bt(Pi, Ii, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, c] = t;
    for (const l of t) this.remove(l);
    if (e === gn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === Tr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, o, a, c, l, u] = this.children, h = e.getRenderTarget(), f = e.getActiveCubeFace(), g = e.getActiveMipmapLevel(), v = e.xr.enabled;
    e.xr.enabled = false;
    const S = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, c), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = S, e.setRenderTarget(n, 5, i), e.render(t, u), e.setRenderTarget(h, f, g), e.xr.enabled = v, n.texture.needsPMREMUpdate = true;
  }
}
class Dc extends Dt {
  constructor(e = [], t = Wi, n, i, r, o, a, c, l, u) {
    super(e, t, n, i, r, o, a, c, l, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Du extends mi {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Dc(i), this._setTextureOptions(t), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new Cs(5, 5, 5), r = new Jn({ name: "CubemapFromEquirect", uniforms: Ki(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Xt, blending: jn });
    r.uniforms.tEquirect.value = t;
    const o = new Wt(i, r), a = t.minFilter;
    return t.minFilter === mn && (t.minFilter = It), new Iu(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t = true, n = true, i = true) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
class fi extends Mt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const Lu = { type: "move" };
class Qr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new fi(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new fi(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new fi(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new B()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let i = null, r = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = true;
        for (const S of e.hand.values()) {
          const _ = t.getJointPose(S, n), p = this._getHandJoint(l, S);
          _ !== null && (p.matrix.fromArray(_.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = _.radius), p.visible = _ !== null;
        }
        const u = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], f = u.position.distanceTo(h.position), g = 0.02, v = 5e-3;
        l.inputState.pinching && f > g + v ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !l.inputState.pinching && f <= g - v && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = true, r.linearVelocity ? (c.hasLinearVelocity = true, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = false, r.angularVelocity ? (c.hasAngularVelocity = true, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = false));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(Lu)));
    }
    return a !== null && (a.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = o !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new fi();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Uu extends Mt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Mn(), this.environmentIntensity = 1, this.environmentRotation = new Mn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class Nu {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = oa, this.updateRanges = [], this.version = 0, this.uuid = ln();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ln()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = ln()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Ft = new B();
class ya {
  constructor(e, t, n, i = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) Ft.fromBufferAttribute(this, t), Ft.applyMatrix4(e), this.setXYZ(t, Ft.x, Ft.y, Ft.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) Ft.fromBufferAttribute(this, t), Ft.applyNormalMatrix(e), this.setXYZ(t, Ft.x, Ft.y, Ft.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) Ft.fromBufferAttribute(this, t), Ft.transformDirection(e), this.setXYZ(t, Ft.x, Ft.y, Ft.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = on(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = ct(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = ct(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = on(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = on(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = on(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = on(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = ct(t, this.array), n = ct(n, this.array), i = ct(i, this.array), r = ct(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new zt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ya(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
const ul = new B(), dl = new lt(), fl = new lt(), Fu = new B(), pl = new Qe(), nr = new B(), eo = new Sn(), ml = new Qe(), to = new Rs();
class Ou extends Wt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = za, this.bindMatrix = new Qe(), this.bindMatrixInverse = new Qe(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new kn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, nr), this.boundingBox.expandByPoint(nr);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Sn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, nr), this.boundingSphere.expandByPoint(nr);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), eo.copy(this.boundingSphere), eo.applyMatrix4(i), e.ray.intersectsSphere(eo) !== false && (ml.copy(i).invert(), to.copy(e.ray).applyMatrix4(ml), !(this.boundingBox !== null && to.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, to)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new lt(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === za ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Ph ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    dl.fromBufferAttribute(i.attributes.skinIndex, e), fl.fromBufferAttribute(i.attributes.skinWeight, e), ul.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const o = fl.getComponent(r);
      if (o !== 0) {
        const a = dl.getComponent(r);
        pl.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Fu.copy(ul).applyMatrix4(pl), o);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Lc extends Mt {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class Ea extends Dt {
  constructor(e = null, t = 1, n = 1, i, r, o, a, c, l = kt, u = kt, h, f) {
    super(null, o, a, c, l, u, i, r, h, f), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const gl = new Qe(), Bu = new Qe();
class Ta {
  constructor(e = [], t = []) {
    this.uuid = ln(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Qe());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Qe();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, o = e.length; r < o; r++) {
      const a = e[r] ? e[r].matrixWorld : Bu;
      gl.multiplyMatrices(a, t[r]), gl.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new Ta(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new Ea(t, e, e, Pt, Gt);
    return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let o = t[r];
      o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Lc()), this.bones.push(o), this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.7, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i];
      e.bones.push(o.uuid);
      const a = n[i];
      e.boneInverses.push(a.toArray());
    }
    return e;
  }
}
class aa extends zt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const Di = new Qe(), _l = new Qe(), ir = [], xl = new kn(), ku = new Qe(), ls = new Wt(), cs = new Sn();
class zu extends Wt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new aa(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, ku);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new kn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, Di), xl.copy(e.boundingBox).applyMatrix4(Di), this.boundingBox.union(xl);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Sn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, Di), cs.copy(e.boundingSphere).applyMatrix4(Di), this.boundingSphere.union(cs);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, o = e * r + 1;
    for (let a = 0; a < n.length; a++) n[a] = i[o + a];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (ls.geometry = this.geometry, ls.material = this.material, ls.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), cs.copy(this.boundingSphere), cs.applyMatrix4(n), e.ray.intersectsSphere(cs) !== false)) for (let r = 0; r < i; r++) {
      this.getMatrixAt(r, Di), _l.multiplyMatrices(n, Di), ls.matrixWorld = _l, ls.raycast(e, ir);
      for (let o = 0, a = ir.length; o < a; o++) {
        const c = ir[o];
        c.instanceId = r, c.object = this, t.push(c);
      }
      ir.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new aa(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Ea(new Float32Array(i * this.count), i, this.count, ui, Gt));
    const r = this.morphTexture.source.data.data;
    let o = 0;
    for (let l = 0; l < n.length; l++) o += n[l];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, c = i * e;
    r[c] = a, r.set(n, c + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}
const no = new B(), Hu = new B(), Vu = new Ze();
class Kn {
  constructor(e = new B(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = no.subVectors(n, t).cross(Hu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(no), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Vu.getNormalMatrix(e), i = this.coplanarPoint(no).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ii = new Sn(), Gu = new Ge(0.5, 0.5), sr = new B();
class ba {
  constructor(e = new Kn(), t = new Kn(), n = new Kn(), i = new Kn(), r = new Kn(), o = new Kn()) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = gn, n = false) {
    const i = this.planes, r = e.elements, o = r[0], a = r[1], c = r[2], l = r[3], u = r[4], h = r[5], f = r[6], g = r[7], v = r[8], S = r[9], _ = r[10], p = r[11], I = r[12], P = r[13], E = r[14], L = r[15];
    if (i[0].setComponents(l - o, g - u, p - v, L - I).normalize(), i[1].setComponents(l + o, g + u, p + v, L + I).normalize(), i[2].setComponents(l + a, g + h, p + S, L + P).normalize(), i[3].setComponents(l - a, g - h, p - S, L - P).normalize(), n) i[4].setComponents(c, f, _, E).normalize(), i[5].setComponents(l - c, g - f, p - _, L - E).normalize();
    else if (i[4].setComponents(l - c, g - f, p - _, L - E).normalize(), t === gn) i[5].setComponents(l + c, g + f, p + _, L + E).normalize();
    else if (t === Tr) i[5].setComponents(c, f, _, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(ii);
  }
  intersectsSprite(e) {
    ii.center.set(0, 0, 0);
    const t = Gu.distanceTo(e.center);
    return ii.radius = 0.7071067811865476 + t, ii.applyMatrix4(e.matrixWorld), this.intersectsSphere(ii);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (sr.x = i.normal.x > 0 ? e.max.x : e.min.x, sr.y = i.normal.y > 0 ? e.max.y : e.min.y, sr.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(sr) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Uc extends _n {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new qe(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const br = new B(), Ar = new B(), vl = new Qe(), hs = new Rs(), rr = new Sn(), io = new B(), Ml = new B();
class Aa extends Mt {
  constructor(e = new yn(), t = new Uc()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++) br.fromBufferAttribute(t, i - 1), Ar.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += br.distanceTo(Ar);
      e.setAttribute("lineDistance", new On(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), rr.copy(n.boundingSphere), rr.applyMatrix4(i), rr.radius += r, e.ray.intersectsSphere(rr) === false) return;
    vl.copy(i).invert(), hs.copy(e.ray).applyMatrix4(vl);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = this.isLineSegments ? 2 : 1, u = n.index, f = n.attributes.position;
    if (u !== null) {
      const g = Math.max(0, o.start), v = Math.min(u.count, o.start + o.count);
      for (let S = g, _ = v - 1; S < _; S += l) {
        const p = u.getX(S), I = u.getX(S + 1), P = or(this, e, hs, c, p, I, S);
        P && t.push(P);
      }
      if (this.isLineLoop) {
        const S = u.getX(v - 1), _ = u.getX(g), p = or(this, e, hs, c, S, _, v - 1);
        p && t.push(p);
      }
    } else {
      const g = Math.max(0, o.start), v = Math.min(f.count, o.start + o.count);
      for (let S = g, _ = v - 1; S < _; S += l) {
        const p = or(this, e, hs, c, S, S + 1, S);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const S = or(this, e, hs, c, v - 1, g, v - 1);
        S && t.push(S);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function or(s, e, t, n, i, r, o) {
  const a = s.geometry.attributes.position;
  if (br.fromBufferAttribute(a, i), Ar.fromBufferAttribute(a, r), t.distanceSqToSegment(br, Ar, io, Ml) > n) return;
  io.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(io);
  if (!(l < e.near || l > e.far)) return { distance: l, point: Ml.clone().applyMatrix4(s.matrixWorld), index: o, face: null, faceIndex: null, barycoord: null, object: s };
}
const Sl = new B(), yl = new B();
class Wu extends Aa {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2) Sl.fromBufferAttribute(t, i), yl.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Sl.distanceTo(yl);
      e.setAttribute("lineDistance", new On(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Xu extends Aa {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Nc extends _n {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new qe(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const El = new Qe(), la = new Rs(), ar = new Sn(), lr = new B();
class Yu extends Mt {
  constructor(e = new yn(), t = new Nc()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), ar.copy(n.boundingSphere), ar.applyMatrix4(i), ar.radius += r, e.ray.intersectsSphere(ar) === false) return;
    El.copy(i).invert(), la.copy(e.ray).applyMatrix4(El);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = n.index, h = n.attributes.position;
    if (l !== null) {
      const f = Math.max(0, o.start), g = Math.min(l.count, o.start + o.count);
      for (let v = f, S = g; v < S; v++) {
        const _ = l.getX(v);
        lr.fromBufferAttribute(h, _), Tl(lr, _, c, i, e, t, this);
      }
    } else {
      const f = Math.max(0, o.start), g = Math.min(h.count, o.start + o.count);
      for (let v = f, S = g; v < S; v++) lr.fromBufferAttribute(h, v), Tl(lr, v, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r;
        }
      }
    }
  }
}
function Tl(s, e, t, n, i, r, o) {
  const a = la.distanceSqToPoint(s);
  if (a < t) {
    const c = new B();
    la.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({ distance: l, distanceToRay: Math.sqrt(a), point: c, index: e, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class Fc extends Dt {
  constructor(e, t, n = pi, i, r, o, a = kt, c = kt, l, u = Ss, h = 1) {
    if (u !== Ss && u !== ys) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    const f = { width: e, height: t, depth: h };
    super(f, i, r, o, a, c, u, n, l), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Sa(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class Oc extends Dt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = true;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}
class Cr extends yn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
    const r = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(i), l = a + 1, u = c + 1, h = e / a, f = t / c, g = [], v = [], S = [], _ = [];
    for (let p = 0; p < u; p++) {
      const I = p * f - o;
      for (let P = 0; P < l; P++) {
        const E = P * h - r;
        v.push(E, -I, 0), S.push(0, 0, 1), _.push(P / a), _.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++) for (let I = 0; I < a; I++) {
      const P = I + l * p, E = I + l * (p + 1), L = I + 1 + l * (p + 1), O = I + 1 + l * p;
      g.push(P, E, O), g.push(E, L, O);
    }
    this.setIndex(g), this.setAttribute("position", new On(v, 3)), this.setAttribute("normal", new On(S, 3)), this.setAttribute("uv", new On(_, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Cr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class wa extends _n {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new qe(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new qe(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Sc, this.normalScale = new Ge(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Mn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class En extends wa {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Ge(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Je(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new qe(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new qe(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new qe(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class qu extends _n {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Lh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ku extends _n {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function cr(s, e) {
  return !s || s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function Zu(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function ju(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function bl(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, o = 0; o !== n; ++r) {
    const a = t[r] * e;
    for (let c = 0; c !== e; ++c) i[o++] = s[a + c];
  }
  return i;
}
function Bc(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let o = r[n];
  if (o !== void 0) if (Array.isArray(o)) do
    o = r[n], o !== void 0 && (e.push(r.time), t.push(...o)), r = s[i++];
  while (r !== void 0);
  else if (o.toArray !== void 0) do
    o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++];
  while (r !== void 0);
  else do
    o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++];
  while (r !== void 0);
}
class Ps {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let o;
        t: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = i, i = t[++n], e < i) break e;
            }
            o = t.length;
            break t;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let c = n - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = r, r = t[--n - 1], e >= r) break e;
            }
            o = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < o; ) {
          const a = n + o >>> 1;
          e < t[a] ? o = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let o = 0; o !== i; ++o) t[o] = n[r + o];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class $u extends Ps {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Ha, endingEnd: Ha };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, o = e + 1, a = i[r], c = i[o];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case Va:
        r = e, a = 2 * t - n;
        break;
      case Ga:
        r = i.length - 2, a = t + i[r] - i[r + 1];
        break;
      default:
        r = e, a = n;
    }
    if (c === void 0) switch (this.getSettings_().endingEnd) {
      case Va:
        o = e, c = 2 * n - t;
        break;
      case Ga:
        o = 1, c = n + i[1] - i[0];
        break;
      default:
        o = e - 1, c = t;
    }
    const l = (n - t) * 0.5, u = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (c - n), this._offsetPrev = r * u, this._offsetNext = o * u;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, u = this._offsetPrev, h = this._offsetNext, f = this._weightPrev, g = this._weightNext, v = (n - t) / (i - t), S = v * v, _ = S * v, p = -f * _ + 2 * f * S - f * v, I = (1 + f) * _ + (-1.5 - 2 * f) * S + (-0.5 + f) * v + 1, P = (-1 - g) * _ + (1.5 + g) * S + 0.5 * v, E = g * _ - g * S;
    for (let L = 0; L !== a; ++L) r[L] = p * o[u + L] + I * o[l + L] + P * o[c + L] + E * o[h + L];
    return r;
  }
}
class Ju extends Ps {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = e * a, l = c - a, u = (n - t) / (i - t), h = 1 - u;
    for (let f = 0; f !== a; ++f) r[f] = o[l + f] * h + o[c + f] * u;
    return r;
  }
}
class Qu extends Ps {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class cn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = cr(t, this.TimeBufferType), this.values = cr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: cr(e.times, Array), values: cr(e.values, Array) };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Qu(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Ju(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new $u(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Es:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ts:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Dr:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Es;
      case this.InterpolantFactoryMethodLinear:
        return Ts;
      case this.InterpolantFactoryMethodSmooth:
        return Dr;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, o = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; o !== -1 && n[o] > t; ) --o;
    if (++o, r !== 0 || o !== i) {
      r >= o && (o = Math.max(o, 1), r = o - 1);
      const a = this.getValueSize();
      this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let o = null;
    for (let a = 0; a !== r; a++) {
      const c = n[a];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, c), e = false;
        break;
      }
      if (o !== null && o > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, a, c, o), e = false;
        break;
      }
      o = c;
    }
    if (i !== void 0 && Zu(i)) for (let a = 0, c = i.length; a !== c; ++a) {
      const l = i[a];
      if (isNaN(l)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, l), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Dr, r = e.length - 1;
    let o = 1;
    for (let a = 1; a < r; ++a) {
      let c = false;
      const l = e[a], u = e[a + 1];
      if (l !== u && (a !== 1 || l !== e[0])) if (i) c = true;
      else {
        const h = a * n, f = h - n, g = h + n;
        for (let v = 0; v !== n; ++v) {
          const S = t[h + v];
          if (S !== t[f + v] || S !== t[g + v]) {
            c = true;
            break;
          }
        }
      }
      if (c) {
        if (a !== o) {
          e[o] = e[a];
          const h = a * n, f = o * n;
          for (let g = 0; g !== n; ++g) t[f + g] = t[h + g];
        }
        ++o;
      }
    }
    if (r > 0) {
      e[o] = e[r];
      for (let a = r * n, c = o * n, l = 0; l !== n; ++l) t[c + l] = t[a + l];
      ++o;
    }
    return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
cn.prototype.ValueTypeName = "";
cn.prototype.TimeBufferType = Float32Array;
cn.prototype.ValueBufferType = Float32Array;
cn.prototype.DefaultInterpolation = Ts;
class Qi extends cn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Qi.prototype.ValueTypeName = "bool";
Qi.prototype.ValueBufferType = Array;
Qi.prototype.DefaultInterpolation = Es;
Qi.prototype.InterpolantFactoryMethodLinear = void 0;
Qi.prototype.InterpolantFactoryMethodSmooth = void 0;
class kc extends cn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
kc.prototype.ValueTypeName = "color";
class Zi extends cn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
Zi.prototype.ValueTypeName = "number";
class ed extends Ps {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = (n - t) / (i - t);
    let l = e * a;
    for (let u = l + a; l !== u; l += 4) vn.slerpFlat(r, 0, o, l - a, o, l, c);
    return r;
  }
}
class ji extends cn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ed(this.times, this.values, this.getValueSize(), e);
  }
}
ji.prototype.ValueTypeName = "quaternion";
ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class es extends cn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
es.prototype.ValueTypeName = "string";
es.prototype.ValueBufferType = Array;
es.prototype.DefaultInterpolation = Es;
es.prototype.InterpolantFactoryMethodLinear = void 0;
es.prototype.InterpolantFactoryMethodSmooth = void 0;
class $i extends cn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
$i.prototype.ValueTypeName = "vector";
class td {
  constructor(e = "", t = -1, n = [], i = Ih) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = ln(), this.userData = {}, this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let o = 0, a = n.length; o !== a; ++o) t.push(id(n[o]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r.userData = JSON.parse(e.userData || "{}"), r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode, userData: JSON.stringify(e.userData) };
    for (let r = 0, o = n.length; r !== o; ++r) t.push(cn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, o = [];
    for (let a = 0; a < r; a++) {
      let c = [], l = [];
      c.push((a + r - 1) % r, a, (a + 1) % r), l.push(0, 1, 0);
      const u = ju(c);
      c = bl(c, 1, u), l = bl(l, 1, u), !i && c[0] === 0 && (c.push(r), l.push(l[0])), o.push(new Zi(".morphTargetInfluences[" + t[a].name + "]", c, l).scale(1 / n));
    }
    return new this(e, -1, o);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], u = l.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let f = i[h];
        f || (i[h] = f = []), f.push(l);
      }
    }
    const o = [];
    for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return o;
  }
  static parseAnimation(e, t) {
    if (console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"), !e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(h, f, g, v, S) {
      if (g.length !== 0) {
        const _ = [], p = [];
        Bc(g, _, p, v), _.length !== 0 && S.push(new h(f, _, p));
      }
    }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let h = 0; h < l.length; h++) {
      const f = l[h].keys;
      if (!(!f || f.length === 0)) if (f[0].morphTargets) {
        const g = {};
        let v;
        for (v = 0; v < f.length; v++) if (f[v].morphTargets) for (let S = 0; S < f[v].morphTargets.length; S++) g[f[v].morphTargets[S]] = -1;
        for (const S in g) {
          const _ = [], p = [];
          for (let I = 0; I !== f[v].morphTargets.length; ++I) {
            const P = f[v];
            _.push(P.time), p.push(P.morphTarget === S ? 1 : 0);
          }
          i.push(new Zi(".morphTargetInfluence[" + S + "]", _, p));
        }
        c = g.length * o;
      } else {
        const g = ".bones[" + t[h].name + "]";
        n($i, g + ".position", f, "pos", i), n(ji, g + ".quaternion", f, "rot", i), n($i, g + ".scale", f, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(r, c, i, a);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let n = 0; n < this.tracks.length; n++) e.push(this.tracks[n].clone());
    const t = new this.constructor(this.name, this.duration, e, this.blendMode);
    return t.userData = JSON.parse(JSON.stringify(this.userData)), t;
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function nd(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Zi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return $i;
    case "color":
      return kc;
    case "quaternion":
      return ji;
    case "bool":
    case "boolean":
      return Qi;
    case "string":
      return es;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function id(s) {
  if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = nd(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Bc(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const Nn = { enabled: false, files: {}, add: function(s, e) {
  this.enabled !== false && (this.files[s] = e);
}, get: function(s) {
  if (this.enabled !== false) return this.files[s];
}, remove: function(s) {
  delete this.files[s];
}, clear: function() {
  this.files = {};
} };
class sd {
  constructor(e, t, n) {
    const i = this;
    let r = false, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.abortController = new AbortController(), this.itemStart = function(u) {
      a++, r === false && i.onStart !== void 0 && i.onStart(u, o, a), r = true;
    }, this.itemEnd = function(u) {
      o++, i.onProgress !== void 0 && i.onProgress(u, o, a), o === a && (r = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(u) {
      i.onError !== void 0 && i.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, h) {
      return l.push(u, h), this;
    }, this.removeHandler = function(u) {
      const h = l.indexOf(u);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(u) {
      for (let h = 0, f = l.length; h < f; h += 2) {
        const g = l[h], v = l[h + 1];
        if (g.global && (g.lastIndex = 0), g.test(u)) return v;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this.abortController = new AbortController(), this;
    };
  }
}
const rd = new sd();
class _i {
  constructor(e) {
    this.manager = e !== void 0 ? e : rd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  abort() {
    return this;
  }
}
_i.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const In = {};
class od extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Ra extends _i {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Nn.get(`file:${e}`);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if (In[e] !== void 0) {
      In[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    In[e] = [], In[e].push({ onLoad: t, onProgress: n, onError: i });
    const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin", signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal }), a = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l;
        const u = In[e], h = l.body.getReader(), f = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), g = f ? parseInt(f) : 0, v = g !== 0;
        let S = 0;
        const _ = new ReadableStream({ start(p) {
          I();
          function I() {
            h.read().then(({ done: P, value: E }) => {
              if (P) p.close();
              else {
                S += E.byteLength;
                const L = new ProgressEvent("progress", { lengthComputable: v, loaded: S, total: g });
                for (let O = 0, N = u.length; O < N; O++) {
                  const V = u[O];
                  V.onProgress && V.onProgress(L);
                }
                p.enqueue(E), I();
              }
            }, (P) => {
              p.error(P);
            });
          }
        } });
        return new Response(_);
      } else throw new od(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((u) => new DOMParser().parseFromString(u, a));
        case "json":
          return l.json();
        default:
          if (a === "") return l.text();
          {
            const h = /charset="?([^;"\s]*)"?/i.exec(a), f = h && h[1] ? h[1].toLowerCase() : void 0, g = new TextDecoder(f);
            return l.arrayBuffer().then((v) => g.decode(v));
          }
      }
    }).then((l) => {
      Nn.add(`file:${e}`, l);
      const u = In[e];
      delete In[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const g = u[h];
        g.onLoad && g.onLoad(l);
      }
    }).catch((l) => {
      const u = In[e];
      if (u === void 0) throw this.manager.itemError(e), l;
      delete In[e];
      for (let h = 0, f = u.length; h < f; h++) {
        const g = u[h];
        g.onError && g.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}
const Li = /* @__PURE__ */ new WeakMap();
class ad extends _i {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Nn.get(`image:${e}`);
    if (o !== void 0) {
      if (o.complete === true) r.manager.itemStart(e), setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0);
      else {
        let h = Li.get(o);
        h === void 0 && (h = [], Li.set(o, h)), h.push({ onLoad: t, onError: i });
      }
      return o;
    }
    const a = bs("img");
    function c() {
      u(), t && t(this);
      const h = Li.get(this) || [];
      for (let f = 0; f < h.length; f++) {
        const g = h[f];
        g.onLoad && g.onLoad(this);
      }
      Li.delete(this), r.manager.itemEnd(e);
    }
    function l(h) {
      u(), i && i(h), Nn.remove(`image:${e}`);
      const f = Li.get(this) || [];
      for (let g = 0; g < f.length; g++) {
        const v = f[g];
        v.onError && v.onError(h);
      }
      Li.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", c, false), a.removeEventListener("error", l, false);
    }
    return a.addEventListener("load", c, false), a.addEventListener("error", l, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), Nn.add(`image:${e}`, a), r.manager.itemStart(e), a.src = e, a;
  }
}
class ld extends _i {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, o = new Ea(), a = new Ra(this.manager);
    return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(r.withCredentials), a.load(e, function(c) {
      let l;
      try {
        l = r.parse(c);
      } catch (u) {
        if (i !== void 0) i(u);
        else {
          console.error(u);
          return;
        }
      }
      l.image !== void 0 ? o.image = l.image : l.data !== void 0 && (o.image.width = l.width, o.image.height = l.height, o.image.data = l.data), o.wrapS = l.wrapS !== void 0 ? l.wrapS : pn, o.wrapT = l.wrapT !== void 0 ? l.wrapT : pn, o.magFilter = l.magFilter !== void 0 ? l.magFilter : It, o.minFilter = l.minFilter !== void 0 ? l.minFilter : It, o.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 && (o.colorSpace = l.colorSpace), l.flipY !== void 0 && (o.flipY = l.flipY), l.format !== void 0 && (o.format = l.format), l.type !== void 0 && (o.type = l.type), l.mipmaps !== void 0 && (o.mipmaps = l.mipmaps, o.minFilter = mn), l.mipmapCount === 1 && (o.minFilter = It), l.generateMipmaps !== void 0 && (o.generateMipmaps = l.generateMipmaps), o.needsUpdate = true, t && t(o, l);
    }, n, i), o;
  }
}
class cd extends _i {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Dt(), o = new ad(this.manager);
    return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function(a) {
      r.image = a, r.needsUpdate = true, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class Ca extends Mt {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new qe(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
const so = new Qe(), Al = new B(), wl = new B();
class Pa {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Ge(512, 512), this.mapType = xn, this.map = null, this.mapPass = null, this.matrix = new Qe(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new ba(), this._frameExtents = new Ge(1, 1), this._viewportCount = 1, this._viewports = [new lt(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    Al.setFromMatrixPosition(e.matrixWorld), t.position.copy(Al), wl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(wl), t.updateMatrixWorld(), so.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(so, t.coordinateSystem, t.reversedDepth), t.reversedDepth ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(so);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class hd extends Pa {
  constructor() {
    super(new Bt(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = qi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height * this.aspect, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class ud extends Ca {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(Mt.DEFAULT_UP), this.updateMatrix(), this.target = new Mt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new hd();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const Rl = new Qe(), us = new B(), ro = new B();
class dd extends Pa {
  constructor() {
    super(new Bt(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Ge(4, 2), this._viewportCount = 6, this._viewports = [new lt(2, 1, 1, 1), new lt(0, 1, 1, 1), new lt(3, 1, 1, 1), new lt(1, 1, 1, 1), new lt(3, 0, 1, 1), new lt(1, 0, 1, 1)], this._cubeDirections = [new B(1, 0, 0), new B(-1, 0, 0), new B(0, 0, 1), new B(0, 0, -1), new B(0, 1, 0), new B(0, -1, 0)], this._cubeUps = [new B(0, 1, 0), new B(0, 1, 0), new B(0, 1, 0), new B(0, 1, 0), new B(0, 0, 1), new B(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), us.setFromMatrixPosition(e.matrixWorld), n.position.copy(us), ro.copy(n.position), ro.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(ro), n.updateMatrixWorld(), i.makeTranslation(-us.x, -us.y, -us.z), Rl.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Rl, n.coordinateSystem, n.reversedDepth);
  }
}
class fd extends Ca {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new dd();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Ia extends Ic {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, o = n + e, a = i + t, c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, o = r + l * this.view.width, a -= u * this.view.offsetY, c = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, o, a, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class pd extends Pa {
  constructor() {
    super(new Ia(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class md extends Ca {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Mt.DEFAULT_UP), this.updateMatrix(), this.target = new Mt(), this.shadow = new pd();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class _s {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
const oo = /* @__PURE__ */ new WeakMap();
class gd extends _i {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, o = Nn.get(`image-bitmap:${e}`);
    if (o !== void 0) {
      if (r.manager.itemStart(e), o.then) {
        o.then((l) => {
          if (oo.has(o) === true) i && i(oo.get(o)), r.manager.itemError(e), r.manager.itemEnd(e);
          else return t && t(l), r.manager.itemEnd(e), l;
        });
        return;
      }
      return setTimeout(function() {
        t && t(o), r.manager.itemEnd(e);
      }, 0), o;
    }
    const a = {};
    a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader, a.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
    const c = fetch(e, a).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return Nn.add(`image-bitmap:${e}`, l), t && t(l), r.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), oo.set(c, l), Nn.remove(`image-bitmap:${e}`), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Nn.add(`image-bitmap:${e}`, c), r.manager.itemStart(e);
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}
class _d extends Bt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e;
  }
}
class xd {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = performance.now();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
const Da = "\\[\\]\\.:\\/", vd = new RegExp("[" + Da + "]", "g"), La = "[^" + Da + "]", Md = "[^" + Da.replace("\\.", "") + "]", Sd = /((?:WC+[\/:])*)/.source.replace("WC", La), yd = /(WCOD+)?/.source.replace("WCOD", Md), Ed = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", La), Td = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", La), bd = new RegExp("^" + Sd + yd + Ed + Td + "$"), Ad = ["material", "materials", "bones", "map"];
class wd {
  constructor(e, t, n) {
    const i = n || ht.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
  }
}
class ht {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || ht.parseTrackName(t), this.node = ht.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new ht.Composite(e, t, n) : new ht(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(vd, "");
  }
  static parseTrackName(e) {
    const t = bd.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Ad.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function(r) {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          if (a.name === t || a.uuid === t) return a;
          const c = n(a.children);
          if (c) return c;
        }
        return null;
      }, i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let r = t.propertyIndex;
    if (e || (e = ht.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++) if (e[u].name === l) {
            l = u;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[l];
      }
    }
    const o = e[i];
    if (o === void 0) {
      const l = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
      return;
    }
    let a = this.Versioning.None;
    this.targetObject = e, e.isMaterial === true ? a = this.Versioning.NeedsUpdate : e.isObject3D === true && (a = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r;
    } else o.fromArray !== void 0 && o.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][a];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
ht.Composite = wd;
ht.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
ht.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
ht.prototype.GetterByBindingType = [ht.prototype._getValue_direct, ht.prototype._getValue_array, ht.prototype._getValue_arrayElement, ht.prototype._getValue_toArray];
ht.prototype.SetterByBindingTypeAndVersioning = [[ht.prototype._setValue_direct, ht.prototype._setValue_direct_setNeedsUpdate, ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ht.prototype._setValue_array, ht.prototype._setValue_array_setNeedsUpdate, ht.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ht.prototype._setValue_arrayElement, ht.prototype._setValue_arrayElement_setNeedsUpdate, ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ht.prototype._setValue_fromArray, ht.prototype._setValue_fromArray_setNeedsUpdate, ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
class Cl {
  constructor(e = 1, t = 0, n = 0) {
    this.radius = e, this.phi = t, this.theta = n;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Je(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Je(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Rd extends gi {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e) {
    if (e === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    this.domElement !== null && this.disconnect(), this.domElement = e;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function Pl(s, e, t, n) {
  const i = Cd(n);
  switch (t) {
    case xc:
      return s * e;
    case ui:
      return s * e / i.components * i.byteLength;
    case _a:
      return s * e / i.components * i.byteLength;
    case ci:
      return s * e * 2 / i.components * i.byteLength;
    case xa:
      return s * e * 2 / i.components * i.byteLength;
    case vc:
      return s * e * 3 / i.components * i.byteLength;
    case Pt:
      return s * e * 4 / i.components * i.byteLength;
    case va:
      return s * e * 4 / i.components * i.byteLength;
    case gr:
    case _r:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case xr:
    case vr:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Do:
    case Uo:
      return Math.max(s, 16) * Math.max(e, 8) / 4;
    case Io:
    case Lo:
      return Math.max(s, 8) * Math.max(e, 8) / 2;
    case No:
    case Fo:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Oo:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Bo:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ko:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case zo:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ho:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Vo:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Go:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Wo:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Xo:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Yo:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case qo:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ko:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Zo:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case jo:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case $o:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Jo:
    case Qo:
    case ea:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case ta:
    case na:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case ia:
    case sa:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function Cd(s) {
  switch (s) {
    case xn:
    case pc:
      return { byteLength: 1, components: 1 };
    case vs:
    case mc:
    case Un:
      return { byteLength: 2, components: 1 };
    case ma:
    case ga:
      return { byteLength: 2, components: 4 };
    case pi:
    case pa:
    case Gt:
      return { byteLength: 4, components: 1 };
    case gc:
    case _c:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: fa } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = fa);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function zc() {
  let s = null, e = false, t = null, n = null;
  function i(r, o) {
    t(r, o), n = s.requestAnimationFrame(i);
  }
  return { start: function() {
    e !== true && t !== null && (n = s.requestAnimationFrame(i), e = true);
  }, stop: function() {
    s.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    s = r;
  } };
}
function Pd(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(a, c) {
    const l = a.array, u = a.usage, h = l.byteLength, f = s.createBuffer();
    s.bindBuffer(c, f), s.bufferData(c, l, u), a.onUploadCallback();
    let g;
    if (l instanceof Float32Array) g = s.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array) g = s.HALF_FLOAT;
    else if (l instanceof Uint16Array) a.isFloat16BufferAttribute ? g = s.HALF_FLOAT : g = s.UNSIGNED_SHORT;
    else if (l instanceof Int16Array) g = s.SHORT;
    else if (l instanceof Uint32Array) g = s.UNSIGNED_INT;
    else if (l instanceof Int32Array) g = s.INT;
    else if (l instanceof Int8Array) g = s.BYTE;
    else if (l instanceof Uint8Array) g = s.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) g = s.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return { buffer: f, type: g, bytesPerElement: l.BYTES_PER_ELEMENT, version: a.version, size: h };
  }
  function n(a, c, l) {
    const u = c.array, h = c.updateRanges;
    if (s.bindBuffer(l, a), h.length === 0) s.bufferSubData(l, 0, u);
    else {
      h.sort((g, v) => g.start - v.start);
      let f = 0;
      for (let g = 1; g < h.length; g++) {
        const v = h[f], S = h[g];
        S.start <= v.start + v.count + 1 ? v.count = Math.max(v.count, S.start + S.count - v.start) : (++f, h[f] = S);
      }
      h.length = f + 1;
      for (let g = 0, v = h.length; g < v; g++) {
        const S = h[g];
        s.bufferSubData(l, S.start * u.BYTES_PER_ELEMENT, u, S.start, S.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function i(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), e.get(a);
  }
  function r(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const c = e.get(a);
    c && (s.deleteBuffer(c.buffer), e.delete(a));
  }
  function o(a, c) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const u = e.get(a);
      (!u || u.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const l = e.get(a);
    if (l === void 0) e.set(a, t(a, c));
    else if (l.version < a.version) {
      if (l.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, a, c), l.version = a.version;
    }
  }
  return { get: i, remove: r, update: o };
}
var Id = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Dd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Ld = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Ud = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Nd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Fd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Od = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Bd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, kd = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, zd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Hd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Vd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Gd = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Wd = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Xd = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Yd = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, qd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Kd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Zd = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, jd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, $d = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Jd = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Qd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, ef = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, tf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, nf = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, sf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, rf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, of = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, af = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, lf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", cf = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, hf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, uf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, df = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, ff = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, pf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, mf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, gf = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, _f = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, xf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, vf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Mf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Sf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, yf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ef = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Tf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, bf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Af = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, wf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Rf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Cf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Pf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, If = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Df = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Lf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Uf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Nf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Ff = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Of = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Bf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, kf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, zf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Hf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Vf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Gf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Wf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Xf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Yf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, qf = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Kf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Zf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, jf = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, $f = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Jf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Qf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, ep = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, tp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, np = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, ip = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, sp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, rp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, op = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, ap = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, lp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, cp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, hp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, up = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, dp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, fp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, pp = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, mp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, gp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, _p = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, xp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, vp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Mp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Sp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, yp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ep = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Tp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, bp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Ap = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, wp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Rp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, Cp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Pp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ip = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Dp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Lp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Up = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Np = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Fp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Op = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Bp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, kp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, zp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Hp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Vp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Gp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Wp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Xp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Yp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, qp = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Kp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Zp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, jp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $p = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Jp = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Qp = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, em = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, tm = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, nm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, im = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, sm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, rm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, om = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, am = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, lm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, cm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, hm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, $e = { alphahash_fragment: Id, alphahash_pars_fragment: Dd, alphamap_fragment: Ld, alphamap_pars_fragment: Ud, alphatest_fragment: Nd, alphatest_pars_fragment: Fd, aomap_fragment: Od, aomap_pars_fragment: Bd, batching_pars_vertex: kd, batching_vertex: zd, begin_vertex: Hd, beginnormal_vertex: Vd, bsdfs: Gd, iridescence_fragment: Wd, bumpmap_pars_fragment: Xd, clipping_planes_fragment: Yd, clipping_planes_pars_fragment: qd, clipping_planes_pars_vertex: Kd, clipping_planes_vertex: Zd, color_fragment: jd, color_pars_fragment: $d, color_pars_vertex: Jd, color_vertex: Qd, common: ef, cube_uv_reflection_fragment: tf, defaultnormal_vertex: nf, displacementmap_pars_vertex: sf, displacementmap_vertex: rf, emissivemap_fragment: of, emissivemap_pars_fragment: af, colorspace_fragment: lf, colorspace_pars_fragment: cf, envmap_fragment: hf, envmap_common_pars_fragment: uf, envmap_pars_fragment: df, envmap_pars_vertex: ff, envmap_physical_pars_fragment: Tf, envmap_vertex: pf, fog_vertex: mf, fog_pars_vertex: gf, fog_fragment: _f, fog_pars_fragment: xf, gradientmap_pars_fragment: vf, lightmap_pars_fragment: Mf, lights_lambert_fragment: Sf, lights_lambert_pars_fragment: yf, lights_pars_begin: Ef, lights_toon_fragment: bf, lights_toon_pars_fragment: Af, lights_phong_fragment: wf, lights_phong_pars_fragment: Rf, lights_physical_fragment: Cf, lights_physical_pars_fragment: Pf, lights_fragment_begin: If, lights_fragment_maps: Df, lights_fragment_end: Lf, logdepthbuf_fragment: Uf, logdepthbuf_pars_fragment: Nf, logdepthbuf_pars_vertex: Ff, logdepthbuf_vertex: Of, map_fragment: Bf, map_pars_fragment: kf, map_particle_fragment: zf, map_particle_pars_fragment: Hf, metalnessmap_fragment: Vf, metalnessmap_pars_fragment: Gf, morphinstance_vertex: Wf, morphcolor_vertex: Xf, morphnormal_vertex: Yf, morphtarget_pars_vertex: qf, morphtarget_vertex: Kf, normal_fragment_begin: Zf, normal_fragment_maps: jf, normal_pars_fragment: $f, normal_pars_vertex: Jf, normal_vertex: Qf, normalmap_pars_fragment: ep, clearcoat_normal_fragment_begin: tp, clearcoat_normal_fragment_maps: np, clearcoat_pars_fragment: ip, iridescence_pars_fragment: sp, opaque_fragment: rp, packing: op, premultiplied_alpha_fragment: ap, project_vertex: lp, dithering_fragment: cp, dithering_pars_fragment: hp, roughnessmap_fragment: up, roughnessmap_pars_fragment: dp, shadowmap_pars_fragment: fp, shadowmap_pars_vertex: pp, shadowmap_vertex: mp, shadowmask_pars_fragment: gp, skinbase_vertex: _p, skinning_pars_vertex: xp, skinning_vertex: vp, skinnormal_vertex: Mp, specularmap_fragment: Sp, specularmap_pars_fragment: yp, tonemapping_fragment: Ep, tonemapping_pars_fragment: Tp, transmission_fragment: bp, transmission_pars_fragment: Ap, uv_pars_fragment: wp, uv_pars_vertex: Rp, uv_vertex: Cp, worldpos_vertex: Pp, background_vert: Ip, background_frag: Dp, backgroundCube_vert: Lp, backgroundCube_frag: Up, cube_vert: Np, cube_frag: Fp, depth_vert: Op, depth_frag: Bp, distanceRGBA_vert: kp, distanceRGBA_frag: zp, equirect_vert: Hp, equirect_frag: Vp, linedashed_vert: Gp, linedashed_frag: Wp, meshbasic_vert: Xp, meshbasic_frag: Yp, meshlambert_vert: qp, meshlambert_frag: Kp, meshmatcap_vert: Zp, meshmatcap_frag: jp, meshnormal_vert: $p, meshnormal_frag: Jp, meshphong_vert: Qp, meshphong_frag: em, meshphysical_vert: tm, meshphysical_frag: nm, meshtoon_vert: im, meshtoon_frag: sm, points_vert: rm, points_frag: om, shadow_vert: am, shadow_frag: lm, sprite_vert: cm, sprite_frag: hm }, Se = { common: { diffuse: { value: new qe(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ze() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ze() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ze() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ze() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ze() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ze() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ze() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ze() }, normalScale: { value: new Ge(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ze() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ze() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ze() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ze() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new qe(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new qe(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ze() }, alphaTest: { value: 0 }, uvTransform: { value: new Ze() } }, sprite: { diffuse: { value: new qe(16777215) }, opacity: { value: 1 }, center: { value: new Ge(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ze() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ze() }, alphaTest: { value: 0 } } }, dn = { basic: { uniforms: Ot([Se.common, Se.specularmap, Se.envmap, Se.aomap, Se.lightmap, Se.fog]), vertexShader: $e.meshbasic_vert, fragmentShader: $e.meshbasic_frag }, lambert: { uniforms: Ot([Se.common, Se.specularmap, Se.envmap, Se.aomap, Se.lightmap, Se.emissivemap, Se.bumpmap, Se.normalmap, Se.displacementmap, Se.fog, Se.lights, { emissive: { value: new qe(0) } }]), vertexShader: $e.meshlambert_vert, fragmentShader: $e.meshlambert_frag }, phong: { uniforms: Ot([Se.common, Se.specularmap, Se.envmap, Se.aomap, Se.lightmap, Se.emissivemap, Se.bumpmap, Se.normalmap, Se.displacementmap, Se.fog, Se.lights, { emissive: { value: new qe(0) }, specular: { value: new qe(1118481) }, shininess: { value: 30 } }]), vertexShader: $e.meshphong_vert, fragmentShader: $e.meshphong_frag }, standard: { uniforms: Ot([Se.common, Se.envmap, Se.aomap, Se.lightmap, Se.emissivemap, Se.bumpmap, Se.normalmap, Se.displacementmap, Se.roughnessmap, Se.metalnessmap, Se.fog, Se.lights, { emissive: { value: new qe(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: $e.meshphysical_vert, fragmentShader: $e.meshphysical_frag }, toon: { uniforms: Ot([Se.common, Se.aomap, Se.lightmap, Se.emissivemap, Se.bumpmap, Se.normalmap, Se.displacementmap, Se.gradientmap, Se.fog, Se.lights, { emissive: { value: new qe(0) } }]), vertexShader: $e.meshtoon_vert, fragmentShader: $e.meshtoon_frag }, matcap: { uniforms: Ot([Se.common, Se.bumpmap, Se.normalmap, Se.displacementmap, Se.fog, { matcap: { value: null } }]), vertexShader: $e.meshmatcap_vert, fragmentShader: $e.meshmatcap_frag }, points: { uniforms: Ot([Se.points, Se.fog]), vertexShader: $e.points_vert, fragmentShader: $e.points_frag }, dashed: { uniforms: Ot([Se.common, Se.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: $e.linedashed_vert, fragmentShader: $e.linedashed_frag }, depth: { uniforms: Ot([Se.common, Se.displacementmap]), vertexShader: $e.depth_vert, fragmentShader: $e.depth_frag }, normal: { uniforms: Ot([Se.common, Se.bumpmap, Se.normalmap, Se.displacementmap, { opacity: { value: 1 } }]), vertexShader: $e.meshnormal_vert, fragmentShader: $e.meshnormal_frag }, sprite: { uniforms: Ot([Se.sprite, Se.fog]), vertexShader: $e.sprite_vert, fragmentShader: $e.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ze() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: $e.background_vert, fragmentShader: $e.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ze() } }, vertexShader: $e.backgroundCube_vert, fragmentShader: $e.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: $e.cube_vert, fragmentShader: $e.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: $e.equirect_vert, fragmentShader: $e.equirect_frag }, distanceRGBA: { uniforms: Ot([Se.common, Se.displacementmap, { referencePosition: { value: new B() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: $e.distanceRGBA_vert, fragmentShader: $e.distanceRGBA_frag }, shadow: { uniforms: Ot([Se.lights, Se.fog, { color: { value: new qe(0) }, opacity: { value: 1 } }]), vertexShader: $e.shadow_vert, fragmentShader: $e.shadow_frag } };
dn.physical = { uniforms: Ot([dn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ze() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ze() }, clearcoatNormalScale: { value: new Ge(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ze() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ze() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ze() }, sheen: { value: 0 }, sheenColor: { value: new qe(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ze() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ze() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ze() }, transmissionSamplerSize: { value: new Ge() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ze() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new qe(0) }, specularColor: { value: new qe(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ze() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ze() }, anisotropyVector: { value: new Ge() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ze() } }]), vertexShader: $e.meshphysical_vert, fragmentShader: $e.meshphysical_frag };
const hr = { r: 0, b: 0, g: 0 }, si = new Mn(), um = new Qe();
function dm(s, e, t, n, i, r, o) {
  const a = new qe(0);
  let c = r === true ? 0 : 1, l, u, h = null, f = 0, g = null;
  function v(P) {
    let E = P.isScene === true ? P.background : null;
    return E && E.isTexture && (E = (P.backgroundBlurriness > 0 ? t : e).get(E)), E;
  }
  function S(P) {
    let E = false;
    const L = v(P);
    L === null ? p(a, c) : L && L.isColor && (p(L, 1), E = true);
    const O = s.xr.getEnvironmentBlendMode();
    O === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : O === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || E) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function _(P, E) {
    const L = v(E);
    L && (L.isCubeTexture || L.mapping === Rr) ? (u === void 0 && (u = new Wt(new Cs(1, 1, 1), new Jn({ name: "BackgroundCubeMaterial", uniforms: Ki(dn.backgroundCube.uniforms), vertexShader: dn.backgroundCube.vertexShader, fragmentShader: dn.backgroundCube.fragmentShader, side: Xt, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(O, N, V) {
      this.matrixWorld.copyPosition(V.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(u)), si.copy(E.backgroundRotation), si.x *= -1, si.y *= -1, si.z *= -1, L.isCubeTexture && L.isRenderTargetTexture === false && (si.y *= -1, si.z *= -1), u.material.uniforms.envMap.value = L, u.material.uniforms.flipEnvMap.value = L.isCubeTexture && L.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(si)), u.material.toneMapped = rt.getTransfer(L.colorSpace) !== dt, (h !== L || f !== L.version || g !== s.toneMapping) && (u.material.needsUpdate = true, h = L, f = L.version, g = s.toneMapping), u.layers.enableAll(), P.unshift(u, u.geometry, u.material, 0, 0, null)) : L && L.isTexture && (l === void 0 && (l = new Wt(new Cr(2, 2), new Jn({ name: "BackgroundMaterial", uniforms: Ki(dn.background.uniforms), vertexShader: dn.background.vertexShader, fragmentShader: dn.background.fragmentShader, side: Bn, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(l)), l.material.uniforms.t2D.value = L, l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, l.material.toneMapped = rt.getTransfer(L.colorSpace) !== dt, L.matrixAutoUpdate === true && L.updateMatrix(), l.material.uniforms.uvTransform.value.copy(L.matrix), (h !== L || f !== L.version || g !== s.toneMapping) && (l.material.needsUpdate = true, h = L, f = L.version, g = s.toneMapping), l.layers.enableAll(), P.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(P, E) {
    P.getRGB(hr, Pc(s)), n.buffers.color.setClear(hr.r, hr.g, hr.b, E, o);
  }
  function I() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(P, E = 1) {
    a.set(P), c = E, p(a, c);
  }, getClearAlpha: function() {
    return c;
  }, setClearAlpha: function(P) {
    c = P, p(a, c);
  }, render: S, addToRenderList: _, dispose: I };
}
function fm(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = f(null);
  let r = i, o = false;
  function a(T, F, X, $, ie) {
    let te = false;
    const ee = h($, X, F);
    r !== ee && (r = ee, l(r.object)), te = g(T, $, X, ie), te && v(T, $, X, ie), ie !== null && e.update(ie, s.ELEMENT_ARRAY_BUFFER), (te || o) && (o = false, E(T, F, X, $), ie !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(ie).buffer));
  }
  function c() {
    return s.createVertexArray();
  }
  function l(T) {
    return s.bindVertexArray(T);
  }
  function u(T) {
    return s.deleteVertexArray(T);
  }
  function h(T, F, X) {
    const $ = X.wireframe === true;
    let ie = n[T.id];
    ie === void 0 && (ie = {}, n[T.id] = ie);
    let te = ie[F.id];
    te === void 0 && (te = {}, ie[F.id] = te);
    let ee = te[$];
    return ee === void 0 && (ee = f(c()), te[$] = ee), ee;
  }
  function f(T) {
    const F = [], X = [], $ = [];
    for (let ie = 0; ie < t; ie++) F[ie] = 0, X[ie] = 0, $[ie] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: F, enabledAttributes: X, attributeDivisors: $, object: T, attributes: {}, index: null };
  }
  function g(T, F, X, $) {
    const ie = r.attributes, te = F.attributes;
    let ee = 0;
    const oe = X.getAttributes();
    for (const Z in oe) if (oe[Z].location >= 0) {
      const Me = ie[Z];
      let Re = te[Z];
      if (Re === void 0 && (Z === "instanceMatrix" && T.instanceMatrix && (Re = T.instanceMatrix), Z === "instanceColor" && T.instanceColor && (Re = T.instanceColor)), Me === void 0 || Me.attribute !== Re || Re && Me.data !== Re.data) return true;
      ee++;
    }
    return r.attributesNum !== ee || r.index !== $;
  }
  function v(T, F, X, $) {
    const ie = {}, te = F.attributes;
    let ee = 0;
    const oe = X.getAttributes();
    for (const Z in oe) if (oe[Z].location >= 0) {
      let Me = te[Z];
      Me === void 0 && (Z === "instanceMatrix" && T.instanceMatrix && (Me = T.instanceMatrix), Z === "instanceColor" && T.instanceColor && (Me = T.instanceColor));
      const Re = {};
      Re.attribute = Me, Me && Me.data && (Re.data = Me.data), ie[Z] = Re, ee++;
    }
    r.attributes = ie, r.attributesNum = ee, r.index = $;
  }
  function S() {
    const T = r.newAttributes;
    for (let F = 0, X = T.length; F < X; F++) T[F] = 0;
  }
  function _(T) {
    p(T, 0);
  }
  function p(T, F) {
    const X = r.newAttributes, $ = r.enabledAttributes, ie = r.attributeDivisors;
    X[T] = 1, $[T] === 0 && (s.enableVertexAttribArray(T), $[T] = 1), ie[T] !== F && (s.vertexAttribDivisor(T, F), ie[T] = F);
  }
  function I() {
    const T = r.newAttributes, F = r.enabledAttributes;
    for (let X = 0, $ = F.length; X < $; X++) F[X] !== T[X] && (s.disableVertexAttribArray(X), F[X] = 0);
  }
  function P(T, F, X, $, ie, te, ee) {
    ee === true ? s.vertexAttribIPointer(T, F, X, ie, te) : s.vertexAttribPointer(T, F, X, $, ie, te);
  }
  function E(T, F, X, $) {
    S();
    const ie = $.attributes, te = X.getAttributes(), ee = F.defaultAttributeValues;
    for (const oe in te) {
      const Z = te[oe];
      if (Z.location >= 0) {
        let pe = ie[oe];
        if (pe === void 0 && (oe === "instanceMatrix" && T.instanceMatrix && (pe = T.instanceMatrix), oe === "instanceColor" && T.instanceColor && (pe = T.instanceColor)), pe !== void 0) {
          const Me = pe.normalized, Re = pe.itemSize, Oe = e.get(pe);
          if (Oe === void 0) continue;
          const nt = Oe.buffer, at = Oe.type, et = Oe.bytesPerElement, q = at === s.INT || at === s.UNSIGNED_INT || pe.gpuType === pa;
          if (pe.isInterleavedBufferAttribute) {
            const se = pe.data, ye = se.stride, Be = pe.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let Ie = 0; Ie < Z.locationSize; Ie++) p(Z.location + Ie, se.meshPerAttribute);
              T.isInstancedMesh !== true && $._maxInstanceCount === void 0 && ($._maxInstanceCount = se.meshPerAttribute * se.count);
            } else for (let Ie = 0; Ie < Z.locationSize; Ie++) _(Z.location + Ie);
            s.bindBuffer(s.ARRAY_BUFFER, nt);
            for (let Ie = 0; Ie < Z.locationSize; Ie++) P(Z.location + Ie, Re / Z.locationSize, at, Me, ye * et, (Be + Re / Z.locationSize * Ie) * et, q);
          } else {
            if (pe.isInstancedBufferAttribute) {
              for (let se = 0; se < Z.locationSize; se++) p(Z.location + se, pe.meshPerAttribute);
              T.isInstancedMesh !== true && $._maxInstanceCount === void 0 && ($._maxInstanceCount = pe.meshPerAttribute * pe.count);
            } else for (let se = 0; se < Z.locationSize; se++) _(Z.location + se);
            s.bindBuffer(s.ARRAY_BUFFER, nt);
            for (let se = 0; se < Z.locationSize; se++) P(Z.location + se, Re / Z.locationSize, at, Me, Re * et, Re / Z.locationSize * se * et, q);
          }
        } else if (ee !== void 0) {
          const Me = ee[oe];
          if (Me !== void 0) switch (Me.length) {
            case 2:
              s.vertexAttrib2fv(Z.location, Me);
              break;
            case 3:
              s.vertexAttrib3fv(Z.location, Me);
              break;
            case 4:
              s.vertexAttrib4fv(Z.location, Me);
              break;
            default:
              s.vertexAttrib1fv(Z.location, Me);
          }
        }
      }
    }
    I();
  }
  function L() {
    V();
    for (const T in n) {
      const F = n[T];
      for (const X in F) {
        const $ = F[X];
        for (const ie in $) u($[ie].object), delete $[ie];
        delete F[X];
      }
      delete n[T];
    }
  }
  function O(T) {
    if (n[T.id] === void 0) return;
    const F = n[T.id];
    for (const X in F) {
      const $ = F[X];
      for (const ie in $) u($[ie].object), delete $[ie];
      delete F[X];
    }
    delete n[T.id];
  }
  function N(T) {
    for (const F in n) {
      const X = n[F];
      if (X[T.id] === void 0) continue;
      const $ = X[T.id];
      for (const ie in $) u($[ie].object), delete $[ie];
      delete X[T.id];
    }
  }
  function V() {
    b(), o = true, r !== i && (r = i, l(r.object));
  }
  function b() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: a, reset: V, resetDefaultState: b, dispose: L, releaseStatesOfGeometry: O, releaseStatesOfProgram: N, initAttributes: S, enableAttribute: _, disableUnusedAttributes: I };
}
function pm(s, e, t) {
  let n;
  function i(l) {
    n = l;
  }
  function r(l, u) {
    s.drawArrays(n, l, u), t.update(u, n, 1);
  }
  function o(l, u, h) {
    h !== 0 && (s.drawArraysInstanced(n, l, u, h), t.update(u, n, h));
  }
  function a(l, u, h) {
    if (h === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, u, 0, h);
    let g = 0;
    for (let v = 0; v < h; v++) g += u[v];
    t.update(g, n, 1);
  }
  function c(l, u, h, f) {
    if (h === 0) return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null) for (let v = 0; v < l.length; v++) o(l[v], u[v], f[v]);
    else {
      g.multiDrawArraysInstancedWEBGL(n, l, 0, u, 0, f, 0, h);
      let v = 0;
      for (let S = 0; S < h; S++) v += u[S] * f[S];
      t.update(v, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = c;
}
function mm(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const N = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function o(N) {
    return !(N !== Pt && n.convert(N) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(N) {
    const V = N === Un && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(N !== xn && n.convert(N) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && N !== Gt && !V);
  }
  function c(N) {
    if (N === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp";
      N = "mediump";
    }
    return N === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = t.precision !== void 0 ? t.precision : "highp";
  const u = c(l);
  u !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", u, "instead."), l = u);
  const h = t.logarithmicDepthBuffer === true, f = t.reversedDepthBuffer === true && e.has("EXT_clip_control"), g = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), v = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), S = s.getParameter(s.MAX_TEXTURE_SIZE), _ = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), p = s.getParameter(s.MAX_VERTEX_ATTRIBS), I = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), P = s.getParameter(s.MAX_VARYING_VECTORS), E = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), L = v > 0, O = s.getParameter(s.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: c, textureFormatReadable: o, textureTypeReadable: a, precision: l, logarithmicDepthBuffer: h, reversedDepthBuffer: f, maxTextures: g, maxVertexTextures: v, maxTextureSize: S, maxCubemapSize: _, maxAttributes: p, maxVertexUniforms: I, maxVaryings: P, maxFragmentUniforms: E, vertexTextures: L, maxSamples: O };
}
function gm(s) {
  const e = this;
  let t = null, n = 0, i = false, r = false;
  const o = new Kn(), a = new Ze(), c = { value: null, needsUpdate: false };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, f) {
    const g = h.length !== 0 || f || n !== 0 || i;
    return i = f, n = h.length, g;
  }, this.beginShadows = function() {
    r = true, u(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(h, f) {
    t = u(h, f, 0);
  }, this.setState = function(h, f, g) {
    const v = h.clippingPlanes, S = h.clipIntersection, _ = h.clipShadows, p = s.get(h);
    if (!i || v === null || v.length === 0 || r && !_) r ? u(null) : l();
    else {
      const I = r ? 0 : n, P = I * 4;
      let E = p.clippingState || null;
      c.value = E, E = u(v, f, P, g);
      for (let L = 0; L !== P; ++L) E[L] = t[L];
      p.clippingState = E, this.numIntersection = S ? this.numPlanes : 0, this.numPlanes += I;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(h, f, g, v) {
    const S = h !== null ? h.length : 0;
    let _ = null;
    if (S !== 0) {
      if (_ = c.value, v !== true || _ === null) {
        const p = g + S * 4, I = f.matrixWorldInverse;
        a.getNormalMatrix(I), (_ === null || _.length < p) && (_ = new Float32Array(p));
        for (let P = 0, E = g; P !== S; ++P, E += 4) o.copy(h[P]).applyMatrix4(I, a), o.normal.toArray(_, E), _[E + 3] = o.constant;
      }
      c.value = _, c.needsUpdate = true;
    }
    return e.numPlanes = S, e.numIntersection = 0, _;
  }
}
function _m(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === Sr ? o.mapping = Wi : a === Po && (o.mapping = Xi), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Sr || a === Po) if (e.has(o)) {
        const c = e.get(o).texture;
        return t(c, o.mapping);
      } else {
        const c = o.image;
        if (c && c.height > 0) {
          const l = new Du(c.height);
          return l.fromEquirectangularTexture(s, o), e.set(o, l), o.addEventListener("dispose", i), t(l.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const Fi = 4, Il = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], hi = 20, ao = new Ia(), Dl = new qe();
let lo = null, co = 0, ho = 0, uo = false;
const ai = (1 + Math.sqrt(5)) / 2, Ui = 1 / ai, Ll = [new B(-ai, Ui, 0), new B(ai, Ui, 0), new B(-Ui, 0, ai), new B(Ui, 0, ai), new B(0, ai, -Ui), new B(0, ai, Ui), new B(-1, 1, -1), new B(1, 1, -1), new B(-1, 1, 1), new B(1, 1, 1)], xm = new B();
class Ul {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const { size: o = 256, position: a = xm } = r;
    lo = this._renderer.getRenderTarget(), co = this._renderer.getActiveCubeFace(), ho = this._renderer.getActiveMipmapLevel(), uo = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(o);
    const c = this._allocateTargets();
    return c.depthBuffer = true, this._sceneToCubeUV(e, n, i, c, a), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ol(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Fl(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(lo, co, ho), this._renderer.xr.enabled = uo, e.scissorTest = false, ur(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Wi || e.mapping === Xi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), lo = this._renderer.getRenderTarget(), co = this._renderer.getActiveCubeFace(), ho = this._renderer.getActiveMipmapLevel(), uo = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: It, minFilter: It, generateMipmaps: false, type: Un, format: Pt, colorSpace: St, depthBuffer: false }, i = Nl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Nl(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = vm(r)), this._blurMaterial = Mm(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Wt(this._lodPlanes[0], e);
    this._renderer.compile(t, ao);
  }
  _sceneToCubeUV(e, t, n, i, r) {
    const c = new Bt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], u = [1, 1, 1, -1, -1, -1], h = this._renderer, f = h.autoClear, g = h.toneMapping;
    h.getClearColor(Dl), h.toneMapping = $n, h.autoClear = false, h.state.buffers.depth.getReversed() && (h.setRenderTarget(i), h.clearDepth(), h.setRenderTarget(null));
    const S = new di({ name: "PMREM.Background", side: Xt, depthWrite: false, depthTest: false }), _ = new Wt(new Cs(), S);
    let p = false;
    const I = e.background;
    I ? I.isColor && (S.color.copy(I), e.background = null, p = true) : (S.color.copy(Dl), p = true);
    for (let P = 0; P < 6; P++) {
      const E = P % 3;
      E === 0 ? (c.up.set(0, l[P], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x + u[P], r.y, r.z)) : E === 1 ? (c.up.set(0, 0, l[P]), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y + u[P], r.z)) : (c.up.set(0, l[P], 0), c.position.set(r.x, r.y, r.z), c.lookAt(r.x, r.y, r.z + u[P]));
      const L = this._cubeSize;
      ur(i, E * L, P > 2 ? L : 0, L, L), h.setRenderTarget(i), p && h.render(_, c), h.render(e, c);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = g, h.autoClear = f, e.background = I;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Wi || e.mapping === Xi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ol()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Fl());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new Wt(this._lodPlanes[0], r), a = r.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    ur(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, ao);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Ll[(i - r - 1) % Ll.length];
      this._blur(e, r - 1, r, o, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3, h = new Wt(this._lodPlanes[i], l), f = l.uniforms, g = this._sizeLods[n] - 1, v = isFinite(r) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * hi - 1), S = r / v, _ = isFinite(r) ? 1 + Math.floor(u * S) : hi;
    _ > hi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${hi}`);
    const p = [];
    let I = 0;
    for (let N = 0; N < hi; ++N) {
      const V = N / S, b = Math.exp(-V * V / 2);
      p.push(b), N === 0 ? I += b : N < _ && (I += 2 * b);
    }
    for (let N = 0; N < p.length; N++) p[N] = p[N] / I;
    f.envMap.value = e.texture, f.samples.value = _, f.weights.value = p, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: P } = this;
    f.dTheta.value = v, f.mipInt.value = P - n;
    const E = this._sizeLods[i], L = 3 * E * (i > P - Fi ? i - P + Fi : 0), O = 4 * (this._cubeSize - E);
    ur(t, L, O, 3 * E, 2 * E), c.setRenderTarget(t), c.render(h, ao);
  }
}
function vm(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Fi + 1 + Il.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let c = 1 / a;
    o > s - Fi ? c = Il[o - s + Fi - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), u = -l, h = 1 + l, f = [u, u, h, u, h, h, u, u, h, h, u, h], g = 6, v = 6, S = 3, _ = 2, p = 1, I = new Float32Array(S * v * g), P = new Float32Array(_ * v * g), E = new Float32Array(p * v * g);
    for (let O = 0; O < g; O++) {
      const N = O % 3 * 2 / 3 - 1, V = O > 2 ? 0 : -1, b = [N, V, 0, N + 2 / 3, V, 0, N + 2 / 3, V + 1, 0, N, V, 0, N + 2 / 3, V + 1, 0, N, V + 1, 0];
      I.set(b, S * v * O), P.set(f, _ * v * O);
      const T = [O, O, O, O, O, O];
      E.set(T, p * v * O);
    }
    const L = new yn();
    L.setAttribute("position", new zt(I, S)), L.setAttribute("uv", new zt(P, _)), L.setAttribute("faceIndex", new zt(E, p)), e.push(L), i > Fi && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Nl(s, e, t) {
  const n = new mi(s, e, t);
  return n.texture.mapping = Rr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function ur(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Mm(s, e, t) {
  const n = new Float32Array(hi), i = new B(0, 1, 0);
  return new Jn({ name: "SphericalGaussianBlur", defines: { n: hi, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Ua(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: jn, depthTest: false, depthWrite: false });
}
function Fl() {
  return new Jn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Ua(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: jn, depthTest: false, depthWrite: false });
}
function Ol() {
  return new Jn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Ua(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: jn, depthTest: false, depthWrite: false });
}
function Ua() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Sm(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === Sr || c === Po, u = c === Wi || c === Xi;
      if (l || u) {
        let h = e.get(a);
        const f = h !== void 0 ? h.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== f) return t === null && (t = new Ul(s)), h = l ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), h.texture;
        if (h !== void 0) return h.texture;
        {
          const g = a.image;
          return l && g && g.height > 0 || u && g && i(g) ? (t === null && (t = new Ul(s)), h = l ? t.fromEquirectangular(a) : t.fromCubemap(a), h.texture.pmremVersion = a.pmremVersion, e.set(a, h), a.addEventListener("dispose", r), h.texture) : null;
        }
      }
    }
    return a;
  }
  function i(a) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) a[u] !== void 0 && c++;
    return c === l;
  }
  function r(a) {
    const c = a.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: o };
}
function ym(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = t(n);
    return i === null && As("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function Em(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function o(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const v in f.attributes) e.remove(f.attributes[v]);
    f.removeEventListener("dispose", o), delete i[f.id];
    const g = r.get(f);
    g && (e.remove(g), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(h, f) {
    return i[f.id] === true || (f.addEventListener("dispose", o), i[f.id] = true, t.memory.geometries++), f;
  }
  function c(h) {
    const f = h.attributes;
    for (const g in f) e.update(f[g], s.ARRAY_BUFFER);
  }
  function l(h) {
    const f = [], g = h.index, v = h.attributes.position;
    let S = 0;
    if (g !== null) {
      const I = g.array;
      S = g.version;
      for (let P = 0, E = I.length; P < E; P += 3) {
        const L = I[P + 0], O = I[P + 1], N = I[P + 2];
        f.push(L, O, O, N, N, L);
      }
    } else if (v !== void 0) {
      const I = v.array;
      S = v.version;
      for (let P = 0, E = I.length / 3 - 1; P < E; P += 3) {
        const L = P + 0, O = P + 1, N = P + 2;
        f.push(L, O, O, N, N, L);
      }
    } else return;
    const _ = new (Tc(f) ? Cc : Rc)(f, 1);
    _.version = S;
    const p = r.get(h);
    p && e.remove(p), r.set(h, _);
  }
  function u(h) {
    const f = r.get(h);
    if (f) {
      const g = h.index;
      g !== null && f.version < g.version && l(h);
    } else l(h);
    return r.get(h);
  }
  return { get: a, update: c, getWireframeAttribute: u };
}
function Tm(s, e, t) {
  let n;
  function i(f) {
    n = f;
  }
  let r, o;
  function a(f) {
    r = f.type, o = f.bytesPerElement;
  }
  function c(f, g) {
    s.drawElements(n, g, r, f * o), t.update(g, n, 1);
  }
  function l(f, g, v) {
    v !== 0 && (s.drawElementsInstanced(n, g, r, f * o, v), t.update(g, n, v));
  }
  function u(f, g, v) {
    if (v === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, g, 0, r, f, 0, v);
    let _ = 0;
    for (let p = 0; p < v; p++) _ += g[p];
    t.update(_, n, 1);
  }
  function h(f, g, v, S) {
    if (v === 0) return;
    const _ = e.get("WEBGL_multi_draw");
    if (_ === null) for (let p = 0; p < f.length; p++) l(f[p] / o, g[p], S[p]);
    else {
      _.multiDrawElementsInstancedWEBGL(n, g, 0, r, f, 0, S, 0, v);
      let p = 0;
      for (let I = 0; I < v; I++) p += g[I] * S[I];
      t.update(p, n, 1);
    }
  }
  this.setMode = i, this.setIndex = a, this.render = c, this.renderInstances = l, this.renderMultiDraw = u, this.renderMultiDrawInstances = h;
}
function bm(s) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch (t.calls++, o) {
      case s.TRIANGLES:
        t.triangles += a * (r / 3);
        break;
      case s.LINES:
        t.lines += a * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += a * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += a * r;
        break;
      case s.POINTS:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: i, update: n };
}
function Am(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new lt();
  function r(o, a, c) {
    const l = o.morphTargetInfluences, u = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let f = n.get(a);
    if (f === void 0 || f.count !== h) {
      let T = function() {
        V.dispose(), n.delete(a), a.removeEventListener("dispose", T);
      };
      var g = T;
      f !== void 0 && f.texture.dispose();
      const v = a.morphAttributes.position !== void 0, S = a.morphAttributes.normal !== void 0, _ = a.morphAttributes.color !== void 0, p = a.morphAttributes.position || [], I = a.morphAttributes.normal || [], P = a.morphAttributes.color || [];
      let E = 0;
      v === true && (E = 1), S === true && (E = 2), _ === true && (E = 3);
      let L = a.attributes.position.count * E, O = 1;
      L > e.maxTextureSize && (O = Math.ceil(L / e.maxTextureSize), L = e.maxTextureSize);
      const N = new Float32Array(L * O * 4 * h), V = new bc(N, L, O, h);
      V.type = Gt, V.needsUpdate = true;
      const b = E * 4;
      for (let F = 0; F < h; F++) {
        const X = p[F], $ = I[F], ie = P[F], te = L * O * 4 * F;
        for (let ee = 0; ee < X.count; ee++) {
          const oe = ee * b;
          v === true && (i.fromBufferAttribute(X, ee), N[te + oe + 0] = i.x, N[te + oe + 1] = i.y, N[te + oe + 2] = i.z, N[te + oe + 3] = 0), S === true && (i.fromBufferAttribute($, ee), N[te + oe + 4] = i.x, N[te + oe + 5] = i.y, N[te + oe + 6] = i.z, N[te + oe + 7] = 0), _ === true && (i.fromBufferAttribute(ie, ee), N[te + oe + 8] = i.x, N[te + oe + 9] = i.y, N[te + oe + 10] = i.z, N[te + oe + 11] = ie.itemSize === 4 ? i.w : 1);
        }
      }
      f = { count: h, texture: V, size: new Ge(L, O) }, n.set(a, f), a.addEventListener("dispose", T);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) c.getUniforms().setValue(s, "morphTexture", o.morphTexture, t);
    else {
      let v = 0;
      for (let _ = 0; _ < l.length; _++) v += l[_];
      const S = a.morphTargetsRelative ? 1 : 1 - v;
      c.getUniforms().setValue(s, "morphTargetBaseInfluence", S), c.getUniforms().setValue(s, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(s, "morphTargetsTexture", f.texture, t), c.getUniforms().setValue(s, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function wm(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, u = c.geometry, h = e.get(c, u);
    if (i.get(h) !== l && (e.update(h), i.set(h, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === false && c.addEventListener("dispose", a), i.get(c) !== l && (t.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const f = c.skeleton;
      i.get(f) !== l && (f.update(), i.set(f, l));
    }
    return h;
  }
  function o() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: r, dispose: o };
}
const Hc = new Dt(), Bl = new Fc(1, 1), Vc = new bc(), Gc = new du(), Wc = new Dc(), kl = [], zl = [], Hl = new Float32Array(16), Vl = new Float32Array(9), Gl = new Float32Array(4);
function ts(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = kl[i];
  if (r === void 0 && (r = new Float32Array(i), kl[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) a += t, s[o].toArray(r, a);
  }
  return r;
}
function wt(s, e) {
  if (s.length !== e.length) return false;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return false;
  return true;
}
function Rt(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function Pr(s, e) {
  let t = zl[e];
  t === void 0 && (t = new Int32Array(e), zl[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function Rm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function Cm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    s.uniform2fv(this.addr, e), Rt(t, e);
  }
}
function Pm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (wt(t, e)) return;
    s.uniform3fv(this.addr, e), Rt(t, e);
  }
}
function Im(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    s.uniform4fv(this.addr, e), Rt(t, e);
  }
}
function Dm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e)) return;
    s.uniformMatrix2fv(this.addr, false, e), Rt(t, e);
  } else {
    if (wt(t, n)) return;
    Gl.set(n), s.uniformMatrix2fv(this.addr, false, Gl), Rt(t, n);
  }
}
function Lm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e)) return;
    s.uniformMatrix3fv(this.addr, false, e), Rt(t, e);
  } else {
    if (wt(t, n)) return;
    Vl.set(n), s.uniformMatrix3fv(this.addr, false, Vl), Rt(t, n);
  }
}
function Um(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (wt(t, e)) return;
    s.uniformMatrix4fv(this.addr, false, e), Rt(t, e);
  } else {
    if (wt(t, n)) return;
    Hl.set(n), s.uniformMatrix4fv(this.addr, false, Hl), Rt(t, n);
  }
}
function Nm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function Fm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    s.uniform2iv(this.addr, e), Rt(t, e);
  }
}
function Om(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    s.uniform3iv(this.addr, e), Rt(t, e);
  }
}
function Bm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    s.uniform4iv(this.addr, e), Rt(t, e);
  }
}
function km(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function zm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (wt(t, e)) return;
    s.uniform2uiv(this.addr, e), Rt(t, e);
  }
}
function Hm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (wt(t, e)) return;
    s.uniform3uiv(this.addr, e), Rt(t, e);
  }
}
function Vm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (wt(t, e)) return;
    s.uniform4uiv(this.addr, e), Rt(t, e);
  }
}
function Gm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (Bl.compareFunction = yc, r = Bl) : r = Hc, t.setTexture2D(e || r, i);
}
function Wm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Gc, i);
}
function Xm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Wc, i);
}
function Ym(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Vc, i);
}
function qm(s) {
  switch (s) {
    case 5126:
      return Rm;
    case 35664:
      return Cm;
    case 35665:
      return Pm;
    case 35666:
      return Im;
    case 35674:
      return Dm;
    case 35675:
      return Lm;
    case 35676:
      return Um;
    case 5124:
    case 35670:
      return Nm;
    case 35667:
    case 35671:
      return Fm;
    case 35668:
    case 35672:
      return Om;
    case 35669:
    case 35673:
      return Bm;
    case 5125:
      return km;
    case 36294:
      return zm;
    case 36295:
      return Hm;
    case 36296:
      return Vm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Gm;
    case 35679:
    case 36299:
    case 36307:
      return Wm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Xm;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ym;
  }
}
function Km(s, e) {
  s.uniform1fv(this.addr, e);
}
function Zm(s, e) {
  const t = ts(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function jm(s, e) {
  const t = ts(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function $m(s, e) {
  const t = ts(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Jm(s, e) {
  const t = ts(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, false, t);
}
function Qm(s, e) {
  const t = ts(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, false, t);
}
function eg(s, e) {
  const t = ts(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, false, t);
}
function tg(s, e) {
  s.uniform1iv(this.addr, e);
}
function ng(s, e) {
  s.uniform2iv(this.addr, e);
}
function ig(s, e) {
  s.uniform3iv(this.addr, e);
}
function sg(s, e) {
  s.uniform4iv(this.addr, e);
}
function rg(s, e) {
  s.uniform1uiv(this.addr, e);
}
function og(s, e) {
  s.uniform2uiv(this.addr, e);
}
function ag(s, e) {
  s.uniform3uiv(this.addr, e);
}
function lg(s, e) {
  s.uniform4uiv(this.addr, e);
}
function cg(s, e, t) {
  const n = this.cache, i = e.length, r = Pr(t, i);
  wt(n, r) || (s.uniform1iv(this.addr, r), Rt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || Hc, r[o]);
}
function hg(s, e, t) {
  const n = this.cache, i = e.length, r = Pr(t, i);
  wt(n, r) || (s.uniform1iv(this.addr, r), Rt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || Gc, r[o]);
}
function ug(s, e, t) {
  const n = this.cache, i = e.length, r = Pr(t, i);
  wt(n, r) || (s.uniform1iv(this.addr, r), Rt(n, r));
  for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || Wc, r[o]);
}
function dg(s, e, t) {
  const n = this.cache, i = e.length, r = Pr(t, i);
  wt(n, r) || (s.uniform1iv(this.addr, r), Rt(n, r));
  for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || Vc, r[o]);
}
function fg(s) {
  switch (s) {
    case 5126:
      return Km;
    case 35664:
      return Zm;
    case 35665:
      return jm;
    case 35666:
      return $m;
    case 35674:
      return Jm;
    case 35675:
      return Qm;
    case 35676:
      return eg;
    case 5124:
    case 35670:
      return tg;
    case 35667:
    case 35671:
      return ng;
    case 35668:
    case 35672:
      return ig;
    case 35669:
    case 35673:
      return sg;
    case 5125:
      return rg;
    case 36294:
      return og;
    case 36295:
      return ag;
    case 36296:
      return lg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return cg;
    case 35679:
    case 36299:
    case 36307:
      return hg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ug;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return dg;
  }
}
class pg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = qm(t.type);
  }
}
class mg {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = fg(t.type);
  }
}
class gg {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const fo = /(\w+)(\])?(\[|\.)?/g;
function Wl(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function _g(s, e, t) {
  const n = s.name, i = n.length;
  for (fo.lastIndex = 0; ; ) {
    const r = fo.exec(n), o = fo.lastIndex;
    let a = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === i) {
      Wl(t, l === void 0 ? new pg(a, s, e) : new mg(a, s, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && (h = new gg(a), Wl(t, h)), t = h;
    }
  }
}
class Mr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name);
      _g(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r], c = n[a.id];
      c.needsUpdate !== false && a.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Xl(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const xg = 37297;
let vg = 0;
function Mg(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
const Yl = new Ze();
function Sg(s) {
  rt._getMatrix(Yl, rt.workingColorSpace, s);
  const e = `mat3( ${Yl.elements.map((t) => t.toFixed(4))} )`;
  switch (rt.getTransfer(s)) {
    case Er:
      return [e, "LinearTransferOETF"];
    case dt:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s), [e, "LinearTransferOETF"];
  }
}
function ql(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), r = (s.getShaderInfoLog(e) || "").trim();
  if (n && r === "") return "";
  const o = /ERROR: 0:(\d+)/.exec(r);
  if (o) {
    const a = parseInt(o[1]);
    return t.toUpperCase() + `

` + r + `

` + Mg(s.getShaderSource(e), a);
  } else return r;
}
function yg(s, e) {
  const t = Sg(e);
  return [`vec4 ${s}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function Eg(s, e) {
  let t;
  switch (e) {
    case Th:
      t = "Linear";
      break;
    case bh:
      t = "Reinhard";
      break;
    case Ah:
      t = "Cineon";
      break;
    case uc:
      t = "ACESFilmic";
      break;
    case Rh:
      t = "AgX";
      break;
    case Ch:
      t = "Neutral";
      break;
    case wh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const dr = new B();
function Tg() {
  rt.getLuminanceCoefficients(dr);
  const s = dr.x.toFixed(4), e = dr.y.toFixed(4), t = dr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function bg(s) {
  return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ps).join(`
`);
}
function Ag(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function wg(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), o = r.name;
    let a = 1;
    r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a };
  }
  return t;
}
function ps(s) {
  return s !== "";
}
function Kl(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Zl(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Rg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ca(s) {
  return s.replace(Rg, Pg);
}
const Cg = /* @__PURE__ */ new Map();
function Pg(s, e) {
  let t = $e[e];
  if (t === void 0) {
    const n = Cg.get(e);
    if (n !== void 0) t = $e[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return ca(t);
}
const Ig = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function jl(s) {
  return s.replace(Ig, Dg);
}
function Dg(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function $l(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Lg(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === cc ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === ih ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Dn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Ug(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap) switch (s.envMapMode) {
    case Wi:
    case Xi:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case Rr:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Ng(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap) switch (s.envMapMode) {
    case Xi:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function Fg(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap) switch (s.combine) {
    case hc:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case yh:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case Eh:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function Og(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function Bg(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Lg(t), l = Ug(t), u = Ng(t), h = Fg(t), f = Og(t), g = bg(t), v = Ag(r), S = i.createProgram();
  let _, p, I = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (_ = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(ps).join(`
`), _.length > 0 && (_ += `
`), p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(ps).join(`
`), p.length > 0 && (p += `
`)) : (_ = [$l(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ps).join(`
`), p = [$l(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== $n ? "#define TONE_MAPPING" : "", t.toneMapping !== $n ? $e.tonemapping_pars_fragment : "", t.toneMapping !== $n ? Eg("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", $e.colorspace_pars_fragment, yg("linearToOutputTexel", t.outputColorSpace), Tg(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ps).join(`
`)), o = ca(o), o = Kl(o, t), o = Zl(o, t), a = ca(a), a = Kl(a, t), a = Zl(a, t), o = jl(o), a = jl(a), t.isRawShaderMaterial !== true && (I = `#version 300 es
`, _ = [g, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + _, p = ["#define varying in", t.glslVersion === Xa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Xa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const P = I + _ + o, E = I + p + a, L = Xl(i, i.VERTEX_SHADER, P), O = Xl(i, i.FRAGMENT_SHADER, E);
  i.attachShader(S, L), i.attachShader(S, O), t.index0AttributeName !== void 0 ? i.bindAttribLocation(S, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(S, 0, "position"), i.linkProgram(S);
  function N(F) {
    if (s.debug.checkShaderErrors) {
      const X = i.getProgramInfoLog(S) || "", $ = i.getShaderInfoLog(L) || "", ie = i.getShaderInfoLog(O) || "", te = X.trim(), ee = $.trim(), oe = ie.trim();
      let Z = true, pe = true;
      if (i.getProgramParameter(S, i.LINK_STATUS) === false) if (Z = false, typeof s.debug.onShaderError == "function") s.debug.onShaderError(i, S, L, O);
      else {
        const Me = ql(i, L, "vertex"), Re = ql(i, O, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(S, i.VALIDATE_STATUS) + `

Material Name: ` + F.name + `
Material Type: ` + F.type + `

Program Info Log: ` + te + `
` + Me + `
` + Re);
      }
      else te !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", te) : (ee === "" || oe === "") && (pe = false);
      pe && (F.diagnostics = { runnable: Z, programLog: te, vertexShader: { log: ee, prefix: _ }, fragmentShader: { log: oe, prefix: p } });
    }
    i.deleteShader(L), i.deleteShader(O), V = new Mr(i, S), b = wg(i, S);
  }
  let V;
  this.getUniforms = function() {
    return V === void 0 && N(this), V;
  };
  let b;
  this.getAttributes = function() {
    return b === void 0 && N(this), b;
  };
  let T = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return T === false && (T = i.getProgramParameter(S, xg)), T;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(S), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = vg++, this.cacheKey = e, this.usedTimes = 1, this.program = S, this.vertexShader = L, this.fragmentShader = O, this;
}
let kg = 0;
class zg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(i) === false && (o.add(i), i.usedTimes++), o.has(r) === false && (o.add(r), r.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Hg(e), t.set(e, n)), n;
  }
}
class Hg {
  constructor(e) {
    this.id = kg++, this.code = e, this.usedTimes = 0;
  }
}
function Vg(s, e, t, n, i, r, o) {
  const a = new Ac(), c = new zg(), l = /* @__PURE__ */ new Set(), u = [], h = i.logarithmicDepthBuffer, f = i.vertexTextures;
  let g = i.precision;
  const v = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function S(b) {
    return l.add(b), b === 0 ? "uv" : `uv${b}`;
  }
  function _(b, T, F, X, $) {
    const ie = X.fog, te = $.geometry, ee = b.isMeshStandardMaterial ? X.environment : null, oe = (b.isMeshStandardMaterial ? t : e).get(b.envMap || ee), Z = oe && oe.mapping === Rr ? oe.image.height : null, pe = v[b.type];
    b.precision !== null && (g = i.getMaxPrecision(b.precision), g !== b.precision && console.warn("THREE.WebGLProgram.getParameters:", b.precision, "not supported, using", g, "instead."));
    const Me = te.morphAttributes.position || te.morphAttributes.normal || te.morphAttributes.color, Re = Me !== void 0 ? Me.length : 0;
    let Oe = 0;
    te.morphAttributes.position !== void 0 && (Oe = 1), te.morphAttributes.normal !== void 0 && (Oe = 2), te.morphAttributes.color !== void 0 && (Oe = 3);
    let nt, at, et, q;
    if (pe) {
      const ot = dn[pe];
      nt = ot.vertexShader, at = ot.fragmentShader;
    } else nt = b.vertexShader, at = b.fragmentShader, c.update(b), et = c.getVertexShaderID(b), q = c.getFragmentShaderID(b);
    const se = s.getRenderTarget(), ye = s.state.buffers.depth.getReversed(), Be = $.isInstancedMesh === true, Ie = $.isBatchedMesh === true, je = !!b.map, yt = !!b.matcap, D = !!oe, pt = !!b.aoMap, We = !!b.lightMap, ze = !!b.bumpMap, Ae = !!b.normalMap, mt = !!b.displacementMap, Te = !!b.emissiveMap, Ye = !!b.metalnessMap, Et = !!b.roughnessMap, xt = b.anisotropy > 0, C = b.clearcoat > 0, M = b.dispersion > 0, G = b.iridescence > 0, Q = b.sheen > 0, ae = b.transmission > 0, j = xt && !!b.anisotropyMap, De = C && !!b.clearcoatMap, fe = C && !!b.clearcoatNormalMap, Ce = C && !!b.clearcoatRoughnessMap, Le = G && !!b.iridescenceMap, ue = G && !!b.iridescenceThicknessMap, _e = Q && !!b.sheenColorMap, we = Q && !!b.sheenRoughnessMap, Pe = !!b.specularMap, xe = !!b.specularColorMap, Ue = !!b.specularIntensityMap, U = ae && !!b.transmissionMap, de = ae && !!b.thicknessMap, Y = !!b.gradientMap, Ee = !!b.alphaMap, ce = b.alphaTest > 0, ne = !!b.alphaHash, be = !!b.extensions;
    let Xe = $n;
    b.toneMapped && (se === null || se.isXRRenderTarget === true) && (Xe = s.toneMapping);
    const ut = { shaderID: pe, shaderType: b.type, shaderName: b.name, vertexShader: nt, fragmentShader: at, defines: b.defines, customVertexShaderID: et, customFragmentShaderID: q, isRawShaderMaterial: b.isRawShaderMaterial === true, glslVersion: b.glslVersion, precision: g, batching: Ie, batchingColor: Ie && $._colorsTexture !== null, instancing: Be, instancingColor: Be && $.instanceColor !== null, instancingMorph: Be && $.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: se === null ? s.outputColorSpace : se.isXRRenderTarget === true ? se.texture.colorSpace : St, alphaToCoverage: !!b.alphaToCoverage, map: je, matcap: yt, envMap: D, envMapMode: D && oe.mapping, envMapCubeUVHeight: Z, aoMap: pt, lightMap: We, bumpMap: ze, normalMap: Ae, displacementMap: f && mt, emissiveMap: Te, normalMapObjectSpace: Ae && b.normalMapType === Nh, normalMapTangentSpace: Ae && b.normalMapType === Sc, metalnessMap: Ye, roughnessMap: Et, anisotropy: xt, anisotropyMap: j, clearcoat: C, clearcoatMap: De, clearcoatNormalMap: fe, clearcoatRoughnessMap: Ce, dispersion: M, iridescence: G, iridescenceMap: Le, iridescenceThicknessMap: ue, sheen: Q, sheenColorMap: _e, sheenRoughnessMap: we, specularMap: Pe, specularColorMap: xe, specularIntensityMap: Ue, transmission: ae, transmissionMap: U, thicknessMap: de, gradientMap: Y, opaque: b.transparent === false && b.blending === ki && b.alphaToCoverage === false, alphaMap: Ee, alphaTest: ce, alphaHash: ne, combine: b.combine, mapUv: je && S(b.map.channel), aoMapUv: pt && S(b.aoMap.channel), lightMapUv: We && S(b.lightMap.channel), bumpMapUv: ze && S(b.bumpMap.channel), normalMapUv: Ae && S(b.normalMap.channel), displacementMapUv: mt && S(b.displacementMap.channel), emissiveMapUv: Te && S(b.emissiveMap.channel), metalnessMapUv: Ye && S(b.metalnessMap.channel), roughnessMapUv: Et && S(b.roughnessMap.channel), anisotropyMapUv: j && S(b.anisotropyMap.channel), clearcoatMapUv: De && S(b.clearcoatMap.channel), clearcoatNormalMapUv: fe && S(b.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Ce && S(b.clearcoatRoughnessMap.channel), iridescenceMapUv: Le && S(b.iridescenceMap.channel), iridescenceThicknessMapUv: ue && S(b.iridescenceThicknessMap.channel), sheenColorMapUv: _e && S(b.sheenColorMap.channel), sheenRoughnessMapUv: we && S(b.sheenRoughnessMap.channel), specularMapUv: Pe && S(b.specularMap.channel), specularColorMapUv: xe && S(b.specularColorMap.channel), specularIntensityMapUv: Ue && S(b.specularIntensityMap.channel), transmissionMapUv: U && S(b.transmissionMap.channel), thicknessMapUv: de && S(b.thicknessMap.channel), alphaMapUv: Ee && S(b.alphaMap.channel), vertexTangents: !!te.attributes.tangent && (Ae || xt), vertexColors: b.vertexColors, vertexAlphas: b.vertexColors === true && !!te.attributes.color && te.attributes.color.itemSize === 4, pointsUvs: $.isPoints === true && !!te.attributes.uv && (je || Ee), fog: !!ie, useFog: b.fog === true, fogExp2: !!ie && ie.isFogExp2, flatShading: b.flatShading === true && b.wireframe === false, sizeAttenuation: b.sizeAttenuation === true, logarithmicDepthBuffer: h, reversedDepthBuffer: ye, skinning: $.isSkinnedMesh === true, morphTargets: te.morphAttributes.position !== void 0, morphNormals: te.morphAttributes.normal !== void 0, morphColors: te.morphAttributes.color !== void 0, morphTargetsCount: Re, morphTextureStride: Oe, numDirLights: T.directional.length, numPointLights: T.point.length, numSpotLights: T.spot.length, numSpotLightMaps: T.spotLightMap.length, numRectAreaLights: T.rectArea.length, numHemiLights: T.hemi.length, numDirLightShadows: T.directionalShadowMap.length, numPointLightShadows: T.pointShadowMap.length, numSpotLightShadows: T.spotShadowMap.length, numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps, numLightProbes: T.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: b.dithering, shadowMapEnabled: s.shadowMap.enabled && F.length > 0, shadowMapType: s.shadowMap.type, toneMapping: Xe, decodeVideoTexture: je && b.map.isVideoTexture === true && rt.getTransfer(b.map.colorSpace) === dt, decodeVideoTextureEmissive: Te && b.emissiveMap.isVideoTexture === true && rt.getTransfer(b.emissiveMap.colorSpace) === dt, premultipliedAlpha: b.premultipliedAlpha, doubleSided: b.side === fn, flipSided: b.side === Xt, useDepthPacking: b.depthPacking >= 0, depthPacking: b.depthPacking || 0, index0AttributeName: b.index0AttributeName, extensionClipCullDistance: be && b.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (be && b.extensions.multiDraw === true || Ie) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: b.customProgramCacheKey() };
    return ut.vertexUv1s = l.has(1), ut.vertexUv2s = l.has(2), ut.vertexUv3s = l.has(3), l.clear(), ut;
  }
  function p(b) {
    const T = [];
    if (b.shaderID ? T.push(b.shaderID) : (T.push(b.customVertexShaderID), T.push(b.customFragmentShaderID)), b.defines !== void 0) for (const F in b.defines) T.push(F), T.push(b.defines[F]);
    return b.isRawShaderMaterial === false && (I(T, b), P(T, b), T.push(s.outputColorSpace)), T.push(b.customProgramCacheKey), T.join();
  }
  function I(b, T) {
    b.push(T.precision), b.push(T.outputColorSpace), b.push(T.envMapMode), b.push(T.envMapCubeUVHeight), b.push(T.mapUv), b.push(T.alphaMapUv), b.push(T.lightMapUv), b.push(T.aoMapUv), b.push(T.bumpMapUv), b.push(T.normalMapUv), b.push(T.displacementMapUv), b.push(T.emissiveMapUv), b.push(T.metalnessMapUv), b.push(T.roughnessMapUv), b.push(T.anisotropyMapUv), b.push(T.clearcoatMapUv), b.push(T.clearcoatNormalMapUv), b.push(T.clearcoatRoughnessMapUv), b.push(T.iridescenceMapUv), b.push(T.iridescenceThicknessMapUv), b.push(T.sheenColorMapUv), b.push(T.sheenRoughnessMapUv), b.push(T.specularMapUv), b.push(T.specularColorMapUv), b.push(T.specularIntensityMapUv), b.push(T.transmissionMapUv), b.push(T.thicknessMapUv), b.push(T.combine), b.push(T.fogExp2), b.push(T.sizeAttenuation), b.push(T.morphTargetsCount), b.push(T.morphAttributeCount), b.push(T.numDirLights), b.push(T.numPointLights), b.push(T.numSpotLights), b.push(T.numSpotLightMaps), b.push(T.numHemiLights), b.push(T.numRectAreaLights), b.push(T.numDirLightShadows), b.push(T.numPointLightShadows), b.push(T.numSpotLightShadows), b.push(T.numSpotLightShadowsWithMaps), b.push(T.numLightProbes), b.push(T.shadowMapType), b.push(T.toneMapping), b.push(T.numClippingPlanes), b.push(T.numClipIntersection), b.push(T.depthPacking);
  }
  function P(b, T) {
    a.disableAll(), T.supportsVertexTextures && a.enable(0), T.instancing && a.enable(1), T.instancingColor && a.enable(2), T.instancingMorph && a.enable(3), T.matcap && a.enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T.normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a.enable(18), T.batching && a.enable(19), T.dispersion && a.enable(20), T.batchingColor && a.enable(21), T.gradientMap && a.enable(22), b.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reversedDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.decodeVideoTextureEmissive && a.enable(20), T.alphaToCoverage && a.enable(21), b.push(a.mask);
  }
  function E(b) {
    const T = v[b.type];
    let F;
    if (T) {
      const X = dn[T];
      F = Ru.clone(X.uniforms);
    } else F = b.uniforms;
    return F;
  }
  function L(b, T) {
    let F;
    for (let X = 0, $ = u.length; X < $; X++) {
      const ie = u[X];
      if (ie.cacheKey === T) {
        F = ie, ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && (F = new Bg(s, T, b, r), u.push(F)), F;
  }
  function O(b) {
    if (--b.usedTimes === 0) {
      const T = u.indexOf(b);
      u[T] = u[u.length - 1], u.pop(), b.destroy();
    }
  }
  function N(b) {
    c.remove(b);
  }
  function V() {
    c.dispose();
  }
  return { getParameters: _, getProgramCacheKey: p, getUniforms: E, acquireProgram: L, releaseProgram: O, releaseShaderCache: N, programs: u, dispose: V };
}
function Gg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(o) {
    return s.has(o);
  }
  function t(o) {
    let a = s.get(o);
    return a === void 0 && (a = {}, s.set(o, a)), a;
  }
  function n(o) {
    s.delete(o);
  }
  function i(o, a, c) {
    s.get(o)[a] = c;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: r };
}
function Wg(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function Jl(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function Ql() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function o(h, f, g, v, S, _) {
    let p = s[e];
    return p === void 0 ? (p = { id: h.id, object: h, geometry: f, material: g, groupOrder: v, renderOrder: h.renderOrder, z: S, group: _ }, s[e] = p) : (p.id = h.id, p.object = h, p.geometry = f, p.material = g, p.groupOrder = v, p.renderOrder = h.renderOrder, p.z = S, p.group = _), e++, p;
  }
  function a(h, f, g, v, S, _) {
    const p = o(h, f, g, v, S, _);
    g.transmission > 0 ? n.push(p) : g.transparent === true ? i.push(p) : t.push(p);
  }
  function c(h, f, g, v, S, _) {
    const p = o(h, f, g, v, S, _);
    g.transmission > 0 ? n.unshift(p) : g.transparent === true ? i.unshift(p) : t.unshift(p);
  }
  function l(h, f) {
    t.length > 1 && t.sort(h || Wg), n.length > 1 && n.sort(f || Jl), i.length > 1 && i.sort(f || Jl);
  }
  function u() {
    for (let h = e, f = s.length; h < f; h++) {
      const g = s[h];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: c, finish: u, sort: l };
}
function Xg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let o;
    return r === void 0 ? (o = new Ql(), s.set(n, [o])) : i >= r.length ? (o = new Ql(), r.push(o)) : o = r[i], o;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Yg() {
  const s = {};
  return { get: function(e) {
    if (s[e.id] !== void 0) return s[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new B(), color: new qe() };
        break;
      case "SpotLight":
        t = { position: new B(), direction: new B(), color: new qe(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new B(), color: new qe(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new B(), skyColor: new qe(), groundColor: new qe() };
        break;
      case "RectAreaLight":
        t = { color: new qe(), position: new B(), halfWidth: new B(), halfHeight: new B() };
        break;
    }
    return s[e.id] = t, t;
  } };
}
function qg() {
  const s = {};
  return { get: function(e) {
    if (s[e.id] !== void 0) return s[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ge() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ge() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ge(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s[e.id] = t, t;
  } };
}
let Kg = 0;
function Zg(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function jg(s) {
  const e = new Yg(), t = qg(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let l = 0; l < 9; l++) n.probe.push(new B());
  const i = new B(), r = new Qe(), o = new Qe();
  function a(l) {
    let u = 0, h = 0, f = 0;
    for (let b = 0; b < 9; b++) n.probe[b].set(0, 0, 0);
    let g = 0, v = 0, S = 0, _ = 0, p = 0, I = 0, P = 0, E = 0, L = 0, O = 0, N = 0;
    l.sort(Zg);
    for (let b = 0, T = l.length; b < T; b++) {
      const F = l[b], X = F.color, $ = F.intensity, ie = F.distance, te = F.shadow && F.shadow.map ? F.shadow.map.texture : null;
      if (F.isAmbientLight) u += X.r * $, h += X.g * $, f += X.b * $;
      else if (F.isLightProbe) {
        for (let ee = 0; ee < 9; ee++) n.probe[ee].addScaledVector(F.sh.coefficients[ee], $);
        N++;
      } else if (F.isDirectionalLight) {
        const ee = e.get(F);
        if (ee.color.copy(F.color).multiplyScalar(F.intensity), F.castShadow) {
          const oe = F.shadow, Z = t.get(F);
          Z.shadowIntensity = oe.intensity, Z.shadowBias = oe.bias, Z.shadowNormalBias = oe.normalBias, Z.shadowRadius = oe.radius, Z.shadowMapSize = oe.mapSize, n.directionalShadow[g] = Z, n.directionalShadowMap[g] = te, n.directionalShadowMatrix[g] = F.shadow.matrix, I++;
        }
        n.directional[g] = ee, g++;
      } else if (F.isSpotLight) {
        const ee = e.get(F);
        ee.position.setFromMatrixPosition(F.matrixWorld), ee.color.copy(X).multiplyScalar($), ee.distance = ie, ee.coneCos = Math.cos(F.angle), ee.penumbraCos = Math.cos(F.angle * (1 - F.penumbra)), ee.decay = F.decay, n.spot[S] = ee;
        const oe = F.shadow;
        if (F.map && (n.spotLightMap[L] = F.map, L++, oe.updateMatrices(F), F.castShadow && O++), n.spotLightMatrix[S] = oe.matrix, F.castShadow) {
          const Z = t.get(F);
          Z.shadowIntensity = oe.intensity, Z.shadowBias = oe.bias, Z.shadowNormalBias = oe.normalBias, Z.shadowRadius = oe.radius, Z.shadowMapSize = oe.mapSize, n.spotShadow[S] = Z, n.spotShadowMap[S] = te, E++;
        }
        S++;
      } else if (F.isRectAreaLight) {
        const ee = e.get(F);
        ee.color.copy(X).multiplyScalar($), ee.halfWidth.set(F.width * 0.5, 0, 0), ee.halfHeight.set(0, F.height * 0.5, 0), n.rectArea[_] = ee, _++;
      } else if (F.isPointLight) {
        const ee = e.get(F);
        if (ee.color.copy(F.color).multiplyScalar(F.intensity), ee.distance = F.distance, ee.decay = F.decay, F.castShadow) {
          const oe = F.shadow, Z = t.get(F);
          Z.shadowIntensity = oe.intensity, Z.shadowBias = oe.bias, Z.shadowNormalBias = oe.normalBias, Z.shadowRadius = oe.radius, Z.shadowMapSize = oe.mapSize, Z.shadowCameraNear = oe.camera.near, Z.shadowCameraFar = oe.camera.far, n.pointShadow[v] = Z, n.pointShadowMap[v] = te, n.pointShadowMatrix[v] = F.shadow.matrix, P++;
        }
        n.point[v] = ee, v++;
      } else if (F.isHemisphereLight) {
        const ee = e.get(F);
        ee.skyColor.copy(F.color).multiplyScalar($), ee.groundColor.copy(F.groundColor).multiplyScalar($), n.hemi[p] = ee, p++;
      }
    }
    _ > 0 && (s.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = Se.LTC_FLOAT_1, n.rectAreaLTC2 = Se.LTC_FLOAT_2) : (n.rectAreaLTC1 = Se.LTC_HALF_1, n.rectAreaLTC2 = Se.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = h, n.ambient[2] = f;
    const V = n.hash;
    (V.directionalLength !== g || V.pointLength !== v || V.spotLength !== S || V.rectAreaLength !== _ || V.hemiLength !== p || V.numDirectionalShadows !== I || V.numPointShadows !== P || V.numSpotShadows !== E || V.numSpotMaps !== L || V.numLightProbes !== N) && (n.directional.length = g, n.spot.length = S, n.rectArea.length = _, n.point.length = v, n.hemi.length = p, n.directionalShadow.length = I, n.directionalShadowMap.length = I, n.pointShadow.length = P, n.pointShadowMap.length = P, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = I, n.pointShadowMatrix.length = P, n.spotLightMatrix.length = E + L - O, n.spotLightMap.length = L, n.numSpotLightShadowsWithMaps = O, n.numLightProbes = N, V.directionalLength = g, V.pointLength = v, V.spotLength = S, V.rectAreaLength = _, V.hemiLength = p, V.numDirectionalShadows = I, V.numPointShadows = P, V.numSpotShadows = E, V.numSpotMaps = L, V.numLightProbes = N, n.version = Kg++);
  }
  function c(l, u) {
    let h = 0, f = 0, g = 0, v = 0, S = 0;
    const _ = u.matrixWorldInverse;
    for (let p = 0, I = l.length; p < I; p++) {
      const P = l[p];
      if (P.isDirectionalLight) {
        const E = n.directional[h];
        E.direction.setFromMatrixPosition(P.matrixWorld), i.setFromMatrixPosition(P.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(_), h++;
      } else if (P.isSpotLight) {
        const E = n.spot[g];
        E.position.setFromMatrixPosition(P.matrixWorld), E.position.applyMatrix4(_), E.direction.setFromMatrixPosition(P.matrixWorld), i.setFromMatrixPosition(P.target.matrixWorld), E.direction.sub(i), E.direction.transformDirection(_), g++;
      } else if (P.isRectAreaLight) {
        const E = n.rectArea[v];
        E.position.setFromMatrixPosition(P.matrixWorld), E.position.applyMatrix4(_), o.identity(), r.copy(P.matrixWorld), r.premultiply(_), o.extractRotation(r), E.halfWidth.set(P.width * 0.5, 0, 0), E.halfHeight.set(0, P.height * 0.5, 0), E.halfWidth.applyMatrix4(o), E.halfHeight.applyMatrix4(o), v++;
      } else if (P.isPointLight) {
        const E = n.point[f];
        E.position.setFromMatrixPosition(P.matrixWorld), E.position.applyMatrix4(_), f++;
      } else if (P.isHemisphereLight) {
        const E = n.hemi[S];
        E.direction.setFromMatrixPosition(P.matrixWorld), E.direction.transformDirection(_), S++;
      }
    }
  }
  return { setup: a, setupView: c, state: n };
}
function ec(s) {
  const e = new jg(s), t = [], n = [];
  function i(u) {
    l.camera = u, t.length = 0, n.length = 0;
  }
  function r(u) {
    t.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function a() {
    e.setup(t);
  }
  function c(u) {
    e.setupView(t, u);
  }
  const l = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: i, state: l, setupLights: a, setupLightsView: c, pushLight: r, pushShadow: o };
}
function $g(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const o = e.get(i);
    let a;
    return o === void 0 ? (a = new ec(s), e.set(i, [a])) : r >= o.length ? (a = new ec(s), o.push(a)) : a = o[r], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const Jg = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Qg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function e_(s, e, t) {
  let n = new ba();
  const i = new Ge(), r = new Ge(), o = new lt(), a = new qu({ depthPacking: Uh }), c = new Ku(), l = {}, u = t.maxTextureSize, h = { [Bn]: Xt, [Xt]: Bn, [fn]: fn }, f = new Jn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Ge() }, radius: { value: 4 } }, vertexShader: Jg, fragmentShader: Qg }), g = f.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const v = new yn();
  v.setAttribute("position", new zt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const S = new Wt(v, f), _ = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = cc;
  let p = this.type;
  this.render = function(O, N, V) {
    if (_.enabled === false || _.autoUpdate === false && _.needsUpdate === false || O.length === 0) return;
    const b = s.getRenderTarget(), T = s.getActiveCubeFace(), F = s.getActiveMipmapLevel(), X = s.state;
    X.setBlending(jn), X.buffers.depth.getReversed() === true ? X.buffers.color.setClear(0, 0, 0, 0) : X.buffers.color.setClear(1, 1, 1, 1), X.buffers.depth.setTest(true), X.setScissorTest(false);
    const $ = p !== Dn && this.type === Dn, ie = p === Dn && this.type !== Dn;
    for (let te = 0, ee = O.length; te < ee; te++) {
      const oe = O[te], Z = oe.shadow;
      if (Z === void 0) {
        console.warn("THREE.WebGLShadowMap:", oe, "has no shadow.");
        continue;
      }
      if (Z.autoUpdate === false && Z.needsUpdate === false) continue;
      i.copy(Z.mapSize);
      const pe = Z.getFrameExtents();
      if (i.multiply(pe), r.copy(Z.mapSize), (i.x > u || i.y > u) && (i.x > u && (r.x = Math.floor(u / pe.x), i.x = r.x * pe.x, Z.mapSize.x = r.x), i.y > u && (r.y = Math.floor(u / pe.y), i.y = r.y * pe.y, Z.mapSize.y = r.y)), Z.map === null || $ === true || ie === true) {
        const Re = this.type !== Dn ? { minFilter: kt, magFilter: kt } : {};
        Z.map !== null && Z.map.dispose(), Z.map = new mi(i.x, i.y, Re), Z.map.texture.name = oe.name + ".shadowMap", Z.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(Z.map), s.clear();
      const Me = Z.getViewportCount();
      for (let Re = 0; Re < Me; Re++) {
        const Oe = Z.getViewport(Re);
        o.set(r.x * Oe.x, r.y * Oe.y, r.x * Oe.z, r.y * Oe.w), X.viewport(o), Z.updateMatrices(oe, Re), n = Z.getFrustum(), E(N, V, Z.camera, oe, this.type);
      }
      Z.isPointLightShadow !== true && this.type === Dn && I(Z, V), Z.needsUpdate = false;
    }
    p = this.type, _.needsUpdate = false, s.setRenderTarget(b, T, F);
  };
  function I(O, N) {
    const V = e.update(S);
    f.defines.VSM_SAMPLES !== O.blurSamples && (f.defines.VSM_SAMPLES = O.blurSamples, g.defines.VSM_SAMPLES = O.blurSamples, f.needsUpdate = true, g.needsUpdate = true), O.mapPass === null && (O.mapPass = new mi(i.x, i.y)), f.uniforms.shadow_pass.value = O.map.texture, f.uniforms.resolution.value = O.mapSize, f.uniforms.radius.value = O.radius, s.setRenderTarget(O.mapPass), s.clear(), s.renderBufferDirect(N, null, V, f, S, null), g.uniforms.shadow_pass.value = O.mapPass.texture, g.uniforms.resolution.value = O.mapSize, g.uniforms.radius.value = O.radius, s.setRenderTarget(O.map), s.clear(), s.renderBufferDirect(N, null, V, g, S, null);
  }
  function P(O, N, V, b) {
    let T = null;
    const F = V.isPointLight === true ? O.customDistanceMaterial : O.customDepthMaterial;
    if (F !== void 0) T = F;
    else if (T = V.isPointLight === true ? c : a, s.localClippingEnabled && N.clipShadows === true && Array.isArray(N.clippingPlanes) && N.clippingPlanes.length !== 0 || N.displacementMap && N.displacementScale !== 0 || N.alphaMap && N.alphaTest > 0 || N.map && N.alphaTest > 0 || N.alphaToCoverage === true) {
      const X = T.uuid, $ = N.uuid;
      let ie = l[X];
      ie === void 0 && (ie = {}, l[X] = ie);
      let te = ie[$];
      te === void 0 && (te = T.clone(), ie[$] = te, N.addEventListener("dispose", L)), T = te;
    }
    if (T.visible = N.visible, T.wireframe = N.wireframe, b === Dn ? T.side = N.shadowSide !== null ? N.shadowSide : N.side : T.side = N.shadowSide !== null ? N.shadowSide : h[N.side], T.alphaMap = N.alphaMap, T.alphaTest = N.alphaToCoverage === true ? 0.5 : N.alphaTest, T.map = N.map, T.clipShadows = N.clipShadows, T.clippingPlanes = N.clippingPlanes, T.clipIntersection = N.clipIntersection, T.displacementMap = N.displacementMap, T.displacementScale = N.displacementScale, T.displacementBias = N.displacementBias, T.wireframeLinewidth = N.wireframeLinewidth, T.linewidth = N.linewidth, V.isPointLight === true && T.isMeshDistanceMaterial === true) {
      const X = s.properties.get(T);
      X.light = V;
    }
    return T;
  }
  function E(O, N, V, b, T) {
    if (O.visible === false) return;
    if (O.layers.test(N.layers) && (O.isMesh || O.isLine || O.isPoints) && (O.castShadow || O.receiveShadow && T === Dn) && (!O.frustumCulled || n.intersectsObject(O))) {
      O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse, O.matrixWorld);
      const $ = e.update(O), ie = O.material;
      if (Array.isArray(ie)) {
        const te = $.groups;
        for (let ee = 0, oe = te.length; ee < oe; ee++) {
          const Z = te[ee], pe = ie[Z.materialIndex];
          if (pe && pe.visible) {
            const Me = P(O, pe, b, T);
            O.onBeforeShadow(s, O, N, V, $, Me, Z), s.renderBufferDirect(V, null, $, Me, O, Z), O.onAfterShadow(s, O, N, V, $, Me, Z);
          }
        }
      } else if (ie.visible) {
        const te = P(O, ie, b, T);
        O.onBeforeShadow(s, O, N, V, $, te, null), s.renderBufferDirect(V, null, $, te, O, null), O.onAfterShadow(s, O, N, V, $, te, null);
      }
    }
    const X = O.children;
    for (let $ = 0, ie = X.length; $ < ie; $++) E(X[$], N, V, b, T);
  }
  function L(O) {
    O.target.removeEventListener("dispose", L);
    for (const V in l) {
      const b = l[V], T = O.target.uuid;
      T in b && (b[T].dispose(), delete b[T]);
    }
  }
}
const t_ = { [Eo]: To, [bo]: Ro, [Ao]: Co, [Gi]: wo, [To]: Eo, [Ro]: bo, [Co]: Ao, [wo]: Gi };
function n_(s, e) {
  function t() {
    let U = false;
    const de = new lt();
    let Y = null;
    const Ee = new lt(0, 0, 0, 0);
    return { setMask: function(ce) {
      Y !== ce && !U && (s.colorMask(ce, ce, ce, ce), Y = ce);
    }, setLocked: function(ce) {
      U = ce;
    }, setClear: function(ce, ne, be, Xe, ut) {
      ut === true && (ce *= Xe, ne *= Xe, be *= Xe), de.set(ce, ne, be, Xe), Ee.equals(de) === false && (s.clearColor(ce, ne, be, Xe), Ee.copy(de));
    }, reset: function() {
      U = false, Y = null, Ee.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let U = false, de = false, Y = null, Ee = null, ce = null;
    return { setReversed: function(ne) {
      if (de !== ne) {
        const be = e.get("EXT_clip_control");
        ne ? be.clipControlEXT(be.LOWER_LEFT_EXT, be.ZERO_TO_ONE_EXT) : be.clipControlEXT(be.LOWER_LEFT_EXT, be.NEGATIVE_ONE_TO_ONE_EXT), de = ne;
        const Xe = ce;
        ce = null, this.setClear(Xe);
      }
    }, getReversed: function() {
      return de;
    }, setTest: function(ne) {
      ne ? se(s.DEPTH_TEST) : ye(s.DEPTH_TEST);
    }, setMask: function(ne) {
      Y !== ne && !U && (s.depthMask(ne), Y = ne);
    }, setFunc: function(ne) {
      if (de && (ne = t_[ne]), Ee !== ne) {
        switch (ne) {
          case Eo:
            s.depthFunc(s.NEVER);
            break;
          case To:
            s.depthFunc(s.ALWAYS);
            break;
          case bo:
            s.depthFunc(s.LESS);
            break;
          case Gi:
            s.depthFunc(s.LEQUAL);
            break;
          case Ao:
            s.depthFunc(s.EQUAL);
            break;
          case wo:
            s.depthFunc(s.GEQUAL);
            break;
          case Ro:
            s.depthFunc(s.GREATER);
            break;
          case Co:
            s.depthFunc(s.NOTEQUAL);
            break;
          default:
            s.depthFunc(s.LEQUAL);
        }
        Ee = ne;
      }
    }, setLocked: function(ne) {
      U = ne;
    }, setClear: function(ne) {
      ce !== ne && (de && (ne = 1 - ne), s.clearDepth(ne), ce = ne);
    }, reset: function() {
      U = false, Y = null, Ee = null, ce = null, de = false;
    } };
  }
  function i() {
    let U = false, de = null, Y = null, Ee = null, ce = null, ne = null, be = null, Xe = null, ut = null;
    return { setTest: function(ot) {
      U || (ot ? se(s.STENCIL_TEST) : ye(s.STENCIL_TEST));
    }, setMask: function(ot) {
      de !== ot && !U && (s.stencilMask(ot), de = ot);
    }, setFunc: function(ot, Qt, Kt) {
      (Y !== ot || Ee !== Qt || ce !== Kt) && (s.stencilFunc(ot, Qt, Kt), Y = ot, Ee = Qt, ce = Kt);
    }, setOp: function(ot, Qt, Kt) {
      (ne !== ot || be !== Qt || Xe !== Kt) && (s.stencilOp(ot, Qt, Kt), ne = ot, be = Qt, Xe = Kt);
    }, setLocked: function(ot) {
      U = ot;
    }, setClear: function(ot) {
      ut !== ot && (s.clearStencil(ot), ut = ot);
    }, reset: function() {
      U = false, de = null, Y = null, Ee = null, ce = null, ne = null, be = null, Xe = null, ut = null;
    } };
  }
  const r = new t(), o = new n(), a = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), g = [], v = null, S = false, _ = null, p = null, I = null, P = null, E = null, L = null, O = null, N = new qe(0, 0, 0), V = 0, b = false, T = null, F = null, X = null, $ = null, ie = null;
  const te = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ee = false, oe = 0;
  const Z = s.getParameter(s.VERSION);
  Z.indexOf("WebGL") !== -1 ? (oe = parseFloat(/^WebGL (\d)/.exec(Z)[1]), ee = oe >= 1) : Z.indexOf("OpenGL ES") !== -1 && (oe = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), ee = oe >= 2);
  let pe = null, Me = {};
  const Re = s.getParameter(s.SCISSOR_BOX), Oe = s.getParameter(s.VIEWPORT), nt = new lt().fromArray(Re), at = new lt().fromArray(Oe);
  function et(U, de, Y, Ee) {
    const ce = new Uint8Array(4), ne = s.createTexture();
    s.bindTexture(U, ne), s.texParameteri(U, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(U, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let be = 0; be < Y; be++) U === s.TEXTURE_3D || U === s.TEXTURE_2D_ARRAY ? s.texImage3D(de, 0, s.RGBA, 1, 1, Ee, 0, s.RGBA, s.UNSIGNED_BYTE, ce) : s.texImage2D(de + be, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, ce);
    return ne;
  }
  const q = {};
  q[s.TEXTURE_2D] = et(s.TEXTURE_2D, s.TEXTURE_2D, 1), q[s.TEXTURE_CUBE_MAP] = et(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), q[s.TEXTURE_2D_ARRAY] = et(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), q[s.TEXTURE_3D] = et(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), se(s.DEPTH_TEST), o.setFunc(Gi), ze(false), Ae(Fa), se(s.CULL_FACE), pt(jn);
  function se(U) {
    u[U] !== true && (s.enable(U), u[U] = true);
  }
  function ye(U) {
    u[U] !== false && (s.disable(U), u[U] = false);
  }
  function Be(U, de) {
    return h[U] !== de ? (s.bindFramebuffer(U, de), h[U] = de, U === s.DRAW_FRAMEBUFFER && (h[s.FRAMEBUFFER] = de), U === s.FRAMEBUFFER && (h[s.DRAW_FRAMEBUFFER] = de), true) : false;
  }
  function Ie(U, de) {
    let Y = g, Ee = false;
    if (U) {
      Y = f.get(de), Y === void 0 && (Y = [], f.set(de, Y));
      const ce = U.textures;
      if (Y.length !== ce.length || Y[0] !== s.COLOR_ATTACHMENT0) {
        for (let ne = 0, be = ce.length; ne < be; ne++) Y[ne] = s.COLOR_ATTACHMENT0 + ne;
        Y.length = ce.length, Ee = true;
      }
    } else Y[0] !== s.BACK && (Y[0] = s.BACK, Ee = true);
    Ee && s.drawBuffers(Y);
  }
  function je(U) {
    return v !== U ? (s.useProgram(U), v = U, true) : false;
  }
  const yt = { [li]: s.FUNC_ADD, [rh]: s.FUNC_SUBTRACT, [oh]: s.FUNC_REVERSE_SUBTRACT };
  yt[ah] = s.MIN, yt[lh] = s.MAX;
  const D = { [ch]: s.ZERO, [hh]: s.ONE, [uh]: s.SRC_COLOR, [So]: s.SRC_ALPHA, [_h]: s.SRC_ALPHA_SATURATE, [mh]: s.DST_COLOR, [fh]: s.DST_ALPHA, [dh]: s.ONE_MINUS_SRC_COLOR, [yo]: s.ONE_MINUS_SRC_ALPHA, [gh]: s.ONE_MINUS_DST_COLOR, [ph]: s.ONE_MINUS_DST_ALPHA, [xh]: s.CONSTANT_COLOR, [vh]: s.ONE_MINUS_CONSTANT_COLOR, [Mh]: s.CONSTANT_ALPHA, [Sh]: s.ONE_MINUS_CONSTANT_ALPHA };
  function pt(U, de, Y, Ee, ce, ne, be, Xe, ut, ot) {
    if (U === jn) {
      S === true && (ye(s.BLEND), S = false);
      return;
    }
    if (S === false && (se(s.BLEND), S = true), U !== sh) {
      if (U !== _ || ot !== b) {
        if ((p !== li || E !== li) && (s.blendEquation(s.FUNC_ADD), p = li, E = li), ot) switch (U) {
          case ki:
            s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case Oa:
            s.blendFunc(s.ONE, s.ONE);
            break;
          case Ba:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case ka:
            s.blendFuncSeparate(s.DST_COLOR, s.ONE_MINUS_SRC_ALPHA, s.ZERO, s.ONE);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", U);
            break;
        }
        else switch (U) {
          case ki:
            s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case Oa:
            s.blendFuncSeparate(s.SRC_ALPHA, s.ONE, s.ONE, s.ONE);
            break;
          case Ba:
            console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case ka:
            console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", U);
            break;
        }
        I = null, P = null, L = null, O = null, N.set(0, 0, 0), V = 0, _ = U, b = ot;
      }
      return;
    }
    ce = ce || de, ne = ne || Y, be = be || Ee, (de !== p || ce !== E) && (s.blendEquationSeparate(yt[de], yt[ce]), p = de, E = ce), (Y !== I || Ee !== P || ne !== L || be !== O) && (s.blendFuncSeparate(D[Y], D[Ee], D[ne], D[be]), I = Y, P = Ee, L = ne, O = be), (Xe.equals(N) === false || ut !== V) && (s.blendColor(Xe.r, Xe.g, Xe.b, ut), N.copy(Xe), V = ut), _ = U, b = false;
  }
  function We(U, de) {
    U.side === fn ? ye(s.CULL_FACE) : se(s.CULL_FACE);
    let Y = U.side === Xt;
    de && (Y = !Y), ze(Y), U.blending === ki && U.transparent === false ? pt(jn) : pt(U.blending, U.blendEquation, U.blendSrc, U.blendDst, U.blendEquationAlpha, U.blendSrcAlpha, U.blendDstAlpha, U.blendColor, U.blendAlpha, U.premultipliedAlpha), o.setFunc(U.depthFunc), o.setTest(U.depthTest), o.setMask(U.depthWrite), r.setMask(U.colorWrite);
    const Ee = U.stencilWrite;
    a.setTest(Ee), Ee && (a.setMask(U.stencilWriteMask), a.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask), a.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)), Te(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits), U.alphaToCoverage === true ? se(s.SAMPLE_ALPHA_TO_COVERAGE) : ye(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ze(U) {
    T !== U && (U ? s.frontFace(s.CW) : s.frontFace(s.CCW), T = U);
  }
  function Ae(U) {
    U !== th ? (se(s.CULL_FACE), U !== F && (U === Fa ? s.cullFace(s.BACK) : U === nh ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : ye(s.CULL_FACE), F = U;
  }
  function mt(U) {
    U !== X && (ee && s.lineWidth(U), X = U);
  }
  function Te(U, de, Y) {
    U ? (se(s.POLYGON_OFFSET_FILL), ($ !== de || ie !== Y) && (s.polygonOffset(de, Y), $ = de, ie = Y)) : ye(s.POLYGON_OFFSET_FILL);
  }
  function Ye(U) {
    U ? se(s.SCISSOR_TEST) : ye(s.SCISSOR_TEST);
  }
  function Et(U) {
    U === void 0 && (U = s.TEXTURE0 + te - 1), pe !== U && (s.activeTexture(U), pe = U);
  }
  function xt(U, de, Y) {
    Y === void 0 && (pe === null ? Y = s.TEXTURE0 + te - 1 : Y = pe);
    let Ee = Me[Y];
    Ee === void 0 && (Ee = { type: void 0, texture: void 0 }, Me[Y] = Ee), (Ee.type !== U || Ee.texture !== de) && (pe !== Y && (s.activeTexture(Y), pe = Y), s.bindTexture(U, de || q[U]), Ee.type = U, Ee.texture = de);
  }
  function C() {
    const U = Me[pe];
    U !== void 0 && U.type !== void 0 && (s.bindTexture(U.type, null), U.type = void 0, U.texture = void 0);
  }
  function M() {
    try {
      s.compressedTexImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function G() {
    try {
      s.compressedTexImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Q() {
    try {
      s.texSubImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ae() {
    try {
      s.texSubImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function j() {
    try {
      s.compressedTexSubImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function De() {
    try {
      s.compressedTexSubImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function fe() {
    try {
      s.texStorage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Ce() {
    try {
      s.texStorage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function Le() {
    try {
      s.texImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ue() {
    try {
      s.texImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function _e(U) {
    nt.equals(U) === false && (s.scissor(U.x, U.y, U.z, U.w), nt.copy(U));
  }
  function we(U) {
    at.equals(U) === false && (s.viewport(U.x, U.y, U.z, U.w), at.copy(U));
  }
  function Pe(U, de) {
    let Y = l.get(de);
    Y === void 0 && (Y = /* @__PURE__ */ new WeakMap(), l.set(de, Y));
    let Ee = Y.get(U);
    Ee === void 0 && (Ee = s.getUniformBlockIndex(de, U.name), Y.set(U, Ee));
  }
  function xe(U, de) {
    const Ee = l.get(de).get(U);
    c.get(de) !== Ee && (s.uniformBlockBinding(de, Ee, U.__bindingPointIndex), c.set(de, Ee));
  }
  function Ue() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(true, true, true, true), s.clearColor(0, 0, 0, 0), s.depthMask(true), s.depthFunc(s.LESS), o.setReversed(false), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), u = {}, pe = null, Me = {}, h = {}, f = /* @__PURE__ */ new WeakMap(), g = [], v = null, S = false, _ = null, p = null, I = null, P = null, E = null, L = null, O = null, N = new qe(0, 0, 0), V = 0, b = false, T = null, F = null, X = null, $ = null, ie = null, nt.set(0, 0, s.canvas.width, s.canvas.height), at.set(0, 0, s.canvas.width, s.canvas.height), r.reset(), o.reset(), a.reset();
  }
  return { buffers: { color: r, depth: o, stencil: a }, enable: se, disable: ye, bindFramebuffer: Be, drawBuffers: Ie, useProgram: je, setBlending: pt, setMaterial: We, setFlipSided: ze, setCullFace: Ae, setLineWidth: mt, setPolygonOffset: Te, setScissorTest: Ye, activeTexture: Et, bindTexture: xt, unbindTexture: C, compressedTexImage2D: M, compressedTexImage3D: G, texImage2D: Le, texImage3D: ue, updateUBOMapping: Pe, uniformBlockBinding: xe, texStorage2D: fe, texStorage3D: Ce, texSubImage2D: Q, texSubImage3D: ae, compressedTexSubImage2D: j, compressedTexSubImage3D: De, scissor: _e, viewport: we, reset: Ue };
}
function i_(s, e, t, n, i, r, o) {
  const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), l = new Ge(), u = /* @__PURE__ */ new WeakMap();
  let h;
  const f = /* @__PURE__ */ new WeakMap();
  let g = false;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(C, M) {
    return g ? new OffscreenCanvas(C, M) : bs("canvas");
  }
  function S(C, M, G) {
    let Q = 1;
    const ae = xt(C);
    if ((ae.width > G || ae.height > G) && (Q = G / Math.max(ae.width, ae.height)), Q < 1) if (typeof HTMLImageElement < "u" && C instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && C instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && C instanceof ImageBitmap || typeof VideoFrame < "u" && C instanceof VideoFrame) {
      const j = Math.floor(Q * ae.width), De = Math.floor(Q * ae.height);
      h === void 0 && (h = v(j, De));
      const fe = M ? v(j, De) : h;
      return fe.width = j, fe.height = De, fe.getContext("2d").drawImage(C, 0, 0, j, De), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + ae.width + "x" + ae.height + ") to (" + j + "x" + De + ")."), fe;
    } else return "data" in C && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + ae.width + "x" + ae.height + ")."), C;
    return C;
  }
  function _(C) {
    return C.generateMipmaps;
  }
  function p(C) {
    s.generateMipmap(C);
  }
  function I(C) {
    return C.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : C.isWebGL3DRenderTarget ? s.TEXTURE_3D : C.isWebGLArrayRenderTarget || C.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D;
  }
  function P(C, M, G, Q, ae = false) {
    if (C !== null) {
      if (s[C] !== void 0) return s[C];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + C + "'");
    }
    let j = M;
    if (M === s.RED && (G === s.FLOAT && (j = s.R32F), G === s.HALF_FLOAT && (j = s.R16F), G === s.UNSIGNED_BYTE && (j = s.R8)), M === s.RED_INTEGER && (G === s.UNSIGNED_BYTE && (j = s.R8UI), G === s.UNSIGNED_SHORT && (j = s.R16UI), G === s.UNSIGNED_INT && (j = s.R32UI), G === s.BYTE && (j = s.R8I), G === s.SHORT && (j = s.R16I), G === s.INT && (j = s.R32I)), M === s.RG && (G === s.FLOAT && (j = s.RG32F), G === s.HALF_FLOAT && (j = s.RG16F), G === s.UNSIGNED_BYTE && (j = s.RG8)), M === s.RG_INTEGER && (G === s.UNSIGNED_BYTE && (j = s.RG8UI), G === s.UNSIGNED_SHORT && (j = s.RG16UI), G === s.UNSIGNED_INT && (j = s.RG32UI), G === s.BYTE && (j = s.RG8I), G === s.SHORT && (j = s.RG16I), G === s.INT && (j = s.RG32I)), M === s.RGB_INTEGER && (G === s.UNSIGNED_BYTE && (j = s.RGB8UI), G === s.UNSIGNED_SHORT && (j = s.RGB16UI), G === s.UNSIGNED_INT && (j = s.RGB32UI), G === s.BYTE && (j = s.RGB8I), G === s.SHORT && (j = s.RGB16I), G === s.INT && (j = s.RGB32I)), M === s.RGBA_INTEGER && (G === s.UNSIGNED_BYTE && (j = s.RGBA8UI), G === s.UNSIGNED_SHORT && (j = s.RGBA16UI), G === s.UNSIGNED_INT && (j = s.RGBA32UI), G === s.BYTE && (j = s.RGBA8I), G === s.SHORT && (j = s.RGBA16I), G === s.INT && (j = s.RGBA32I)), M === s.RGB && (G === s.UNSIGNED_INT_5_9_9_9_REV && (j = s.RGB9_E5), G === s.UNSIGNED_INT_10F_11F_11F_REV && (j = s.R11F_G11F_B10F)), M === s.RGBA) {
      const De = ae ? Er : rt.getTransfer(Q);
      G === s.FLOAT && (j = s.RGBA32F), G === s.HALF_FLOAT && (j = s.RGBA16F), G === s.UNSIGNED_BYTE && (j = De === dt ? s.SRGB8_ALPHA8 : s.RGBA8), G === s.UNSIGNED_SHORT_4_4_4_4 && (j = s.RGBA4), G === s.UNSIGNED_SHORT_5_5_5_1 && (j = s.RGB5_A1);
    }
    return (j === s.R16F || j === s.R32F || j === s.RG16F || j === s.RG32F || j === s.RGBA16F || j === s.RGBA32F) && e.get("EXT_color_buffer_float"), j;
  }
  function E(C, M) {
    let G;
    return C ? M === null || M === pi || M === Ms ? G = s.DEPTH24_STENCIL8 : M === Gt ? G = s.DEPTH32F_STENCIL8 : M === vs && (G = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : M === null || M === pi || M === Ms ? G = s.DEPTH_COMPONENT24 : M === Gt ? G = s.DEPTH_COMPONENT32F : M === vs && (G = s.DEPTH_COMPONENT16), G;
  }
  function L(C, M) {
    return _(C) === true || C.isFramebufferTexture && C.minFilter !== kt && C.minFilter !== It ? Math.log2(Math.max(M.width, M.height)) + 1 : C.mipmaps !== void 0 && C.mipmaps.length > 0 ? C.mipmaps.length : C.isCompressedTexture && Array.isArray(C.image) ? M.mipmaps.length : 1;
  }
  function O(C) {
    const M = C.target;
    M.removeEventListener("dispose", O), V(M), M.isVideoTexture && u.delete(M);
  }
  function N(C) {
    const M = C.target;
    M.removeEventListener("dispose", N), T(M);
  }
  function V(C) {
    const M = n.get(C);
    if (M.__webglInit === void 0) return;
    const G = C.source, Q = f.get(G);
    if (Q) {
      const ae = Q[M.__cacheKey];
      ae.usedTimes--, ae.usedTimes === 0 && b(C), Object.keys(Q).length === 0 && f.delete(G);
    }
    n.remove(C);
  }
  function b(C) {
    const M = n.get(C);
    s.deleteTexture(M.__webglTexture);
    const G = C.source, Q = f.get(G);
    delete Q[M.__cacheKey], o.memory.textures--;
  }
  function T(C) {
    const M = n.get(C);
    if (C.depthTexture && (C.depthTexture.dispose(), n.remove(C.depthTexture)), C.isWebGLCubeRenderTarget) for (let Q = 0; Q < 6; Q++) {
      if (Array.isArray(M.__webglFramebuffer[Q])) for (let ae = 0; ae < M.__webglFramebuffer[Q].length; ae++) s.deleteFramebuffer(M.__webglFramebuffer[Q][ae]);
      else s.deleteFramebuffer(M.__webglFramebuffer[Q]);
      M.__webglDepthbuffer && s.deleteRenderbuffer(M.__webglDepthbuffer[Q]);
    }
    else {
      if (Array.isArray(M.__webglFramebuffer)) for (let Q = 0; Q < M.__webglFramebuffer.length; Q++) s.deleteFramebuffer(M.__webglFramebuffer[Q]);
      else s.deleteFramebuffer(M.__webglFramebuffer);
      if (M.__webglDepthbuffer && s.deleteRenderbuffer(M.__webglDepthbuffer), M.__webglMultisampledFramebuffer && s.deleteFramebuffer(M.__webglMultisampledFramebuffer), M.__webglColorRenderbuffer) for (let Q = 0; Q < M.__webglColorRenderbuffer.length; Q++) M.__webglColorRenderbuffer[Q] && s.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);
      M.__webglDepthRenderbuffer && s.deleteRenderbuffer(M.__webglDepthRenderbuffer);
    }
    const G = C.textures;
    for (let Q = 0, ae = G.length; Q < ae; Q++) {
      const j = n.get(G[Q]);
      j.__webglTexture && (s.deleteTexture(j.__webglTexture), o.memory.textures--), n.remove(G[Q]);
    }
    n.remove(C);
  }
  let F = 0;
  function X() {
    F = 0;
  }
  function $() {
    const C = F;
    return C >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + C + " texture units while this GPU supports only " + i.maxTextures), F += 1, C;
  }
  function ie(C) {
    const M = [];
    return M.push(C.wrapS), M.push(C.wrapT), M.push(C.wrapR || 0), M.push(C.magFilter), M.push(C.minFilter), M.push(C.anisotropy), M.push(C.internalFormat), M.push(C.format), M.push(C.type), M.push(C.generateMipmaps), M.push(C.premultiplyAlpha), M.push(C.flipY), M.push(C.unpackAlignment), M.push(C.colorSpace), M.join();
  }
  function te(C, M) {
    const G = n.get(C);
    if (C.isVideoTexture && Ye(C), C.isRenderTargetTexture === false && C.isExternalTexture !== true && C.version > 0 && G.__version !== C.version) {
      const Q = C.image;
      if (Q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Q.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        q(G, C, M);
        return;
      }
    } else C.isExternalTexture && (G.__webglTexture = C.sourceTexture ? C.sourceTexture : null);
    t.bindTexture(s.TEXTURE_2D, G.__webglTexture, s.TEXTURE0 + M);
  }
  function ee(C, M) {
    const G = n.get(C);
    if (C.isRenderTargetTexture === false && C.version > 0 && G.__version !== C.version) {
      q(G, C, M);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, G.__webglTexture, s.TEXTURE0 + M);
  }
  function oe(C, M) {
    const G = n.get(C);
    if (C.isRenderTargetTexture === false && C.version > 0 && G.__version !== C.version) {
      q(G, C, M);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, G.__webglTexture, s.TEXTURE0 + M);
  }
  function Z(C, M) {
    const G = n.get(C);
    if (C.version > 0 && G.__version !== C.version) {
      se(G, C, M);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, G.__webglTexture, s.TEXTURE0 + M);
  }
  const pe = { [Yi]: s.REPEAT, [pn]: s.CLAMP_TO_EDGE, [yr]: s.MIRRORED_REPEAT }, Me = { [kt]: s.NEAREST, [fc]: s.NEAREST_MIPMAP_NEAREST, [fs]: s.NEAREST_MIPMAP_LINEAR, [It]: s.LINEAR, [mr]: s.LINEAR_MIPMAP_NEAREST, [mn]: s.LINEAR_MIPMAP_LINEAR }, Re = { [Fh]: s.NEVER, [Vh]: s.ALWAYS, [Oh]: s.LESS, [yc]: s.LEQUAL, [Bh]: s.EQUAL, [Hh]: s.GEQUAL, [kh]: s.GREATER, [zh]: s.NOTEQUAL };
  function Oe(C, M) {
    if (M.type === Gt && e.has("OES_texture_float_linear") === false && (M.magFilter === It || M.magFilter === mr || M.magFilter === fs || M.magFilter === mn || M.minFilter === It || M.minFilter === mr || M.minFilter === fs || M.minFilter === mn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(C, s.TEXTURE_WRAP_S, pe[M.wrapS]), s.texParameteri(C, s.TEXTURE_WRAP_T, pe[M.wrapT]), (C === s.TEXTURE_3D || C === s.TEXTURE_2D_ARRAY) && s.texParameteri(C, s.TEXTURE_WRAP_R, pe[M.wrapR]), s.texParameteri(C, s.TEXTURE_MAG_FILTER, Me[M.magFilter]), s.texParameteri(C, s.TEXTURE_MIN_FILTER, Me[M.minFilter]), M.compareFunction && (s.texParameteri(C, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(C, s.TEXTURE_COMPARE_FUNC, Re[M.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (M.magFilter === kt || M.minFilter !== fs && M.minFilter !== mn || M.type === Gt && e.has("OES_texture_float_linear") === false) return;
      if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
        const G = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(C, G.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy;
      }
    }
  }
  function nt(C, M) {
    let G = false;
    C.__webglInit === void 0 && (C.__webglInit = true, M.addEventListener("dispose", O));
    const Q = M.source;
    let ae = f.get(Q);
    ae === void 0 && (ae = {}, f.set(Q, ae));
    const j = ie(M);
    if (j !== C.__cacheKey) {
      ae[j] === void 0 && (ae[j] = { texture: s.createTexture(), usedTimes: 0 }, o.memory.textures++, G = true), ae[j].usedTimes++;
      const De = ae[C.__cacheKey];
      De !== void 0 && (ae[C.__cacheKey].usedTimes--, De.usedTimes === 0 && b(M)), C.__cacheKey = j, C.__webglTexture = ae[j].texture;
    }
    return G;
  }
  function at(C, M, G) {
    return Math.floor(Math.floor(C / G) / M);
  }
  function et(C, M, G, Q) {
    const j = C.updateRanges;
    if (j.length === 0) t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, M.width, M.height, G, Q, M.data);
    else {
      j.sort((ue, _e) => ue.start - _e.start);
      let De = 0;
      for (let ue = 1; ue < j.length; ue++) {
        const _e = j[De], we = j[ue], Pe = _e.start + _e.count, xe = at(we.start, M.width, 4), Ue = at(_e.start, M.width, 4);
        we.start <= Pe + 1 && xe === Ue && at(we.start + we.count - 1, M.width, 4) === xe ? _e.count = Math.max(_e.count, we.start + we.count - _e.start) : (++De, j[De] = we);
      }
      j.length = De + 1;
      const fe = s.getParameter(s.UNPACK_ROW_LENGTH), Ce = s.getParameter(s.UNPACK_SKIP_PIXELS), Le = s.getParameter(s.UNPACK_SKIP_ROWS);
      s.pixelStorei(s.UNPACK_ROW_LENGTH, M.width);
      for (let ue = 0, _e = j.length; ue < _e; ue++) {
        const we = j[ue], Pe = Math.floor(we.start / 4), xe = Math.ceil(we.count / 4), Ue = Pe % M.width, U = Math.floor(Pe / M.width), de = xe, Y = 1;
        s.pixelStorei(s.UNPACK_SKIP_PIXELS, Ue), s.pixelStorei(s.UNPACK_SKIP_ROWS, U), t.texSubImage2D(s.TEXTURE_2D, 0, Ue, U, de, Y, G, Q, M.data);
      }
      C.clearUpdateRanges(), s.pixelStorei(s.UNPACK_ROW_LENGTH, fe), s.pixelStorei(s.UNPACK_SKIP_PIXELS, Ce), s.pixelStorei(s.UNPACK_SKIP_ROWS, Le);
    }
  }
  function q(C, M, G) {
    let Q = s.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (Q = s.TEXTURE_2D_ARRAY), M.isData3DTexture && (Q = s.TEXTURE_3D);
    const ae = nt(C, M), j = M.source;
    t.bindTexture(Q, C.__webglTexture, s.TEXTURE0 + G);
    const De = n.get(j);
    if (j.version !== De.__version || ae === true) {
      t.activeTexture(s.TEXTURE0 + G);
      const fe = rt.getPrimaries(rt.workingColorSpace), Ce = M.colorSpace === Zn ? null : rt.getPrimaries(M.colorSpace), Le = M.colorSpace === Zn || fe === Ce ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, M.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, M.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Le);
      let ue = S(M.image, false, i.maxTextureSize);
      ue = Et(M, ue);
      const _e = r.convert(M.format, M.colorSpace), we = r.convert(M.type);
      let Pe = P(M.internalFormat, _e, we, M.colorSpace, M.isVideoTexture);
      Oe(Q, M);
      let xe;
      const Ue = M.mipmaps, U = M.isVideoTexture !== true, de = De.__version === void 0 || ae === true, Y = j.dataReady, Ee = L(M, ue);
      if (M.isDepthTexture) Pe = E(M.format === ys, M.type), de && (U ? t.texStorage2D(s.TEXTURE_2D, 1, Pe, ue.width, ue.height) : t.texImage2D(s.TEXTURE_2D, 0, Pe, ue.width, ue.height, 0, _e, we, null));
      else if (M.isDataTexture) if (Ue.length > 0) {
        U && de && t.texStorage2D(s.TEXTURE_2D, Ee, Pe, Ue[0].width, Ue[0].height);
        for (let ce = 0, ne = Ue.length; ce < ne; ce++) xe = Ue[ce], U ? Y && t.texSubImage2D(s.TEXTURE_2D, ce, 0, 0, xe.width, xe.height, _e, we, xe.data) : t.texImage2D(s.TEXTURE_2D, ce, Pe, xe.width, xe.height, 0, _e, we, xe.data);
        M.generateMipmaps = false;
      } else U ? (de && t.texStorage2D(s.TEXTURE_2D, Ee, Pe, ue.width, ue.height), Y && et(M, ue, _e, we)) : t.texImage2D(s.TEXTURE_2D, 0, Pe, ue.width, ue.height, 0, _e, we, ue.data);
      else if (M.isCompressedTexture) if (M.isCompressedArrayTexture) {
        U && de && t.texStorage3D(s.TEXTURE_2D_ARRAY, Ee, Pe, Ue[0].width, Ue[0].height, ue.depth);
        for (let ce = 0, ne = Ue.length; ce < ne; ce++) if (xe = Ue[ce], M.format !== Pt) if (_e !== null) if (U) {
          if (Y) if (M.layerUpdates.size > 0) {
            const be = Pl(xe.width, xe.height, M.format, M.type);
            for (const Xe of M.layerUpdates) {
              const ut = xe.data.subarray(Xe * be / xe.data.BYTES_PER_ELEMENT, (Xe + 1) * be / xe.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, ce, 0, 0, Xe, xe.width, xe.height, 1, _e, ut);
            }
            M.clearLayerUpdates();
          } else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, ce, 0, 0, 0, xe.width, xe.height, ue.depth, _e, xe.data);
        } else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, ce, Pe, xe.width, xe.height, ue.depth, 0, xe.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else U ? Y && t.texSubImage3D(s.TEXTURE_2D_ARRAY, ce, 0, 0, 0, xe.width, xe.height, ue.depth, _e, we, xe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, ce, Pe, xe.width, xe.height, ue.depth, 0, _e, we, xe.data);
      } else {
        U && de && t.texStorage2D(s.TEXTURE_2D, Ee, Pe, Ue[0].width, Ue[0].height);
        for (let ce = 0, ne = Ue.length; ce < ne; ce++) xe = Ue[ce], M.format !== Pt ? _e !== null ? U ? Y && t.compressedTexSubImage2D(s.TEXTURE_2D, ce, 0, 0, xe.width, xe.height, _e, xe.data) : t.compressedTexImage2D(s.TEXTURE_2D, ce, Pe, xe.width, xe.height, 0, xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : U ? Y && t.texSubImage2D(s.TEXTURE_2D, ce, 0, 0, xe.width, xe.height, _e, we, xe.data) : t.texImage2D(s.TEXTURE_2D, ce, Pe, xe.width, xe.height, 0, _e, we, xe.data);
      }
      else if (M.isDataArrayTexture) if (U) {
        if (de && t.texStorage3D(s.TEXTURE_2D_ARRAY, Ee, Pe, ue.width, ue.height, ue.depth), Y) if (M.layerUpdates.size > 0) {
          const ce = Pl(ue.width, ue.height, M.format, M.type);
          for (const ne of M.layerUpdates) {
            const be = ue.data.subarray(ne * ce / ue.data.BYTES_PER_ELEMENT, (ne + 1) * ce / ue.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, ne, ue.width, ue.height, 1, _e, we, be);
          }
          M.clearLayerUpdates();
        } else t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ue.width, ue.height, ue.depth, _e, we, ue.data);
      } else t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Pe, ue.width, ue.height, ue.depth, 0, _e, we, ue.data);
      else if (M.isData3DTexture) U ? (de && t.texStorage3D(s.TEXTURE_3D, Ee, Pe, ue.width, ue.height, ue.depth), Y && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, ue.width, ue.height, ue.depth, _e, we, ue.data)) : t.texImage3D(s.TEXTURE_3D, 0, Pe, ue.width, ue.height, ue.depth, 0, _e, we, ue.data);
      else if (M.isFramebufferTexture) {
        if (de) if (U) t.texStorage2D(s.TEXTURE_2D, Ee, Pe, ue.width, ue.height);
        else {
          let ce = ue.width, ne = ue.height;
          for (let be = 0; be < Ee; be++) t.texImage2D(s.TEXTURE_2D, be, Pe, ce, ne, 0, _e, we, null), ce >>= 1, ne >>= 1;
        }
      } else if (Ue.length > 0) {
        if (U && de) {
          const ce = xt(Ue[0]);
          t.texStorage2D(s.TEXTURE_2D, Ee, Pe, ce.width, ce.height);
        }
        for (let ce = 0, ne = Ue.length; ce < ne; ce++) xe = Ue[ce], U ? Y && t.texSubImage2D(s.TEXTURE_2D, ce, 0, 0, _e, we, xe) : t.texImage2D(s.TEXTURE_2D, ce, Pe, _e, we, xe);
        M.generateMipmaps = false;
      } else if (U) {
        if (de) {
          const ce = xt(ue);
          t.texStorage2D(s.TEXTURE_2D, Ee, Pe, ce.width, ce.height);
        }
        Y && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, _e, we, ue);
      } else t.texImage2D(s.TEXTURE_2D, 0, Pe, _e, we, ue);
      _(M) && p(Q), De.__version = j.version, M.onUpdate && M.onUpdate(M);
    }
    C.__version = M.version;
  }
  function se(C, M, G) {
    if (M.image.length !== 6) return;
    const Q = nt(C, M), ae = M.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, C.__webglTexture, s.TEXTURE0 + G);
    const j = n.get(ae);
    if (ae.version !== j.__version || Q === true) {
      t.activeTexture(s.TEXTURE0 + G);
      const De = rt.getPrimaries(rt.workingColorSpace), fe = M.colorSpace === Zn ? null : rt.getPrimaries(M.colorSpace), Ce = M.colorSpace === Zn || De === fe ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, M.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, M.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ce);
      const Le = M.isCompressedTexture || M.image[0].isCompressedTexture, ue = M.image[0] && M.image[0].isDataTexture, _e = [];
      for (let ne = 0; ne < 6; ne++) !Le && !ue ? _e[ne] = S(M.image[ne], true, i.maxCubemapSize) : _e[ne] = ue ? M.image[ne].image : M.image[ne], _e[ne] = Et(M, _e[ne]);
      const we = _e[0], Pe = r.convert(M.format, M.colorSpace), xe = r.convert(M.type), Ue = P(M.internalFormat, Pe, xe, M.colorSpace), U = M.isVideoTexture !== true, de = j.__version === void 0 || Q === true, Y = ae.dataReady;
      let Ee = L(M, we);
      Oe(s.TEXTURE_CUBE_MAP, M);
      let ce;
      if (Le) {
        U && de && t.texStorage2D(s.TEXTURE_CUBE_MAP, Ee, Ue, we.width, we.height);
        for (let ne = 0; ne < 6; ne++) {
          ce = _e[ne].mipmaps;
          for (let be = 0; be < ce.length; be++) {
            const Xe = ce[be];
            M.format !== Pt ? Pe !== null ? U ? Y && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be, 0, 0, Xe.width, Xe.height, Pe, Xe.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be, Ue, Xe.width, Xe.height, 0, Xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : U ? Y && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be, 0, 0, Xe.width, Xe.height, Pe, xe, Xe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be, Ue, Xe.width, Xe.height, 0, Pe, xe, Xe.data);
          }
        }
      } else {
        if (ce = M.mipmaps, U && de) {
          ce.length > 0 && Ee++;
          const ne = xt(_e[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, Ee, Ue, ne.width, ne.height);
        }
        for (let ne = 0; ne < 6; ne++) if (ue) {
          U ? Y && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, 0, 0, _e[ne].width, _e[ne].height, Pe, xe, _e[ne].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, Ue, _e[ne].width, _e[ne].height, 0, Pe, xe, _e[ne].data);
          for (let be = 0; be < ce.length; be++) {
            const ut = ce[be].image[ne].image;
            U ? Y && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be + 1, 0, 0, ut.width, ut.height, Pe, xe, ut.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be + 1, Ue, ut.width, ut.height, 0, Pe, xe, ut.data);
          }
        } else {
          U ? Y && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, 0, 0, Pe, xe, _e[ne]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, 0, Ue, Pe, xe, _e[ne]);
          for (let be = 0; be < ce.length; be++) {
            const Xe = ce[be];
            U ? Y && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be + 1, 0, 0, Pe, xe, Xe.image[ne]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + ne, be + 1, Ue, Pe, xe, Xe.image[ne]);
          }
        }
      }
      _(M) && p(s.TEXTURE_CUBE_MAP), j.__version = ae.version, M.onUpdate && M.onUpdate(M);
    }
    C.__version = M.version;
  }
  function ye(C, M, G, Q, ae, j) {
    const De = r.convert(G.format, G.colorSpace), fe = r.convert(G.type), Ce = P(G.internalFormat, De, fe, G.colorSpace), Le = n.get(M), ue = n.get(G);
    if (ue.__renderTarget = M, !Le.__hasExternalTextures) {
      const _e = Math.max(1, M.width >> j), we = Math.max(1, M.height >> j);
      ae === s.TEXTURE_3D || ae === s.TEXTURE_2D_ARRAY ? t.texImage3D(ae, j, Ce, _e, we, M.depth, 0, De, fe, null) : t.texImage2D(ae, j, Ce, _e, we, 0, De, fe, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, C), Te(M) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, Q, ae, ue.__webglTexture, 0, mt(M)) : (ae === s.TEXTURE_2D || ae >= s.TEXTURE_CUBE_MAP_POSITIVE_X && ae <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, Q, ae, ue.__webglTexture, j), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Be(C, M, G) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, C), M.depthBuffer) {
      const Q = M.depthTexture, ae = Q && Q.isDepthTexture ? Q.type : null, j = E(M.stencilBuffer, ae), De = M.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, fe = mt(M);
      Te(M) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, fe, j, M.width, M.height) : G ? s.renderbufferStorageMultisample(s.RENDERBUFFER, fe, j, M.width, M.height) : s.renderbufferStorage(s.RENDERBUFFER, j, M.width, M.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, De, s.RENDERBUFFER, C);
    } else {
      const Q = M.textures;
      for (let ae = 0; ae < Q.length; ae++) {
        const j = Q[ae], De = r.convert(j.format, j.colorSpace), fe = r.convert(j.type), Ce = P(j.internalFormat, De, fe, j.colorSpace), Le = mt(M);
        G && Te(M) === false ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Le, Ce, M.width, M.height) : Te(M) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Le, Ce, M.width, M.height) : s.renderbufferStorage(s.RENDERBUFFER, Ce, M.width, M.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function Ie(C, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, C), !(M.depthTexture && M.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Q = n.get(M.depthTexture);
    Q.__renderTarget = M, (!Q.__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = true), te(M.depthTexture, 0);
    const ae = Q.__webglTexture, j = mt(M);
    if (M.depthTexture.format === Ss) Te(M) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, ae, 0, j) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, ae, 0);
    else if (M.depthTexture.format === ys) Te(M) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, ae, 0, j) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, ae, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function je(C) {
    const M = n.get(C), G = C.isWebGLCubeRenderTarget === true;
    if (M.__boundDepthTexture !== C.depthTexture) {
      const Q = C.depthTexture;
      if (M.__depthDisposeCallback && M.__depthDisposeCallback(), Q) {
        const ae = () => {
          delete M.__boundDepthTexture, delete M.__depthDisposeCallback, Q.removeEventListener("dispose", ae);
        };
        Q.addEventListener("dispose", ae), M.__depthDisposeCallback = ae;
      }
      M.__boundDepthTexture = Q;
    }
    if (C.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (G) throw new Error("target.depthTexture not supported in Cube render targets");
      const Q = C.texture.mipmaps;
      Q && Q.length > 0 ? Ie(M.__webglFramebuffer[0], C) : Ie(M.__webglFramebuffer, C);
    } else if (G) {
      M.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++) if (t.bindFramebuffer(s.FRAMEBUFFER, M.__webglFramebuffer[Q]), M.__webglDepthbuffer[Q] === void 0) M.__webglDepthbuffer[Q] = s.createRenderbuffer(), Be(M.__webglDepthbuffer[Q], C, false);
      else {
        const ae = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, j = M.__webglDepthbuffer[Q];
        s.bindRenderbuffer(s.RENDERBUFFER, j), s.framebufferRenderbuffer(s.FRAMEBUFFER, ae, s.RENDERBUFFER, j);
      }
    } else {
      const Q = C.texture.mipmaps;
      if (Q && Q.length > 0 ? t.bindFramebuffer(s.FRAMEBUFFER, M.__webglFramebuffer[0]) : t.bindFramebuffer(s.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer === void 0) M.__webglDepthbuffer = s.createRenderbuffer(), Be(M.__webglDepthbuffer, C, false);
      else {
        const ae = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, j = M.__webglDepthbuffer;
        s.bindRenderbuffer(s.RENDERBUFFER, j), s.framebufferRenderbuffer(s.FRAMEBUFFER, ae, s.RENDERBUFFER, j);
      }
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function yt(C, M, G) {
    const Q = n.get(C);
    M !== void 0 && ye(Q.__webglFramebuffer, C, C.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), G !== void 0 && je(C);
  }
  function D(C) {
    const M = C.texture, G = n.get(C), Q = n.get(M);
    C.addEventListener("dispose", N);
    const ae = C.textures, j = C.isWebGLCubeRenderTarget === true, De = ae.length > 1;
    if (De || (Q.__webglTexture === void 0 && (Q.__webglTexture = s.createTexture()), Q.__version = M.version, o.memory.textures++), j) {
      G.__webglFramebuffer = [];
      for (let fe = 0; fe < 6; fe++) if (M.mipmaps && M.mipmaps.length > 0) {
        G.__webglFramebuffer[fe] = [];
        for (let Ce = 0; Ce < M.mipmaps.length; Ce++) G.__webglFramebuffer[fe][Ce] = s.createFramebuffer();
      } else G.__webglFramebuffer[fe] = s.createFramebuffer();
    } else {
      if (M.mipmaps && M.mipmaps.length > 0) {
        G.__webglFramebuffer = [];
        for (let fe = 0; fe < M.mipmaps.length; fe++) G.__webglFramebuffer[fe] = s.createFramebuffer();
      } else G.__webglFramebuffer = s.createFramebuffer();
      if (De) for (let fe = 0, Ce = ae.length; fe < Ce; fe++) {
        const Le = n.get(ae[fe]);
        Le.__webglTexture === void 0 && (Le.__webglTexture = s.createTexture(), o.memory.textures++);
      }
      if (C.samples > 0 && Te(C) === false) {
        G.__webglMultisampledFramebuffer = s.createFramebuffer(), G.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, G.__webglMultisampledFramebuffer);
        for (let fe = 0; fe < ae.length; fe++) {
          const Ce = ae[fe];
          G.__webglColorRenderbuffer[fe] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, G.__webglColorRenderbuffer[fe]);
          const Le = r.convert(Ce.format, Ce.colorSpace), ue = r.convert(Ce.type), _e = P(Ce.internalFormat, Le, ue, Ce.colorSpace, C.isXRRenderTarget === true), we = mt(C);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, we, _e, C.width, C.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + fe, s.RENDERBUFFER, G.__webglColorRenderbuffer[fe]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), C.depthBuffer && (G.__webglDepthRenderbuffer = s.createRenderbuffer(), Be(G.__webglDepthRenderbuffer, C, true)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (j) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, Q.__webglTexture), Oe(s.TEXTURE_CUBE_MAP, M);
      for (let fe = 0; fe < 6; fe++) if (M.mipmaps && M.mipmaps.length > 0) for (let Ce = 0; Ce < M.mipmaps.length; Ce++) ye(G.__webglFramebuffer[fe][Ce], C, M, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + fe, Ce);
      else ye(G.__webglFramebuffer[fe], C, M, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + fe, 0);
      _(M) && p(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (De) {
      for (let fe = 0, Ce = ae.length; fe < Ce; fe++) {
        const Le = ae[fe], ue = n.get(Le);
        let _e = s.TEXTURE_2D;
        (C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (_e = C.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(_e, ue.__webglTexture), Oe(_e, Le), ye(G.__webglFramebuffer, C, Le, s.COLOR_ATTACHMENT0 + fe, _e, 0), _(Le) && p(_e);
      }
      t.unbindTexture();
    } else {
      let fe = s.TEXTURE_2D;
      if ((C.isWebGL3DRenderTarget || C.isWebGLArrayRenderTarget) && (fe = C.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(fe, Q.__webglTexture), Oe(fe, M), M.mipmaps && M.mipmaps.length > 0) for (let Ce = 0; Ce < M.mipmaps.length; Ce++) ye(G.__webglFramebuffer[Ce], C, M, s.COLOR_ATTACHMENT0, fe, Ce);
      else ye(G.__webglFramebuffer, C, M, s.COLOR_ATTACHMENT0, fe, 0);
      _(M) && p(fe), t.unbindTexture();
    }
    C.depthBuffer && je(C);
  }
  function pt(C) {
    const M = C.textures;
    for (let G = 0, Q = M.length; G < Q; G++) {
      const ae = M[G];
      if (_(ae)) {
        const j = I(C), De = n.get(ae).__webglTexture;
        t.bindTexture(j, De), p(j), t.unbindTexture();
      }
    }
  }
  const We = [], ze = [];
  function Ae(C) {
    if (C.samples > 0) {
      if (Te(C) === false) {
        const M = C.textures, G = C.width, Q = C.height;
        let ae = s.COLOR_BUFFER_BIT;
        const j = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, De = n.get(C), fe = M.length > 1;
        if (fe) for (let Le = 0; Le < M.length; Le++) t.bindFramebuffer(s.FRAMEBUFFER, De.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Le, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, De.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Le, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, De.__webglMultisampledFramebuffer);
        const Ce = C.texture.mipmaps;
        Ce && Ce.length > 0 ? t.bindFramebuffer(s.DRAW_FRAMEBUFFER, De.__webglFramebuffer[0]) : t.bindFramebuffer(s.DRAW_FRAMEBUFFER, De.__webglFramebuffer);
        for (let Le = 0; Le < M.length; Le++) {
          if (C.resolveDepthBuffer && (C.depthBuffer && (ae |= s.DEPTH_BUFFER_BIT), C.stencilBuffer && C.resolveStencilBuffer && (ae |= s.STENCIL_BUFFER_BIT)), fe) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, De.__webglColorRenderbuffer[Le]);
            const ue = n.get(M[Le]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, ue, 0);
          }
          s.blitFramebuffer(0, 0, G, Q, 0, 0, G, Q, ae, s.NEAREST), c === true && (We.length = 0, ze.length = 0, We.push(s.COLOR_ATTACHMENT0 + Le), C.depthBuffer && C.resolveDepthBuffer === false && (We.push(j), ze.push(j), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, ze)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, We));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), fe) for (let Le = 0; Le < M.length; Le++) {
          t.bindFramebuffer(s.FRAMEBUFFER, De.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Le, s.RENDERBUFFER, De.__webglColorRenderbuffer[Le]);
          const ue = n.get(M[Le]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, De.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + Le, s.TEXTURE_2D, ue, 0);
        }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, De.__webglMultisampledFramebuffer);
      } else if (C.depthBuffer && C.resolveDepthBuffer === false && c) {
        const M = C.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [M]);
      }
    }
  }
  function mt(C) {
    return Math.min(i.maxSamples, C.samples);
  }
  function Te(C) {
    const M = n.get(C);
    return C.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && M.__useRenderToTexture !== false;
  }
  function Ye(C) {
    const M = o.render.frame;
    u.get(C) !== M && (u.set(C, M), C.update());
  }
  function Et(C, M) {
    const G = C.colorSpace, Q = C.format, ae = C.type;
    return C.isCompressedTexture === true || C.isVideoTexture === true || G !== St && G !== Zn && (rt.getTransfer(G) === dt ? (Q !== Pt || ae !== xn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", G)), M;
  }
  function xt(C) {
    return typeof HTMLImageElement < "u" && C instanceof HTMLImageElement ? (l.width = C.naturalWidth || C.width, l.height = C.naturalHeight || C.height) : typeof VideoFrame < "u" && C instanceof VideoFrame ? (l.width = C.displayWidth, l.height = C.displayHeight) : (l.width = C.width, l.height = C.height), l;
  }
  this.allocateTextureUnit = $, this.resetTextureUnits = X, this.setTexture2D = te, this.setTexture2DArray = ee, this.setTexture3D = oe, this.setTextureCube = Z, this.rebindTextures = yt, this.setupRenderTarget = D, this.updateRenderTargetMipmap = pt, this.updateMultisampleRenderTarget = Ae, this.setupDepthRenderbuffer = je, this.setupFrameBufferTexture = ye, this.useMultisampledRTT = Te;
}
function s_(s, e) {
  function t(n, i = Zn) {
    let r;
    const o = rt.getTransfer(i);
    if (n === xn) return s.UNSIGNED_BYTE;
    if (n === ma) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === ga) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === gc) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === _c) return s.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === pc) return s.BYTE;
    if (n === mc) return s.SHORT;
    if (n === vs) return s.UNSIGNED_SHORT;
    if (n === pa) return s.INT;
    if (n === pi) return s.UNSIGNED_INT;
    if (n === Gt) return s.FLOAT;
    if (n === Un) return s.HALF_FLOAT;
    if (n === xc) return s.ALPHA;
    if (n === vc) return s.RGB;
    if (n === Pt) return s.RGBA;
    if (n === Ss) return s.DEPTH_COMPONENT;
    if (n === ys) return s.DEPTH_STENCIL;
    if (n === ui) return s.RED;
    if (n === _a) return s.RED_INTEGER;
    if (n === ci) return s.RG;
    if (n === xa) return s.RG_INTEGER;
    if (n === va) return s.RGBA_INTEGER;
    if (n === gr || n === _r || n === xr || n === vr) if (o === dt) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === gr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === _r) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === xr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === vr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === gr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === _r) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === xr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === vr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Io || n === Do || n === Lo || n === Uo) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Io) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === Do) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Lo) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === Uo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === No || n === Fo || n === Oo) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === No || n === Fo) return o === dt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === Oo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === Bo || n === ko || n === zo || n === Ho || n === Vo || n === Go || n === Wo || n === Xo || n === Yo || n === qo || n === Ko || n === Zo || n === jo || n === $o) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === Bo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === ko) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === zo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === Ho) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === Vo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === Go) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Wo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Xo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Yo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === qo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Ko) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Zo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === jo) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === $o) return o === dt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Jo || n === Qo || n === ea) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === Jo) return o === dt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Qo) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === ea) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === ta || n === na || n === ia || n === sa) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === ta) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === na) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === ia) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === sa) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Ms ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
const r_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, o_ = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class a_ {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Oc(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Jn({ vertexShader: r_, fragmentShader: o_, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Wt(new Cr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class l_ extends gi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, o = null, a = "local-floor", c = 1, l = null, u = null, h = null, f = null, g = null, v = null;
    const S = typeof XRWebGLBinding < "u", _ = new a_(), p = {}, I = t.getContextAttributes();
    let P = null, E = null;
    const L = [], O = [], N = new Ge();
    let V = null;
    const b = new Bt();
    b.viewport = new lt();
    const T = new Bt();
    T.viewport = new lt();
    const F = [b, T], X = new _d();
    let $ = null, ie = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(q) {
      let se = L[q];
      return se === void 0 && (se = new Qr(), L[q] = se), se.getTargetRaySpace();
    }, this.getControllerGrip = function(q) {
      let se = L[q];
      return se === void 0 && (se = new Qr(), L[q] = se), se.getGripSpace();
    }, this.getHand = function(q) {
      let se = L[q];
      return se === void 0 && (se = new Qr(), L[q] = se), se.getHandSpace();
    };
    function te(q) {
      const se = O.indexOf(q.inputSource);
      if (se === -1) return;
      const ye = L[se];
      ye !== void 0 && (ye.update(q.inputSource, q.frame, l || o), ye.dispatchEvent({ type: q.type, data: q.inputSource }));
    }
    function ee() {
      i.removeEventListener("select", te), i.removeEventListener("selectstart", te), i.removeEventListener("selectend", te), i.removeEventListener("squeeze", te), i.removeEventListener("squeezestart", te), i.removeEventListener("squeezeend", te), i.removeEventListener("end", ee), i.removeEventListener("inputsourceschange", oe);
      for (let q = 0; q < L.length; q++) {
        const se = O[q];
        se !== null && (O[q] = null, L[q].disconnect(se));
      }
      $ = null, ie = null, _.reset();
      for (const q in p) delete p[q];
      e.setRenderTarget(P), g = null, f = null, h = null, i = null, E = null, et.stop(), n.isPresenting = false, e.setPixelRatio(V), e.setSize(N.width, N.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(q) {
      r = q, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(q) {
      a = q, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(q) {
      l = q;
    }, this.getBaseLayer = function() {
      return f !== null ? f : g;
    }, this.getBinding = function() {
      return h === null && S && (h = new XRWebGLBinding(i, t)), h;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(q) {
      if (i = q, i !== null) {
        if (P = e.getRenderTarget(), i.addEventListener("select", te), i.addEventListener("selectstart", te), i.addEventListener("selectend", te), i.addEventListener("squeeze", te), i.addEventListener("squeezestart", te), i.addEventListener("squeezeend", te), i.addEventListener("end", ee), i.addEventListener("inputsourceschange", oe), I.xrCompatible !== true && await t.makeXRCompatible(), V = e.getPixelRatio(), e.getSize(N), S && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ye = null, Be = null, Ie = null;
          I.depth && (Ie = I.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ye = I.stencil ? ys : Ss, Be = I.stencil ? Ms : pi);
          const je = { colorFormat: t.RGBA8, depthFormat: Ie, scaleFactor: r };
          h = this.getBinding(), f = h.createProjectionLayer(je), i.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, false), E = new mi(f.textureWidth, f.textureHeight, { format: Pt, type: xn, depthTexture: new Fc(f.textureWidth, f.textureHeight, Be, void 0, void 0, void 0, void 0, void 0, void 0, ye), stencilBuffer: I.stencil, colorSpace: e.outputColorSpace, samples: I.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false, resolveStencilBuffer: f.ignoreDepthValues === false });
        } else {
          const ye = { antialias: I.antialias, alpha: true, depth: I.depth, stencil: I.stencil, framebufferScaleFactor: r };
          g = new XRWebGLLayer(i, t, ye), i.updateRenderState({ baseLayer: g }), e.setPixelRatio(1), e.setSize(g.framebufferWidth, g.framebufferHeight, false), E = new mi(g.framebufferWidth, g.framebufferHeight, { format: Pt, type: xn, colorSpace: e.outputColorSpace, stencilBuffer: I.stencil, resolveDepthBuffer: g.ignoreDepthValues === false, resolveStencilBuffer: g.ignoreDepthValues === false });
        }
        E.isXRRenderTarget = true, this.setFoveation(c), l = null, o = await i.requestReferenceSpace(a), et.setContext(i), et.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function oe(q) {
      for (let se = 0; se < q.removed.length; se++) {
        const ye = q.removed[se], Be = O.indexOf(ye);
        Be >= 0 && (O[Be] = null, L[Be].disconnect(ye));
      }
      for (let se = 0; se < q.added.length; se++) {
        const ye = q.added[se];
        let Be = O.indexOf(ye);
        if (Be === -1) {
          for (let je = 0; je < L.length; je++) if (je >= O.length) {
            O.push(ye), Be = je;
            break;
          } else if (O[je] === null) {
            O[je] = ye, Be = je;
            break;
          }
          if (Be === -1) break;
        }
        const Ie = L[Be];
        Ie && Ie.connect(ye);
      }
    }
    const Z = new B(), pe = new B();
    function Me(q, se, ye) {
      Z.setFromMatrixPosition(se.matrixWorld), pe.setFromMatrixPosition(ye.matrixWorld);
      const Be = Z.distanceTo(pe), Ie = se.projectionMatrix.elements, je = ye.projectionMatrix.elements, yt = Ie[14] / (Ie[10] - 1), D = Ie[14] / (Ie[10] + 1), pt = (Ie[9] + 1) / Ie[5], We = (Ie[9] - 1) / Ie[5], ze = (Ie[8] - 1) / Ie[0], Ae = (je[8] + 1) / je[0], mt = yt * ze, Te = yt * Ae, Ye = Be / (-ze + Ae), Et = Ye * -ze;
      if (se.matrixWorld.decompose(q.position, q.quaternion, q.scale), q.translateX(Et), q.translateZ(Ye), q.matrixWorld.compose(q.position, q.quaternion, q.scale), q.matrixWorldInverse.copy(q.matrixWorld).invert(), Ie[10] === -1) q.projectionMatrix.copy(se.projectionMatrix), q.projectionMatrixInverse.copy(se.projectionMatrixInverse);
      else {
        const xt = yt + Ye, C = D + Ye, M = mt - Et, G = Te + (Be - Et), Q = pt * D / C * xt, ae = We * D / C * xt;
        q.projectionMatrix.makePerspective(M, G, Q, ae, xt, C), q.projectionMatrixInverse.copy(q.projectionMatrix).invert();
      }
    }
    function Re(q, se) {
      se === null ? q.matrixWorld.copy(q.matrix) : q.matrixWorld.multiplyMatrices(se.matrixWorld, q.matrix), q.matrixWorldInverse.copy(q.matrixWorld).invert();
    }
    this.updateCamera = function(q) {
      if (i === null) return;
      let se = q.near, ye = q.far;
      _.texture !== null && (_.depthNear > 0 && (se = _.depthNear), _.depthFar > 0 && (ye = _.depthFar)), X.near = T.near = b.near = se, X.far = T.far = b.far = ye, ($ !== X.near || ie !== X.far) && (i.updateRenderState({ depthNear: X.near, depthFar: X.far }), $ = X.near, ie = X.far), X.layers.mask = q.layers.mask | 6, b.layers.mask = X.layers.mask & 3, T.layers.mask = X.layers.mask & 5;
      const Be = q.parent, Ie = X.cameras;
      Re(X, Be);
      for (let je = 0; je < Ie.length; je++) Re(Ie[je], Be);
      Ie.length === 2 ? Me(X, b, T) : X.projectionMatrix.copy(b.projectionMatrix), Oe(q, X, Be);
    };
    function Oe(q, se, ye) {
      ye === null ? q.matrix.copy(se.matrixWorld) : (q.matrix.copy(ye.matrixWorld), q.matrix.invert(), q.matrix.multiply(se.matrixWorld)), q.matrix.decompose(q.position, q.quaternion, q.scale), q.updateMatrixWorld(true), q.projectionMatrix.copy(se.projectionMatrix), q.projectionMatrixInverse.copy(se.projectionMatrixInverse), q.isPerspectiveCamera && (q.fov = qi * 2 * Math.atan(1 / q.projectionMatrix.elements[5]), q.zoom = 1);
    }
    this.getCamera = function() {
      return X;
    }, this.getFoveation = function() {
      if (!(f === null && g === null)) return c;
    }, this.setFoveation = function(q) {
      c = q, f !== null && (f.fixedFoveation = q), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = q);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(X);
    }, this.getCameraTexture = function(q) {
      return p[q];
    };
    let nt = null;
    function at(q, se) {
      if (u = se.getViewerPose(l || o), v = se, u !== null) {
        const ye = u.views;
        g !== null && (e.setRenderTargetFramebuffer(E, g.framebuffer), e.setRenderTarget(E));
        let Be = false;
        ye.length !== X.cameras.length && (X.cameras.length = 0, Be = true);
        for (let D = 0; D < ye.length; D++) {
          const pt = ye[D];
          let We = null;
          if (g !== null) We = g.getViewport(pt);
          else {
            const Ae = h.getViewSubImage(f, pt);
            We = Ae.viewport, D === 0 && (e.setRenderTargetTextures(E, Ae.colorTexture, Ae.depthStencilTexture), e.setRenderTarget(E));
          }
          let ze = F[D];
          ze === void 0 && (ze = new Bt(), ze.layers.enable(D), ze.viewport = new lt(), F[D] = ze), ze.matrix.fromArray(pt.transform.matrix), ze.matrix.decompose(ze.position, ze.quaternion, ze.scale), ze.projectionMatrix.fromArray(pt.projectionMatrix), ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(), ze.viewport.set(We.x, We.y, We.width, We.height), D === 0 && (X.matrix.copy(ze.matrix), X.matrix.decompose(X.position, X.quaternion, X.scale)), Be === true && X.cameras.push(ze);
        }
        const Ie = i.enabledFeatures;
        if (Ie && Ie.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && S) {
          h = n.getBinding();
          const D = h.getDepthInformation(ye[0]);
          D && D.isValid && D.texture && _.init(D, i.renderState);
        }
        if (Ie && Ie.includes("camera-access") && S) {
          e.state.unbindTexture(), h = n.getBinding();
          for (let D = 0; D < ye.length; D++) {
            const pt = ye[D].camera;
            if (pt) {
              let We = p[pt];
              We || (We = new Oc(), p[pt] = We);
              const ze = h.getCameraImage(pt);
              We.sourceTexture = ze;
            }
          }
        }
      }
      for (let ye = 0; ye < L.length; ye++) {
        const Be = O[ye], Ie = L[ye];
        Be !== null && Ie !== void 0 && Ie.update(Be, se, l || o);
      }
      nt && nt(q, se), se.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: se }), v = null;
    }
    const et = new zc();
    et.setAnimationLoop(at), this.setAnimationLoop = function(q) {
      nt = q;
    }, this.dispose = function() {
    };
  }
}
const ri = new Mn(), c_ = new Qe();
function h_(s, e) {
  function t(_, p) {
    _.matrixAutoUpdate === true && _.updateMatrix(), p.value.copy(_.matrix);
  }
  function n(_, p) {
    p.color.getRGB(_.fogColor.value, Pc(s)), p.isFog ? (_.fogNear.value = p.near, _.fogFar.value = p.far) : p.isFogExp2 && (_.fogDensity.value = p.density);
  }
  function i(_, p, I, P, E) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(_, p) : p.isMeshToonMaterial ? (r(_, p), h(_, p)) : p.isMeshPhongMaterial ? (r(_, p), u(_, p)) : p.isMeshStandardMaterial ? (r(_, p), f(_, p), p.isMeshPhysicalMaterial && g(_, p, E)) : p.isMeshMatcapMaterial ? (r(_, p), v(_, p)) : p.isMeshDepthMaterial ? r(_, p) : p.isMeshDistanceMaterial ? (r(_, p), S(_, p)) : p.isMeshNormalMaterial ? r(_, p) : p.isLineBasicMaterial ? (o(_, p), p.isLineDashedMaterial && a(_, p)) : p.isPointsMaterial ? c(_, p, I, P) : p.isSpriteMaterial ? l(_, p) : p.isShadowMaterial ? (_.color.value.copy(p.color), _.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function r(_, p) {
    _.opacity.value = p.opacity, p.color && _.diffuse.value.copy(p.color), p.emissive && _.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (_.map.value = p.map, t(p.map, _.mapTransform)), p.alphaMap && (_.alphaMap.value = p.alphaMap, t(p.alphaMap, _.alphaMapTransform)), p.bumpMap && (_.bumpMap.value = p.bumpMap, t(p.bumpMap, _.bumpMapTransform), _.bumpScale.value = p.bumpScale, p.side === Xt && (_.bumpScale.value *= -1)), p.normalMap && (_.normalMap.value = p.normalMap, t(p.normalMap, _.normalMapTransform), _.normalScale.value.copy(p.normalScale), p.side === Xt && _.normalScale.value.negate()), p.displacementMap && (_.displacementMap.value = p.displacementMap, t(p.displacementMap, _.displacementMapTransform), _.displacementScale.value = p.displacementScale, _.displacementBias.value = p.displacementBias), p.emissiveMap && (_.emissiveMap.value = p.emissiveMap, t(p.emissiveMap, _.emissiveMapTransform)), p.specularMap && (_.specularMap.value = p.specularMap, t(p.specularMap, _.specularMapTransform)), p.alphaTest > 0 && (_.alphaTest.value = p.alphaTest);
    const I = e.get(p), P = I.envMap, E = I.envMapRotation;
    P && (_.envMap.value = P, ri.copy(E), ri.x *= -1, ri.y *= -1, ri.z *= -1, P.isCubeTexture && P.isRenderTargetTexture === false && (ri.y *= -1, ri.z *= -1), _.envMapRotation.value.setFromMatrix4(c_.makeRotationFromEuler(ri)), _.flipEnvMap.value = P.isCubeTexture && P.isRenderTargetTexture === false ? -1 : 1, _.reflectivity.value = p.reflectivity, _.ior.value = p.ior, _.refractionRatio.value = p.refractionRatio), p.lightMap && (_.lightMap.value = p.lightMap, _.lightMapIntensity.value = p.lightMapIntensity, t(p.lightMap, _.lightMapTransform)), p.aoMap && (_.aoMap.value = p.aoMap, _.aoMapIntensity.value = p.aoMapIntensity, t(p.aoMap, _.aoMapTransform));
  }
  function o(_, p) {
    _.diffuse.value.copy(p.color), _.opacity.value = p.opacity, p.map && (_.map.value = p.map, t(p.map, _.mapTransform));
  }
  function a(_, p) {
    _.dashSize.value = p.dashSize, _.totalSize.value = p.dashSize + p.gapSize, _.scale.value = p.scale;
  }
  function c(_, p, I, P) {
    _.diffuse.value.copy(p.color), _.opacity.value = p.opacity, _.size.value = p.size * I, _.scale.value = P * 0.5, p.map && (_.map.value = p.map, t(p.map, _.uvTransform)), p.alphaMap && (_.alphaMap.value = p.alphaMap, t(p.alphaMap, _.alphaMapTransform)), p.alphaTest > 0 && (_.alphaTest.value = p.alphaTest);
  }
  function l(_, p) {
    _.diffuse.value.copy(p.color), _.opacity.value = p.opacity, _.rotation.value = p.rotation, p.map && (_.map.value = p.map, t(p.map, _.mapTransform)), p.alphaMap && (_.alphaMap.value = p.alphaMap, t(p.alphaMap, _.alphaMapTransform)), p.alphaTest > 0 && (_.alphaTest.value = p.alphaTest);
  }
  function u(_, p) {
    _.specular.value.copy(p.specular), _.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function h(_, p) {
    p.gradientMap && (_.gradientMap.value = p.gradientMap);
  }
  function f(_, p) {
    _.metalness.value = p.metalness, p.metalnessMap && (_.metalnessMap.value = p.metalnessMap, t(p.metalnessMap, _.metalnessMapTransform)), _.roughness.value = p.roughness, p.roughnessMap && (_.roughnessMap.value = p.roughnessMap, t(p.roughnessMap, _.roughnessMapTransform)), p.envMap && (_.envMapIntensity.value = p.envMapIntensity);
  }
  function g(_, p, I) {
    _.ior.value = p.ior, p.sheen > 0 && (_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), _.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (_.sheenColorMap.value = p.sheenColorMap, t(p.sheenColorMap, _.sheenColorMapTransform)), p.sheenRoughnessMap && (_.sheenRoughnessMap.value = p.sheenRoughnessMap, t(p.sheenRoughnessMap, _.sheenRoughnessMapTransform))), p.clearcoat > 0 && (_.clearcoat.value = p.clearcoat, _.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (_.clearcoatMap.value = p.clearcoatMap, t(p.clearcoatMap, _.clearcoatMapTransform)), p.clearcoatRoughnessMap && (_.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, t(p.clearcoatRoughnessMap, _.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (_.clearcoatNormalMap.value = p.clearcoatNormalMap, t(p.clearcoatNormalMap, _.clearcoatNormalMapTransform), _.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Xt && _.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (_.dispersion.value = p.dispersion), p.iridescence > 0 && (_.iridescence.value = p.iridescence, _.iridescenceIOR.value = p.iridescenceIOR, _.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], _.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (_.iridescenceMap.value = p.iridescenceMap, t(p.iridescenceMap, _.iridescenceMapTransform)), p.iridescenceThicknessMap && (_.iridescenceThicknessMap.value = p.iridescenceThicknessMap, t(p.iridescenceThicknessMap, _.iridescenceThicknessMapTransform))), p.transmission > 0 && (_.transmission.value = p.transmission, _.transmissionSamplerMap.value = I.texture, _.transmissionSamplerSize.value.set(I.width, I.height), p.transmissionMap && (_.transmissionMap.value = p.transmissionMap, t(p.transmissionMap, _.transmissionMapTransform)), _.thickness.value = p.thickness, p.thicknessMap && (_.thicknessMap.value = p.thicknessMap, t(p.thicknessMap, _.thicknessMapTransform)), _.attenuationDistance.value = p.attenuationDistance, _.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (_.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (_.anisotropyMap.value = p.anisotropyMap, t(p.anisotropyMap, _.anisotropyMapTransform))), _.specularIntensity.value = p.specularIntensity, _.specularColor.value.copy(p.specularColor), p.specularColorMap && (_.specularColorMap.value = p.specularColorMap, t(p.specularColorMap, _.specularColorMapTransform)), p.specularIntensityMap && (_.specularIntensityMap.value = p.specularIntensityMap, t(p.specularIntensityMap, _.specularIntensityMapTransform));
  }
  function v(_, p) {
    p.matcap && (_.matcap.value = p.matcap);
  }
  function S(_, p) {
    const I = e.get(p).light;
    _.referencePosition.value.setFromMatrixPosition(I.matrixWorld), _.nearDistance.value = I.shadow.camera.near, _.farDistance.value = I.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function u_(s, e, t, n) {
  let i = {}, r = {}, o = [];
  const a = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(I, P) {
    const E = P.program;
    n.uniformBlockBinding(I, E);
  }
  function l(I, P) {
    let E = i[I.id];
    E === void 0 && (v(I), E = u(I), i[I.id] = E, I.addEventListener("dispose", _));
    const L = P.program;
    n.updateUBOMapping(I, L);
    const O = e.render.frame;
    r[I.id] !== O && (f(I), r[I.id] = O);
  }
  function u(I) {
    const P = h();
    I.__bindingPointIndex = P;
    const E = s.createBuffer(), L = I.__size, O = I.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, E), s.bufferData(s.UNIFORM_BUFFER, L, O), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, P, E), E;
  }
  function h() {
    for (let I = 0; I < a; I++) if (o.indexOf(I) === -1) return o.push(I), I;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(I) {
    const P = i[I.id], E = I.uniforms, L = I.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, P);
    for (let O = 0, N = E.length; O < N; O++) {
      const V = Array.isArray(E[O]) ? E[O] : [E[O]];
      for (let b = 0, T = V.length; b < T; b++) {
        const F = V[b];
        if (g(F, O, b, L) === true) {
          const X = F.__offset, $ = Array.isArray(F.value) ? F.value : [F.value];
          let ie = 0;
          for (let te = 0; te < $.length; te++) {
            const ee = $[te], oe = S(ee);
            typeof ee == "number" || typeof ee == "boolean" ? (F.__data[0] = ee, s.bufferSubData(s.UNIFORM_BUFFER, X + ie, F.__data)) : ee.isMatrix3 ? (F.__data[0] = ee.elements[0], F.__data[1] = ee.elements[1], F.__data[2] = ee.elements[2], F.__data[3] = 0, F.__data[4] = ee.elements[3], F.__data[5] = ee.elements[4], F.__data[6] = ee.elements[5], F.__data[7] = 0, F.__data[8] = ee.elements[6], F.__data[9] = ee.elements[7], F.__data[10] = ee.elements[8], F.__data[11] = 0) : (ee.toArray(F.__data, ie), ie += oe.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, X, F.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function g(I, P, E, L) {
    const O = I.value, N = P + "_" + E;
    if (L[N] === void 0) return typeof O == "number" || typeof O == "boolean" ? L[N] = O : L[N] = O.clone(), true;
    {
      const V = L[N];
      if (typeof O == "number" || typeof O == "boolean") {
        if (V !== O) return L[N] = O, true;
      } else if (V.equals(O) === false) return V.copy(O), true;
    }
    return false;
  }
  function v(I) {
    const P = I.uniforms;
    let E = 0;
    const L = 16;
    for (let N = 0, V = P.length; N < V; N++) {
      const b = Array.isArray(P[N]) ? P[N] : [P[N]];
      for (let T = 0, F = b.length; T < F; T++) {
        const X = b[T], $ = Array.isArray(X.value) ? X.value : [X.value];
        for (let ie = 0, te = $.length; ie < te; ie++) {
          const ee = $[ie], oe = S(ee), Z = E % L, pe = Z % oe.boundary, Me = Z + pe;
          E += pe, Me !== 0 && L - Me < oe.storage && (E += L - Me), X.__data = new Float32Array(oe.storage / Float32Array.BYTES_PER_ELEMENT), X.__offset = E, E += oe.storage;
        }
      }
    }
    const O = E % L;
    return O > 0 && (E += L - O), I.__size = E, I.__cache = {}, this;
  }
  function S(I) {
    const P = { boundary: 0, storage: 0 };
    return typeof I == "number" || typeof I == "boolean" ? (P.boundary = 4, P.storage = 4) : I.isVector2 ? (P.boundary = 8, P.storage = 8) : I.isVector3 || I.isColor ? (P.boundary = 16, P.storage = 12) : I.isVector4 ? (P.boundary = 16, P.storage = 16) : I.isMatrix3 ? (P.boundary = 48, P.storage = 48) : I.isMatrix4 ? (P.boundary = 64, P.storage = 64) : I.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", I), P;
  }
  function _(I) {
    const P = I.target;
    P.removeEventListener("dispose", _);
    const E = o.indexOf(P.__bindingPointIndex);
    o.splice(E, 1), s.deleteBuffer(i[P.id]), delete i[P.id], delete r[P.id];
  }
  function p() {
    for (const I in i) s.deleteBuffer(i[I]);
    o = [], i = {}, r = {};
  }
  return { bind: c, update: l, dispose: p };
}
class d_ {
  constructor(e = {}) {
    const { canvas: t = ru(), context: n = null, depth: i = true, stencil: r = false, alpha: o = false, antialias: a = false, premultipliedAlpha: c = true, preserveDrawingBuffer: l = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: h = false, reversedDepthBuffer: f = false } = e;
    this.isWebGLRenderer = true;
    let g;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      g = n.getContextAttributes().alpha;
    } else g = o;
    const v = new Uint32Array(4), S = new Int32Array(4);
    let _ = null, p = null;
    const I = [], P = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = $n, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const E = this;
    let L = false;
    this._outputColorSpace = Lt;
    let O = 0, N = 0, V = null, b = -1, T = null;
    const F = new lt(), X = new lt();
    let $ = null;
    const ie = new qe(0);
    let te = 0, ee = t.width, oe = t.height, Z = 1, pe = null, Me = null;
    const Re = new lt(0, 0, ee, oe), Oe = new lt(0, 0, ee, oe);
    let nt = false;
    const at = new ba();
    let et = false, q = false;
    const se = new Qe(), ye = new B(), Be = new lt(), Ie = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let je = false;
    function yt() {
      return V === null ? Z : 1;
    }
    let D = n;
    function pt(d, x) {
      return t.getContext(d, x);
    }
    try {
      const d = { alpha: true, depth: i, stencil: r, antialias: a, premultipliedAlpha: c, preserveDrawingBuffer: l, powerPreference: u, failIfMajorPerformanceCaveat: h };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${fa}`), t.addEventListener("webglcontextlost", Y, false), t.addEventListener("webglcontextrestored", Ee, false), t.addEventListener("webglcontextcreationerror", ce, false), D === null) {
        const x = "webgl2";
        if (D = pt(x, d), D === null) throw pt(x) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (d) {
      throw console.error("THREE.WebGLRenderer: " + d.message), d;
    }
    let We, ze, Ae, mt, Te, Ye, Et, xt, C, M, G, Q, ae, j, De, fe, Ce, Le, ue, _e, we, Pe, xe, Ue;
    function U() {
      We = new ym(D), We.init(), Pe = new s_(D, We), ze = new mm(D, We, e, Pe), Ae = new n_(D, We), ze.reversedDepthBuffer && f && Ae.buffers.depth.setReversed(true), mt = new bm(D), Te = new Gg(), Ye = new i_(D, We, Ae, Te, ze, Pe, mt), Et = new _m(E), xt = new Sm(E), C = new Pd(D), xe = new fm(D, C), M = new Em(D, C, mt, xe), G = new wm(D, M, C, mt), ue = new Am(D, ze, Ye), fe = new gm(Te), Q = new Vg(E, Et, xt, We, ze, xe, fe), ae = new h_(E, Te), j = new Xg(), De = new $g(We), Le = new dm(E, Et, xt, Ae, G, g, c), Ce = new e_(E, G, ze), Ue = new u_(D, mt, ze, Ae), _e = new pm(D, We, mt), we = new Tm(D, We, mt), mt.programs = Q.programs, E.capabilities = ze, E.extensions = We, E.properties = Te, E.renderLists = j, E.shadowMap = Ce, E.state = Ae, E.info = mt;
    }
    U();
    const de = new l_(E, D);
    this.xr = de, this.getContext = function() {
      return D;
    }, this.getContextAttributes = function() {
      return D.getContextAttributes();
    }, this.forceContextLoss = function() {
      const d = We.get("WEBGL_lose_context");
      d && d.loseContext();
    }, this.forceContextRestore = function() {
      const d = We.get("WEBGL_lose_context");
      d && d.restoreContext();
    }, this.getPixelRatio = function() {
      return Z;
    }, this.setPixelRatio = function(d) {
      d !== void 0 && (Z = d, this.setSize(ee, oe, false));
    }, this.getSize = function(d) {
      return d.set(ee, oe);
    }, this.setSize = function(d, x, y = true) {
      if (de.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      ee = d, oe = x, t.width = Math.floor(d * Z), t.height = Math.floor(x * Z), y === true && (t.style.width = d + "px", t.style.height = x + "px"), this.setViewport(0, 0, d, x);
    }, this.getDrawingBufferSize = function(d) {
      return d.set(ee * Z, oe * Z).floor();
    }, this.setDrawingBufferSize = function(d, x, y) {
      ee = d, oe = x, Z = y, t.width = Math.floor(d * y), t.height = Math.floor(x * y), this.setViewport(0, 0, d, x);
    }, this.getCurrentViewport = function(d) {
      return d.copy(F);
    }, this.getViewport = function(d) {
      return d.copy(Re);
    }, this.setViewport = function(d, x, y, w) {
      d.isVector4 ? Re.set(d.x, d.y, d.z, d.w) : Re.set(d, x, y, w), Ae.viewport(F.copy(Re).multiplyScalar(Z).round());
    }, this.getScissor = function(d) {
      return d.copy(Oe);
    }, this.setScissor = function(d, x, y, w) {
      d.isVector4 ? Oe.set(d.x, d.y, d.z, d.w) : Oe.set(d, x, y, w), Ae.scissor(X.copy(Oe).multiplyScalar(Z).round());
    }, this.getScissorTest = function() {
      return nt;
    }, this.setScissorTest = function(d) {
      Ae.setScissorTest(nt = d);
    }, this.setOpaqueSort = function(d) {
      pe = d;
    }, this.setTransparentSort = function(d) {
      Me = d;
    }, this.getClearColor = function(d) {
      return d.copy(Le.getClearColor());
    }, this.setClearColor = function() {
      Le.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Le.getClearAlpha();
    }, this.setClearAlpha = function() {
      Le.setClearAlpha(...arguments);
    }, this.clear = function(d = true, x = true, y = true) {
      let w = 0;
      if (d) {
        let R = false;
        if (V !== null) {
          const A = V.texture.format;
          R = A === va || A === xa || A === _a;
        }
        if (R) {
          const A = V.texture.type, H = A === xn || A === pi || A === vs || A === Ms || A === ma || A === ga, z = Le.getClearColor(), k = Le.getClearAlpha(), W = z.r, J = z.g, K = z.b;
          H ? (v[0] = W, v[1] = J, v[2] = K, v[3] = k, D.clearBufferuiv(D.COLOR, 0, v)) : (S[0] = W, S[1] = J, S[2] = K, S[3] = k, D.clearBufferiv(D.COLOR, 0, S));
        } else w |= D.COLOR_BUFFER_BIT;
      }
      x && (w |= D.DEPTH_BUFFER_BIT), y && (w |= D.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), D.clear(w);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Y, false), t.removeEventListener("webglcontextrestored", Ee, false), t.removeEventListener("webglcontextcreationerror", ce, false), Le.dispose(), j.dispose(), De.dispose(), Te.dispose(), Et.dispose(), xt.dispose(), G.dispose(), xe.dispose(), Ue.dispose(), Q.dispose(), de.dispose(), de.removeEventListener("sessionstart", Kt), de.removeEventListener("sessionend", Ds), Tn.stop();
    };
    function Y(d) {
      d.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L = true;
    }
    function Ee() {
      console.log("THREE.WebGLRenderer: Context Restored."), L = false;
      const d = mt.autoReset, x = Ce.enabled, y = Ce.autoUpdate, w = Ce.needsUpdate, R = Ce.type;
      U(), mt.autoReset = d, Ce.enabled = x, Ce.autoUpdate = y, Ce.needsUpdate = w, Ce.type = R;
    }
    function ce(d) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", d.statusMessage);
    }
    function ne(d) {
      const x = d.target;
      x.removeEventListener("dispose", ne), be(x);
    }
    function be(d) {
      Xe(d), Te.remove(d);
    }
    function Xe(d) {
      const x = Te.get(d).programs;
      x !== void 0 && (x.forEach(function(y) {
        Q.releaseProgram(y);
      }), d.isShaderMaterial && Q.releaseShaderCache(d));
    }
    this.renderBufferDirect = function(d, x, y, w, R, A) {
      x === null && (x = Ie);
      const H = R.isMesh && R.matrixWorld.determinant() < 0, z = Bs(d, x, y, w, R);
      Ae.setMaterial(w, H);
      let k = y.index, W = 1;
      if (w.wireframe === true) {
        if (k = M.getWireframeAttribute(y), k === void 0) return;
        W = 2;
      }
      const J = y.drawRange, K = y.attributes.position;
      let re = J.start * W, me = (J.start + J.count) * W;
      A !== null && (re = Math.max(re, A.start * W), me = Math.min(me, (A.start + A.count) * W)), k !== null ? (re = Math.max(re, 0), me = Math.min(me, k.count)) : K != null && (re = Math.max(re, 0), me = Math.min(me, K.count));
      const le = me - re;
      if (le < 0 || le === 1 / 0) return;
      xe.setup(R, w, z, y, k);
      let he, ve = _e;
      if (k !== null && (he = C.get(k), ve = we, ve.setIndex(he)), R.isMesh) w.wireframe === true ? (Ae.setLineWidth(w.wireframeLinewidth * yt()), ve.setMode(D.LINES)) : ve.setMode(D.TRIANGLES);
      else if (R.isLine) {
        let ge = w.linewidth;
        ge === void 0 && (ge = 1), Ae.setLineWidth(ge * yt()), R.isLineSegments ? ve.setMode(D.LINES) : R.isLineLoop ? ve.setMode(D.LINE_LOOP) : ve.setMode(D.LINE_STRIP);
      } else R.isPoints ? ve.setMode(D.POINTS) : R.isSprite && ve.setMode(D.TRIANGLES);
      if (R.isBatchedMesh) if (R._multiDrawInstances !== null) As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."), ve.renderMultiDrawInstances(R._multiDrawStarts, R._multiDrawCounts, R._multiDrawCount, R._multiDrawInstances);
      else if (We.get("WEBGL_multi_draw")) ve.renderMultiDraw(R._multiDrawStarts, R._multiDrawCounts, R._multiDrawCount);
      else {
        const ge = R._multiDrawStarts, Fe = R._multiDrawCounts, Ne = R._multiDrawCount, Ke = k ? C.get(k).bytesPerElement : 1, ke = Te.get(w).currentProgram.getUniforms();
        for (let it = 0; it < Ne; it++) ke.setValue(D, "_gl_DrawID", it), ve.render(ge[it] / Ke, Fe[it]);
      }
      else if (R.isInstancedMesh) ve.renderInstances(re, le, R.count);
      else if (y.isInstancedBufferGeometry) {
        const ge = y._maxInstanceCount !== void 0 ? y._maxInstanceCount : 1 / 0, Fe = Math.min(y.instanceCount, ge);
        ve.renderInstances(re, le, Fe);
      } else ve.render(re, le);
    };
    function ut(d, x, y) {
      d.transparent === true && d.side === fn && d.forceSinglePass === false ? (d.side = Xt, d.needsUpdate = true, xi(d, x, y), d.side = Bn, d.needsUpdate = true, xi(d, x, y), d.side = fn) : xi(d, x, y);
    }
    this.compile = function(d, x, y = null) {
      y === null && (y = d), p = De.get(y), p.init(x), P.push(p), y.traverseVisible(function(R) {
        R.isLight && R.layers.test(x.layers) && (p.pushLight(R), R.castShadow && p.pushShadow(R));
      }), d !== y && d.traverseVisible(function(R) {
        R.isLight && R.layers.test(x.layers) && (p.pushLight(R), R.castShadow && p.pushShadow(R));
      }), p.setupLights();
      const w = /* @__PURE__ */ new Set();
      return d.traverse(function(R) {
        if (!(R.isMesh || R.isPoints || R.isLine || R.isSprite)) return;
        const A = R.material;
        if (A) if (Array.isArray(A)) for (let H = 0; H < A.length; H++) {
          const z = A[H];
          ut(z, y, R), w.add(z);
        }
        else ut(A, y, R), w.add(A);
      }), p = P.pop(), w;
    }, this.compileAsync = function(d, x, y = null) {
      const w = this.compile(d, x, y);
      return new Promise((R) => {
        function A() {
          if (w.forEach(function(H) {
            Te.get(H).currentProgram.isReady() && w.delete(H);
          }), w.size === 0) {
            R(d);
            return;
          }
          setTimeout(A, 10);
        }
        We.get("KHR_parallel_shader_compile") !== null ? A() : setTimeout(A, 10);
      });
    };
    let ot = null;
    function Qt(d) {
      ot && ot(d);
    }
    function Kt() {
      Tn.stop();
    }
    function Ds() {
      Tn.start();
    }
    const Tn = new zc();
    Tn.setAnimationLoop(Qt), typeof self < "u" && Tn.setContext(self), this.setAnimationLoop = function(d) {
      ot = d, de.setAnimationLoop(d), d === null ? Tn.stop() : Tn.start();
    }, de.addEventListener("sessionstart", Kt), de.addEventListener("sessionend", Ds), this.render = function(d, x) {
      if (x !== void 0 && x.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (L === true) return;
      if (d.matrixWorldAutoUpdate === true && d.updateMatrixWorld(), x.parent === null && x.matrixWorldAutoUpdate === true && x.updateMatrixWorld(), de.enabled === true && de.isPresenting === true && (de.cameraAutoUpdate === true && de.updateCamera(x), x = de.getCamera()), d.isScene === true && d.onBeforeRender(E, d, x, V), p = De.get(d, P.length), p.init(x), P.push(p), se.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse), at.setFromProjectionMatrix(se, gn, x.reversedDepth), q = this.localClippingEnabled, et = fe.init(this.clippingPlanes, q), _ = j.get(d, I.length), _.init(), I.push(_), de.enabled === true && de.isPresenting === true) {
        const A = E.xr.getDepthSensingMesh();
        A !== null && is(A, x, -1 / 0, E.sortObjects);
      }
      is(d, x, 0, E.sortObjects), _.finish(), E.sortObjects === true && _.sort(pe, Me), je = de.enabled === false || de.isPresenting === false || de.hasDepthSensing() === false, je && Le.addToRenderList(_, d), this.info.render.frame++, et === true && fe.beginShadows();
      const y = p.state.shadowsArray;
      Ce.render(y, d, x), et === true && fe.endShadows(), this.info.autoReset === true && this.info.reset();
      const w = _.opaque, R = _.transmissive;
      if (p.setupLights(), x.isArrayCamera) {
        const A = x.cameras;
        if (R.length > 0) for (let H = 0, z = A.length; H < z; H++) {
          const k = A[H];
          Us(w, R, d, k);
        }
        je && Le.render(d);
        for (let H = 0, z = A.length; H < z; H++) {
          const k = A[H];
          Ls(_, d, k, k.viewport);
        }
      } else R.length > 0 && Us(w, R, d, x), je && Le.render(d), Ls(_, d, x);
      V !== null && N === 0 && (Ye.updateMultisampleRenderTarget(V), Ye.updateRenderTargetMipmap(V)), d.isScene === true && d.onAfterRender(E, d, x), xe.resetDefaultState(), b = -1, T = null, P.pop(), P.length > 0 ? (p = P[P.length - 1], et === true && fe.setGlobalState(E.clippingPlanes, p.state.camera)) : p = null, I.pop(), I.length > 0 ? _ = I[I.length - 1] : _ = null;
    };
    function is(d, x, y, w) {
      if (d.visible === false) return;
      if (d.layers.test(x.layers)) {
        if (d.isGroup) y = d.renderOrder;
        else if (d.isLOD) d.autoUpdate === true && d.update(x);
        else if (d.isLight) p.pushLight(d), d.castShadow && p.pushShadow(d);
        else if (d.isSprite) {
          if (!d.frustumCulled || at.intersectsSprite(d)) {
            w && Be.setFromMatrixPosition(d.matrixWorld).applyMatrix4(se);
            const H = G.update(d), z = d.material;
            z.visible && _.push(d, H, z, y, Be.z, null);
          }
        } else if ((d.isMesh || d.isLine || d.isPoints) && (!d.frustumCulled || at.intersectsObject(d))) {
          const H = G.update(d), z = d.material;
          if (w && (d.boundingSphere !== void 0 ? (d.boundingSphere === null && d.computeBoundingSphere(), Be.copy(d.boundingSphere.center)) : (H.boundingSphere === null && H.computeBoundingSphere(), Be.copy(H.boundingSphere.center)), Be.applyMatrix4(d.matrixWorld).applyMatrix4(se)), Array.isArray(z)) {
            const k = H.groups;
            for (let W = 0, J = k.length; W < J; W++) {
              const K = k[W], re = z[K.materialIndex];
              re && re.visible && _.push(d, H, re, y, Be.z, K);
            }
          } else z.visible && _.push(d, H, z, y, Be.z, null);
        }
      }
      const A = d.children;
      for (let H = 0, z = A.length; H < z; H++) is(A[H], x, y, w);
    }
    function Ls(d, x, y, w) {
      const R = d.opaque, A = d.transmissive, H = d.transparent;
      p.setupLightsView(y), et === true && fe.setGlobalState(E.clippingPlanes, y), w && Ae.viewport(F.copy(w)), R.length > 0 && Qn(R, x, y), A.length > 0 && Qn(A, x, y), H.length > 0 && Qn(H, x, y), Ae.buffers.depth.setTest(true), Ae.buffers.depth.setMask(true), Ae.buffers.color.setMask(true), Ae.setPolygonOffset(false);
    }
    function Us(d, x, y, w) {
      if ((y.isScene === true ? y.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[w.id] === void 0 && (p.state.transmissionRenderTarget[w.id] = new mi(1, 1, { generateMipmaps: true, type: We.has("EXT_color_buffer_half_float") || We.has("EXT_color_buffer_float") ? Un : xn, minFilter: mn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: rt.workingColorSpace }));
      const A = p.state.transmissionRenderTarget[w.id], H = w.viewport || F;
      A.setSize(H.z * E.transmissionResolutionScale, H.w * E.transmissionResolutionScale);
      const z = E.getRenderTarget(), k = E.getActiveCubeFace(), W = E.getActiveMipmapLevel();
      E.setRenderTarget(A), E.getClearColor(ie), te = E.getClearAlpha(), te < 1 && E.setClearColor(16777215, 0.5), E.clear(), je && Le.render(y);
      const J = E.toneMapping;
      E.toneMapping = $n;
      const K = w.viewport;
      if (w.viewport !== void 0 && (w.viewport = void 0), p.setupLightsView(w), et === true && fe.setGlobalState(E.clippingPlanes, w), Qn(d, y, w), Ye.updateMultisampleRenderTarget(A), Ye.updateRenderTargetMipmap(A), We.has("WEBGL_multisampled_render_to_texture") === false) {
        let re = false;
        for (let me = 0, le = x.length; me < le; me++) {
          const he = x[me], ve = he.object, ge = he.geometry, Fe = he.material, Ne = he.group;
          if (Fe.side === fn && ve.layers.test(w.layers)) {
            const Ke = Fe.side;
            Fe.side = Xt, Fe.needsUpdate = true, Ns(ve, y, w, ge, Fe, Ne), Fe.side = Ke, Fe.needsUpdate = true, re = true;
          }
        }
        re === true && (Ye.updateMultisampleRenderTarget(A), Ye.updateRenderTargetMipmap(A));
      }
      E.setRenderTarget(z, k, W), E.setClearColor(ie, te), K !== void 0 && (w.viewport = K), E.toneMapping = J;
    }
    function Qn(d, x, y) {
      const w = x.isScene === true ? x.overrideMaterial : null;
      for (let R = 0, A = d.length; R < A; R++) {
        const H = d[R], z = H.object, k = H.geometry, W = H.group;
        let J = H.material;
        J.allowOverride === true && w !== null && (J = w), z.layers.test(y.layers) && Ns(z, x, y, k, J, W);
      }
    }
    function Ns(d, x, y, w, R, A) {
      d.onBeforeRender(E, x, y, w, R, A), d.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse, d.matrixWorld), d.normalMatrix.getNormalMatrix(d.modelViewMatrix), R.onBeforeRender(E, x, y, w, d, A), R.transparent === true && R.side === fn && R.forceSinglePass === false ? (R.side = Xt, R.needsUpdate = true, E.renderBufferDirect(y, x, w, R, d, A), R.side = Bn, R.needsUpdate = true, E.renderBufferDirect(y, x, w, R, d, A), R.side = fn) : E.renderBufferDirect(y, x, w, R, d, A), d.onAfterRender(E, x, y, w, R, A);
    }
    function xi(d, x, y) {
      x.isScene !== true && (x = Ie);
      const w = Te.get(d), R = p.state.lights, A = p.state.shadowsArray, H = R.state.version, z = Q.getParameters(d, R.state, A, x, y), k = Q.getProgramCacheKey(z);
      let W = w.programs;
      w.environment = d.isMeshStandardMaterial ? x.environment : null, w.fog = x.fog, w.envMap = (d.isMeshStandardMaterial ? xt : Et).get(d.envMap || w.environment), w.envMapRotation = w.environment !== null && d.envMap === null ? x.environmentRotation : d.envMapRotation, W === void 0 && (d.addEventListener("dispose", ne), W = /* @__PURE__ */ new Map(), w.programs = W);
      let J = W.get(k);
      if (J !== void 0) {
        if (w.currentProgram === J && w.lightsStateVersion === H) return Os(d, z), J;
      } else z.uniforms = Q.getUniforms(d), d.onBeforeCompile(z, E), J = Q.acquireProgram(z, k), W.set(k, J), w.uniforms = z.uniforms;
      const K = w.uniforms;
      return (!d.isShaderMaterial && !d.isRawShaderMaterial || d.clipping === true) && (K.clippingPlanes = fe.uniform), Os(d, z), w.needsLights = Ir(d), w.lightsStateVersion = H, w.needsLights && (K.ambientLightColor.value = R.state.ambient, K.lightProbe.value = R.state.probe, K.directionalLights.value = R.state.directional, K.directionalLightShadows.value = R.state.directionalShadow, K.spotLights.value = R.state.spot, K.spotLightShadows.value = R.state.spotShadow, K.rectAreaLights.value = R.state.rectArea, K.ltc_1.value = R.state.rectAreaLTC1, K.ltc_2.value = R.state.rectAreaLTC2, K.pointLights.value = R.state.point, K.pointLightShadows.value = R.state.pointShadow, K.hemisphereLights.value = R.state.hemi, K.directionalShadowMap.value = R.state.directionalShadowMap, K.directionalShadowMatrix.value = R.state.directionalShadowMatrix, K.spotShadowMap.value = R.state.spotShadowMap, K.spotLightMatrix.value = R.state.spotLightMatrix, K.spotLightMap.value = R.state.spotLightMap, K.pointShadowMap.value = R.state.pointShadowMap, K.pointShadowMatrix.value = R.state.pointShadowMatrix), w.currentProgram = J, w.uniformsList = null, J;
    }
    function Fs(d) {
      if (d.uniformsList === null) {
        const x = d.currentProgram.getUniforms();
        d.uniformsList = Mr.seqWithValue(x.seq, d.uniforms);
      }
      return d.uniformsList;
    }
    function Os(d, x) {
      const y = Te.get(d);
      y.outputColorSpace = x.outputColorSpace, y.batching = x.batching, y.batchingColor = x.batchingColor, y.instancing = x.instancing, y.instancingColor = x.instancingColor, y.instancingMorph = x.instancingMorph, y.skinning = x.skinning, y.morphTargets = x.morphTargets, y.morphNormals = x.morphNormals, y.morphColors = x.morphColors, y.morphTargetsCount = x.morphTargetsCount, y.numClippingPlanes = x.numClippingPlanes, y.numIntersection = x.numClipIntersection, y.vertexAlphas = x.vertexAlphas, y.vertexTangents = x.vertexTangents, y.toneMapping = x.toneMapping;
    }
    function Bs(d, x, y, w, R) {
      x.isScene !== true && (x = Ie), Ye.resetTextureUnits();
      const A = x.fog, H = w.isMeshStandardMaterial ? x.environment : null, z = V === null ? E.outputColorSpace : V.isXRRenderTarget === true ? V.texture.colorSpace : St, k = (w.isMeshStandardMaterial ? xt : Et).get(w.envMap || H), W = w.vertexColors === true && !!y.attributes.color && y.attributes.color.itemSize === 4, J = !!y.attributes.tangent && (!!w.normalMap || w.anisotropy > 0), K = !!y.morphAttributes.position, re = !!y.morphAttributes.normal, me = !!y.morphAttributes.color;
      let le = $n;
      w.toneMapped && (V === null || V.isXRRenderTarget === true) && (le = E.toneMapping);
      const he = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color, ve = he !== void 0 ? he.length : 0, ge = Te.get(w), Fe = p.state.lights;
      if (et === true && (q === true || d !== T)) {
        const gt = d === T && w.id === b;
        fe.setState(w, d, gt);
      }
      let Ne = false;
      w.version === ge.__version ? (ge.needsLights && ge.lightsStateVersion !== Fe.state.version || ge.outputColorSpace !== z || R.isBatchedMesh && ge.batching === false || !R.isBatchedMesh && ge.batching === true || R.isBatchedMesh && ge.batchingColor === true && R.colorTexture === null || R.isBatchedMesh && ge.batchingColor === false && R.colorTexture !== null || R.isInstancedMesh && ge.instancing === false || !R.isInstancedMesh && ge.instancing === true || R.isSkinnedMesh && ge.skinning === false || !R.isSkinnedMesh && ge.skinning === true || R.isInstancedMesh && ge.instancingColor === true && R.instanceColor === null || R.isInstancedMesh && ge.instancingColor === false && R.instanceColor !== null || R.isInstancedMesh && ge.instancingMorph === true && R.morphTexture === null || R.isInstancedMesh && ge.instancingMorph === false && R.morphTexture !== null || ge.envMap !== k || w.fog === true && ge.fog !== A || ge.numClippingPlanes !== void 0 && (ge.numClippingPlanes !== fe.numPlanes || ge.numIntersection !== fe.numIntersection) || ge.vertexAlphas !== W || ge.vertexTangents !== J || ge.morphTargets !== K || ge.morphNormals !== re || ge.morphColors !== me || ge.toneMapping !== le || ge.morphTargetsCount !== ve) && (Ne = true) : (Ne = true, ge.__version = w.version);
      let Ke = ge.currentProgram;
      Ne === true && (Ke = xi(w, x, R));
      let ke = false, it = false, vt = false;
      const He = Ke.getUniforms(), Ve = ge.uniforms;
      if (Ae.useProgram(Ke.program) && (ke = true, it = true, vt = true), w.id !== b && (b = w.id, it = true), ke || T !== d) {
        Ae.buffers.depth.getReversed() && d.reversedDepth !== true && (d._reversedDepth = true, d.updateProjectionMatrix()), He.setValue(D, "projectionMatrix", d.projectionMatrix), He.setValue(D, "viewMatrix", d.matrixWorldInverse);
        const Tt = He.map.cameraPosition;
        Tt !== void 0 && Tt.setValue(D, ye.setFromMatrixPosition(d.matrixWorld)), ze.logarithmicDepthBuffer && He.setValue(D, "logDepthBufFC", 2 / (Math.log(d.far + 1) / Math.LN2)), (w.isMeshPhongMaterial || w.isMeshToonMaterial || w.isMeshLambertMaterial || w.isMeshBasicMaterial || w.isMeshStandardMaterial || w.isShaderMaterial) && He.setValue(D, "isOrthographic", d.isOrthographicCamera === true), T !== d && (T = d, it = true, vt = true);
      }
      if (R.isSkinnedMesh) {
        He.setOptional(D, R, "bindMatrix"), He.setOptional(D, R, "bindMatrixInverse");
        const gt = R.skeleton;
        gt && (gt.boneTexture === null && gt.computeBoneTexture(), He.setValue(D, "boneTexture", gt.boneTexture, Ye));
      }
      R.isBatchedMesh && (He.setOptional(D, R, "batchingTexture"), He.setValue(D, "batchingTexture", R._matricesTexture, Ye), He.setOptional(D, R, "batchingIdTexture"), He.setValue(D, "batchingIdTexture", R._indirectTexture, Ye), He.setOptional(D, R, "batchingColorTexture"), R._colorsTexture !== null && He.setValue(D, "batchingColorTexture", R._colorsTexture, Ye));
      const tt = y.morphAttributes;
      if ((tt.position !== void 0 || tt.normal !== void 0 || tt.color !== void 0) && ue.update(R, y, Ke), (it || ge.receiveShadow !== R.receiveShadow) && (ge.receiveShadow = R.receiveShadow, He.setValue(D, "receiveShadow", R.receiveShadow)), w.isMeshGouraudMaterial && w.envMap !== null && (Ve.envMap.value = k, Ve.flipEnvMap.value = k.isCubeTexture && k.isRenderTargetTexture === false ? -1 : 1), w.isMeshStandardMaterial && w.envMap === null && x.environment !== null && (Ve.envMapIntensity.value = x.environmentIntensity), it && (He.setValue(D, "toneMappingExposure", E.toneMappingExposure), ge.needsLights && ks(Ve, vt), A && w.fog === true && ae.refreshFogUniforms(Ve, A), ae.refreshMaterialUniforms(Ve, w, Z, oe, p.state.transmissionRenderTarget[d.id]), Mr.upload(D, Fs(ge), Ve, Ye)), w.isShaderMaterial && w.uniformsNeedUpdate === true && (Mr.upload(D, Fs(ge), Ve, Ye), w.uniformsNeedUpdate = false), w.isSpriteMaterial && He.setValue(D, "center", R.center), He.setValue(D, "modelViewMatrix", R.modelViewMatrix), He.setValue(D, "normalMatrix", R.normalMatrix), He.setValue(D, "modelMatrix", R.matrixWorld), w.isShaderMaterial || w.isRawShaderMaterial) {
        const gt = w.uniformsGroups;
        for (let Tt = 0, Ht = gt.length; Tt < Ht; Tt++) {
          const Zt = gt[Tt];
          Ue.update(Zt, Ke), Ue.bind(Zt, Ke);
        }
      }
      return Ke;
    }
    function ks(d, x) {
      d.ambientLightColor.needsUpdate = x, d.lightProbe.needsUpdate = x, d.directionalLights.needsUpdate = x, d.directionalLightShadows.needsUpdate = x, d.pointLights.needsUpdate = x, d.pointLightShadows.needsUpdate = x, d.spotLights.needsUpdate = x, d.spotLightShadows.needsUpdate = x, d.rectAreaLights.needsUpdate = x, d.hemisphereLights.needsUpdate = x;
    }
    function Ir(d) {
      return d.isMeshLambertMaterial || d.isMeshToonMaterial || d.isMeshPhongMaterial || d.isMeshStandardMaterial || d.isShadowMaterial || d.isShaderMaterial && d.lights === true;
    }
    this.getActiveCubeFace = function() {
      return O;
    }, this.getActiveMipmapLevel = function() {
      return N;
    }, this.getRenderTarget = function() {
      return V;
    }, this.setRenderTargetTextures = function(d, x, y) {
      const w = Te.get(d);
      w.__autoAllocateDepthBuffer = d.resolveDepthBuffer === false, w.__autoAllocateDepthBuffer === false && (w.__useRenderToTexture = false), Te.get(d.texture).__webglTexture = x, Te.get(d.depthTexture).__webglTexture = w.__autoAllocateDepthBuffer ? void 0 : y, w.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(d, x) {
      const y = Te.get(d);
      y.__webglFramebuffer = x, y.__useDefaultFramebuffer = x === void 0;
    };
    const bn = D.createFramebuffer();
    this.setRenderTarget = function(d, x = 0, y = 0) {
      V = d, O = x, N = y;
      let w = true, R = null, A = false, H = false;
      if (d) {
        const k = Te.get(d);
        if (k.__useDefaultFramebuffer !== void 0) Ae.bindFramebuffer(D.FRAMEBUFFER, null), w = false;
        else if (k.__webglFramebuffer === void 0) Ye.setupRenderTarget(d);
        else if (k.__hasExternalTextures) Ye.rebindTextures(d, Te.get(d.texture).__webglTexture, Te.get(d.depthTexture).__webglTexture);
        else if (d.depthBuffer) {
          const K = d.depthTexture;
          if (k.__boundDepthTexture !== K) {
            if (K !== null && Te.has(K) && (d.width !== K.image.width || d.height !== K.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            Ye.setupDepthRenderbuffer(d);
          }
        }
        const W = d.texture;
        (W.isData3DTexture || W.isDataArrayTexture || W.isCompressedArrayTexture) && (H = true);
        const J = Te.get(d).__webglFramebuffer;
        d.isWebGLCubeRenderTarget ? (Array.isArray(J[x]) ? R = J[x][y] : R = J[x], A = true) : d.samples > 0 && Ye.useMultisampledRTT(d) === false ? R = Te.get(d).__webglMultisampledFramebuffer : Array.isArray(J) ? R = J[y] : R = J, F.copy(d.viewport), X.copy(d.scissor), $ = d.scissorTest;
      } else F.copy(Re).multiplyScalar(Z).floor(), X.copy(Oe).multiplyScalar(Z).floor(), $ = nt;
      if (y !== 0 && (R = bn), Ae.bindFramebuffer(D.FRAMEBUFFER, R) && w && Ae.drawBuffers(d, R), Ae.viewport(F), Ae.scissor(X), Ae.setScissorTest($), A) {
        const k = Te.get(d.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_CUBE_MAP_POSITIVE_X + x, k.__webglTexture, y);
      } else if (H) {
        const k = x;
        for (let W = 0; W < d.textures.length; W++) {
          const J = Te.get(d.textures[W]);
          D.framebufferTextureLayer(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0 + W, J.__webglTexture, y, k);
        }
      } else if (d !== null && y !== 0) {
        const k = Te.get(d.texture);
        D.framebufferTexture2D(D.FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, k.__webglTexture, y);
      }
      b = -1;
    }, this.readRenderTargetPixels = function(d, x, y, w, R, A, H, z = 0) {
      if (!(d && d.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let k = Te.get(d).__webglFramebuffer;
      if (d.isWebGLCubeRenderTarget && H !== void 0 && (k = k[H]), k) {
        Ae.bindFramebuffer(D.FRAMEBUFFER, k);
        try {
          const W = d.textures[z], J = W.format, K = W.type;
          if (!ze.textureFormatReadable(J)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ze.textureTypeReadable(K)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          x >= 0 && x <= d.width - w && y >= 0 && y <= d.height - R && (d.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + z), D.readPixels(x, y, w, R, Pe.convert(J), Pe.convert(K), A));
        } finally {
          const W = V !== null ? Te.get(V).__webglFramebuffer : null;
          Ae.bindFramebuffer(D.FRAMEBUFFER, W);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(d, x, y, w, R, A, H, z = 0) {
      if (!(d && d.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let k = Te.get(d).__webglFramebuffer;
      if (d.isWebGLCubeRenderTarget && H !== void 0 && (k = k[H]), k) if (x >= 0 && x <= d.width - w && y >= 0 && y <= d.height - R) {
        Ae.bindFramebuffer(D.FRAMEBUFFER, k);
        const W = d.textures[z], J = W.format, K = W.type;
        if (!ze.textureFormatReadable(J)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ze.textureTypeReadable(K)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        const re = D.createBuffer();
        D.bindBuffer(D.PIXEL_PACK_BUFFER, re), D.bufferData(D.PIXEL_PACK_BUFFER, A.byteLength, D.STREAM_READ), d.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + z), D.readPixels(x, y, w, R, Pe.convert(J), Pe.convert(K), 0);
        const me = V !== null ? Te.get(V).__webglFramebuffer : null;
        Ae.bindFramebuffer(D.FRAMEBUFFER, me);
        const le = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return D.flush(), await ou(D, le, 4), D.bindBuffer(D.PIXEL_PACK_BUFFER, re), D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, A), D.deleteBuffer(re), D.deleteSync(le), A;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(d, x = null, y = 0) {
      const w = Math.pow(2, -y), R = Math.floor(d.image.width * w), A = Math.floor(d.image.height * w), H = x !== null ? x.x : 0, z = x !== null ? x.y : 0;
      Ye.setTexture2D(d, 0), D.copyTexSubImage2D(D.TEXTURE_2D, y, 0, 0, H, z, R, A), Ae.unbindTexture();
    };
    const hn = D.createFramebuffer(), m = D.createFramebuffer();
    this.copyTextureToTexture = function(d, x, y = null, w = null, R = 0, A = null) {
      A === null && (R !== 0 ? (As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), A = R, R = 0) : A = 0);
      let H, z, k, W, J, K, re, me, le;
      const he = d.isCompressedTexture ? d.mipmaps[A] : d.image;
      if (y !== null) H = y.max.x - y.min.x, z = y.max.y - y.min.y, k = y.isBox3 ? y.max.z - y.min.z : 1, W = y.min.x, J = y.min.y, K = y.isBox3 ? y.min.z : 0;
      else {
        const tt = Math.pow(2, -R);
        H = Math.floor(he.width * tt), z = Math.floor(he.height * tt), d.isDataArrayTexture ? k = he.depth : d.isData3DTexture ? k = Math.floor(he.depth * tt) : k = 1, W = 0, J = 0, K = 0;
      }
      w !== null ? (re = w.x, me = w.y, le = w.z) : (re = 0, me = 0, le = 0);
      const ve = Pe.convert(x.format), ge = Pe.convert(x.type);
      let Fe;
      x.isData3DTexture ? (Ye.setTexture3D(x, 0), Fe = D.TEXTURE_3D) : x.isDataArrayTexture || x.isCompressedArrayTexture ? (Ye.setTexture2DArray(x, 0), Fe = D.TEXTURE_2D_ARRAY) : (Ye.setTexture2D(x, 0), Fe = D.TEXTURE_2D), D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, x.flipY), D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), D.pixelStorei(D.UNPACK_ALIGNMENT, x.unpackAlignment);
      const Ne = D.getParameter(D.UNPACK_ROW_LENGTH), Ke = D.getParameter(D.UNPACK_IMAGE_HEIGHT), ke = D.getParameter(D.UNPACK_SKIP_PIXELS), it = D.getParameter(D.UNPACK_SKIP_ROWS), vt = D.getParameter(D.UNPACK_SKIP_IMAGES);
      D.pixelStorei(D.UNPACK_ROW_LENGTH, he.width), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, he.height), D.pixelStorei(D.UNPACK_SKIP_PIXELS, W), D.pixelStorei(D.UNPACK_SKIP_ROWS, J), D.pixelStorei(D.UNPACK_SKIP_IMAGES, K);
      const He = d.isDataArrayTexture || d.isData3DTexture, Ve = x.isDataArrayTexture || x.isData3DTexture;
      if (d.isDepthTexture) {
        const tt = Te.get(d), gt = Te.get(x), Tt = Te.get(tt.__renderTarget), Ht = Te.get(gt.__renderTarget);
        Ae.bindFramebuffer(D.READ_FRAMEBUFFER, Tt.__webglFramebuffer), Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER, Ht.__webglFramebuffer);
        for (let Zt = 0; Zt < k; Zt++) He && (D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Te.get(d).__webglTexture, R, K + Zt), D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, Te.get(x).__webglTexture, A, le + Zt)), D.blitFramebuffer(W, J, H, z, re, me, H, z, D.DEPTH_BUFFER_BIT, D.NEAREST);
        Ae.bindFramebuffer(D.READ_FRAMEBUFFER, null), Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else if (R !== 0 || d.isRenderTargetTexture || Te.has(d)) {
        const tt = Te.get(d), gt = Te.get(x);
        Ae.bindFramebuffer(D.READ_FRAMEBUFFER, hn), Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER, m);
        for (let Tt = 0; Tt < k; Tt++) He ? D.framebufferTextureLayer(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, tt.__webglTexture, R, K + Tt) : D.framebufferTexture2D(D.READ_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, tt.__webglTexture, R), Ve ? D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, gt.__webglTexture, A, le + Tt) : D.framebufferTexture2D(D.DRAW_FRAMEBUFFER, D.COLOR_ATTACHMENT0, D.TEXTURE_2D, gt.__webglTexture, A), R !== 0 ? D.blitFramebuffer(W, J, H, z, re, me, H, z, D.COLOR_BUFFER_BIT, D.NEAREST) : Ve ? D.copyTexSubImage3D(Fe, A, re, me, le + Tt, W, J, H, z) : D.copyTexSubImage2D(Fe, A, re, me, W, J, H, z);
        Ae.bindFramebuffer(D.READ_FRAMEBUFFER, null), Ae.bindFramebuffer(D.DRAW_FRAMEBUFFER, null);
      } else Ve ? d.isDataTexture || d.isData3DTexture ? D.texSubImage3D(Fe, A, re, me, le, H, z, k, ve, ge, he.data) : x.isCompressedArrayTexture ? D.compressedTexSubImage3D(Fe, A, re, me, le, H, z, k, ve, he.data) : D.texSubImage3D(Fe, A, re, me, le, H, z, k, ve, ge, he) : d.isDataTexture ? D.texSubImage2D(D.TEXTURE_2D, A, re, me, H, z, ve, ge, he.data) : d.isCompressedTexture ? D.compressedTexSubImage2D(D.TEXTURE_2D, A, re, me, he.width, he.height, ve, he.data) : D.texSubImage2D(D.TEXTURE_2D, A, re, me, H, z, ve, ge, he);
      D.pixelStorei(D.UNPACK_ROW_LENGTH, Ne), D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, Ke), D.pixelStorei(D.UNPACK_SKIP_PIXELS, ke), D.pixelStorei(D.UNPACK_SKIP_ROWS, it), D.pixelStorei(D.UNPACK_SKIP_IMAGES, vt), A === 0 && x.generateMipmaps && D.generateMipmap(Fe), Ae.unbindTexture();
    }, this.initRenderTarget = function(d) {
      Te.get(d).__webglFramebuffer === void 0 && Ye.setupRenderTarget(d);
    }, this.initTexture = function(d) {
      d.isCubeTexture ? Ye.setTextureCube(d, 0) : d.isData3DTexture ? Ye.setTexture3D(d, 0) : d.isDataArrayTexture || d.isCompressedArrayTexture ? Ye.setTexture2DArray(d, 0) : Ye.setTexture2D(d, 0), Ae.unbindTexture();
    }, this.resetState = function() {
      O = 0, N = 0, V = null, Ae.reset(), xe.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return gn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = rt._getDrawingBufferColorSpace(e), t.unpackColorSpace = rt._getUnpackColorSpace();
  }
}
const tc = { type: "change" }, Na = { type: "start" }, Xc = { type: "end" }, fr = new Rs(), nc = new Kn(), f_ = Math.cos(70 * Ec.DEG2RAD), At = new B(), Vt = 2 * Math.PI, ft = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, po = 1e-6;
class p_ extends Rd {
  constructor(e, t = null) {
    super(e, t), this.state = ft.NONE, this.target = new B(), this.cursor = new B(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Bi.ROTATE, MIDDLE: Bi.DOLLY, RIGHT: Bi.PAN }, this.touches = { ONE: Ni.ROTATE, TWO: Ni.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new B(), this._lastQuaternion = new vn(), this._lastTargetPosition = new B(), this._quat = new vn().setFromUnitVectors(e.up, new B(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Cl(), this._sphericalDelta = new Cl(), this._scale = 1, this._panOffset = new B(), this._rotateStart = new Ge(), this._rotateEnd = new Ge(), this._rotateDelta = new Ge(), this._panStart = new Ge(), this._panEnd = new Ge(), this._panDelta = new Ge(), this._dollyStart = new Ge(), this._dollyEnd = new Ge(), this._dollyDelta = new Ge(), this._dollyDirection = new B(), this._mouse = new Ge(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = g_.bind(this), this._onPointerDown = m_.bind(this), this._onPointerUp = __.bind(this), this._onContextMenu = T_.bind(this), this._onMouseWheel = M_.bind(this), this._onKeyDown = S_.bind(this), this._onTouchStart = y_.bind(this), this._onTouchMove = E_.bind(this), this._onMouseDown = x_.bind(this), this._onMouseMove = v_.bind(this), this._interceptControlDown = b_.bind(this), this._interceptControlUp = A_.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  connect(e) {
    super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(tc), this.update(), this.state = ft.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    At.copy(t).sub(this.target), At.applyQuaternion(this._quat), this._spherical.setFromVector3(At), this.autoRotate && this.state === ft.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Vt : n > Math.PI && (n -= Vt), i < -Math.PI ? i += Vt : i > Math.PI && (i -= Vt), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius;
    }
    if (At.setFromSpherical(this._spherical), At.applyQuaternion(this._quatInverse), t.copy(this.target).add(At), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = At.length();
        o = this._clampDistance(a * this._scale);
        const c = a - o;
        this.object.position.addScaledVector(this._dollyDirection, c), this.object.updateMatrixWorld(), r = !!c;
      } else if (this.object.isOrthographicCamera) {
        const a = new B(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const c = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = c !== this.object.zoom;
        const l = new B(this._mouse.x, this._mouse.y, 0);
        l.unproject(this.object), this.object.position.sub(l).add(a), this.object.updateMatrixWorld(), o = At.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (fr.origin.copy(this.object.position), fr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(fr.direction)) < f_ ? this.object.lookAt(this.target) : (nc.setFromNormalAndCoplanarPoint(this.object.up, this.target), fr.intersectPlane(nc, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > po || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > po || this._lastTargetPosition.distanceToSquared(this.target) > po ? (this.dispatchEvent(tc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Vt / 60 * this.autoRotateSpeed * e : Vt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    At.setFromMatrixColumn(t, 0), At.multiplyScalar(-e), this._panOffset.add(At);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? At.setFromMatrixColumn(t, 1) : (At.setFromMatrixColumn(t, 0), At.crossVectors(this.object.up, At)), At.multiplyScalar(e), this._panOffset.add(At);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      At.copy(i).sub(this.target);
      let r = At.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, o = n.width, a = n.height;
    this._mouse.x = i / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Vt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Vt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Vt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Vt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Vt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (e.pageX + t.x) * 0.5, a = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new Ge(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function m_(s) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s) && (this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s)));
}
function g_(s) {
  this.enabled !== false && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function __(s) {
  switch (this._removePointer(s), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Xc), this.state = ft.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function x_(s) {
  let e;
  switch (s.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Bi.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(s), this.state = ft.DOLLY;
      break;
    case Bi.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = ft.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = ft.ROTATE;
      }
      break;
    case Bi.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = ft.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = ft.PAN;
      }
      break;
    default:
      this.state = ft.NONE;
  }
  this.state !== ft.NONE && this.dispatchEvent(Na);
}
function v_(s) {
  switch (this.state) {
    case ft.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(s);
      break;
    case ft.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(s);
      break;
    case ft.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function M_(s) {
  this.enabled === false || this.enableZoom === false || this.state !== ft.NONE || (s.preventDefault(), this.dispatchEvent(Na), this._handleMouseWheel(this._customWheelEvent(s)), this.dispatchEvent(Xc));
}
function S_(s) {
  this.enabled !== false && this._handleKeyDown(s);
}
function y_(s) {
  switch (this._trackPointer(s), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ni.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(s), this.state = ft.TOUCH_ROTATE;
          break;
        case Ni.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(s), this.state = ft.TOUCH_PAN;
          break;
        default:
          this.state = ft.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ni.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(s), this.state = ft.TOUCH_DOLLY_PAN;
          break;
        case Ni.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(s), this.state = ft.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = ft.NONE;
      }
      break;
    default:
      this.state = ft.NONE;
  }
  this.state !== ft.NONE && this.dispatchEvent(Na);
}
function E_(s) {
  switch (this._trackPointer(s), this.state) {
    case ft.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(s), this.update();
      break;
    case ft.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(s), this.update();
      break;
    case ft.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(s), this.update();
      break;
    case ft.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(s), this.update();
      break;
    default:
      this.state = ft.NONE;
  }
}
function T_(s) {
  this.enabled !== false && s.preventDefault();
}
function b_(s) {
  s.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function A_(s) {
  s.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function ic(s, e) {
  if (e === Dh) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === ra || e === Mc) {
    let t = s.getIndex();
    if (t === null) {
      const o = [], a = s.getAttribute("position");
      if (a !== void 0) {
        for (let c = 0; c < a.count; c++) o.push(c);
        s.setIndex(o), t = s.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === ra) for (let o = 1; o <= n; o++) i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1));
    else for (let o = 0; o < n; o++) o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class w_ extends _i {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new D_(t);
    }), this.register(function(t) {
      return new L_(t);
    }), this.register(function(t) {
      return new V_(t);
    }), this.register(function(t) {
      return new G_(t);
    }), this.register(function(t) {
      return new W_(t);
    }), this.register(function(t) {
      return new N_(t);
    }), this.register(function(t) {
      return new F_(t);
    }), this.register(function(t) {
      return new O_(t);
    }), this.register(function(t) {
      return new B_(t);
    }), this.register(function(t) {
      return new I_(t);
    }), this.register(function(t) {
      return new k_(t);
    }), this.register(function(t) {
      return new U_(t);
    }), this.register(function(t) {
      return new H_(t);
    }), this.register(function(t) {
      return new z_(t);
    }), this.register(function(t) {
      return new C_(t);
    }), this.register(function(t) {
      return new X_(t);
    }), this.register(function(t) {
      return new Y_(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let o;
    if (this.resourcePath !== "") o = this.resourcePath;
    else if (this.path !== "") {
      const l = _s.extractUrlBase(e);
      o = _s.resolveURL(l, this.path);
    } else o = _s.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }, c = new Ra(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(this.withCredentials), c.load(e, function(l) {
      try {
        r.parse(l, o, function(u) {
          t(u), r.manager.itemEnd(e);
        }, a);
      } catch (u) {
        a(u);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const o = {}, a = {}, c = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (c.decode(new Uint8Array(e, 0, 4)) === Yc) {
      try {
        o[st.KHR_BINARY_GLTF] = new q_(e);
      } catch (h) {
        i && i(h);
        return;
      }
      r = JSON.parse(o[st.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(c.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new o0(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](l);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, o[h.name] = true;
    }
    if (r.extensionsUsed) for (let u = 0; u < r.extensionsUsed.length; ++u) {
      const h = r.extensionsUsed[u], f = r.extensionsRequired || [];
      switch (h) {
        case st.KHR_MATERIALS_UNLIT:
          o[h] = new P_();
          break;
        case st.KHR_DRACO_MESH_COMPRESSION:
          o[h] = new K_(r, this.dracoLoader);
          break;
        case st.KHR_TEXTURE_TRANSFORM:
          o[h] = new Z_();
          break;
        case st.KHR_MESH_QUANTIZATION:
          o[h] = new j_();
          break;
        default:
          f.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
      }
    }
    l.setExtensions(o), l.setPlugins(a), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function R_() {
  let s = {};
  return { get: function(e) {
    return s[e];
  }, add: function(e, t) {
    s[e] = t;
  }, remove: function(e) {
    delete s[e];
  }, removeAll: function() {
    s = {};
  } };
}
const st = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class C_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, c = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let l;
    const u = new qe(16777215);
    c.color !== void 0 && u.setRGB(c.color[0], c.color[1], c.color[2], St);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        l = new md(u), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        l = new fd(u), l.distance = h;
        break;
      case "spot":
        l = new ud(u), l.distance = h, c.spot = c.spot || {}, c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0, c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4, l.angle = c.spot.outerConeAngle, l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle, l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return l.position.set(0, 0, 0), un(l, c), c.intensity !== void 0 && (l.intensity = c.intensity), l.name = t.createUniqueName(c.name || "light_" + e), i = Promise.resolve(l), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light;
    return a === void 0 ? null : this._loadLight(a).then(function(c) {
      return n._getNodeRef(t.cache, a, c);
    });
  }
}
class P_ {
  constructor() {
    this.name = st.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return di;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new qe(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const o = r.baseColorFactor;
        e.color.setRGB(o[0], o[1], o[2], St), e.opacity = o[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, Lt));
    }
    return Promise.all(i);
  }
}
class I_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class D_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) {
      const a = o.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Ge(a, a);
    }
    return Promise.all(r);
  }
}
class L_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class U_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class N_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new qe(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const o = i.extensions[this.name];
    if (o.sheenColorFactor !== void 0) {
      const a = o.sheenColorFactor;
      t.sheenColor.setRGB(a[0], a[1], a[2], St);
    }
    return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Lt)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r);
  }
}
class F_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r);
  }
}
class O_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
    const a = o.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new qe().setRGB(a[0], a[1], a[2], St), Promise.all(r);
  }
}
class B_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class k_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture));
    const a = o.specularColorFactor || [1, 1, 1];
    return t.specularColor = new qe().setRGB(a[0], a[1], a[2], St), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Lt)), Promise.all(r);
  }
}
class z_ {
  constructor(e) {
    this.parser = e, this.name = st.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r);
  }
}
class H_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : En;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], o = i.extensions[this.name];
    return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r);
  }
}
class V_ {
  constructor(e) {
    this.parser = e, this.name = st.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], o = t.options.ktx2Loader;
    if (!o) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, o);
  }
}
class G_ {
  constructor(e) {
    this.parser = e, this.name = st.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = i.images[o.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return n.loadTextureImage(e, o.source, c);
  }
}
class W_ {
  constructor(e) {
    this.parser = e, this.name = st.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const o = r.extensions[t], a = i.images[o.source];
    let c = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (c = l);
    }
    return n.loadTextureImage(e, o.source, c);
  }
}
class X_ {
  constructor(e) {
    this.name = st.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder;
      if (!o || !o.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const c = i.byteOffset || 0, l = i.byteLength || 0, u = i.count, h = i.byteStride, f = new Uint8Array(a, c, l);
        return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(u, h, f, i.mode, i.filter).then(function(g) {
          return g.buffer;
        }) : o.ready.then(function() {
          const g = new ArrayBuffer(u * h);
          return o.decodeGltfBuffer(new Uint8Array(g), u, h, f, i.mode, i.filter), g;
        });
      });
    } else return null;
  }
}
class Y_ {
  constructor(e) {
    this.name = st.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives) if (l.mode !== $t.TRIANGLES && l.mode !== $t.TRIANGLE_STRIP && l.mode !== $t.TRIANGLE_FAN && l.mode !== void 0) return null;
    const o = n.extensions[this.name].attributes, a = [], c = {};
    for (const l in o) a.push(this.parser.getDependency("accessor", o[l]).then((u) => (c[l] = u, c[l])));
    return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then((l) => {
      const u = l.pop(), h = u.isGroup ? u.children : [u], f = l[0].count, g = [];
      for (const v of h) {
        const S = new Qe(), _ = new B(), p = new vn(), I = new B(1, 1, 1), P = new zu(v.geometry, v.material, f);
        for (let E = 0; E < f; E++) c.TRANSLATION && _.fromBufferAttribute(c.TRANSLATION, E), c.ROTATION && p.fromBufferAttribute(c.ROTATION, E), c.SCALE && I.fromBufferAttribute(c.SCALE, E), P.setMatrixAt(E, S.compose(_, p, I));
        for (const E in c) if (E === "_COLOR_0") {
          const L = c[E];
          P.instanceColor = new aa(L.array, L.itemSize, L.normalized);
        } else E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && v.geometry.setAttribute(E, c[E]);
        Mt.prototype.copy.call(P, v), this.parser.assignFinalMaterial(P), g.push(P);
      }
      return u.isGroup ? (u.clear(), u.add(...g), u) : g[0];
    }));
  }
}
const Yc = "glTF", ds = 12, sc = { JSON: 1313821514, BIN: 5130562 };
class q_ {
  constructor(e) {
    this.name = st.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ds), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== Yc) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - ds, r = new DataView(e, ds);
    let o = 0;
    for (; o < i; ) {
      const a = r.getUint32(o, true);
      o += 4;
      const c = r.getUint32(o, true);
      if (o += 4, c === sc.JSON) {
        const l = new Uint8Array(e, ds + o, a);
        this.content = n.decode(l);
      } else if (c === sc.BIN) {
        const l = ds + o;
        this.body = e.slice(l, l + a);
      }
      o += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class K_ {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = st.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, c = {}, l = {};
    for (const u in o) {
      const h = ha[u] || u.toLowerCase();
      a[h] = o[u];
    }
    for (const u in e.attributes) {
      const h = ha[u] || u.toLowerCase();
      if (o[u] !== void 0) {
        const f = n.accessors[e.attributes[u]], g = Hi[f.componentType];
        l[h] = g.name, c[h] = f.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(u) {
      return new Promise(function(h, f) {
        i.decodeDracoFile(u, function(g) {
          for (const v in g.attributes) {
            const S = g.attributes[v], _ = c[v];
            _ !== void 0 && (S.normalized = _);
          }
          h(g);
        }, a, l, St, f);
      });
    });
  }
}
class Z_ {
  constructor() {
    this.name = st.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class j_ {
  constructor() {
    this.name = st.KHR_MESH_QUANTIZATION;
  }
}
class qc extends Ps {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let o = 0; o !== i; o++) t[o] = n[r + o];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, c = a * 2, l = a * 3, u = i - t, h = (n - t) / u, f = h * h, g = f * h, v = e * l, S = v - l, _ = -2 * g + 3 * f, p = g - f, I = 1 - _, P = p - f + h;
    for (let E = 0; E !== a; E++) {
      const L = o[S + E + a], O = o[S + E + c] * u, N = o[v + E + a], V = o[v + E] * u;
      r[E] = I * L + P * O + _ * N + p * V;
    }
    return r;
  }
}
const $_ = new vn();
class J_ extends qc {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return $_.fromArray(r).normalize().toArray(r), r;
  }
}
const $t = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Hi = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, rc = { 9728: kt, 9729: It, 9984: fc, 9985: mr, 9986: fs, 9987: mn }, oc = { 33071: pn, 33648: yr, 10497: Yi }, mo = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, ha = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Yn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, Q_ = { CUBICSPLINE: void 0, LINEAR: Ts, STEP: Es }, go = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function e0(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new wa({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: Bn })), s.DefaultMaterial;
}
function oi(s, e, t) {
  for (const n in t.extensions) s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function un(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function t0(s, e, t) {
  let n = false, i = false, r = false;
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (h.POSITION !== void 0 && (n = true), h.NORMAL !== void 0 && (i = true), h.COLOR_0 !== void 0 && (r = true), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const o = [], a = [], c = [];
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (n) {
      const f = h.POSITION !== void 0 ? t.getDependency("accessor", h.POSITION) : s.attributes.position;
      o.push(f);
    }
    if (i) {
      const f = h.NORMAL !== void 0 ? t.getDependency("accessor", h.NORMAL) : s.attributes.normal;
      a.push(f);
    }
    if (r) {
      const f = h.COLOR_0 !== void 0 ? t.getDependency("accessor", h.COLOR_0) : s.attributes.color;
      c.push(f);
    }
  }
  return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c)]).then(function(l) {
    const u = l[0], h = l[1], f = l[2];
    return n && (s.morphAttributes.position = u), i && (s.morphAttributes.normal = h), r && (s.morphAttributes.color = f), s.morphTargetsRelative = true, s;
  });
}
function n0(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++) s.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function i0(s) {
  let e;
  const t = s.extensions && s.extensions[st.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + _o(t.attributes) : e = s.indices + ":" + _o(s.attributes) + ":" + s.mode, s.targets !== void 0) for (let n = 0, i = s.targets.length; n < i; n++) e += ":" + _o(s.targets[n]);
  return e;
}
function _o(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function ua(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function s0(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : s.search(/\.ktx2($|\?)/i) > 0 || s.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const r0 = new Qe();
class o0 {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new R_(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = -1, r = false, o = -1;
    if (typeof navigator < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === true;
      const c = a.match(/Version\/(\d+)/);
      i = n && c ? parseInt(c[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && o < 98 ? this.textureLoader = new cd(this.options.manager) : this.textureLoader = new gd(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Ra(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(o) {
      return o._markDefs && o._markDefs();
    }), Promise.all(this._invokeAll(function(o) {
      return o.beforeRoot && o.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(o) {
      const a = { scene: o[0][i.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: i.asset, parser: n, userData: {} };
      return oi(r, a, i), un(a, i), Promise.all(n._invokeAll(function(c) {
        return c.afterRoot && c.afterRoot(a);
      })).then(function() {
        for (const c of a.scenes) c.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i].joints;
      for (let a = 0, c = o.length; a < c; a++) e[o[a]].isBone = true;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const o = e[i];
      o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = true)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (o, a) => {
      const c = this.associations.get(o);
      c != null && this.associations.set(a, c);
      for (const [l, u] of o.children.entries()) r(u, a.children[l]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i) throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, o) {
        return n.getDependency(e, o);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, o) {
      n.load(_s.resolveURL(t.uri, i.path), r, void 0, function() {
        o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const o = mo[i.type], a = Hi[i.componentType], c = i.normalized === true, l = new a(i.count * o);
      return Promise.resolve(new zt(l, o, c));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(o) {
      const a = o[0], c = mo[i.type], l = Hi[i.componentType], u = l.BYTES_PER_ELEMENT, h = u * c, f = i.byteOffset || 0, g = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, v = i.normalized === true;
      let S, _;
      if (g && g !== h) {
        const p = Math.floor(f / g), I = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count;
        let P = t.cache.get(I);
        P || (S = new l(a, p * g, i.count * g / u), P = new Nu(S, g / u), t.cache.add(I, P)), _ = new ya(P, c, f % g / u, v);
      } else a === null ? S = new l(i.count * c) : S = new l(a, f, i.count * c), _ = new zt(S, c, v);
      if (i.sparse !== void 0) {
        const p = mo.SCALAR, I = Hi[i.sparse.indices.componentType], P = i.sparse.indices.byteOffset || 0, E = i.sparse.values.byteOffset || 0, L = new I(o[1], P, i.sparse.count * p), O = new l(o[2], E, i.sparse.count * c);
        a !== null && (_ = new zt(_.array.slice(), _.itemSize, _.normalized)), _.normalized = false;
        for (let N = 0, V = L.length; N < V; N++) {
          const b = L[N];
          if (_.setX(b, O[N * c]), c >= 2 && _.setY(b, O[N * c + 1]), c >= 3 && _.setZ(b, O[N * c + 2]), c >= 4 && _.setW(b, O[N * c + 3]), c >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        _.normalized = v;
      }
      return _;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r];
    let a = this.textureLoader;
    if (o.uri) {
      const c = n.manager.getHandler(o.uri);
      c !== null && (a = c);
    }
    return this.loadTextureImage(e, r, a);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, o = r.textures[e], a = r.images[t], c = (a.uri || a.bufferView) + ":" + o.sampler;
    if (this.textureCache[c]) return this.textureCache[c];
    const l = this.loadImageSource(t, n).then(function(u) {
      u.flipY = false, u.name = o.name || a.name || "", u.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === false && (u.name = a.uri);
      const f = (r.samplers || {})[o.sampler] || {};
      return u.magFilter = rc[f.magFilter] || It, u.minFilter = rc[f.minFilter] || mn, u.wrapS = oc[f.wrapS] || Yi, u.wrapT = oc[f.wrapT] || Yi, u.generateMipmaps = !u.isCompressedTexture && u.minFilter !== kt && u.minFilter !== It, i.associations.set(u, { textures: e }), u;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h) => h.clone());
    const o = i.images[e], a = self.URL || self.webkitURL;
    let c = o.uri || "", l = false;
    if (o.bufferView !== void 0) c = n.getDependency("bufferView", o.bufferView).then(function(h) {
      l = true;
      const f = new Blob([h], { type: o.mimeType });
      return c = a.createObjectURL(f), c;
    });
    else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const u = Promise.resolve(c).then(function(h) {
      return new Promise(function(f, g) {
        let v = f;
        t.isImageBitmapLoader === true && (v = function(S) {
          const _ = new Dt(S);
          _.needsUpdate = true, f(_);
        }), t.load(_s.resolveURL(h, r.path), v, void 0, g);
      });
    }).then(function(h) {
      return l === true && a.revokeObjectURL(c), un(h, o), h.userData.mimeType = o.mimeType || s0(o.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", c), h;
    });
    return this.sourceCache[e] = u, u;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(o) {
      if (!o) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[st.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[st.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const c = r.associations.get(o);
          o = r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, c);
        }
      }
      return i !== void 0 && (o.colorSpace = i), e[t] = o, o;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Nc(), _n.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, c.sizeAttenuation = false, this.cache.add(a, c)), n = c;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(a);
      c || (c = new Uc(), _n.prototype.copy.call(c, n), c.color.copy(n.color), c.map = n.map, this.cache.add(a, c)), n = c;
    }
    if (i || r || o) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:");
      let c = this.cache.get(a);
      c || (c = n.clone(), r && (c.vertexColors = true), o && (c.flatShading = true), i && (c.normalScale && (c.normalScale.y *= -1), c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)), this.cache.add(a, c), this.associations.set(c, this.associations.get(n))), n = c;
    }
    e.material = n;
  }
  getMaterialType() {
    return wa;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let o;
    const a = {}, c = r.extensions || {}, l = [];
    if (c[st.KHR_MATERIALS_UNLIT]) {
      const h = i[st.KHR_MATERIALS_UNLIT];
      o = h.getMaterialType(), l.push(h.extendParams(a, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (a.color = new qe(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const f = h.baseColorFactor;
        a.color.setRGB(f[0], f[1], f[2], St), a.opacity = f[3];
      }
      h.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", h.baseColorTexture, Lt)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), o = this._invokeOne(function(f) {
        return f.getMaterialType && f.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(f) {
        return f.extendMaterialParams && f.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === true && (a.side = fn);
    const u = r.alphaMode || go.OPAQUE;
    if (u === go.BLEND ? (a.transparent = true, a.depthWrite = false) : (a.transparent = false, u === go.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && o !== di && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new Ge(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && o !== di && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== di) {
      const h = r.emissiveFactor;
      a.emissive = new qe().setRGB(h[0], h[1], h[2], St);
    }
    return r.emissiveTexture !== void 0 && o !== di && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Lt)), Promise.all(l).then(function() {
      const h = new o(a);
      return r.name && (h.name = r.name), un(h, r), t.associations.set(h, { materials: e }), r.extensions && oi(i, h, r), h;
    });
  }
  createUniqueName(e) {
    const t = ht.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(c) {
        return ac(c, a, t);
      });
    }
    const o = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a], u = i0(l), h = i[u];
      if (h) o.push(h.promise);
      else {
        let f;
        l.extensions && l.extensions[st.KHR_DRACO_MESH_COMPRESSION] ? f = r(l) : f = ac(new yn(), l, t), i[u] = { primitive: l, promise: f }, o.push(f);
      }
    }
    return Promise.all(o);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = [];
    for (let c = 0, l = o.length; c < l; c++) {
      const u = o[c].material === void 0 ? e0(this.cache) : this.getDependency("material", o[c].material);
      a.push(u);
    }
    return a.push(t.loadGeometries(o)), Promise.all(a).then(function(c) {
      const l = c.slice(0, c.length - 1), u = c[c.length - 1], h = [];
      for (let g = 0, v = u.length; g < v; g++) {
        const S = u[g], _ = o[g];
        let p;
        const I = l[g];
        if (_.mode === $t.TRIANGLES || _.mode === $t.TRIANGLE_STRIP || _.mode === $t.TRIANGLE_FAN || _.mode === void 0) p = r.isSkinnedMesh === true ? new Ou(S, I) : new Wt(S, I), p.isSkinnedMesh === true && p.normalizeSkinWeights(), _.mode === $t.TRIANGLE_STRIP ? p.geometry = ic(p.geometry, Mc) : _.mode === $t.TRIANGLE_FAN && (p.geometry = ic(p.geometry, ra));
        else if (_.mode === $t.LINES) p = new Wu(S, I);
        else if (_.mode === $t.LINE_STRIP) p = new Aa(S, I);
        else if (_.mode === $t.LINE_LOOP) p = new Xu(S, I);
        else if (_.mode === $t.POINTS) p = new Yu(S, I);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + _.mode);
        Object.keys(p.geometry.morphAttributes).length > 0 && n0(p, r), p.name = t.createUniqueName(r.name || "mesh_" + e), un(p, r), _.extensions && oi(i, p, _), t.assignFinalMaterial(p), h.push(p);
      }
      for (let g = 0, v = h.length; g < v; g++) t.associations.set(h[g], { meshes: e, primitives: g });
      if (h.length === 1) return r.extensions && oi(i, h[0], r), h[0];
      const f = new fi();
      r.extensions && oi(i, f, r), t.associations.set(f, { meshes: e });
      for (let g = 0, v = h.length; g < v; g++) f.add(h[g]);
      return f;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Bt(Ec.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ia(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), un(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), o = i, a = [], c = [];
      for (let l = 0, u = o.length; l < u; l++) {
        const h = o[l];
        if (h) {
          a.push(h);
          const f = new Qe();
          r !== null && f.fromArray(r.array, l * 16), c.push(f);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Ta(a, c);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], c = [], l = [], u = [];
    for (let h = 0, f = i.channels.length; h < f; h++) {
      const g = i.channels[h], v = i.samplers[g.sampler], S = g.target, _ = S.node, p = i.parameters !== void 0 ? i.parameters[v.input] : v.input, I = i.parameters !== void 0 ? i.parameters[v.output] : v.output;
      S.node !== void 0 && (o.push(this.getDependency("node", _)), a.push(this.getDependency("accessor", p)), c.push(this.getDependency("accessor", I)), l.push(v), u.push(S));
    }
    return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c), Promise.all(l), Promise.all(u)]).then(function(h) {
      const f = h[0], g = h[1], v = h[2], S = h[3], _ = h[4], p = [];
      for (let P = 0, E = f.length; P < E; P++) {
        const L = f[P], O = g[P], N = v[P], V = S[P], b = _[P];
        if (L === void 0) continue;
        L.updateMatrix && L.updateMatrix();
        const T = n._createAnimationTracks(L, O, N, V, b);
        if (T) for (let F = 0; F < T.length; F++) p.push(T[F]);
      }
      const I = new td(r, void 0, p);
      return un(I, i), I;
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const o = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && o.traverse(function(a) {
        if (a.isMesh) for (let c = 0, l = i.weights.length; c < l; c++) a.morphTargetInfluences[c] = i.weights[c];
      }), o;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || [];
    for (let l = 0, u = a.length; l < u; l++) o.push(n.getDependency("node", a[l]));
    const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(o), c]).then(function(l) {
      const u = l[0], h = l[1], f = l[2];
      f !== null && u.traverse(function(g) {
        g.isSkinnedMesh && g.bind(f, r0);
      });
      for (let g = 0, v = h.length; g < v; g++) u.add(h[g]);
      return u;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], c = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return c && a.push(c), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, r.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      a.push(l);
    }), this.nodeCache[e] = Promise.all(a).then(function(l) {
      let u;
      if (r.isBone === true ? u = new Lc() : l.length > 1 ? u = new fi() : l.length === 1 ? u = l[0] : u = new Mt(), u !== l[0]) for (let h = 0, f = l.length; h < f; h++) u.add(l[h]);
      if (r.name && (u.userData.name = r.name, u.name = o), un(u, r), r.extensions && oi(n, u, r), r.matrix !== void 0) {
        const h = new Qe();
        h.fromArray(r.matrix), u.applyMatrix4(h);
      } else r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
      if (!i.associations.has(u)) i.associations.set(u, {});
      else if (r.mesh !== void 0 && i.meshCache.refs[r.mesh] > 1) {
        const h = i.associations.get(u);
        i.associations.set(u, { ...h });
      }
      return i.associations.get(u).nodes = e, u;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new fi();
    n.name && (r.name = i.createUniqueName(n.name)), un(r, n), n.extensions && oi(t, r, n);
    const o = n.nodes || [], a = [];
    for (let c = 0, l = o.length; c < l; c++) a.push(i.getDependency("node", o[c]));
    return Promise.all(a).then(function(c) {
      for (let u = 0, h = c.length; u < h; u++) r.add(c[u]);
      const l = (u) => {
        const h = /* @__PURE__ */ new Map();
        for (const [f, g] of i.associations) (f instanceof _n || f instanceof Dt) && h.set(f, g);
        return u.traverse((f) => {
          const g = i.associations.get(f);
          g != null && h.set(f, g);
        }), h;
      };
      return i.associations = l(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const o = [], a = e.name ? e.name : e.uuid, c = [];
    Yn[r.path] === Yn.weights ? e.traverse(function(f) {
      f.morphTargetInfluences && c.push(f.name ? f.name : f.uuid);
    }) : c.push(a);
    let l;
    switch (Yn[r.path]) {
      case Yn.weights:
        l = Zi;
        break;
      case Yn.rotation:
        l = ji;
        break;
      case Yn.translation:
      case Yn.scale:
        l = $i;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Zi;
            break;
          case 2:
          case 3:
          default:
            l = $i;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? Q_[i.interpolation] : Ts, h = this._getArrayFromAccessor(n);
    for (let f = 0, g = c.length; f < g; f++) {
      const v = new l(c[f] + "." + Yn[r.path], t.array, h, u);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(v), o.push(v);
    }
    return o;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = ua(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, o = t.length; r < o; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ji ? J_ : qc;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function a0(s, e, t) {
  const n = e.attributes, i = new kn();
  if (n.POSITION !== void 0) {
    const a = t.json.accessors[n.POSITION], c = a.min, l = a.max;
    if (c !== void 0 && l !== void 0) {
      if (i.set(new B(c[0], c[1], c[2]), new B(l[0], l[1], l[2])), a.normalized) {
        const u = ua(Hi[a.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const a = new B(), c = new B();
    for (let l = 0, u = r.length; l < u; l++) {
      const h = r[l];
      if (h.POSITION !== void 0) {
        const f = t.json.accessors[h.POSITION], g = f.min, v = f.max;
        if (g !== void 0 && v !== void 0) {
          if (c.setX(Math.max(Math.abs(g[0]), Math.abs(v[0]))), c.setY(Math.max(Math.abs(g[1]), Math.abs(v[1]))), c.setZ(Math.max(Math.abs(g[2]), Math.abs(v[2]))), f.normalized) {
            const S = ua(Hi[f.componentType]);
            c.multiplyScalar(S);
          }
          a.max(c);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(a);
  }
  s.boundingBox = i;
  const o = new Sn();
  i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o;
}
function ac(s, e, t) {
  const n = e.attributes, i = [];
  function r(o, a) {
    return t.getDependency("accessor", o).then(function(c) {
      s.setAttribute(a, c);
    });
  }
  for (const o in n) {
    const a = ha[o] || o.toLowerCase();
    a in s.attributes || i.push(r(n[o], a));
  }
  if (e.indices !== void 0 && !s.index) {
    const o = t.getDependency("accessor", e.indices).then(function(a) {
      s.setIndex(a);
    });
    i.push(o);
  }
  return rt.workingColorSpace !== St && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`), un(s, e), a0(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? t0(s, e.targets, t) : s;
  });
}
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/
var Jt = Uint8Array, Oi = Uint16Array, l0 = Int32Array, Kc = new Jt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Zc = new Jt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), c0 = new Jt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), jc = function(s, e) {
  for (var t = new Oi(31), n = 0; n < 31; ++n) t[n] = e += 1 << s[n - 1];
  for (var i = new l0(t[30]), n = 1; n < 30; ++n) for (var r = t[n]; r < t[n + 1]; ++r) i[r] = r - t[n] << 5 | n;
  return { b: t, r: i };
}, $c = jc(Kc, 2), Jc = $c.b, h0 = $c.r;
Jc[28] = 258, h0[258] = 28;
var u0 = jc(Zc, 0), d0 = u0.b, da = new Oi(32768);
for (var _t = 0; _t < 32768; ++_t) {
  var qn = (_t & 43690) >> 1 | (_t & 21845) << 1;
  qn = (qn & 52428) >> 2 | (qn & 13107) << 2, qn = (qn & 61680) >> 4 | (qn & 3855) << 4, da[_t] = ((qn & 65280) >> 8 | (qn & 255) << 8) >> 1;
}
var xs = (function(s, e, t) {
  for (var n = s.length, i = 0, r = new Oi(e); i < n; ++i) s[i] && ++r[s[i] - 1];
  var o = new Oi(e);
  for (i = 1; i < e; ++i) o[i] = o[i - 1] + r[i - 1] << 1;
  var a;
  if (t) {
    a = new Oi(1 << e);
    var c = 15 - e;
    for (i = 0; i < n; ++i) if (s[i]) for (var l = i << 4 | s[i], u = e - s[i], h = o[s[i] - 1]++ << u, f = h | (1 << u) - 1; h <= f; ++h) a[da[h] >> c] = l;
  } else for (a = new Oi(n), i = 0; i < n; ++i) s[i] && (a[i] = da[o[s[i] - 1]++] >> 15 - s[i]);
  return a;
}), Is = new Jt(288);
for (var _t = 0; _t < 144; ++_t) Is[_t] = 8;
for (var _t = 144; _t < 256; ++_t) Is[_t] = 9;
for (var _t = 256; _t < 280; ++_t) Is[_t] = 7;
for (var _t = 280; _t < 288; ++_t) Is[_t] = 8;
var Qc = new Jt(32);
for (var _t = 0; _t < 32; ++_t) Qc[_t] = 5;
var f0 = xs(Is, 9, 1), p0 = xs(Qc, 5, 1), xo = function(s) {
  for (var e = s[0], t = 1; t < s.length; ++t) s[t] > e && (e = s[t]);
  return e;
}, sn = function(s, e, t) {
  var n = e / 8 | 0;
  return (s[n] | s[n + 1] << 8) >> (e & 7) & t;
}, vo = function(s, e) {
  var t = e / 8 | 0;
  return (s[t] | s[t + 1] << 8 | s[t + 2] << 16) >> (e & 7);
}, m0 = function(s) {
  return (s + 7) / 8 | 0;
}, g0 = function(s, e, t) {
  return (t == null || t > s.length) && (t = s.length), new Jt(s.subarray(e, t));
}, _0 = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], rn = function(s, e, t) {
  var n = new Error(e || _0[s]);
  if (n.code = s, Error.captureStackTrace && Error.captureStackTrace(n, rn), !t) throw n;
  return n;
}, x0 = function(s, e, t, n) {
  var i = s.length, r = 0;
  if (!i || e.f && !e.l) return t || new Jt(0);
  var o = !t, a = o || e.i != 2, c = e.i;
  o && (t = new Jt(i * 3));
  var l = function(je) {
    var yt = t.length;
    if (je > yt) {
      var D = new Jt(Math.max(yt * 2, je));
      D.set(t), t = D;
    }
  }, u = e.f || 0, h = e.p || 0, f = e.b || 0, g = e.l, v = e.d, S = e.m, _ = e.n, p = i * 8;
  do {
    if (!g) {
      u = sn(s, h, 1);
      var I = sn(s, h + 1, 3);
      if (h += 3, I) if (I == 1) g = f0, v = p0, S = 9, _ = 5;
      else if (I == 2) {
        var O = sn(s, h, 31) + 257, N = sn(s, h + 10, 15) + 4, V = O + sn(s, h + 5, 31) + 1;
        h += 14;
        for (var b = new Jt(V), T = new Jt(19), F = 0; F < N; ++F) T[c0[F]] = sn(s, h + F * 3, 7);
        h += N * 3;
        for (var X = xo(T), $ = (1 << X) - 1, ie = xs(T, X, 1), F = 0; F < V; ) {
          var te = ie[sn(s, h, $)];
          h += te & 15;
          var P = te >> 4;
          if (P < 16) b[F++] = P;
          else {
            var ee = 0, oe = 0;
            for (P == 16 ? (oe = 3 + sn(s, h, 3), h += 2, ee = b[F - 1]) : P == 17 ? (oe = 3 + sn(s, h, 7), h += 3) : P == 18 && (oe = 11 + sn(s, h, 127), h += 7); oe--; ) b[F++] = ee;
          }
        }
        var Z = b.subarray(0, O), pe = b.subarray(O);
        S = xo(Z), _ = xo(pe), g = xs(Z, S, 1), v = xs(pe, _, 1);
      } else rn(1);
      else {
        var P = m0(h) + 4, E = s[P - 4] | s[P - 3] << 8, L = P + E;
        if (L > i) {
          c && rn(0);
          break;
        }
        a && l(f + E), t.set(s.subarray(P, L), f), e.b = f += E, e.p = h = L * 8, e.f = u;
        continue;
      }
      if (h > p) {
        c && rn(0);
        break;
      }
    }
    a && l(f + 131072);
    for (var Me = (1 << S) - 1, Re = (1 << _) - 1, Oe = h; ; Oe = h) {
      var ee = g[vo(s, h) & Me], nt = ee >> 4;
      if (h += ee & 15, h > p) {
        c && rn(0);
        break;
      }
      if (ee || rn(2), nt < 256) t[f++] = nt;
      else if (nt == 256) {
        Oe = h, g = null;
        break;
      } else {
        var at = nt - 254;
        if (nt > 264) {
          var F = nt - 257, et = Kc[F];
          at = sn(s, h, (1 << et) - 1) + Jc[F], h += et;
        }
        var q = v[vo(s, h) & Re], se = q >> 4;
        q || rn(3), h += q & 15;
        var pe = d0[se];
        if (se > 3) {
          var et = Zc[se];
          pe += vo(s, h) & (1 << et) - 1, h += et;
        }
        if (h > p) {
          c && rn(0);
          break;
        }
        a && l(f + 131072);
        var ye = f + at;
        if (f < pe) {
          var Be = r - pe, Ie = Math.min(pe, ye);
          for (Be + f < 0 && rn(3); f < Ie; ++f) t[f] = n[Be + f];
        }
        for (; f < ye; ++f) t[f] = t[f - pe];
      }
    }
    e.l = g, e.p = Oe, e.b = f, e.f = u, g && (u = 1, e.m = S, e.d = v, e.n = _);
  } while (!u);
  return f != t.length && o ? g0(t, 0, f) : t.subarray(0, f);
}, v0 = new Jt(0), M0 = function(s, e) {
  return ((s[0] & 15) != 8 || s[0] >> 4 > 7 || (s[0] << 8 | s[1]) % 31) && rn(6, "invalid zlib data"), (s[1] >> 5 & 1) == 1 && rn(6, "invalid zlib data: " + (s[1] & 32 ? "need" : "unexpected") + " dictionary"), (s[1] >> 3 & 4) + 2;
};
function pr(s, e) {
  return x0(s.subarray(M0(s), -4), { i: 2 }, e, e);
}
var S0 = typeof TextDecoder < "u" && new TextDecoder(), y0 = 0;
try {
  S0.decode(v0, { stream: true }), y0 = 1;
} catch {
}
class E0 extends ld {
  constructor(e) {
    super(e), this.type = Un, this.outputFormat = Pt;
  }
  parse(e) {
    const b = Math.pow(2.7182818, 2.2);
    function T(m, d) {
      let x = 0;
      for (let w = 0; w < 65536; ++w) (w == 0 || m[w >> 3] & 1 << (w & 7)) && (d[x++] = w);
      const y = x - 1;
      for (; x < 65536; ) d[x++] = 0;
      return y;
    }
    function F(m) {
      for (let d = 0; d < 16384; d++) m[d] = {}, m[d].len = 0, m[d].lit = 0, m[d].p = null;
    }
    const X = { l: 0, c: 0, lc: 0 };
    function $(m, d, x, y, w) {
      for (; x < m; ) d = d << 8 | Pe(y, w), x += 8;
      x -= m, X.l = d >> x & (1 << m) - 1, X.c = d, X.lc = x;
    }
    const ie = new Array(59);
    function te(m) {
      for (let x = 0; x <= 58; ++x) ie[x] = 0;
      for (let x = 0; x < 65537; ++x) ie[m[x]] += 1;
      let d = 0;
      for (let x = 58; x > 0; --x) {
        const y = d + ie[x] >> 1;
        ie[x] = d, d = y;
      }
      for (let x = 0; x < 65537; ++x) {
        const y = m[x];
        y > 0 && (m[x] = y | ie[y]++ << 6);
      }
    }
    function ee(m, d, x, y, w, R) {
      const A = d;
      let H = 0, z = 0;
      for (; y <= w; y++) {
        if (A.value - d.value > x) return false;
        $(6, H, z, m, A);
        const k = X.l;
        if (H = X.c, z = X.lc, R[y] = k, k == 63) {
          if (A.value - d.value > x) throw new Error("Something wrong with hufUnpackEncTable");
          $(8, H, z, m, A);
          let W = X.l + 6;
          if (H = X.c, z = X.lc, y + W > w + 1) throw new Error("Something wrong with hufUnpackEncTable");
          for (; W--; ) R[y++] = 0;
          y--;
        } else if (k >= 59) {
          let W = k - 59 + 2;
          if (y + W > w + 1) throw new Error("Something wrong with hufUnpackEncTable");
          for (; W--; ) R[y++] = 0;
          y--;
        }
      }
      te(R);
    }
    function oe(m) {
      return m & 63;
    }
    function Z(m) {
      return m >> 6;
    }
    function pe(m, d, x, y) {
      for (; d <= x; d++) {
        const w = Z(m[d]), R = oe(m[d]);
        if (w >> R) throw new Error("Invalid table entry");
        if (R > 14) {
          const A = y[w >> R - 14];
          if (A.len) throw new Error("Invalid table entry");
          if (A.lit++, A.p) {
            const H = A.p;
            A.p = new Array(A.lit);
            for (let z = 0; z < A.lit - 1; ++z) A.p[z] = H[z];
          } else A.p = new Array(1);
          A.p[A.lit - 1] = d;
        } else if (R) {
          let A = 0;
          for (let H = 1 << 14 - R; H > 0; H--) {
            const z = y[(w << 14 - R) + A];
            if (z.len || z.p) throw new Error("Invalid table entry");
            z.len = R, z.lit = d, A++;
          }
        }
      }
      return true;
    }
    const Me = { c: 0, lc: 0 };
    function Re(m, d, x, y) {
      m = m << 8 | Pe(x, y), d += 8, Me.c = m, Me.lc = d;
    }
    const Oe = { c: 0, lc: 0 };
    function nt(m, d, x, y, w, R, A, H, z) {
      if (m == d) {
        y < 8 && (Re(x, y, w, R), x = Me.c, y = Me.lc), y -= 8;
        let k = x >> y;
        if (k = new Uint8Array([k])[0], H.value + k > z) return false;
        const W = A[H.value - 1];
        for (; k-- > 0; ) A[H.value++] = W;
      } else if (H.value < z) A[H.value++] = m;
      else return false;
      Oe.c = x, Oe.lc = y;
    }
    function at(m) {
      return m & 65535;
    }
    function et(m) {
      const d = at(m);
      return d > 32767 ? d - 65536 : d;
    }
    const q = { a: 0, b: 0 };
    function se(m, d) {
      const x = et(m), w = et(d), R = x + (w & 1) + (w >> 1), A = R, H = R - w;
      q.a = A, q.b = H;
    }
    function ye(m, d) {
      const x = at(m), y = at(d), w = x - (y >> 1) & 65535, R = y + w - 32768 & 65535;
      q.a = R, q.b = w;
    }
    function Be(m, d, x, y, w, R, A) {
      const H = A < 16384, z = x > w ? w : x;
      let k = 1, W, J;
      for (; k <= z; ) k <<= 1;
      for (k >>= 1, W = k, k >>= 1; k >= 1; ) {
        J = 0;
        const K = J + R * (w - W), re = R * k, me = R * W, le = y * k, he = y * W;
        let ve, ge, Fe, Ne;
        for (; J <= K; J += me) {
          let Ke = J;
          const ke = J + y * (x - W);
          for (; Ke <= ke; Ke += he) {
            const it = Ke + le, vt = Ke + re, He = vt + le;
            H ? (se(m[Ke + d], m[vt + d]), ve = q.a, Fe = q.b, se(m[it + d], m[He + d]), ge = q.a, Ne = q.b, se(ve, ge), m[Ke + d] = q.a, m[it + d] = q.b, se(Fe, Ne), m[vt + d] = q.a, m[He + d] = q.b) : (ye(m[Ke + d], m[vt + d]), ve = q.a, Fe = q.b, ye(m[it + d], m[He + d]), ge = q.a, Ne = q.b, ye(ve, ge), m[Ke + d] = q.a, m[it + d] = q.b, ye(Fe, Ne), m[vt + d] = q.a, m[He + d] = q.b);
          }
          if (x & k) {
            const it = Ke + re;
            H ? se(m[Ke + d], m[it + d]) : ye(m[Ke + d], m[it + d]), ve = q.a, m[it + d] = q.b, m[Ke + d] = ve;
          }
        }
        if (w & k) {
          let Ke = J;
          const ke = J + y * (x - W);
          for (; Ke <= ke; Ke += he) {
            const it = Ke + le;
            H ? se(m[Ke + d], m[it + d]) : ye(m[Ke + d], m[it + d]), ve = q.a, m[it + d] = q.b, m[Ke + d] = ve;
          }
        }
        W = k, k >>= 1;
      }
      return J;
    }
    function Ie(m, d, x, y, w, R, A, H, z) {
      let k = 0, W = 0;
      const J = A, K = Math.trunc(y.value + (w + 7) / 8);
      for (; y.value < K; ) for (Re(k, W, x, y), k = Me.c, W = Me.lc; W >= 14; ) {
        const me = k >> W - 14 & 16383, le = d[me];
        if (le.len) W -= le.len, nt(le.lit, R, k, W, x, y, H, z, J), k = Oe.c, W = Oe.lc;
        else {
          if (!le.p) throw new Error("hufDecode issues");
          let he;
          for (he = 0; he < le.lit; he++) {
            const ve = oe(m[le.p[he]]);
            for (; W < ve && y.value < K; ) Re(k, W, x, y), k = Me.c, W = Me.lc;
            if (W >= ve && Z(m[le.p[he]]) == (k >> W - ve & (1 << ve) - 1)) {
              W -= ve, nt(le.p[he], R, k, W, x, y, H, z, J), k = Oe.c, W = Oe.lc;
              break;
            }
          }
          if (he == le.lit) throw new Error("hufDecode issues");
        }
      }
      const re = 8 - w & 7;
      for (k >>= re, W -= re; W > 0; ) {
        const me = d[k << 14 - W & 16383];
        if (me.len) W -= me.len, nt(me.lit, R, k, W, x, y, H, z, J), k = Oe.c, W = Oe.lc;
        else throw new Error("hufDecode issues");
      }
      return true;
    }
    function je(m, d, x, y, w, R) {
      const A = { value: 0 }, H = x.value, z = we(d, x), k = we(d, x);
      x.value += 4;
      const W = we(d, x);
      if (x.value += 4, z < 0 || z >= 65537 || k < 0 || k >= 65537) throw new Error("Something wrong with HUF_ENCSIZE");
      const J = new Array(65537), K = new Array(16384);
      F(K);
      const re = y - (x.value - H);
      if (ee(m, x, re, z, k, J), W > 8 * (y - (x.value - H))) throw new Error("Something wrong with hufUncompress");
      pe(J, z, k, K), Ie(J, K, m, x, W, k, R, w, A);
    }
    function yt(m, d, x) {
      for (let y = 0; y < x; ++y) d[y] = m[d[y]];
    }
    function D(m) {
      for (let d = 1; d < m.length; d++) {
        const x = m[d - 1] + m[d] - 128;
        m[d] = x;
      }
    }
    function pt(m, d) {
      let x = 0, y = Math.floor((m.length + 1) / 2), w = 0;
      const R = m.length - 1;
      for (; !(w > R || (d[w++] = m[x++], w > R)); ) d[w++] = m[y++];
    }
    function We(m) {
      let d = m.byteLength;
      const x = new Array();
      let y = 0;
      const w = new DataView(m);
      for (; d > 0; ) {
        const R = w.getInt8(y++);
        if (R < 0) {
          const A = -R;
          d -= A + 1;
          for (let H = 0; H < A; H++) x.push(w.getUint8(y++));
        } else {
          const A = R;
          d -= 2;
          const H = w.getUint8(y++);
          for (let z = 0; z < A + 1; z++) x.push(H);
        }
      }
      return x;
    }
    function ze(m, d, x, y, w, R) {
      let A = new DataView(R.buffer);
      const H = x[m.idx[0]].width, z = x[m.idx[0]].height, k = 3, W = Math.floor(H / 8), J = Math.ceil(H / 8), K = Math.ceil(z / 8), re = H - (J - 1) * 8, me = z - (K - 1) * 8, le = { value: 0 }, he = new Array(k), ve = new Array(k), ge = new Array(k), Fe = new Array(k), Ne = new Array(k);
      for (let ke = 0; ke < k; ++ke) Ne[ke] = d[m.idx[ke]], he[ke] = ke < 1 ? 0 : he[ke - 1] + J * K, ve[ke] = new Float32Array(64), ge[ke] = new Uint16Array(64), Fe[ke] = new Uint16Array(J * 64);
      for (let ke = 0; ke < K; ++ke) {
        let it = 8;
        ke == K - 1 && (it = me);
        let vt = 8;
        for (let Ve = 0; Ve < J; ++Ve) {
          Ve == J - 1 && (vt = re);
          for (let tt = 0; tt < k; ++tt) ge[tt].fill(0), ge[tt][0] = w[he[tt]++], mt(le, y, ge[tt]), Te(ge[tt], ve[tt]), Ye(ve[tt]);
          Et(ve);
          for (let tt = 0; tt < k; ++tt) xt(ve[tt], Fe[tt], Ve * 64);
        }
        let He = 0;
        for (let Ve = 0; Ve < k; ++Ve) {
          const tt = x[m.idx[Ve]].type;
          for (let gt = 8 * ke; gt < 8 * ke + it; ++gt) {
            He = Ne[Ve][gt];
            for (let Tt = 0; Tt < W; ++Tt) {
              const Ht = Tt * 64 + (gt & 7) * 8;
              A.setUint16(He + 0 * tt, Fe[Ve][Ht + 0], true), A.setUint16(He + 2 * tt, Fe[Ve][Ht + 1], true), A.setUint16(He + 4 * tt, Fe[Ve][Ht + 2], true), A.setUint16(He + 6 * tt, Fe[Ve][Ht + 3], true), A.setUint16(He + 8 * tt, Fe[Ve][Ht + 4], true), A.setUint16(He + 10 * tt, Fe[Ve][Ht + 5], true), A.setUint16(He + 12 * tt, Fe[Ve][Ht + 6], true), A.setUint16(He + 14 * tt, Fe[Ve][Ht + 7], true), He += 16 * tt;
            }
          }
          if (W != J) for (let gt = 8 * ke; gt < 8 * ke + it; ++gt) {
            const Tt = Ne[Ve][gt] + 8 * W * 2 * tt, Ht = W * 64 + (gt & 7) * 8;
            for (let Zt = 0; Zt < vt; ++Zt) A.setUint16(Tt + Zt * 2 * tt, Fe[Ve][Ht + Zt], true);
          }
        }
      }
      const Ke = new Uint16Array(H);
      A = new DataView(R.buffer);
      for (let ke = 0; ke < k; ++ke) {
        x[m.idx[ke]].decoded = true;
        const it = x[m.idx[ke]].type;
        if (x[ke].type == 2) for (let vt = 0; vt < z; ++vt) {
          const He = Ne[ke][vt];
          for (let Ve = 0; Ve < H; ++Ve) Ke[Ve] = A.getUint16(He + Ve * 2 * it, true);
          for (let Ve = 0; Ve < H; ++Ve) A.setFloat32(He + Ve * 2 * it, Y(Ke[Ve]), true);
        }
      }
    }
    function Ae(m, d, x, y, w, R) {
      const A = new DataView(R.buffer), H = x[m], z = H.width, k = H.height, W = Math.ceil(z / 8), J = Math.ceil(k / 8), K = Math.floor(z / 8), re = z - (W - 1) * 8, me = k - (J - 1) * 8, le = { value: 0 };
      let he = 0;
      const ve = new Float32Array(64), ge = new Uint16Array(64), Fe = new Uint16Array(W * 64);
      for (let Ne = 0; Ne < J; ++Ne) {
        let Ke = 8;
        Ne == J - 1 && (Ke = me);
        for (let ke = 0; ke < W; ++ke) ge.fill(0), ge[0] = w[he++], mt(le, y, ge), Te(ge, ve), Ye(ve), xt(ve, Fe, ke * 64);
        for (let ke = 8 * Ne; ke < 8 * Ne + Ke; ++ke) {
          let it = d[m][ke];
          for (let vt = 0; vt < K; ++vt) {
            const He = vt * 64 + (ke & 7) * 8;
            for (let Ve = 0; Ve < 8; ++Ve) A.setUint16(it + Ve * 2 * H.type, Fe[He + Ve], true);
            it += 16 * H.type;
          }
          if (W != K) {
            const vt = K * 64 + (ke & 7) * 8;
            for (let He = 0; He < re; ++He) A.setUint16(it + He * 2 * H.type, Fe[vt + He], true);
          }
        }
      }
      H.decoded = true;
    }
    function mt(m, d, x) {
      let y, w = 1;
      for (; w < 64; ) y = d[m.value], y == 65280 ? w = 64 : y >> 8 == 255 ? w += y & 255 : (x[w] = y, w++), m.value++;
    }
    function Te(m, d) {
      d[0] = Y(m[0]), d[1] = Y(m[1]), d[2] = Y(m[5]), d[3] = Y(m[6]), d[4] = Y(m[14]), d[5] = Y(m[15]), d[6] = Y(m[27]), d[7] = Y(m[28]), d[8] = Y(m[2]), d[9] = Y(m[4]), d[10] = Y(m[7]), d[11] = Y(m[13]), d[12] = Y(m[16]), d[13] = Y(m[26]), d[14] = Y(m[29]), d[15] = Y(m[42]), d[16] = Y(m[3]), d[17] = Y(m[8]), d[18] = Y(m[12]), d[19] = Y(m[17]), d[20] = Y(m[25]), d[21] = Y(m[30]), d[22] = Y(m[41]), d[23] = Y(m[43]), d[24] = Y(m[9]), d[25] = Y(m[11]), d[26] = Y(m[18]), d[27] = Y(m[24]), d[28] = Y(m[31]), d[29] = Y(m[40]), d[30] = Y(m[44]), d[31] = Y(m[53]), d[32] = Y(m[10]), d[33] = Y(m[19]), d[34] = Y(m[23]), d[35] = Y(m[32]), d[36] = Y(m[39]), d[37] = Y(m[45]), d[38] = Y(m[52]), d[39] = Y(m[54]), d[40] = Y(m[20]), d[41] = Y(m[22]), d[42] = Y(m[33]), d[43] = Y(m[38]), d[44] = Y(m[46]), d[45] = Y(m[51]), d[46] = Y(m[55]), d[47] = Y(m[60]), d[48] = Y(m[21]), d[49] = Y(m[34]), d[50] = Y(m[37]), d[51] = Y(m[47]), d[52] = Y(m[50]), d[53] = Y(m[56]), d[54] = Y(m[59]), d[55] = Y(m[61]), d[56] = Y(m[35]), d[57] = Y(m[36]), d[58] = Y(m[48]), d[59] = Y(m[49]), d[60] = Y(m[57]), d[61] = Y(m[58]), d[62] = Y(m[62]), d[63] = Y(m[63]);
    }
    function Ye(m) {
      const d = 0.5 * Math.cos(0.7853975), x = 0.5 * Math.cos(3.14159 / 16), y = 0.5 * Math.cos(3.14159 / 8), w = 0.5 * Math.cos(3 * 3.14159 / 16), R = 0.5 * Math.cos(5 * 3.14159 / 16), A = 0.5 * Math.cos(3 * 3.14159 / 8), H = 0.5 * Math.cos(7 * 3.14159 / 16), z = new Array(4), k = new Array(4), W = new Array(4), J = new Array(4);
      for (let K = 0; K < 8; ++K) {
        const re = K * 8;
        z[0] = y * m[re + 2], z[1] = A * m[re + 2], z[2] = y * m[re + 6], z[3] = A * m[re + 6], k[0] = x * m[re + 1] + w * m[re + 3] + R * m[re + 5] + H * m[re + 7], k[1] = w * m[re + 1] - H * m[re + 3] - x * m[re + 5] - R * m[re + 7], k[2] = R * m[re + 1] - x * m[re + 3] + H * m[re + 5] + w * m[re + 7], k[3] = H * m[re + 1] - R * m[re + 3] + w * m[re + 5] - x * m[re + 7], W[0] = d * (m[re + 0] + m[re + 4]), W[3] = d * (m[re + 0] - m[re + 4]), W[1] = z[0] + z[3], W[2] = z[1] - z[2], J[0] = W[0] + W[1], J[1] = W[3] + W[2], J[2] = W[3] - W[2], J[3] = W[0] - W[1], m[re + 0] = J[0] + k[0], m[re + 1] = J[1] + k[1], m[re + 2] = J[2] + k[2], m[re + 3] = J[3] + k[3], m[re + 4] = J[3] - k[3], m[re + 5] = J[2] - k[2], m[re + 6] = J[1] - k[1], m[re + 7] = J[0] - k[0];
      }
      for (let K = 0; K < 8; ++K) z[0] = y * m[16 + K], z[1] = A * m[16 + K], z[2] = y * m[48 + K], z[3] = A * m[48 + K], k[0] = x * m[8 + K] + w * m[24 + K] + R * m[40 + K] + H * m[56 + K], k[1] = w * m[8 + K] - H * m[24 + K] - x * m[40 + K] - R * m[56 + K], k[2] = R * m[8 + K] - x * m[24 + K] + H * m[40 + K] + w * m[56 + K], k[3] = H * m[8 + K] - R * m[24 + K] + w * m[40 + K] - x * m[56 + K], W[0] = d * (m[K] + m[32 + K]), W[3] = d * (m[K] - m[32 + K]), W[1] = z[0] + z[3], W[2] = z[1] - z[2], J[0] = W[0] + W[1], J[1] = W[3] + W[2], J[2] = W[3] - W[2], J[3] = W[0] - W[1], m[0 + K] = J[0] + k[0], m[8 + K] = J[1] + k[1], m[16 + K] = J[2] + k[2], m[24 + K] = J[3] + k[3], m[32 + K] = J[3] - k[3], m[40 + K] = J[2] - k[2], m[48 + K] = J[1] - k[1], m[56 + K] = J[0] - k[0];
    }
    function Et(m) {
      for (let d = 0; d < 64; ++d) {
        const x = m[0][d], y = m[1][d], w = m[2][d];
        m[0][d] = x + 1.5747 * w, m[1][d] = x - 0.1873 * y - 0.4682 * w, m[2][d] = x + 1.8556 * y;
      }
    }
    function xt(m, d, x) {
      for (let y = 0; y < 64; ++y) d[x + y] = rl.toHalfFloat(C(m[y]));
    }
    function C(m) {
      return m <= 1 ? Math.sign(m) * Math.pow(Math.abs(m), 2.2) : Math.sign(m) * Math.pow(b, Math.abs(m) - 1);
    }
    function M(m) {
      return new DataView(m.array.buffer, m.offset.value, m.size);
    }
    function G(m) {
      const d = m.viewer.buffer.slice(m.offset.value, m.offset.value + m.size), x = new Uint8Array(We(d)), y = new Uint8Array(x.length);
      return D(x), pt(x, y), new DataView(y.buffer);
    }
    function Q(m) {
      const d = m.array.slice(m.offset.value, m.offset.value + m.size), x = pr(d), y = new Uint8Array(x.length);
      return D(x), pt(x, y), new DataView(y.buffer);
    }
    function ae(m) {
      const d = m.viewer, x = { value: m.offset.value }, y = new Uint16Array(m.columns * m.lines * (m.inputChannels.length * m.type)), w = new Uint8Array(8192);
      let R = 0;
      const A = new Array(m.inputChannels.length);
      for (let me = 0, le = m.inputChannels.length; me < le; me++) A[me] = {}, A[me].start = R, A[me].end = A[me].start, A[me].nx = m.columns, A[me].ny = m.lines, A[me].size = m.type, R += A[me].nx * A[me].ny * A[me].size;
      const H = Ee(d, x), z = Ee(d, x);
      if (z >= 8192) throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");
      if (H <= z) for (let me = 0; me < z - H + 1; me++) w[me + H] = xe(d, x);
      const k = new Uint16Array(65536), W = T(w, k), J = we(d, x);
      je(m.array, d, x, J, y, R);
      for (let me = 0; me < m.inputChannels.length; ++me) {
        const le = A[me];
        for (let he = 0; he < A[me].size; ++he) Be(y, le.start + he, le.nx, le.size, le.ny, le.nx * le.size, W);
      }
      yt(k, y, R);
      let K = 0;
      const re = new Uint8Array(y.buffer.byteLength);
      for (let me = 0; me < m.lines; me++) for (let le = 0; le < m.inputChannels.length; le++) {
        const he = A[le], ve = he.nx * he.size, ge = new Uint8Array(y.buffer, he.end * 2, ve * 2);
        re.set(ge, K), K += ve * 2, he.end += ve;
      }
      return new DataView(re.buffer);
    }
    function j(m) {
      const d = m.array.slice(m.offset.value, m.offset.value + m.size), x = pr(d), y = m.inputChannels.length * m.lines * m.columns * m.totalBytes, w = new ArrayBuffer(y), R = new DataView(w);
      let A = 0, H = 0;
      const z = new Array(4);
      for (let k = 0; k < m.lines; k++) for (let W = 0; W < m.inputChannels.length; W++) {
        let J = 0;
        switch (m.inputChannels[W].pixelType) {
          case 1:
            z[0] = A, z[1] = z[0] + m.columns, A = z[1] + m.columns;
            for (let re = 0; re < m.columns; ++re) {
              const me = x[z[0]++] << 8 | x[z[1]++];
              J += me, R.setUint16(H, J, true), H += 2;
            }
            break;
          case 2:
            z[0] = A, z[1] = z[0] + m.columns, z[2] = z[1] + m.columns, A = z[2] + m.columns;
            for (let re = 0; re < m.columns; ++re) {
              const me = x[z[0]++] << 24 | x[z[1]++] << 16 | x[z[2]++] << 8;
              J += me, R.setUint32(H, J, true), H += 4;
            }
            break;
        }
      }
      return R;
    }
    function De(m) {
      const d = m.viewer, x = { value: m.offset.value }, y = new Uint8Array(m.columns * m.lines * (m.inputChannels.length * m.type * 2)), w = { version: Ue(d, x), unknownUncompressedSize: Ue(d, x), unknownCompressedSize: Ue(d, x), acCompressedSize: Ue(d, x), dcCompressedSize: Ue(d, x), rleCompressedSize: Ue(d, x), rleUncompressedSize: Ue(d, x), rleRawSize: Ue(d, x), totalAcUncompressedCount: Ue(d, x), totalDcUncompressedCount: Ue(d, x), acCompression: Ue(d, x) };
      if (w.version < 2) throw new Error("EXRLoader.parse: " + bn.compression + " version " + w.version + " is unsupported");
      const R = new Array();
      let A = Ee(d, x) - 2;
      for (; A > 0; ) {
        const le = fe(d.buffer, x), he = xe(d, x), ve = he >> 2 & 3, ge = (he >> 4) - 1, Fe = new Int8Array([ge])[0], Ne = xe(d, x);
        R.push({ name: le, index: Fe, type: Ne, compression: ve }), A -= le.length + 3;
      }
      const H = bn.channels, z = new Array(m.inputChannels.length);
      for (let le = 0; le < m.inputChannels.length; ++le) {
        const he = z[le] = {}, ve = H[le];
        he.name = ve.name, he.compression = 0, he.decoded = false, he.type = ve.pixelType, he.pLinear = ve.pLinear, he.width = m.columns, he.height = m.lines;
      }
      const k = { idx: new Array(3) };
      for (let le = 0; le < m.inputChannels.length; ++le) {
        const he = z[le];
        for (let ve = 0; ve < R.length; ++ve) {
          const ge = R[ve];
          he.name == ge.name && (he.compression = ge.compression, ge.index >= 0 && (k.idx[ge.index] = le), he.offset = le);
        }
      }
      let W, J, K;
      if (w.acCompressedSize > 0) switch (w.acCompression) {
        case 0:
          W = new Uint16Array(w.totalAcUncompressedCount), je(m.array, d, x, w.acCompressedSize, W, w.totalAcUncompressedCount);
          break;
        case 1:
          const le = m.array.slice(x.value, x.value + w.totalAcUncompressedCount), he = pr(le);
          W = new Uint16Array(he.buffer), x.value += w.totalAcUncompressedCount;
          break;
      }
      if (w.dcCompressedSize > 0) {
        const le = { array: m.array, offset: x, size: w.dcCompressedSize };
        J = new Uint16Array(Q(le).buffer), x.value += w.dcCompressedSize;
      }
      if (w.rleRawSize > 0) {
        const le = m.array.slice(x.value, x.value + w.rleCompressedSize), he = pr(le);
        K = We(he.buffer), x.value += w.rleCompressedSize;
      }
      let re = 0;
      const me = new Array(z.length);
      for (let le = 0; le < me.length; ++le) me[le] = new Array();
      for (let le = 0; le < m.lines; ++le) for (let he = 0; he < z.length; ++he) me[he].push(re), re += z[he].width * m.type * 2;
      k.idx[0] !== void 0 && z[k.idx[0]] && ze(k, me, z, W, J, y);
      for (let le = 0; le < z.length; ++le) {
        const he = z[le];
        if (!he.decoded) switch (he.compression) {
          case 2:
            let ve = 0, ge = 0;
            for (let Fe = 0; Fe < m.lines; ++Fe) {
              let Ne = me[le][ve];
              for (let Ke = 0; Ke < he.width; ++Ke) {
                for (let ke = 0; ke < 2 * he.type; ++ke) y[Ne++] = K[ge + ke * he.width * he.height];
                ge++;
              }
              ve++;
            }
            break;
          case 1:
            Ae(le, me, z, W, J, y);
            break;
          default:
            throw new Error("EXRLoader.parse: unsupported channel compression");
        }
      }
      return new DataView(y.buffer);
    }
    function fe(m, d) {
      const x = new Uint8Array(m);
      let y = 0;
      for (; x[d.value + y] != 0; ) y += 1;
      const w = new TextDecoder().decode(x.slice(d.value, d.value + y));
      return d.value = d.value + y + 1, w;
    }
    function Ce(m, d, x) {
      const y = new TextDecoder().decode(new Uint8Array(m).slice(d.value, d.value + x));
      return d.value = d.value + x, y;
    }
    function Le(m, d) {
      const x = _e(m, d), y = we(m, d);
      return [x, y];
    }
    function ue(m, d) {
      const x = we(m, d), y = we(m, d);
      return [x, y];
    }
    function _e(m, d) {
      const x = m.getInt32(d.value, true);
      return d.value = d.value + 4, x;
    }
    function we(m, d) {
      const x = m.getUint32(d.value, true);
      return d.value = d.value + 4, x;
    }
    function Pe(m, d) {
      const x = m[d.value];
      return d.value = d.value + 1, x;
    }
    function xe(m, d) {
      const x = m.getUint8(d.value);
      return d.value = d.value + 1, x;
    }
    const Ue = function(m, d) {
      let x;
      return "getBigInt64" in DataView.prototype ? x = Number(m.getBigInt64(d.value, true)) : x = m.getUint32(d.value + 4, true) + Number(m.getUint32(d.value, true) << 32), d.value += 8, x;
    };
    function U(m, d) {
      const x = m.getFloat32(d.value, true);
      return d.value += 4, x;
    }
    function de(m, d) {
      return rl.toHalfFloat(U(m, d));
    }
    function Y(m) {
      const d = (m & 31744) >> 10, x = m & 1023;
      return (m >> 15 ? -1 : 1) * (d ? d === 31 ? x ? NaN : 1 / 0 : Math.pow(2, d - 15) * (1 + x / 1024) : 6103515625e-14 * (x / 1024));
    }
    function Ee(m, d) {
      const x = m.getUint16(d.value, true);
      return d.value += 2, x;
    }
    function ce(m, d) {
      return Y(Ee(m, d));
    }
    function ne(m, d, x, y) {
      const w = x.value, R = [];
      for (; x.value < w + y - 1; ) {
        const A = fe(d, x), H = _e(m, x), z = xe(m, x);
        x.value += 3;
        const k = _e(m, x), W = _e(m, x);
        R.push({ name: A, pixelType: H, pLinear: z, xSampling: k, ySampling: W });
      }
      return x.value += 1, R;
    }
    function be(m, d) {
      const x = U(m, d), y = U(m, d), w = U(m, d), R = U(m, d), A = U(m, d), H = U(m, d), z = U(m, d), k = U(m, d);
      return { redX: x, redY: y, greenX: w, greenY: R, blueX: A, blueY: H, whiteX: z, whiteY: k };
    }
    function Xe(m, d) {
      const x = ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"], y = xe(m, d);
      return x[y];
    }
    function ut(m, d) {
      const x = _e(m, d), y = _e(m, d), w = _e(m, d), R = _e(m, d);
      return { xMin: x, yMin: y, xMax: w, yMax: R };
    }
    function ot(m, d) {
      const x = ["INCREASING_Y", "DECREASING_Y", "RANDOM_Y"], y = xe(m, d);
      return x[y];
    }
    function Qt(m, d) {
      const x = ["ENVMAP_LATLONG", "ENVMAP_CUBE"], y = xe(m, d);
      return x[y];
    }
    function Kt(m, d) {
      const x = ["ONE_LEVEL", "MIPMAP_LEVELS", "RIPMAP_LEVELS"], y = ["ROUND_DOWN", "ROUND_UP"], w = we(m, d), R = we(m, d), A = xe(m, d);
      return { xSize: w, ySize: R, levelMode: x[A & 15], roundingMode: y[A >> 4] };
    }
    function Ds(m, d) {
      const x = U(m, d), y = U(m, d);
      return [x, y];
    }
    function Tn(m, d) {
      const x = U(m, d), y = U(m, d), w = U(m, d);
      return [x, y, w];
    }
    function is(m, d, x, y, w) {
      if (y === "string" || y === "stringvector" || y === "iccProfile") return Ce(d, x, w);
      if (y === "chlist") return ne(m, d, x, w);
      if (y === "chromaticities") return be(m, x);
      if (y === "compression") return Xe(m, x);
      if (y === "box2i") return ut(m, x);
      if (y === "envmap") return Qt(m, x);
      if (y === "tiledesc") return Kt(m, x);
      if (y === "lineOrder") return ot(m, x);
      if (y === "float") return U(m, x);
      if (y === "v2f") return Ds(m, x);
      if (y === "v3f") return Tn(m, x);
      if (y === "int") return _e(m, x);
      if (y === "rational") return Le(m, x);
      if (y === "timecode") return ue(m, x);
      if (y === "preview") return x.value += w, "skipped";
      x.value += w;
    }
    function Ls(m, d) {
      const x = Math.log2(m);
      return d == "ROUND_DOWN" ? Math.floor(x) : Math.ceil(x);
    }
    function Us(m, d, x) {
      let y = 0;
      switch (m.levelMode) {
        case "ONE_LEVEL":
          y = 1;
          break;
        case "MIPMAP_LEVELS":
          y = Ls(Math.max(d, x), m.roundingMode) + 1;
          break;
        case "RIPMAP_LEVELS":
          throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.");
      }
      return y;
    }
    function Qn(m, d, x, y) {
      const w = new Array(m);
      for (let R = 0; R < m; R++) {
        const A = 1 << R;
        let H = d / A | 0;
        y == "ROUND_UP" && H * A < d && (H += 1);
        const z = Math.max(H, 1);
        w[R] = (z + x - 1) / x | 0;
      }
      return w;
    }
    function Ns() {
      const m = this, d = m.offset, x = { value: 0 };
      for (let y = 0; y < m.tileCount; y++) {
        const w = _e(m.viewer, d), R = _e(m.viewer, d);
        d.value += 8, m.size = we(m.viewer, d);
        const A = w * m.blockWidth, H = R * m.blockHeight;
        m.columns = A + m.blockWidth > m.width ? m.width - A : m.blockWidth, m.lines = H + m.blockHeight > m.height ? m.height - H : m.blockHeight;
        const z = m.columns * m.totalBytes, W = m.size < m.lines * z ? m.uncompress(m) : M(m);
        d.value += m.size;
        for (let J = 0; J < m.lines; J++) {
          const K = J * m.columns * m.totalBytes;
          for (let re = 0; re < m.inputChannels.length; re++) {
            const me = bn.channels[re].name, le = m.channelByteOffsets[me] * m.columns, he = m.decodeChannels[me];
            if (he === void 0) continue;
            x.value = K + le;
            const ve = (m.height - (1 + H + J)) * m.outLineWidth;
            for (let ge = 0; ge < m.columns; ge++) {
              const Fe = ve + (ge + A) * m.outputChannels + he;
              m.byteArray[Fe] = m.getter(W, x);
            }
          }
        }
      }
    }
    function xi() {
      const m = this, d = m.offset, x = { value: 0 };
      for (let y = 0; y < m.height / m.blockHeight; y++) {
        const w = _e(m.viewer, d) - bn.dataWindow.yMin;
        m.size = we(m.viewer, d), m.lines = w + m.blockHeight > m.height ? m.height - w : m.blockHeight;
        const R = m.columns * m.totalBytes, H = m.size < m.lines * R ? m.uncompress(m) : M(m);
        d.value += m.size;
        for (let z = 0; z < m.blockHeight; z++) {
          const k = y * m.blockHeight, W = z + m.scanOrder(k);
          if (W >= m.height) continue;
          const J = z * R, K = (m.height - 1 - W) * m.outLineWidth;
          for (let re = 0; re < m.inputChannels.length; re++) {
            const me = bn.channels[re].name, le = m.channelByteOffsets[me] * m.columns, he = m.decodeChannels[me];
            if (he !== void 0) {
              x.value = J + le;
              for (let ve = 0; ve < m.columns; ve++) {
                const ge = K + ve * m.outputChannels + he;
                m.byteArray[ge] = m.getter(H, x);
              }
            }
          }
        }
      }
    }
    function Fs(m, d, x) {
      const y = {};
      if (m.getUint32(0, true) != 20000630) throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");
      y.version = m.getUint8(4);
      const w = m.getUint8(5);
      y.spec = { singleTile: !!(w & 2), longName: !!(w & 4), deepFormat: !!(w & 8), multiPart: !!(w & 16) }, x.value = 8;
      let R = true;
      for (; R; ) {
        const A = fe(d, x);
        if (A === "") R = false;
        else {
          const H = fe(d, x), z = we(m, x), k = is(m, d, x, H, z);
          k === void 0 ? console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${H}'.`) : y[A] = k;
        }
      }
      if ((w & -7) != 0) throw console.error("THREE.EXRHeader:", y), new Error("THREE.EXRLoader: Provided file is currently unsupported.");
      return y;
    }
    function Os(m, d, x, y, w, R) {
      const A = { size: 0, viewer: d, array: x, offset: y, width: m.dataWindow.xMax - m.dataWindow.xMin + 1, height: m.dataWindow.yMax - m.dataWindow.yMin + 1, inputChannels: m.channels, channelByteOffsets: {}, shouldExpand: false, scanOrder: null, totalBytes: null, columns: null, lines: null, type: null, uncompress: null, getter: null, format: null, colorSpace: St };
      switch (m.compression) {
        case "NO_COMPRESSION":
          A.blockHeight = 1, A.uncompress = M;
          break;
        case "RLE_COMPRESSION":
          A.blockHeight = 1, A.uncompress = G;
          break;
        case "ZIPS_COMPRESSION":
          A.blockHeight = 1, A.uncompress = Q;
          break;
        case "ZIP_COMPRESSION":
          A.blockHeight = 16, A.uncompress = Q;
          break;
        case "PIZ_COMPRESSION":
          A.blockHeight = 32, A.uncompress = ae;
          break;
        case "PXR24_COMPRESSION":
          A.blockHeight = 16, A.uncompress = j;
          break;
        case "DWAA_COMPRESSION":
          A.blockHeight = 32, A.uncompress = De;
          break;
        case "DWAB_COMPRESSION":
          A.blockHeight = 256, A.uncompress = De;
          break;
        default:
          throw new Error("EXRLoader.parse: " + m.compression + " is unsupported");
      }
      const H = {};
      for (const K of m.channels) switch (K.name) {
        case "Y":
        case "R":
        case "G":
        case "B":
        case "A":
          H[K.name] = true, A.type = K.pixelType;
      }
      let z = false, k = false;
      if (H.R && H.G && H.B) A.outputChannels = 4;
      else if (H.Y) A.outputChannels = 1;
      else throw new Error("EXRLoader.parse: file contains unsupported data channels.");
      switch (A.outputChannels) {
        case 4:
          R == Pt ? (z = !H.A, A.format = Pt, A.colorSpace = St, A.outputChannels = 4, A.decodeChannels = { R: 0, G: 1, B: 2, A: 3 }) : R == ci ? (A.format = ci, A.colorSpace = St, A.outputChannels = 2, A.decodeChannels = { R: 0, G: 1 }) : R == ui ? (A.format = ui, A.colorSpace = St, A.outputChannels = 1, A.decodeChannels = { R: 0 }) : k = true;
          break;
        case 1:
          R == Pt ? (z = true, A.format = Pt, A.colorSpace = St, A.outputChannels = 4, A.shouldExpand = true, A.decodeChannels = { Y: 0 }) : R == ci ? (A.format = ci, A.colorSpace = St, A.outputChannels = 2, A.shouldExpand = true, A.decodeChannels = { Y: 0 }) : R == ui ? (A.format = ui, A.colorSpace = St, A.outputChannels = 1, A.decodeChannels = { Y: 0 }) : k = true;
          break;
        default:
          k = true;
      }
      if (k) throw new Error("EXRLoader.parse: invalid output format for specified file.");
      if (A.type == 1) switch (w) {
        case Gt:
          A.getter = ce;
          break;
        case Un:
          A.getter = Ee;
          break;
      }
      else if (A.type == 2) switch (w) {
        case Gt:
          A.getter = U;
          break;
        case Un:
          A.getter = de;
      }
      else throw new Error("EXRLoader.parse: unsupported pixelType " + A.type + " for " + m.compression + ".");
      A.columns = A.width;
      const W = A.width * A.height * A.outputChannels;
      switch (w) {
        case Gt:
          A.byteArray = new Float32Array(W), z && A.byteArray.fill(1, 0, W);
          break;
        case Un:
          A.byteArray = new Uint16Array(W), z && A.byteArray.fill(15360, 0, W);
          break;
        default:
          console.error("THREE.EXRLoader: unsupported type: ", w);
          break;
      }
      let J = 0;
      for (const K of m.channels) A.decodeChannels[K.name] !== void 0 && (A.channelByteOffsets[K.name] = J), J += K.pixelType * 2;
      if (A.totalBytes = J, A.outLineWidth = A.width * A.outputChannels, m.lineOrder === "INCREASING_Y" ? A.scanOrder = (K) => K : A.scanOrder = (K) => A.height - 1 - K, m.spec.singleTile) {
        A.blockHeight = m.tiles.ySize, A.blockWidth = m.tiles.xSize;
        const K = Us(m.tiles, A.width, A.height), re = Qn(K, A.width, m.tiles.xSize, m.tiles.roundingMode), me = Qn(K, A.height, m.tiles.ySize, m.tiles.roundingMode);
        A.tileCount = re[0] * me[0];
        for (let le = 0; le < K; le++) for (let he = 0; he < me[le]; he++) for (let ve = 0; ve < re[le]; ve++) Ue(d, y);
        A.decode = Ns.bind(A);
      } else {
        A.blockWidth = A.width;
        const K = Math.ceil(A.height / A.blockHeight);
        for (let re = 0; re < K; re++) Ue(d, y);
        A.decode = xi.bind(A);
      }
      return A;
    }
    const Bs = { value: 0 }, ks = new DataView(e), Ir = new Uint8Array(e), bn = Fs(ks, e, Bs), hn = Os(bn, ks, Ir, Bs, this.type, this.outputFormat);
    if (hn.decode(), hn.shouldExpand) {
      const m = hn.byteArray;
      if (this.outputFormat == Pt) for (let d = 0; d < m.length; d += 4) m[d + 2] = m[d + 1] = m[d];
      else if (this.outputFormat == ci) for (let d = 0; d < m.length; d += 2) m[d + 1] = m[d];
    }
    return { header: bn, width: hn.width, height: hn.height, data: hn.byteArray, format: hn.format, colorSpace: hn.colorSpace, type: this.type };
  }
  setDataType(e) {
    return this.type = e, this;
  }
  setOutputFormat(e) {
    return this.outputFormat = e, this;
  }
  load(e, t, n, i) {
    function r(o, a) {
      o.colorSpace = a.colorSpace, o.minFilter = It, o.magFilter = It, o.generateMipmaps = false, o.flipY = false, t && t(o, a);
    }
    return super.load(e, r, n, i);
  }
}
const ws = document.getElementById("content"), wr = new Uu();
let T0 = "img/plains_sunset_1k.exr", Mo;
new E0().load(T0, (s) => {
  Mo = s, Mo.mapping = Sr, wr.environment = Mo, wr.environmentIntensity = 1;
});
const Ji = new Bt(75, 9 / 16, 0.1, 1e3);
Ji.position.set(0, 2, 7);
const ns = new d_({ preserveDrawingBuffer: true, alpha: true });
ns.toneMapping = uc;
ns.setSize(ws.clientWidth, ws.clientHeight);
ws.appendChild(ns.domElement);
window.addEventListener("resize", () => {
  Ji.aspect = 9 / 16, Ji.updateProjectionMatrix(), ns.setSize(ws.clientWidth, ws.clientHeight);
});
let Vi = null;
new w_().load("img/drawer.glb", function(s) {
  Vi = s, Vi.scene.scale.setScalar(15), Vi.scene.position.y = -1, console.log(s.scenes[0].children[0].children[0]), s.scenes[0].children[0].children[0].traverse((e) => {
    if (e instanceof Wt) {
      const t = e.material;
      Array.isArray(t) ? t.forEach((n) => {
        n.transparent = true, n.opacity = 0.2;
      }) : (t.transparent = true, t.opacity = 0.2);
    }
  }), wr.add(s.scene);
}, function(s) {
  console.log(s.loaded / s.total * 100 + "% loaded");
}, function(s) {
  console.log("An error happened" + s);
});
new p_(Ji, ns.domElement);
const b0 = new xd();
let lc;
function eh() {
  requestAnimationFrame(eh), lc = b0.getDelta(), Vi && (Vi.scene.rotation.y += 0.5 * lc, Ji.lookAt(Vi.scene.position)), ns.render(wr, Ji);
}
eh();
