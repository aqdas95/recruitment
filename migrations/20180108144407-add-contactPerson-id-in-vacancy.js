"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Vacancies", "submissionEmail", {
        type: Sequelize.STRING,
        allowNULL: false,
      }),
      queryInterface.removeColumn("Vacancies", "contactEmail"),
      queryInterface.addColumn("HospitalSubSites", "areaId", {
        type: Sequelize.INTEGER,
        allowNULL: false,
        key: "id",
        model: "Areas",
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
      queryInterface.addColumn("Areas", "code", { type: Sequelize.STRING }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /// DID NOT WORK
    return Promise.all([
      queryInterface.removeColumn("Vacancies", "submissionEmail"),
      queryInterface.removeColumn("HospitalSubSites", "areaId"),
      queryInterface.removeColumn("Areas", "code"),
    ]);
  },
};
