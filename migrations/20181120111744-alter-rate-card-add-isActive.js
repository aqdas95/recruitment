"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("RateCards", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("RateCards", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },
};
