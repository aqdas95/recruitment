"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      "CandidatePreference",
      "intrestedHospitals",
      {
        type: Sequelize.TEXT,
        allowNULL: true,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      "CandidatePreference",
      "intrestedHospitals",
      {
        type: Sequelize.TEXT,
        allowNULL: true,
      }
    );
  },
};
