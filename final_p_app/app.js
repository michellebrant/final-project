const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
var methodOverride = require('method-override');
var mustacheExpress = require('mustache-express');
const pgp = require('pg-promise')();
const session = require('express-session');
var Client = require('node-rest-client').Client;
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const UAKEY = process.env.UAKEY;
const UASECRETKEY = process.env.UASECRETKEY;


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use("/", express.static(__dirname + '/public'));
app.use("/:area", express.static(__dirname + '/public'));
app.use("/yourlists/arehere/:id/:listname", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(session({
  secret: 'theTruthIsOutThere51',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false,
  expires: new Date(Date.now() + 600 * 10000) }
}))
var db = pgp(process.env.DATABASE_URL || 'postgres://MichelleBrant@localhost:5432/FINALPROJECTDB');

app.listen(port);
console.log('we are live on 8080')
/* BCrypt stuff here */


app.get("/", function(req, res){
  var logged_in;
  var email;
  var id;

  if(req.session.user){
    logged_in = true;
    email = req.session.user.email;
    id = req.session.user.id;
  }

  var data = {
    "logged_in": logged_in,
    "email": email,
    "id" :id

  }

app.get('/logout', function(req, res){
  req.session.user=null;
  res.redirect('/')
})
  res.render('index', data);
});
//sign up page
app.get("/signup", function(req, res){
  res.render('signup.html')
  console.log(UAKEY)
  console.log(UASECRETKEY)
});

app.post('/signup', function(req, res){
  var data = req.body;

  bcrypt.hash(data.password, 10, function(err, hash){
    db.none(
      "INSERT INTO users (email, password_digest) VALUES ($1, $2)",
      [data.email, hash]
    ).then(function(){
      res.render('created.html');
    })
  });
})

//signin
app.post('/login', function(req, res){
  var data = req.body;
  db.one(
    "SELECT * FROM users WHERE email = $1",
    [data.email, data.id]
  ).catch(function(){
    res.render('notfound.html')
  }).then(function(user){
    bcrypt.compare(data.password, user.password_digest, function(err, cmp){
      if(cmp){
        req.session.user = user;
        db.one("SELECT * FROM users WHERE email = $1", [data.email]).then(function(data){
          Data = data;
        res.redirect('/');
  })
      } else {
        res.render('notfound.html')
      }
    });
  });
});


