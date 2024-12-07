import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
});

const task = mongoose.model("tasks", taskSchema);
export default task;
