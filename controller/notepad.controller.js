const connection = require('../config/db');

const home = (req,res) => {
    res.status(200).json({ message: 'Welcome to the Express.js server!' });
}

const createNote = (req,res) => {
    const sql = `INSERT INTO notepad (title) VALUES ($1)`;
    const values = [req.body.title];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error creating note:', err);
            res.status(500).json({ error: 'Failed to create note' });
        } else {
            res.status(201).json({ message: 'Note created successfully' });
        }
    });

}

module.exports = {
    home,
    createNote
}