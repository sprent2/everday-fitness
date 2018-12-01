import React from 'react';

const Services = () => {
    return (
        <section id="services">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading">At Your Service</h2>
                <hr class="my-4"/>
            </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
            <div class="col-lg-4 col-md-6 text-center">
                <div class="service-box mt-5 mx-auto">
                <i class="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"></i>
                <h3 class="mb-3">Fitness Plan</h3>
                <p class="text-muted mb-0">Plan catered to your individual health goals</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
                <div class="service-box mt-5 mx-auto">
                <i class="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2"></i>
                <h3 class="mb-3">Fitness App</h3>
                <p class="text-muted mb-0">App to track your successes and your progress</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
                <div class="service-box mt-5 mx-auto">
                <i class="fas fa-4x fa-code text-primary mb-3 sr-icon-3"></i>
                <h3 class="mb-3">Information Newsletter</h3>
                <p class="text-muted mb-0">Fresh content delivered monthly</p>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Services;