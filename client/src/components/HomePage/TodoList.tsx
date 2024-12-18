import { useEffect, useState } from "react";
import Todo from "./Todo";
import { fetchTasks} from "../getTodoList";
import { TodoType } from "../Types";
import './TodoList.css';


const TodoList: React.FC = () => {

    const [TodoList, setTodoList] = useState<TodoType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    
    useEffect(() => {
        setIsLoading(true);
       fetchTasks().then(tasks => {
        if (tasks !== undefined) {
            setTodoList(tasks);
            setIsLoading(false);
        }
       }).catch(e => {
        throw e;
       });
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