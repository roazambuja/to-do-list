import "./list.css";
import Task, { TaskProps } from "../Task";

interface ITaskList {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  tasks: TaskProps[];
}

/**
 * O TaskList é responsável por exibir a lista de tarefas,
 * recebendo como props a lista e a função de atualização.
 * A renderização de cada item é delegada ao componente Task.
 */
function TaskList({ tasks, setTasks }: ITaskList) {
  return (
    <div className="list">
      <h1 className="title">Lista de tarefas</h1>
      {tasks.map((task, key) => {
        return <Task task={task} key={key} setTasks={setTasks} />;
      })}
    </div>
  );
}

export default TaskList;
