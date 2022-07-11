import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompleted, active, completed, all } from "../store/todoSlice";
import { Link } from "react-router-dom";
import {socket} from "./Header"

export default function Footer () {
    const todos = useSelector(state => state.todos.todos);
    const sort = useSelector(state => state.todos.sort);
    const dispatch = useDispatch();
    
    const delCompleted = () => socket.emit('delCompleted', '')

    const sortActive = () => dispatch(active())
    const sortCompleted = () => dispatch(completed())
    const sortAll = () => dispatch(all())

    useEffect(()=> {
        socket.on('delCompleted', () => dispatch(deleteCompleted()))
    },[socket])

    let counter = todos.filter(p => p.complited === false).length;
    let counterOfCompleted = todos.filter(p => p.complited === true).length;
    
    let firstBtn, secondBtn, thirdBtn;
    if (sort.sortOn){
        if (sort.active){
            secondBtn = "selected"
        } 
        if (!sort.active){
            thirdBtn = "selected"
        } 
    } else {
        firstBtn = "selected"
    }

    if (todos.length !== 0){
        return (
            <footer className="footer">
            <span className="todo-count"><strong>{counter}</strong> item left</span>
            <ul className="filters">
                <li>
                    <Link className={firstBtn} to="/" onClick={sortAll}>All</Link>
                </li>
                <li>
                    <Link className={secondBtn} to="/active" onClick={sortActive}>Active</Link>
                </li>
                <li>
                    <Link className={thirdBtn} to="/completed" onClick={sortCompleted}>Completed</Link>
                </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <>{(counterOfCompleted !== 0) ? <button  className="clear-completed" onClick={delCompleted}>Clear completed</button> : <></>}</>
            </footer>
        )
    }
}