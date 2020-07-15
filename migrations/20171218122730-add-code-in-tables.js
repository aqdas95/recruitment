"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      //   queryInterface.removeColumn('ContactPerson' , 'hospitalSubSitesId'),
      //   queryInterface.addColumn('ContactPerson' , 'hospitalSubSitesId' ,
      //   {
      //     type: Sequelize.INTEGER,
      //     allowNULL: false,
      //     model: 'HospitalSubSites',
      //     onDelete: 'restrict',
      //     onUpdate: 'cascade'
      // }
      // ),
      queryInterface.addColumn("CandidatesProfile", "code", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("Hospitals", "code", { type: Sequelize.STRING }),
      queryInterface.addColumn("CandidateGrade", "code", {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn("RecruiterProfiles", "code", {
        type: Sequelize.STRING,
      }),

      queryInterface.addColumn("Users", "code", { type: Sequelize.STRING }),

      // queryInterface.removeColumn('PayRates','payRate'),
      // queryInterface.addColumn('PayRates','payRate',{type:  Sequelize.DOUBLE, allowNull: false}),

      queryInterface.removeColumn("PayRates", "enic"),
      queryInterface.addColumn("PayRates", "enic", {
        type: Sequelize.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      }),

      queryInterface.addColumn("PayRates", "commission", {
        type: Sequelize.DOUBLE,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      //   queryInterface.removeColumn('ContactPerson' , 'hospitalSubSitesId'),
      //   queryInterface.addColumn('ContactPerson' , 'hospitalSubSitesId' ,
      //   {
      //     type: Sequelize.INTEGER,
      //     allowNULL: false,
      //     model: 'HospitalSubSites',
      //     onDelete: 'restrict',
      //     onUpdate: 'cascade'
      // }
      // ),
      queryInterface.removeColumn("CandidatesProfile", "code"),
      queryInterface.removeColumn("Hospitals", "code"),
      queryInterface.removeColumn("CandidateGrade", "code"),
      queryInterface.removeColumn("RecruiterProfiles", "code"),

      queryInterface.removeColumn("Users", "code"),

      // queryInterface.removeColumn('PayRates','payRate'),
      // queryInterface.removeColumn('PayRates','payRate',{type:  Sequelize.DOUBLE, allowNull: false}),

      // queryInterface.removeColumn("PayRates", "enic"),
      queryInterface.removeColumn("PayRates", "enic"),

      queryInterface.removeColumn("PayRates", "commission"),
    ]);
  },
};
