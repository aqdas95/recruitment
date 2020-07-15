"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("JobBroadCasts", "jobClosed");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("JobBroadCasts", "jobClosed", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });
  },
};
