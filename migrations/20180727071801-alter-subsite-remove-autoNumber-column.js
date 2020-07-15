"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("HospitalSubSites", "autoNumber");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("HospitalSubSites", "autoNumber", {
      type: Sequelize.INTEGER,
    });
  },
};
