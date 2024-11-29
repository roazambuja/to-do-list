import express from "express";
import TaskController from "../controllers/taskController.js";

const routes = express.Router();

routes.get("/", TaskController.listTasks);
routes.post("/", TaskController.createTask);

export default routes;
