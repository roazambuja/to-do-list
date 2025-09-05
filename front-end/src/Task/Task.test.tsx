import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Task, { TaskProps } from ".";
import * as api from "../services/api";
import { vi } from "vitest";

describe("Task component", () => {
  const mockDeleteTask = vi.spyOn(api, "deleteTask").mockResolvedValue(undefined);
  const mockFinishTask = vi.spyOn(api, "finishTask").mockResolvedValue(undefined);

  const task: TaskProps = {
    _id: "123",
    title: "Tarefa de exemplo",
    done: false,
  };

  const finishedTask: TaskProps = {
    _id: "124",
    title: "Tarefa de exemplo",
    done: true,
  };

  const deleteText = "Excluir tarefa";
  const finishText = "Concluir tarefa";

  const setTasks = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the task", () => {
    render(<Task task={task} setTasks={setTasks} />);
    expect(screen.getByText(task.title)).toBeInTheDocument();
    expect(screen.getByTitle(deleteText)).toBeInTheDocument();
    expect(screen.getByTitle(finishText)).toBeInTheDocument();
  });

  it("should call deleteTask when clicking delete button", async () => {
    render(<Task task={task} setTasks={setTasks} />);
    const deleteIcon = screen.getByTitle(deleteText);

    await userEvent.click(deleteIcon);

    expect(mockDeleteTask).toHaveBeenCalledWith("123");
    expect(setTasks).toHaveBeenCalled();
  });

  it("should call finishTask when clicking finish icon", async () => {
    render(<Task task={task} setTasks={setTasks} />);
    const finishIcon = screen.getByTitle(finishText);

    await userEvent.click(finishIcon);

    expect(mockFinishTask).toHaveBeenCalledWith("123");
    expect(setTasks).toHaveBeenCalled();
  });

  describe("when task is unfinished", () => {
    it("should show icons", () => {
      render(<Task task={task} setTasks={setTasks} />);
      expect(screen.queryByTitle(deleteText)).toBeInTheDocument();
      expect(screen.queryByTitle(finishText)).toBeInTheDocument();
    });

    it("should not have done class", () => {
      render(<Task task={task} setTasks={setTasks} />);
      const taskElement = screen.getByText(task.title).parentElement;
      expect(taskElement).not.toHaveClass("done");
    });
  });

  describe("when task is finished", () => {
    it("should not show icons", () => {
      render(<Task task={finishedTask} setTasks={setTasks} />);
      expect(screen.queryByTitle(deleteText)).not.toBeInTheDocument();
      expect(screen.queryByTitle(finishText)).not.toBeInTheDocument();
    });

    it("should have done class", () => {
      render(<Task task={finishedTask} setTasks={setTasks} />);
      const taskElement = screen.getByText(task.title).parentElement;
      expect(taskElement).toHaveClass("done");
    });
  });
});
