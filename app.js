var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');

var app = express();
//config

app.engine('html', cons.swig);

app.set('view engine', 'html');


app.set('views', path.join(__dirname, 'views'));
// use middleware
// to find route install express static
app.use(express.static(path.join(__dirname, '/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//define routes 
app.get('/', function (req, res) {
    res.render('index');
});

app.post('/add', function (req, res) {
    var newItem = req.body.newItem;

});

app.listen(3000, function () {
    console.log('Ready on port 3000');
});
