const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
  batchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Batch', required: true },
  name: { type: String, required: true },
  college: { type: String, required: true },
  status: { type: String, enum: ['placed', 'not_placed'], required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = {Student};
