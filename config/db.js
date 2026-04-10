const mysql = require("mysql2");
require("dotenv").config();

const connectionDB = function () {
    return mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
};

module.exports = { connectionDB };