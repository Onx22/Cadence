// var axios = require("axios");
const axios = require("axios").default;
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
const {wallet} = require ('../wallet')
const fs = require("fs");

const { logConfig, logData } = require("./vulogging");
const { loggingMeConfig } = require("./loggingMe");
const { sndCrdConfig, data2 } = require("./sndCrd");

let List,
	updated_list,
	gifted_imvu_user,
	new_data2,
	sauce,
	counter,
	parsedList,
	parsedGifterList,
	cookie,
	gifter_counter;

let today = new Date().toString().split(" ").slice(0, 5).join("-");

const sndCrdOp = true;

counter = 34;
gifter_counter = 2;

async function sndCrd() {
	//////////// LOGGING TO IMVU GETTING THE COOKIE >>>>>>>>>>>>
	new_logData = `{"username":"${parsedGifterList[gifter_counter].imvu_username}","password":"${parsedGifterList[gifter_counter].password}","gdpr_cookie_acceptance":true,"remember_device_token":"291ea70948b26c493f871d3f75c669a0"}`;
	logConfig.data = new_logData;

	try {
		var loggingResponse = await axios(logConfig);
		console.log("logging and getting the cookie : success");
		console.log(" infos >>> ", logConfig.data);
		//console.log("logging response", loggingResponse.config.headers);
		sndCrdConfig.headers.cookie = loggingResponse.config.headers.Cookie;
		cookie = loggingResponse.config.headers.Cookie;
		loggingMeConfig.headers.cookie = loggingResponse.config.headers.Cookie;
	} catch (e) {
		console.log("logging : failed");
		console.log(e);
	}

	//////////// GETTING THE SAUCE KEY >>>>>>>>>>>>

	try {
		let loggingMeResponse = await axios(loggingMeConfig);

		//console.log(JSON.stringify(response.data));
		sndCrdConfig.headers["x-imvu-sauce"] =
			loggingMeResponse.data.denormalized[
				"https://api.imvu.com/login/me"
			].data.sauce;

		console.log("getting the sauce : success");
		console.log(
			"sauce :: ",
			loggingMeResponse.data.denormalized["https://api.imvu.com/login/me"]
				.data.sauce
		);
	} catch (e) {
		console.log("error sauce loggin response : ", e);
	}

	gifted_imvu_user = parsedList[counter]["user_id"].toString();
	gifted_imvu_username = parsedList[counter]["imvu_username"].toString();
	console.log(
		"gifted imvu user > ",
		gifted_imvu_user + " " + gifted_imvu_username
	);
	new_data2 = `{"message":"","is_thank_you":false,"txn_id":"gift-263342039-${gifted_imvu_user}-1618902378","type":0,"credit_amount":100,"id":"https://api.imvu.com/user/user-${gifted_imvu_user}"}`;
	sndCrdConfig.data = new_data2;
	sndCrdConfig.url = `https://api.imvu.com/user/user-${parsedGifterList[gifter_counter]["user_id"]}/gifts`;
	// sndCrdConfig.headers.cookie =
	// 	"accepted_all_cookies=true; LoggedInWithAlloy=true; _ga=GA1.2.1923527970.1616713652; idx=dxx|^ed4566c7-9daf-4615-9fdf-2c0fc6326769|$mx|^5df727bc-1523-4e98-bdd5-cdff5671e7c3; __qca=P0-1246908453-1616714305377; _fbp=fb.1.1617035086529.867820779; _gid=GA1.2.127522503.1618183287; sncd=1%2C1618759935%2CeNoVjMENwEAIwxbiAQmBsP9ivf4s2TJk7REO7OhciWBup3vnp8NI86xUKHVci9WLgDPrhhs4eug%2FM4Fqvt2QjeR91UUTwg%3D%3D%2CjPXP4U%2FZ1A; osCsid=WQQ7Z9BSSHK3GEK38YPCGQ871; __cfduid=dfba9f78a462ce902d6a0145dce78ea0c1619331594; password_changed=0; prefer_3d=0; prefer_alloy=1; alloy_landing_cookie=1; _gac_UA-57332006-3=1.1620649495.Cj0KCQjws-OEBhCkARIsAPhOkIbnFjt3Mmovsw-sZ3xMMmrmSeoFHTH0yUdeKcYmT3iZn1u7ow-X7zYaApJZEALw_wcB; window_session=window_8UYE37qGDeQeqhmJl6ZaVg==; __utmc=1; __utma=1.1923527970.1616713652.1620649545.1620651650.211; __utmz=1.1620651650.211.56.utmcsr=fr.imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; _imvu_avnm=Saxa; login_username=saxa; __utmb=1.2.10.1620651650; imvufp=1011731598; acx=dhttx|^HyGKEQ==|tE/3bocT2Qg=|$ipatx|^HyGKEQ==|4FD3bocT2Qg=|$pt|^H4sIAJEumWAA/6uuBQBDv6ajAgAAAA==";



	try {
		const walletResponse = await wallet(parsedGifterList[gifter_counter][user_id],cookie)
		console.log("WALLET RESPONSE >>> "walletResponse)
	} catch(e) {
		// statements
		console.log(e);
	}










	//////////// SEND CREDITS >>>>>>>>>>>>

	try {
		let sndCrdResponse = await axios(sndCrdConfig);
		//console.log("already charged");
		//console.log(sndCrdResponse);

		setTimeout(() => {
			if (counter <= 100) {
				counter++;
				console.log("counter >>> ", counter);
				parsedList[counter].credits = 100;
				sndCrd();
			}
		}, 60000);
	} catch (e) {
		console.log("error, : ", e.response);
		console.log("last object : ", counter);

		// write(parsedList);
		setTimeout(() => {
			counter++;
			if (counter <= 100) {
				console.log(
					"counter >>> ",
					counter + " " + parsedList[counter]["user_id"].toString()
				);
				parsedList[counter].credits = 100;
				sndCrd();
			}
		}, 120000);
	}
}

if (sndCrdOp === true) {
	fs.readFile("./imvu_gifter_list.json", "UTF-8", (err, response) => {
		parsedGifterList = JSON.parse(response);
		fs.readFile("./imvu_accounts_all3.json", "UTF-8", (err, response) => {
			parsedList = JSON.parse(response);
			sndCrd();
		});
	});
}

// axios cookie jar module to acces cookie sent by the api
// err 403 - for gifting request make sur " cookie is set and correct since it might change over "
//err 403 , auth-003 :  make sur x-imvu-sauce is up to date aslo , otherwise it wont work
// err 400 - Bad request - node root isnt set >>> data or body is missing or wrong or not accessible
// next step : buy a product.1618902378
// try to get sauce with cookie jar
// always read the error.response
