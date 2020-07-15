"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("CandidatesProfile", "paymentTypeId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      }),
      // queryInterface.addColumn("CandidateChangeRequest", "gradeType", {
      //   type: Sequelize.ENUM,
      //   values: ["Primary", "Secondary", "Tertiary"],
      //   allowNull: true,
      // }),
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("CandidatesProfile", "paymentTypeId"),
      // queryInterface.removeColumn("CandidateChangeRequest", "gradeType"),
    ]);
  },
};
