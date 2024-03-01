const { default: mongoose } = require("mongoose");

const interviewSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  dsaScore: Number,
  webDScore: Number,
  reactScore: Number,
  interviewDate: Date,
  company: String,
  result: String,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = {Interview};
