import React, {useEffect} from "react";
import { addTask } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import io from 'socket.io-client';
export const  socket = io.connect('http://localhost:3001');
   
// возвращает уникальный короткий ID в заданном числовом диапазоне
function getRandomID(min, max) {
    var int = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return int.toString(36);
  }

export default function Header() {
    const dispatch = useDispatch();
    const addTodo = (e) => {
        if (e.key === 'Enter'){
            let id = getRandomID(0, 1000)
            let text = e.target.value;
            socket.emit("newTodo", {text, id})
            
            e.target.value = ''
        }
    }
    
    

    useEffect(() => {
        socket.on('newTodo', ({text, id}) => {
            // let text = data
            console.log(text)
            dispatch(addTask({text, id}));
        })
        
        // fetch('http://localhost:3001/',{method: 'GET'})
        // .then(res => res.json())
        // .then(list => {
        //     if (list){
        //         list.map(item => {
        //             let {text, complited, id} = item
        //             console.log(text)
        //             console.log(complited)
        //             dispatch(addTask({text, complited, id}))
        //         })
        //     }
        // }
            
        // )
    },[])

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={addTodo} autoFocus/>
        </header>
    )
}