/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CountryCodes = sequelize.define('CountryCodes', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dial: {
      type: DataTypes.STRING,
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
      tableName: 'CountryCodes',
      freezeTableName: true,
    });
  return CountryCodes;
};
