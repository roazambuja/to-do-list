import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import * as api from "./../../services/api";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import TaskForm from ".";

vi.mock("../../services/api", () => ({
  createTask: vi.fn(),
}));

describe("TaskForm component", () => {
  let setTasks: React.Dispatch<React.SetStateAction<any[]>>;

  beforeEach(() => {
    setTasks = vi.fn();
    (api.createTask as unknown as ReturnType<typeof vi.fn>).mockClear();
  });

  it("should render the component with empty value", () => {
    render(<TaskForm setTasks={setTasks} />);
    const input = screen.getByTestId("input") as HTMLInputElement;
    expect(input.value).toBe("");
  });

  it("should update input value when typing", async () => {
    render(<TaskForm setTasks={setTasks} />);
    const input = screen.getByTestId("input") as HTMLInputElement;
    await userEvent.type(input, "Estudar Storybook");
    expect(input.value).toBe("Estudar Storybook");
  });

  it("should call createTask when submitting a new task", async () => {
    render(<TaskForm setTasks={setTasks} />);
    const input = screen.getByTestId("input");
    const button = screen.getByText("Adicionar");

    await userEvent.type(input, "Nova tarefa");
    await userEvent.click(button);

    await waitFor(() => {
      expect(api.createTask).toHaveBeenCalledWith({ title: "Nova tarefa", done: false });
    });
  });

  it("should not call createTask if input is empty", async () => {
    render(<TaskForm setTasks={setTasks} />);
    const button = screen.getByText("Adicionar");

    await userEvent.click(button);
    expect(api.createTask).not.toHaveBeenCalled();
  });

  it("should clear input after submitting a task", async () => {
    render(<TaskForm setTasks={setTasks} />);
    const input = screen.getByTestId("input") as HTMLInputElement;
    const button = screen.getByText("Adicionar");

    await userEvent.type(input, "Nova tarefa");
    await userEvent.click(button);

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });
});
