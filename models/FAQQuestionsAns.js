

module.exports = (sequelize, DataTypes) => {
  const FAQQuestionsAns = sequelize.define('FAQQuestionsAns', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    sectionId: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      references: {
        model: 'FAQSections',
        onDelete: 'restrict'
      }
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
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
      tableName: 'FAQQuestionsAns'

    });


  FAQQuestionsAns.associate = function (models) {
    FAQQuestionsAns.belongsTo(models.FAQSections, {
      onDelete: "CASCADE",
      foreignKey: 'sectionId'
    });
  };

  return FAQQuestionsAns;
};
