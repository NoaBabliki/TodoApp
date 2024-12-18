import { TodoType } from "./Types";

export const mockFetchTodos = (): Promise<TodoType[]> => 
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve([
{ id: 1, title: "Learn React Router", description: "Understand the basics of React Router." },
{ id: 2, title: "Handle Promises", description: "Practice using JavaScript promises effectively." },
{ id: 3, title: "Build Frontend Apps", description: "Combine your React skills to build apps." },
    ]);
    }, 1000); // Simulates network delay
});


export const getTodoList = async (): Promise<TodoType[]> => {
    const response = await fetch('http://localhost:3000/tasks');
    return await response.json();
}

export const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        headers: {
          "Cache-Control": "no-cache"
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: TodoType[] = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };