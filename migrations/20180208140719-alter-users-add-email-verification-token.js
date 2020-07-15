"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Users", "resetEmailToken", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
      queryInterface.addColumn("Users", "emailTokenSentAt", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Users", "resetEmailToken", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
      queryInterface.removeColumn("Users", "emailTokenSentAt", {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      }),
    ]);
  },
};
