const express = require('express');
const Model = require('../models/feedModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    
    new Model(req.body).save()
    .then((result)=> {
        res.status(200).json(result);
    }).catch((err)=> {
    console.log(err);
    res.status(500).json(err);
    
});

});

// getall
router.get('/getall', (req, res) => {
    res.send('response from user getall');
});

// update
router.get('/update', (req, res) => {
    res.send('response from user update');
});

// delete
router.get('/delete', (req, res) => {
    res.send('response from user delete');
});

module.exports = router;