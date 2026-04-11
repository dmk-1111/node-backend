const express = require("express");
const server = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
server.use(express.json()); // Middleware to parse JSON request bodies

server.use("/api", require("./routes/api.route"));

server.listen(port, (err) => {
    if (err) {
        console.log("Error starting server:", err);
        return;
    }
    console.log("Server is running:http://localhost:" + port);  
});