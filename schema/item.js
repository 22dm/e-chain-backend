module.exports = (sequelize, DataTypes) =>
    sequelize.define('item', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(16),
            allowNull: false
        },
        //if 0,type=stock;if 1,type=fund
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        now_price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        twenty_days_ago_price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        tableName: 'item'
    });

