var data = '{"type":"alloy"}';

var challenge_config = {
  method: "post",
  url: "https://api.imvu.com/challenge",
  headers: {
    authority: "api.imvu.com",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    accept: "application/json; charset=utf-8",
    "sec-ch-ua-mobile": "?0",
    "x-imvu-application": "welcome/1",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
    "content-type": "application/json; charset=UTF-8",
    origin: "https://fr.secure.imvu.com",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://fr.secure.imvu.com/",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    cookie:
      "osCsid=21840a9a63cf072e29a41b45f86c9ed8; accepted_all_cookies=true; window_session=window_4d3DVNqShunhm9oCYc7yeQ==; _fbp=fb.1.1621321501008.1607545928; __qca=P0-1634396805-1621321578639; _pin_unauth=dWlkPU1HUTJNVGt3TURNdFpEVmxPQzAwT1RVNUxXSXpNR0V0WXpNMlpXRTBPRFl6WkRBNA; _ga=GA1.2.123814217.1621323077; _gid=GA1.2.1940589190.1621323077; __utmc=1; idx=dxx|^9a192e6e-465a-41d0-b020-dad42fccee2e|$mx|^ef563672-08d2-4fe3-8005-14f9acf1556c; sncd=1%2C1621323401%2CeNozNjQytzAwM7fUMQaxDE0NzAAmgQPZ%2Cu9P7nANOtT; _imvu_avnm=jfujfufjfu; login_username=fzefzfezf@gmail.com; LoggedInWithAlloy=; __utma=1.123814217.1621323077.1621323078.1621327920.2; __utmz=1.1621327920.2.2.utmcsr=imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; __utmt=1; imvufp=1554148906; acx=dhttx|^wgU1tQ==|UH3z7M4Z2Qg=|$ipatx|^wgU1tQ==|wn7z7M4Z2Qg=|$pt|^H4sIADCAo2AA/6uuBQBDv6ajAgAAAA==; __utmb=1.2.10.1621327920; prefer_alloy=1; alloy_landing_cookie=1; _gat=1",
  },
  data: data,
};

exports.challenge_config = challenge_config;
