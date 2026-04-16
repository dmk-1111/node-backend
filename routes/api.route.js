import express from 'express';
import { createUser,welcome,updateUser,deleteUser,searchUsers } from '../controller/user.controller.js';
import { createHero,showHero } from '../controller/hero.controller.js';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/heroes/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });
const router = express.Router();

// User routes
router.get("/", (req, res) => welcome(req,res));
router.post("/users", (req,res) => createUser(req,res));
router.put("/users/:id", (req,res) => updateUser(req,res));
router.delete("/users/:id", (req,res) => deleteUser(req,res));
router.get("/users", (req,res) => searchUsers(req,res));

// Hero routes
router.post("/heroes", upload.single("image"),(req,res) => createHero(req,res));
router.get("/heroes", (req,res) => showHero(req,res));


export default router;