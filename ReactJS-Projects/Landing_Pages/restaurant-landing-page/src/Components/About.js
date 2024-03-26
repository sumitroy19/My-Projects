import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function About() {
    return <div id="About" className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-text-container">
            <p className="subprimary-header">About</p>
            <h1 className="primary-header">
                Your Favorite Food Delivered Hot & Fresh
            </h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magnam iure dolore illum nesciunt praesentium laborum sequi.
            </p>
            <p className="primary-text" >
                Ipsam labore aperiam. Tenetur eaque provident modi quod rerum quos commodi.
            </p>
        <div className="about-button-section">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
                <BsFillPlayCircleFill /> {" "} Watch Video
            </button>
        </div>
        </div>
    </div>
}