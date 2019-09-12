module.exports = (sequelize, DataTypes) =>
    sequelize.define('portfolio', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        recommend: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        buy_time: {
            type: DataTypes.DATE,
            allowNull: false
        },

        sell_time: {
            type: DataTypes.DATE,
            allowNull: true
        },

    }, {
        tableName: 'portfolio'
    });

