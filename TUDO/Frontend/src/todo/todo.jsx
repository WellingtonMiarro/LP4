import React, { Component } from 'react';
import PageHeader from '../tamplete/pageHearder';
import axios from 'axios';

import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3001/api/todos';
const URL_JAVA = 'http://localhost:8081/api/javatodos/'; //Backend em Java

export default class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {description: '', list:[]} 

        this.handleChanger = this.handleChanger.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);   
        this.refrech();
    }

    handleChanger(e){
        this.setState({...this.state, description: e.target.value})
    }

    // preciso atualizar meu reflach caso na seja passado nenhuma descricao, ele se torna nulo
    refrech(description = ''){ 
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)//ordenacao oferecida pela api
        .then(resp => this.setState({ ...this.state, description: description, list: resp.data}));
    }
    handleSearch(){
        this.refrech(this.state.description)
    }

    //função de adicionar 
    handleAdd(){
        const description = this.state.description;
        axios.post(URL_JAVA, {description})
        .then( resp => this.refrech());//adicionou? ele atualiza!!!
    }
    handleRemove(todo){
        axios.delete(`${URL_JAVA}/${todo._id}`)
        .then( resp => this.refrech());
    }
    handleClear(){
        this.refrech()
    }
    handleMarkAsDone(todo){
        axios.put(`${URL_JAVA}/${todo._id}`, {...todo, done: true})
        .then( resp => this.refrech(this.state.description));
    }
    handleMarkAsPending(todo){
        axios.put(`${URL_JAVA}/${todo._id}`, {...todo, done: false})
        .then( resp => this.refrech(this.state.description));
    }

    render() {
        return(
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm 
                description={this.state.description}
                handleAdd={this.handleAdd}
                handleChanger={this.handleChanger}
                handleSearch={this.handleSearch}
                handleClear={this.handleClear}
                />
                <TodoList 
                list={this.state.list}
                handleRemove={this.handleRemove}
                handleMarkAsDone={this.handleMarkAsDone}
                handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}