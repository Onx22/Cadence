// ============"= sending credits Request content =====================

let data2 =
	'{"message":"","is_thank_you":false,"txn_id":"gift-276598102-276017238","type":0,"credit_amount":100,"id":"https://api.imvu.com/user/user-276017238"}';

let sndCrdConfig = {
	method: "post",
	url: "", // set later
	headers: {
		authority: "api.imvu.com",
		"sec-ch-ua":
			'" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
		accept: "application/json; charset=utf-8",
		"x-imvu-sauce": "/HgQGA3GlNFT87y63ksOEPeFKJs=", // set after first request
		"sec-ch-ua-mobile": "?0",
		"x-imvu-application": "next_desktop/1",
		"user-agent":
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36",
		"content-type": "application/json; charset=UTF-8",
		origin: "https://fr.imvu.com",
		"sec-fetch-site": "same-site",
		"sec-fetch-mode": "cors",
		"sec-fetch-dest": "empty",
		referer: "https://fr.imvu.com/next/home/",
		"accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
		cookie:
			"accepted_all_cookies=true; LoggedInWithAlloy=true; _ga=GA1.2.1923527970.1616713652; idx=dxx|^ed4566c7-9daf-4615-9fdf-2c0fc6326769|$mx|^5df727bc-1523-4e98-bdd5-cdff5671e7c3; __qca=P0-1246908453-1616714305377; _fbp=fb.1.1617035086529.867820779; _gid=GA1.2.127522503.1618183287; sncd=1%2C1618759935%2CeNoVjMENwEAIwxbiAQmBsP9ivf4s2TJk7REO7OhciWBup3vnp8NI86xUKHVci9WLgDPrhhs4eug%2FM4Fqvt2QjeR91UUTwg%3D%3D%2CjPXP4U%2FZ1A; password_changed=0; prefer_alloy=1; osCsid=WQQ7Z9BSSHK3GEK38YPCGQ871; __utmz=1.1619100549.103.22.utmcsr=fr.imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; _imvu_avnm=proShoesMesh; login_username=proshoesmesh; imvufp=1721254838; acx=dhttx|^HyGKEQ==|Inkc1EkH2Qg=|$ipatx|^HyGKEQ==|RHoc1EkH2Qg=|$pt|^H4sIACdchGAA/6uuBQBDv6ajAgAAAA==; __utma=1.1923527970.1616713652.1619299342.1619331596.106; __cfduid=dfba9f78a462ce902d6a0145dce78ea0c1619331594; alloy_landing_cookie=1; window_session=window_nfIicFMu GyefzQMkpGpYg==; _gat=1",
	},
	data: data2,
};

exports.sndCrdConfig = sndCrdConfig;
exports.data2 = data2;
