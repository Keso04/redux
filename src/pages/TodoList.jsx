import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoList = ({task, onDelete}) => {
    const {todoList} = useSelector((state) => state.todo)

    return <div>
       <h2>Todo List</h2>
       {todoList.map((item) => <div onDelete={onDelete} key={item}>
            {item}
            <button onClick={() => onDelete(task.id)}>Remove</button>
            <button>Done</button>
       </div>)}
       <Link to={'/create'}>To Create Page</Link>
    </div>
}

export default TodoList;