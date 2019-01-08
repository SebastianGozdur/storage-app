var express = require('express');
var connection = require('../db/config');

var Items = {
    getAllUItems: function (callback) {
        return connection.query("SELECT * FROM items", callback);
    },

    getItemById: function (id, callback) {
        return connection.query("SELECT * FROM items WHERE Id = ?", [id], callback);
    },

    addItem: function(item, callback) {
        return connection.query("INSERT INTO items(`name`, `quantity`, `related_price`) VALUES (?,?,?)", [item.name, item.quantity, item.related_price], callback);
    },

    removeItem: function(id, callback) {
        return connection.query("DELETE FROM items WHERE Id = ?", [id], callback);
    },

    updateAllFieldInItem: function(id, item, callback) {
        return connection.query("UPDATE items SET name = ?, quantity = ?, related_price = ? WHERE Id = ?", [item.name, item.quantity, item.related_price, id], callback);
    },

    updateItemName : function(id, item, callback) {
        return connection.query("UPDATE items SET name = ? WHERE Id = ?", [item.name, id], callback);
    },

    updateItemQuantity : function(id, item, callback) {
        return connection.query("UPDATE items SET quantity = ? WHERE Id = ?", [item.quantity, id], callback);
    },

    updateItemRelatedPrice : function(id, item, callback) {
        return connection.query("UPDATE items SET related_price = ? WHERE Id = ?", [item.related_price, id], callback);
    }
};

module.exports = Items;