import React, {PureComponent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/todoSlice";

export default function Main() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const addTodo = () => dispatch(addTask());

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                   <Task
                   todo={todo}
                   />
                ))}
                
            </ul>
        </section>
    )
}

function Task(todo) {
    let status;
    if (todo.todo.complited){
        status = 'completed'
        
    } else {
        status = 'inProcess'
        console.log(todo)
    }
    return (
        <li  className={status}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.todo.text}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template"/>
        </li>
    )
}
