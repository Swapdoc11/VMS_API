import express  from "express";
import { addCheckList, getCheckList } from "../../controller/checklist.js";

const router = express.Router();
router.post('/addCheckList',addCheckList)
router.post('/getCheckList',getCheckList)

export default router;