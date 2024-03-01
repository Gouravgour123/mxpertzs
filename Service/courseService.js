const { CourseScores } = require("../Models/courseModel");

class CourseScoresService {
  static async addScores(scoresData) {
    try {
      const scores = new CourseScores(scoresData);
      return await scores.save();
    } catch (error) {
      throw error;
    }
  }

  // Add other CRUD operations as needed
}

module.exports = {CourseScoresService};
