import React from 'react';
import Grid from '../tamplete/grid';
import Button from '../tamplete/iconButton';

export default props => (
    <div role="from" className="todoFrom">
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicionar tarefa'></input>
        </Grid> 
        
        <Grid cols='12 3 2'>
            <Button style="primary" icon='plus'></Button>
        </Grid>
    </div>
);