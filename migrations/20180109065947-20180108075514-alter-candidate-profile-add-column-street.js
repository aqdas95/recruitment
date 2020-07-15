"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidatesProfile", "street", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("CandidatesProfile", "street", {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "",
    });
  },
};
