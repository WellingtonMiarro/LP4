import React, {Component} from 'react';
import './Principal.css';


import Botoes from '../components/Botoes';
import Display from '../components/Dispaly';

//Import dos Boteos 
import Soma from '../components/Botoes/soma';
import Sub from '../components/Botoes/sub';
import Mult from '../components/Botoes/mult';
import Div from '../components/Botoes/div';
import Mod from '../components/Botoes/mod';
import Igual from '../components/Botoes/igual';




//import soma from '../components/icons/soma.png';

const estadoInicial = {
    valorExibido: '0',
    valores:[0, 0, 0],
    operacao: null,
    atual: 0,  //pra saber qual posicao esta trabalhando 
    limpaDisplay: false // limpar quando clicar em alguma operacao
}

export default class Principal extends Component{

    state = {...estadoInicial};

    constructor(props){
         super(props);

        this.adicionarDigito = this.adicionarDigito.bind(this);
        this.realizarOperacao = this.realizarOperacao.bind(this);
        this.limpar = this.limpar.bind(this);
    }
       limpar(){
           this.setState({...estadoInicial})
       }

       realizarOperacao(operacao){
            if(this.state.atual === 0){
                this.setState({ operacao: operacao, atual: 1, limpaDisplay: true})
            }else{
                const opCorente = this.state.operacao;

                const valores = [...this.state.valores];

                switch(opCorente){
                    ///Operação de Soma
                    case'+':
                    valores[0] = valores[0] + valores[1];
                    valores[1] = 0;
                    break;

                    //Operação de Subtração
                    case'-':
                    valores[0] = valores[0] - valores[1];
                    valores[1] = 0;
                    break;

                    //Operação de Subtração
                    case'x':
                    valores[0] = valores[0] * valores[1];
                    valores[1] = 0;
                    break;

                    //Operação de Divisao
                    case'/':
                    valores[0] = valores[0] / valores[1];
                    valores[1] = 0;
                    break;

                     //Operação de Mode
                     case'%':
                     valores[0] = valores[0] % valores[1];
                     valores[1] = 0;
                     break;
 

                    default:
                        break;
                }
                this.setState({
                        valorExibido: valores[0],
                        valores: valores,
                        limpaDisplay: true,
                        operacao: operacao === "=" ? null : opCorente,
                        atual: operacao === "=" ? 0 : 1,
                       
                    })
            }

       }

    adicionarDigito(n){
        //verificando se pode colocar mais de um ponto
        if(n === '.' && this.state.valorExibido.includes('.'))
        return;

        //verificando o ZERO inicial
        let valor= '';
        if(this.state.valorExibido !== '0' || n === '.'){
            valor = this.state.valorExibido
        }
        valor = this.state.limpaDisplay ? '' : valor // pegando o valor e atribuindo zero caso o limpaDisplay seja TRUE 

        // pega o valor e adiciona e atualiza o estado do componente passando um novo valor
        valor  += n ; 
        this.setState({valorExibido: valor, limpaDisplay: false})
        //console.log(n)
        if(n !=='.'){
            const valores = [...this.state.valores];
            valores[this.state.atual] = parseFloat(valor);
            this.setState({valores: valores})
        }
    }

    render(){
        return(
            <div className='principal'>
                <Display valor={this.state.valorExibido}/>
                <Botoes rotulo="AC" espaco click={this.limpar}/>
                <Mod rotulo="%"  click={this.realizarOperacao}/>
                <Div rotulo="/" laranja click={this.realizarOperacao}/>
                <Botoes rotulo="7" click={this.adicionarDigito}/>
                <Botoes rotulo="8" click={this.adicionarDigito}/>
                <Botoes rotulo="9" click={this.adicionarDigito}/>
                <Mult rotulo="x" laranja click={this.realizarOperacao}/>
                <Botoes rotulo="4" click={this.adicionarDigito}/>
                <Botoes rotulo="5" click={this.adicionarDigito}/>
                <Botoes rotulo="6" click={this.adicionarDigito}/>
                <Sub rotulo="-" laranja click={this.realizarOperacao}/>
                <Botoes rotulo="1" click={this.adicionarDigito}/>
                <Botoes rotulo="2" click={this.adicionarDigito}/>
                <Botoes rotulo="3" click={this.adicionarDigito}/>
                <Soma rotulo="+" laranja click={this.realizarOperacao}/>
                <Botoes rotulo="0" espaco click={this.adicionarDigito}/>
                <Botoes rotulo="." click={this.adicionarDigito}/>
                <Igual rotulo="="laranja click={this.realizarOperacao}/>
                
            </div>
        )
    }
}