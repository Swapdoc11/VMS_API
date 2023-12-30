import task from "../model/task.js"

export const addToDoList = async(req,res,next) =>{
try {
    const result = await task(req.body).save()
    res.status(200).json({msg:"List Added Successfully..."})
} catch (error) {
  next(error)  
}
}

export const getToDoList = async(req,res,next) =>{
    try {
        const result = await task.find()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}


export const updateToDoList = async(req,res,next) =>{
    try {
        const result = await task.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({msg:"List Updated successfully..."})
    } catch (error) {
        next(error)
    }
}

export const deleteToDoList = async(req,res,next) =>{
    try {
        const result = await task.findByIdAndDelete({_id:req.params.id},req.body)
        res.status(200).json({msg:"List Deleted Successfully..."})
    } catch (error) {
        next(error)
    }
}