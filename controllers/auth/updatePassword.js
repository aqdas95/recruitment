const Joi = require("joi");
const bcrypt = require("bcrypt-nodejs");

const responseMessages = require("../../config/responseMessages");
const HttpError = require("../../common/httpError");

const { Users } = require("../../models");

module.exports = async (req, res) => {
  validateRequestBody(req.body);

  const { id, password } = req.body;

  let user = await Users.findByPk(id, {
    attributes: ["id", "username", "roleId"],
  });

  if (!user) throw new HttpError(400, responseMessages.M_188);

  await user.update({
    password: bcrypt.hashSync(password, process.env.SALT),
  });

  res.status(200).jsend.success({
    status: 200,
    data: "",
    message: responseMessages.M_192,
  });
};

function validateRequestBody(req) {
  const schema = Joi.object({
    id: Joi.number().required(),
    password: Joi.string().required(),
  }).options({ allowUnknown: true });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
