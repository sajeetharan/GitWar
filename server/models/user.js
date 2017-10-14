var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 2, maxlength: 256},
    score: {type: Number, required: true, min: 0}
}, {timestamps: true});

mongoose.model('User', UserSchema);