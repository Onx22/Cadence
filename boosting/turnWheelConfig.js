var axios = require("axios");
var data4 = '{"status":"redeemed"}';

var config = {
  method: "post",
  url: "https://api.imvu.com/roulette/roulette-263342039",
  headers: {
    authority: "api.imvu.com",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    accept: "application/json; charset=utf-8",
    "x-imvu-sauce": "r5nZ6/nyLAlOFsB3oadMwW90e0g=",
    "sec-ch-ua-mobile": "?0",
    "x-imvu-application": "next_desktop/1",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    "content-type": "application/json; charset=UTF-8",
    origin: "https://fr.imvu.com",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://fr.imvu.com/next/home/",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    cookie:
      "osCsid=21840a9a63cf072e29a41b45f86c9ed8; accepted_all_cookies=true; _fbp=fb.1.1621321501008.1607545928; __qca=P0-1634396805-1621321578639; _ga=GA1.2.123814217.1621323077; idx=dxx|^9a192e6e-465a-41d0-b020-dad42fccee2e|$mx|^ef563672-08d2-4fe3-8005-14f9acf1556c; prefer_alloy=1; LoggedInWithAlloy=true; sncd=1,1621349650,eNotyckNADAIA7CF+oBwZv/FqhZ+lmyKasnisScNyRGF+KInfNWcZVToBWVJC/E=,pJXOn5eu4e; _imvu_avnm=fzefzefefezfefd; login_username=fefzefezfezcfez@gmail.com; __utma=1.123814217.1621323077.1621348111.1621409470.4; __utmz=1.1621409470.4.4.utmcsr=imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; imvufp=3818146938; acx=dhttx|^wgU1tQ==|UH3z7M4Z2Qg=|$ipatx|^wgU1tQ==|DhT6Epga2Qg=|$pt|^H4sIAL6+pGAA/6uuBQBDv6ajAgAAAA==; __gads=ID=0164f2804968e702:T=1621409477:S=ALNI_MYMWzYn4GGdQdwsdfcSeQIaU7Xo4A; alloy_landing_cookie=1; _gid=GA1.2.28631823.1621608226; _gat=1; _pin_unauth=dWlkPVlUZzNPR0U1WVRndE9UVTNZeTAwT1RZMkxXSXpaVEF0WXpka1pXTXdZekF4T0Raaw; window_session=window_Xk17mMgH3qWesmaVOhah1Q==",
  },
  data: '{"status":"redeemed"}',
};

exports.turnWheelConfig = config;
