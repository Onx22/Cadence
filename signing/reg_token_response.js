const reg_token_response = (reg_token_inter) => {
    function n(a, c) {
        this.a = a;
        this.b = c;
    }
    function y(a, c) {
        var b = [],
            h,
            f = [],
            k = 0,
            l;
        if ("UTF8" === c)
            for (l = 0; l < a.length; l += 1)
                for (
                    h = a.charCodeAt(l),
                        f = [],
                        2048 < h
                            ? ((f[0] = 224 | ((h & 61440) >>> 12)),
                              (f[1] = 128 | ((h & 4032) >>> 6)),
                              (f[2] = 128 | (h & 63)))
                            : 128 < h
                            ? ((f[0] = 192 | ((h & 1984) >>> 6)),
                              (f[1] = 128 | (h & 63)))
                            : (f[0] = h),
                        h = 0;
                    h < f.length;
                    h += 1
                )
                    (b[k >>> 2] |= f[h] << (24 - (k % 4) * 8)), (k += 1);
        else if ("UTF16" === c)
            for (l = 0; l < a.length; l += 1)
                (b[k >>> 2] |= a.charCodeAt(l) << (16 - (k % 4) * 8)), (k += 2);
        return {
            value: b,
            binLen: 8 * k,
        };
    }
    function x(a) {
        var c = [],
            b = a.length,
            h,
            f;
        if (0 !== b % 2) throw "String of HEX type must be in byte increments";
        for (h = 0; h < b; h += 2) {
            f = parseInt(a.substr(h, 2), 16);
            if (isNaN(f))
                throw "String of HEX type contains invalid characters";
            c[h >>> 3] |= f << (24 - (h % 8) * 4);
        }
        return {
            value: c,
            binLen: 4 * b,
        };
    }
    function z(a) {
        var c = [],
            b = 0,
            h,
            f,
            k,
            l,
            n;
        if (-1 === a.search(/^[a-zA-Z0-9=+\/]+$/))
            throw "Invalid character in base-64 string";
        h = a.indexOf("=");
        a = a.replace(/\=/g, "");
        if (-1 !== h && h < a.length)
            throw "Invalid '=' found in base-64 string";
        for (f = 0; f < a.length; f += 4) {
            n = a.substr(f, 4);
            for (k = l = 0; k < n.length; k += 1)
                (h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                    n[k]
                )),
                    (l |= h << (18 - 6 * k));
            for (k = 0; k < n.length - 1; k += 1)
                (c[b >> 2] |=
                    ((l >>> (16 - 8 * k)) & 255) << (24 - (b % 4) * 8)),
                    (b += 1);
        }
        return {
            value: c,
            binLen: 8 * b,
        };
    }
    function A(a, c) {
        var b = "",
            h = 4 * a.length,
            f,
            k;
        for (f = 0; f < h; f += 1)
            (k = a[f >>> 2] >>> (8 * (3 - (f % 4)))),
                (b +=
                    "0123456789abcdef".charAt((k >>> 4) & 15) +
                    "0123456789abcdef".charAt(k & 15));
        return c.outputUpper ? b.toUpperCase() : b;
    }
    function B(a, c) {
        var b = "",
            h = 4 * a.length,
            f,
            k,
            l;
        for (f = 0; f < h; f += 3)
            for (
                l =
                    (((a[f >>> 2] >>> (8 * (3 - (f % 4)))) & 255) << 16) |
                    (((a[(f + 1) >>> 2] >>> (8 * (3 - ((f + 1) % 4)))) & 255) <<
                        8) |
                    ((a[(f + 2) >>> 2] >>> (8 * (3 - ((f + 2) % 4)))) & 255),
                    k = 0;
                4 > k;
                k += 1
            )
                b =
                    8 * f + 6 * k <= 32 * a.length
                        ? b +
                          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                              (l >>> (6 * (3 - k))) & 63
                          )
                        : b + c.b64Pad;
        return b;
    }
    function C(a) {
        var c = {
            outputUpper: !1,
            b64Pad: "=",
        };
        try {
            a.hasOwnProperty("outputUpper") && (c.outputUpper = a.outputUpper),
                a.hasOwnProperty("b64Pad") && (c.b64Pad = a.b64Pad);
        } catch (b) {}
        if ("boolean" !== typeof c.outputUpper)
            throw "Invalid outputUpper formatting option";
        if ("string" !== typeof c.b64Pad)
            throw "Invalid b64Pad formatting option";
        return c;
    }
    function p(a, c) {
        var b = null,
            b = new n(a.a, a.b);
        return (b =
            32 >= c
                ? new n(
                      (b.a >>> c) | ((b.b << (32 - c)) & 4294967295),
                      (b.b >>> c) | ((b.a << (32 - c)) & 4294967295)
                  )
                : new n(
                      (b.b >>> (c - 32)) | ((b.a << (64 - c)) & 4294967295),
                      (b.a >>> (c - 32)) | ((b.b << (64 - c)) & 4294967295)
                  ));
    }
    function D(a, c) {
        var b = null;
        return (b =
            32 >= c
                ? new n(
                      a.a >>> c,
                      (a.b >>> c) | ((a.a << (32 - c)) & 4294967295)
                  )
                : new n(0, a.a >>> (c - 32)));
    }
    function K(a, c, b) {
        return new n((a.a & c.a) ^ (~a.a & b.a), (a.b & c.b) ^ (~a.b & b.b));
    }
    function L(a, c, b) {
        return new n(
            (a.a & c.a) ^ (a.a & b.a) ^ (c.a & b.a),
            (a.b & c.b) ^ (a.b & b.b) ^ (c.b & b.b)
        );
    }
    function M(a) {
        var c = p(a, 28),
            b = p(a, 34);
        a = p(a, 39);
        return new n(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b);
    }
    function N(a) {
        var c = p(a, 14),
            b = p(a, 18);
        a = p(a, 41);
        return new n(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b);
    }
    function O(a) {
        var c = p(a, 1),
            b = p(a, 8);
        a = D(a, 7);
        return new n(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b);
    }
    function P(a) {
        var c = p(a, 19),
            b = p(a, 61);
        a = D(a, 6);
        return new n(c.a ^ b.a ^ a.a, c.b ^ b.b ^ a.b);
    }
    function Q(a, c) {
        var b, h, f;
        b = (a.b & 65535) + (c.b & 65535);
        h = (a.b >>> 16) + (c.b >>> 16) + (b >>> 16);
        f = ((h & 65535) << 16) | (b & 65535);
        b = (a.a & 65535) + (c.a & 65535) + (h >>> 16);
        h = (a.a >>> 16) + (c.a >>> 16) + (b >>> 16);
        return new n(((h & 65535) << 16) | (b & 65535), f);
    }
    function R(a, c, b, h) {
        var f, k, l;
        f = (a.b & 65535) + (c.b & 65535) + (b.b & 65535) + (h.b & 65535);
        k =
            (a.b >>> 16) +
            (c.b >>> 16) +
            (b.b >>> 16) +
            (h.b >>> 16) +
            (f >>> 16);
        l = ((k & 65535) << 16) | (f & 65535);
        f =
            (a.a & 65535) +
            (c.a & 65535) +
            (b.a & 65535) +
            (h.a & 65535) +
            (k >>> 16);
        k =
            (a.a >>> 16) +
            (c.a >>> 16) +
            (b.a >>> 16) +
            (h.a >>> 16) +
            (f >>> 16);
        return new n(((k & 65535) << 16) | (f & 65535), l);
    }
    function S(a, c, b, h, f) {
        var k, l, p;
        k =
            (a.b & 65535) +
            (c.b & 65535) +
            (b.b & 65535) +
            (h.b & 65535) +
            (f.b & 65535);
        l =
            (a.b >>> 16) +
            (c.b >>> 16) +
            (b.b >>> 16) +
            (h.b >>> 16) +
            (f.b >>> 16) +
            (k >>> 16);
        p = ((l & 65535) << 16) | (k & 65535);
        k =
            (a.a & 65535) +
            (c.a & 65535) +
            (b.a & 65535) +
            (h.a & 65535) +
            (f.a & 65535) +
            (l >>> 16);
        l =
            (a.a >>> 16) +
            (c.a >>> 16) +
            (b.a >>> 16) +
            (h.a >>> 16) +
            (f.a >>> 16) +
            (k >>> 16);
        return new n(((l & 65535) << 16) | (k & 65535), p);
    }
    function t(a, c, b) {
        var h,
            f,
            k,
            l,
            p,
            t,
            u,
            E,
            x,
            e,
            m,
            q,
            r,
            y,
            v,
            s,
            z,
            A,
            B,
            C,
            D,
            F,
            G,
            H,
            d,
            w = [],
            I,
            g = [
                1116352408,
                1899447441,
                3049323471,
                3921009573,
                961987163,
                1508970993,
                2453635748,
                2870763221,
                3624381080,
                310598401,
                607225278,
                1426881987,
                1925078388,
                2162078206,
                2614888103,
                3248222580,
                3835390401,
                4022224774,
                264347078,
                604807628,
                770255983,
                1249150122,
                1555081692,
                1996064986,
                2554220882,
                2821834349,
                2952996808,
                3210313671,
                3336571891,
                3584528711,
                113926993,
                338241895,
                666307205,
                773529912,
                1294757372,
                1396182291,
                1695183700,
                1986661051,
                2177026350,
                2456956037,
                2730485921,
                2820302411,
                3259730800,
                3345764771,
                3516065817,
                3600352804,
                4094571909,
                275423344,
                430227734,
                506948616,
                659060556,
                883997877,
                958139571,
                1322822218,
                1537002063,
                1747873779,
                1955562222,
                2024104815,
                2227730452,
                2361852424,
                2428436474,
                2756734187,
                3204031479,
                3329325298,
            ];
        e = [
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428,
        ];
        f = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225,
        ];
        if ("SHA-384" === b || "SHA-512" === b)
            (m = 80),
                (h = (((c + 128) >>> 10) << 5) + 31),
                (y = 32),
                (v = 2),
                (d = n),
                (s = Q),
                (z = R),
                (A = S),
                (B = O),
                (C = P),
                (D = M),
                (F = N),
                (H = L),
                (G = K),
                (g = [
                    new d(g[0], 3609767458),
                    new d(g[1], 602891725),
                    new d(g[2], 3964484399),
                    new d(g[3], 2173295548),
                    new d(g[4], 4081628472),
                    new d(g[5], 3053834265),
                    new d(g[6], 2937671579),
                    new d(g[7], 3664609560),
                    new d(g[8], 2734883394),
                    new d(g[9], 1164996542),
                    new d(g[10], 1323610764),
                    new d(g[11], 3590304994),
                    new d(g[12], 4068182383),
                    new d(g[13], 991336113),
                    new d(g[14], 633803317),
                    new d(g[15], 3479774868),
                    new d(g[16], 2666613458),
                    new d(g[17], 944711139),
                    new d(g[18], 2341262773),
                    new d(g[19], 2007800933),
                    new d(g[20], 1495990901),
                    new d(g[21], 1856431235),
                    new d(g[22], 3175218132),
                    new d(g[23], 2198950837),
                    new d(g[24], 3999719339),
                    new d(g[25], 766784016),
                    new d(g[26], 2566594879),
                    new d(g[27], 3203337956),
                    new d(g[28], 1034457026),
                    new d(g[29], 2466948901),
                    new d(g[30], 3758326383),
                    new d(g[31], 168717936),
                    new d(g[32], 1188179964),
                    new d(g[33], 1546045734),
                    new d(g[34], 1522805485),
                    new d(g[35], 2643833823),
                    new d(g[36], 2343527390),
                    new d(g[37], 1014477480),
                    new d(g[38], 1206759142),
                    new d(g[39], 344077627),
                    new d(g[40], 1290863460),
                    new d(g[41], 3158454273),
                    new d(g[42], 3505952657),
                    new d(g[43], 106217008),
                    new d(g[44], 3606008344),
                    new d(g[45], 1432725776),
                    new d(g[46], 1467031594),
                    new d(g[47], 851169720),
                    new d(g[48], 3100823752),
                    new d(g[49], 1363258195),
                    new d(g[50], 3750685593),
                    new d(g[51], 3785050280),
                    new d(g[52], 3318307427),
                    new d(g[53], 3812723403),
                    new d(g[54], 2003034995),
                    new d(g[55], 3602036899),
                    new d(g[56], 1575990012),
                    new d(g[57], 1125592928),
                    new d(g[58], 2716904306),
                    new d(g[59], 442776044),
                    new d(g[60], 593698344),
                    new d(g[61], 3733110249),
                    new d(g[62], 2999351573),
                    new d(g[63], 3815920427),
                    new d(3391569614, 3928383900),
                    new d(3515267271, 566280711),
                    new d(3940187606, 3454069534),
                    new d(4118630271, 4000239992),
                    new d(116418474, 1914138554),
                    new d(174292421, 2731055270),
                    new d(289380356, 3203993006),
                    new d(460393269, 320620315),
                    new d(685471733, 587496836),
                    new d(852142971, 1086792851),
                    new d(1017036298, 365543100),
                    new d(1126000580, 2618297676),
                    new d(1288033470, 3409855158),
                    new d(1501505948, 4234509866),
                    new d(1607167915, 987167468),
                    new d(1816402316, 1246189591),
                ]),
                (e =
                    "SHA-384" === b
                        ? [
                              new d(3418070365, e[0]),
                              new d(1654270250, e[1]),
                              new d(2438529370, e[2]),
                              new d(355462360, e[3]),
                              new d(1731405415, e[4]),
                              new d(41048885895, e[5]),
                              new d(3675008525, e[6]),
                              new d(1203062813, e[7]),
                          ]
                        : [
                              new d(f[0], 4089235720),
                              new d(f[1], 2227873595),
                              new d(f[2], 4271175723),
                              new d(f[3], 1595750129),
                              new d(f[4], 2917565137),
                              new d(f[5], 725511199),
                              new d(f[6], 4215389547),
                              new d(f[7], 327033209),
                          ]);
        else throw "Unexpected error in SHA-2 implementation";
        a[c >>> 5] |= 128 << (24 - (c % 32));
        a[h] = c;
        I = a.length;
        for (q = 0; q < I; q += y) {
            c = e[0];
            h = e[1];
            f = e[2];
            k = e[3];
            l = e[4];
            p = e[5];
            t = e[6];
            u = e[7];
            for (r = 0; r < m; r += 1)
                (w[r] =
                    16 > r
                        ? new d(a[r * v + q], a[r * v + q + 1])
                        : z(C(w[r - 2]), w[r - 7], B(w[r - 15]), w[r - 16])),
                    (E = A(u, F(l), G(l, p, t), g[r], w[r])),
                    (x = s(D(c), H(c, h, f))),
                    (u = t),
                    (t = p),
                    (p = l),
                    (l = s(k, E)),
                    (k = f),
                    (f = h),
                    (h = c),
                    (c = s(E, x));
            e[0] = s(c, e[0]);
            e[1] = s(h, e[1]);
            e[2] = s(f, e[2]);
            e[3] = s(k, e[3]);
            e[4] = s(l, e[4]);
            e[5] = s(p, e[5]);
            e[6] = s(t, e[6]);
            e[7] = s(u, e[7]);
        }
        if ("SHA-384" === b)
            a = [
                e[0].a,
                e[0].b,
                e[1].a,
                e[1].b,
                e[2].a,
                e[2].b,
                e[3].a,
                e[3].b,
                e[4].a,
                e[4].b,
                e[5].a,
                e[5].b,
            ];
        else if ("SHA-512" === b)
            a = [
                e[0].a,
                e[0].b,
                e[1].a,
                e[1].b,
                e[2].a,
                e[2].b,
                e[3].a,
                e[3].b,
                e[4].a,
                e[4].b,
                e[5].a,
                e[5].b,
                e[6].a,
                e[6].b,
                e[7].a,
                e[7].b,
            ];
        else throw "Unexpected error in SHA-2 implementation";
        return a;
    }
    function u(a, c, b) {
        var h = 0,
            f = [0],
            k = "",
            l = null,
            k = b || "UTF8";
        if ("UTF8" !== k && "UTF16" !== k)
            throw "encoding must be UTF8 or UTF16";
        if ("HEX" === c) {
            if (0 !== a.length % 2)
                throw "srcString of HEX type must be in byte increments";
            l = x(a);
            h = l.binLen;
            f = l.value;
        } else if ("ASCII" === c || "TEXT" === c)
            (l = y(a, k)), (h = l.binLen), (f = l.value);
        else if ("B64" === c) (l = z(a)), (h = l.binLen), (f = l.value);
        else throw "inputFormat must be HEX, TEXT, ASCII, or B64";
        this.getHash = function (a, c, b, k) {
            var l = null,
                e = f.slice(),
                m = h,
                q;
            3 === arguments.length
                ? "number" !== typeof b && ((k = b), (b = 1))
                : 2 === arguments.length && (b = 1);
            if (b !== parseInt(b, 10) || 1 > b)
                throw "numRounds must a integer >= 1";
            switch (c) {
                case "HEX":
                    l = A;
                    break;
                case "B64":
                    l = B;
                    break;
                default:
                    throw "format must be HEX or B64";
            }
            if ("SHA-384" === a)
                for (q = 0; q < b; q++) (e = t(e, m, a)), (m = 384);
            else if ("SHA-512" === a)
                for (q = 0; q < b; q++) (e = t(e, m, a)), (m = 512);
            else throw "Chosen SHA variant is not supported";
            return l(e, C(k));
        };
        this.getHMAC = function (a, b, c, l, n) {
            var e,
                m,
                q,
                r,
                p = [],
                v = [];
            e = null;
            switch (l) {
                case "HEX":
                    l = A;
                    break;
                case "B64":
                    l = B;
                    break;
                default:
                    throw "outputFormat must be HEX or B64";
            }
            if ("SHA-384" === c) (m = 128), (r = 384);
            else if ("SHA-512" === c) (m = 128), (r = 512);
            else throw "Chosen SHA variant is not supported";
            if ("HEX" === b) (e = x(a)), (q = e.binLen), (e = e.value);
            else if ("ASCII" === b || "TEXT" === b)
                (e = y(a, k)), (q = e.binLen), (e = e.value);
            else if ("B64" === b) (e = z(a)), (q = e.binLen), (e = e.value);
            else throw "inputFormat must be HEX, TEXT, ASCII, or B64";
            a = 8 * m;
            b = m / 4 - 1;
            m < q / 8
                ? ((e = t(e, q, c)), (e[b] &= 4294967040))
                : m > q / 8 && (e[b] &= 4294967040);
            for (m = 0; m <= b; m += 1)
                (p[m] = e[m] ^ 909522486), (v[m] = e[m] ^ 1549556828);
            c = t(v.concat(t(p.concat(f), a + h, c)), a + r, c);
            return l(c, C(n));
        };
    }
    const obj = new u(reg_token_inter, "B64").getHash("SHA-512", "B64");
    return obj;
};

exports.reg_token_response = reg_token_response;
