var mongoose = require('mongoose');
module.exports = function () {
    var url = "mongodb://localhost:27017/dbMTsubcontent";
    mongoose.connect(url);
    mongoose.connection.on('connected', function () {
        console.log('connected to ' + url);
    })
}
