module.exports = (sequelize, type) => {
    return sequelize.define('category', {
        // attributes
        categoryName: {
          type: type.STRING,
          allowNull: false
        },
        description: {
          type: type.STRING
          // allowNull defaults to true
        },
        categoryType: {
            type: type.STRING
        },
        gender: {
            type: type.STRING
        }
      },{
        sequelize,
        modelName: 'category'
        // options
    })
}