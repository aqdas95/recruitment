const log = require("debug")("app:error");

module.exports = (err, req, res, next) => {
  if (!err) next();

  if (req.headers.accept.includes("text/html")) next();

  const { stack, code, message } = err;
  log(stack);

  if (code) {
    return res.status(code).jsend.error({
      code: code,
      message: message,
      data: null,
    });
  } else {
    return res.status(500).jsend.error({
      code: 500,
      message: message,
      data: null,
    });
  }
};
