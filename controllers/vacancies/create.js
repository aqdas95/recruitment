const Joi = require("joi");
const fs = require("fs");
const log = require("debug")("app:vacacies/create");
const path = require("path");

const HttpError = require("../../common/httpError");
const responseMessages = require("../../config/responseMessages");

const {
  Vacancies,
  VacancyAttachments,
  VacancyShifts,
  WeeklyRota,
  Sequelize,
} = require("../../models");
const { upload_file_save_path } = require("../../config/globals");
const { getFileName } = require("../../common/helper");

const $in = Sequelize.Op.in;

module.exports = async (req, res) => {
  const {
    refNo,
    hospitalSubSitesId,
    hospitalId,
    jobTitle,
    submissionEmail,
    gradeId,
    specialityId,
    startDate,
    endDate,
    vacancyType,
    checkListRequired,
    vacancyViaPortal,
    portalId,
    brandId,
    onCallRota,
    additionalInfo,
    contactPersonId,
    files,
    vacancyShifts,
    weeklyRota,
    createDuplicate,
    vacancyNo: vac_Id,
  } = validateRequestBody(req.body);

  const userId = req.session.loginUserId;

  let vacancyAttachments = [];
  let encodedArr = [];

  files.forEach((file) => {
    const arr_file_ext = file.name.split(".");
    file_type_ext = arr_file_ext[arr_file_ext.length - 1];

    const encoded = file.data.split(";base64,").pop();
    const { ext: fileExtension, name: fileName } = path.parse(file.name);
    const modifiedFileName = getFileName(fileName, fileExtension, vac_Id);
    log(modifiedFileName);

    vacancyAttachments.push({
      filePath: `${upload_file_save_path}${modifiedFileName}`,
      fileName: file.name,
      fileType: file_type_ext,
      modifiedFileName: modifiedFileName,
    });
    encodedArr.push(encoded);
  });

  let vacancyShiftsWhere =
    vacancyShifts.length > 0
      ? {
          startDate: { [$in]: vacancyShifts.map((shift) => shift.startDate) },
          endTime: { [$in]: vacancyShifts.map((shift) => shift.endTime) },
          startTime: { [$in]: vacancyShifts.map((shift) => shift.startTime) },
        }
      : {};

  let weeklyRotaWhere =
    weeklyRota.length > 0
      ? {
          day: { [$in]: weeklyRota.map((rota) => rota.day) },
          endTime: { [$in]: weeklyRota.map((rota) => rota.endTime) },
          startTime: { [$in]: weeklyRota.map((rota) => rota.startTime) },
        }
      : {};

  if (!createDuplicate) {
    const vac = await Vacancies.findOne({
      where: {
        userId,
        refNo: refNo,
        jobTitle,
        submissionEmail,
        gradeId,
        specialityId,
        startDate,
        endDate,
        vacancyType,
        checkListRequired,
        vacancyViaPortal,
        portalId: portalId,
        hospitalSubSitesId,
        brandId,
        onCallRota: onCallRota,
        additionalInfo: additionalInfo,
        contactPersonId,
        hospitalId,
      },
      raw: true,
      // include: [
      //   //{ model: VacancyAttachments, as: "VacancyAttachments" },
      //   {
      //     model: VacancyShifts,
      //     as: "VacancyShifts",
      //     attributes: ["startDate", "startTime", "endTime"],
      //     // required: true,
      //     where: vacancyShiftsWhere,
      //   },
      //   {
      //     model: WeeklyRota,
      //     as: "WeeklyRota",
      //     attributes: ["day", "startTime", "endTime"],
      //     // required: true,
      //     where: weeklyRotaWhere,
      //   },
      // ],
    });
    // weeklyRotaWhere.vacancieId = vac.id;
    // const weeklyRotaValues = await WeeklyRota.findAll({
    //   where: weeklyRotaWhere,
    //   raw: true,
    // });

    // vacancyShiftsWhere.vacancieId = vac.id;
    // const vacancyShiftsValues = await VacancyShifts.findAll({
    //   where: vacancyShiftsWhere,
    //   raw: true,
    // });

    // log(weeklyRotaValues);
    // log(vacancyShiftsValues);
    if (vac) throw new HttpError(510, responseMessages.M_212);
  }

  const vacancy = await Vacancies.create(
    {
      userId,
      refNo: refNo,
      jobTitle,
      submissionEmail,
      gradeId,
      specialityId,
      startDate,
      endDate,
      vacancyType,
      checkListRequired,
      vacancyViaPortal,
      portalId: portalId,
      hospitalSubSitesId,
      brandId,
      onCallRota: onCallRota,
      additionalInfo: additionalInfo,
      contactPersonId,
      hospitalId,
      VacancyAttachments: vacancyAttachments,
      WeeklyRota: weeklyRota,
      VacancyShifts: vacancyShifts,
    },
    {
      include: [
        { model: VacancyAttachments, as: "VacancyAttachments" },
        { model: VacancyShifts, as: "VacancyShifts" },
        { model: WeeklyRota, as: "WeeklyRota" },
      ],
    }
  );

  vacancyAttachments.forEach((attachment, index) => {
    fs.writeFileSync(attachment.filePath, encodedArr[index], {
      encoding: "base64",
    });
  });

  log(vacancy.id);

  res.status(200).jsend.success(vacancy);
};

function validateRequestBody(req) {
  const schema = Joi.object({
    jobTitle: Joi.string().required(),
    vacancyNo: Joi.number().required(),
    refNo: Joi.string().optional().default(null),
    vacancyType: Joi.number().required(),
    vacancyViaPortal: Joi.boolean().required(),
    checkListRequired: Joi.boolean().required(),
    portalId: Joi.number().optional().default(null),
    hospitalId: Joi.number().required(),
    hospitalSubSitesId: Joi.number().required(),
    contactPersonId: Joi.number().required(),
    submissionEmail: Joi.string().email().required(),
    gradeId: Joi.number().required(),
    specialityId: Joi.number().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    weeklyRota: Joi.array()
      .items(
        Joi.object({
          day: Joi.string().length(3).required(),
          startTime: Joi.string().length(5).required(),
          endTime: Joi.string().length(5).required(),
        })
      )
      .optional()
      .default([]),
    onCallRota: Joi.string().optional().default(null),
    additionalInfo: Joi.string().optional().default(null),
    files: Joi.optional().default([]),
    brandId: Joi.number().required(),
    vacancyShifts: Joi.array()
      .items(
        Joi.object({
          startDate: Joi.date().required(),
          startTime: Joi.string().length(5).required(),
          endTime: Joi.string().length(5).required(),
        })
      )
      .optional()
      .default([]),
    createDuplicate: Joi.boolean().optional().default(false),
  }).options({ allowUnknown: false });

  const { error, value } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }

  log(value);
  return value;
}
