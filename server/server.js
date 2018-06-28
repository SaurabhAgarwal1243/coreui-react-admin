const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database')
//const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const user = require('./routes/user')
const app = express()

app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9999');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// app.use(
//   session({
//     secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
//     store: new MongoStore({ mongooseConnection: dbConnection }),
//     resave: false, //required
//     saveUninitialized: false //required
//   })
// )
app.listen(4200)
// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


app.use('/user', user)


