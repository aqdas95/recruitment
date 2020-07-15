'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BlacklistCandidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blacklistHospitalSiteId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        model: 'BlacklistCandidatesHospitalsSites',
        onDelete: 'restrict',
        onUpdate: 'cascade',
        references: {
          model: 'BlacklistCandidatesHospitalsSites',
          key: 'id'
        }
      },
      candidateId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        references: {
          model: 'CandidatesProfile',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'restrict'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BlacklistCandidates');
  }
};
