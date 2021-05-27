// Logg in imvu and get the sauce key

let loggingMeConfig = {
	method: "get",
	url: "https://api.imvu.com/login/me",
	headers: {
		authority: "api.imvu.com",
		"sec-ch-ua":
			'" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
		accept: "application/json; charset=utf-8",
		"sec-ch-ua-mobile": "?0",
		"user-agent":
			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
		origin: "https://fr.imvu.com",
		"sec-fetch-site": "same-site",
		"sec-fetch-mode": "cors",
		"sec-fetch-dest": "empty",
		referer: "https://fr.imvu.com/next/",
		"accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
		Cookie: "",
	},
};

exports.loggingMeConfig = loggingMeConfig;
