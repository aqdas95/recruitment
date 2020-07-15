"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateComplianceDocuments", "approveBy", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
      queryInterface.addColumn("CandidateCompliancePoliceCheck", "approveBy", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
      queryInterface.addColumn("CandidateComplianceReferences", "approveBy", {
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
      queryInterface.removeColumn("CandidateComplianceDocuments", "approveBy", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "ComplianceProfiles",
          key: "id",
        },
      }),
      queryInterface.removeColumn(
        "CandidateCompliancePoliceCheck",
        "approveBy",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "ComplianceProfiles",
            key: "id",
          },
        }
      ),
      queryInterface.removeColumn(
        "CandidateComplianceReferences",
        "approveBy",
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "ComplianceProfiles",
            key: "id",
          },
        }
      ),
    ]);
  },
};
