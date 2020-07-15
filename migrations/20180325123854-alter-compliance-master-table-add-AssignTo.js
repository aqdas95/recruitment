"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateGrade", "AssignTo", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
      queryInterface.addColumn("CandidateComplianceDocuments", "AssignTo", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
      queryInterface.addColumn("CandidateCompliancePoliceCheck", "AssignTo", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
      queryInterface.addColumn("CandidateComplianceReferences", "AssignTo", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("CandidateComplianceDocuments", "AssignTo", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
      queryInterface.removeColumn(
        "CandidateCompliancePoliceCheck",
        "AssignTo",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "ComplianceProfiles",
            key: "id",
          },
        }
      ),
      queryInterface.removeColumn("CandidateComplianceReferences", "AssignTo", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
    ]);
  },
};
