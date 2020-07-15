"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    //queryInterface.removeColumn('Vacancies','hospitalSubSitesId');
    return queryInterface.changeColumn("Vacancies", "hospitalSubSitesId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "HospitalSubSites",
        onDelete: "restrict",
      },
      onUpdate: "cascade",
      onDelete: "restrict",
    });
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([]);
    // return queryInterface.addColumn("Vacancies", "hospitalSubSitesId");
  },
};
