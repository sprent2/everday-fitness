import React from 'react';
import TweetEmbed from 'react-tweet-embed'


const reviews= () => {
    return(

        <section className="bg-primary" id="reviews">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center reviews-content">
                <h2 className="section-heading">Hear what people are saying!</h2>
                <hr className="light my-4"/>
            </div>
            </div>
        </div>
        <div className="container p-0">
            <div className="row ">
            <div className="col-lg-4 col-sm-6">
                <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }}/>
            </div>
            <div className="col-lg-4 col-sm-6">
                <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </div>
            <div className="col-lg-4 col-sm-6">
                <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </div>
            <div className="col-lg-4 col-sm-6">
                <TweetEmbed id='692527862369357824'  options={{cards: 'hidden' }}/>
            </div>
            <div className="col-lg-4 col-sm-6">
                <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </div>
            <div className="col-lg-4 col-sm-6">
                <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
            </div>
            </div>
        </div>
        </section>

    )
}

export default reviews;