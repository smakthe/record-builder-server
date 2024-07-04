import mongoose from 'mongoose'

const RecordSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    number: Number
})

export default mongoose.model('Record', RecordSchema)