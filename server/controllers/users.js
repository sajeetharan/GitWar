var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = mongoose.model('User');

module.exports = {
    showAll: function(req, res) {
        User.find({}).sort('-score').exec(function(err, users) {
            if (!err) {
                return res.json(users);
            }
        });
    },
    addUser: function(req, res) {
        var user = new User({
            username: req.body.username,
            score: req.body.score
        });
        user.save(function(err) {
            if (!err) {
                return res.json(user);
            }
        });
    }
}