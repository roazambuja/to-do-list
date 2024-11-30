import "./task.css";
import { FaRegTrashAlt, FaCheck } from "react-icons/fa";

function Task() {
  return (
    <div className="task">
      <span>Tarefa</span>
      <div className="task__icons">
        <FaRegTrashAlt title="Excluir tarefa" />
        <FaCheck title="Concluir tarefa" />
      </div>
    </div>
  );
}

export default Task;
