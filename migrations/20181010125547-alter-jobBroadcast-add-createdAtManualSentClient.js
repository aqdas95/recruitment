"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "JobBroadCasts",
      "createdAtManualSentClient",
      {
        type: Sequelize.DATE,
        allowNULL: true,
        defaultValue: null,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "JobBroadCasts",
      "createdAtManualSentClient"
    );
  },
};
