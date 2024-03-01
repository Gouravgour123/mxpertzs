const { Result } = require("../Models/resultModel");

class ResultService {
  static async addResult(resultData) {
    try {
      const result = new Result(resultData);
      return await result.save();
    } catch (error) {
      throw error;
    }
  }

}

module.exports = {ResultService};
