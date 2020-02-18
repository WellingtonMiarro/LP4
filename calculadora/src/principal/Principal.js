import React, {Component} from 'react';
import './Principal.css';


import Botoes from '../components/Botoes';
import Display from '../components/Dispaly';

const estadoInicial = {
    valorExibido: '0'
}

export default class Principal extends Component{

    state = {...estadoInicial};

    constructor(props){
         super(props);

        this.adicionarDigito = this.adicionarDigito.bind(this);
        this.limpar = this.limpar.bind(this);
    }
       limpar(){
           this.setState({...estadoInicial})
       }

    adicionarDigito(n){
        //verificando se pode colocar mais de um ponto
        if(n === '.' && this.state.valorExibido.includes('.'))
        return;

        //verificando o ZERO inicial
        let valor= '';
        if(this.state.valorExibido !== '0'){
            valor = this.state.valorExibido
        }

        // pega o valor e adiciona e atualiza o estado do componente passando um novo valor
        valor  += n ; 
        this.setState({valorExibido: valor})
        //console.log(n)
    }

    render(){
        return(
            <div className='principal'>
                <Display valor={this.state.valorExibido}/>
                <Botoes rotulo="AC" espaco click={this.limpar}/>
                <Botoes rotulo="%"/>
                <Botoes rotulo="/" laranja/>
                <Botoes rotulo="7" click={this.adicionarDigito}/>
                <Botoes rotulo="8" click={this.adicionarDigito}/>
                <Botoes rotulo="9" click={this.adicionarDigito}/>
                <Botoes rotulo="X" laranja/>
                <Botoes rotulo="4" click={this.adicionarDigito}/>
                <Botoes rotulo="5" click={this.adicionarDigito}/>
                <Botoes rotulo="6" click={this.adicionarDigito}/>
                <Botoes rotulo="-" laranja/>
                <Botoes rotulo="1" click={this.adicionarDigito}/>
                <Botoes rotulo="2" click={this.adicionarDigito}/>
                <Botoes rotulo="3" click={this.adicionarDigito}/>
                <Botoes rotulo="+" laranja/>
                <Botoes rotulo="0" espaco click={this.adicionarDigito}/>
                <Botoes rotulo="." click={this.adicionarDigito}/>
                <Botoes rotulo="="laranja/>
                
            </div>
        )
    }
}