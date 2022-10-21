const express = require('express');
const router = express.Router();
const foods = require('../models/FoodModel')

router.get('/getfoods', async (req, res) => {
    try {
       const foods_data = await foods.find({});
       res.send(foods_data);
    }
    catch (err) {
        res.status(404).json({message : err});
    }
});

module.exports = router;