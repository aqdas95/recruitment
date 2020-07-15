"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Vacancies", "userId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        onDelete: "restrict",
      },
      onUpdate: "cascade",
      onDelete: "restrict",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Vacancies", "userId");
  },
};
