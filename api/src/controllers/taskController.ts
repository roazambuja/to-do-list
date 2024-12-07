import { Request, Response } from "express";
import task from "../models/Task";

class TaskController {
  static async listTasks(req: Request, res: Response): Promise<void> {
    try {
      const listTasks = await task.find({}).sort({ _id: -1 });
      res.status(200).json(listTasks);
    } catch (error: any) {
      res.status(500).json({ message: `${error.message} - falha ao listar tarefas` });
    }
  }

  static async createTask(req: Request, res: Response): Promise<void> {
    try {
      const newTask = await task.create(req.body);
      res.status(201).json({ message: "Tarefa cadastrada com sucesso!", task: newTask });
    } catch (error: any) {
      res.status(500).json({ message: `${error.message} - falha ao cadastrar tarefa` });
    }
  }

  static async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      let updatedTask = await task.findByIdAndUpdate(id, { done: true }, { new: true });
      if (updatedTask) {
        res.status(200).json({ message: "Tarefa concluída" });
      } else {
        res.status(404).json({
          message: "Não foi possível concluir a tarefa, o id informado não foi encontrado.",
        });
      }
    } catch (error: any) {
      res.status(500).json({ message: `${error.message} - falha na atualização` });
    }
  }

  // Método para excluir uma tarefa
  static async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      let deletedTask = await task.findByIdAndDelete(id);
      if (deletedTask) {
        res.status(200).json({ message: "Tarefa excluída com sucesso!" });
      } else {
        res.status(404).json({
          message: "Não foi possível excluir a tarefa, o id informado não foi encontrado.",
        });
      }
    } catch (error: any) {
      res.status(500).json({ message: `${error.message} - falha na exclusão` });
    }
  }
}

export default TaskController;
