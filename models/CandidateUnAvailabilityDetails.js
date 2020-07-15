
module.exports = function(sequelize, DataTypes) {
    var CandidateUnAvailabilityDetails = sequelize.define('CandidateUnAvailabilityDetails', {
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
      unvailabilityDate: {
        type: DataTypes.TIME,
        allowNull: false
      },
      candidateLongTermAvailabilityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CandidateAvailabilityLongTerm',
          key: 'id'
        }
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
      tableName: 'CandidateUnAvailabilityDetails'
    });
  
    CandidateUnAvailabilityDetails.associate = function(models) {
        CandidateUnAvailabilityDetails.belongsTo(models.CandidatesProfile, {
        onDelete: "CASCADE",
        foreignKey: 'candidateId'
      });

        CandidateUnAvailabilityDetails.belongsTo(models.CandidateAvailabilityLongTerm, {
          onDelete: "CASCADE",
          foreignKey: 'candidateLongTermAvailabilityId'
        });



  
    }
  return CandidateUnAvailabilityDetails;
}