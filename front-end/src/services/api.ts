import { TaskProps } from "../Task";

export async function getTasks() {
  const response = await fetch("http://localhost:3000/tasks", { method: "GET" });
  return await response.json();
}

export async function createTask(task: TaskProps) {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
}
