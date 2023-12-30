import createChecklist from "../model/checklist.js"

export const addCheckList = async(req,res,next) =>{
    try {
      const result = await createChecklist(req.body).save()  
      res.status(200).json({msg:'Checklist Added Successfully...'})
    } catch (error) {
        next(error)
    }
}
export const getCheckListById = async(req,res,next) =>{
    try {
      const result = await createChecklist.findById({_id : req.params.id})  
      res.status(200).json(result)
    } catch (error) {
        
    }
}
export const getCheckListByVendor = async(req,res,next) =>{
    try {
      const result = await createChecklist.find({vendor : req.params.vendor})  
      res.status(200).json(result)
    } catch (error) {
        
    }
}
export const updateCheckList = async(req,res,next) =>{
    try {
      const result = await createChecklist.findByIdAndUpdate({_id:req.params.id},{ $set: { modified_date: Date.now()}},req.body, { new: true })  
      res.status(200).json(result)
    } catch (error) {
        
    }
}
export const deleteCheckList = async(req,res,next) =>{
    try {
      const result = await createChecklist.findByIdAndDelete({_id:req.params.id},req.body)  
      res.status(200).json({msg:'Checklist Deleted Successfully...'})
    } catch (error) {
        
    }
}