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

const updateNote = (req,res) => {
    const sql = `UPDATE notepad SET title = $1 WHERE id = $2`;
    const values = [req.body.title, req.params.id];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error updating note:', err);
            res.status(500).json({ error: 'Failed to update note' });
        } else {
            res.status(200).json({ message: 'Note updated successfully' });
        }
    });
}

const deleteNote = (req,res) => {
    const sql = `DELETE FROM notepad WHERE id = $1`;
    const values = [req.params.id];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error deleting note:', err);
            res.status(500).json({ error: 'Failed to delete note' });
        } else {
            res.status(200).json({ message: 'Note deleted successfully' });
        }
    });
}

const search = (req,res) => {
    const sql = `SELECT * FROM notepad WHERE id = $1`;
    const values = [req.query.id];
    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error searching notes:', err);
            res.status(500).json({ error: 'Failed to search notes' });
        }else if (result.rows.length === 0) {
            res.status(404).json({ message: 'No notes found matching the search query' });
        } 
        else {
            res.status(200).json({ notes: result.rows });
        }
    });
}



module.exports = {
    home,
    createNote,
    updateNote,
    deleteNote,
    search
}