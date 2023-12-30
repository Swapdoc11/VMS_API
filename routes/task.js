import express from 'express'
import {addTask, deleteTask,  getTask, getTaskById, updateTask} from "../controller/task.js";
const router = express.Router();

router.post('/addTask',addTask)
router.get('/getTask',getTask)
router.get('/getTakById/:id',getTaskById)
router.put('/updateTask',updateTask)
router.delete('/deleteTask',deleteTask)

export default router;