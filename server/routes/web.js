import express from 'express';
import { getUsers, updateUsers } from '../controllers/user.js';


const router = express.Router();

router.get("/users", getUsers);
router.put("/users", updateUsers)



export default router;