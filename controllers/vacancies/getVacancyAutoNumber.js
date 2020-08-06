const log = require("debug")("app:vacancies/getVacancyAutoNumber");

const { sequelize } = require("../../models");

module.exports = async (req, res) => {
  log("HREERadqwe");
  const resp = await sequelize.query(
    'SELECT last_value+1 curval FROM public."Vacancies_autoNumber_seq"'
  );

  log(resp);

  res.status(200).jsend.success({ curval: resp[0][0].curval });
};
