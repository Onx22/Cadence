var axios = require("axios");

var config = {
  method: "get",
  url: "", // set later
  headers: {
    authority: "api.imvu.com",
    "sec-ch-ua":
      '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    accept: "application/json; charset=utf-8",
    "sec-ch-ua-mobile": "?0",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    origin: "https://fr.imvu.com",
    "sec-fetch-site": "same-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://fr.imvu.com/next/",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    cookie:
      "accepted_all_cookies=true; LoggedInWithAlloy=true; _ga=GA1.2.1923527970.1616713652; idx=dxx|^ed4566c7-9daf-4615-9fdf-2c0fc6326769|$mx|^5df727bc-1523-4e98-bdd5-cdff5671e7c3; __qca=P0-1246908453-1616714305377; _fbp=fb.1.1617035086529.867820779; _gid=GA1.2.127522503.1618183287; sncd=1%2C1618759935%2CeNoVjMENwEAIwxbiAQmBsP9ivf4s2TJk7REO7OhciWBup3vnp8NI86xUKHVci9WLgDPrhhs4eug%2FM4Fqvt2QjeR91UUTwg%3D%3D%2CjPXP4U%2FZ1A; osCsid=WQQ7Z9BSSHK3GEK38YPCGQ871; __cfduid=dfba9f78a462ce902d6a0145dce78ea0c1619331594; password_changed=0; prefer_3d=0; _gac_UA-57332006-3=1.1620649495.Cj0KCQjws-OEBhCkARIsAPhOkIbnFjt3Mmovsw-sZ3xMMmrmSeoFHTH0yUdeKcYmT3iZn1u7ow-X7zYaApJZEALw_wcB; window_session=window_8UYE37qGDeQeqhmJl6ZaVg==; __utmc=1; __utmz=1.1620666137.212.57.utmcsr=fr.imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; _imvu_avnm=Saxa; prefer_alloy=1; login_username=saxa; alloy_landing_cookie=1; imvufp=1011731598; acx=dhttx|^HyGKEQ==|tE/3bocT2Qg=|$ipatx|^HyGKEQ==|4H/gXdUT2Qg=|$pt|^H4sIALp1mWAA/6uuBQBDv6ajAgAAAA==; __utma=1.1923527970.1616713652.1620669764.1620673604.214; _gat=1; _imvu_avnm=proShoesMesh; osCsid=WQQ7Z9BSSHK3GEK38YPCGQ871; sncd=1%2C1618901799%2CeNozMjcztbQwNDACAAldAdk%3D%2CW8G%2FzG2aFe",
  },
};

async function getWallet(imvu_id, cookie) {
  config.url = `https://api.imvu.com/wallet/wallet-${imvu_id}`;
  config.cookie = cookie;
  try {
    const walletResponse = await axios(config);
    const wallet =
      walletResponse.data.denormalized[
        `https://api.imvu.com/wallet/wallet-${imvu_id}`
      ].data;

    return { credits: wallet.credits, promo_credits: wallet.promo_credits };
  } catch (e) {
    console.log("error : ", e);
  }
}

exports.wallet = getWallet;
