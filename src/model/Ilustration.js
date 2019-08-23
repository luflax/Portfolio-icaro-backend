const { Schema, model } = require('mongoose')

const IlustrationsSchema = new Schema({
    thumbnail: {
        type: String,
        required: true
    },
    project: {
        type: String,
        required: true
    },
    gallery:{
        type: [String],
        required: true
    },
    customer:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    isdone:{
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Ilustrations', IlustrationsSchema)