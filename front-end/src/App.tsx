import { useEffect, useState } from "react";
import "./App.css";
import Task, { TaskProps } from "./Task";
import { createTask, getTasks } from "./services/api";

function App() {
  const [newTask, setNewTask] = useState<string>("");
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

  return isLoading || hasError ? (
    <p>{message}</p>
  ) : (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nova Tarefa"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <div className="list">
        <h1>Lista de tarefas</h1>
        {tasks.map((task, key) => {
          return <Task task={task} key={key} setTasks={setTasks} />;
        })}
      </div>
    </main>
  );
}

export default App;
