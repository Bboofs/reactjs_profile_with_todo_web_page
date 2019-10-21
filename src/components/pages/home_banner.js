import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className="home_banner_area">
            <div className="banner_inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="home_left_img">
                                <img src="img/banner/home-left-1.jpg" alt="Home Banner" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner_content">
                                <h5>Hey, it's me</h5>
                                <h2>Loogs'</h2>
                                <p>This is a lot more scruffy than I thought but I'm tagging along and holding on tightly, 
                                    hoping to get there. After striving to import this template into React JS, to reach this point was some real hurdle.
                                    <br />Sadly, the original template does more than what is here. Especially the animations have all gone, but it's a WIP.
                                    <br />Please link up with me:</p>
                                <ul>
                                    <li><a target="_blank" href="https://twitter.com/McOluga" rel="noopener noreferrer"><i className="fa fa-twitter"></i> Twitter: @McOluga</a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/in/mcoluga/" rel="noopener noreferrer"><i className="fa fa-linkedin"></i> LinkedIn: @McOluga</a></li>
                                    <li><a target="_blank" href="https://t.me/McOluga" rel="noopener noreferrer"><i className="fa fa-telegram"></i> Telegram: @McOluga</a></li>
                                    <li><a href="#"><i className="fa fa-facebook" rel="noopener noreferrer"></i> Facebook: @Coming soon...</a></li>
                                    <li><a href="#"><i className="fa fa-dribbble" rel="noopener noreferrer"></i> Dribble: @Coming soon...</a></li>
                                    <li><a href="#"><i className="fa fa-behance" rel="noopener noreferrer"></i> Behance: @Coming soon...</a></li>
                                </ul>
                                <Link className="banner_btn" to="#">Discover Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
