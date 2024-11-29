import express from "express";
import TaskController from "../controllers/taskController.js";

const routes = express.Router();

routes.get("/", TaskController.listTasks);
routes.post("/", TaskController.createTask);
routes.put("/:id", TaskController.updateTask);
routes.delete("/:id", TaskController.deleteTask);

export default routes;
