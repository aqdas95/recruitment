"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("Hospitals", "refNo"),
      queryInterface.removeColumn("Hospitals", "address"),
      queryInterface.removeColumn("Hospitals", "postCode"),
      queryInterface.removeColumn("Hospitals", "country"),
      queryInterface.removeColumn("Hospitals", "location"),
      queryInterface.removeColumn("Hospitals", "locationRegion"),
      queryInterface.removeColumn("Hospitals", "contactTelno"),
      queryInterface.removeColumn("Hospitals", "contactEmail"),
      queryInterface.removeColumn("Hospitals", "hospitalLat"),
      queryInterface.removeColumn("Hospitals", "hospitalLong"),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Hospitals", "refNo", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "address", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "postCode", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "country", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "location", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "locationRegion", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "contactEmail", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "hospitalLat", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
      queryInterface.addColumn("Hospitals", "hospitalLong", {
        type: Sequelize.STRING,
        allowNull: true,
      }),
    ]);
  },
};
