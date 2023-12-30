import task from "../model/task.js"

export const addTask = async(req,res,next) =>{
try {
    const result = await task(req.body).save()
    res.status(200).json({msg:"Task Added Successfully..."})
} catch (error) {
  next(error)  
}
}

export const getTask = async(req,res,next) =>{
    try {
        const result = await task.find()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}
export const getTaskById = async(req,res,next) =>{
    try {
       const result = await task.findById({_id:req.params.id}) 
       res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

export const updateTask = async(req,res,next) =>{
    try {
        const result = await task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({msg:"Task Updated successfully..."})
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async(req,res,next) =>{
    try {
        const result = await task.findByIdAndDelete({_id:req.params.id},req.body)
        res.status(200).json({msg:"Task Deleted Successfully..."})
    } catch (error) {
        next(error)
    }
}