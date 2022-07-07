import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTask, changeStatus, changeStatusOfAll, editTask } from "../store/todoSlice";


let status = true;
export default function Main(test) {
    let params = useParams();
    let todosFilter = test.todos;
    const sort = useSelector(state => state.todos.sort);
    const dispatch = useDispatch();
    

    const completeAll = () => {
        dispatch(changeStatusOfAll({status}))
        status = !status
    }

    if (params.id) {
        todosFilter = todosFilter.filter(p => p.id == params.id)
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all" onClick={completeAll}>Mark all as complete</label>
            <ul className="todo-list">
                {todosFilter.map((todo, index) => (
                   <Task key={todo.id}
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
    const [editing, setEdit] = useState('')
    const dispatch = useDispatch();
    let id = todo.id;
    const remove = () => dispatch(deleteTask({id}))
    const onComplete = () => dispatch(changeStatus({id}))
    

    const postTodos = useSelector(state => state.todos.todos);
    useEffect(() => {

        fetch('http://localhost:3001/',{method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(postTodos)})
        .then(res => res.json())
        .then(list => console.log(list))
        .catch(err => console.error(err))
        return () => (fetch('http://localhost:3001/',{method: 'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify(postTodos)}))
    },[postTodos])

    const edit = (e) => {
        let text = e.target.value;
        dispatch(editTask({id, text}));
    }

    const editCancel = (e) => {
        if (e.key === 'Enter'){
            setEdit('')
        }
    }

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
        <li className={status +' '+ editing} >
            <div className="view">
                <input className="toggle" type="checkbox" checked={cheked} onChange={onComplete}/>
                <label onDoubleClick={() => setEdit('editing')}>{todo.todo.text}</label>
                <button className="destroy" onClick={remove}></button>
            </div>
            <input className="edit" value={todo.todo.text} onChange={edit} onKeyDown={editCancel}/>
        </li>
    )
}
