import React from 'react';

//Imports de Icones
import soma from './icons/soma.png';
//import sub from '../components/icons/subtracao.png';
//import multiplicacao from '../components/icons/multiplicacao.png';
//import divisao from '../components/icons/divisao.png';
//import igual from '../components/icons/igual.png';

export default props =>  // propriedade de um componente é passada como parametro 
    <button className=
    //verificando o operador espaço / laranja e aplicando 
    {`botao 
            ${props.espaco ?  'espaco' : ''} 
            ${props.laranja ?  'laranja' : ''}`}
        onClick={e =>(props.click && props.click(props.rotulo)) }>
            
             <img src={soma} alt="Soma"/>    
    </button>