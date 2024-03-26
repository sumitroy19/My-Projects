import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";

export default function NavBar() {
    return <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Testimonial">Testimonials</a>
            <a href="#Contact">Contact</a>
            <a href="">
                <BsCart2 className="navbar-cart-icon" />
            </a>
            <button className="primary-button">Book Now</button>
        </div>
    </nav>;
}