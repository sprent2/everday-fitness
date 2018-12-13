import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Form from './formComponents/Form.js';

const Routes = () => {
    return (
        <div>
            <Route exact path= '/' component = { App }/>
            <Route exact path = '/form' component = { Form }/>
        </div>
    )
}

export default Routes;