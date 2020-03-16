// imported NPM packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// built in Node mod
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/mern_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Verfy mongoose connection 
mongoose.connection.on('connected', () => {
    console.log('Mongoooose has been connected!');
});

// Creating Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema ({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Creating Model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// http request logger
app.use(morgan('tiny'));

// defining routes within server
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

// consologging that server is listening --- using backtick
app.listen(PORT, console.log(`Server is listening on ${PORT}`));