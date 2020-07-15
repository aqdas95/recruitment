'use strict';
const db = require('../models');
const tableName = "Users";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.sequelize.query('UPDATE public."' + tableName + '" SET "isPreferenceSaved"=true WHERE "isAgreement"=true');
  },

  down: (queryInterface, Sequelize) => {
    return db.sequelize.query('UPDATE public."' + tableName + '" SET "isPreferenceSaved"=false WHERE "isAgreement"=true');
  }
};
