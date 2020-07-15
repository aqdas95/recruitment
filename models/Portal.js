/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var Portals = sequelize.define(
    "Portals",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
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
      tableName: "Portals",
      freezeTableName: true,
    }
  );

  Portals.associate = function (models) {
    Portals.hasMany(models.Vacancies, {
      as: "Vacancies",
      foreignKey: "portalId",
    });
  };

  return Portals;
};
