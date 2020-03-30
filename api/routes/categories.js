const express = require('express');

const router = express.Router();
const { Category } = require('../../config/sequelize')


router.get('/', (req, res, next) => {
    Category.findAll({
        attributes: ['id','categoryName','description','categoryType','gender']
    }).then((result) =>{
        res.status(200).json({
            message: 'Get request success',
            result: result
        });
    }).catch((err) => {
        res.status(404).json({
            message: err
        });
    })
    
});

router.post('/', (req, res, next) => {
    const category = {
        categoryName: req.body.categoryName,
        description: req.body.description,
        categoryType: req.body.categoryType,
        gender: req.body.gender
    };

    Category.create(category).then((result) => {
        res.status(201).json({
            message: 'Category was created',
            category: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
    });
    
});


module.exports = router;