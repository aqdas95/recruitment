"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("PlacedCandidate", "documentId", {
      type: Sequelize.INTEGER,
      allowNULL: false,
      key: "id",
      model: "Documents",
      onDelete: "restrict",
      onUpdate: "cascade",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("PlacedCandidate", "documentId");
  },
};
