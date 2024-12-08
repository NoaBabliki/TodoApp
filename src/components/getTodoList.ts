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