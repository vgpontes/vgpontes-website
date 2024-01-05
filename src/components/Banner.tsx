import Image from "react-bootstrap/Image";
import React, {useEffect} from "react";
import bannerImage from "../images/banner.jpg"
import "./Banner.css"

interface BannerProps {
    onRender?: () => void;
}

function Banner({ onRender }: BannerProps) {
    useEffect(() => {
        if (onRender) {
            onRender();
        }
    }, [onRender])

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