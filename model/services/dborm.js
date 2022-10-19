
const Sequelize = require('sequelize');
const sequilize =  new Sequelize ('webii', 'root', 'root', {dialect: 'msql', host: 'localhost', port:3306})

module.exports = {sequilize}