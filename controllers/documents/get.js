const log = require("debug")("app:documents/get");
const fs = require("fs");
const HttpError = require("../../common/httpError");
const responseMessages = require("../../config/responseMessages");

const { Documents } = require("../../models");
const { upload_file_save_path } = require("../../config/globals");

module.exports = async (req, res) => {
  const { id } = req.params;

  const document = await Documents.findByPk(id);

  if (!document) throw new HttpError(404, responseMessages.M_211);

  const objResult = JSON.stringify(document);
  const obj_json = JSON.parse(objResult);
  const path = `${upload_file_save_path}${obj_json.modifiedFileName}`;

  if (!fs.existsSync(path)) throw new HttpError(404, responseMessages.M_211);

  res.status(200).download(path, obj_json.modifiedFileName);
};
