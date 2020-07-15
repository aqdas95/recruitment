"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("CandidateNotifications", "messageId", {
        type: Sequelize.INTEGER,
        allowNULL: true,
      }),
      queryInterface.removeColumn("CandidateNotifications", "Message"),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("CandidateNotifications", "messageId"),
      queryInterface.addColumn("CandidateNotifications", "Message", {
        type: Sequelize.STRING,
        allowNULL: true,
      }),
    ]);
  },
};
