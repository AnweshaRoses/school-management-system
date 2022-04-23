const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    math: {
        type: Number,
        required: true
    },
    socialStudies: {
        type: Number,
        required: true
    },
    science: {
        type: Number,
        required: true
    },
    generalKnowledge: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('student', StudentSchema)