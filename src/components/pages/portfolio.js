import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <section className="projects_area p_120">
            <div className="container">
                <div className="main_title">
                    <h2>Our Recent Completed Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                <div className="projects_fillter">
                    <ul className="filter list">
                        <li className="active" data-filter="*"><Link to="#">All Categories</Link></li>
                        <li data-filter=".brand"><Link to="#">Branding</Link></li>
                        <li data-filter=".work"><Link to="#">Creative Work </Link></li>
                        <li data-filter=".web"><Link to="#">Web Design</Link></li>
                    </ul>
                </div>
                <div className="projects_inner row">
                    <div className="col-lg-4 col-sm-6 brand web">
                        <div className="projects_item">
                            <img className="img-fluid" src="img/projects/projects-1.jpg" alt="" />
                            <div className="projects_text">
                                <Link to="portfolio-details.html"><h4>3D Helmet Design</h4></Link>
                                <p>Client Project</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 brand work">
                        <div className="projects_item">
                            <img className="img-fluid" src="img/projects/projects-2.jpg" alt="" />
                            <div className="projects_text">
                                <Link to="portfolio-details.html"><h4>3D Helmet Design</h4></Link>
                                <p>Client Project</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 work">
                        <div className="projects_item">
                            <img className="img-fluid" src="img/projects/projects-3.jpg" alt="" />
                            <div className="projects_text">
                                <Link to="portfolio-details.html"><h4>3D Helmet Design</h4></Link>
                                <p>Client Project</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 brand web">
                        <div className="projects_item">
                            <img className="img-fluid" src="img/projects/projects-4.jpg" alt="" />
                            <div className="projects_text">
                                <Link to="portfolio-details.html"><h4>3D Helmet Design</h4></Link>
                                <p>Client Project</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 brand work">
                        <div className="projects_item">
                            <img className="img-fluid" src="img/projects/projects-5.jpg" alt="" />
                            <div className="projects_text">
                                <Link to="portfolio-details.html"><h4>3D Helmet Design</h4></Link>
                                <p>Client Project</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 brand work web">
                        <div className="projects_item">
                            <img className="img-fluid" src="img/projects/projects-6.jpg" alt="" />
                            <div className="projects_text">
                                <Link to="portfolio-details.html"><h4>3D Helmet Design</h4></Link>
                                <p>Client Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;