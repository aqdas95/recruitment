const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt-nodejs");

const responseMessages = require("../../config/responseMessages");

const { Users } = require("../../models");
const { HttpError } = require("../../common/enums");

module.exports = async (req, res) => {
  validateRequestBody(req.body);

  let user = await Users.findOne({
    where: {
      id: req.body.id,
    },
    attributes: ["id", "username", "roleId"],
  });

  if (!user) throw new HttpError(400, responseMessages.M_188);

  await user.update({
    password: bcrypt.hashSync(req.body.password, process.env.SALT),
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
