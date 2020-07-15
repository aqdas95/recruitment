/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var VacancySchedule = sequelize.define(
    "VacancySchedule",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      vacancyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Vacancies",
          key: "id",
        },
      },
      scheduleStartDateTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      scheduleEndDataTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: sequelize.fn("now"),
      },
      updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: sequelize.fn("now"),
      },
    },
    {
      tableName: "VacancySchedule",
    }
  );

  VacancySchedule.associate = function (models) {
    VacancySchedule.belongsTo(models.Vacancies, {
      as: "Vacancies",
      onDelete: "CASCADE",
      foreignKey: "vacancyId",
    });
  };

  return VacancySchedule;
};
