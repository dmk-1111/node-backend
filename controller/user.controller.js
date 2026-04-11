const { connectionDB } = require("../config/db");
const connection = connectionDB();
const userModel = require("../model/user.model");

const createUserTable = (req,res) => {
    const sql = userModel.createUserTable();
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("Error creating table:", err);
            res.status(500).json({ message: "Error creating table : " + err });
            return;
        }   
        res.status(201).json({ message: "Table created successfully" });
    });
}

const home = (req,res) => {
    res.status(200).json({ message: "Welcome to the User Management API" });
}

const createUser = (req,res) => {
    const insertUserSql = "INSERT INTO users (name, email) VALUES (?, ?)";
    // Static values for testing
    //const userData = ["Alex San14", "alex.san14@example.com"];

    const userData = [req.body.name, req.body.email]; // Get values from request body
    connection.query(insertUserSql, userData, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error inserting user : " + err });
            return;
        }   
        res.status(201).json({ message: "User inserted successfully", id: result.insertId });
    });
}

const updateUser = (req,res) => {
    const updateSql = "UPDATE users SET name = ? , email = ? WHERE id = ?";
    // Static values for testing
    //const userValue = ["Lisa", "lisa@example.com", 1];
    const userData = [req.body.name, req.body.email, req.params.id]; // Get values from request body and path variable
    connection.query(updateSql, userData, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Error updating user : " + err });
            return;
        } 
        if(result.affectedRows === 0) {
            res.status(404).json({ message: "No user found with the specified ID." });
            return;
        }  
        res.json({ message: "User updated successfully"});
    });

}
const deleteUser = (req,res) => {
    const delSQL = "DELETE FROM users WHERE id = ?";
    const id = req.query.id; // Get user ID from query parameters
    connection.query(delSQL, id, (err, result) => {
        if (err) {
            res.status(500).send("Error deleting user");
            return;
        }        
        if(result.affectedRows === 0) {
            res.status(404).json({ message: "No user found with the specified ID." });
            return;
        }
        res.status(200).json({ message: "User deleted successfully" });
    });
}

const searchUser = (req,res) => {
    const searchSql = "SELECT * FROM users WHERE id = ?";
    const searchValue = req.query.id; // Get user ID from query parameters
    connection.query(searchSql, searchValue, (err, results) => {
        if(err) {
            res.status(500).json({ message: "Error searching user : " + err });
            return;
        }
        if(results.length === 0) {
            res.status(404).json({ message: "No user found with the specified ID." });
            return;
        }
        res.status(200).json(results[0]);
        console.log("Search results:", results[0].name);
    });
}

module.exports = { home,createUser, updateUser, deleteUser, searchUser,createUserTable };
