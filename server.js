require('dotenv').config();
const express = require('express');
const server = express();
server.use(express.json());

server.use('/api', require('./routes/api.route'));

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

// async function queryDatabase() {
//   const createNotepadTable = `
//     CREATE TABLE IF NOT EXISTS notepad (
//       id SERIAL PRIMARY KEY,
//       title VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;
//   await pool.query(createNotepadTable,(err, result) => {
//     if (err) {
//       console.error('Error creating notepad table:', err);
//     }
//     console.log('Notepad table created.');
//   });
// }
// queryDatabase();
