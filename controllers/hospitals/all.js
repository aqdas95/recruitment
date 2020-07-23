const log = require("debug")("app:hospitals/all");

const Joi = require("@hapi/joi");
const HttpError = require("../../common/httpError");

const { Hospitals } = require("../../models");

module.exports = async (req, res) => {
  const { query: where } = req;
  validateRequestQuery(where);

  const hospitals = await Hospitals.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", ["name", "title"]],
    where,
  });

  res.status(200).jsend.success({
    hospitals,
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
