import express from 'express'
import { getUsers, login, register } from '../controller/auth.js';

const router =express.Router();
router.post('/login',login)
router.post('/register',register)
router.get('/getUsers',getUsers)
// router.post('/signin',signin)

export default router;