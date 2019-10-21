import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header_area">
            <div className="main_menu" id="mainNav">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container box_1620">
                        { /* <!-- Brand and toggle get grouped for better mobile display --> */}
                        <Link className="navbar-brand logo_h" to="/"><img src="img/logo.gif" alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        { /* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/todo">Todo&nbsp;List&nbsp;API</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                <li className="nav-item submenu dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/portfolio-details">Project Details</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/elements">Elements</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/single-blog">Blog Details</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
