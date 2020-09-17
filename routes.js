'use strict';

module.exports = function (app) {
    var todoList = require('./controller');

    app.route('/').get(todoList.index);

    app.route('/kegiatan').get(todoList.kegiatan); // List Kegiatan
    
    app.route('/kegiatan/:id_kegiatan').get(todoList.detailkegiatan);

    app.route('/kegiatan').post(todoList.createkegiatan);

    app.route('/kegiatan').put(todoList.updatekegiatan);

    // app.route('/kegiatan').delete(todoList.deletekegiatan);
};