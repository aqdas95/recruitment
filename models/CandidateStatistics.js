/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CandidateStatistics = sequelize.define('CandidateStatistics', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    candidateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'CandidatesProfile',
        key: 'id'
      }
    },
    read: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unread: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    placed:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pending:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sentToClient: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    toAction: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    shortList: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notIntrested: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sentAll: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
      tableName: 'CandidateStatistics'
    });

    CandidateStatistics.associate = function (models) {

      CandidateStatistics.belongsTo(models.CandidatesProfile, {
      as: 'CandidatesProfile',
      onDelete: "CASCADE",
      foreignKey: 'candidateId'
    });

  }

  return CandidateStatistics;
};
