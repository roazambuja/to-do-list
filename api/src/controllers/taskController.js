import task from "../models/Task.js";

class TaskController {
  static async listTasks(req, res) {
    const listTasks = await task.find({});
    res.status(200).json(listTasks);
  }

  static async createTask(req, res) {
    try {
      console.log(req.body);
      const newTask = await task.create(req.body);
      res.status(201).json({ message: "Tarefa cadastrada com sucesso!", task: newTask });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar tarefa` });
    }
  }
}

export default TaskController;
