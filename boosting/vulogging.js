// Module
// ============= Logging Request content ====================
const http = require("http");
const https = require("https");

let logData =
	'{"username":"dreamerag","password":"kamikaze972","gdpr_cookie_acceptance":false,"remember_device_token":"50e9fd359f3f07f359d6fafd137cff78"}';

let logConfig = {
	method: "post",
	url: "https://api.imvu.com/login",
	jar: "o", // set afterward
	headers: {
		authority: "api.imvu.com",
		"sec-ch-ua":
			'" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
		accept: "application/json; charset=utf-8",
		"sec-ch-ua-mobile": "?0",
		"x-imvu-application": "welcome/1",
		"user-agent":
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/547.36",
		"content-type": "application/json; charset=UTF-8",
		origin: "https://fr.secure.imvu.com",
		"sec-fetch-site": "same-site",
		"sec-fetch-mode": "cors",
		"sec-fetch-dest": "empty",
		httpAgent: new http.Agent({ keepAlive: false }),
		httpsAgent: new https.Agent({ keepAlive: false }),
		Cookie:
			"cookie: osCsid=8296e6a36173a809c6b876017b78d603; accepted_all_cookies=true; window_session=window_jwdgBKk3/S5xF3xEvVrVIA==; _ga=GA1.2.1038185213.1621920926; _gid=GA1.2.1537191456.1621920926; _gat=1; __qca=P0-1419011372-1621920927816",
	},
	data: logData,
};

exports.logConfig = logConfig;
exports.logData = logData;
//"accepted_all_cookies=true; _ga=GA1.2.1923527970.1616713652; idx=dxx|^ed4566c7-9daf-4615-9fdf-2c0fc6326769|$mx|^5df727bc-1523-4e98-bdd5-cdff5671e7c3; __qca=P0-1246908453-1616714305377; _fbp=fb.1.1617035086529.867820779; _gid=GA1.2.127522503.1618183287; osCsid=WQQ7Z9BSSHK3GEK38YPCGQ871; __cfduid=dfba9f78a462ce902d6a0145dce78ea0c1619331594; password_changed=0; prefer_3d=0; LoggedInWithAlloy=true; prefer_alloy=1; sncd=1%2C1621534962%2CeNolycERACEIA8CGfEggkPTf2On525nNwIzpWHmkHVW%2FnEVfKZTqlXuMJnuB4mnorjlMP8nAB36xEAM%3D%2CZJSV40nuJj; _imvu_avnm=AmiTherealoneYea21; login_username=AmiTherealoneYea21; __utma=1.1923527970.1616713652.1621529169.1621534966.11; __utmz=1.1621534966.11.7.utmcsr=fr.imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; imvufp=203964087; acx=dhttx|^HyGKEQ==|0F0cnf0a2Qg=^wgU1eg==|zJr1xK4b2Qg=|$ipatx|^wgU1eg==|hJz1xK4b2Qg=|$pt|^H4sIAPaopmAA/6uuBQBDv6ajAgAAAA==; alloy_landing_cookie=1; window_session=window_vf9OY  ahfjyGB7tQ4p/RA==",
