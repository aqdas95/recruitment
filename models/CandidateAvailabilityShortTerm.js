/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var candidateAvailabilityShortTerm = sequelize.define('CandidateAvailabilityShortTerm', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    availableDateStart: {
      type: DataTypes.TIME,
      allowNull: false
    },
    availableDateEnd: {
      type: DataTypes.TIME,
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
    }
  }, {
    freezeTableName: true,
    tableName: 'CandidateAvailabilityShortTerm'
  });

   candidateAvailabilityShortTerm.associate = function(models) {
      candidateAvailabilityShortTerm.belongsTo(models.CandidatesProfile, {
        onDelete: "CASCADE",
        foreignKey: 'candidateId'
      });
    }
  return candidateAvailabilityShortTerm;
};
