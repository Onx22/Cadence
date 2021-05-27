// Module
// var axios = require("axios");
// var qs = require("qs");
// var data = qs.stringify({
// 	sid: '"us-east-1"',
// 	"game_token ": "97160a12ca94695f8.9429230405",
// 	session_token: "63960a12c8dd90fb1.2735429805",
// });
// var config = {
// 	method: "post",
// 	url: "https://funcaptcha.com/fc/ekey/",
// 	headers: {
// 		"user-agent":
// 			"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
// 		origin: "https://funcaptcha.com",
// 		referer: "https://fr.secure.imvu.com/welcome/ftux/account/",
// 		"Content-Type": "application/x-www-form-urlencoded",
// 	},
// 	data: data,
// };

// axios(config)
// 	.then(function (response) {
// 		console.log(JSON.stringify(response.data));
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

const puppeteer = require("puppeteer");
const axios = require("axios");

// let

// //////

const bypassConfig = {
	url:
		"http://2captcha.com/in.php?key=a834a8b13b1534258c593e8f0003fe7a&method=funcaptcha&publickey=0C2B415C-D772-47D4-A183-34934F786C7E&surl=https://funcaptcha.com&pageurl=https://fr.secure.imvu.com/welcome/ftux/account/",
	method: "POST",
};

const bypass = () => {
	return new Promise((resolve, reject) => {
		const req = async (id) => {
			try {
				const myId = id;
				const reqResponse = await axios.get(
					`http://2captcha.com/res.php?key=a834a8b13b1534258c593e8f0003fe7a&action=get&id=${id}`
				);
				const formatedResponse = reqResponse.data
					.toString()
					.split("|")
					.slice(1)
					.join("|")
					.toString();
				console.log(formatedResponse);
				if (reqResponse.data === "CAPCHA_NOT_READY") {
					setTimeout(() => {
						console.log("asking for response ...");
						req(myId);
					}, 5000);
				} else {
					resolve(formatedResponse);
				}
			} catch (e) {
				// statements
				console.log(e);
			}
		};

		const b = async () => {
			try {
				const bypassResponse = await axios.get(
					"http://2captcha.com/in.php?key=a834a8b13b1534258c593e8f0003fe7a&method=funcaptcha&publickey=0C2B415C-D772-47D4-A183-34934F786C7E&surl=https://funcaptcha.com&pageurl=https://fr.secure.imvu.com/welcome/ftux/account/"
				);
				setTimeout(() => {
					console.log(
						"bypassResponse number : ",
						bypassResponse.data.split("|")[1]
					);
					req(bypassResponse.data.split("|")[1]);
				}, 20000);
				console.log(bypassResponse);
			} catch (e) {
				// statements
				console.log(e);
			}
		};
		b();
	});
};

exports.bypass = bypass;

// {"ct":"/jkJAf2VDWapsCYzPS/JE9Sz5UN+rpoJARDvaIA2A8ciaP8MxOX+6xNEnunzMGaxT//z99OGEOOweFF30WZUfw==

// const chromeOptions = {
// 	executablePath:
// 		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
// 	headless: false,
// 	slowmo: 1000,
// 	defaultViewport: null,
// 	excludeSwitchest: ["enable-automation"],
// };

// (async () => {
// 	const browser = await puppeteer.launch(chromeOptions);
// 	const page = await browser.newPage();
// 	await page.goto("https://fr.secure.imvu.com/welcome/ftux/account/", {
// 		waitUntil: "networkidle0",
// 	});
// 	await page.screenshot({ path: "example.png" });

// 	await page.click(".accept-cookies", { clickCount: 1 });
// 	await page.type(".signup_displayname_input", "Anajosua", { delay: 100 });
// })();
//a834a8b13b1534258c593e8f0003fe7a
//0C2B415C-D772-47D4-A183-34934F786C7E

// const config = {
// 	public_key: "0C2B415C-D772-47D4-A183-34934F786C7E",
// 	pageurl: "",
// };
