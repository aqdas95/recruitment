"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("JobBroadCasts", "recruiterId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      model: "RecruiterProfiles",
      onDelete: "restrict",
      onUpdate: "cascade",
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("JobBroadCasts", "recruiterId");
  },
};
