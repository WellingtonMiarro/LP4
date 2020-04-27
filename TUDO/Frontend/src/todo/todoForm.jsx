import React from 'react';
import Grid from '../tamplete/grid';
import Button from '../tamplete/iconButton';

/**
 * Grid =  onClick={props.handleAdd} 
 *  vai ser passado como parametro um função handleAdd, vai lidar com o fato de adicionar
 */

export default props => (
    <div role="from" className="todoFrom">
        <Grid cols='12 9 10'>
            <input 
            id='description' 
            className='form-control' 
            placeholder='Adicionar tarefa' 
            value={props.description}
            onChange={props.handleChanger} ></input>
        </Grid> 
        
        <Grid cols='12 3 2'>   
            <Button style="primary" icon='plus' onClick={props.handleAdd}></Button>
        </Grid>
    </div>
);