"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidateNotifications", "jobRead", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidateNotifications", "jobRead", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },
};
