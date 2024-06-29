const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const taskSchema = new Schema({
  id: { type: Number, unique: true },
  title: { type: String, unique: true },
  status: Boolean,
  date: { type: Date, default: Date.now },
});

exports.Task = mongoose.model("Task", taskSchema);
