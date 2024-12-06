import { useEffect, useState } from "react";
import "./App.css";
import Task from "./Task";
// import { getTasks } from "./services/api";

function App() {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([
    "Estudar React",
    "Escrever texto do TCC",
    "Fazer apresentação",
  ]);

  // useEffect(() => {
  //   getTasks();
  // }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask != "") {
      tasks.push(newTask);
      setNewTask("");
    }
  };

  return (
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
          return <Task title={task} key={key} />;
        })}
      </div>
    </main>
  );
}

export default App;
