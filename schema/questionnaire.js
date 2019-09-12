module.exports = (sequelize, DataTypes) =>
sequelize.define('questionnaire', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  answer: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'questionnaire'
});