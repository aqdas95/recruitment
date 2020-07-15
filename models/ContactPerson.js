'use strict';
module.exports = (sequelize, DataTypes) => {
    var ContactPerson = sequelize.define('ContactPerson', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        hospitalSubSitesId: {
            type: DataTypes.INTEGER,
            allowNULL: false,
            references: {
                model: 'HospitalSubSites',
                key: 'id'
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
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
        autoNumber: {
            type: DataTypes.INTEGER
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        tableName: 'ContactPerson',
        freezeTableName: true
    });

    ContactPerson.associate = function (models) {
        ContactPerson.belongsTo(models.HospitalSubSites, {
            as:'HospitalSubSites',
            onDelete: "CASCADE",
            foreignKey: 'hospitalSubSitesId'
        });


        ContactPerson.hasMany(models.Vacancies,
            {as: 'Vacancies', foreignKey: 'contactPersonId'});


    }


    return ContactPerson;
};