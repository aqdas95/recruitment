"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("RecruiterProfiles", "isOnLeave", {
        type: Sequelize.BOOLEAN,
        allowNULL: true,
        defaultValue: false,
      }),
      queryInterface.addColumn("RecruiterProfiles", "alternateRecruiterId", {
        type: Sequelize.INTEGER,
        allowNULL: true,
        references: {
          model: "RecruiterProfiles",
          key: "id",
        },
      }),
      queryInterface.addColumn("RecruiterProfiles", "leaveFrom", {
        type: Sequelize.DATEONLY,
        allowNULL: true,
      }),
      queryInterface.addColumn("RecruiterProfiles", "leaveTo", {
        type: Sequelize.DATEONLY,
        allowNULL: true,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("RecruiterProfiles", "isOnLeave", {
        type: Sequelize.BOOLEAN,
        allowNULL: true,
        defaultValue: false,
      }),
      queryInterface.removeColumn("RecruiterProfiles", "alternateRecruiterId", {
        type: Sequelize.INTEGER,
        allowNULL: true,
        references: {
          model: "RecruiterProfiles",
          key: "id",
        },
      }),
      queryInterface.removeColumn("RecruiterProfiles", "leaveFrom", {
        type: Sequelize.DATE,
        allowNULL: true,
      }),
      queryInterface.removeColumn("RecruiterProfiles", "leaveTo", {
        type: Sequelize.DATE,
        allowNULL: true,
      }),
    ]);
  },
};
