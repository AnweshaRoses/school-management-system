const express = require('express')
const router = express.Router()
const fetchStudent = require('../middleware/fetchStudent')
const Attendance = require('../models/Attendance')

router.get('/fetchAttendances', fetchStudent, async (req, res)=>{
    try{
        const attendance = await Attendance.find({user: req.user.id})
        res.status(200).json(attendance)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("An internal error occured")
    }
})

module.exports = router