require("express-async-errors");

const jwt = require("jsonwebtoken");
const responseMessages = require("../config/responseMessages");
const UserSessions = require("../models").UserSessions;

module.exports = async (req, res, next) => {
  const token = req.headers["x-access-token"] || req.query.xt;
  if (!token) throw Error(responseMessages.M_1);

  const decoded = jwt.verify(token, process.env.SECRET);

  req.body.profileId = decoded["profileId"];
  req.body.roleId = decoded["roleId"];
  req.body.loginUserId = decoded["userId"];

  const session = await UserSessions.findOne({
    where: {
      jwtToken: token,
      isLogedIn: true,
    },
  });

  if (session) next();
  else throw Error(responseMessages.M_2);

  // jwt.verify(token, process.env.SECRET, function (err, decoded) {
  //   if (err) throw Error(responseMessages.M_2);

  //   req.body.profileId = decoded["profileId"];
  //   req.body.roleId = decoded["roleId"];
  //   req.body.loginUserId = decoded["userId"];

  //   models.UserSessions.findOne({
  //     where: {
  //       jwtToken: token,
  //       isLogedIn: true,
  //     },
  //   })
  //     .then(function (session) {
  //       if (session) next();
  //       else throw Error(responseMessages.M_2);
  //     })
  //     .catch(function (err) {
  //       throw Error(err.message);
  //     });
  // });
};
