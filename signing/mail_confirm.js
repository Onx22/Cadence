const puppeteer = require("puppeteer");

const chromeOptions = {
	executablePath:
		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	headless: false,
	slowmo: 2000,
	defaultViewport: null,
	excludeSwitchest: ["enable-automation"],
};

(async () => {
	const browser = await puppeteer.launch(chromeOptions);
	const page = await browser.newPage();
	await page.goto("https://mail.google.com/mail/u/0/#inbox");
	await page.screenshot({ path: "example.png" });
	await page.type("#identifierId", "unesourie1@gmail.com", { delay: 500 });
	await page.click(
		'button[class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc qIypjc TrZEUc lw1w4b"]',
		{ clickCount: 1 }
	);
})();

// 	await page.goto("https://fr.secure.imvu.com/welcome/ftux/account/", {
// 		waitUntil: "networkidle0",
// 	});
// 	await page.screenshot({ path: "example.png" });

// 	await page.click(".accept-cookies", { clickCount: 1 });
// 	await page.type(".signup_displayname_input", "Anajosua", { delay: 100 });
//
