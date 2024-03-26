import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

export default function Testimonial() {
    return <div id="Testimonial" className="sub-section-wrapper">
        <div className="sub-section-top">
            <p className="subprimary-header">Testimonial</p>
            <h1 className="primary-header">What They Are Saying</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non etelit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            </div>
            <h2>John Doe</h2>
      </div>
    </div>
}