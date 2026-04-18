import { prisma } from "../lib/prisma.js";

export const createProfile = async (req, res) => {
    try {
        const { name } = req.body;
        const image = req.file ? req.file.filename : null;
        const profile = await prisma.$queryRaw`
            INSERT INTO "Profile" ("name", "profile")
            VALUES (${name}, ${image})
            RETURNING *;
        `;
        res.status(201).json(profile);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { name } = req.body;
        const image = req.file ? req.file.filename : null;
        const profile = await prisma.$queryRaw`
            UPDATE "Profile"
            SET "name" = ${name}, "profile" = ${image}
            WHERE "id" = 1
            RETURNING *;
        `;
        res.status(200).json(profile);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const showProfile = async (req, res) => {
    try {
        const profile = await prisma.$queryRaw`
            SELECT * FROM "Profile" WHERE "id" = 1 limit 1;
        `;
        res.status(200).json(profile[0] || null);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};