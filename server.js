const express = require('express');
const batchRouter = require('./Routers/batchRoutes');
const { courseRouter } = require('./Routers/courseRoute');
const { interviewRouters } = require('./Routers/interviewRouter');
const { resultRouter } = require('./Routers/resultRoute');
require('./Db/mongoose')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false}));
const PORT = 3300;


app.use('/batches', batchRouter);
app.use('/course-scores', courseRouter);
app.use('/update', interviewRouters);
app.use('/results', resultRouter);

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})