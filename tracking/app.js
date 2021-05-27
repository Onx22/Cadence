const axios = require("axios");

let productName = "Vanilla [F]";
let cat1 = "101";
let cat2 = "316%2C324";
let offset = 0;
let limit = 100;
let count;

var config = {
	method: "get",
	url: `https://api.imvu.com/product?cat=108&no_cat=316%2C324&product_rating=0&offset=${offset}&limit=${limit}`,
	headers: {
		authority: "api.imvu.com",
		"sec-ch-ua":
			'" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
		accept: "application/json; charset=utf-8",
		"sec-ch-ua-mobile": "?0",
		"user-agent":
			"Mozilla/5.0 (Macintosh; Intel Mac ) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0 Safari/537.36",
		origin: "https://fr.imvu.com",
		"sec-fetch-site": "same-site",
		"sec-fetch-mode": "cors",
		"sec-fetch-dest": "empty",
		referer: "https://fr.imvu.com/next/av/noemie1413/",
		"accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
		cookie:
			"__cfduid=dca2a227dfa6534472c7ff53b4d6b7c8c1616711126; accepted_all_cookies=true; LoggedInWithAlloy=true; _ga=GA1.2.1923527970.1616713652; idx=dxx|^ed4566c7-9daf-4615-9fdf-2c0fc6326769|$mx|^5df727bc-1523-4e98-bdd5-cdff5671e7c3; __qca=P0-1246908453-1616714305377; _fbp=fb.1.1617035086529.867820779; _gid=GA1.2.127522503.1618183287; sncd=1%2C1618759935%2CeNoVjMENwEAIwxbiAQmBsP9ivf4s2TJk7REO7OhciWBup3vnp8NI86xUKHVci9WLgDPrhhs4eug%2FM4Fqvt2QjeR91UUTwg%3D%3D%2CjPXP4U%2FZ1A; password_changed=0; __utmc=1; window_session=window_3D/lzi l7RaQ8iCgrGZ1YA==; __utmz=1.1618821497.87.17.utmcsr=fr.imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; prefer_alloy=1; alloy_landing_cookie=1; __utma=1.1923527970.1616713652.1618872096.1618899538.92; osCsid=XEBSAE6J1SFE9U2CR29L84KW3; _imvu_avnm=proShoesMesh; login_username=proshoesmesh; __utmb=1.8.10.1618899538; imvufp=1721254838; acx=dhttx|^HyGKEQ==|fu95eg4D2Qg=|$ipatx|^HyGKEQ==|colWS8gD2Qg=|$pt|^H4sIADh5fmAA/6uuBQBDv6ajAgAAAA==; _imvu_avnm=proShoesMesh; osCsid=XEBSAE6J1SFE9U2CR29L84KW3; sncd=1%2C1618901799%2CeNozMjcztbQwNDACAAldAdk%3D%2CW8G%2FzG2aFe; window_session=window_3D/lzi l7RaQ8iCgrGZ1YA==",
	},
};

async function getProd() {
	config.url = `https://api.imvu.com/product?cat=${cat1}&no_cat=${cat2}&product_rating=0&offset=${offset}&limit=${limit}`;

	try {
		const prodListRrespose = await axios(config);
		const prodList = Object.values(prodListRrespose.data.denormalized);
		//console.log(prodList[0].data);
		console.log("offset : ", offset);
		console.log("limit : ", limit);

		const trackedProd = prodList.find((e, i) => {
			if (e.data.product_name === productName) {
				count = i;
				return e.data.product_name === productName;
			}
		});
		console.log(trackedProd);
		if (trackedProd === undefined) {
			offset += 100;
			limit += 100;

			getProd();
		}
		setTimeout(() => {
			getProd();
		}, 6000 * 20);

		console.log("count >>", count + offset);
		console.log("page >>", Math.floor((count + offset) / 12) + 1);
	} catch (e) {
		// statements
		console.log(e);
	}
}

getProd();
//cat 1 10
