"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Hospitals", "autoNumber");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Hospitals", "autoNumber", {
      type: Sequelize.INTEGER,
    });
  },
};
