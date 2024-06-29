const { Task } = require("../model/task");

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  try {
    const doc = await task.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getAllTask = async (req, res) => {
  try {
    const docs = await Task.find();
    res.status(200).json(docs);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.getOneTask = async (req, res) => {
  const query = req.params.query;
  try {
    const doc = await Task.find({ id: { $eq: query } });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.replaceOneTask = async (req, res) => {
  const query = req.params.query;
  try {
    const doc = await Task.findOneAndReplace({ id: { $eq: query } }, req.body, {
      returnDocument: "after",
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
exports.updateOneTask = async (req, res) => {
  const query = req.params.query;
  try {
    const doc = await Task.findOneAndUpdate({ id: { $eq: query } }, req.body, {
      returnDocument: "after",
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
