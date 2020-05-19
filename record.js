const mongoose = require('mongoose')

const RecordSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    number: Number
})

module.exports = mongoose.model('Record', RecordSchema)