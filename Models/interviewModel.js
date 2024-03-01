const { default: mongoose } = require("mongoose");

const interviewSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  company: String,
  date: Date,
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = {Interview};

