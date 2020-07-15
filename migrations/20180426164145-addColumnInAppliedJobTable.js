"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateAppliedJobs", "jobCloseReasonsId", {
        type: Sequelize.INTEGER,
        allowNULL: true,
        references: {
          model: "JobCloseReasons",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "restrict",
      }),
      queryInterface.addColumn("CandidateAppliedJobs", "pendingComments", {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      }),
      queryInterface.addColumn("CandidateAppliedJobs", "isPending", {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("CandidateAppliedJobs", "jobCloseReasonsId"),
      queryInterface.removeColumn("CandidateAppliedJobs", "pendingComments"),
      queryInterface.removeColumn("CandidateAppliedJobs", "isPending"),
    ]);
  },
};
