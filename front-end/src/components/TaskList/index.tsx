import "./list.css";
import Task, { TaskProps } from "../Task";

interface ITaskList {
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  tasks: TaskProps[];
}

function TaskList({ tasks, setTasks }: ITaskList) {
  return (
    <div className="list">
      <h1>Lista de tarefas</h1>
      {tasks.map((task, key) => {
        return <Task task={task} key={key} setTasks={setTasks} />;
      })}
    </div>
  );
}

export default TaskList;
