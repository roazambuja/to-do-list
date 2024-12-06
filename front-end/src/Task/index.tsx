import "./task.css";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

interface ITask {
  title: string;
}

function Task({ title }: ITask) {
  return (
    <div className="task">
      <span>{title}</span>
      <div className="task__icons">
        <FaRegTrashAlt title="Excluir tarefa" />
        <FaCheck title="Concluir tarefa" />
      </div>
    </div>
  );
}

export default Task;
