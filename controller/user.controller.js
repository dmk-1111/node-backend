import { prisma } from "../lib/prisma.js";

export const welcome = (req, res) => {
    res.json({ message: "Hello from the API!" });
}
export const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.$queryRaw`
            INSERT INTO "User" ("email", "name")
            VALUES (${email}, ${name})
            RETURNING *;
        `;
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' + error });
    }
}

export const updateUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await prisma.$queryRaw`
            UPDATE "User"
            SET "email" = ${email}, "name" = ${name}
            WHERE "id" = ${req.params.id}
            RETURNING *;
        `;
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update user' + error });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await prisma.$queryRaw`
            DELETE FROM "User"
            WHERE "id" = ${req.params.id}
            RETURNING *;
        `;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user' + error });
    }
}
  
export const searchUsers = async (req, res) => {
    const search = req.query.keyword;
    try {
        const user = await prisma.$queryRaw`
            SELECT * FROM "User"
            WHERE "name" ILIKE ${`%${search}%`} OR "email" ILIKE ${`%${search}%`};
        `;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search users' + error });
    }
}