"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("CandidateChangeRequest", "previousValue", {
      type: Sequelize.STRING,
      allowNULL: true,
      defaultValue: "",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "CandidateChangeRequest",
      "previousValue",
      {
        type: Sequelize.STRING,
        allowNULL: true,
        defaultValue: "",
      }
    );
  },
};
