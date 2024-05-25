import React, { useState, useEffect } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    const closeMenu = () => {
        setToggleMenu(false);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    return (
        <section className="h-wrapper">
            <div className="h-container flexCenter paddings innerWidth">
                <img className="logo" src="./logo.png" alt="logo img" width={240} height={150} />
                <div className={`h-menu ${toggleMenu ? 'active' : ''}`}>
                    {(toggleMenu || screenWidth >= 500) && (
                        <ul className="nav-list">
                            <li>
                                <NavLink 
                                    exact 
                                    className={({ isActive }) => isActive ? 'active_class' : ''} 
                                    to="/" 
                                    onClick={closeMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'active_class' : ''} 
                                    to="/pet-shop" 
                                    onClick={closeMenu}
                                >
                                    Pet Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'active_class' : ''} 
                                    to="/Accessories" 
                                    onClick={closeMenu}
                                >
                                    Accessories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'active_class' : ''} 
                                    to="/contact" 
                                    onClick={closeMenu}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    className={({ isActive }) => isActive ? 'active_class' : ''} 
                                    to="/loginRegister" 
                                    onClick={closeMenu}
                                >
                                    <button className="Button">Login</button>
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
                <button onClick={toggleNav} className="ham"><MenuIcon /></button>
            </div>
        </section>
    );
};

export default Menu;
