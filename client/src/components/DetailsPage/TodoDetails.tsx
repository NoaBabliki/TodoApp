import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TodoType } from "../Types";
import { fetchTasks } from "../getTodoList";
import './TodoDetailes.css'


const TodoDetails: React.FC = () => {

    const [currentTodo, setCuttentTodo] = useState<TodoType>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetchTasks().then((res) => {
            const todo = res?.find((todoItem: TodoType) => todoItem.id.toString() === id);
            setCuttentTodo(todo);
            setIsLoading(false)
        }).catch(e => {
            throw e;
        })
    }, [])

    return (
        <div className="page-container">
        {isLoading ? <span>loading...</span>: 
        <div>
            <h1 className="page-title">{currentTodo?.title}</h1>
            <p className="page-description">{currentTodo?.description}</p>
        </div>
        }
        <button className="page-button" onClick={() => {navigate(`/`)}}>Back to list</button>
        </div>
    )
}

export default TodoDetails;