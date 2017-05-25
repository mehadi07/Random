// 1  first line and required to start express package
var express = require('express');

// 6
var path = require('path');

var bodyParser  = require('body-parser');
var cons = require('consolidate');

// 2  app is using express function. write your app name. put the whole app inside views folder
var app = express();

//configure app

app.engine('html', cons.swig);

// 5  to configure view engine and file type 
// for ejs or jade or other tamplate engine just change ta html below and remove swig and consolidate . both module needed fot html only
app.set('view engine', 'html');


// 6 path is required so set path required
app.set('views', path.join(__dirname, 'views'));
// use middleware

// to find route install express static
app.use(express.static(path.join(__dirname, '/')));

// 7 install body parser to use body.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



//define routes

//4 use .get  to req and res and for res you can use sendfiles or render . i prefer render.
app.get('/', function (req, res) {
    res.render('index');
});

app.post('/add', function (req, res) {
    var newItem = req.body.newItem;
    
});

// 3 write port name or host name and than call function to check everything is fine.
app.listen(3000, function () {
    console.log('Ready on port 3000');
});
