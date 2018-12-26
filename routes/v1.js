var express = require('express');
var router = express.Router();
var Items = require('../services/items');
var Utils = require('../helpers/utils');
var Validators = require('../helpers/validators');

router.get('/', function(req, res, next) {
    res.status(Utils.NOT_FOUND).send("RESOURCE NOT FOUND");
});

router.get('/items', function(req, res, next) {
    Items.getAllUItems(function (error, results) {
        if(error) {
            res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
        } else {
            res.status(Utils.OK_GET).send(results);
        }
    });
});

router.get('/items/:id', function(req, res, next) {
    if(req.params.id) {
        Items.getItemById(req.params.id, function (error, results) {
            if(error) {
                res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
            } else {
                res.status(Utils.OK_GET).send(results);
            }
        });
    } else {
        res.status(Utils.BAD_REQUEST).send("WRONG REQUEST - CHECK ALL THE FIELDS");
    }
});

router.post('/items/add', function (req, res, next) {
    if(!Validators.isItemValid(req.body)) {
        return res.status(Utils.BAD_REQUEST).send('WRONG FORMAT');
    }
    Items.addItem(req.body, function (error, results) {
        if(error) {
            res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
        } else {
            res.status(Utils.OK_GET).send(results);
        }
   });
});

router.delete('/items/:id/remove', function (req, res, next) {
    if(req.params.id) {
        Items.removeItem(req.params.id, function (error, results) {
            if(error) {
                res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
            } else {
                res.status(Utils.OK_GET).send(results);
            }
        });
    } else {
        res.status(Utils.BAD_REQUEST).send("WRONG REQUEST - CHECK ALL THE FIELDS");
    }
});

router.put('/items/:id/update', function(req, res, next) {
    if(!Validators.isItemValid(req.body)) {
        return res.status(Utils.BAD_REQUEST).send('WRONG FORMAT');
    }
   if(req.params.id) {
       Items.updateAllFieldInItem(req.params.id, req.body, function(error, results) {
           if(error) {
               res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
           } else {
               res.status(Utils.OK_GET).send(results);
           }
       });
   } else {
       res.status(Utils.BAD_REQUEST).send("WRONG REQUEST - CHECK ALL THE FIELDS");
   }
});

router.put('/items/:id/update/name', function(req, res, next) {
    if(req.params.id) {
        Items.updateItemName(req.params.id, req.body, function(error, results) {
            if(error) {
                res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
            } else {
                res.status(Utils.OK_GET).send(results);
            }
        });
    } else {
        res.status(Utils.BAD_REQUEST).send("WRONG REQUEST - CHECK ALL THE FIELDS");
    }
});

router.put('/items/:id/update/quantity', function(req, res, next) {
    if(!Validators.isItemValid(req.body)) {
        return res.status(Utils.BAD_REQUEST).send('WRONG FORMAT');
    }
    if(req.params.id) {
        Items.updateItemName(req.params.id, req.body, function(error, results) {
            if(error) {
                res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
            } else {
                res.status(Utils.OK_GET).send(results);
            }
        });
    } else {
        res.status(Utils.BAD_REQUEST).send("WRONG REQUEST - CHECK ALL THE FIELDS");
    }
});

router.put('/items/:id/update/related_price', function(req, res, next) {
    if(!Validators.isItemValid(req.body)) {
        return res.status(Utils.BAD_REQUEST).send('WRONG FORMAT');
    }
    if(req.params.id) {
        Items.updateItemName(req.params.id, req.body, function(error, results) {
            if(error) {
                res.status(Utils.INTERNAL_SERVER_ERROR).send(error);
            } else {
                res.status(Utils.OK_GET).send(results);
            }
        });
    } else {
        res.status(Utils.BAD_REQUEST).send("WRONG REQUEST - CHECK ALL THE FIELDS");
    }
});

module.exports = router;
