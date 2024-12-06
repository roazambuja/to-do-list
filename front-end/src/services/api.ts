export async function getTasks() {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "GET",
  });
  console.log(response);
}
