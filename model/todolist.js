import mongoose from "mongoose";

const todolistSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    vendor: { type: Schema.Types.ObjectId, ref: "Vendor" },
    todo: {
        description: String,
        status: String,
        comment: String
    }
})

export default mongoose.model('todolist', todolistSchema)