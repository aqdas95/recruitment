"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateGrade", "changeRequestId", {
        type: Sequelize.INTEGER,
        allowNULL: true,
        references: {
          model: "CandidateChangeRequest",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "restrict",
      }),
      queryInterface.addColumn(
        "CandidateComplianceDocuments",
        "changeRequestId",
        {
          type: Sequelize.INTEGER,
          allowNULL: true,
          references: {
            model: "CandidateComplianceDocumentsChangeRequest",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
      queryInterface.addColumn(
        "CandidateCompliancePoliceCheck",
        "changeRequestId",
        {
          type: Sequelize.INTEGER,
          allowNULL: true,
          references: {
            model: "CandidateCompliancePoliceCheckChangeRequest",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
      queryInterface.addColumn(
        "CandidateComplianceReferences",
        "changeRequestId",
        {
          type: Sequelize.INTEGER,
          allowNULL: true,
          references: {
            model: "CandidateComplianceReferencesChangeRequest",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("CandidateGrade", "changeRequestId", {
        type: Sequelize.INTEGER,
        allowNULL: true,
        references: {
          model: "CandidateChangeRequest",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "restrict",
      }),
      queryInterface.removeColumn(
        "CandidateComplianceDocuments",
        "changeRequestId",
        {
          type: Sequelize.INTEGER,
          allowNULL: true,
          references: {
            model: "CandidateComplianceDocumentsChangeRequest",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
      queryInterface.removeColumn(
        "CandidateCompliancePoliceCheck",
        "changeRequestId",
        {
          type: Sequelize.INTEGER,
          allowNULL: true,
          references: {
            model: "CandidateCompliancePoliceCheckChangeRequest",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
      queryInterface.removeColumn(
        "CandidateComplianceReferences",
        "changeRequestId",
        {
          type: Sequelize.INTEGER,
          allowNULL: true,
          references: {
            model: "CandidateComplianceReferencesChangeRequest",
            key: "id",
          },
          onUpdate: "cascade",
          onDelete: "restrict",
        }
      ),
    ]);
  },
};
