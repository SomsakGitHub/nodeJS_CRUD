const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./db/mongoose')
const app = express();
const port = process.env.PORT || 3000;

//React allow.
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
    next();
});

//Settings.
app.set('port', port);

//Middlewares.
app.use(morgan('dev'));
app.use(express.json());

//Routes.
app.use(require('./routers/user.routes'));

//Static files.
app.use(express.static(path.join(__dirname + '/public')));

//Starting the serve.
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})
