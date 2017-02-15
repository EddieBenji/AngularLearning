var mongoose = require('mongoose');

//In mongo, there are no tables. The equivalent is 'Schema'.

//This is the general schema:
var Schema = mongoose.Schema;

//This is the schema I'm going to create (something like the blueprint of the database you're about to create):
var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages:{}
});

//now, the models:
module.exports = mongoose.model('Message', schema);
