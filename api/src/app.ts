import express from "express";
import databaseConnection from "./config/dbConnect";
import dotenv from "dotenv";
import routes from "./routes/index";
import cors from "cors";

dotenv.config();
databaseConnection();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
routes(app);

export default app;
