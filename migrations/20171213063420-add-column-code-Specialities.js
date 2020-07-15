"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Specialities", "code", {
      type: Sequelize.STRING,
      allowNULL: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Specialities", "code");
  },
};
