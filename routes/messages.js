var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function (req, res, next) {
    // res.render('index');
    var message = new Message({
        content: req.body.content
    });
    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        //You can write return or not, 'cuz there are not code to execute after this statement.
        res.status(201).json({
            message: 'Saved message!',
            obj: result
        });

    });
});

module.exports = router;
