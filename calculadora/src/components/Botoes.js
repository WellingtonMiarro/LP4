import React from 'react';
import './Botoes.css';

export default props =>  // propriedade de um componente é passada como parametro 
    <button className=
    //verificando o operador espaço / laranja e aplicando 
    {`botao 
            ${props.espaco ?  'espaco' : ''} 
            ${props.laranja ?  'laranja' : ''}`}
        onClick={e =>(props.click && props.click(props.rotulo)) } 
    >

        {props.rotulo}
    </button>

