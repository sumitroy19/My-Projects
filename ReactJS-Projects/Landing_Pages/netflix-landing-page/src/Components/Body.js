import React from "react";
import SectionBreak from './SectionBreak';
import FAQ from "./FAQ";
import TVImg from "../Assets/tv.png";
import MobileImg from "../Assets/mobile.jpg";
import AllDevicesImg from "../Assets/multi_device.png";
import ChildrenImg from "../Assets/children_netflix.png"

export default function Body() {
    return <div>
        <SectionBreak />
        <div className="secondary-banner">
            <div className="secondary-banner-content-conatiner">
                <div className="header-conatiner">
                    <div className="h1">
                        <h1 className="primary-heading">Enjoy on your TV</h1>
                    </div>
                    <div className="h2">
                        <h2 className="secondary-heading">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                    </div>
                </div>
                <div className="image-conatiner">
                    <img src={TVImg} alt="tv" />
                </div>
            </div>
        </div>
        <SectionBreak />
        <div className="secondary-banner">
            <div className="secondary-banner-content-conatiner">
                <div className="image-conatiner">
                    <img src={MobileImg} alt="tv" /> 
                </div>
                <div className="header-conatiner">
                    <div className="h1">
                        <h1 className="primary-heading">Download your shows to watch offline</h1>
                    </div>
                    <div className="h2">
                        <h2 className="secondary-heading">Save your favourites easily and always have something to watch.</h2>
                    </div>
                </div>
            </div>
        </div>
        <SectionBreak />
        <div className="secondary-banner">
            <div className="secondary-banner-content-conatiner">
                <div className="header-conatiner">
                    <div className="h1">
                        <h1 className="primary-heading">Watch everywhere</h1>
                    </div>
                    <div className="h2">
                        <h2 className="secondary-heading">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                    </div>
                </div>
                <div className="image-conatiner">
                    <img src={AllDevicesImg} alt="tv" />
                </div>
            </div>
        </div>
        <SectionBreak />
        <div className="secondary-banner">
            <div className="secondary-banner-content-conatiner">
                <div className="image-conatiner">
                    <img src={ChildrenImg} alt="tv" />
                </div>
                <div className="header-conatiner">
                    <div className="h1">
                        <h1 className="primary-heading">Create profiles for kids</h1>
                    </div>
                    <div className="h2">
                        <h2 className="secondary-heading">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                    </div>
                </div>
            </div>
        </div>
        <SectionBreak />
        <FAQ />
        <SectionBreak />
    </div>
}