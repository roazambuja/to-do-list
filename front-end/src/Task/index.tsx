import { deleteTask } from "../services/api";
import "./task.css";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

interface ITask {
  task: TaskProps;
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}
export interface TaskProps {
  _id?: string;
  title: string;
  done: boolean;
}

function Task({ task, setTasks }: ITask) {
  const handleDelete = async () => {
    try {
      await deleteTask(task._id!);
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = () => {
    // setTasks((prevTasks) => {
    //   const updatedTasks = prevTasks.map((t) => (t.id === task.id ? { ...t, done: true } : t));
    //   const completedTask = updatedTasks.find((t) => t.id === task.id);
    //   const remainingTasks = updatedTasks.filter((t) => t.id !== task.id);
    //   return [...remainingTasks, completedTask!];
    // });
  };

  return (
    <div className={`task ${task.done ? "done" : ""}`}>
      <span>{task.title}</span>
      {!task.done && (
        <div className="task__icons">
          <FaRegTrashAlt title="Excluir tarefa" onClick={handleDelete} />
          <FaCheck title="Concluir tarefa" onClick={handleUpdate} />
        </div>
      )}
    </div>
  );
}

export default Task;
