"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Grades", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Grades", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },
};
