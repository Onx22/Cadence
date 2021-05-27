var axios = require("axios");
var data = "{}";

var mail_verif_config = {
  method: "post",
  url: "https://api.imvu.com/email/send_verification",
  headers: {
    authority: "api.imvu.com",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    accept: "application/json; charset=utf-8",
    "x-imvu-sauce": "vdA6GIUQWFfYnm1uSJQdFLe-Xn4=",
    "sec-ch-ua-mobile": "?0",
    "x-imvu-application": "next_desktop/1",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "content-type": "application/json; charset=UTF-8",
    origin: "https://www.imvu.com",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://www.imvu.com/next/settings/email/",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    cookie:
      "osCsid=21840a9a63cf072e29a41b45f86c9ed8; accepted_all_cookies=true; _fbp=fb.1.1621321501008.1607545928; __qca=P0-1634396805-1621321578639; _ga=GA1.2.123814217.1621323077; idx=dxx|^9a192e6e-465a-41d0-b020-dad42fccee2e|$mx|^ef563672-08d2-4fe3-8005-14f9acf1556c; prefer_alloy=1; LoggedInWithAlloy=true; sncd=1%2C1621349650%2CeNotyckNADAIA7CF%2BoBwZv%2FFqhZ%2BlmyKasnisScNyRGF%2BKInfNWcZVToBWVJC%2FE%3D%2CpJXOn5eu4e; _imvu_avnm=fzefzefefezfefd; login_username=fefzefezfezcfez@gmail.com; imvufp=3818146938; __gads=ID=0164f2804968e702:T=1621409477:S=ALNI_MYMWzYn4GGdQdwsdfcSeQIaU7Xo4A; _pin_unauth=dWlkPVlUZzNPR0U1WVRndE9UVTNZeTAwT1RZMkxXSXpaVEF0WXpka1pXTXdZekF4T0Raaw; alloy_landing_cookie=1; _gid=GA1.2.1441870742.1621872145; __utma=1.123814217.1621323077.1621409470.1621872146.5; __utmc=1; __utmz=1.1621872146.5.5.utmcsr=imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; __utmt=1; __utmb=1.3.10.1621872146; acx=dhttx|^wgU1jg==|Lml4hs0e2Qg=|$ipatx|^wgU1jg==|Wmp4hs0e2Qg=|$pt|^H4sIAGjOq2AA/6uuBQBDv6ajAgAAAA==; window_session=window_Q p0anWXRiEWeq2AJfKFXQ==; _gat=1; sncd=1%2C1621347723%2CeNozNjQytzAwM7fUMQaxDE0NzCAsSwNLIwBX3gXe%2Cf0cMIlvzY%2F",
  },
  data: data,
};

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
exports.mail_verif_config = mail_verif_config;
