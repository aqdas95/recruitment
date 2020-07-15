"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Vacancies", "contactPersonId"),
      queryInterface.addColumn("Vacancies", "contactPersonId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ContactPerson",
          onDelete: "restrict",
        },
        onUpdate: "cascade",
        onDelete: "restrict",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([]);
    // return queryInterface.addColumn("Vacancies", "contactPersonId");
  },
};
