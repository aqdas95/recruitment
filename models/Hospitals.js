/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    Hospitals = sequelize.define('Hospitals', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rateCardId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'RateCards',
                key: 'id'
            }
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
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
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
            tableName: 'Hospitals'
        });

    Hospitals.associate = function (models) {
        Hospitals.hasMany(models.PayRates, { as: 'PayRates', foreignKey: 'hospitalsId' });
        Hospitals.hasMany(models.Vacancies, { as: 'Vacancies', foreignKey: 'hospitalId' });
        Hospitals.hasMany(models.HospitalSubSites, { as: 'HospitalSubSites', foreignKey: 'hospitalId' });
        Hospitals.belongsTo(models.RateCards, {
            as: "RateCards",
            onDelete: "CASCADE",
            foreignKey: 'rateCardId'
        });
        Hospitals.hasMany(models.BlacklistCandidatesHospitalsSites, { as: 'BlacklistCandidatesHospitalsSites', foreignKey: 'hospitalId' });
    }
    return Hospitals;
};