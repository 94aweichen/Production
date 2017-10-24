var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var filestore = require('session-file-store')(session);


var routes = require('./routes/index');
var users = require('./routes/users');
var gpt4 = require('./routes/gpt4');
var login = require('./routes/login');
var logout = require('./routes/logout');
var register = require('./routes/register');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
var ejs = require('ejs');
app.engine('.html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'Triones',
    name: 'evs',
    cookie: {maxAge:60000},
    store: new filestore(),
    resave: false,
    saveUninitialized: false
}));

app.use('/', routes);
app.use('/users', users);
app.use('/gpt4', gpt4);
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
