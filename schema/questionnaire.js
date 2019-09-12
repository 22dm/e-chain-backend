module.exports = (sequelize, DataTypes) =>
  sequelize.define('questionnaire', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    answer1: {
      type: DataTypes.INTEGER,
    },
    answer2: {
      type: DataTypes.INTEGER,
    },
    answer3: {
      type: DataTypes.INTEGER,
    },
    answer4: {
      type: DataTypes.INTEGER,
    },
    answer5: {
      type: DataTypes.INTEGER,
    },
    answer6: {
      type: DataTypes.INTEGER,
    },
    answer7: {
      type: DataTypes.INTEGER,
    },
    answer8: {
      type: DataTypes.INTEGER,
    },
    answer9: {
      type: DataTypes.INTEGER,
    },
    answer10: {
      type: DataTypes.INTEGER,
    }
  }, {
    tableName: 'questionnaire'
  })