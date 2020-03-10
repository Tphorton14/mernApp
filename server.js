// imported NPM packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// built in Node mod
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// http request logger
app.use(morgan('tiny'));

// defining routes withn server
app.get('/api', (req, res) => {
    const data = {
        username: 'taylorhorton',
        age: 10
    };
    res.json(data);
});

app.get('/api', (req, res) => {
    const data = {
        username: 'josh',
        age: 10
    };
    res.json(data);
});

// consologging that server is listening
app.listen(PORT, console.log(`Server is listening at ${PORT}`));