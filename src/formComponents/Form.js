import React from 'react';
import {withRouter} from 'react-router-dom';
import Description from './Description.js';
import FormContent from './FormContent'

class Form extends React.Component{
    render(){
        return(
            <div>
                <Description/>
                <FormContent/>
                <FormContent/>
            </div>
        )
    }
}

export default withRouter(Form);