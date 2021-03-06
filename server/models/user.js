var mongoose = require('mongoose')

var User = mongoose.model('User', {
    user: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};