
import React from 'react';
import IF from './if';

/**
 * Codigo foi refatorado
    if(props.hide){
        return null
    }else{
        return (
            <button className={'btn btn-'+ props.style} onClick={props.onClick}> 
                 <i className={'fa fa-'+ props.icon}></i>
            </button>
        )
    }
 */

export default props => (
    <IF test={!props.hide}> 
    <button className={'btn btn-'+ props.style} onClick={props.onClick}> 
        <i className={'fa fa-'+ props.icon}></i>
    </button>
    </IF>  
)