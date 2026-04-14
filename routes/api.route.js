import express from 'express';
import { createUser,welcome } from '../controller/user.controller.js';

const router = express.Router();

router.get("/", (req, res) => welcome(req,res));
router.post("/users", (req,res) => createUser(req,res));

export default router;