import React from 'react';
import { Link } from 'react-router-dom';

function Testimonials() {
    return (
        <section className="testimonials_area p_120">
            <div className="container">
                <div className="main_title">
                    <h2>Testimonials</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
                </div>
                <div className="testi_inner">
                    <div className="testi_slider owl-carousel">
                        <div className="item">
                            <div className="testi_item">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                                <h4>Fanny Spencer</h4>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star-half-o"></i></Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                                <h4>Fanny Spencer</h4>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star-half-o"></i></Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="testi_item">
                                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her face</p>
                                <h4>Fanny Spencer</h4>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star"></i></Link>
                                <Link to="#"><i className="fa fa-star-half-o"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;