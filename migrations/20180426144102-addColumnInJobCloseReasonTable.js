"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("JobCloseReasons", "reasonType", {
      type: Sequelize.ENUM,
      values: ["Close", "Pending"],
      allowNULL: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("JobCloseReasons", "reasonType");
  },
};
