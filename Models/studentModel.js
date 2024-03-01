const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  name: { type: String, required: true },
  college: { type: String, required: true },
  status: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = {Student};
