"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateChangeRequest", "AssignTo", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          onDelete: "restrict",
        },
        onUpdate: "cascade",
        onDelete: "restrict",
      }),
      queryInterface.addColumn(
        "CandidateComplianceDocumentsChangeRequest",
        "AssignTo",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "ComplianceProfiles",
            onDelete: "restrict",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
      queryInterface.addColumn(
        "CandidateComplianceReferencesChangeRequest",
        "AssignTo",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "ComplianceProfiles",
            onDelete: "restrict",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
      queryInterface.addColumn(
        "CandidateCompliancePoliceCheckChangeRequest",
        "AssignTo",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "ComplianceProfiles",
            onDelete: "restrict",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(
        "CandidateComplianceDocumentsChangeRequest",
        "AssignTo"
      ),
      queryInterface.removeColumn("CandidateChangeRequest", "AssignTo"),
      queryInterface.removeColumn(
        "CandidateComplianceReferencesChangeRequest",
        "AssignTo"
      ),
      queryInterface.removeColumn(
        "CandidateCompliancePoliceCheckChangeRequest",
        "AssignTo"
      ),
    ]);
  },
};
