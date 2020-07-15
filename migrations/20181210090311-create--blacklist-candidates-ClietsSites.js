'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BlacklistCandidatesHospitalsSites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hospitalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        model: 'Hospitals',
        onDelete: 'restrict',
        onUpdate: 'cascade',
        references: {
          model: 'Hospitals',
          key: 'id'
        }
      },
      hospitalSubSitesId: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        model: 'HospitalSubSites',
        onDelete: 'restrict',
        onUpdate: 'cascade',
        references: {
          model: 'HospitalSubSites',
          key: 'id'
        }
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
    return queryInterface.dropTable('BlacklistCandidatesHospitalsSites');
  }
};
