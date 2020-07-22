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

module.exports.constants = {
  paginationLimit: 30,
};

module.exports.VacancyTypesID = {
  shortTerm: 0,
  longTerm: 1,
  Permanent: 2,
};
