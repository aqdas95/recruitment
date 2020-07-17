const bcrypt = require("bcrypt-nodejs");
const Joi = require("@hapi/joi");

const responseMessages = require("../../config/responseMessages");

const { HttpError } = require("../../common/enums");
const { Users } = require("../../models");

module.exports = async (req, res) => {
  validateRequestBody(req.body);

  let userId = req.body.loginUserId;
  let password = req.body.password;
  let newPassword = req.body.newPassword;

  const user = await Users.findOne({
    attributes: ["id", "username", "roleId", "password"],
    where: {
      id: userId,
    },
  });

  if (!user) throw new HttpError(400, responseMessages.M_200);

  const encryptPassword = bcrypt.hashSync(password, process.env.SALT);

  if (encryptPassword != user.password)
    throw new HttpError(409, responseMessages.M_187);

  const newEncryptPassword = bcrypt.hashSync(newPassword, process.env.SALT);
  await user.update({
    password: newEncryptPassword,
  });

  res.status(200).jsend.success({
    status: 200,
    data: null,
    message: responseMessages.M_199,
  });
};

function validateRequestBody(req) {
  const schema = Joi.object({
    loginUserId: Joi.number().required(),
    password: Joi.string().required(),
    newPassword: Joi.string().required(),
  }).options({ allowUnknown: true });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
