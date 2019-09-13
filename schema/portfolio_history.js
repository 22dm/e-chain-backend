module.exports = (sequelize, DataTypes) =>
    sequelize.define('portfolio_history', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //0代表买入，1代表卖出
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        portfolio_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'portfolio_history'
    });
