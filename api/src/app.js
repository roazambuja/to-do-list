import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Lista de tarefas");
});

export default app;
