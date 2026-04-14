import express from 'express';
import { createUser,welcome,updateUser,deleteUser,searchUsers } from '../controller/user.controller.js';

const router = express.Router();

router.get("/", (req, res) => welcome(req,res));
router.post("/users", (req,res) => createUser(req,res));
router.put("/users/:id", (req,res) => updateUser(req,res));
router.delete("/users/:id", (req,res) => deleteUser(req,res));
router.get("/users", (req,res) => searchUsers(req,res));
export default router;