// imported NPM packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// built in Node mod
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mern_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Verfy mongoose connection 
mongoose.connection.on('connected', () => {
    console.log('Mongoooose has been connected!');
});

// middleware that parse the json or urlencoded -- making them avalible at req.body @ api.js
app.use(express.json());
// data parsing            // extended should be "true" if deep nested object
app.use(express.urlencoded({ extended: false }));


// http request logger
app.use(morgan('tiny'));
// configure routes after HTTP request
app.use('/api', routes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// consologging that server is listening --- using backtick
app.listen(PORT, console.log(`Server is listening on ${PORT}`));