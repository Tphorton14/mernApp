const express = require('express');

//create express router
const router = express.Router();


// defining routes within server -- also sending data back to the client
router.get('/api', (req, res) => {

    BlogPost.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((err) => {
            console.log('Error: ', err);
        });

   
});

router.get('/api', (req, res) => {
    const data = {
        username: 'josh',
        age: 10
    };
    res.json(data);
});


module.exports = router;