import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";
import * as api from "./services/api";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  const mockTasks = [
    { _id: "1", title: "Tarefa 1", done: false },
    { _id: "2", title: "Tarefa 2", done: true },
  ];

  it("should render loading message", () => {
    render(<App />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("should show error message when getTasks fails", async () => {
    vi.spyOn(api, "getTasks").mockRejectedValueOnce(new Error());

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Ocorreu um erro ao carregar as tarefas.")).toBeInTheDocument();
    });
  });

  it("should render tasks after loading", async () => {
    vi.spyOn(api, "getTasks").mockResolvedValueOnce(mockTasks);

    render(<App />);

    for (const task of mockTasks) {
      await waitFor(() => {
        expect(screen.getByText(task.title)).toBeInTheDocument();
      });
    }
  });

  it("should create a new task and add it to the list", async () => {
    const mockNewTask = { _id: "3", title: "Nova tarefa", done: false };

    vi.spyOn(api, "getTasks").mockResolvedValueOnce(mockTasks);
    vi.spyOn(api, "createTask").mockResolvedValueOnce({ task: mockNewTask });

    render(<App />);

    const input = await screen.findByPlaceholderText("Nova Tarefa");
    const button = screen.getByText("Adicionar");

    await userEvent.type(input, "Nova tarefa");
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(mockNewTask.title)).toBeInTheDocument();
      expect(input).toHaveValue("");
    });
  });
});
