module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "RecruiterHospitals",
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
      hospitalsId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Hospitals",
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
      tableName: "RecruiterHospitals",
    }
  );
};
