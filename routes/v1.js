var express = require('express');
var router = express.Router();
var Users = require('../services/users');
var Items = require('../services/items');

router.get('/users', function(req, res, next) {
    Users.getAllUsers(function(error, results) {
        if(error) {
            res.send(error);
        } else {
            res.send(results);
        }
    });
});

router.get('/users/:id', function(req, res, next) {
    if(req.params.id) {
        Users.getUserById(req.params.id, function(error, results) {
            if(error) {
                res.send(error);
            } else {
                res.send(results);
            }
        });
    }
});

router.get('/items', function(req, res, next) {
    Items.getAllUItems(function (error, results) {
        if(error) {
            res.send(error);
        } else {
            res.send(results);
        }
    });
});

router.get('/items/:id', function(req, res, next) {
    if(req.params.id) {
        Items.getItemById(req.params.id, function (error, results) {
           if(error) {
               res.send(error);
           } else {
               res.send(results);
           }
        });
    }
});

module.exports = router;
