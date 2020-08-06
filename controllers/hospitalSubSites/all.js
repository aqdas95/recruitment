const log = require("debug")("app:hospitalSubSites/all");

const Joi = require("joi");
const HttpError = require("../../common/httpError");

const { HospitalSubSites } = require("../../models");

module.exports = async (req, res) => {
  const { query: where } = req;
  validateRequestQuery(where);

  const subsites = await HospitalSubSites.findAll({
    attributes: ["id", ["name", "title"]],
    order: [["id", "DESC"]],
    where,
    raw: true,
    nest: true,
  });

  res.status(200).jsend.success({
    subsites,
  });
};

function validateRequestQuery(req) {
  const schema = Joi.object({
    isActive: Joi.boolean().optional(),
    hospitalId: Joi.number().optional(),
  }).options({ allowUnknown: false });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(404, error.message);
  }
  return;
}
