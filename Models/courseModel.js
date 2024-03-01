const { default: mongoose } = require("mongoose");

const courseScoresSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  dsaScore: Number,
  webDScore: Number,
  reactScore: Number,
});

const CourseScores = mongoose.model('CourseScores', courseScoresSchema);

module.exports = {CourseScores};
