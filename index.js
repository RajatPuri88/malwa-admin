require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var session = require('express-session');
var passport = require('passport');

var mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGO_DB_CONN_STRING,
    { useNewUrlParser: true },
    function (err) {
        if (err) console.log(err);
        else console.log("DB Connected..");
    }
);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'admin' }));
app.set('view engine', 'handlebars');



app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
    res.locals.user = req.user || null;
    next();
})

app.use('/', routes);
app.use('/users', users);

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});