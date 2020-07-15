/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var CandidatePreference = sequelize.define('CandidatePreference', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    postCodeDistance: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    intrestedHospitals: {
      type: DataTypes.STRING,
      allowNull: true
    },
    preferedLocationPostCode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    permanentAvailability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    shortTermAvailability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    longTermAvailability: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
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
    }
  }, {
    freezeTableName: true,
    tableName: 'CandidatePreference'
  });

   CandidatePreference.associate = function(models) {
      CandidatePreference.belongsTo(models.CandidatesProfile, {
        onDelete: "CASCADE",
        foreignKey: 'candidateId'
      });
    }
  return CandidatePreference;
};
