"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Message", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Message", "isActive", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: true,
    });
  },
};
