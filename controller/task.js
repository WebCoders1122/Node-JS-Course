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
