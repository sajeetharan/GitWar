var users = require('../controllers/users.js');
var path = require('path');

module.exports = function(app) {
    app.get('/users', function(req, res) {
        users.showAll(req, res);
    });

    app.post('/users', function(req, res) {
        users.addUser(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}