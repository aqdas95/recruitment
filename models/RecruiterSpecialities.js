module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "RecruiterSpecialities",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      recruiterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "RecruiterProfiles",
          key: "id",
        },
      },
      specialityId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Specialities",
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      tableName: "RecruiterSpecialities",
    }
  );

  RecruiterSpecialities.associate = function (models) {
    RecruiterSpecialities.belongsTo(models.RecruiterProfiles, {
      as: "RecruiterProfiles",
      onDelete: "CASCADE",
      foreignKey: "recruiterId",
    });
  };
};
