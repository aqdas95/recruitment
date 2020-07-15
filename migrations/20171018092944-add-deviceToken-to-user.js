"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("Users", "deviceToken", {
      type: Sequelize.STRING,
      defaultValue: "",
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn("Users", "deviceToken");
  },
};
