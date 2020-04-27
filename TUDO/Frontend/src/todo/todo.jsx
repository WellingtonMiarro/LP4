import React, { Component } from 'react';
import PageHeader from '../tamplete/pageHearder';
import axios from 'axios';

import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3001/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {description: '', list:[]} 

        this.handleChanger = this.handleChanger.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChanger(e){
        this.setState({...this.state, description: e.target.value})
    }

    //função de adicionar 
    handleAdd(){
        const description = this.state.description;
        axios.post(URL, {description})
        .then( resp =>console.log("funciounou ?"));
    }
    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                description={this.state.description}
                handleAdd={this.handleAdd}
                handleChanger={this.handleChanger}/>
                <TodoList/>
            </div>
        )
    }
}