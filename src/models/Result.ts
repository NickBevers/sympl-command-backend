import mongoose from "mongoose";

const results = new mongoose.Schema({
    // what kind if data is this?
    type: {type: String, required: true},

    // user data
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    lastLogin: {type: Date, required: false},
    email: {type: String, required: false},

    // project data
    title: {type: String, required: false},
    description: {type: String, required: false},
    owner: {type: String, required: false},
    createdAt: {type: Date, required: false},
    
    // files data
    fileName: {type: String, required: false},
    fileType: {type: String, required: false},
    folder: {type: String, required: false},
    createdBy: {type: String, required: false},
});

const Result = mongoose.model("Result", results);
export default Result;
