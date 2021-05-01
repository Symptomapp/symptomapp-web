import { getToken } from "./AuthApimedicService";
import axios from "axios";

export const getBodyLocation = (locationId) => {
  const locationURLSandbox = `https://sandbox-healthservice.priaid.ch/body/locations`;
  return getToken().then((authToken) => {
    return axios
      .get(
        `${locationURLSandbox}`,
        {
          params: {
            token: authToken,
            format: "json",
            language: "en-gb",
            locationId: locationId,
          },
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      )
      .then((data) => {
        return data.data;
      })
      .catch((e) => console.log("ERROR", e));
  });
};

export const getBodySymptoms = (locationId) => {
  const symptomsURLSandbox = `https://sandbox-healthservice.priaid.ch/symptoms/${locationId}/0`;
  return getToken().then((authToken) => {
    return axios
      .get(
        `${symptomsURLSandbox}`,
        {
          params: {
            token: authToken,
            format: "json",
            language: "en-gb",
            locationId: locationId,
            selectorStatus: "man",
          },
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      )
      .then((res) => {
        //console.log(res.data);
        return res.data;
      })
      .catch((e) => console.log("ERROR", e));
  });
};

export const getDiadnosis = (symptomId) => {
  const symptomsURLSandbox = `https://sandbox-healthservice.priaid.ch/diagnosis`;
  return getToken().then((authToken) => {
    return axios
      .get(
        `${symptomsURLSandbox}`,
        {
          params: {
            token: authToken,
            format: "json",
            language: "en-gb",
            symptoms: `[${symptomId}]`,
            gender: "male",
            year_of_birth: 33,
          },
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      )
      .then((res) => {
        //console.log(res.data);
        return res.data;
      })
      .catch((e) => console.log("ERROR", e));
  });
};
