"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "isAgreement", {
      type: Sequelize.BOOLEAN,
      allowNULL: true,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "isAgreement", {
      type: Sequelize.BOOLEAN,
      allowNULL: true,
      defaultValue: "false",
    });
  },
};
