import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  propertyName: {
    type: String,
    required: true,
  },
  propertyLocation: {
    type: String,
    required: true,
  },
});

const Schedule = mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);

export default Schedule;