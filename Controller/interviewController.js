
const { Interview } = require('../Models/interviewModel');

const schedule = async (req, res) => {
  try {
    const newInterview = await Interview.create({...req.body});
    res.send(newInterview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {schedule};
