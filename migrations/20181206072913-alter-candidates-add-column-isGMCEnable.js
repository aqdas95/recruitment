"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidatesProfile", "isEnableGMC", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidatesProfile", "isEnableGMC", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },
};
