var mongoose = require('mongoose');

//In mongo, there are no tables. The equivalent is 'Schema'.

//This is the general schema:
var Schema = mongoose.Schema;
var User = require('./user');

//This is the schema I'm going to create (something like the blueprint of the database you're about to create):
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function (message) {
    User.findById(message.user, function (err, user) {
        user.messages.pull(message);
        user.save();
    });
});

//now, the models:
module.exports = mongoose.model('Message', schema);
