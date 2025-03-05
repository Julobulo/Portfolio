import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Map, of: String, required: true },
    timeItTook: { type: String, required: true },
    live: { type: String },
    code: { type: String },
    startDate: { type: Date },
    endDate: { type: Date, required: false},
})

const Project = mongoose.model('Project', projectSchema);

export default Project