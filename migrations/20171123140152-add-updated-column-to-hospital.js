"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Hospitals", "updated", {
      type: Sequelize.INTEGER,
      allowNULL: false,
      defaultValue: 0,
      model: "Hospitals",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Hospitals", "updated");
  },
};
