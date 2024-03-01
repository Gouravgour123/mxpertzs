const { Batch } = require("../Models/batchModel");

class BatchService {
  static async createBatch(batchData) {
    try {
      const batch = new Batch(batchData);
      return await batch.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {BatchService};
