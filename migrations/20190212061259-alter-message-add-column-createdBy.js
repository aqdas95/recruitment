"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Message", "createdBy", {
      type: Sequelize.INTEGER,
      allowNULL: false,
      references: {
        model: "Users",
        onDelete: "restrict",
      },
      onUpdate: "cascade",
      onDelete: "restrict",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Message", "createdBy");
  },
};
