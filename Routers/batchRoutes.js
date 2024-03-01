const express = require('express');
const { BatchService } = require('../Service/batchService');
const batchRouter = express.Router();

batchRouter.post('/create', async (req, res) => {
  try {
    const newBatch = await BatchService.createBatch(req.body);
    res.json(newBatch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add other routes as needed

module.exports = batchRouter;
