// var axios = require("axios");
const axios = require("axios").default;
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
const fs = require("fs");

const { logConfig, logData } = require("./vulogging");
const { loggingMeConfig } = require("./loggingMe");
const { roulette_config, data2 } = require("./roulette");


let List,
	updated_list,
	gifted_imvu_user,
	new_data2,
	new_data3,
	sauce,
	counter,
	parsedList;

let today = new Date().toString().split(" ").slice(0, 5).join("-");

const sndCrdOp = false;
const buyProdOp = false;

counter = 1;

async function roulette() {
	//////////// LOGGING TO IMVU GETTING THE COOKIE >>>>>>>>>>>>
	new_logData = `{"username":"${parsedList[counter].imvu_username}","password":"${parsedList[counter].password}","gdpr_cookie_acceptance":true,"remember_device_token":"50e9fd359f3f07f359d6fafd137cff78"}`;
	logConfig.data = new_logData;

	try {
		var loggingResponse = await axios(logConfig);
		console.log("logging and getting the cookie : success");
		console.log(" infos >>> ", logData);
		//console.log("logging response", loggingResponse.config.headers);
		rouletteConfig.headers.cookie = loggingResponse.config.headers.Cookie;
		buyProdConfig.headers.cookie = loggingResponse.config.headers.Cookie;
		loggingMeConfig.headers.cookie = loggingResponse.config.headers.Cookie;


	} catch (e) {
		console.log("logging : failed");
		console.log(e);
	}

	//////////// GETTING THE SAUCE KEY >>>>>>>>>>>>

	try {
		let loggingMeResponse = await axios(loggingMeConfig);

		//console.log(JSON.stringify(response.data));
		rouletteConfig.headers["x-imvu-sauce"] =
			loggingMeResponse.data.denormalized[
				"https://api.imvu.com/login/me"
			].data.sauce;

		buyProdConfig.headers["x-imvu-sauce"] =
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
/////////////////// BUYING THE PRODUCT ////////////////////////////

	try {
		roulette_Response = await axios(roulette_config);
		console.log(JSON.stringify(roulette_Response.data));
		console.log("purchase success");
		setTimeout(() => {
			if (counter <= 99) {
				counter++;
				console.log("counter >>> ", counter);

				roulette();
			}
		}, 3000);
	} catch (e) {
		console.log(e);
		console.log("purchase failed");
		setTimeout(() => {
			if (counter <= 99) {
				counter++;
				console.log("counter >>> ", counter);

				roulette();
			}
		}, 3000);
	}
/////////////////// READING THE LIST FILE //////////////////////////

fs.readFile("./imvu_accounts_all3.json", "UTF-8", (err, response) => {
	parsedList = JSON.parse(response);
	logData.username = parsedList[counter].imvu_username;
	logData.password = parsedList[counter].password;

	//console.log("parsed list : ", parsedList);

	if (rouletteOp === true) {
		roulette();
	} else if (buyProdOp === true) {
		roulette();
	}
});

// axios cookie jar module to acces cookie sent by the api
// err 403 - for gifting request make sur " cookie is set and correct since it might change over "
//err 403 , auth-003 :  make sur x-imvu-sauce is up to date aslo , otherwise it wont work
// err 400 - Bad request - node root isnt set >>> data or body is missing or wrong or not accessible
// next step : buy a product.1618902378
// try to get sauce with cookie jar