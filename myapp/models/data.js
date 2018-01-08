var mongoose = require("mongoose");

var dataSchema = mongoose.Schema({
    "Goi": { type: String, required: true },
    "Ngay": { type: Date, required: true },
    "Noidung": { type: String, required: true }
})

module.exports = mongoose.model('data', dataSchema);