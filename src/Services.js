import React from 'react';

const Services = () => {
    return (
        <section id="services">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading">At Your Service</h2>
                <hr className="my-4"/>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                <i className="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"></i>
                <h3 className="mb-3">Fitness Plan</h3>
                <p className="text-muted mb-0">Plan catered to your individual health goals</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                <i className="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2"></i>
                <h3 className="mb-3">Fitness App</h3>
                <p className="text-muted mb-0">App to track your successes and your progress</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                <i className="fas fa-4x fa-code text-primary mb-3 sr-icon-3"></i>
                <h3 className="mb-3">Information Newsletter</h3>
                <p className="text-muted mb-0">Fresh content delivered monthly</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Services;