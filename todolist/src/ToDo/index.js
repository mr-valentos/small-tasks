import React, {PureComponent} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from './Header'
import Main from './Main'
import Footer from "./footer";
import Test from "./test";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

function ToDo2 () {
    
    return(
        <div> 
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default function ToDo() {
    const todos = useSelector(state => state.todos.todos);
    const todosActive = todos.filter(p => p.complited === false)
    const todosCompleted = todos.filter(p => p.complited === true)
    return (
        <Routes>
        <Route path="/" element={<ToDo2 />}>
            <Route index element={<Main todos={todos}/>} />
            <Route path="active" element={<Main todos={todosActive}/>} />
            <Route path="completed" element={<Main todos={todosCompleted}/>} />
            <Route path=":id" element={<Main todos={todos}/>} />
        </Route>
        </Routes>
    )
}