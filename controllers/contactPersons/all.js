const log = require("debug")("app:contactPersons/all");

const Joi = require("joi");
const HttpError = require("../../common/httpError");

const { ContactPerson } = require("../../models");

module.exports = async (req, res) => {
  log(":P");
  const { query: where } = req;
  validateRequestQuery(where);

  const contactPersons = await ContactPerson.findAll({
    attributes: [
      "id",
      "hospitalSubSitesId",
      ["name", "title"],
      "email",
      "phone",
      "address",
    ],
    order: [["id", "DESC"]],
    where,
    raw: true,
    nest: true,
  });

  res.status(200).jsend.success({
    contactPersons,
  });
};

function validateRequestQuery(req) {
  const schema = Joi.object({
    isActive: Joi.boolean().optional(),
    hospitalSubSitesId: Joi.number().optional(),
  }).options({ allowUnknown: false });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(404, error.message);
  }
  return;
}
