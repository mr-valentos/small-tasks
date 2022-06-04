import React, {PureComponent, useContext} from "react";
import SomeContext from "./Context";

export default function UserStatus () {
    const context = useContext(SomeContext)

    return (
        <UserSt 
            admin={context}
        />  
    )
}

class UserSt extends PureComponent{
    state = {
        admin: this.props.admin
    }
    onClickChange = () => {
        this.setState(state => {
            return {admin: !state.admin}})
    }
    
    render (){
        let admin = this.state.admin;
        let bntValue;
        if (admin){
            admin = "адміністратор"
            bntValue = "Змінити на звичайного користувача"
        } else {
            admin = "не є адміністратором"
            bntValue = "Стати адміністратором"
        }
        return (
            <div className="status">
                <h1>Цей корыстувач {admin}</h1>
                <button type="button" className="btn btn-primary" onClick={this.onClickChange}>{bntValue}</button>
                <p></p>
            </div>
            
            
        )
    }
}