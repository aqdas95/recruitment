"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateGrade", "isActive", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }),
      queryInterface.addColumn("CandidateGrade", "approvalStatus", {
        type: Sequelize.ENUM,
        values: ["Pending", "Approved", "Rejected", "Default"],
        defaultValue: "Default",
      }),
      queryInterface.addColumn("CandidateGrade", "approveBy", {
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
      queryInterface.removeColumn("CandidateGrade", "isActive", {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }),
      queryInterface.removeColumn("CandidateGrade", "approvalStatus", {
        type: Sequelize.status,
        values: ["Pending", "Approved", "Rejected", "Default"],
        defaultValue: "Default",
      }),
      queryInterface.removeColumn("CandidateGrade", "approveBy", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
    ]);
  },
};
