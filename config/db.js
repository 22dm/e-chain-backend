const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:981018@localhost:3306/e_chain', {define: {timestamps: false}});

module.exports = sequelize;
