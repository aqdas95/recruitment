const log = require("debug")("app:vacancies/jobEntryDasboard");

const { Vacancies } = require("../../models");

module.exports = async (req, res) => {
  log("HREER");
  const { loginUserId } = req.session;
  const totalVacancies = await Vacancies.count();
  const totalCreated = await Vacancies.count({
    where: { userId: loginUserId },
  });

  res.status(200).jsend.success({
    totalVacancies,
    totalCreated,
  });
};
