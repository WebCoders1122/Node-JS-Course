const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const taskSchema = new Schema({
  id: { type: Number, unique: true, required: true },
  title: { type: String, unique: true, required: true },
  status: { type: Boolean, required: true },
  date: { type: Date, default: Date.now },
});

exports.Task = mongoose.model("Task", taskSchema);
