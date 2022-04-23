const mongoose = require('mongoose')

const AttendanceSchema = new mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student'
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    days: {
        type: [Number]
    }
})

module.exports = mongoose.model('attendance', AttendanceSchema)