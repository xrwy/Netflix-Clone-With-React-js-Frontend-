import React from 'react';
import './body.css';

const Body = () => {
  return (
    <section>
        <div className='p-70-45'>
            <div className="our-story-card-background h-100">
                <div className="concord-img-wrapper">
                    <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/d8ab8724-3169-40b6-a645-2f2e1a8495a0/TR-tr-20221010-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
                    <div className="concord-img-gradient"></div>
                </div>
            </div>
            <div className='our-story-card-text'>
                <h1 className="our-story-card-title">Unlimited movies, TV shows, and more.</h1>
                <h2 className="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
                <form className='form-field'>
                    <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='input-box'>
                        <div className='input-group'>
                            <input 
                            type='text' 
                            name='username' 
                            id='username' 
                            className='input' 
                            required 
                            autoComplete='off' 
                            />
                            <label htmlFor='username' className='input-label'>E Posta Adresi</label>
                            <div className='start-href'>
                                <a href='/'>
                                    Başlayın
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className='p-70-45'>
            <div className='story-card'>
                <div className='story-text-box'>
                    <h1 className='story-title'>Enjoy on your TV.</h1>
                    <h1 className='story-subtitle'>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                    </h1>
                </div>
                <div className='story-img-box'>
                    <div className='img-box'>
                        <img style={{width:'100%',height:'100%'}} src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='' />
                        <div className='video-box'>
                            <video data-uia="our-story-card-video" autoPlay={true} playsInline="" muted={true} loop={true}>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-70-45'>
            <div className='story-card row-reverse'>
                <div className='animation-img-box'>
                    <div className='phone-img-box'>
                        <img style={{height:'auto',width:'100%'}} src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='' />
                        <div className='card-animation'>
                            <div className='flex'>
                                <div className='book-img'>
                                    <img style={{height:'100%',width:'100%'}} src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' alt='' />
                                </div>
                                <div className='texts'>
                                    <h3>Stranger Things</h3>
                                    <p>Downloading...</p>
                                </div>
                            </div>
                            <div className='animation'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='story-text-box pl-3 after-mt-0'>
                    <h1 className='story-title'>Download your shows to watch offline.</h1>
                    <h1 className='story-subtitle'>
                        Save your favorites easily and always have something to watch.
                    </h1>
                </div>
            </div>
        </div>
        <div className='p-70-45'>
            <div className='story-card'>
                <div className='story-text-box'>
                    <h1 className='story-title'>Watch everywhere.</h1>
                    <h1 className='story-subtitle'>
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
                    </h1>
                </div>
                <div className='story-img-box'>
                    <div className='img-box'>
                        <img style={{width:'100%',height:'100%'}} src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png' alt='' />
                        <div className='video-box two'>
                            <video data-uia="our-story-card-video" autoPlay={true} playsInline="" muted={true} loop={true}>
                                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-70-45'>
            <div className='story-card row-reverse'>
                <div className='animation-img-box'>
                    <div className='kids-img-box'>
                        <img style={{height:'100%',width:'100%'}} src='https://occ-0-300-299.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f' alt='' />
                    </div>
                </div>
                <div className='story-text-box pl-3 after-mt-0'>
                    <h1 className='story-title'>Create profiles for kids.</h1>
                    <h1 className='story-subtitle'>
                        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </h1>
                </div>
            </div>
        </div>
        <div className='p-70-45 center'>
            <h1 className='questions'>
                Frequently Asked Questions
            </h1>

            <div className='list' id="accordion">
                <div className="card">
                    <div className="card-header">
                        <a className="btn" data-bs-toggle="collapse" href="#responseone">
                            What is Netflix?
                        </a>
                    </div>
                    <div id="responseone" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        <br /> <br />
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="btn" data-bs-toggle="collapse" href="#responsetwo">
                            How much does Netflix cost?
                        </a>
                    </div>
                    <div id="responsetwo" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 45.99 TL to 93.99 TL a month. No extra costs, no contracts.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="btn" data-bs-toggle="collapse" href="#responsethree">
                            Where can I watch?
                        </a>
                    </div>
                    <div id="responsethree" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        <br /><br />
                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="btn" data-bs-toggle="collapse" href="#responsefour">
                            How do I cancel?
                        </a>
                    </div>
                    <div id="responsefour" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                        Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="btn" data-bs-toggle="collapse" href="#responsefive">
                            What can I watch on Netflix?
                        </a>
                    </div>
                    <div id="responsefive" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a className="btn" data-bs-toggle="collapse" href="#responsesix">
                            Is Netflix good for kids?
                        </a>
                    </div>
                    <div id="responsesix" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        <br /><br/>
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="email-form-title p-0">
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
                <div className='input-box'>
                    <div className='input-group mb-0'>
                        <input 
                        type='text' 
                        name='username' 
                        id='username' 
                        className='input' 
                        required 
                        autoComplete='off' 
                        />
                        <label htmlFor='username' className='input-label'>Email Address</label>
                        <div className='get-started'>
                            <a href='/'>
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Body;
