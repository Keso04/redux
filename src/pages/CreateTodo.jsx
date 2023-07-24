import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todo/todo.actions";
import { Link } from "react-router-dom";

const CreateTodo = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState([
        {id: 1, text: "go shopping"}
    ]);

    const onDelete = (valueId) => {
        const updatedTasks = value.filter((val) => val.id !== valueId);
        
        setValue(updatedTasks);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(addTodoAction(value));
        setValue('');
    }

    return <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button>Submit</button>

        <Link to={'/'}>To List</Link>
    </form>
}

export default CreateTodo;