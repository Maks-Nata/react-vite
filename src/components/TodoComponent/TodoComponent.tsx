import {ITodo} from "../../modeles/ITodo.ts";
import './todo.css'
interface TodoComponentProps {
    item: ITodo
}

const TodoComponent = ({item}: TodoComponentProps) => {
    return (
        <div>
            <h3 className={item.completed ? 'complete' : 'non-complete'}>{item.title}</h3>
        </div>
    );
};

export default TodoComponent;