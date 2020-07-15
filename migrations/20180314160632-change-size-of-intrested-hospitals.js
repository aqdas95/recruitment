"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      "CandidatePreference",
      "intrestedHospitals",
      { type: Sequelize.STRING(4096) }
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
