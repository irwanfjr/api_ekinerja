'use strict';

var response = require('./res');
var connection = require('./conn');

// List Kegiatan
exports.kegiatan = function (req, res) {
    connection.query('SELECT * FROM kegiatan', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};