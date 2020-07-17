const moment = require("moment");

module.exports.getCurrentDate = function () {
  let formatedDate;
  let formateYYYYMMDD;
  let formateDDMMYYYTime;
  let formateDDMMYYY;
  let formateYYYYMMDDZeroTime;
  let formateYYYYMMDDTime;
  const date = moment();

  formatedDate = date.format();
  formateDDMMYYY = date.format("DD/MM/YYYY");
  formateDDMMYYYTime = date.format("DD/MM/YYYY HH:mm:ss");
  formateYYYYMMDD = date.format("YYYY-MM-DD");
  formateYYYYMMDDZeroTime = date.format("YYYY-MM-DDT00:00:00Z");
  formateYYYYMMDDTime = date.format("YYYY-MM-DD HH:mm:ss");

  return {
    date,
    formatedDate,
    formateYYYYMMDD,
    formateDDMMYYYTime,
    formateDDMMYYY,
    formateYYYYMMDDZeroTime,
    formateYYYYMMDDTime,
  };
};
