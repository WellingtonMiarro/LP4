import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Todo from '../todo/todo';
import About from '../about/about';

//import todoForm from '../todo/todoForm'; <Route path="/todos" component={todoForm}/>

export default props => (
    <Router history={hashHistory}>
        <Route path="/todos" component={Todo}/>
        <Route path="/about" component={About}/>
        <Redirect from='*' to="/todos"   />
    </Router>
);