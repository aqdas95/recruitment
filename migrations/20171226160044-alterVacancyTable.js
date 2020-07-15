"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Vacancies", "status", {
        type: Sequelize.ENUM,
        values: ["Active", "Placed", "Closed"],
        defaultValue: "Active",
      }),
      queryInterface.removeColumn("Vacancies", "active"),

      queryInterface.addColumn("JobCloses", "recruiterId", {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: "RecruiterProfiles",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "restrict",
      }),
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Vacancies", "status"),
      queryInterface.removeColumn("JobCloses", "recruiterId"),
      queryInterface.addColumn("Vacancies", "active", {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
    ]);
  },
};
