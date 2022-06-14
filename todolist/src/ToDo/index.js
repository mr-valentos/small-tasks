import React, {PureComponent} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from './Header'
import Main from './Main'
import Footer from "./footer";

export default function ToDo () {
    
    return(
        <div>
        <Header/>
        <Main/>
        <Footer/>
        </div>
    )
}