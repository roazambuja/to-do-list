import { useState } from "react";
import "./form.css";
import { createTask } from "../../services/api";
import { TaskProps } from "../../Task";

interface ITaskForm {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

/**
 * Componente responsável por exibir o formulário de criação de novas tarefas.
 * Permite ao usuário digitar um título, enviar o formulário e adicionar a nova tarefa à lista,
 * atualizando o estado global de tarefas da aplicação.
 */
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
        data-testid="input"
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
