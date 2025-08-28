import axios from "axios";

export const commonrequest = async (methods, url, body, header, auth) => {
  let adminToken = "";
  let userToken = "";

  let config = {
    method: methods,
    url: url,
    data: body,
    headers: {},
  };

  if (auth == "admin") {
    config.headers.Authorization = adminToken;
  } else {
    config.headers.Authorization = userToken;
  }

  if (header) {
    config.headers["content-type"] = "multipart/form-data";
  } else {
    config.headers["content-type"] = "application/json";
  }

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    return error;
  }
};
