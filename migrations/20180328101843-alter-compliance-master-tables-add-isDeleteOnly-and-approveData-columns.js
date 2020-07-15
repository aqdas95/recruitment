"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateGrade", "isDeleteOnly", {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn("CandidateGrade", "approveDate", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn("CandidateComplianceDocuments", "isDeleteOnly", {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.addColumn("CandidateComplianceDocuments", "approveDate", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      queryInterface.addColumn(
        "CandidateCompliancePoliceCheck",
        "isDeleteOnly",
        {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        }
      ),
      queryInterface.addColumn(
        "CandidateCompliancePoliceCheck",
        "approveDate",
        {
          allowNull: true,
          type: Sequelize.DATE,
        }
      ),
      queryInterface.addColumn(
        "CandidateComplianceReferences",
        "isDeleteOnly",
        {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        }
      ),
      queryInterface.addColumn("CandidateComplianceReferences", "approveDate", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("CandidateGrade", "isDeleteOnly", {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }),
      queryInterface.removeColumn("CandidateGrade", "approveDate", {
        allowNull: true,
        type: Sequelize.DATE,
      }),
      queryInterface.removeColumn(
        "CandidateComplianceDocuments",
        "isDeleteOnly",
        {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        }
      ),
      queryInterface.removeColumn(
        "CandidateComplianceDocuments",
        "approveDate",
        {
          allowNull: true,
          type: Sequelize.DATE,
        }
      ),
      queryInterface.removeColumn(
        "CandidateCompliancePoliceCheck",
        "isDeleteOnly",
        {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        }
      ),
      queryInterface.removeColumn(
        "CandidateCompliancePoliceCheck",
        "approveDate",
        {
          allowNull: true,
          type: Sequelize.DATE,
        }
      ),
      queryInterface.removeColumn(
        "CandidateComplianceReferences",
        "isDeleteOnly",
        {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        }
      ),
      queryInterface.removeColumn(
        "CandidateComplianceReferences",
        "approveDate",
        {
          allowNull: true,
          type: Sequelize.DATE,
        }
      ),
    ]);
  },
};
