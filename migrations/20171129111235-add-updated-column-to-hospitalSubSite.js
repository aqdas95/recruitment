"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("HospitalSubSites", "updated", {
      type: Sequelize.INTEGER,
      allowNULL: false,
      defaultValue: 0,
      model: "HospitalSubSites",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("HospitalSubSites", "updated");
  },
};
