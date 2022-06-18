import React, {PureComponent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompleted, active, completed, all } from "../store/todoSlice";

export default function Footer () {
    const todos = useSelector(state => state.todos.todos);
    const sort = useSelector(state => state.todos.sort);
    const dispatch = useDispatch();
    
    const delCompleted = () => dispatch(deleteCompleted());
    const sortActive = () => dispatch(active())
    const sortCompleted = () => dispatch(completed())
    const sortAll = () => dispatch(all())

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
                    <a className={firstBtn} href="#/" onClick={sortAll}>All</a>
                </li>
                <li>
                    <a className={secondBtn} href="#/active" onClick={sortActive}>Active</a>
                </li>
                <li>
                    <a className={thirdBtn} href="#/completed" onClick={sortCompleted}>Completed</a>
                </li>
            </ul>
            {/* <!-- Hidden if no completed items are left ↓ --> */}
            <>{(counterOfCompleted !== 0) ? <button  className="clear-completed" onClick={delCompleted}>Clear completed</button> : <></>}</>
            </footer>
        )
    }
}