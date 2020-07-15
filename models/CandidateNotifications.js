module.exports = function (sequelize, DataTypes) {
    var CandidateNotifications = sequelize.define('CandidateNotifications', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        candidateId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'CandidatesProfile',
                key: 'id'
            }
        },
        messageId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Message',
                key: 'id'
            }
        },
        jobRead: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
            tableName: 'CandidateNotifications',
            freezeTableName: true
        });

    CandidateNotifications.associate = function (models) {
        CandidateNotifications.belongsTo(models.CandidatesProfile, {
            as: "CandidatesProfile",
            onDelete: "CASCADE",
            foreignKey: 'candidateId'
        });
        CandidateNotifications.belongsTo(models.Message, {
            as: "Message",
            onDelete: "CASCADE",
            foreignKey: 'messageId'
        });
    }

    return CandidateNotifications;
};
