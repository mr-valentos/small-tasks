import React from "react";
import { addTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();
    const addTodo = (e) => {
        if (e.key === 'Enter'){
            let text = e.target.value;
            dispatch(addTask({text}));
            e.target.value = ''
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={addTodo} autoFocus/>
        </header>
    )
}