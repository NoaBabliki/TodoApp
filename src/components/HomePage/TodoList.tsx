import { useEffect, useState } from "react";
import Todo from "./Todo";
import { mockFetchTodos } from "../getTodoList";
import { TodoType } from "../Types";
import './TodoList.css';


const TodoList: React.FC = () => {

    const [TodoList, setTodoList] = useState<TodoType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
        mockFetchTodos().then((res) => {
            setTodoList(res);
            console.log(TodoList);
            setIsLoading(false);
        }).catch(e => {
            throw e;
        })
    }, [])

    return (
        <div className="list-container">
            {isLoading ? 
            <span>loading...</span> :
            TodoList.map((todoItem) => 
            <div key={todoItem.id}>
             <Todo todo={todoItem}/>
            </div>
            )}
        </div>
    )
}

export default TodoList;