const Joi = require("joi");
const log = require("debug")("app:contactPersons/create");

const HttpError = require("../../common/httpError");

const { ContactPerson } = require("../../models");
const responseMessages = require("../../config/responseMessages");

module.exports = async (req, res) => {
  validateRequestBody(req.body);

  let { hospitalSubSitesId, email, name, phone, address } = req.body;

  const [contactPerson, created] = await ContactPerson.findOrCreate({
    where: {
      hospitalSubSitesId,
      email,
      name,
      phone: phone ? phone : null,
      address: address ? address : null,
    },
  });

  if (!created) throw new HttpError(403, responseMessages.M_124);

  let resp = {};
  ({
    id: resp.id,
    hospitalSubSitesId: resp.hospitalSubSitesId,
    email: resp.email,
    name: resp.title,
    phone: resp.phone,
    address: resp.address,
  } = contactPerson);

  resp.address = resp.address ? resp.address : null;
  resp.phone = resp.phone ? resp.phone : null;

  res.status(200).jsend.success(resp);
};

function validateRequestBody(req) {
  const schema = Joi.object({
    hospitalSubSitesId: Joi.number().required(),
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    address: Joi.string().optional(),
    phone: Joi.number().optional(),
  }).options({ allowUnknown: false });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
