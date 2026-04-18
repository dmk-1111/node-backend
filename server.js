import express from "express";
import "dotenv/config";
import router from "./routes/api.route.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});