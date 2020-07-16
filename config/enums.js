class HttpError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

module.exports.HttpError = HttpError;

module.exports.rolesObj = {
  admin: 1,
  recruiter: 2,
  compliance: 3,
  jobEntry: 5,
  superRecruiter: 6,
  superCompliance: 7,
  restrictedUser: 8,
};

module.exports.StatusEnum = {
  Pending: "Pending",
  Approved: "Approved",
  Rejected: "Rejected",
  Default: "Default",
  Expired: "Expired",
  AlmostExpired: "Almost Expired",
  Valid: "Valid",
  Missing: "Missing",
};
