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
        //if 0,未卖出;if 1,已卖出
        portfolio_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'portfolio_item'
    });

