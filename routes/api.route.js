import express from 'express';
import { createUser,welcome,updateUser,deleteUser,searchUsers } from '../controller/user.controller.js';
import { createHero,showHero,updateHero } from '../controller/hero.controller.js';
import { createProfile, updateProfile,showProfile } from '../controller/profile.controller.js';
import multer from 'multer';
import path from "path";

// Reusable storage creator
const createStorage = (folderPath) => {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folderPath);
        },
        filename: (req, file, cb) => {
            const uniqueName = Date.now() + "-" + file.originalname;
            cb(null, uniqueName);
        }
    });
};

// Create upload instances
export const uploadHero = multer({
    storage: createStorage("public/uploads/heroes/")
});

export const uploadProfile = multer({
    storage: createStorage("public/uploads/profiles/")
});
const router = express.Router();

// User routes
router.get("/", (req, res) => welcome(req,res));
router.post("/users", (req,res) => createUser(req,res));
router.put("/users/:id", (req,res) => updateUser(req,res));
router.delete("/users/:id", (req,res) => deleteUser(req,res));
router.get("/users", (req,res) => searchUsers(req,res));

// Hero routes
router.post("/heroes", uploadHero.single("image"),(req,res) => createHero(req,res));
router.put("/heroes-update", uploadHero.single("image"),(req,res) => updateHero(req,res));
router.get("/heroes", (req,res) => showHero(req,res));

// Profile routes
router.post("/profiles", uploadProfile.single("image"),(req,res) => createProfile(req,res));
router.put("/profiles-update", uploadProfile.single("image"),(req,res) => updateProfile(req,res));
router.get("/profiles", (req,res) => showProfile(req,res));

router.get("/image/:folder/:filename", (req, res) => {
  const { folder, filename } = req.params;

  const filePath = path.join(process.cwd(), "public/uploads/", folder, filename);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ message: "Image not found" });
    }
  });
});
export default router;