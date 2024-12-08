import { useNavigate } from "react-router-dom";
import { TodoType } from "../Types";
import './Todo.css';


type Props = {
    todo: TodoType;
}

const Todo: React.FC<Props> = ({todo}: Props) => {

    const navigate = useNavigate();

    const goToAbout = () => {
      navigate(`/details/${todo.id}`);
    };

    return (
        <div className="todo-item">
            <span className="todo-title">{todo.title}</span>
            <button className="todo-button" onClick={() => {goToAbout()}}>More Details</button>
        </div>
    )
}

export default Todo;