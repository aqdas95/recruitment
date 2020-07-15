'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var sequelize = queryInterface.sequelize;
    return sequelize.transaction(function (t) {
      return queryInterface.addColumn('JobBroadCasts', 'isFailure',
        {
          type: Sequelize.BOOLEAN,
          allowNULL: false,
          defaultValue: false,
          transaction: t
        });
    });
  },

  down: (queryInterface, Sequelize) => {
    var sequelize = queryInterface.sequelize;
    return sequelize.transaction(function (t) {
      return queryInterface.removeColumn('JobBroadCasts', 'isFailure',
        {
          type: Sequelize.BOOLEAN,
          allowNULL: false,
          defaultValue: false,
          transaction: t
        });
    });
  }
};
