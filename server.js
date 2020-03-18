// imported NPM packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// built in Node mod
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect('mongodb://localhost/mern_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Verfy mongoose connection 
mongoose.connection.on('connected', () => {
    console.log('Mongoooose has been connected!');
});


// Save user data in MongoDB
const data = {
    title: 'Welcome to my Blog site!',
    body: 'This is practice for a MERN stack site'
};

// instance of the Model
const newBlogPost = new BlogPost(data);

// newBlogPost.save((err) => {
//     if (err) {
//         console.log('ERROR, Data not saved')
//     } else {
//         console.log('Data has been saved!')
//     }
// });

// http request logger
app.use(morgan('tiny'));
// configure routes after HTTP request
app.use('/', routes);


// consologging that server is listening --- using backtick
app.listen(PORT, console.log(`Server is listening on ${PORT}`));