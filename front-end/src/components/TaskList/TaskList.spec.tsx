import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { vi } from "vitest";
import TaskList from ".";
import { TaskProps } from "../Task";

const tasks: TaskProps[] = [
  { _id: "1", title: "Estudar Storybook", done: false },
  { _id: "2", title: "Estudar React", done: false },
  { _id: "3", title: "Estudar testes", done: true },
];

describe("TaskList component", () => {
  const setTasks = vi.fn();

  it("should render the component", () => {
    render(<TaskList setTasks={setTasks} tasks={tasks} />);
    const title = screen.getByText("Lista de tarefas");
    expect(title).toBeInTheDocument();
  });

  it("should render the component when list is empty", () => {
    render(<TaskList setTasks={setTasks} tasks={[]} />);
    const title = screen.getByText("Lista de tarefas");
    expect(title).toBeInTheDocument();
  });

  it("should render tasks", () => {
    render(<TaskList setTasks={setTasks} tasks={tasks} />);

    for (const task of tasks) {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    }
  });
});
