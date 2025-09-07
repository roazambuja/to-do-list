import { useEffect, useState } from "react";
import "./App.css";
import { TaskProps } from "./components/Task";
import { getTasks } from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Carregando...");

  const getTaskList = async () => {
    try {
      let response = await getTasks();
      setTasks(response);
    } catch (error) {
      setHasError(true);
      setMessage("Ocorreu um erro ao carregar as tarefas.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return isLoading || hasError ? (
    <p>{message}</p>
  ) : (
    <main>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

export default App;
