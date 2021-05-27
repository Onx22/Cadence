// Main
const axios = require("axios");
const { reg_token_response } = require("./reg_token_response");
const { reg_token_inter } = require("./reg_token_inter");
let { config, data } = require("./submiting");
const { bypass } = require("./bypass");
const { challenge_config } = require("./challenge");
const fs = require("fs");
const faker = require("faker");
const { imvu_connect } = require("../boosting/imvu_connect");
const { send_mail_config } = require("./send_mail.verif");

// console.log("reg_token_inter : ", reg_token_inter("U/Ncy9/V1F7UjSqg6qP6dA=="));
// console.log(
// 	"reg_token_response : ",
// 	reg_token_response(
// 		"EaZ38jdPhoLCYnMK5RVhUVduZCs1cUEvNUkhPjN1Qn55Izt9NFpRR1k2UEF7Vi4lJSQoRTJ1LHY="
// 	)
// );
let fc_token, challenge_token, final_token;
let avatarname = "";
let email = "unesourie1+" + avatarname + "@gmail.com";
let display_name = avatarname;
let info_key = 25;
let password = "plusbellelavie236";
let new_account_list = [];
let counter = 0;
let cookie = "";
let parsedList; // array of all the account
let user = {
	imvu_username: avatarname,
	password,
};

const get_fc_token = async () => {
	try {
		const response = await bypass();
		fc_token = response;
		console.log("fc token : ", fc_token);
		get_challenge_token();
	} catch (e) {
		// statements
		console.log(e);
	}
};

const get_challenge_token = async () => {
	try {
		const response = await axios(challenge_config);
		challenge_token =
			response.data.denormalized["https://api.imvu.com/challenge"].data
				.challenge;
		console.log("challenge_token : ", challenge_token);
		final_token = reg_token_response(reg_token_inter(challenge_token));
		submit();
	} catch (e) {
		// statements
		console.log(e);
	}
};

const submit = async () => {
	/////////////            CONNECT            ////////////////                     ////////////////////////
	user.imvu_username = parsedList[counter].imvu_username;
	user.password = parsedList[counter].password;

	try {
		connectionResponse = await imvu_connect(user);
		cookie = connectionResponse.user.cookie;
		console.log("%%%%%%%%%%%%%%% COOKIE ::: ", cookie);
	} catch (e) {
		console.log(e);
	}
	// \\\\\\\\\\\\\\\          \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\\\          \\\\\\\\\\\\\\\\\\\
	try {
		let new_data = {
			avatarname,
			device_id: "",
			email,
			location: {
				country: "US",
				region: "",
			},
			profile_info: {
				dob: "1995-05-06T22:00:00.000Z",
			},
			reg_token: {
				challenge: challenge_token,
				response: final_token,
				type: "alloy",
			},
			customers_acquired_by: "",
			fc_token: fc_token,
			registration_flow: "welcome",
			external: {
				hasoffers: {
					transaction_id: null,
					offer_id: null,
					aff_sub: null,
					aff_sub2: null,
					aff_sub3: null,
					aff_sub4: null,
					aff_sub5: null,
					affiliate_id: null,
					affiliate_name: null,
					currency: null,
					payout: null,
					offer_name: null,
				},
			},
			password,
			display_name: display_name,
			products: [
				"191",
				"13759128",
				"32781990",
				"33704525",
				"37819127",
				"37819614",
				"37819748",
				"30297934",
				"31600774",
				"37819912",
			],
		};
		config.data = JSON.stringify(new_data);
		config.headers.cookie = cookie;
		const response = await axios(config);
		console.log("response :", JSON.stringify(response.data));
		const new_imvu_user = {
			imvu_username:
				response.data.denormalized["https://api.imvu.com/account"].data
					.avatarname,
			imvu_user_id:
				response.data.denormalized["https://api.imvu.com/account"].data
					.customers_id,
			password,
		};
		new_account_list.push(new_imvu_user);

		fs.appendFile(
			"../imvu_account_all5.json",
			"," + JSON.stringify(new_imvu_user),
			"utf8",
			(e) => {
				console.log(e);
			}
		);
		manager();
	} catch (e) {
		// statements

		console.log(e);
	}
};

const manager = () => {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	info_key = getRandomInt(500);
	avatarname = (faker.name.firstName() + faker.name.lastName())
		.split(" ")
		.join("")
		.toLowerCase();
	avatarname =
		avatarname.length > 15
			? avatarname.slice(0, getRandomInt(5) + 10) + info_key
			: avatarname + info_key;
	display_name = avatarname;
	password += info_key;
	email = "unesourie1+" + avatarname + "@gmail.com";
	console.log("RANDOM NAME :", avatarname);
	if (counter < 100) {
		counter++;

		////////////// READ FILE /////////// /////////////////// /////////////////// ///////

		fs.readFile(
			"../boosting/imvu_accounts_all3.json",
			"UTF-8",
			(err, response) => {
				parsedList = JSON.parse(response);

				//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

				//console.log("parsed list : ", parsedList);
			}
		);
		get_fc_token();
	}
};

manager();
// let name = faker.name.findName();
// let name2 = name.split(" ").join("");

// if (name.length > 10) {
// 	name2 = name2.slice(0, 10);
// }
// console.log(name2);
