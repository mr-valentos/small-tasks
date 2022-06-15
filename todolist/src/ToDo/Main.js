import React, {PureComponent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeStatus, changeStatusOfAll } from "../store/todoSlice";

let status = true;
export default function Main() {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();
    const completeAll = () => {
        dispatch(changeStatusOfAll({status}))
        status = !status
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all" onClick={completeAll}>Mark all as complete</label>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                   <Task
                   todo={todo}
                   index={index}
                   />
                ))}
                
            </ul>
        </section>
    )
}

function Task(todo) {
    const dispatch = useDispatch();
    let index = todo.index;
    const remove = () => dispatch(deleteTask({index}))
    const onComplete = () => dispatch(changeStatus({index}))
    let status;
    let cheked;

    if (todo.todo.complited){
        status = 'completed'
        cheked = true
    } else {
        status = 'inProcess' 
        cheked = false      
    }

    return (
        <li  className={status}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={cheked} onChange={onComplete}/>
                <label>{todo.todo.text}</label>
                <button className="destroy" onClick={remove}></button>
            </div>
            <input className="edit" defaultValue="Create a TodoMVC template"/>
        </li>
    )
}
