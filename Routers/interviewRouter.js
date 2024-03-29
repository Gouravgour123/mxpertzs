const express = require('express');
const interviewRouters = express.Router();

interviewRouters.post('/schedule', async (req, res) => {
  try {
    const newInterview = await InterviewService.scheduleInterview(req.body);
    res.json(newInterview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = {interviewRouters};
