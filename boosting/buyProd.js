let data3 =
	'{"platform":"Oops !","relations":{"products":["https://api.imvu.com/product/product-54316470"]}}';
let buyProdConfig = {
	method: "post",
	url: "https://api.imvu.com/cart_order",
	headers: {
		authority: "api.imvu.com",
		"sec-ch-ua":
			'" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
		accept: "application/json; charset=utf-8",
		"x-imvu-sauce": "Zn8SX/0qq3rmdDIXzNTIUgvqOSM=",
		"sec-ch-ua-mobile": "?0",
		"x-imvu-application": "next_desktop/1",
		"user-agent":
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
		"content-type": "application/json; charset=UTF-8",
		origin: "https://fr.imvu.com",
		"sec-fetch-site": "same-site",
		"sec-fetch-mode": "cors",
		"sec-fetch-dest": "empty",
		referer: "https://fr.imvu.com/next/shop/product-53770642/",
		"accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
		cookie:
			"accepted_all_cookies=true; LoggedInWithAlloy=true; _ga=GA1.2.1923527970.1616713652; idx=dxx|^ed4566c7-9daf-4615-9fdf-2c0fc6326769|$mx|^5df727bc-1523-4e98-bdd5-cdff5671e7c3; __qca=P0-1246908453-1616714305377; _fbp=fb.1.1617035086529.867820779; _gid=GA1.2.127522503.1618183287; sncd=1%2C1618759935%2CeNoVjMENwEAIwxbiAQmBsP9ivf4s2TJk7REO7OhciWBup3vnp8NI86xUKHVci9WLgDPrhhs4eug%2FM4Fqvt2QjeR91UUTwg%3D%3D%2CjPXP4U%2FZ1A; osCsid=WQQ7Z9BSSHK3GEK38YPCGQ871; __cfduid=dfba9f78a462ce902d6a0145dce78ea0c1619331594; window_session=window_nfIicFMu GyefzQMkpGpYg==; __utmc=1; password_changed=0; prefer_3d=1; prefer_alloy=1; alloy_landing_cookie=1; acx=dhttx|^HyGKEQ==|kkCi/nIK2Qg=|$ipatx|^HyGKEQ==|jvTMUFAK2Qg=|$pt|^H4sIAJaoiWAA/6uuBQBDv6ajAgAAAA==; _imvu_avnm=Dreamerag; login_username=dreamerag; __utma=1.1923527970.1616713652.1619634326.1619677237.124; __utmz=1.1619677237.124.28.utmcsr=fr.imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; __utmt=1; imvufp=2966309281; __utmb=1.2.10.1619677237; _gat=1",
	},
	data: data3,
};

exports.buyProdConfig = buyProdConfig;
exports.data3 = data3;
