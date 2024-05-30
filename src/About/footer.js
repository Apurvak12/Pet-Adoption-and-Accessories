import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>adoptdog</h3>
                    <p className="footer-links">
                        <NavLink to="/">About</NavLink>
                        | 
                        <NavLink to="/pet-shop">Pet shop</NavLink>
                        | 
                        <NavLink to="/contact">Contact</NavLink>
                    </p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Nagpur</span> Maharashtra</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 9********0</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:xyz@gmail.com">xyz@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the organisation</span>
                        AdoptDogo is a revolutionary online platform dedicated to connecting potential dog owners with adorable and loving dogs in need of forever homes.
                        <strong>adoptadoggo</strong> 
                    </p>
                    <div className="footer-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
