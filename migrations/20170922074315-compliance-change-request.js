'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComplianceChangeRequest', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      columnName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      oldValue: {
        type: Sequelize.STRING,
        allowNull: false
      },  
      updatedValue: {
        type: Sequelize.STRING,
        allowNull: false
      },      
      tableName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isApprove: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false
      },
      approveBy: {
        type: Sequelize.INTEGER,
        references:{
            model: 'ComplianceProfiles',
            onDelete: 'restrict'
          },
          onUpdate: 'cascade',
          onDelete: 'restrict'
      },
      approveDate: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    },{
      timestamps: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ComplianceChangeRequest');
  }
};
