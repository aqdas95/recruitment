/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var candidateAvailabilityLongTerm = sequelize.define('CandidateAvailabilityLongTerm', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    startDate: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endDate: {
      type: DataTypes.TIME,
      allowNull: false
    },
    isIndefinite: {
      type: DataTypes.BOOLEAN
    },
    isFlexible: {
      type: DataTypes.BOOLEAN
    },
    flexible: {
      type: DataTypes.INTEGER,
      allowNULL: true
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
    tableName: 'CandidateAvailabilityLongTerm'
  });

  candidateAvailabilityLongTerm.associate = function(models) {
    candidateAvailabilityLongTerm.belongsTo(models.CandidatesProfile, {
      onDelete: "CASCADE",
      foreignKey: 'candidateId'
    });

    candidateAvailabilityLongTerm.hasMany(models.CandidateUnAvailabilityDetails, {
      as: "CandidateUnAvailabilityDetails",
      onDelete: "CASCADE",
      foreignKey: 'candidateLongTermAvailabilityId'
    });
  }
return candidateAvailabilityLongTerm;

};
