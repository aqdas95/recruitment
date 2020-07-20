var path = require("path");
var token_valid_time = 120;

exports.token_valid_time = token_valid_time;
exports.randNo = 0000;

// Vacancy Internal Files Upload

exports.vacancyInternalFiles = {
  upload_path: path.join(__dirname, "..", "/internalUploadedFiles/"),
  allowedFileSize: 10000000, // max 50 MB file allowed to upload
  fileSizeLabel: "10 MB",
  allowedFileTypes: ["application/vnd.ms-outlook", "message/rfc822"], // Only Outlook email message file types allowed
};

exports.upload_file_save_path = path.join(__dirname, "..", "/tmp/");
exports.upload_csv_path = path.join(__dirname, "..", "/uploads/");
exports.upload_data_csv_path = path.join(__dirname, "..", "/uploadDataFiles/");
exports.signature_image_path = path.join(
  __dirname,
  "..",
  "/images/recruiterSignature.png"
);
exports.system_generated_email = "appsupport@pertempsmedical.co.uk";
exports.candidate_registration_file_path = path.join(__dirname, "..", "/tmp/");

exports.compliance_email = "complianceactions@pertempsmedical.co.uk";
exports.environment = {
  PRODUCTION: "PRODUCTION",
  STAGING: "STAGING",
  LOCAL: "LOCAL",
  DEVELOPMENT: "DEVELOPMENT",
};
