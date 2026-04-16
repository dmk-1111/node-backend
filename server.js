import express from 'express';
import "dotenv/config";
import router from './routes/api.route.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use('/api', router);

app.listen(port, (err) => {
    if (err) {
        console.error('Failed to start server:', err);
        return;
    }
  console.log(`Server is running on port ${port}`);
});

