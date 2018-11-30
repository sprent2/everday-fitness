import React from 'react'

const About = () =>{
  const handleClick = () => {

  }
    return (
    <header class="masthead text-center text-white d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h1 class="text-uppercase">
              <strong>We Help You Live Your Best Life</strong>
            </h1>
            <hr/>
          </div>
          <div class="col-lg-8 mx-auto">
            <p class="text-faded mb-5">We will work with you to build a fitness plan that is catered to your lifestyle and interests. We will include a nutrition plan along with the fitness plan to ensure your health success</p>
            <button class="btn btn-primary btn-xl js-scroll-trigger" >Find Out More</button>
          </div>
        </div>
      </div>
    </header>
    )
}

export default About;