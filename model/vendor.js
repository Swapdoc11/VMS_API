import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    vendor_name: String,
    email: String,
})

export default mongoose.model('vendors',vendorSchema)