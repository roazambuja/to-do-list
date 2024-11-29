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

  static async updateTask(req, res) {
    try {
      const id = req.params.id;
      await task.findByIdAndUpdate(id, { done: true }, { new: true });
      res.status(200).json({ message: "Tarefa concluída" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async deleteTask(req, res) {
    try {
      const id = req.params.id;
      await task.findByIdAndDelete(id);
      res.status(200).json({ message: "Tarefa excluída com sucesso!" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}

export default TaskController;
