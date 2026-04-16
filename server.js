import express from "express";
import "dotenv/config";
import router from "./routes/api.route.js";
import cors from "cors";
// import { fileURLToPath } from "url";
// import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});