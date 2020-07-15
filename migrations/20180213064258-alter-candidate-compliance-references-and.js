"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateComplianceReferences", "subTitle", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
      queryInterface.addColumn(
        "CandidateComplianceReferencesChangeRequest",
        "subTitle",
        { type: Sequelize.STRING, allowNull: true, defaultValue: "" }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("CandidateComplianceReferences", "subTitle", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
      queryInterface.removeColumn(
        "CandidateComplianceReferencesChangeRequest",
        "subTitle",
        { type: Sequelize.STRING, allowNull: true, defaultValue: "" }
      ),
    ]);
  },
};
