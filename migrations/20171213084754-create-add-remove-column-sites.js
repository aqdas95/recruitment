"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("HospitalSubSites", "contactTelno"),
      queryInterface.removeColumn("HospitalSubSites", "contactEmail"),
      queryInterface.addColumn("HospitalSubSites", "location", {
        type: Sequelize.STRING,
        allowNULL: true,
      }),
      queryInterface.addColumn("HospitalSubSites", "locationRegion", {
        type: Sequelize.STRING,
        allowNULL: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("HospitalSubSites", "locationRegion"),
      queryInterface.removeColumn("HospitalSubSites", "location"),
      queryInterface.addColumn("HospitalSubSites", "contactEmail", {
        type: Sequelize.STRING,
        allowNULL: true,
      }),
      queryInterface.addColumn("HospitalSubSites", "contactTelno", {
        type: Sequelize.STRING,
        allowNULL: true,
      }),
    ]);
  },
};
