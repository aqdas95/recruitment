require("express-async-errors");

const jwt = require("jsonwebtoken");
const responseMessages = require("../config/responseMessages");
const { UserSessions } = require("../models");

module.exports = async (req, res, next) => {
  const token = req.headers["x-access-token"] || req.query.xt;
  if (!token) throw Error(responseMessages.M_1);

  const decoded = jwt.verify(token, process.env.SECRET);

  // req.session.profileId = decoded["profileId"];
  // req.session.roleId = decoded["roleId"];
  // req.session.loginUserId = decoded["userId"];

  req.session = {
    profileId: decoded["profileId"],
    roleId: decoded["roleId"],
    loginUserId: decoded["userId"],
  };

  const session = await UserSessions.findOne({
    where: {
      jwtToken: token,
      isLogedIn: true,
    },
  });

  if (session) next();
  else throw Error(responseMessages.M_2);
};
