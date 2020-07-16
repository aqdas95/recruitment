const log = require("debug")("app:error");
const response = require("../config/responseMessages");

module.exports = (err, req, res, next) => {
  log(err.stack);

  if (!err) next();

  switch (err.message) {
    case response.M_1:
      return send_401(err.message, res);

    case response.M_2:
      return send_401(err.message, res);

    default:
      return send_500(err.message, res);
  }
};

function send_401(msg, res) {
  return res.status(401).jsend.error({
    code: 401,
    message: msg,
    data: null,
  });
}

function send_500(msg, res) {
  return res.status(500).jsend.error({
    code: 500,
    message: msg,
    data: null,
  });
}
