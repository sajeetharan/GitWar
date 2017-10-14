var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(path.join(__dirname, '/public/dist')));

require('./config/mongoose.js');

var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});