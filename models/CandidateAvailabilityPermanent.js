/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    var CandidateAvailabilityPermanent = sequelize.define('CandidateAvailabilityPermanent', {
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
        startDate: {
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
            tableName: 'CandidateAvailabilityPermanent'
        });

    CandidateAvailabilityPermanent.associate = function (models) {
        CandidateAvailabilityPermanent.belongsTo(models.CandidatesProfile, {
            onDelete: "CASCADE",
            foreignKey: 'candidateId'
        });
    }
    return CandidateAvailabilityPermanent;
};
