import mongoose, { Schema } from "mongoose";
const userSchema =new mongoose.Schema({
    name:String,
    // username:String,
    password:String,
    emp_id: Number,
    email: String,
    designation: String,
    vendor:{type:Schema.Types.ObjectId, ref:'vendor'},
    access_right : {
                    add_checklist  :{type:Boolean, default:false},
                    admin          :{type:Boolean, default:false},
                    create_user    :{type:Boolean, default:false},
    }
    
})
export default mongoose.model('users',userSchema)