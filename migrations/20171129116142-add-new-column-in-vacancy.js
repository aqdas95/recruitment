"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Vacancies", "vacancyNo", {
        type: Sequelize.INTEGER,
        allowNULL: false,
      }),
      queryInterface.addColumn("Vacancies", "vacancyType", {
        type: Sequelize.INTEGER,
        allowNULL: false,
      }),
      queryInterface.addColumn("Vacancies", "checkListRequired", {
        type: Sequelize.BOOLEAN,
        allowNULL: false,
      }),
      queryInterface.addColumn("Vacancies", "vacancyViaPortal", {
        type: Sequelize.BOOLEAN,
        allowNULL: false,
      }),
      queryInterface.addColumn("Vacancies", "portalId", {
        type: Sequelize.INTEGER,
        allowNULL: false,
        defaultValue: 0,
        model: "Portal",
      }),
      queryInterface.addColumn("Vacancies", "hospitalSubSitesId", {
        type: Sequelize.INTEGER,
        allowNULL: false,
        key: "id",
        model: "HospitalSubSites",
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
      queryInterface.addColumn("Vacancies", "contactPersonId", {
        type: Sequelize.INTEGER,
        allowNULL: false,
        key: "id",
        model: "ContactPerson",
        onDelete: "restrict",
        onUpdate: "cascade",
      }),
      queryInterface.addColumn("Vacancies", "brandId", {
        type: Sequelize.INTEGER,
        allowNULL: false,
        defaultValue: 0,
        model: "Brand",
      }),
      queryInterface.addColumn("Vacancies", "onCallRota", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Vacancies", "additionalInfo", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Vacancies", "vacancyNo"),
      queryInterface.removeColumn("Vacancies", "vacancyType"),
      queryInterface.removeColumn("Vacancies", "checkListRequired"),
      queryInterface.removeColumn("Vacancies", "vacancyViaPortal"),
      queryInterface.removeColumn("Vacancies", "portalId"),
      queryInterface.removeColumn("Vacancies", "hospitalSubSitesId"),
      queryInterface.removeColumn("Vacancies", "contactPersonId"),
      queryInterface.removeColumn("Vacancies", "brandId"),
      queryInterface.removeColumn("Vacancies", "onCallRota"),
      queryInterface.removeColumn("Vacancies", "additionalInfo"),
    ]);
  },
};
