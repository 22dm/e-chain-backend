module.exports = (sequelize, DataTypes) =>
    sequelize.define('report', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(512),
            allowNull: false
        },
        url: {
            type: DataTypes.STRING(512),
            allowNull: false
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        source: {
            type: DataTypes.STRING(64),
        }
    }, {
        tableName: 'report'
    });
