"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidatesProfile", "fullName", {
      type: Sequelize.STRING,
      allowNULL: false,
      defaultValue: "",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidatesProfile", "fullName", {
      type: Sequelize.STRING,
      allowNULL: false,
      defaultValue: "",
    });
  },
};
