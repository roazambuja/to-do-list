import { useState } from "react";
import "./form.css";
import { createTask } from "../../services/api";
import { TaskProps } from "../../Task";

interface ITaskForm {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

function TaskForm({ setTasks }: ITaskForm) {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTask != "") {
      try {
        let response = await createTask({ title: newTask, done: false });
        const { task } = response;
        setTasks((prevTasks) => [task, ...prevTasks]);
      } catch (error) {
        console.log(error);
      }
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nova Tarefa"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
