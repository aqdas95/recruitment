"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidatesRegistration", "docId", {
      type: Sequelize.INTEGER,
      allowNULL: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidatesRegistration", "docId", {
      type: Sequelize.INTEGER,
      allowNULL: true,
    });
  },
};
