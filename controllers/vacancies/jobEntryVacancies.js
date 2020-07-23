const Joi = require("@hapi/joi");
const log = require("debug")("app:vacancies/jobEntrySearchAllVacancy");

const HttpError = require("../../common/httpError");

const { Vacancies } = require("../../models");
const { constants } = require("../../common/enums");
const { constant } = require("lodash");

module.exports = async (req, res) => {
  validateRequestParams(req.body);
  const offset = parseInt(req.body.offset);
  const {
    hospital,
    grade,
    speciality,
    vacancyNo,
    vacancyRefNo,
    inputter,
    subSiteIds,
    vacancyTypes,
    startDate,
    endDate,
    createdAt,
    fromTime,
    toTime,
  } = req.body.filters;

  let vacWhereClause = {};

  let startDateWhereClause = {};
  let endDateWhereClause = {};

  if (startDate && endDate) {
    startDateWhereClause = { startDate: { $between: [startDate, endDate] } };
    endDateWhereClause = { endDate: { $between: [startDate, endDate] } };
    vacWhereClause = { $or: [startDateWhereClause, endDateWhereClause] };
    vacWhereClause.vacancyType = [0, 1];
  }

  if (startDate && endDate) {
    vacWhereClause = { startDate: { $gte: startDate } };
  }

  if (startDate && endDate) {
    vacWhereClause = { endDate: { $lte: endDate } };
    vacWhereClause.vacancyType = [0, 1];
  }

  if (vacancyRefNo) {
    vacancyRefNo = vacancyRefNo.toUpperCase();
    vacWhereClause.refNo = vacancyRefNo;
  }

  if (vacancyNo) {
    vacWhereClause.autoNumber = parseInt(vacancyNo);
  }

  if (inputter) vacWhereClause.userId = inputter;

  if (hospital) vacWhereClause.hospitalId = hospital;

  if (grade) vacWhereClause.gradeId = grade;

  if (speciality) vacWhereClause.specialityId = speciality;

  if (vacancyTypes) vacWhereClause.vacancyType = vacancyTypes;

  if (subSiteIds) vacWhereClause.hospitalSubSitesId = subSiteIds;

  if (createdAt) {
    if (fromTime && toTime) {
      vacWhereClause.createdAt = {
        $between: [`${createdAt} ${fromTime}`, `${createdAt} ${toTime}`],
      };
    } else if (fromTime) {
      vacWhereClause.createdAt = {
        $between: [`${createdAt} ${fromTime}`, `${createdAt} ` + "23:59"],
      };
    } else if (toTime) {
      vacWhereClause.createdAt = {
        $between: [`${createdAt} ` + "00:00", `${createdAt} ${toTime}`],
      };
    } else {
      vacWhereClause.createdAt = {
        $between: [`${createdAt} ` + "00:00", `${createdAt} ` + "23:59"],
      };
    }
  }

  const { rows: vacancies, count } = await Vacancies.findAndCountAll({
    attributes: [
      "id",
      "status",
      "createdAt",
      "refNo",
      "jobTitle",
      "autoNumber",
    ],
    where: vacWhereClause,
    order: [["createdAt", "DESC"]],
    limit: constants.paginationLimit,
    offset: offset * constants.paginationLimit,
  });

  res.status(200).jsend.success({
    vacancies,
    count,
    totalPages: count / constants.paginationLimit,
  });
};

function validateRequestParams(req) {
  const schema = Joi.object({
    offset: Joi.number().required(),
    filters: Joi.object({
      // hospital: Joi.array(),
      // grade: Joi.array(),
      // speciality: Joi.array(),
      // vacancyNo: Joi.number(),
      // vacancyRefNo: Joi.string(),
      // inputter: Joi.array(),
      // subSiteIds: Joi.array(),
      // vacancyTypes: Joi.number(),
      // startDate: Joi.date(),
      // endDate: Joi.date(),
      // createdAt: Joi.date(),
      // fromTime: Joi.string(),
      // toTime: Joi.string(),
    }).required(),
  }).options({ allowUnknown: true });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
