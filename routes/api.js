const express = require('express');

//create express router
const router = express.Router();

const BlogPost = require('../models/blogPost');


// defining routes within server -- also sending data back to the client
router.get('/', (req, res) => {

    BlogPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ', err);
        });

   
});

// back end receiving request from REACT server
router.post('/save', (req, res) => {
    console.log('Body: ', req.body)
    res.json({
        msg: 'We have successfuly received your data!'
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'josh',
        age: 10
    };
    res.json(data);
});


module.exports = router;