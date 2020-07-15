/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var CandidateAppliedJobs = sequelize.define('CandidateAppliedJobs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    jobBroadCastsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'JobBroadCasts',
        key: 'id'
      }
    },
    jobCloseReasonsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'JobCloseReasons',
        key: 'id'
      }
    },
    pendingComments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isPending:{
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    totalCharge: {
      type: DataTypes.FLOAT
    },
    expectedRate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    completeShiftAvalabe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    shiftNoes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    callMe: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    messageToRecruiter: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isAutoSentToClient: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    createdAtPending: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue:sequelize.fn('now')
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue:sequelize.fn('now')
    }
  }, {
    tableName: 'CandidateAppliedJobs'
  });

   CandidateAppliedJobs.associate = function(models) {    

    CandidateAppliedJobs.hasOne(models.PlacedCandidate, { as: 'PlacedCandidate', foreignKey: 'candidateAppliedJobId' });
    
    CandidateAppliedJobs.belongsTo(models.JobBroadCasts, {
        as: 'JobBroadCasts',
        onDelete: "CASCADE",
        foreignKey: 'jobBroadCastsId'
      });

      CandidateAppliedJobs.belongsTo(models.JobCloseReasons, {
        as: 'JobCloseReasons',
        onDelete: "CASCADE",
        foreignKey: 'jobCloseReasonsId'
      });
    }

return CandidateAppliedJobs;

};
