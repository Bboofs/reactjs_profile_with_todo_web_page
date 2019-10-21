import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <section className="latest_blog_area p_120">
            <div className="container">
                <div className="main_title">
                    <h2>Latest Posts from Blog</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                </div>
                <div className="row latest_blog_inner">
                    <div className="col-lg-4">
                        <div className="l_blog_item">
                            <div className="l_blog_img">
                                <img className="img-fluid" src="img/blog/home-blog/home-blog-1.jpg" alt="" />
                            </div>
                            <div className="l_blog_text">
                                <div className="date">
                                    <Link to="#">25 October, 2017  |  By Mark Wiens</Link>
                                </div>
                                <Link to="#"><h4>Addiction When Gambling Becomes A Problem</h4></Link>
                                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="l_blog_item">
                            <div className="l_blog_img">
                                <img className="img-fluid" src="img/blog/home-blog/home-blog-2.jpg" alt="" />
                            </div>
                            <div className="l_blog_text">
                                <div className="date">
                                    <Link to="#">25 October, 2017  |  By Mark Wiens</Link>
                                </div>
                                <Link to="#"><h4>Make Myspace Your Best Designed Space</h4></Link>
                                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="l_blog_item">
                            <div className="l_blog_img">
                                <img className="img-fluid" src="img/blog/home-blog/home-blog-3.jpg" alt="" />
                            </div>
                            <div className="l_blog_text">
                                <div className="date">
                                    <Link to="#">25 October, 2017  |  By Mark Wiens</Link>
                                </div>
                                <Link to="#"><h4>Video Games Playing With Imagination</h4></Link>
                                <p>Computers have become ubiquitous in almost every facet of our lives. At work, desk jockeys spend hours in front of their desktops, while delivery people scan bar codes with handhelds and workers in the field stay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;