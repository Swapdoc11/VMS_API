import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task_name : {type:String},
    tasklist : {type:String},
    task_status : {type:String, default:"Pending"},
    created_date : {type:Date ,default: Date.now()}
})

export default mongoose.model('task',taskSchema)