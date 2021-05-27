function d(c, e) {
	var b = c.get("bootstrapParams").is_app;
	c.get("window").open(e, b ? "_system" : "_blank");
}

function d(a, c) {
	c = h.Base64.decode(c);
	for (
		var e = h.Base64.decode(
				"V25kKzVxQS81SSE+M3VCfnkjO300WlFHWTZQQXtWLiUlJChFMnUsdg=="
			),
			b = new Uint8Array(c.length + e.length),
			f = 0;
		f < c.length;
		++f
	)
		b[f] = c[f];
	for (f = 0; f < e.length; ++f) b[c.length + f] = e[f];
	c = h.Base64.encode(b);
	return new a(c, "B64").getHash("SHA-512", "B64");
}

function d(a) {
	return 26 > a
		? a + 65
		: 52 > a
		? a + 71
		: 62 > a
		? a - 4
		: 62 === a
		? 43
		: 63 === a
		? 47
		: 65;
}
return {
	decode: function (a, c) {
		a = a.replace(/[^A-Za-z0-9\+\/]/g, "");
		var e = a.length;
		c = c ? Math.ceil(((3 * e + 1) >> 2) / c) * c : (3 * e + 1) >> 2;
		for (var b = new Uint8Array(c), f, g = 0, k = 0, m = 0; m < e; m++) {
			f = m & 3;
			var l = a.charCodeAt(m);
			g |=
				(64 < l && 91 > l
					? l - 65
					: 96 < l && 123 > l
					? l - 71
					: 47 < l && 58 > l
					? l + 4
					: 43 === l
					? 62
					: 47 === l
					? 63
					: 0) <<
				(18 - 6 * f);
			if (3 === f || 1 === e - m) {
				for (f = 0; 3 > f && k < c; f++, k++)
					b[k] = (g >>> ((16 >>> f) & 24)) & 255;
				g = 0;
			}
		}
		return b;
	},
	encode: function (a) {
		for (var c = 2, e = "", b = a.length, f = 0, g = 0; g < b; g++)
			if (
				((c = g % 3),
				0 < g && 0 === ((4 * g) / 3) % 76 && (e += "\r\n"),
				(f |= a[g] << ((16 >>> c) & 24)),
				2 === c || 1 === a.length - g)
			)
				(e += String.fromCharCode(
					d((f >>> 18) & 63),
					d((f >>> 12) & 63),
					d((f >>> 6) & 63),
					d(f & 63)
				)),
					(f = 0);
		return (
			e.substr(0, e.length - 2 + c) +
			(2 === c ? "" : 1 === c ? "=" : "==")
		);
	},
};
