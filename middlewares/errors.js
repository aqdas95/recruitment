const log = require("debug")("app:error");

module.exports = (err, req, res, next) => {
  log(err.stack);

  if (!err) next();
  if (err.code) {
    return res.status(err.code).jsend.error({
      code: err.code,
      message: err.message,
      data: null,
    });
  } else {
    return res.status(500).jsend.error({
      code: 500,
      message: err.message,
      data: null,
    });
  }
};
