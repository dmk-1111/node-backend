import { prisma } from "../lib/prisma.js";

export const createHero = async (req, res) => {
    try {
        const { name } = req.body;
        const image = req.file ? req.file.filename : null;
        const hero = await prisma.$queryRaw`
            INSERT INTO "Hero" ("name", "image")
            VALUES (${name}, ${image})
            RETURNING *;
        `;
        res.status(201).json(hero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateHero = async (req, res) => {
    try {
        const { name } = req.body;
        const image = req.file ? req.file.filename : null;
        const hero = await prisma.$queryRaw`
            UPDATE "Hero"
            SET "name" = ${name}, "image" = ${image}
            WHERE "id" = 1
            RETURNING *;
        `;
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const showHero = async (req, res) => {
    try {
        const hero = await prisma.$queryRaw`
            SELECT * FROM "Hero" WHERE "id" = 1 limit 1;
        `;
        res.status(200).json(hero[0] || null);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

