import React, {PureComponent} from 'react';
import styled, { ThemeProvider } from 'styled-components';



export default class UserForm extends PureComponent {
      state= {
          name: this.props.user.name,
          phones: this.props.user.phones,
          email: this.props.user.email,
          password: this.props.user.password,
          colors: 'white',
      }
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);

    //   setChange = () => {
    //       this.setState({name: })
    //   }
    addNewPhone = () => { 
        this.setState({phones: [...this.state.phones,{number: '', type: 'home'}]})
    }
    delNumber = (index) => {
        this.setState(state => ({
            phones: state.phones.filter( (p, i) => i != index)
        }));
    }

    onChangeNumber = (event, index) => {
        this.setState(state => ({
            phones: state.phones.map((p,i)=> (i === index) ? { ...p, number: event.target.value } : p )         
        }))
    }

    onChangeType = (event, index) => {
        this.setState(state => ({
            phones: state.phones.map((p,i)=> (i === index) ? { ...p, type: event.target.value } : p )         
        }))
    }
        
    handleChange(event) {
        this.setState({name: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => ({
            colors: state.phones.map((p) => (p.number.match(/^\d+$/)) ? '#C2E0C6' : '#F9D0C4')
        }))
    }
    
    
render (){
    return (
    <div className="container p-5">
        <form id="user-form">
            <div className="form-group">
                <label>П.І.Б.</label>
                <input type="text" name="full_name" className="form-control" value={this.state.name} onChange={this.handleChange}/>
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
                    <Input inputColor={this.state.colors[index]} type="text" className="form-control" value={ phone.number } onChange={(event) => this.onChangeNumber(event, index) }/>
                    <select value={phone.type} className="custom-select" onChange={(event) => this.onChangeType(event, index) }>
                        <option value="home">Домашній</option>
                        <option value="mobile">Мобільний</option>
                    </select>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={(e) => this.delNumber(index)}>Видалити</button>
                    </div>
                </div>
            ) )}
            
            <button type="button" className="btn btn-primary" onClick={this.addNewPhone}>Add phone number</button>

            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
    </div>
    )
}
}

const Input = styled.input`
    background-color: ${props => props.inputColor || 'white'};
`;