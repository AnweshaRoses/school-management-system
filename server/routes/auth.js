const express = require('express')
const router = express.Router()
const Student = require('../models/Student')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const fetchStudent = require('../middleware/fetchStudent');
require("dotenv").config();

//Below route is for loggging the student in
router.post('/login', [
    body('email', 'Enter a valid email address').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success = true
    const errors = validationResult(req)
    //In case of an error, return bad request and the error
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body
    try {
        let user = await Student.findOne({ email }).exec()
        if (!user) {
            return res.status(400).json({ error: "Invalid Credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error: "Invalid Credentials" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const jwtAuthToken = jwt.sign(data, process.env.JWT_SECRET, {expiresIn: '12h'})
        success = true
        res.status(200).json({ success, jwtAuthToken })
    } catch (error) {
        console.log("Error detected")
        console.error(error.message)
        res.status(500).send("An internal error occured")
    }
})

router.post('/getStudent', fetchStudent, async (req, res) => {
    try{
        const userId = req.user.id
        const user = await Student.findById(userId).select('email').select('name')
        res.status(200).send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("An internal error occured")
    }
})

module.exports = router