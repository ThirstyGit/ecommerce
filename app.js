// Importing npm modules.
const express = require('express');
const app = express();
const sessions = require('express-session');

// User Defined modules.
const routes = require('./routes/routes.js');
const authRoutes = require('./routes/auth.js');
const authenticate = require('./middlewares/verify.js').authenticate;

// For parsing form data.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// For Login
app.use(sessions({
   secret: 'ajshdgf713', // Need a better secret key.
   resave: true,
   saveUninitialized: true,
   cookie: {
      maxAge: 1000 * 60 * 60 * 1 // 1 hour
   }
}));
app.use(authenticate);



// Setting static folders.
app.use(express.static('public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/images', express.static(__dirname + '/public/images'));
app.set('view engine', 'ejs');

// Setting up routes.
app.use('/', routes);
app.use('/auth', authRoutes);

// Starting the server.
const port = process.env.PORT || 3000;
app.listen(port);

