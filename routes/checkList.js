import express  from "express";
import { addCheckList, deleteCheckList,  getCheckListById,  getCheckListByVendor, updateCheckList } from "../controller/checklist.js";

const router = express.Router();
router.post('/addCheckList',addCheckList)
router.get('/getCheckListById/:id',getCheckListById)
router.get('/getCheckListByVendor/:vendor',getCheckListByVendor)
router.put('/updateCheckList/:id',updateCheckList)
router.delete('/deleteCheckList/:id',deleteCheckList)

export default router;