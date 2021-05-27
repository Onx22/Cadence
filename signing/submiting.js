var axios = require("axios");
var data =
  '{\n    "avatarname": "toujoursplushaut5f",\n    "device_id": "",\n    "email": "toujoursplushaut5f@gmail.com",\n    "location": {\n        "country": "US",\n        "region": ""\n    },\n    "profile_info": {\n        "dob": "1997-05-06T22:00:00.000Z"\n    },\n    "reg_token": {\n        "challenge": "EaZ38jdPhoLCYnMK5RVhUQ==",\n        "response": "ET6vFrXeUQf8fRhK0qP8Z4ZH03L5rCOXhP59eBWYWKFJ0/q2+qIivlK5RHkLZULdfP+mPofINAvXXa7iVhrd0w==", "type": "alloy"\n    },\n    "customers_acquired_by": "",\n    "fc_token": "25060a3cd0beeba18.9495136805|r=eu-west-1|mainbgclr=%23eaeaea|metabgclr=transparent|guitextcolor=%23404040|metaiconclr=%23a8a8a8|meta=7|pk=0C2B415C-D772-47D4-A183-34934F786C7E|at=40|rid=54|atp=2|cdn_url=https://cdn.arkoselabs.com/fc|lurl=https://audio-eu-west-1.arkoselabs.com|surl=https://funcaptcha.com",\n    "registration_flow": "welcome",\n    "external": {\n        "hasoffers": {\n            "transaction_id": null,\n            "offer_id": null,\n            "aff_sub": null,\n            "aff_sub2": null,\n            "aff_sub3": null,\n            "aff_sub4": null,\n            "aff_sub5": null,\n            "affiliate_id": null,\n            "affiliate_name": null,\n            "currency": null,\n            "payout": null,\n            "offer_name": null\n        }\n    },\n    "password": "plusbellelavief22",\n    "display_name": "toujoursplushaut5f",\n    "products": [\n        "191",\n        "13759128",\n        "32781990",\n        "33704525",\n        "37819127",\n        "37819614",\n        "37819748",\n        "30297934",\n        "31600774",\n        "37819912"\n    ]\n}';

var config = {
  method: "post",
  url: "https://api.imvu.com/account",
  headers: {
    authority: "api.imvu.com",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    accept: "application/json; charset=utf-8",
    "accept-language": "undefined",
    "sec-ch-ua-mobile": "?0",
    "x-imvu-application": "welcome/1",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4530.212 Safari/537.36",
    "content-type": "application/json; charset=UTF-8",
    origin: "https://secure.imvu.com",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://secure.imvu.com/",
    cookie:
      "osCsid=21840a9a63cf072e29a41b45f86c9ed8; accepted_all_cookies=true; window_session=window_4d3DVNqShunhm9oCYc7yeQ==; _fbp=fb.1.1621321501008.1607545928; __qca=P0-1634396805-1621321578639; _pin_unauth=dWlkPU1HUTJNVGt3TURNdFpEVmxPQzAwT1RVNUxXSXpNR0V0WXpNMlpXRTBPRFl6WkRBNA; _ga=GA1.2.123814217.1621323077; _gid=GA1.2.1940589190.1621323077; __utmc=1; idx=dxx|^9a192e6e-465a-41d0-b020-dad42fccee2e|$mx|^ef563672-08d2-4fe3-8005-14f9acf1556c; sncd=1%2C1621323401%2CeNozNjQytzAwM7fUMQaxDE0NzAAmgQPZ%2Cu9P7nANOtT; _imvu_avnm=jfujfufjfu; login_username=fzefzfezf@gmail.com; LoggedInWithAlloy=; __utma=1.123814217.1621323077.1621323078.1621327920.2; __utmz=1.1621327920.2.2.utmcsr=imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; __utmt=1; imvufp=1554148906; acx=dhttx|^wgU1tQ==|UH3z7M4Z2Qg=|$ipatx|^wgU1tQ==|wn7z7M4Z2Qg=|$pt|^H4sIADCAo2AA/6uuBQBDv6ajAgAAAA==; __utmb=1.2.10.1621327920; prefer_alloy=1; alloy_landing_cookie=1; _gat=1; sncd=1%2C1621347723%2CeNozNjQytzAwM7fUMQaxDE0NzCAsSwNLIwBX3gXe%2Cf0cMIlvzY%2F",
  },
  data: data,
};

exports.config = config;
exports.data = data;
