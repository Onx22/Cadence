// Module
const axios = require("axios");
const { logConfig, logData } = require("./vulogging");
const { loggingMeConfig } = require("./loggingMe");
const { sndCrdConfig, data2 } = require("./sndCrd");
const { buyProdConfig, data3 } = require("./buyProd");
const { turnWheelConfig } = require("./turnWheelConfig");

let cookie = "";
let sauce = "";
let returnedObject = {};

const imvu_connect = (a, b) => {
	return new Promise((resolve, reject) => {
		const connect = async (user, gifter) => {
			cookie = "";
			new_logData = `{"username":"${user.imvu_username}","password":"${user.password}","gdpr_cookie_acceptance":true,"remember_device_token":""}`;
			logConfig.data = new_logData;
			turnWheelConfig.url = `https://api.imvu.com/roulette/roulette-${user.user_id}`;
			try {
				console.log("============ COOKIE : ", cookie);
				var loggingResponse = await axios(logConfig);
				console.log("logging and getting the cookie : success");
				console.log(" infos >>> ", logData);
				//console.log("logging response", loggingResponse.config.headers);
				cookie = loggingResponse.headers["set-cookie"].join(",");
				// sndCrdConfig.headers.cookie = cookie;
				// buyProdConfig.headers.cookie = cookie;
				loggingMeConfig.headers.cookie = cookie;
				turnWheelConfig.headers.cookie = cookie;
				console.log("COOKIE >>> : ", loggingResponse.headers);
			} catch (e) {
				console.log("logging : failed");
				console.log(e);
				console.log("============ COOKIE : ", cookie);
				reject(e);
			}

			//////////// GETTING THE SAUCE KEY >>>>>>>>>>>>

			try {
				console.log("============ COOKIE : ", cookie);
				let logMeResponse = await axios(loggingMeConfig);

				//console.log(JSON.stringify(response.data));
				sauce =
					logMeResponse.data.denormalized[
						"https://api.imvu.com/login/me"
					].data.sauce;
				// turnWheelConfig.headers["x-imvu-sauce"] = sauce;
				// turnWheelConfig.headers.cookie = cookie;

				console.log("getting the sauce : success");
				console.log(
					"sauce :: ",
					logMeResponse.data.denormalized[
						"https://api.imvu.com/login/me"
					].data.sauce
				);
				returnedObject = {
					user: {
						cookie,
						sauce,
					},
					gifter: {
						cookie: null,
						sauce: null,
					},
				};
				resolve(returnedObject);
			} catch (e) {
				console.log("error sauce loggin response : ", e);
				console.log("============ COOKIE : ", cookie);
				reject(e);
			}
		};
		connect(a, b);
	});
};

exports.imvu_connect = imvu_connect;
