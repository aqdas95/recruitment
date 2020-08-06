const log = require("debug")("app:recruiterProfiles/all");

const { RecruiterProfiles, Users } = require("../../models");
const Joi = require("joi");
const HttpError = require("../../common/httpError");

module.exports = async (req, res) => {
  let { query: where } = req;
  validateRequestQuery(where);

  const jobinputtersWhereClause = {
    roleId: [2, 5, 6],
  };

  where.roleId = [2, 5, 6];

  const jobinputters = await RecruiterProfiles.findAll({
    attributes: ["id", "title", "firstName", "lastName", "userId"],
    include: [
      {
        model: Users,
        as: "Users",
        attributes: [],
        where,
      },
    ],
  });

  res.status(200).jsend.success({
    jobinputters,
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
