/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CandidatesRegistration = sequelize.define('CandidatesRegistration', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    forename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    DOB: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mobilePhone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gmcNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.fn('now')
    },
    docId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
      freezeTableName: true,
      tableName: 'CandidatesRegistration'
    });


  CandidatesRegistration.associate = function (models) {

    CandidatesRegistration.hasMany(models.CandidatesRegistrationGrade, {
      as: "CandidatesRegistrationGrade",
      onDelete: "CASCADE",
      foreignKey: 'candidateRegistrationId'
    });

    CandidatesRegistration.hasMany(models.CandidatesRegistrationSpeciality, {
      as: "CandidatesRegistrationSpeciality",
      onDelete: "CASCADE",
      foreignKey: 'candidateRegistrationId'
    });



  }
  return CandidatesRegistration;
};
