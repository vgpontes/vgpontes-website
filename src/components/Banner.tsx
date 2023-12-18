import Image from "react-bootstrap/Image";
import React from "react";
import "./Banner.css"

function Banner() {
    return (
        <div className="parentContainer">
            <Image className="banner" src={require('../images/banner.jpg')} fluid/>
            <div className="centered">
                <div className="bannerText">
                    <p className="superscript">Hi, I'm</p>
                    <h1 className="headerText">Victor</h1>
                </div>
            </div>
        </div>
    );
}

export default Banner;