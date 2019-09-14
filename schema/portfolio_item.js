module.exports = (sequelize, DataTypes) =>
    sequelize.define('portfolio_item', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buy_price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        sell_price: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        portfolio_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'portfolio_item'
    });

