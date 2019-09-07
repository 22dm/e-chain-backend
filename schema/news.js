module.exports = (sequelize, DataTypes) =>
    sequelize.define('news', {
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
        },
        preview: {
            type: DataTypes.STRING(512),
            allowNull: false
        },
        company: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        position: {
            type: DataTypes.STRING(64),
            allowNull: false
        }
    }, {
        tableName: 'news'
    });
