const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:root@localhost:3306/e_chain?useUnicode=true&characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC', {define: {timestamps: false}});

module.exports = sequelize;
