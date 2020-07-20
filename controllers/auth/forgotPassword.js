const Joi = require("@hapi/joi");
const randomstring = require("randomstring");

const mailer = require("../../common/mailer");
const HttpError = require("../../common/httpError");

const { Users } = require("../../models");
const { getCurrentDate } = require("../../common/dates");
const { system_generated_email } = require("../../config/globals");

const env = process.env.NODE_ENV || "DEVELOPMENT";
const {
  url_redirect_password_verification_fuse,
  url_redirect_password_verification,
} = require("../../config")[env];

module.exports = async (req, res) => {
  validateRequestBody(req.body);

  const lower_userName = req.body.email.toLowerCase();
  const roleId = req.body.roleId;
  const isFuse = req.body.isFuse;

  const user = await Users.findOne({
    where: {
      username: lower_userName,
      roleId: roleId,
    },
    attributes: ["id", "username", "roleId", "isActive"],
  });

  if (!user) throw new HttpError(400, responseMessages.M_188);

  const token = randomstring.generate(15);

  const link = isFuse
    ? url_redirect_password_verification_fuse
    : url_redirect_password_verification;

  link += user.id + "/" + token;

  await user.update({
    resetPasswordToken: token,
    tokenSentAt: getCurrentDate().formatedDate,
  });

  if (user.isActive !== true) throw new HttpError(400, responseMessages.M_198);

  mailer.send(
    system_generated_email,
    user.username,
    responseMessages.M_197,
    link,
    ""
  );

  res.status(200).jsend.success({
    status: 200,
    data: "",
    message: "Email Sent",
  });
};

function validateRequestBody(req) {
  const schema = Joi.object({
    email: Joi.string().required(),
    roleId: Joi.number().required(),
    isFuse: Joi.boolean(),
  }).options({ allowUnknown: true });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
