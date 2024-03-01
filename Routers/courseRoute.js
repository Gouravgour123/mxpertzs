const express = require('express');
const { CourseScoresService } = require('../Service/courseService');
const courseRouter = express.Router();

courseRouter.post('/addScores', async (req, res) => {
  try {
    const newScores = await CourseScoresService.addScores(req.body);
    res.json(newScores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = {courseRouter};
