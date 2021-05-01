import CryptoJS from "crypto-js";
const axios = require("axios");


var auth_uri_sandbox = "https://sandbox-authservice.priaid.ch/login";
var auth_uri = "https://authservice.priaid.ch/login";

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY_SANDBOX
const API_KEY = process.env.REACT_APP_API_KEY_SANDBOX

//function to get hashed string
const genHashString = () => {
  const hash = CryptoJS.HmacMD5(auth_uri_sandbox, SECRET_KEY);
  const hashString = hash.toString(CryptoJS.enc.Base64);
  return hashString;
};

export const getToken = () => {
  const hashString = genHashString();

  return axios({
    method: "POST",
    url: auth_uri_sandbox,
    headers: {
      Authorization: `Bearer ${API_KEY}:${hashString}`,
    },
  })
    .then((res) => {
      return res.data.Token;
    })
    .catch((e) => console.log("ERROR", e));
};