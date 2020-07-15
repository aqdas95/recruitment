"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("ContactPerson", "address", {
      type: Sequelize.STRING,
      allowNULL: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("ContactPerson", "address", {
      type: Sequelize.STRING,
      allowNULL: true,
    });
  },
};
