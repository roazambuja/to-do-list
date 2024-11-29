import express from "express";
import databaseConnection from "./config/dbConnect.js";
import dotenv from "dotenv";
import routes from "./routes/index.js";

dotenv.config();
databaseConnection();

const app = express();
app.use(express.json());
routes(app);

export default app;
