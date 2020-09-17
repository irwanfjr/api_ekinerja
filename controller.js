'use strict';

var response = require('./res');
var connection = require('./conn');

exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

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

// Detail
exports.detailkegiatan = function (req, res) {
    var id_kegiatan = req.params.id_kegiatan;

    connection.query('SELECT * FROM kegiatan WHERE id_kegiatan=?', [id_kegiatan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }

        });
};

// add
exports.createkegiatan = function (req, res) {
    var jabatan = req.body.jabatan;
    var kode_kegiatan = req.body.kode_kegiatan;
    var uraian_tugas = req.body.uraian_tugas;
    var satuan = req.body.satuan;
    var angka_kredit = req.body.angka_kredit;
    var output = req.body.output;
    var no_sk = req.body.no_sk;
    var created_at = new Date();

    connection.query('INSERT INTO kegiatan (jabatan, kode_kegiatan, uraian_tugas, satuan, angka_kredit, output, no_sk, created_at) VALUES (?,?,?,?,?,?,?,?)',
        [jabatan, kode_kegiatan, uraian_tugas, satuan, angka_kredit, output, no_sk, created_at],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil menambahkan kegiatan!", res);
            }
        });
};

// upd
exports.updatekegiatan = function (req, res) {
    var jabatan = req.body.jabatan;
    var kode_kegiatan = req.body.kode_kegiatan;
    var uraian_tugas = req.body.uraian_tugas;
    var satuan = req.body.satuan;
    var angka_kredit = req.body.angka_kredit;
    var output = req.body.output;
    var no_sk = req.body.no_sk;
    var id_kegiatan = req.body.id_kegiatan;

    connection.query('UPDATE kegiatan SET jabatan=?, kode_kegiatan=?, uraian_tugas=?, satuan=?, angka_kredit=?, output=?, no_sk=? WHERE id_kegiatan=?',
        [jabatan, kode_kegiatan, uraian_tugas, satuan, angka_kredit, output, no_sk, id_kegiatan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil update kegiatan!", res);
            }
        });
};

// del
exports.deletekegiatan = function (req, res) {
    var id_kegiatan = req.body.id_kegiatan;

    connection.query('DELETE FROM kegiatan WHERE id_kegiatan = ?',
        [id_kegiatan],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus kegiatan!", res)
            }
        });
};