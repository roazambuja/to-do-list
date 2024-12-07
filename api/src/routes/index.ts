import tasks from "./taskRoutes";
import { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.route("/").get((req: Request, res: Response): void => {
    res.status(200).send("To-do list");
  });

  app.use("/tasks", tasks);
};

export default routes;
