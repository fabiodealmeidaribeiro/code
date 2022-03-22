const axios = require('axios');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');

require('dotenv').config();

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret : 'laranja',
  resave : true,
  saveUninitialized : true,
  cookie : {
    secure : true,
  },
}));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended : false,
}));

app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));

app.use(cookieParser());
app.use(require('./middlewares').cookie);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));

const {
  package,
  getJSFileModule,
} = require('./utils');

app.use((req, res, next) => {
  return res.status(404).render('message', {
    pageMessage : 'this page is not found!',
    ...getJSFileModule({ content : 'message', variable : 'isPageJSFile' }),
    ...package(),
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : { };
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;