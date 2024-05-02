import React from 'react';
import MainLogo from '../Assets/Netflix_Logo.png';
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Header() {
    return <div className="header">
        <div className="header-wrapper">
            <div className="logo-container">
                <img src={MainLogo} alt="Netflix_Logo" className="netflix-logo" />
            </div>
            <div className="buttons-container">
                <div className="lang-conatiner">
                    <TranslateIcon sx={"height: 70%; color: white;"} />
                    <select name="lang" id="lang">
                        <option value="english" selected>English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                    <ArrowDropDownIcon sx="color: white"/>
                </div>
                <div className="signin-butto-container">
                    <button className="signin-button button">Sign In</button>
                </div>
        </div>
        </div>
    </div>
}
