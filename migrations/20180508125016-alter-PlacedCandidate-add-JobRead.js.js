"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("PlacedCandidate", "jobRead", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("PlacedCandidate", "jobRead", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
    });
  },
};
