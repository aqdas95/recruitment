"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("RecruiterProfiles", "leaveFrom", {
        type: Sequelize.DATE,
        allowNULL: true,
      }),

      queryInterface.changeColumn("RecruiterProfiles", "leaveTo", {
        type: Sequelize.DATE,
        allowNULL: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("RecruiterProfiles", "leaveFrom", {
        type: Sequelize.DATEONLY,
        allowNULL: true,
      }),
      queryInterface.changeColumn("RecruiterProfiles", "leaveTo", {
        type: Sequelize.DATEONLY,
        allowNULL: true,
      }),
    ]);
  },
};
