const log = require("debug")("app:specialties/all");

const { Specialities } = require("../../models");
const Joi = require("joi");
const HttpError = require("../../common/httpError");

module.exports = async (req, res) => {
  const { query: where } = req;
  validateRequestQuery(where);

  const specialties = await Specialities.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", ["description", "title"]],
    where,
    raw: true,
    nest: true,
  });

  res.status(200).jsend.success({
    specialties,
  });
};

function validateRequestQuery(req) {
  const schema = Joi.object({
    isActive: Joi.boolean().optional(),
  }).options({ allowUnknown: false });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(404, error.message);
  }
  return;
}
