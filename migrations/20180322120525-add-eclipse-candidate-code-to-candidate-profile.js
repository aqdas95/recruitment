"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "CandidatesProfile",
      "eclipseCandidateCode",
      { type: Sequelize.STRING, allowNull: false, defaultValue: "0" }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "CandidatesProfile",
      "eclipseCandidateCode",
      { type: Sequelize.STRING, allowNull: true }
    );
  },
};
