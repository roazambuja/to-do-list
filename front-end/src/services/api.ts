import { TaskProps } from "../components/Task";

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

export async function deleteTask(taskId: string) {
  const response = await fetch(`http://localhost:3000/tasks/${taskId}`, { method: "DELETE" });
  return await response.json();
}

export async function finishTask(taskId: string) {
  const response = await fetch(`http://localhost:3000/tasks/${taskId}`, { method: "PUT" });
  return await response.json();
}
