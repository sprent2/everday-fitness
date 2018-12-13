import React from 'react';
import {withRouter} from 'react-router-dom';
import Description from './Description.js';

class Form extends React.Component{
    render(){
        return(
            <div>
                <Description/>
            </div>
        )
    }
}

export default withRouter(Form);