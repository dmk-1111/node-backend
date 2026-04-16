import { prisma } from "../lib/prisma.js";

export const createHero = async (req, res) => {
    try {
        const { name, title } = req.body;
        const image = req.file ? req.file.filename : null;
        const hero = await prisma.$queryRaw`
            INSERT INTO "Hero" ("name", "title","image")
            VALUES (${name}, ${title}, ${image})
            RETURNING *;
        `;
        res.status(201).json(hero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const showHero = async (req, res) => {
    try {        
        const hero = await prisma.$queryRaw`
            SELECT * FROM "Hero" WHERE "id" = 1;
        `;
        res.status(201).json(hero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

