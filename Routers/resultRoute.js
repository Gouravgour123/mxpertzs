
const express = require('express');
const { ResultService } = require('../Service/resultService');
const resultRouter = express.Router();

resultRouter.post('/addResult', async (req, res) => {
  try {
    const newResult = await ResultService.addResult(req.body);
    res.json(newResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = {resultRouter};
