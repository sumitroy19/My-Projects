import React from 'react';
import MainBackground from '../Assets/Background_IMG.jpeg';
import GetStatedForm from './GetStartedForm';

export default function MainBanner(){
    return <div id="main-banner" className="main-banner-container">
        <div className="main-bg-img">
            <img src={MainBackground} alt=""/>
        </div>
        <div className="main-banner-text-wrapper">
            <div className="main-banner-text-container">
                <div className="main-banner-header-conatiner">
                    <div className="h1">
                        <h1 className="primary-heading">Unlimited movies, TV shows and more</h1>
                    </div>
                    <div className="h2">
                        <h2 className="secondary-heading">Watch anywhere. Cancel anytime.</h2>
                    </div>
                </div>
                <div className="main-banner-form-container">
                    <GetStatedForm /> 
                </div>
            </div> 
        </div>
    </div>
}