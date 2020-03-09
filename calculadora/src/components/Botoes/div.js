import React from 'react';

import div from './icons/divisao.png';

export default props =>  // propriedade de um componente é passada como parametro 
    <button className=
    //verificando o operador espaço / laranja e aplicando 
    {`botao 
            ${props.espaco ?  'espaco' : ''} 
            ${props.laranja ?  'laranja' : ''}`}
        onClick={e =>(props.click && props.click(props.rotulo)) }>
            
             <img src={div} alt="Divisão"/>    
    </button>