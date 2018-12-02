import React from 'react'

const About = () =>{
  
    return (
    <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>We Help You Live Your Best Life</strong>
            </h1>
            <hr/>
          </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5">We will work with you to build a fitness plan that is catered to your lifestyle and interests. We will include a nutrition plan along with the fitness plan to ensure your health success</p>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
          </div>
        </div>
      </div>
    </header>
    )
}

export default About;