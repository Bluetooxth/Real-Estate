import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    
})

const Schedule = mongoose.models.Schedule || mongoose.model("Schedule", scheduleSchema);

export default Schedule;