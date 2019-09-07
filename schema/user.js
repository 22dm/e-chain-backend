module.exports = (sequelize, DataTypes) =>
    sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'user'
    });
