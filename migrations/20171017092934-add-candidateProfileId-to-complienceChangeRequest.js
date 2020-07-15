"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "ComplianceChangeRequest",
      "candidatesProfileId",
      {
        type: Sequelize.INTEGER,
        allowNULL: false,
        model: "ComplianceChangeRequest",
        onDelete: "restrict",
        onUpdate: "cascade",
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      "ComplianceChangeRequest",
      "candidatesProfileId"
    );
  },
};
