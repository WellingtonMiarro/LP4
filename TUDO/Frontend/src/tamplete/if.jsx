import React from 'react';
//componente de verificação 
export default props => {
    if(props.test){
        return props.children
    }else{
        return false
    } 
}