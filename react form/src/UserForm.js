import React, {PureComponent} from 'react';
import styled, { ThemeProvider } from 'styled-components';


export default class UserForm extends PureComponent {
      state= {
          name: this.props.user.name,
          phones: this.props.user.phones,
          email: this.props.user.email,
          password: this.props.user.password,
      }
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);

    //   setChange = () => {
    //       this.setState({name: })
    //   }
    addNewPhone = () => { 
        this.setState({phones: [...this.state.phones,{number: '', type: 'home'}]})
    }
    delNumber = (number) => {
        this.setState(prevState => ({
            phones: prevState.phones.filter(items => items.number != number)
          }));
    }

    onChangeNumber = (event, index) => {
        this.setState(state => ({
            phones: state.phones.map((p,i)=> (i === index) ? { ...p, number: event.target.value } : p )         
        }))
    }
        
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    
    handleSubmit(event) {
        
        event.preventDefault();
    }
    
    
render (){
    return (
    <div className="container p-5">
        <form id="user-form">
            <div className="form-group">
                <label>П.І.Б.</label>
                <Input type="text" name="full_name" className="form-control" value={this.state.name} onChange={this.handleChange}/>
                <small className="form-text text-muted">Обовʼязково прізвище, імʼя та по батькові. Тільки літерами українскього алфавіту</small>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" className="form-control" defaultValue={this.state.email}/>
                <small className="form-text text-muted">Адреса електронної пошти</small>
            </div>
            <div className="form-group">
                <label>Пароль</label>
                <input type="password" name="password" className="form-control" defaultValue={this.state.password}/>
                <small className="form-text text-muted">Мінімум 8 літер. Обовʼязково повинні бути великі та малі літери англійського алфавіту та числа</small>
            </div>
            {this.state.phones.map((phone, index) => (
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={ phone.number } onChange={(event) => this.onChangeNumber(event, index) }/>
                    <select defaultValue={phone.type} className="custom-select">
                        <option defaultValue="home">Домашній</option>
                        <option defaultValue="mobile">Мобільний</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={(e) => this.delNumber(phone.number)}>Видалити</button>
                    </div>
                </div>
            ) )}
            
            <button type="button" className="btn btn-primary" onClick={this.addNewPhone}>Add phone number</button>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}
}

const Input = styled.input`
    background-color: red;
`;