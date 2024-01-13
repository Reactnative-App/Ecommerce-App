export const BASE_URL = "http://localhost:2000/auth/";

export default {
  LOGIN: BASE_URL + "login",
  OTP_VERIFY_LOGIN: BASE_URL + "verify_login_otp/",
  USER_LOGOUT: BASE_URL + "customer_logout/",
  USER_GENERATE_OTP: BASE_URL + "genrate-otp",
};
