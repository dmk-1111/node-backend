const express = require("express");
const { connectionDB } = require("./config/db");
const connection = connectionDB();

const server = express();
server.use(express.json()); // Middleware to parse JSON request bodies

const userModel = require("./model/user.model");

server.get("/", (req, res) => {
    res.send("Welcome to the User Management API");
});
server.get("/create-user", (req,res) => {
    //INsert a user into the users table
    const insertUserSql = "INSERT INTO users (name, email) VALUES (?, ?)";
    const userData = ["Alex San11", "alex.san11@example.com"];
    connection.query(insertUserSql, userData, (err, result) => {
        if (err) {
            console.log("Error inserting user:", err);
            return;
        }   
        res.send("Welcome to the User Management API");
        console.log("User inserted successfully, ID:", result.insertId);
    });
});

server.listen(3000, (err) => {
    if (err) {
        console.log("Error starting server:", err);
        return;
    }
    console.log("Server is running:http://localhost:3000");      

});
    // Create the users table if it doesn't exist`
    // const sql = userModel.createUserTable();

    // connection.query(sql, (err, result) => {
    // if (err) {
    //     console.log("Error creating table:", err);
    //     return;
    // }

    // console.log("Table created successfully");
    // });

    //INsert a user into the users table
    // const insertUserSql = "INSERT INTO users (name, email) VALUES (?, ?)";
    // const userData = ["Alex San", "alex.san@example.com"];
    // connection.query(insertUserSql, userData, (err, result) => {
    //     if (err) {
    //         console.log("Error inserting user:", err);
    //         return;
    //     }   
    //     console.log("User inserted successfully, ID:", result.insertId);
    // });


    // Update a user's email based on their ID
    // const updateSql = "UPDATE users SET email = ? WHERE id = ?";
    // const userValue = ["john.smith@example.com",2];
    // connection.query(updateSql, userValue, (err, result) => {
    //     if (err) {
    //         console.log("Error updating user:", err);
    //         return;
    //     }
    //     console.log("User updated successfully, affected rows:", result.affectedRows);
    // });


    // Delete a user based on their ID
    // const deleteSql = "DELETE FROM users WHERE id  = ?";
    // const userValue = [2];
    // connection.query(deleteSql, userValue, (err, result) => {
    //     if (err) {
    //         console.log("Error deleting user:", err);
    //         return;
    //     }
    //     console.log("User deleted successfully, affected rows:", result.affectedRows);
    // });

    // Search for a user based on their ID
    // const searchSql = "SELECT * FROM users WHERE id = ?";
    // const searchValue = [1];
    // connection.query(searchSql, searchValue, (err, results) => {
    //     if (err) {
    //         console.log("Error searching user:", err);
    //         return;
    //     }   
    //     console.log("Search results:", results[0].name);
    // });

