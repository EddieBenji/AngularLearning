var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function (error, doc) {
        //will be called after the task is completed
        if (error) {
            return res.send('Error!');
        }
        //I need to return the view, once the database responds:
        res.render('node',{email: doc.email});
    });
});

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Lalo',
        lastName: 'Vazquez',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
