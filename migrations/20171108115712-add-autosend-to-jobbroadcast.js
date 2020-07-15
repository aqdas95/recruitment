"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("JobBroadCasts", "autoSend", {
      type: Sequelize.BOOLEAN,
      allowNULL: false,
      defaultValue: false,
      model: "JobBroadCasts",
      onDelete: "restrict",
      onUpdate: "cascade",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("JobBroadCasts", "autoSend");
  },
};
