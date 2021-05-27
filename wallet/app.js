const { wallet } = require("./wallet");

async function getWallet(id) {
  try {
    const response = await wallet(id);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}
const list = [
  {
    imvu_username: "Olivia543261",
    user_id: "308543327",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Emma213465",
    user_id: "308471076",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Ava378975",
    user_id: "308543535",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Sophia547676",
    user_id: "308567982",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Isabella546768",
    user_id: "308544417",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Charlotte7657463",
    user_id: "308545235",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Amelia876785",
    user_id: "308557475",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Mia986875",
    user_id: "308557985",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Harper675878",
    user_id: "308560953",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Evelyn764653",
    user_id: "308561586",
    password: "Salmanimvu",
  },
  {
    imvu_username: "Abigail574787",
    user_id: "308562733",
    password: "Salmanimvu",
  },
];
let x = 1;

getWallet(
  258579328,
  "accepted_all_cookies=true; LoggedInWithAlloy=true; _ga=GA1.2.1923527970.1616713652; idx=dxx|^ed4566c7-9daf-4615-9fdf-2c0fc6326769|$mx|^5df727bc-1523-4e98-bdd5-cdff5671e7c3; __qca=P0-1246908453-1616714305377; _fbp=fb.1.1617035086529.867820779; _gid=GA1.2.127522503.1618183287; sncd=1,1618759935,eNoVjMENwEAIwxbiAQmBsP9ivf4s2TJk7REO7OhciWBup3vnp8NI86xUKHVci9WLgDPrhhs4eug/M4Fqvt2QjeR91UUTwg==,jPXP4U/Z1A; osCsid=WQQ7Z9BSSHK3GEK38YPCGQ871; __cfduid=dfba9f78a462ce902d6a0145dce78ea0c1619331594; password_changed=0; prefer_3d=0; _gac_UA-57332006-3=1.1620649495.Cj0KCQjws-OEBhCkARIsAPhOkIbnFjt3Mmovsw-sZ3xMMmrmSeoFHTH0yUdeKcYmT3iZn1u7ow-X7zYaApJZEALw_wcB; window_session=window_8UYE37qGDeQeqhmJl6ZaVg==; __utmc=1; prefer_alloy=1; alloy_landing_cookie=1; _gat=1; _imvu_avnm=Bioh; login_username=Bioh; __utma=1.1923527970.1616713652.1620673604.1620719362.215; __utmz=1.1620719362.215.58.utmcsr=fr.imvu.com|utmccn=(referral)|utmcmd=referral|utmcct=/next/; __utmt=1; __utmb=1.1.10.1620719362; imvufp=2456171553; acx=dhttx|^HyGKEQ==|gHFeSlEU2Qg=|$ipatx|^HyGKEQ==|enJeSlEU2Qg=|$pt|^H4sIAAI3mmAA/6uuBQBDv6ajAgAAAA=="
);
