import React from 'react';


const FormContent = () => {
    return (
        <div className= "container">
            <div className = "row">
                <div className = "form-card">
                    <form>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name"/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name"/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
        
        
    )
}
export default FormContent;


