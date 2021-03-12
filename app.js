// Importing npm modules.
const express = require('express');
const app = express();

// User Defined modules.
const routes = require('./routes/routes.js')

// For parsing form data.
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Setting static folders.
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
app.set('view engine', 'ejs');

// Setting up routes.
app.use('/', routes);

// Starting the server.
const port = process.env.PORT || 3000;
app.listen(port);

