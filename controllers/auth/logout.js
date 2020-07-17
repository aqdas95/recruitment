const jwt = require("jsonwebtoken");

const responseMessages = require("../../config/responseMessages");

const { Users, UserSessions } = require("../../models");

module.exports = async (req, res) => {
  const token = req.headers["x-access-token"];

  const decoded = jwt.verify(token, process.env.SECRET);

  await Users.update(
    {
      deviceToken: "",
    },
    {
      where: { id: decoded["userId"] },
    }
  );

  await UserSessions.update(
    {
      isLogedIn: false,
    },
    { where: { jwtToken: token, isLogedIn: true } }
  );

  res.status(200).jsend.success({
    status: 200,
    data: null,
    message: responseMessages.M_133,
  });
};
