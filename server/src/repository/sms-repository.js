"use strict";

const mongoose = require("mongoose");
const Task = mongoose.model("Task");


exports.post = (req) => {
  var task = new Task();

  task.name = req.name;
  task.seconds = req.seconds;
  task.minutes = req.minutes;
  task.hour = req.hour;

  return task.save();
};