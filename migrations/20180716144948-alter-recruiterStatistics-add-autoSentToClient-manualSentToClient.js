'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var sequelize = queryInterface.sequelize;
    return sequelize.transaction(function (t) {
      return queryInterface.addColumn('RecruiterStatistics', 'autoSentToClient',
        {
          type: Sequelize.INTEGER,
          allowNULL: false,
          defaultValue: 0,
          transaction: t
        })
        .then(function () {
          return queryInterface.addColumn('RecruiterStatistics', 'manualSentToClient', {
            type: Sequelize.INTEGER,
            allowNULL: false,
            defaultValue: 0,
            transaction: t
          });
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    var sequelize = queryInterface.sequelize;
    return sequelize.transaction(function (t) {
      return queryInterface.removeColumn('RecruiterStatistics', 'autoSentToClient',
        {
          type: Sequelize.INTEGER,
          allowNULL: false,
          defaultValue: 0,
          transaction: t
        })
        .then(function () {
          return queryInterface.removeColumn('RecruiterStatistics', 'manualSentToClient',
            {
              type: Sequelize.INTEGER,
              allowNULL: false,
              defaultValue: 0,
              transaction: t
            });
        });
    });
  }
};
