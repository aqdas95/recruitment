const Joi = require("@hapi/joi");

const responseMessages = require("../../config/responseMessages");

const { Users } = require("../../models");
const { HttpError } = require("../../common/enums");
const { getCurrentDate } = require("../../common/dates");
const { token_valid_time } = require("../../config/globals");

module.exports = async (req, res) => {
  validateRequestBody(req.body);

  const user = await Users.findOne({ where: { id: req.body.id } });

  if (!user) throw new HttpError(400, responseMessages.M_132);

  if (req.body.token !== user.resetPasswordToken)
    throw new HttpError(400, responseMessages.M_191);

  if (
    getCurrentDate().date.diff(user.tokenSentAt, "minutes") > token_valid_time
  )
    throw new HttpError(400, responseMessages.M_190);

  res.status(200).jsend.success({
    status: 200,
    data: "",
    message: responseMessages.M_210,
  });
};

function validateRequestBody(req) {
  const schema = Joi.object({
    id: Joi.number().required(),
    token: Joi.string().required(),
  }).options({ allowUnknown: true });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
