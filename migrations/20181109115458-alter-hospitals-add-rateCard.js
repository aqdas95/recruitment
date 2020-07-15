"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Hospitals", "rateCardId", {
      type: Sequelize.INTEGER,
      allowNULL: false,
      references: {
        model: "RateCards",
        onDelete: "restrict",
      },
      onUpdate: "cascade",
      onDelete: "restrict",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Hospitals", "rateCardId", {
      type: Sequelize.INTEGER,
      allowNULL: false,
      references: {
        model: "RateCards",
        onDelete: "restrict",
      },
      onUpdate: "cascade",
      onDelete: "restrict",
    });
  },
};
