import Image from "react-bootstrap/Image";
import React from "react";
import bannerImage from "../images/banner.jpg"
import "./Banner.css"

function Banner() {
    return (
        <div className="parentContainer">
            <Image className="banner" src={bannerImage} fluid/>
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