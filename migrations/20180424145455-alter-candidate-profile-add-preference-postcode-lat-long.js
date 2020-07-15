"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "CandidatesProfile",
        "candidatePreferencePostCodeLat",
        {
          type: Sequelize.DOUBLE,
          allowNULL: true,
        }
      ),
      queryInterface.addColumn(
        "CandidatesProfile",
        "candidatePreferencePostCodeLong",
        {
          type: Sequelize.DOUBLE,
          allowNULL: true,
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        "CandidatesProfile",
        "candidatePreferencePostCodeLat",
        {
          type: Sequelize.DOUBLE,
          allowNULL: true,
        }
      ),
      queryInterface.removeColumn(
        "CandidatesProfile",
        "candidatePreferencePostCodeLong",
        {
          type: Sequelize.DOUBLE,
          allowNULL: true,
        }
      ),
    ]);
  },
};
