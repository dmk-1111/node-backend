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