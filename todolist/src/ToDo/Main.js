import React, {PureComponent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, changeStatus, changeStatusOfAll } from "../store/todoSlice";

let status = true;
export default function Main() {
    const todos = useSelector(state => state.todos.todos);
    const sort = useSelector(state => state.todos.sort);
    const dispatch = useDispatch();

    const completeAll = () => {
        dispatch(changeStatusOfAll({status}))
        status = !status
    }

    let todosFilter;
    if (sort.sortOn) {
        if (sort.active){
            todosFilter = todos.filter(p => p.complited === false)
        } 
        if (!sort.active){
            todosFilter = todos.filter(p => p.complited === true)
        } 
    } else {
        todosFilter = todos;
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all" onClick={completeAll}>Mark all as complete</label>
            <ul className="todo-list">
                {todosFilter.map((todo, index) => (
                   <Task
                   todo={todo}
                   index={index}
                   id={todo.id}
                   />
                ))}
                
            </ul>
        </section>
    )
}

function Task(todo) {
    const dispatch = useDispatch();
    let id = todo.id;
    const remove = () => dispatch(deleteTask({id}))
    const onComplete = () => dispatch(changeStatus({id}))

    let status;
    let cheked;
    let editing;

    if (todo.todo.complited){
        status = 'completed'
        cheked = true
    } else {
        status = 'inProcess' 
        cheked = false      
    }

    return (
        <li  className={status +' '+ editing} >
            <div className="view">
                <input className="toggle" type="checkbox" checked={cheked} onChange={onComplete}/>
                <label>{todo.todo.text}</label>
                <button className="destroy" onClick={remove}></button>
            </div>
            <input className="edit" defaultValue={todo.todo.text} />
        </li>
    )
}
