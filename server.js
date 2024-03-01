const express = require('express');
const { studentRoute } = require('./Routers/studentRouter');
const { interviewRoute } = require('./Routers/interviewRouter');
require('./Db/mongoose')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false}));
const PORT = 3300;

app.use('/student',studentRoute)
app.use('/interview',interviewRoute)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})