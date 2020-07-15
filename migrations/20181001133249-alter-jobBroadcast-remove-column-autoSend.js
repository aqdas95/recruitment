"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("JobBroadCasts", "autoSend");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("JobBroadCasts", "autoSend", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },
};
