"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidatesProfile", "companyRegistrationName", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
      queryInterface.addColumn("CandidatesProfile", "registrationNumber", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
      queryInterface.addColumn("CandidatesProfile", "vatNumber", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        "CandidatesProfile",
        "companyRegistrationName",
        { type: Sequelize.STRING, allowNull: true, defaultValue: "" }
      ),
      queryInterface.removeColumn("CandidatesProfile", "registrationNumber", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
      queryInterface.removeColumn("CandidatesProfile", "vatNumber", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
    ]);
  },
};
