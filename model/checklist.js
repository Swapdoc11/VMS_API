import mongoose, { Schema } from "mongoose";

const createChecklistSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    vendor: { type: Schema.Types.ObjectId, ref: "Vendor" }, 
    checklist_name : {type:String},
    checklist: [{ type: String }],
    created_date: { type: Date, default: Date.now() },
    modified_date: { type: Date }
})

export default mongoose.model('createChecklist', createChecklistSchema)