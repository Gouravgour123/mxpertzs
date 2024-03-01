const { Student } = require("../Models/updatestudentModel");

class StudentService {
  static async createStudent(studentData) {
    try {
      const student = new Student(studentData);
      return await student.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {StudentService};
