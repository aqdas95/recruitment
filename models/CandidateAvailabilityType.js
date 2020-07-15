/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CandidateAvailabilityType', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    availabilityType: {
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
    tableName: 'CandidateAvailabilityType'
  });
};
