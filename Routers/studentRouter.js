const express = require('express')
const { create } = require('../Controller/studentController')
const studentRoute = express.Router()

studentRoute.post('/create',create)

module.exports = {studentRoute}