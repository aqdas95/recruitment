"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("RecruiterStatistics", "pending", {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("RecruiterStatistics", "pending");
  },
};
