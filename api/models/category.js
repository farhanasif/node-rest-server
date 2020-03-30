const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/node_rest_db');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

const Model = Sequelize.Model;
class Category extends Model {}

Category.init({
  // attributes
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  categoryType: {
      type: Sequelize.STRING
  },
  gender: {
      type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'category'
  // options
});

module.exports = Category;