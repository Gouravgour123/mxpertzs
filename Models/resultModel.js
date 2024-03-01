const { default: mongoose } = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true },
  result: { type: String, enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'], required: true },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = {Result};
