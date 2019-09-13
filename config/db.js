const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:root@localhost:3306/e_chain', {define: {timestamps: false}});

module.exports = sequelize;
