"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("RecruiterProfiles", "designation", {
      type: Sequelize.STRING,
      allowNULL: true,
      defaultValue: "",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("RecruiterProfiles", "designation", {
      type: Sequelize.STRING,
      allowNULL: true,
      defaultValue: "",
    });
  },
};
