import React from 'react';
import TweetEmbed from 'react-tweet-embed'


const reviews= () => {
    return(

        <section class="p-0" id="portfolio">
      <div class="container-fluid p-0">
        <div class="row no-gutters popup-gallery">
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
            <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }}/>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/2.jpg">
            <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/3.jpg">
            <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/4.jpg">
            <TweetEmbed id='692527862369357824'  options={{cards: 'hidden' }}/>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/5.jpg">
            <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="img/portfolio/fullsize/6.jpg">
            <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </a>
          </div>
        </div>
      </div>
    </section>

    )
}

export default reviews;