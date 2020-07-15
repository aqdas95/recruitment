var fs = require("fs");
var path = require("path");
require("dotenv").config({ path: path.join(__dirname, "/../.env") });

module.exports = {
  LOCAL: {
    baseurl: process.env.BASE_URL_LOCAL,
  },
  DEVELOPMENT: {
    username: process.env.DB_DEV_USERNAME,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    port: process.env.DB_DEV_PORT,
    dialect: "postgres",

    baseurl: process.env.BASE_URL_DEV,

    logs_path: process.env.LOG_PATH,
    geocoder_api_key: process.env.GEOCODER_API_KEY.split(","),
    upload_folder_path: process.env.UPLOAD_FOLDER_PATH,
    url_redirect_email_verification: `${process.env.BASE_URL_DEV}${process.env.URL_REDIRECT_EMAIL_VERIFICATION}`,
    url_redirect_password_verification: `${process.env.BASE_URL_DEV}${process.env.URL_REDIRECT_PASSWORD_VERIFICATION}`,
    url_redirect_password_verification_fuse: `${
      process.env.BASE_URL_DEV
    }${":4200"}${process.env.URL_REDIRECT_PASSWORD_VERIFICATION_FUSE}`,
    smtp_host: process.env.SMTP_HOST,
  },

  STAGING: {
    baseurl: process.env.BASE_URL_STAGING,
  },
};
