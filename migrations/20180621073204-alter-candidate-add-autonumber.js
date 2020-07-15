"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidatesProfile", "autoNumber", {
      type: Sequelize.INTEGER,
      allowNULL: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidatesProfile", "autoNumber", {
      type: Sequelize.INTEGER,
      allowNULL: true,
    });
  },
};
