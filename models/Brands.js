module.exports = function (sequelize, DataTypes) {
  var Brands = sequelize.define('Brands', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
      tableName: 'Brands',
      freezeTableName: true
    });

    Brands.associate = function (models) {
      Brands.hasMany(models.Vacancies,
        { as: 'Vacancies', foreignKey: 'brandId' });

      }



  return Brands;
};
