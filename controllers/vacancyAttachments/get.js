const log = require("debug")("app:vacancyAttachments/get");
const fs = require("fs");
const HttpError = require("../../common/httpError");
const responseMessages = require("../../config/responseMessages");

const { VacancyAttachments } = require("../../models");
const {
  upload_file_save_path,
  vacancyInternalFiles,
} = require("../../config/globals");

module.exports = async (req, res) => {
  const { id } = req.params;

  const vacancyAttachment = await VacancyAttachments.findByPk(id);

  if (!vacancyAttachment) throw new HttpError(404, responseMessages.M_211);

  let baseUploadPath = vacancyAttachment.isInternalFile
    ? `${vacancyInternalFiles.upload_path}`
    : `${upload_file_save_path}`;

  let path = `${baseUploadPath}${vacancyAttachment.modifiedFileName}`;

  if (!fs.existsSync(path)) throw new HttpError(404, responseMessages.M_211);

  res.status(200).download(path, obj_json.modifiedFileName);
};
