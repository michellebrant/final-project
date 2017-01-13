const port = process.env.PORT || 8080;
const express = require('express');
const app = express();
var methodOverride = require('method-override');
var mustacheExpress = require('mustache-express');
const pgp = require('pg-promise')();


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use("/", express.static(__dirname + '/public'));
app.use("/:area", express.static(__dirname + '/public'));
app.use("/yourlists/arehere/:id/:listname", express.static(__dirname + '/public'));
app.use(methodOverride('_method'))



app.listen(port);
console.log('we are live on 8080')
/* BCrypt stuff here */


app.get('/',function(req, res){
  res.render('index.html')
});
