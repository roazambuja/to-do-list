import tasks from "./taskRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("To-do list"));

  app.use("/tasks", tasks);
};

export default routes;
