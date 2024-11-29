import express from "express";
import databaseConnection from "./config/dbConnect.js";
import dotenv from "dotenv";

dotenv.config();
databaseConnection();

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Lista de tarefas");
});

export default app;
