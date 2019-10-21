import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Footer extends Component {
    state = {
        email: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        //this.props.footer(this.state.email);
        alert("Cool " + this.state.email + ", the functionality is yet to be done!!")
        this.setState({ email: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <footer className="footer_area p_120">
                <div className="container">
                    <div className="row footer_inner">
                        <div className="col-lg-5 col-sm-6">
                            <aside className="f_widget ab_widget">
                                <div className="f_title"><h3>About Me</h3></div>
                                <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                                <p>
                                    { /* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    Copyright &copy;2019 All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                                    { /* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                </p>
                            </aside>
                        </div>
                        <div className="col-lg-5 col-sm-6">
                            <aside className="f_widget news_widget">
                                <div className="f_title"><h3>Newsletter</h3></div>
                                <p>Stay updated with our latest trends</p>
                                <div id="mc_embed_signup">
                                    <form onSubmit={this.onSubmit} className="subscribe_form relative">
                                        <div className="input-group d-flex flex-row">
                                            { /* <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email" /> */}
                                            <input name="email" placeholder="Enter email address" required="" type="email" />
                                            <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>
                                        </div>
                                        <div className="mt-10 info"></div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-2">
                            <aside className="f_widget social_widget">
                                <div className="f_title">
                                    <h3>Follow Me</h3>
                                </div>
                                <p>Let us be social</p>
                                <ul className="list">
                                    <li><a target="_blank" href="https://twitter.com/McOluga" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/in/mcoluga/" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a target="_blank" href="https://t.me/McOluga" rel="noopener noreferrer"><i className="fa fa-telegram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook" rel="noopener noreferrer"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble" rel="noopener noreferrer"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance" rel="noopener noreferrer"></i></a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

// PropTypes
Footer.propTypes = {
    footer: PropTypes.func.isRequired
}

export default Footer
