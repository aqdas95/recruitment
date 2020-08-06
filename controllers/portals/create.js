const Joi = require("joi");
const log = require("debug")("app:portals/create");

const HttpError = require("../../common/httpError");

const { Portals } = require("../../models");

module.exports = async (req, res) => {
  validateRequestParams(req.body);

  const { name } = req.body;

  const portal = await Portals.create({
    name,
  });

  const { id, name: title } = portal;

  res.status(200).jsend.success({
    id,
    title,
  });
};

function validateRequestParams(req) {
  const schema = Joi.object({
    name: Joi.string().required(),
  }).options({ allowUnknown: false });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
