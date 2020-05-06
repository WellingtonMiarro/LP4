import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import '../tamplete/custom.css';

import React from 'react';
import Menu from '../tamplete/menu';
import Rotas from './routes';

export default props => (
    <div className='container'>
        <Menu/>
        <Rotas/>
    </div>
);