import express  from "express";
import { addToDoList, deleteToDoList, getToDoList, updateToDoList } from "../controller/todolist.js";
const router = express.Router();
router.post('/addtodolist',addToDoList)
router.get('/gettodolist',getToDoList)
router.put('/updatetodolist/:id',updateToDoList)
router.delete('/deletetodolist/:id',deleteToDoList)

export default router;