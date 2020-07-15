"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "RecruiterProfiles",
      "autoNumberJobEntryTeam",
      {
        type: Sequelize.INTEGER,
        allowNULL: true,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "RecruiterProfiles",
      "autoNumberJobEntryTeam",
      {
        type: Sequelize.INTEGER,
        allowNULL: true,
      }
    );
  },
};
