import { BASE_URL } from "../helper";
import { commonrequest as CallApi } from "../Commonrequest";

// Register API
export const AdminAddCategoryApi = async (data, header) =>
  await CallApi(
    "POST",
    `${BASE_URL}/product/api/addcategory`,
    data,
    header,
    "admin"
  );

export const GetCategoryApi = async (header) =>
  await CallApi(
    "GET",
    `${BASE_URL}/product/api/getcategory`,
    "",
    header,
    "admin"
  );
