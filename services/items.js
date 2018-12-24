var express = require('express');
var connection = require('../db/config');

var Items = {
    getAllUItems: function (callback) {
        return connection.query("SELECT * FROM items", callback);
    },

    getItemById : function (id, callback) {
        return connection.query("SELECT * FROM items WHERE Id = ?", [id], callback);
    }
};

module.exports = Items;