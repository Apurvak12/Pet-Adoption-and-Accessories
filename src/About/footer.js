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
                    <i class="fa-solid fa-map-pin"></i>
                        <p><span>Nagpur</span> Maharashtra</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-phone-volume"></i>
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
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
