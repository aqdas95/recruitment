'use strict';
module.exports = (sequelize, DataTypes) => {

    var HospitalSubSites = sequelize.define('HospitalSubSites', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postCode: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true
        },
        locationRegion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hospitalId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Hospitals',
                key: 'id'
            }
        },
        areaId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'Areas',
                key: 'id'
            }
        },
        subSiteLat: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            defaultValue: -1
        },
        subSiteLong: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            defaultValue: -1
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
        updated: {
            type: DataTypes.TIME
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });

    HospitalSubSites.associate = function (models) {
        HospitalSubSites.belongsTo(models.Hospitals, {
            as: 'Hospitals',
            onDelete: "CASCADE",
            foreignKey: 'hospitalId'
        });

        HospitalSubSites.belongsTo(models.Areas, {
            as: 'Areas',
            onDelete: "CASCADE",
            foreignKey: 'areaId'
        });


        HospitalSubSites.hasMany(models.Vacancies,
            {
                as: 'Vacancies',
                foreignKey: 'hospitalSubSitesId'
            }
        );

        HospitalSubSites.hasMany(models.ContactPerson,
            {
                as: 'ContactPerson',
                foreignKey: 'hospitalSubSitesId'
            });

        HospitalSubSites.hasMany(models.BlacklistCandidatesHospitalsSites,
            {
                as: 'BlacklistCandidatesHospitalsSites',
                foreignKey: 'hospitalSubSitesId'
            });   

    }
    return HospitalSubSites;
}