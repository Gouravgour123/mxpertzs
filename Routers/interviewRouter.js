const express = require('express')
const { schedule } = require('../Controller/interviewController')
const interviewRoute = express.Router()

interviewRoute.post('/schedule',schedule)

module.exports = {interviewRoute}