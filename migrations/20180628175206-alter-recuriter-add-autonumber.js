"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("RecruiterProfiles", "autoNumber", {
      type: Sequelize.INTEGER,
      allowNULL: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("RecruiterProfiles", "autoNumber", {
      type: Sequelize.INTEGER,
      allowNULL: true,
    });
  },
};
