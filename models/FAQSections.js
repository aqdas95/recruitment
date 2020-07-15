module.exports = (sequelize, DataTypes) => {
  const FAQSections = sequelize.define('FAQSections', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    section: {
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
      freezeTableName: true,
      tableName: 'FAQSections'

    });

  FAQSections.associate = function (models) {
    FAQSections.hasMany(models.FAQQuestionsAns, {
      as: "FAQQuestionsAns",
      onDelete: "CASCADE",
      foreignKey: 'sectionId'
    });

  }

  return FAQSections;
};