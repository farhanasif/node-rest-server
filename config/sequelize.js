require('dotenv').config();
const Sequelize = require('sequelize')
const CategoryModel = require('../api/models/category')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Category = CategoryModel(sequelize, Sequelize)

sequelize.sync()
  .then(() => {
    console.log(`Database & tables synced!`)
})

module.exports = {
    Category
}