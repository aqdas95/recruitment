const log = require("debug")("app:grades/all");
const Joi = require("@hapi/joi");
const HttpError = require("../../common/httpError");

const { Grades } = require("../../models");

module.exports = async (req, res) => {
  const { query: where } = req;
  validateRequestQuery(where);

  const grades = await Grades.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", ["description", "title"]],
    where,
  });

  res.status(200).jsend.success({
    grades,
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
