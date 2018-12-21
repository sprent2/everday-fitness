import React from 'react';

const Description = () => {

    return (
        <section className="bg-primary" id="about">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">We've got what you need!</h2>
                <hr className="light my-4" />
                <p className="text-faded mb-4">
                The hardest part of any fitness change is getting started. We take care of that part for you. 
                Fill out the form below and we will make a personalized fitness plan.  
                We will also inclued a health plan that will help you reach all of your health goals.
                </p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href='#form'>Get Started!</a>
            </div>
            </div>
        </div>
        </section>
    )
}


export default Description;