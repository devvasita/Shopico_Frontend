import { BASE_URL } from "../helper";
import { commonrequest as CallApi } from "../Commonrequest";

// Register API
export const AdminRegisterApi = async (data, header) =>
  await CallApi(
    "POST",
    `${BASE_URL}/adminauth/api/register`,
    data,
    header,
    "admin"
  );

// Login API
export const AdminLoginApi = async (data, header) =>
  await CallApi(
    "POST",
    `${BASE_URL}/adminauth/api/login`,
    data,
    header,
    "admin"
  );

//adminLogged In api
export const AdminLoggedInApi = async (header) =>
  await CallApi(
    "GET",
    `${BASE_URL}/adminauth/api/adminverify`,
    "",
    header,
    "admin"
  );

// adminLogout api
export const AdminLogOutApi = async (header) =>
  await CallApi("GET", `${BASE_URL}/adminauth/api/logout`, "", header, "admin");
