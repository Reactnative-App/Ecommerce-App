import axios from "axios";
import Api from "./ApiEndPoint";
// axios.defaults.headers.common["authorization"] =
//   "Basic d3l2YXRlYWRtaW46d3l2YXRlYWRtaW5AMTIz";

// axios.defaults.headers.common["Accept"] = "application/json";
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const UserLoginAuth = async (data) => axios.post(Api.LOGIN, data);

export const generateOtp = async (data) => {console.log(data,Api.USER_GENERATE_OTP); return (axios.post(Api.USER_GENERATE_OTP, data))};

export const verify_otp_Login = async (data) =>
  axios.post(Api.OTP_VERIFY_LOGIN, data);

export const user_logout = async (data) =>
  axios.get(Api.USER_LOGOUT, { headers: { token: data } });
