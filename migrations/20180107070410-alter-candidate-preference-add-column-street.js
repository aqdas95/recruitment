"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidatePreference", "street", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidatePreference", "street", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "",
    });
  },
};
